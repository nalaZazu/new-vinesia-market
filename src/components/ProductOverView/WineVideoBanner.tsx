"use client";
import React from "react";
import Image from "next/image";
import videoplay from "@/assets/images/winevideobutton.svg";

export default function WineVideoBanner() {
  return (
    <div>
      <div className="w-full md:h-[480px]  h-[480px] bg-no-repeat bg-cover bg-center bg-[url('https://i.ibb.co/j3xH23h/winevideo.png')] relative">
        <div className="h-[480px] justify-center mx-auto items-center gap-8 flex">
          <h3 className="text-white text-4xl font-light leading-[44px]">
            How to invest in wine
          </h3>
          <div className="w-[174.04px] h-[174.12px] relative">
            <Image src={videoplay} alt="" />
          </div>
          <div className="flex-col justify-start items-start gap-[17px] inline-flex">
            <p className="w-[303px] text-white text-base font-normal leading-snug">
              Château Le Pin is a mini chateau in the Pomerol appellation on the
              right bank of the Bordeaux region.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
