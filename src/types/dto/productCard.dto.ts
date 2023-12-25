import { BottleSize, PackageType, ProductOwner } from "../productOverview.dto"

export interface ProductCard {
        id: number
    
        name: string
    
        description: string 

        vintage: number
        packageType: PackageType
        packageSize: number
        bottleSize: BottleSize


        owners: ProductOwner[]
        buyNowPrice?: number
        estPrice?: number
        floorPrice?: number
        total: number
        available: number
        artwork: boolean
        media: string
}
