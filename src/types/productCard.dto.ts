
export interface ProductCardDto {
    id: number
    name: string
    number: number
    description: string

    vintage: number
    packageType: string
    packageSize: number
    bottleSize: string

    owners: string[]
    buyNowPrice?: number
    estPrice?: number
    floorPrice?: number
    total: number
    available: number
    artwork: boolean
    media: string
}
