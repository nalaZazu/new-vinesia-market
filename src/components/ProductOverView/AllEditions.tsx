"use client";
import React, { useState } from "react";
import ProductCard from "../productCard/page";
import TabButton from "@/common/TabButton";
import DropDownButton from "@/common/DropDownButton";
import Link from "next/link";
// import { ArrowBtn } from "@/assets/icons/Icons";

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

  return (
    <>
      <div className="bg-orange-700 bg-opacity-10">
        <div className="container mx-auto pt-24 pb-16 px-4  lg:px-0 ">
          <div className="pb-20">
            <div className="flex justify-between items-center gap-5">
              <div>
                <h2 className="text-zinc-800 text-4xl font-light font-['Canela'] leading-[44px]">
                  All editions
                </h2>
              </div>

              <div className="flex gap-2 items-center">
                <p className="text-stone-600 text-base font-normal font-['Albert Sans'] leading-snug">
                  Sort by
                </p>
                <DropDownButton />
              </div>
            </div>
            <div className="flex justify-around mx-auto py-8">
              <div className="w-full  border-t-2  border-orange-700 border-opacity-20">
                <TabButton />
                <div className=" flex items-center py-3 gap-2">
                  <input
                    checked={firstSale}
                    onChange={(e) => setFirstSale(e?.target?.checked ? 1 : 0)}
                    type="checkbox"
                    className="w-5 h-5"
                  />
                  <div className="text-neutral-900 text-sm font-normal tracking-tight">
                    First sale
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-4 md:grid-cols-1 gap-8 md:px-0 px-4">
            {[1, 2, 3, 4, 5, 6, 7, 8]?.map((item: any, i: any) => {
              return (
                <div>
                  <ProductCard />
                </div>
              );
            })}

            <div className="flex justify-center mt-8">
              <button className="py-2.5 px-4 bg-bgsecondary text-white rounded-lg text-center">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
