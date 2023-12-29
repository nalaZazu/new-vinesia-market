import React from "react";
import vinesiasell1 from "@/assets/images/secrutiyinvestment.png";
import vinesiasell2 from "@/assets/images/secrutiyinvestment1.png";
import Image from "next/image";

export default function VinesiaSelling() {
  return (
    <div>
      <h2 className="md:max-w-[715px] w-full text-zinc-800 text-7xl font-normal leading-[84px] tracking-[-1.44px] pb-12">
        Selling Wines
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 pb-16">
        <div className="md:pe-[141px] pe-0">
          <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
            How to sell
          </p>
          <div className="py-8">
            <p className="pb-6 text-neutral-600 text-base font-normal font-['Albert Sans'] leading-snug">
              When you decide to sell, you have the option to directly list your
              investment on our marketplace, similar to selling stocks or NFTs,
              to facilitate liquidity:
            </p>
            <p className="pb-6 text-neutral-600 text-base font-normal font-['Albert Sans'] leading-snug">
              You can set an ask price for your wine asset on our marketplace.
              When another investor agrees to your price and completes the
              purchase, the transaction is finalized with no additional
              transaction fee from Vinesia.
            </p>
          </div>
        </div>
        <div className=" text-end">
          <Image
            className="max-w-[548px] h-auto"
            src={vinesiasell1}
            alt="Transistor"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 ">
        <div className="md:order-1 order-2 md:pe-[140px] ps-0 ">
          <Image className="" src={vinesiasell2} alt="Transistor" />
        </div>
        <div className="flex items-end md:order-2 order-1 md:pe-[117px] ps-0 ">
          <div className="py-8">
            <p className="pb-6 text-zinc-800 text-lg font-semibold font-['Albert Sans'] leading-relaxed">
              How you can monitor your investment?
            </p>
            <p className=" text-neutral-600 text-base font-normal leading-snug">
              Your primary tool for investment monitoring is your personal
              Vinesia dashboard. Accessible anytime, it provides a comprehensive
              view of your current wine holdings, their market values, and
              performance over time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
