"use client";
import React, { useEffect, useState } from "react";
import warning from "@/assets/icons/Warning Icons.svg";
import Image from "next/image";
import CartInfo from "@/components/checkout/CheckoutAside";

import { CartControls, CheckoutComponent } from "@/common/Components";
import { useRouter } from "next/navigation";
import { Elements } from "@stripe/react-stripe-js";
import {loadStripe, Stripe} from '@stripe/stripe-js';
import CheckoutForm from "@/components/checkout/CheckoutForm";
import { useCart } from "@/context/cart";
const PaymentMethod = () => {
  const { push } = useRouter()

  const { cartOrder } = useCart()

  function prevStep() {
    push('/checkout')
  }

  const [stripePromise, setStripePromise] = useState<Stripe | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    if (cartOrder === null) return
    if (cartOrder.metadata === undefined || cartOrder.metadata['stripe_secret'] === undefined )return 
  
    setClientSecret(cartOrder.metadata['stripe_secret'])
    // console.log('Client secret', cartOrder.metadata['stripe_secret'])
  }, [cartOrder])

  useEffect(() => {
    async function run() {
      if (process.env.NEXT_PUBLIC_API_STRIPE_KEY === undefined) return
      const str = await loadStripe(process.env.NEXT_PUBLIC_API_STRIPE_KEY)
      setStripePromise(str);
    }
    run()
  }, [])

  return (
    <React.Fragment>
      <div className="max-w-[1139px] mx-auto px-4 md:mb-40 mb-20">
        <CheckoutComponent stage={2} />

        <div className="flex justify-between mt-12 ">

          <div className="max-w-[501px] w-full">
            {clientSecret !== null && stripePromise !== null && (
              <>
              <Elements stripe={stripePromise} options={{ clientSecret, }}>
                <CheckoutForm />
              </Elements>
              </>
            )}
          </div>

          <div className="max-w-[501px] md:block hidden">
            <CartInfo />
          </div>
        </div>

        <CartControls prevStep={prevStep} />
      </div>
    </React.Fragment>
  );
};

export default PaymentMethod;
