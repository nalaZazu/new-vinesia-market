import React from "react";
import Image from "next/image";
import ourvision from "@/assets/images/about-our-vision.png";

export default function OurVision() {
  return (
    <div>
      <div className="grid md:grid-cols-2">
        <div>
          <Image className="w-full h-auto" src={ourvision} alt="Transistor" />
        </div>
        <div className="flex md:ps-[139px] items-end">
          <div className="max-w-[501px]">
            <p className="text-xs text-zinc-800 font-normal uppercase leading-[18px] tracking-tight">
              Our
            </p>
            <h2 className="text-zinc-800 text-7xl font-normal leading-[84px]">
              Vision
            </h2>
            <div className="py-8">
              <p className=" text-zinc-800 text-lg font-semibold leading-relaxed pb-6">
                Offering the very best wines in the world with peace of mind and
                asset liquidity to our investor community
              </p>
              <p className=" text-neutral-600 text-base font-normal leading-snug">
                Your Peace of Mind as an investor is our obsession. To achieve
                this goal, we are moving from a “System of Trust” to a “System
                of Truth”.
                <br />
                Traditionally, you need to trust a third party that they hold
                your investment. With Vinesia, you can check it yourself at any
                time of the day, it’s recorded immutably on the blockchain, and
                that is the “System of Truth”. So are the storage conditions
                over time (temperature and hygrometry). Therefore, if you ever
                want to sell your asset, you can do it on our marketplace with
                liquidity for your asset and visual proof of how it was
                maintained over the years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
