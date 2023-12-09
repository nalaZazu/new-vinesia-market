"use client";
import React from "react";
import Image from "next/image";
import infologo from "@/assets/icons/info.svg";

// export default function PricingDetail({ release }: { release: any }) {
export default function PricingDetail() {
  return (
    <div>
      <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
        Pricing details
      </p>
      <div>
        {/* first box */}
        <div className=" grid gap-0 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 pt-6">
          <div className="gap-10 p-5 rounded-tl border-l border-t md:border-r-0 border-r border-orange-700 border-opacity-20 flex-col justify-between items-start inline-flex">
            <div className="flex items-center gap-3 text-stone-500 text-xs font-normal uppercase leading-3 tracking-tight">
              <p>Release Price </p>
              <Image
                src={infologo}
                alt="Picture of the author"
                className=" w-6 h-6 text-secondary"
              />
            </div>
            <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
              €38,888
            </p>
          </div>
          <div className="gap-10 p-5 rounded-tr border-l border-r border-t border-orange-700 border-opacity-20 flex-col justify-between items-start inline-flex">
            <div className="flex items-center gap-3 text-stone-500 text-xs font-normal uppercase leading-3 tracking-tight">
              <p>Average MARKET PRICE </p>
              <Image
                src={infologo}
                alt="Picture of the author"
                className=" w-6 h-6 text-secondary"
              />
            </div>
            <p className=" text-lg font-semibold text-gray-500 tracking-tight">
              €48,888
            </p>
          </div>
        </div>
        {/* second box */}
        <div className=" grid gap-0 lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
          <div className=" gap-10 rounded-bl border-l border-t border-b md:border-r-0 border-r border-orange-700 border-opacity-20 flex-col justify-between items-start flex p-5">
            <div>
              <p className=" text-stone-500 text-xs font-normal uppercase leading-3 tracking-tight">
                Highest Price
              </p>
              <p className=" text-stone-400 text-xs font-normal font-['Albert Sans'] leading-3">
                ever transacted for product
              </p>
            </div>
            <p className=" text-lg font-semibold text-gray-500 tracking-tight">
              €68,888
            </p>
          </div>

          <div className="gap-10 p-5 bg-slate-700 rounded-br border border-orange-700 border-opacity-20 flex-col justify-between items-start inline-flex">
            <div>
              <p className="text-white text-xs font-normal font-['Albert Sans'] uppercase leading-3 tracking-tight">
                Price Change
              </p>
              <p className=" text-slate-400 text-xs font-normal font-['Albert Sans'] leading-3">
                since first release
              </p>
            </div>
            <p className=" text-lg font-semibold text-white  tracking-tight">
              {/* +
              {`  ${(
                ((release?.highPrice - release?.releasePrice) /
                  release?.releasePrice) *
                100
              ).toFixed(3)} % ↑`} */}
              + 66.6%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
