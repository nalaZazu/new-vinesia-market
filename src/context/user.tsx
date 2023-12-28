"use client"
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { Address, Currency, User } from "@/types/user.dto";

export interface ProvideUser {
    isLoading: boolean //true if, profile is being loaded, false if profile has been loaded, to check if user is loaded, either get the profile (which should be not null) or check flag isLoggedIn
    isLoggedIn?: boolean //undefined if the profile is loading, true if used is logged in, false if user is not loggedin

    profile: User | null
    publicAddress: string | null
    currency: Currency;
    language: string;

    getPriceText: (price: number) => string;
    getPriceDifference: (release: number, current: number) => string;

    loginAsync: (message: string, signature: string) => Promise<void>
    disconnectAsync: () => Promise<any>
    setBillingAddress: (address: Address) => Promise<void>
}

export function useProvideUser(): ProvideUser {
    const [address, setAddress] = useState<string | null>(null)

    const [isLoading, setIsLoading] = useState(true)

    const [currency, setCurrency] = useState(Currency.EUR)
    const [language, setLanguage] = useState('en')

    const [jwtToken, setJwtToken] = useState('')
    const [profile, setProfile] = useState<User | null>(null)
    const [isLoggedIn, setIsLoggedIn] = useState<boolean | undefined>(undefined)


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

        //No stored JWT token, user is not logged in
        if (jwtToken.length === 0) setIsLoading(false)
    }, [])

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

    const loginAsync = useCallback(async (message: string, signature: string) => {
        const verifyRes = await fetch(process.env.NEXT_PUBLIC_API_ADDRESS + 'auth/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: message, signature: signature }),
        })
        if (!verifyRes.ok) throw new Error('Error verifying message')
        const resp = await verifyRes.json()

        console.log('JWT token', resp.access_token)

        setJwtToken(resp.access_token)
        localStorage.setItem('jwt_token', resp.access_token)
    }, [])

    const disconnectAsync = useCallback(async () => {
        localStorage.removeItem('jwt_token')
        setJwtToken('')
        setProfile(null)
        setIsLoading(false)
        setCurrency(Currency.EUR)
        setLanguage('en')

        //Only after other settings are clean
        setIsLoggedIn(false)
    }, [])

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

            const newProfile: User = { ...profile, billingAddress: address }
            
            setProfile(newProfile)
        } catch (e) {
            console.log('Failed to update address', e)
            throw e
        }

    }, [jwtToken, profile])

    return {
        profile,
        currency,
        language,
        publicAddress: address,

        getPriceText,
        getPriceDifference,

        isLoading,
        isLoggedIn,

        loginAsync,
        disconnectAsync,

        setBillingAddress
    }
}
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


