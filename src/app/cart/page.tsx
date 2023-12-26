"use client";
import Accordion from "@/common/Accordion";
import { CartControls } from "@/common/Components";
import CartCard from "@/components/cart/cartCard";
import { useCart } from "@/context/cart";
import { useUser } from "@/context/user";
import { CartItem } from "@/types/dto/checkoutCart.dto";
import React from "react";

export default function Cart() {
  const { cartItems, getCartTotal } = useCart();
  const { getPriceText } = useUser();
  const items = [
    {
      id: 1,
      title: "Legal information",
      description: (
        <div className="pt-8">
          <p>
            You are purchasing a digital wine asset. You will need to be in full
            compliance of your jurisdiction to receive the asset.
          </p>

          <ul className="list-disc ps-6 py-4">
            <li>IP of this product remains with the Brand.</li>
            <li>
              This wine asset does not represent actual ownership in the
              physical asset.
            </li>
            <li>
              This wine asset represents right to apply for redemption of the
              physical asset.
            </li>
          </ul>
          <p>
            Did you check if we ship to your country? Click Here to view the
            list of countries.
          </p>
          <p>
            For any questions or complications please reach out to
            contact@vinesia.com
          </p>
        </div>
      ),
    },
    { id: 2, title: "Service fees",
  description: (
    <div className="pt-8">

    Yes. We offer a 0% service fee for the first 12 months following an investment on primary sales, which applies when an investor purchases their wine directly from Vinesia’s initial inventory.
Please note that this does not apply to secondary sales on the Vinesia marketplace.
After the first year, a service fee of 2.4% per annum is applied.
This fee covers the core tech that enables Vinesia to offer our “Peace of Mind” pledge towards our investors (Proof of Authenticity, Proof of Ownership, Proof of Storage Conditions).It also covers the costs of storage, insurance, and optimal storage conditions.Finally, it funds the development of new functionalities which are on our roadmap for the future.
The 2.4% service decreases based on the volume of your investments (Asset Under Management, AUM).</div>

  ) },
  ];
  return (
    <>
    <title>Cart</title>

    <div className=" pb-40">
      <div className=" max-w-[1066px] mx-auto px-4">
        <h1 className="text-[#2F222B] text-4xl font-light pt-[90px] pb-12">
          Cart
        </h1>

        {/* Table Starts */}
        {cartItems?.length > 0 ? (
          cartItems?.map((item: CartItem, i: any) => {
            return (
              <div key={i}>
                <CartCard item={item} />
              </div>
            );
          })
        ) : (
          <div className="text-center p-6 border-b-2 border-[rgba(191, 77, 32, 0.20)] bg-[#FAF5EA]">
            <p className="font-semibold text-lg">Your cart is empty</p>
          </div>
        )}
        {cartItems?.length > 0 ? (
          <div className=" p-6 border-b-2 border-[rgba(191, 77, 32, 0.20)] bg-[#FAF5EA]">
            <div className="flex justify-between">
              <p className=" font-semibold text-lg">Total Price</p>
              <p className=" font-semibold text-lg">
                {getPriceText(getCartTotal())}
              </p>
            </div>
          </div>
        ) : (
          ""
        )}

        <CartControls
          btnOneTittle="Back"
          btnTwoTittle="Continue"
          nextStep="Billing Details"
          disable={cartItems.length == 0}
        />

        {/* Accordion */}
        <div className=" border-y-2 border-[#BF4D2020] divide-y divide-[#BF4D2020]">
          {items?.map((list, index) => {
            return (
              <div key={index}>
                <Accordion data={list} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
}
