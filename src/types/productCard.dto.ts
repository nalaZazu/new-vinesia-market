
export interface ProductCardDto {
    id: number
    name: string
    description: string

    owners: string[]
    buyNowPrice?: number
    estPrice?: number
    floorPrice?: number
    total: number
    available: number
    artwork: boolean
    media: string
}
