import { Airdrop } from './airdrop.dto'
import { CountryDto } from './country.dto'
import { ProductCard } from './productCard.dto'
import { WineSelection } from './wineSelection.dto'

export interface Home {
        drops: Airdrop[]
        selection: WineSelection[]
        products: ProductCard[]
        regions: CountryDto[]
}
