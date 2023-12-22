"use client";
import React, { useState } from "react";
import Image from "next/image";
import winebotel from "@/assets/images/big1.png";
import avatarBase from "@/assets/images/avatarBase.png";
import {
  ArrowLongRight,
  InfoIcon,
  LinkIcon,
  NextIcon,
} from "@/assets/icons/Icons";
import TabButton from "@/common/TabButton";
import AskPrice from "../AskPrice/page";
import TradeCard from "./TradeCard";

export default function PortfolioOverview() {
  const [open, setOpen] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleNext = () => {
    setOpenModal2(!openModal2);
    setOpen(!open);
  };
  const countryName = ["ALL", "TRANSACTIONS", "BIDS", "ASKS"];
  return (
    <>
      <AskPrice open={openModal2} setOpen={() => setOpenModal2(!openModal2)} />
      <div>
        <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
          Portfolio overview
        </p>
        <div className="max-w-[928px] h-[0px] border border-orange-700 border-opacity-20 my-6"></div>
        <div className="pb-4">
          <span className="text-zinc-500 text-xs font-normal leading-[18px]">
            Investement portfolio /
          </span>
          <span className="text-zinc-800 text-xs font-normal leading-[18px]">
            1# Brunello Di Montaclcino “Piaggione” | 2019
          </span>
        </div>

        {/* headding */}

        <TradeCard handleNext={handleNext} />

        {/* col 2 */}
        <div className="pt-6 my-8">
          <div className=" bg-[#FAF5EA]">
            <div className="px-6 pt-6">
              <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
                Value contribution of this wine asset
              </p>
            </div>
            <div className="border border-orange-700 border-opacity-20 mt-6"></div>
            <div className="py-8 grid grid-cols-8 gap-7 items-center">
              <div className="text-end col-span-3">
                <p className="text-[#906447] text-xs font-normal uppercase leading-[18px] tracking-tight pb-2">
                  This wine asset est. value
                </p>
                <p className="text-zinc-800 text-lg font-semibold leading-relaxed pb-2">
                  €5,900
                </p>
                <p className="text-zinc-500 text-base font-normal leading-snug">
                  0,1% of your estimated portfolio value
                </p>
              </div>
              <div className="col-span-2">
                <div className="max-w-[215px] h-[215px] bg-[#28475C] rounded-full"></div>
              </div>
              <div className="col-span-3">
                <p className="text-xs font-normal uppercase leading-[18px] tracking-tight">
                  Current market value of your portfolio
                </p>
                <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
                  €55,000
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* col 3 */}
        <div className="bg-[#FAF5EA] rounded">
          <div className="px-6 py-6">
            <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
              Estimated performance
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-6  bg-[#F3E8CF] p-6">
            <div className=" col-start-2">
              <p className="text-stone-500 text-xs font-normal uppercase leading-[18px] tracking-tight  ">
                Purchase Price
              </p>
            </div>
            <p className="text-stone-500 text-xs font-normal uppercase leading-[18px] tracking-tight">
              Last 3 months
            </p>
            <p className="text-stone-500 text-xs font-normal uppercase leading-[18px] tracking-tight">
              Last 6 months
            </p>
            <p className="text-stone-500 text-xs font-normal uppercase leading-[18px] tracking-tight">
              2023 YTD
            </p>
            <p className="text-stone-500 text-xs font-normal uppercase leading-[18px] tracking-tight">
              All time
            </p>
          </div>
          <div className="grid grid-cols-6 p-6 bg-[#FAF5EA] border-b border-orange-700 border-opacity-20">
            <div className="col-start-1 col-end-3">
              <p className="w-[132px] text-zinc-800 text-base font-normal leading-snug">
                Estimated increase in value
              </p>
            </div>
            <div>
              <p className=" text-zinc-800 text-base font-normal leading-snug">
                €60
              </p>
              <p className="text-green-700 text-xs font-normal leading-[18px]">
                +25%
              </p>
            </div>
            <div>
              <p className=" text-zinc-800 text-base font-normal leading-snug">
                €1,000
              </p>
              <p className="text-green-700 text-xs font-normal leading-[18px]">
                +55%
              </p>
            </div>
            <div>
              <p className=" text-zinc-800 text-base font-normal leading-snug">
                €4,800
              </p>
              <p className="text-green-700 text-xs font-normal leading-[18px]">
                +155%
              </p>
            </div>
            <div>
              <p className=" text-zinc-800 text-base font-normal leading-snug">
                €4,800
              </p>
              <p className="text-green-700 text-xs font-normal leading-[18px]">
                +1555%
              </p>
            </div>
          </div>
          <div className="grid grid-cols-6 p-6 bg-[#FAF5EA] border-b border-orange-700 border-opacity-20">
            <p className="text-zinc-800 text-base font-normal leading-snug">
              Purchase Price
            </p>
            <p className=" text-zinc-800 text-base font-normal leading-snug">
              €1,100
            </p>
          </div>
          <div className="grid grid-cols-6 p-6 bg-[#FAF5EA]">
            <div className=" col-start-1 col-end-3">
              <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
                Total
              </p>
            </div>
            <p className=" text-zinc-800 text-lg font-semibold leading-relaxed">
              €1,160
            </p>
            <p className=" text-zinc-800 text-lg font-semibold leading-relaxed">
              €2,100
            </p>
            <p className=" text-zinc-800 text-lg font-semibold leading-relaxed">
              €5,900
            </p>
            <p className=" text-zinc-800 text-lg font-semibold leading-relaxed">
              €5,900
            </p>
          </div>
        </div>
        {/* col 4 */}
        <div className="bg-[#FAF5EA] rounded my-8">
          <div className="px-6 py-6">
            <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
              Transaction history
            </p>
          </div>
          <div className="border-t-2 border-orange-700 border-opacity-20">
            <TabButton data={countryName} />
          </div>
          {[1, 2, 3, 4].map((item, i) => (
            <div
              key={i}
              className="px-6 py-4 border-b border-orange-700 border-opacity-20 flex justify-between items-center"
            >
              <div>
                <div>
                  <p className=" text-zinc-800 text-lg font-semibold leading-relaxed">
                    @Marta
                  </p>
                </div>
                <div className="justify-start gap-2 flex flex-col">
                  <div className="flex gap-2">
                    <p className="text-neutral-600 text-base font-normal leading-snug">
                      Place a bid 50 560 EUR
                    </p>
                    <LinkIcon />
                  </div>
                  <div className="flex gap-2">
                    <p className="text-zinc-500 text-xs font-normal leading-tight">
                      5 minutes ago
                    </p>
                    <LinkIcon />
                  </div>
                </div>
              </div>
              <Image
                src={avatarBase}
                alt="Picture of the author"
                className=""
              />
            </div>
          ))}
          <div className="flex justify-center py-6 items-center gap-3">
            <button className="text-center text-orange-700 text-xs font-normal font-['Albert Sans'] uppercase leading-[18px] tracking-tight">
              SEE MORE
            </button>
            <NextIcon />
          </div>
        </div>
      </div>
    </>
  );
}
