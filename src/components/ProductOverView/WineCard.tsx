import ShareCard from "@/common/ShareCard";
import { Share } from "next/font/google";
import React from "react";

export default function WineCard() {
  return (
    <div>
      <div>
        <div className="md:pt-8 flex">
          <div className="space-y-4">
            <div className="md:flex gap-4 items-center text-stone-500 text-base font-normal leading-snug">
              <p>First Release Date</p>
              <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20 mb:block hidden"></div>
              <p className="text-zinc-800 text-base font-normal leading-snug">
                Dec 29, 2023
              </p>
            </div>
            <div className="md:flex gap-4 items-center text-stone-500 text-base font-normal leading-snug">
              <p>This wine is sourced</p>
              <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20 mb:block hidden"></div>
              <p className="text-zinc-800 text-base font-normal leading-snug">
                directly from the winery
              </p>
            </div>
            <div className="md:flex gap-4 items-center text-stone-500 text-base font-normal leading-snug">
              <p>Case & bottle size</p>
              <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20 mb:block hidden"></div>
              <p className="text-zinc-800 text-base font-normal leading-snug">
                99 bottle case, Double Magnum (1,5l)
              </p>
            </div>
            <div className="md:flex gap-4 items-center text-stone-500 text-base font-normal leading-snug">
              <p>Type </p>
              <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20 mb:block hidden"></div>
              <p className="text-zinc-800 text-base font-normal leading-snug">
                Red, 14% Alc
              </p>
            </div>
            <div className="md:flex gap-4 items-center text-stone-500 text-base font-normal leading-snug space-y-1">
              <p>Origin </p>
              <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20 mb:block hidden"></div>
              <p className="text-zinc-800 text-base font-normal leading-snug">
                Winery
              </p>
              <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20 mb:block hidden"></div>
              <p>Château Le Pin </p>
              <div className="opacity-20 text-orange-700 mb:block hidden">
                /
              </div>
              <p className="text-zinc-800 text-base font-normal leading-snug">
                France, Region, Appellation
              </p>
            </div>
          </div>
          <div></div>
        </div>
        <div className="my-8 max-w-[608px] h-[0px] border border-orange-700 border-opacity-20"></div>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4]?.map((item: any, i: any) => {
              return (
                <div key={i} className=" col-span-1 rounded-sm">
                  <p className="text-stone-500 text-xs font-normal uppercase leading-3 tracking-tight pb-3">
                    A. Critic name
                  </p>
                  <div className="flex items-end">
                    <p className=" text-zinc-800 text-[21px] font-lightw-6 h-6 leading-[29px] tracking-wide">
                      87/
                    </p>
                    <span className=" text-stone-400 text-xs font-normal uppercase leading-3 tracking-tight">
                      100
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="my-8 max-w-[608px] h-[0px] border border-orange-700 border-opacity-20"></div>
        <div className="hidden md:block">
          <ShareCard />
        </div>
      </div>
    </div>
  );
}
