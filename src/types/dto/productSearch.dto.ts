import { Currency } from "../user.dto"


export interface PriceFilter{
    
        min?: number
    
    
        max?: number
}
export interface ProductSearch {
    
        filters: string[]
    
        price: PriceFilter
    
        sort: string
    
        first: number
    
        currency: Currency
}
