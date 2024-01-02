import ShareCard from "@/common/ShareCard";
import { Share } from "next/font/google";
import React from "react";

export default function WineCard({ data }: { data: any }) {

  function getSize() {
    if (data.wine.size === 'Standard') {
      // return 'Standard (0,75l)'
      return '0,75l'
    }
    if (data.wine.size === 'Magnum') {
      return '1,5l'
    }

    return data.wine.size
  }

  function getPackageType() {
    if (data.wine.packageType === 'Case') {
      return 'Case of ' + data.wine.items
    }
    return data.wine.packageType
  }

  if (data === undefined) {
    return <></>
  }

  return (
    <div>
      <div>
        <div className="md:pt-8 flex">
          <div className="space-y-4">
            <div className="md:flex gap-4 items-center text-[#906447] text-base font-normal leading-snug">
              <p>This wine is sourced</p>
              <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20 md:block hidden"></div>
              <p className="text-zinc-800 text-base font-normal leading-snug">
                directly from the winery
              </p>
            </div>
            <div className="md:flex gap-4 items-center text-[#906447] text-base font-normal leading-snug">
              <p>Case & bottle size</p>
              <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20 md:block hidden"></div>
              <p className="text-zinc-800 text-base font-normal leading-snug">
                {getPackageType()} x {getSize()}
              </p>
            </div>
            <div className="md:flex gap-4 items-center text-[#906447] text-base font-normal leading-snug">
              <p>Type, Alc. </p>
              <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20 md:block hidden"></div>
              <p className="text-zinc-800 text-base font-normal leading-snug">
                {data.wine?.metadata?.color}, {data.wine?.metadata?.percentage}
              </p>
            </div>
            <div className="md:flex gap-4 items-center text-[#906447] text-base font-normal leading-snug space-y-1">
              <p>Origin </p>
              <div className="w-[30px] h-[0px] border   border-orange-700 border-opacity-20 md:block hidden"></div>
              <p className="text-orange-700 ">{data.wine?.winery?.name}</p>
              <div className="opacity-20 text-orange-700 md:block hidden">
                /
              </div>
              <p className="text-zinc-800 text-base font-normal leading-snug">
                {data.wine?.winery?.region?.name}, {data.wine?.winery?.region?.country?.name}
              </p>
            </div>
          </div>
        </div>
        <div className="my-8 max-w-[608px] h-[0px] border border-orange-700 border-opacity-20"></div>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.wine.ratings?.map((item: any, i: any) => {
              return (
                <div key={i} className=" col-span-1 rounded-sm">
                  <p className="text-[#906447] text-xs font-normal uppercase leading-3 tracking-tight pb-3 h-10">
                    {item.critic}
                  </p>
                  <div className="flex items-end">
                    <p className=" text-[#906447] text-[21px] font-lightw-6 h-6 leading-[29px] tracking-wide">
                      {item.rating}
                    </p>
                    <span className=" text-[#BCA291] text-xs font-normal uppercase leading-3 tracking-tight">
                      / {item.max}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="my-8 max-w-[608px] h-[0px] border border-orange-700 border-opacity-20"></div>

      </div>
    </div>
  );
}
