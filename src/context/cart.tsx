"use client"
import { ProductOverview } from "@/types/productOverview.dto";
import { createContext, useContext, useState } from "react";

export interface ProvideCart {
    cartItems: ProductOverview[]
    cartTotal: number,
    addCartItem: (item: ProductOverview) => void
    removeCartItem: (item: ProductOverview) => void
    getCartTotal: () => number
}

export function useProvideCart(): ProvideCart {
    const [cartItems, setCartItems] = useState<ProductOverview[]>([])
    const [cartTotal, setCartTotal] = useState(0)

    function addCartItem(item: ProductOverview) {
        if (cartItems.indexOf(item) !== -1) 
            return

        const items = [...cartItems, item]
        setCartItems(items)
    }

    function removeCartItem(item: ProductOverview) {
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