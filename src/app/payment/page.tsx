"use client";
import React, { useEffect, useState } from "react";
import warning from "@/assets/icons/Warning Icons.svg";
import Image from "next/image";
import CartInfo from "@/components/checkout/CheckoutAside";

import { CartControls, CheckoutComponent } from "@/common/Components";
import { useRouter } from "next/navigation";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, Stripe } from '@stripe/stripe-js';
import CheckoutForm from "@/components/checkout/CheckoutForm";
import { useCart } from "@/context/cart";
import Loading from "@/components/loading/loading";
const PaymentMethod = () => {
  const { push } = useRouter()

  const { cartOrder, cancelOrder, isCartLoading } = useCart()
  const [isCancelling, setIsCancelling] = useState(false)

  async function prevStep() {
    setIsCancelling(true) 

    try {
    //cancel order, wait for profile to refresh
    await cancelOrder()

    push('/checkout')
    } catch (e) {
      setIsCancelling(false)
    }
  }

  const [stripePromise, setStripePromise] = useState<Stripe | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    if (isCartLoading) return
    if (isCancelling) return

    if (cartOrder === null) {
      push('/invest')
      return
    }
    if (cartOrder.metadata === undefined || cartOrder.metadata['stripe_secret'] === undefined){
      push('/invest')
      return
    }
    
    setClientSecret(cartOrder.metadata['stripe_secret'])
    // console.log('Client secret', cartOrder.metadata['stripe_secret'])
  }, [cartOrder, isCartLoading, isCancelling, push])

  useEffect(() => {
    async function run() {
      if (process.env.NEXT_PUBLIC_API_STRIPE_KEY === undefined) return
      const str = await loadStripe(process.env.NEXT_PUBLIC_API_STRIPE_KEY)
      setStripePromise(str);
    }
    run()
  }, [])

  if (isCartLoading) {
    return <Loading />
  }

  if (isCancelling) {
    return <Loading text="Cancelling order ..." />
  }

  return (
    <React.Fragment>
      <div className="max-w-[1139px] mx-auto px-4 md:mb-40 mb-20">
        <CheckoutComponent stage={2} />

        <div className="flex justify-between mt-12 ">
          <div className="max-w-[521px] w-full">
            {clientSecret !== null && stripePromise !== null ? (
              <div className="bg-white p-3">
                <Elements stripe={stripePromise} options={{ clientSecret, }}>
                  <CheckoutForm id={cartOrder?.id ?? -1} />
                </Elements>
              </div>
            ) : <Loading />}
          </div>
          <div className="max-w-[521px] md:block hidden">
            <CartInfo />
          </div>
        </div>

        <CartControls prevStep={prevStep} />
      </div>
    </React.Fragment>
  );
};

export default PaymentMethod;
