import { BottleSize, PackageType } from "./productOverview.dto"
import { Currency } from "./user.dto"

export interface ItemCardDto {
    id: number
    name: string
    isEdition: boolean
    number?: number
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
