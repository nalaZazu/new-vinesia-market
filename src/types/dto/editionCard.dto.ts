import { ProductOwner } from "../productOverview.dto"

export interface EditionCard {
    id: number

    name: string

    number: number

    description: string
    owner: ProductOwner
    buyNowPrice?: number
    estPrice?: number
    floorPrice?: number
    available: boolean
    artwork: boolean
    media: string
}