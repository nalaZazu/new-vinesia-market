import { Address, Currency, User } from "../user.dto"

export interface OrderPositionDto {
    id: number
    editionId?: number
    name?: string
    price: number
}

export enum CartStatus {
    Initialized = 'Initialized',
    Checkout = 'Checkout',
    Processing = 'Processing',
    Success = 'Success',
    Failure = 'Failure',
    Abandoned = 'Abandoned',
    Cancelled = 'Cancelled'
}

export interface CartOrderDto {
    id?: number

    owner: User

    ownerId?: number

    currency: Currency

    status: CartStatus

    billingDetails: Address
    
    errorMessage?: string

    // items?: Edition[]

    positions: OrderPositionDto[]

    metadata?: Record<string, any> 
}