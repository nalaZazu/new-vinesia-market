import { ProductWineDto } from "./dto/productWine.dto"
import { ItemCardDto } from "./productCard.dto"
import { Currency } from "./user.dto"

export interface ProductOverview {
    id: number
    name: string
    media: string

    subtitle: string
    description: string


    wine: ProductWineDto | null
    art: ProductArt | null

    buyNowPrice?: Record<Currency, number>
    floorPrice?: Record<Currency, number>
    estPrice?: Record<Currency, number>

    isFavourite: boolean
    starred: number

    releaseDetails: ReleaseDetails
    editions: ItemCardDto[]
}

export interface ReleaseDetails {
    releaseDate: Date
    releasePrice: number
    averagePrice: number
    highPrice: number
}

export interface ProductArt {

}

export enum ProductOwner {
    Vinesia = 'Vinesia',
    Private = 'Private'
}

export interface Winery {
    id: number

    name: string

    description: string

    media: string

    region: Region
}

export interface Region {
    id: number

    name: string

    description: string

    media: string

    country: Country
}

export interface Country {
    id: number

    name: string

    description: string

    media: string
}

export interface Rating {
    id: number

    critic: string

    rating: string
    max: number

    description: string

    releaseTime: number
}

export enum PackageType {
    Bottle = 'Bottle',
    Case = 'Case',
    Collection = 'Collection'
}

export enum ProductSource {
    Direct
}

export enum BottleSize {
    HalfQuarter = 'Half Quarter',
    QuarterBottle = 'Quarter Bottle',
    HalfBottle = 'Half Bottle',
    Standard = 'Standard',
    Magnum = 'Magnum',
    Jeroboam = 'Jeroboam', //double magnum
    Rehoboam = 'Rehoboam'
}