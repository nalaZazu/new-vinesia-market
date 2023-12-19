"use client";
import React, { useState } from "react";
import TabButton from "@/common/TabButton";
import DropDownButton from "@/common/DropDownButton";
import Product from "../products/page";
import { Checkbox } from "@/common/Components";

export default function AllEditions({
  products,
  firstSale,
  setFirstSale,
}: {
  products?: any;
  firstSale?: any;
  setFirstSale?: any;
}) {
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen, setIsOpen] = useState(false);
  const countryName = ["France", "Germany", "Switzerland"];

  return (
    <>
      <div className="container mx-auto md:pt-24 md:pb-16 py-16 md:px-0 px-4">
        <div className="md:pb-0 pb-8">
          <div className="flex justify-between items-center gap-5">
            <div>
              <h2 className="text-zinc-800 md:text-4xl text-[21px] font-light leading-[44px]">
                All editions
              </h2>
            </div>
            {/* desktop DropDownButton*/}
            <div className=" md:block hidden">
              <div className="flex gap-2 items-center">
                <p className="basis-1/2 text-stone-600 text-base font-normal  leading-snug">
                  Sort by
                </p>
                <DropDownButton />
              </div>
            </div>
          </div>
          {/* desktop DropDownButton */}
          <div className="flex justify-around mx-auto py-8">
            <div className="w-full  border-t-2  border-orange-700 border-opacity-20">
              <TabButton data={countryName} />
              {/* mobile DropDownButton*/}
              <div className=" md:hidden block pt-6">
                <div className="flex gap-2 items-center justify-between">
                  <p className="basis-1/4 text-stone-600 text-base font-normal  leading-snug">
                    Sort by
                  </p>
                  <div className=" basis-3/4">
                    <DropDownButton />
                  </div>
                </div>
              </div>

              <div className=" flex items-center md:pt-8 pt-4 gap-2 relative">
                <input
                  checked={firstSale}
                  onChange={(e) => setFirstSale(e?.target?.checked ? 1 : 0)}
                  type="checkbox"
                  className="w-5 h-5"
                />

                {/* <Checkbox/> */}
                <div className="text-neutral-900 text-sm font-normal tracking-tight">
                  First sale
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* desktop */}
        <div className="hidden sm:block ">
          {/* <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 px-4 container max-w-[1248px] mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8]?.map((item: any, i: any) => {
              return (
                <div key={i} className=" max-w-[288px] mx-auto">
                  <ProductCard />
                </div>
              );
            })}
          </div> */}
          <Product />
        </div>
        {/* mobile */}
        <div className="block sm:hidden">
          {/* <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-1 gap-8">
            {[1, 2]?.map((item: any, i: any) => {
              return (
                <div key={i} className="pb-6">
                  <ProductCard item={undefined} />
                </div>
              );
            })}
          </div> */}
          <Product />
        </div>
      </div>
    </>
  );
}
