import { NextIcon, PrevIcon } from "@/assets/icons/Icons";
import Accordion from "@/common/Accordion";
import { CartControls } from "@/common/Components";
import CartCard from "@/components/cart/cartCard";
import Link from "next/link";
import React from "react";

export default function Cart() {
  return (
    <div className=" pb-40">
      <div className=" max-w-[1066px] mx-auto px-4">
        <h1 className="text-[#2F222B] text-4xl font-light pt-[90px] pb-12">
          Cart
        </h1>

        {/* Table Starts */}
        {[0, 1]?.map((d: any, i: any) => {
          return (
            <div key={i}>
              <CartCard />
            </div>
          );
        })}
        <div className=" p-6 border-b-2 border-[rgba(191, 77, 32, 0.20)] bg-[#FAF5EA]">
          <div className="flex justify-between">
            <p className=" font-semibold text-lg">Total Price</p>
            <p className=" font-semibold text-lg">€ 10,600</p>
          </div>
        </div>
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
        <Link href="/checkout">
        <CartControls />
        </Link>
        {/* Accordion */}
        <div className=" border-y-2 border-[#BF4D2020] divide-y divide-[#BF4D2020]">
          <Accordion />
          <Accordion />
        </div>
      </div>
    </div>
  );
}
