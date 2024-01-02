"use client"
import { CartItem, ItemType } from "@/types/dto/checkoutCart.dto";
import { ProductOverview } from "@/types/productOverview.dto";
import { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "./user";
import toast from "react-hot-toast";
import { CartIcon } from "@/assets/icons/Icons";
import Link from "next/link";
import { EditionOverview } from "@/types/editionOverview.dto";
import { Currency } from "@/types/user.dto";
import { CartOrderDto } from "@/types/dto/cartOrder.dto";

export interface ProvideCart {
    isCartLoading: boolean
    cartItems: CartItem[]
    cartOrder: CartOrderDto | null
    addProductCartItem: (item: ProductOverview) => void
    addEditionCartItem: (item: EditionOverview) => void
    removeCartItem: (item: CartItem) => void
    getOrder(id: number): Promise<CartOrderDto>
    getCartTotal: () => number
    checkout: () => Promise<void>
    cancelOrder: () => Promise<void>
}

export function useProvideCart(): ProvideCart {
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [cartOrder, setCartOrder] = useState<CartOrderDto | null>(null)
    const [isCartLoading, setIsCartLoading] = useState(true)

    const { currency, profile, jwtToken } = useUser()

    function addProductCartItem(item: ProductOverview) {
        if (cartOrder !== null) {
            toast.error('Cannot add product to cart, first finish your order')
            return
        } 

        const found = cartItems.filter((x) => x.id === item.id && x.type === ItemType.Product)

        if (found.length === 0 && item.buyNowPrice !== undefined) {
            const add: CartItem = {
                id: item.id,
                type: ItemType.Product,
                price: item.buyNowPrice,
                media: item.wine?.media,
                name: item.name
            }

            const items = [...cartItems, add]
            setCartItems(items)
            toast.success(<><Link href={'/cart'}>Product added to cart</Link></>)
        } else {
            toast.success('Product is already in cart')
        }
    }

    function addEditionCartItem(item: EditionOverview) {
        if (cartOrder !== null) {
            toast.error('Cannot add product to cart, first finish your order')
            return
        } 

        const found = cartItems.filter((x) => x.id === item.id && x.type === ItemType.Edition)

        if (found.length === 0 && item.buyNowPrice !== undefined) {
            const add: CartItem = {
                id: item.id,
                type: ItemType.Edition,
                price: item.buyNowPrice,
                media: item.media,
                name: item.name
            }

            const items = [...cartItems, add]
            setCartItems(items)
            toast.success(<><Link href={'/cart'}>Edition added to cart</Link></>)
        }
    }

    function removeCartItem(item: CartItem) {
        const items = cartItems.filter(x => x !== item)
        setCartItems(items)
    }

    function getCartTotal() {
        if (cartItems.length === 0)
            return 0

        const sum = cartItems.map((x) => x.price ? x.price[currency] : 0).reduce((a, b) => a + b)
        return sum
    }

    async function getOrder(id: number): Promise<CartOrderDto> {
        if (jwtToken === undefined || jwtToken.length === 0 || profile === null)
            throw new Error('You need to be authorized to call this function')

        try {
            const verifyRes = await fetch(process.env.NEXT_PUBLIC_API_ADDRESS + 'cart/order/' + id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer ' + jwtToken
                }
            })
            if (!verifyRes.ok) throw new Error('Error fetching order')
            const resp = await verifyRes.json() as CartOrderDto

            return resp
        } catch (e) {
            console.log('Failed to update address', e)
            throw e
        }
    }

    async function checkout() {
        if (jwtToken === undefined || jwtToken.length === 0 || profile === null)
            throw new Error('You need to be authorized to call this function')

        try {
            const verifyRes = await fetch(process.env.NEXT_PUBLIC_API_ADDRESS + 'cart/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer ' + jwtToken
                },
                body: JSON.stringify({ items: cartItems, currency: currency }),
            })
            if (!verifyRes.ok) throw new Error('Error updating address')
            const resp = await verifyRes.json() as CartOrderDto

            setCartOrder(resp)
            // profile.cartOrder = resp

            console.log('Cart checkout', resp)
        } catch (e) {
            console.log('Failed to update address', e)
            throw e
        }
    }

    async function cancelOrder() {
        if (jwtToken === undefined || jwtToken.length === 0 || profile === null)
            throw new Error('You need to be authorized to call this function')

        try {
            const verifyRes = await fetch(process.env.NEXT_PUBLIC_API_ADDRESS + 'cart/cancel', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer ' + jwtToken
                }
            })
            if (!verifyRes.ok) throw new Error('Error cancelling order')

            setCartOrder(null)
            
            console.log('Cart Order cancelled')
        } catch (e) {
            console.log('Failed to cancel cart order', e)
            throw e
        }
    }

    useEffect(() => {
        if (profile === null || profile === undefined) return

        if (profile.cartOrder !== undefined) {
            const items: CartItem[] = profile.cartOrder.positions.map((x) => {
                const rec: Record<string, number> = {}
                rec[profile.cartOrder?.currency ?? 'EUR'] = x.price

                const item: CartItem = {
                    id: x.editionId ?? 0,
                    type: ItemType.Edition,
                    media: x.media,
                    name: x.name,
                    price: rec
                }
                return item
            })

            //get cart data from backend

            setCartItems(items)
            setCartOrder(profile.cartOrder)
        }

        setIsCartLoading(false)
    }, [profile])

    return {
        isCartLoading,
        cartItems,
        cartOrder,
        addProductCartItem,
        addEditionCartItem,
        removeCartItem,
        getOrder,
        getCartTotal,
        checkout,
        cancelOrder
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