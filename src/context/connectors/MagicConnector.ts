import { Connector, ConnectorData } from "wagmi";
import type { InstanceWithExtensions, MagicSDKAdditionalConfiguration, MagicSDKExtensionsOption, SDKBase } from '@magic-sdk/provider';
import { OAuthExtension, OAuthProvider } from '@magic-ext/oauth';
import { Magic } from 'magic-sdk';
import { UserRejectedRequestError } from 'viem';
import { createWalletClient, custom, getAddress } from 'viem';

const IS_SERVER = typeof window === 'undefined';

export function normalizeChainId(chainId: string | bigint | number) {
    if (typeof chainId === 'string')
        return Number.parseInt(chainId, chainId.trim().substring(0, 2) === '0x' ? 16 : 10);
    if (typeof chainId === 'bigint')
        return Number(chainId);
    return chainId;
}

export interface MagicOptions {
    apiKey: string;
    accentColor?: string;
    isDarkMode?: boolean;
    customLogo?: string;
    customHeaderText?: string;
}

export enum LoginType {
    Sms,
    Email,
    Social
}

export class MagicCustomConnector extends Connector {
    magicSDK?: InstanceWithExtensions<SDKBase, OAuthExtension[]>;
    magicOptions: MagicOptions;
    magicSdkConfiguration?: MagicSDKAdditionalConfiguration<string, OAuthExtension[]>;

    ready = !IS_SERVER;

    id = 'magic';
    name = 'Custom Magic';

    type: LoginType;
    subtype: OAuthProvider;
    oauthCallbackUrl?: string;

    constructor(config: any, type: LoginType, subtype: OAuthProvider) {
        super(config);
        this.magicOptions = config.options;
        if (!config.options.apiKey) {
            throw new Error('Magic API Key is required. Get one at https://dashboard.magic.link/');
        }
        this.type = type
        this.subtype = subtype
    }

    async connect(): Promise<Required<ConnectorData>> {
        console.log('Connecting to Magic')
        if (!this.magicOptions.apiKey)
            throw new Error('Magic API Key is not provided.');
        const provider = await this.getProvider();
        if (provider?.on) {
            provider.on('accountsChanged', this.onAccountsChanged);
            provider.on('chainChanged', this.onChainChanged);
            provider.on('disconnect', this.onDisconnect);
        }
        // Check if we have a chainId, in case of error just assign 0 for legacy
        let chainId;
        try {
            chainId = await this.getChainId();
        }
        catch {
            chainId = 0;
        }
        console.log('Checking if user is authorized')
        // if there is a user logged in, return the user
        if (await this.isAuthorized()) {
            console.log('Magic user authorized')
            return {
                chain: {
                    id: chainId,
                    unsupported: false,
                },
                account: await this.getAccount(),
            };
        }
        // open the modal and process the magic login steps
        // if (!this.isModalOpen) {
        //     const modalOutput = await this.getUserDetailsByForm(this.enableSMSLogin, this.enableEmailLogin, this.oauthProviders);
        const magic = this.getMagicSDK();
        //     // LOGIN WITH MAGIC USING OAUTH PROVIDER
        //     if (modalOutput.oauthProvider)
        if (this.type === LoginType.Social) {
            await magic?.oauth.loginWithRedirect({
                provider: this.subtype,
                redirectURI: this.oauthCallbackUrl || window.location.href,
            });
        }

            // // LOGIN WITH MAGIC USING EMAIL
            // if (modalOutput.email)
            //     await magic.auth.loginWithMagicLink({
            //         email: modalOutput.email,
            //     });
        //     // LOGIN WITH MAGIC USING PHONE NUMBER
        //     if (modalOutput.phoneNumber)
        //         await magic.auth.loginWithSMS({
        //             phoneNumber: modalOutput.phoneNumber,
        //         });
        
        if (await magic?.user.isLoggedIn()) {
            return {
                account: await this.getAccount(),
                chain: {
                    id: chainId,
                    unsupported: false,
                },
            };
        } else {
            return {
                account: '0x',
                chain: {
                    id: 0,
                    unsupported: false
                },
            }
            // throw new UserRejectedRequestError(Error('User Rejected Request'));
        }
        // }
    }

    async isAuthorized() {
        try {
            const magic = this.getMagicSDK();
            const isLoggedIn = await magic?.user.isLoggedIn();
            if (isLoggedIn)
                return true;
            const result = await magic?.oauth.getRedirectResult();
            return result !== null;
        }
        catch { }
        return false;
    }

    getMagicSDK() {
        if (!this.magicSDK) {
            const magic:any = new Magic(this.magicOptions.apiKey, {
                ...this.magicSdkConfiguration,
                extensions: [new OAuthExtension() as any],
            });
        this.magicSDK = magic;
        return this.magicSDK;
        
        }
    }

    async getAccount() {
        const provider = await this.getProvider();
        const accounts = await provider?.request({
            method: 'eth_accounts',
        });
        const account = getAddress(accounts[0]);
        return account;
    }
    async getWalletClient({ chainId }: { chainId?: number } = {}) {
        const provider = await this.getProvider();
        const account = await this.getAccount();
        const chain = this.chains.find((x) => x.id === chainId) || this.chains[0];
        if (!provider)
            throw new Error('provider is required.');
        return createWalletClient({
            account,
            chain,
            transport: custom(provider),
        });
    }
    async getProvider() {
        const magic = this.getMagicSDK();
        return magic?.rpcProvider;
    }
    onAccountsChanged(accounts: string[]) {
        if (accounts.length === 0 || !accounts[0])
            this.emit('disconnect');
        else
            this.emit('change', { account: getAddress(accounts[0]) });
    }
    onChainChanged(chainId: number) {
        const id = normalizeChainId(chainId);
        const unsupported = this.isChainUnsupported(id);
        this.emit('change', { chain: { id, unsupported } });
    }
    async getChainId() {
        const provider = await this.getProvider();
        if (provider) {
            const chainId = await provider.request({
                method: 'eth_chainId',
                params: [],
            });
            return normalizeChainId(chainId);
        }
        const networkOptions = this.options.magicSdkConfiguration?.network;
        if (typeof networkOptions === 'object') {
            const chainID = networkOptions.chainId;
            if (chainID)
                return normalizeChainId(chainID);
        }
        throw new Error('Chain ID is not defined');
    }
    onDisconnect() {
        this.emit('disconnect');
    }
    async disconnect() {
        try {
            const magic = this.getMagicSDK();
            await magic?.wallet.disconnect();
            this.emit('disconnect');
        }
        catch (error) {
            console.error('Error disconnecting from Magic SDK:', error);
        }
    }
}