"use client";
import React from "react";
import Image from "next/image";
import videoplay from "@/assets/images/winevideobutton.svg";
const text =
  " Château Le Pin is a mini chateau in the Pomerol appellation on the right bank of the Bordeaux region.";
export default function WineVideoBanner({
  title = "How to invest in wine",
  descripition = text,
}: {
  title?: any;
  descripition?: any;
}) {
  return (
    <div>
      <div className="w-full md:h-[480px]  h-[480px] bg-no-repeat bg-cover bg-center bg-[url('https://i.ibb.co/j3xH23h/winevideo.png')] relative">
        <div className="h-[480px] justify-center mx-auto items-center gap-8 flex flex-wrap md:px-0 px-4">
          <h3 className="text-white md:text-4xl text-2xl font-light leading-[44px]">
            {title}
          </h3>

          <div className="gap-[17px]">
            <p className="max-w-[303px] text-white md:text-start text-center text-base font-normal leading-snug">
              {descripition}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
