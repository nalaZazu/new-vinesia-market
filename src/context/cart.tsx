"use client"
import { CartItem, ItemType } from "@/types/dto/checkoutCart.dto";
import { EditionOverview, ProductOverview } from "@/types/productOverview.dto";
import { createContext, useContext, useState } from "react";
import { useUser } from "./user";

export interface ProvideCart {
    cartItems: CartItem[]
    addProductCartItem: (item: ProductOverview) => void
    addEditionCartItem: (item: EditionOverview) => void
    removeCartItem: (item: CartItem) => void
    getCartTotal: () => number
}

export function useProvideCart(): ProvideCart {
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const {currency} = useUser()

    function addProductCartItem(item: ProductOverview) {
        const found = cartItems.filter((x) => x.id === item.id && x.type === ItemType.Product)

        if (found.length === 0) {
            const add: CartItem = {
                id: item.id,
                type: ItemType.Product,
                price: item.buyNowPrice,
                media: item.media,
                name: item.name
            }

            const items = [...cartItems, add]
            setCartItems(items)
        }
    }

    function addEditionCartItem(item: EditionOverview) {
        const found = cartItems.filter((x) => x.id === item.id && x.type === ItemType.Edition)

        if (found.length === 0) {
            const add: CartItem = {
                id: item.id,
                type: ItemType.Edition,
                price: item.buyNowPrice,
                media: item.media,
                name: item.name
            }

            const items = [...cartItems, add]
            setCartItems(items)
        }
    }

    function removeCartItem(item: CartItem) {
        const items = cartItems.filter(x=>x !== item)
        setCartItems(items)
    }

    function getCartTotal() {
        if (cartItems.length === 0)
            return 0

        const sum = cartItems.map((x) => x.price ? x.price[currency] : 0).reduce((a,b) => a+b)
        return sum
    }

    return {
        cartItems,
        addProductCartItem,
        addEditionCartItem,
        removeCartItem,
        getCartTotal
    }
}

const cartContext = createContext<ProvideCart | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
    return (<cartContext.Provider value={useProvideCart()}>{children}</cartContext.Provider>);
}

export function useCart(): ProvideCart {
    const context = useContext(cartContext);
    if (context === null) throw new Error('Cart provider is not set')
    return context
}