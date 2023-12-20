"use client"
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { Connector, PublicClient, WagmiConfig, configureChains, createConfig, useAccount, useConnect, useDisconnect } from "wagmi";
import { goerli, mainnet } from "wagmi/chains";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { publicProvider } from "wagmi/providers/public";
import { useMagic } from "./MagicProvider";
import { logout, saveToken } from "@/utils/common";

export interface ProvideUser {
    status: string
    address: string | null
    isConnected: boolean
    isConnecting: boolean
    isRedirecting: boolean
    isReconnecting: boolean
    isDisconnected: boolean
    isLoading: boolean

    currency: string
    language: string

    getText: (text: string) => string
    getPriceText: (price: number) => string
    getPriceDifference: (release: number, current: number) => string

    connectSocialAsync: (subtype: string) => Promise<any>
    disconnectAsync: () => Promise<any>
}

export function useProvideUser(): ProvideUser {
    // const { status, address, isConnected, isConnecting, isReconnecting, isDisconnected } = useAccount()
    // const { connectAsync, connectors, data, isLoading } = useConnect()

    const wagmiAccount = useAccount()
    const wagmiConnect = useConnect()
    const wagmiDisconnect = useDisconnect()

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


    const { magic } = useMagic()

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


    function getText(text: string): string {
        return ''
    }

    function getPriceText(price: number): string {
        const priceDec = price / 100

        return priceDec.toLocaleString('en-US', { style: "currency", currency: "EUR" })
    }

    function getPriceDifference(release: number, current: number) {
        const diff = (current - release) / release * 100

        return diff.toFixed(1) + '%'
    }

    const connectSocialAsync = useCallback(async (subtype: string) => {
        if (magic) {
            if (subtype === 'google') {
                await magic?.oauth.loginWithRedirect({
                    provider: 'google',
                    redirectURI: window.location.href,
                });
                setIsRedirecting(true)
            }
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

        connectSocialAsync,
        disconnectAsync
    }
}


const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet, ...(process.env.NODE_ENV === 'development' ? [goerli] : [])],
    [
        publicProvider(),
    ],
)



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
    return (<userContext.Provider value={useProvideUser()}>{children}</userContext.Provider>);
}

export function useUserContext(): ProvideUser {
    const context = useContext(userContext);
    if (context === null) throw new Error('User provider is not set')
    return context
}