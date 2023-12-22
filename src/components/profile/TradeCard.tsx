"use client";
import React, { useState } from "react";
import Image from "next/image";
import winebotel from "@/assets/images/big1.png";
import { InfoIcon, LinkIcon, NextIcon } from "@/assets/icons/Icons";
const dataArray = [
  {
    label: "PURCHASE PRICE",
    value: "€1,100",
  },
  {
    label: "PURCHASE DATE",
    value: "10/10/2023",
  },
  {
    label: "EST. VALUE",
    value: "€5,900",
  },
];

export default function TradeCard({ handleNext }: { handleNext?: any }) {
  return (
    <div>
      <div className="py-6 bg-[#FAF5EA] rounded px-6">
        <div className="flex flex-col pb-6">
          <div className="flex gap-2 items-center pb-2">
            <h4 className="text-zinc-800 text-[21px] font-light leading-[29px] tracking-wide">
              1# Brunello di Montalcino {"Piaggione"} | 2019
            </h4>
            <LinkIcon />
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-zinc-800 text-xs font-normal leading-[18px]">
              6 single bottles
            </p>
            <span className=" w-6">
              <InfoIcon fill={"#BF4D20"} />
            </span>
          </div>
        </div>

        <div className="gap-20 grid grid-cols-3 max-w-[824px] mx-auto">
          <div>
            <div className="flex py-9 px-5">
              <Image
                src={winebotel}
                alt="Picture of the author"
                className="w-full h-auto"
              />
            </div>
            <div className="w-[100px] h-[29px] mx-auto pl-1 pr-2 py-1 bg-zinc-800 rounded-[30px] border justify-center items-center gap-1.5 flex">
              <img
                className="w-[21px] h-[21px] rounded-[55.56px] shadow border border-red-600"
                src="https://via.placeholder.com/21x21"
              />
              <p className="text-center text-white text-xs font-normal uppercase leading-[18px] tracking-tight">
                ARTWORK
              </p>
            </div>
          </div>

          <div className="max-w-[394px] flex flex-col py-12 col-span-2">
            <div className="flex-col gap-6 flex">
              <div className="flex-col gap-1 flex max-w-[394px]">
                <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
                  Trade Wine Asset
                </p>
                <p className="text-neutral-600 text-base font-normal leading-snug">
                  To allow other traders to buy, create an ask pirce. Remember
                  that your wine asset can be sold right away
                </p>
              </div>
              <button
                onClick={handleNext}
                className="max-w-[188px] px-8 py-[22px] bg-orange-700 rounded-[48px] gap-3 flex items-center"
              >
                <p className="text-white text-xs font-normal uppercase leading-[18px] tracking-tight">
                  Set ask price
                </p>
                <NextIcon fill={"#fff"} />
              </button>
            </div>
            <div className="gap-[13px] flex pt-10">
              <div className="w-6 h-6 relative">
                <div className="w-6 h-6 left-0 top-0 absolute bg-orange-50 rounded-md border border-zinc-800" />
              </div>
              <div className="w-[249px] text-neutral-900 text-base font-normal leading-snug">
                let me know if anyone bids
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FAF5EA] pb-6">
        <div className="border border-orange-700 border-opacity-20 mb-6"></div>
        <div className="px-6 justify-between flex">
          {dataArray.map((item, i) => (
            <div
              className="h-[46px] flex-col justify-between items-start inline-flex"
              key={i}
            >
              <p className="text-stone-500 text-xs font-normal uppercase leading-[18px] tracking-tight">
                {item.label}
              </p>
              <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
