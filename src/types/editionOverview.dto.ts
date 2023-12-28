import { ProductWineDto } from "./dto/productWine.dto"
import { ItemCardDto } from "./productCard.dto"
import { ProductArt, ReleaseDetails } from "./productOverview.dto"
import { Currency } from "./user.dto"

export interface CurrencyValue {
    price: number
    currency: Currency
}

export interface Bid {
    price: CurrencyValue
    user: string
}

export enum HistoryType {
    Bid = 'Bid',
    Ask = 'Ask',
    Tx = 'Tx'
}

export interface History {
    price: CurrencyValue
    user: string
    date: number
}


export interface EditionOverview {
    id: number
    name: string
    number: number
    media: string

    isAvailable: boolean

    owner: string

    subtitle: string
    description: string

    wine: ProductWineDto | null
    art: ProductArt | null

    buyNowPrice?: Record<Currency, number> //Either from vinesia or ask price
    bids: Bid[]

    lastSale?: CurrencyValue

    starred: number

    releaseDetails: ReleaseDetails
    editions: ItemCardDto[]

    history: History[]

    nftId?: string
    nfcId?: string
    nfcAppliedOn?: Date
    bleId?: string
    bleLastCheck?: Date

    //Last seven days of temperature
    temp: number[]
    //Last seven days of humidity
    humidity: number[]
}
