export enum Currency {
    EUR = 'EUR',
    USD = 'USD',
    GBP = 'GBP',
    CHF = 'CHF'
}

export interface Address {
    title: string

    firstName: string

    lastName: string

    country: string

    region: string

    addressLine1: string

    addressLine2: string

    zipCode: string

    city: string

    notificationEmail: string
}

export interface User {
    id: number

    uid: string

    publicAddress: string

    firstName: string

    lastName: string

    email: string

    phone: string

    isActive: boolean

    /**
     * Currency selection of given user, for now it cannot be changed
     */
    currency: Currency
    /**
     * Current user preferred language
     */
    language: string


    billingAddress: Address

    bidsNotify: boolean
    acceptNotify: boolean
    dropsNotify: boolean
    sellNotify: boolean
    othersNotify: boolean

    kycStatus: boolean

    newsletter: boolean
}