"use client";
import React from "react";
import { ArrowLongRight, LinkIcon } from "@/assets/icons/Icons";
import { EditionOverview } from "@/types/editionOverview.dto";

export default function AssetInfo({item}:{item: EditionOverview} ) {
  return (
    <div>
      <div className="md:pt-8 flex ">
        <div className="space-y-4">
          <div className="md:flex gap-4 items-center">
            <p className="text-[#906447] text-base font-normal leading-snug md:pb-0 pb-1">
              Wine asset ID
            </p>
            <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20 md:block hidden"></div>
            <div className="flex gap-2 items-center">
              <p className="text-zinc-800 text-base font-normal leading-snug">
                {item.id}
              </p>
              <LinkIcon />
            </div>
          </div>
          <div className="md:flex gap-4 items-center">
            <p className="text-[#906447] text-base font-normal leading-snug">
              Owner
            </p>
            <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20 md:block hidden"></div>
            <p className="text-zinc-800 text-base font-normal leading-snug">
              @{item.owner}
            </p>
          </div>
          <div className="md:flex gap-4 items-center">
            <p className="text-[#906447] text-base font-normal leading-snug">
              Release date
            </p>
            <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20 md:block hidden"></div>
            <p className="text-zinc-800 text-base font-normal leading-snug">
              12.09.2023
              {item.releaseDetails.releaseDate?.toISOString()}
            </p>
          </div>
          {/* <div className="md:flex gap-4 items-center">
            <p className="text-[#906447] text-base font-normal leading-snug">
              Link to contract
            </p>
            <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20 md:block hidden"></div>
            <div className="flex items-center gap-4">
              <p className="text-center text-orange-700 text-xs font-normal uppercase leading-3 tracking-tight">
                LINK TO THE DOCUMENT
              </p>
              <ArrowLongRight />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
