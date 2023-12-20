"use client"
import { ProductCardDto } from "@/types/productCard.dto";
import { createContext, useContext, useState } from "react";

export interface ProvideCart {
    cartItems: ProductCardDto[]
    cartTotal: number,
    addCartItem: (item: ProductCardDto) => void
    removeCartItem: (item: ProductCardDto) => void
    getCartTotal: () => number
}

export function useProvideCart(): ProvideCart {
    const [cartItems, setCartItems] = useState<ProductCardDto[]>([])
    const [cartTotal, setCartTotal] = useState(0)

    function addCartItem(item: ProductCardDto) {
        if (cartItems.indexOf(item) !== -1) 
            return

        const items = [...cartItems, item]
        setCartItems(items)
    }

    function removeCartItem(item: ProductCardDto) {
        const items = cartItems.filter(x=>x !== item)
        setCartItems(items)
    }

    function getCartTotal() {
        if (cartItems.length === 0)
            return 0

        const sum = cartItems.map((x) => x.floorPrice ?? 0).reduce((a,b) => a+b)
        return sum
    }

    return {
        cartItems,
        cartTotal,
        addCartItem,
        removeCartItem,
        getCartTotal
    }
}

const cartContext = createContext<ProvideCart | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
    return (<cartContext.Provider value={useProvideCart()}>{children}</cartContext.Provider>);
}

export function useCartContext(): ProvideCart {
    const context = useContext(cartContext);
    if (context === null) throw new Error('Cart provider is not set')
    return context
}