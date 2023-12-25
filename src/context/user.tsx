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
import { createWalletClient, custom, getAddress } from "viem";
import { Address, Currency, User } from "@/types/user.dto";



export interface ProvideUser {
    status: string
    address: string | null

    //Flags taken from wagmi, candidates for future refactor
    isConnected: boolean //Status of connection to user wallet
    isConnecting: boolean //Status of connecting to user wallet

    isRedirecting: boolean
    isReconnecting: boolean
    isDisconnected: boolean


    isLoading: boolean //true if, profile is being loaded, false if profile has been loaded, to check if user is loaded, either get the profile (which should be not null) or check flag isLoggedIn
    isLoggedIn?: boolean //undefined if the profile is loading, true if used is logged in, false if user is not loggedin

    currency: Currency;
    language: string;

    profile: User | null

    getPriceText: (price: number) => string;
    getPriceDifference: (release: number, current: number) => string;

    connectAsync: (emailOrPhone: string) => Promise<any>
    connectSocialAsync: (subtype: string) => Promise<any>
    connectWalletAsync: () => Promise<any>
    disconnectAsync: () => Promise<any>
    setBillingAddress: (address: Address) => Promise<void>
}

export function useProvideUser(): ProvideUser {
    const wagmiAccount = useAccount()
    const wagmiConnect = useConnect()
    const wagmiDisconnect = useDisconnect()
    const wagmiSign = useSignMessage()




    const [magicProvider, setMagicProvider] = useState<string | null>(null)

    const [address, setAddress] = useState<string | null>(null)

    const [status, setStatus] = useState('')

    const [isConnected, setIsConnected] = useState(false)
    const [isConnecting, setIsConnecting] = useState(false)
    const [isReconnecting, setIsReconnecting] = useState(false)
    const [isRedirecting, setIsRedirecting] = useState(false)
    const [isDisconnected, setIsDisconnected] = useState(true)
    const [isLoading, setIsLoading] = useState(true)

    const [currency, setCurrency] = useState(Currency.EUR)
    const [language, setLanguage] = useState('en')
    const [magicToken, setMagicToken] = useState('')

    const [jwtToken, setJwtToken] = useState('')
    const [profile, setProfile] = useState<User | null>(null)
    const [isLoggedIn, setIsLoggedIn] = useState<boolean | undefined>(undefined)

    const { magic, web3 } = useMagic()

    //Checks if this is a redirect from magic social login
    useEffect(() => {
        const checkLogin = async () => {
            try {
                if (magic) {
                    console.log('Getting Redirect Result')
                    const result = await magic?.oauth.getRedirectResult();
                    //do stuff with user profile data
                    saveToken(result.magic.idToken, setMagicToken, 'SOCIAL');
                    console.log('Magic token: ' + result.magic.idToken)
                    //   setLoadingFlag('false');
                    setMagicProvider('MAGIC')
                    // await backendLogin()
                }
            } catch (e) {
                // console.log('social login error: ' + e);
            }
        };

        checkLogin();
    }, [magic, setMagicToken]);

    //Tries to get user wallet address from magic
    useEffect(() => {
        if (!magic) return

        async function checkAddress() {
            const isLoggedIn = await magic?.user.isLoggedIn();
            if (isLoggedIn) {
                const metadata = await magic?.user.getInfo();
                if (metadata) {
                    localStorage.setItem('user', metadata?.publicAddress!);
                    setMagicProvider('MAGIC')
                    setAddress(metadata?.publicAddress!);
                }
            }
        }
        checkAddress()

        if (magicToken.length > 0) {
            setIsConnected(true)
            setIsDisconnected(false)
        } else {
            setIsConnected(false)
            setIsDisconnected(true)
        }
    }, [magicToken, magic])

    //Tries to get profile from backend, only executes if jwtToken is not empty, and profile is empty
    useEffect(() => {
        if (jwtToken === undefined || jwtToken.length === 0) return

        async function fetchProfile() {
            try {
                const verifyRes = await fetch(process.env.NEXT_PUBLIC_API_ADDRESS + 'auth/profile', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': 'Bearer ' + jwtToken
                    }
                })

                if (!verifyRes.ok) {
                    //JWT Token is no longer valid, clean cache
                    setIsLoggedIn(false)

                    localStorage.removeItem('jwt_token')
                    localStorage.removeItem('user')
                }
                else {
                    const profile = (await verifyRes.json()) as User

                    setProfile(profile)
                    setIsLoggedIn(true)
                }
                setIsLoading(false)
            } catch (e) {
                console.log('Error while fetching profile: ', e)
            }
        }
        fetchProfile();
    }, [jwtToken])

    //Get the JWT token and Magic token from storage, then tries to get the profile from backend
    useEffect(() => {
        const jwtToken = localStorage.getItem('jwt_token') ?? ''
        setJwtToken(jwtToken)

        const token = localStorage.getItem('token') ?? ''
        setMagicToken(token);

        //No stored JWT token, user is not logged in
        if (jwtToken.length === 0) setIsLoading(false)
    }, [])



    //Logins to backend, using SIWE procedure, works only if user is not loggedIn
    useEffect(() => {
        if (isLoggedIn) return

        if (address === null || address.length === 0) return
        if (magicProvider === null) return

        async function signMessageAsync(message: SiweMessage) {
            if (magicProvider === 'WAGMI') {
                const signature = await wagmiSign.signMessageAsync({
                    message: message.prepareMessage(),
                })
            }

            if (magicProvider === 'MAGIC' && magic !== null && address !== null && address.length > 0) {

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

                try {
                    const verifyRes = await fetch(process.env.NEXT_PUBLIC_API_ADDRESS + 'auth/verify', {
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
                } catch (e) {
                    console.log('Failed to get JWT token', e)
                }
            }
        }

        async function backendLogin() {
            if (address === null || address.length === 0) return
            if (magicProvider === null) return

            console.log('logging in to backend', magicProvider)

            const chainId = Number(web3?.defaultChain ?? '1')

            const message = new SiweMessage({
                domain: window.location.host,
                address,
                statement: 'Sign in with Ethereum to the app.',
                uri: window.location.origin,
                version: '1',
                chainId: 1,
                nonce: ''
            });

            await signMessageAsync(message)
        }
        backendLogin()
    }, [address, magicProvider, web3, magic, wagmiSign, isLoggedIn])


    // async function isLoggedIn(): Promise<User | undefined> {
    //     if (profile !== null) return profile

    //     const jwtToken = localStorage.getItem('jwt_token')
    //     if (jwtToken !== null && jwtToken.length > 0) {
    //         const profile = await fetchProfile(jwtToken)

    //         setProfile(profile)

    //         return profile
    //     }

    //     return undefined
    // }


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
    }, [magic, setIsRedirecting]);


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
            await logout(setMagicToken, magic);
            setIsLoading(false)
        }
    }, [magic, setMagicToken]);

    const setBillingAddress = useCallback(async (address: Address) => {
        if (jwtToken === undefined || jwtToken.length === 0 || profile === null)
            throw new Error('You need to be authorized to call this function')

        try {
            const verifyRes = await fetch(process.env.NEXT_PUBLIC_API_ADDRESS + 'auth/address', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer ' + jwtToken
                },
                body: JSON.stringify(address),
            })
            if (!verifyRes.ok) throw new Error('Error updating address')
            const resp = await verifyRes.json()

            debugger

            const newProfile: User = { ...profile, billingAddress: address }
            setProfile(newProfile)
        } catch (e) {
            console.log('Failed to update address', e)
        }

    }, [jwtToken, profile])

    return {
        currency,
        language,

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

        profile,

        isLoggedIn,

        connectAsync,
        connectSocialAsync,
        connectWalletAsync,
        disconnectAsync,

        setBillingAddress
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

export function useUser(): ProvideUser {
    const context = useContext(userContext);
    if (context === null) throw new Error("User provider is not set");
    return context;
}


