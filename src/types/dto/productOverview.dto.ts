import { ReleaseDetails } from './releaseDetails.dto'
import { EditionCard } from './editionCard.dto'
import { ProductWineDto } from './productWine.dto'
import { ProductArt } from '../productOverview.dto'

export interface ProductOverview {
    
        name: string
    
        subtitle: string
    
        description: string

    
        wine: ProductWineDto | null
    
        art: ProductArt | null

        buyNowPrice?: number
    
        floorPrice?: number
    
        estPrice?: number

    
        isFavourite: boolean
    
        starred: number

    
        releaseDetails: ReleaseDetails

    editions: EditionCard[]
}
