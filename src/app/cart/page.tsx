"use client";
import { NextIcon, PrevIcon } from "@/assets/icons/Icons";
import Accordion from "@/common/Accordion";
import { CartControls } from "@/common/Components";
import CartCard from "@/components/cart/cartCard";
import { useCartContext } from "@/context/cart";
import { useUserContext } from "@/context/user";
import { ProductCardDto } from "@/types/productCard.dto";
import Link from "next/link";
import React from "react";

export default function Cart() {
  const { cartItems, cartTotal, getCartTotal } = useCartContext();
  const { getPriceText } = useUserContext();
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
    { id: 2, title: "Service fees" },
  ];
  return (
    <div className=" pb-40">
      <div className=" max-w-[1066px] mx-auto px-4">
        <h1 className="text-[#2F222B] text-4xl font-light pt-[90px] pb-12">
          Cart
        </h1>

        {/* Table Starts */}
        {cartItems?.length > 0 ? (
          cartItems?.map((item: ProductCardDto, i: any) => {
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

        {/* Table Ends */}

        {/* <div className="flex justify-end pt-8">
          <span className=" uppercase text-xs">
            <span className=" text-[#BF4D20]">next step :</span>
            &nbsp; Billng details
          </span>
        </div> */}

        {/* <div className="flex justify-between pt-4 pb-[106px]">
          <button className="flex items-center gap-4 border border-[#BF4D2020] rounded-full text-[#BF4D20] px-8 h-14">
            <PrevIcon />
            Back
          </button>
          <button className="flex items-center gap-4 border border-[#BF4D2020] rounded-full text-white px-8 h-14 bg-[#BF4D20]">
            Next <NextIcon fill={"white"} />
          </button>
        </div> */}
        <CartControls
          btnOneTittle="Back"
          btnTwoTittle="Continute"
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
  );
}
