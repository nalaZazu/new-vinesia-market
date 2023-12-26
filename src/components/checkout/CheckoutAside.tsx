import { useCart } from "@/context/cart";
import { useUser } from "@/context/user";
import React from "react";

export default function CheckoutAside() {
  const {cartItems, getCartTotal} = useCart()
  const { getPriceText, currency } = useUser()

  if (cartItems === undefined || cartItems.length === 0)
    return <></>

  return (
    <div>
      <div className=" bg-[#F7EFDF] rounded-lg flex-col justify-start items-center inline-flex shadow-sm w-full">
        <div className="self-stretch px-6 py-5 bg-red-900 justify-start items-center gap-2 inline-flex rounded-t-lg">
          <div className="grow shrink basis-0 text-white text-lg font-semibold  leading-relaxed">
            In cart
          </div>
          <div className="justify-start items-start gap-2.5 flex">
            <div className="text-white text-lg font-semibold  leading-relaxed">
              {cartItems.length}{" "}
            </div>
            <div className="text-white text-lg font-semibold  leading-relaxed">
              {cartItems.length === 1 ? <>Wine asset</> : <>Wine assets</>}
            </div>
          </div>
        </div>
        <div className="self-stretch px-6 flex-col justify-start items-start flex ">
          {cartItems.map((d, i) => {
            const { name, price} = d;
            return (
              <div
                key={i}
                className="self-stretch py-6 border-b border-orange-700 border-opacity-20 justify-between items-start inline-flex"
              >
                <div className="w-[295px] text-zinc-800 text-base font-normal  leading-snug">
                  {name}
                </div>
                <div className="text-zinc-800 text-base font-normal  leading-snug">
                  {getPriceText(price[currency] ?? 0)}
                </div>
              </div>
            );
          })}
          <div className="self-stretch py-6 border-b border-orange-700 border-opacity-20 justify-between items-start inline-flex">
            <div className="w-[285px] text-zinc-800 text-base font-normal  leading-snug">
              Service fees
            </div>
            <div className="text-zinc-800 text-base font-normal  leading-snug">
              € 0
            </div>
          </div>
        </div>
        <div className="self-stretch p-6 justify-between items-center inline-flex">
          <div className="text-zinc-800 text-lg font-semibold  leading-relaxed">
            Order summary
          </div>
          <div className="text-zinc-800 text-lg font-semibold  leading-relaxed">
            {getPriceText(getCartTotal())}
          </div>
        </div>
      </div>
    </div>
  );
}
