import { getChainId, getNetworkUrl } from '@/utils/network';
import { OAuthExtension } from '@magic-ext/oauth';
import { AuthExtension } from '@magic-ext/auth';
import { Magic as MagicBase } from 'magic-sdk';
import { ReactNode, createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Web3 } from 'web3'
import { logout, saveToken } from '@/utils/common';
import { useUser } from './user';
import { createWalletClient, custom, getAddress } from 'viem';
import { SiweMessage } from 'siwe'

export type Magic = MagicBase<AuthExtension & OAuthExtension[]>;

type MagicContextType = {
    magic: Magic | null;
    web3: Web3 | null;
    isConnected: boolean
    isConnecting: boolean
    isRedirecting: boolean
    isReconnecting: boolean
    connectAsync: (subtype: string) => Promise<void>
    connectSocialAsync: (subtype: string) => Promise<void>
    disconnectAsync: () => Promise<void>
};

export function useProvideMagic(): MagicContextType {
    const [magic, setMagic] = useState<Magic | null>(null);
    const [web3, setWeb3] = useState<Web3 | null>(null);

    const [isConnected, setIsConnected] = useState(false)
    const [isRedirecting, setIsRedirecting] = useState(false)

    const [isConnecting, setIsConnecting] = useState(true)
    const [isReconnecting, setIsReconnecting] = useState(true)
    // const [isDisconnected, setIsDisconnected] = useState(true)

    const [magicToken, setMagicToken] = useState('')
    const [magicProvider, setMagicProvider] = useState<string | null>(null)

    const {isLoggedIn, loginAsync} = useUser()

    const [address, setAddress] = useState('')

    // Checks if this is a redirect from magic social login
    useEffect(() => {
        const checkLogin = async () => {
            setIsConnecting(true)
            try {
                if (magic) {
                    console.log('Getting Redirect Result')
                    const result = await magic?.oauth.getRedirectResult();

                    //do stuff with user profile data
                    saveToken(result.magic.idToken, setMagicToken, 'SOCIAL');
                    console.log('Magic token: ' + result.magic.idToken)
                    setMagicProvider('MAGIC')
                    setAddress(result.magic.userMetadata.publicAddress!);
                    setIsConnected(true)
                }
            } catch (e) {
                // console.log('social login error: ' + e);
            }
            setIsConnecting(false)
        };

        checkLogin();
    }, [magic, setMagicToken]);

    //Tries to get user wallet address from magic
    useEffect(() => {
        if (!magic) return

        async function checkAddress() {
            const isLoggedIn = await magic?.user.isLoggedIn();
            if (isLoggedIn) {
                setIsConnected(true)
                
                const metadata = await magic?.user.getInfo();
                if (metadata) {
                    localStorage.setItem('user', metadata?.publicAddress!);
                    setMagicProvider('MAGIC')
                    setAddress(metadata?.publicAddress!);
                }
            } else {
                setIsConnected(false)
                // setIsDisconnected(true)
                // setIsConnecting(false)
            }
            setIsReconnecting(false)
        }
        checkAddress()

        // if (magicToken.length > 0) {
        //     setIsReconnecting(true)
        //     // setIsConnected(true)
        //     // setIsDisconnected(false)
        // } else {
        //     setIsConnected(false)
        //     setIsDisconnected(true)
        // }
    }, [magic])

    //Logins to backend, using SIWE procedure, works only if user is not loggedIn
    useEffect(() => {
        if (isLoggedIn) return

        if (magic === null) return
        if (address === null || address.length === 0) return
        if (magicProvider === null) return

        console.log('SIWE2')

        async function signMessageAsync(message: SiweMessage) {
            if (magicProvider === 'MAGIC' && magic !== null && address !== null && address.length > 0) {

                const account = getAddress(address)

                const walletClient = createWalletClient({
                    account,
                    // chain: ,
                    transport: custom(magic?.rpcProvider)
                })


                if (walletClient === null) return

                console.log('logging in to backend using magic')
                const signedMessage = await walletClient.signMessage({
                    message: message.prepareMessage()
                })

                console.log("signedMessage:", signedMessage);

                try {
                 await loginAsync(message.prepareMessage(), signedMessage)
                } catch (e) {
                    console.log('Failed to get JWT token', e)
                }
            }
        }

        async function backendLogin() {
            console.log('logging in to backend', magicProvider)

            const chainId = Number(web3?.defaultChain ?? '1')

            const message = new SiweMessage({
                domain: window.location.host,
                address: address,
                statement: 'Sign in with Ethereum to the app.',
                uri: window.location.origin,
                version: '1',
                chainId: 1,
                nonce: ''
            });

            await signMessageAsync(message)
        }
        backendLogin()
    }, [address, magicProvider, web3, magic, isLoggedIn, loginAsync])


    //Initialize MagicBase and load magic token if its available
    useEffect(() => {
        if (process.env.NEXT_PUBLIC_API_MAGIC_LINK) {
            const magic = new MagicBase(process.env.NEXT_PUBLIC_API_MAGIC_LINK as string, {
                network: {
                    rpcUrl: getNetworkUrl(),
                    chainId: getChainId(),
                },
                extensions: [new AuthExtension(), new OAuthExtension()],
            });

            setMagic(magic);
            setWeb3(new Web3((magic as any).rpcProvider));
        }

        const token = localStorage.getItem('token') ?? ''
        setMagicToken(token);
    }, []);

    const connectSocialAsync = useCallback(async (subtype: string) => {
        if (magic) {
            if (subtype === 'google' || subtype === 'facebook' || subtype === 'twitter' || subtype === 'apple') {
                await magic?.oauth.loginWithRedirect({
                    provider: subtype,
                    redirectURI: window.location.href,
                    loginHint: ''
                });
                setIsRedirecting(true)
            }
        }
    }, [magic, setIsRedirecting]);

    const connectAsync = useCallback(async (emailOrPhone: string) => {
        if (magic) {
            if (emailOrPhone.indexOf('@') > -1) {
                const account = await magic?.auth.loginWithEmailOTP({ email: emailOrPhone });
                if (account) {
                    saveToken(account, setMagicToken, 'EMAIL');
                    setMagicProvider('MAGIC')
                }
            } else {
                const account = await magic?.auth.loginWithSMS({
                    phoneNumber: emailOrPhone,
                });
                if (account) {
                    saveToken(account, setMagicToken, 'SMS');
                    setMagicProvider('MAGIC')
                }
            }
        }
    }, [magic]);

    const disconnectAsync = useCallback(async () => {
        if (magic) {
            setAddress('')
            setIsConnected(false)
            setIsRedirecting(false)
            setIsReconnecting(false)
            await logout(setMagicToken, magic);
        }
    }, [magic]);

    return {
        magic,
        web3,
        connectSocialAsync,
        connectAsync,
        disconnectAsync,
        isConnected,
        isConnecting,
        isRedirecting,
        isReconnecting
    }
}


const magicContext = createContext<MagicContextType | null>(null);

const MagicProvider = ({ children }: { children: ReactNode }) => {
    return <magicContext.Provider value={useProvideMagic()}>{children}</magicContext.Provider>;
};

export default MagicProvider;

export function useMagic(): MagicContextType {
    const context = useContext(magicContext);
    if (context === null) throw new Error("Magic provider is not set");
    return context;
}

