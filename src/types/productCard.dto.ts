import { BottleSize, PackageType, ProductOwner } from "./productOverview.dto"
import { Currency } from "./user.dto"

export interface ItemCardDto {
    id: number
    name: string
    isEdition: boolean
    number?: number
    isAvailable?: boolean
    owner?: ProductOwner    


    description: string

    vintage: number
    packageType: PackageType
    packageSize: number
    bottleSize: BottleSize

    owners: string[]
    buyNowPrice?: Record<Currency, number>
    estPrice?: Record<Currency, number>
    floorPrice?: Record<Currency, number>
    total: number
    available: number
    artwork: boolean
    media: string
}
