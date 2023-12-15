"use client";
import React from "react";
import { ArrowLongRight, LinkIcon } from "@/assets/icons/Icons";

export default function AssetInfo() {
  return (
    <div>
      {" "}
      <div className="md:pt-8 flex ">
        <div className="space-y-4">
          <div className="md:flex gap-4 items-center">
            <p className="text-[#906447] text-base font-normal leading-snug">
              Wine asset ID
            </p>
            <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
            <p className="text-zinc-800 text-base font-normal leading-snug">
              1234_1234_1354658
            </p>
            <LinkIcon />
          </div>
          <div className="md:flex gap-4 items-center">
            <p className="text-[#906447] text-base font-normal leading-snug">
              Owner
            </p>
            <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
            <p className="text-zinc-800 text-base font-normal leading-snug">
              @owner_with_very_long_wa...
            </p>
          </div>
          <div className="md:flex gap-4 items-center">
            <p className="text-[#906447] text-base font-normal leading-snug">
              Release date
            </p>
            <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
            <p className="text-zinc-800 text-base font-normal leading-snug">
              12.09.2023
            </p>
          </div>
          <div className="md:flex gap-4 items-center">
            <p className="text-[#906447] text-base font-normal leading-snug">
              Link to contract
            </p>
            <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
            <p className="text-center text-orange-700 text-xs font-normal uppercase leading-3 tracking-tight">
              LINK TO THE DOCUMENT
            </p>
            <ArrowLongRight />
          </div>
        </div>
      </div>
    </div>
  );
}
