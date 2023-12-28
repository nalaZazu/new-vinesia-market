import { Currency } from "../user.dto"

export enum ItemType {
    Edition = 'Edition',
    Product = 'Product'
}
export interface CartItem {
    id: number

    type: ItemType

    price: Record<Currency, number>
    name?: string
    description?: string
    media?: string
}

export interface CheckoutCartDto {

    currency: Currency


    items: CartItem[]
}
