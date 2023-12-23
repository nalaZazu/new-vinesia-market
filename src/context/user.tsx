"use client"
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { configureChains, createConfig, useAccount, useConnect, useDisconnect, useSignMessage } from "wagmi";
import { goerli, mainnet } from "wagmi/chains";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { publicProvider } from "wagmi/providers/public";
import { useMagic } from "./MagicProvider";
import { logout, saveToken } from "@/utils/common";
import { SiweMessage } from "siwe";
import { Address, createWalletClient, custom, getAddress } from "viem";
import { User } from "@/types/user.dto";



export interface ProvideUser {
    status: string
    address: string | null
    isConnected: boolean
    isConnecting: boolean
    isRedirecting: boolean
    isReconnecting: boolean
    isDisconnected: boolean
    isLoading: boolean

    currency: string;
    language: string;

    isLoggedIn: () => Promise<User | undefined>;

    getText: (text: string) => string;
    getPriceText: (price: number) => string;
    getPriceDifference: (release: number, current: number) => string;

    connectAsync: (emailOrPhone: string) => Promise<any>
    connectSocialAsync: (subtype: string) => Promise<any>
    connectWalletAsync: () => Promise<any>
    disconnectAsync: () => Promise<any>
}

export function useProvideUser(): ProvideUser {
    // const { status, address, isConnected, isConnecting, isReconnecting, isDisconnected } = useAccount()
    // const { connectAsync, connectors, data, isLoading } = useConnect()

    const wagmiAccount = useAccount()
    const wagmiConnect = useConnect()
    const wagmiDisconnect = useDisconnect()
    const wagmiSign = useSignMessage()




    const [provider, setProvider] = useState<string | null>(null)

    const [address, setAddress] = useState<string | null>(null)
    const [status, setStatus] = useState('')

    const [isConnected, setIsConnected] = useState(false)
    const [isConnecting, setIsConnecting] = useState(false)
    const [isReconnecting, setIsReconnecting] = useState(false)
    const [isRedirecting, setIsRedirecting] = useState(false)
    const [isDisconnected, setIsDisconnected] = useState(true)
    const [isLoading, setIsLoading] = useState(true)

    const [currency, setCurrency] = useState('EUR')
    const [language, setLanguage] = useState('en')
    const [token, setToken] = useState('')

    const [jwtToken, setJwtToken] = useState('')
    const [profile, setProfile] = useState<User | null>(null)

    const { magic, web3 } = useMagic()

    useEffect(() => {
        const checkLogin = async () => {
            try {
                if (magic) {
                    console.log('Getting Redirect Result')
                    const result = await magic?.oauth.getRedirectResult();
                    //do stuff with user profile data
                    saveToken(result.magic.idToken, setToken, 'SOCIAL');
                    console.log('Magic token: ' + result.magic.idToken)
                    //   setLoadingFlag('false');
                    setProvider('MAGIC')
                    // await backendLogin()

                    setIsLoading(false)
                }
            } catch (e) {
                console.log('social login error: ' + e);
                // setLoadingFlag('false');
                setIsLoading(false)
            }
        };

        checkLogin();
    }, [magic, setToken]);

    useEffect(() => {
        const token = localStorage.getItem('token') ?? ''
        setToken(localStorage.getItem('token') ?? '');
    }, [setToken]);

    useEffect(() => {
        if (!magic) return

        async function checkAddress() {
            const isLoggedIn = await magic?.user.isLoggedIn();
            if (isLoggedIn) {
                const metadata = await magic?.user.getInfo();
                if (metadata) {
                    localStorage.setItem('user', metadata?.publicAddress!);
                    setProvider('MAGIC')
                    setAddress(metadata?.publicAddress!);
                }
            }
        }
        checkAddress()

        if (token.length > 0) {
            setIsConnected(true)
            setIsDisconnected(false)
        } else {
            setIsConnected(false)
            setIsDisconnected(true)
        }
        // setIsLoading(false)
        // setIsConnecting(false)
        // setIsReconnecting(false)
    }, [token, magic])

    async function fetchProfile(jwtToken: string) {
        const verifyRes = await fetch(process.env.NEXT_PUBLIC_API_ADDRESS+'auth/profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer '+jwtToken
            }
        })

        return (await verifyRes.json()) as User
    }

    useEffect(() => {
        const jwtToken = localStorage.getItem('jwt_token') ?? ''
        setJwtToken(jwtToken)
    }, [])

    useEffect(() => {
        if (jwtToken === undefined || jwtToken.length === 0) return

        async function fetchProfile() {
            const verifyRes = await fetch(process.env.NEXT_PUBLIC_API_ADDRESS+'auth/profile', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer '+jwtToken
                }
            })

            console.log('Profile: ',verifyRes)
        }
        fetchProfile();

    }, [jwtToken])

    async function isLoggedIn(): Promise<User | undefined> {
        if (profile !== null) return profile

        const jwtToken = localStorage.getItem('jwt_token')
        if (jwtToken !== null && jwtToken.length > 0) {
            const profile = await fetchProfile(jwtToken)

            setProfile(profile)

            return profile
        }

        return undefined
    }

    function getText(text: string): string {
        return "";
    }

    function getPriceText(price: number): string {
        const priceDec = price / 100

        return priceDec.toLocaleString("en-US", {
            style: "currency",
            currency: "EUR",
            minimumFractionDigits: 0
        });
    }

    function getPriceDifference(release: number, current: number) {
        const diff = (current - release) / release * 100

        return diff.toFixed(1) + '%'
    }

    const connectSocialAsync = useCallback(async (subtype: string) => {
        if (magic) {
            if (subtype === 'google' || subtype === 'facebook' || subtype === 'twitter' || subtype === 'apple') {
                await magic?.oauth.loginWithRedirect({
                    provider: subtype,
                    redirectURI: window.location.href,
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
                    saveToken(account, setToken, 'EMAIL');
                    setProvider('MAGIC')

                    // await backendLogin()
                    //   setEmail('');
                }
            } else {
                const account = await magic?.auth.loginWithSMS({
                    phoneNumber: emailOrPhone,
                });
                if (account) {
                    saveToken(account, setToken, 'SMS');
                    setProvider('MAGIC')
                    // setPhone('');
                }
            }

            // if (subtype === 'google' || subtype === 'facebook' || subtype === 'twitter' || subtype === 'apple') {
            //     await magic?.oauth.loginWithRedirect({
            //         provider: subtype,
            //         redirectURI: window.location.href,
            //     });
            //     setIsRedirecting(true)
            // }
        }
    }, [magic, setIsRedirecting]);



    useEffect(() => {
        async function signMessageAsync(message: SiweMessage) {
            if (provider === 'WAGMI') {
                const signature = await wagmiSign.signMessageAsync({
                    message: message.prepareMessage(),
                })
            }
    
            if (provider === 'MAGIC' && magic !== null && address !== null && address.length > 0) {

                const account = getAddress(address)

                const walletClient = createWalletClient({
                    account,
                    chain: goerli,
                    transport: custom(magic?.rpcProvider)
                })


                if (walletClient === null) return

                console.log('logging in to backend using magic')
                const signedMessage = await walletClient.signMessage({
                    message: message.prepareMessage()
                })

                console.log("signedMessage:", signedMessage);
    
                const verifyRes = await fetch(process.env.NEXT_PUBLIC_API_ADDRESS+'auth/verify', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message: message.prepareMessage(), signature: signedMessage }),
                })
                if (!verifyRes.ok) throw new Error('Error verifying message')
                const resp = await verifyRes.json()
    
                console.log('JWT token', resp.access_token)

                setJwtToken(resp.access_token)
                localStorage.setItem('jwt_token', resp.access_token)
            }
        }

        async function backendLogin() {
            console.log('logging in to backend', provider)
            if (address === null || address.length === 0) return
            if (provider === null) return

            const chainId = Number(web3?.defaultChain ?? '1')

            const message = new SiweMessage({
                domain: window.location.host,
                address,
                statement: 'Sign in with Ethereum to the app.',
                uri: window.location.origin,
                version: '1',
                chainId: 0,
                nonce: ''
            });

            await signMessageAsync(message)
        }
        backendLogin()
    }, [address, provider, web3])



    const connectWalletAsync = useCallback(async () => {
        if (magic) {
            // if (subtype === 'google' || subtype === 'facebook' || subtype === 'twitter' || subtype === 'apple') {
            //     await magic?.oauth.loginWithRedirect({
            //         provider: subtype,
            //         redirectURI: window.location.href,
            //     });
            //     setIsRedirecting(true)
            // }
        }
    }, [magic, setIsRedirecting]);


    const disconnectAsync = useCallback(async () => {
        if (magic) {
            setIsLoading(true)
            await logout(setToken, magic);
            setIsLoading(false)
        }
    }, [magic, setToken]);


    return {
        currency,
        language,

        getText,

        getPriceText,
        getPriceDifference,

        status,
        address,
        isConnected,
        isConnecting,
        isRedirecting,
        isReconnecting,
        isDisconnected,
        isLoading,

        isLoggedIn,

        connectAsync,
        connectSocialAsync,
        connectWalletAsync,
        disconnectAsync
    }
}

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet, ...(process.env.NODE_ENV === "development" ? [goerli] : [])],
    [publicProvider()]
);

export const config = createConfig({
    autoConnect: true,
    connectors: [
        new MetaMaskConnector({ chains }),
        new CoinbaseWalletConnector({
            chains,
            options: {
                appName: 'wagmi',
            },
        }),
        new WalletConnectConnector({
            chains,
            options: {
                projectId: process.env.NEXT_PUBLIC_API_WALLET_CONNECT,
            },
        }),
    ],
    publicClient,
    webSocketPublicClient,
})

const userContext = createContext<ProvideUser | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
    return (
        <userContext.Provider value={useProvideUser()}>
            {children}
        </userContext.Provider>
    );
}

export function useUserContext(): ProvideUser {
    const context = useContext(userContext);
    if (context === null) throw new Error("User provider is not set");
    return context;
}


