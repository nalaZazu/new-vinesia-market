import { BottleSize, PackageType, ProductSource, Rating, Winery } from "../productOverview.dto"

export interface ProductWineDto {
    id: number
    name: string
    media: string
    vintage: number

    source: ProductSource

    lwinNumber: number

    description: string

    size: BottleSize

    packageType: PackageType

    items: number

    winery: Winery
    wineryId: number

    ratings: Rating[]

    metadata: Record<string, string>
}
