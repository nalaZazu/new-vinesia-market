import { ProductCard } from './productCard.dto'

export interface ProductSearchResults {
    
        total: number
    
        first: number
    
        count: number
        data: ProductCard[]
}
