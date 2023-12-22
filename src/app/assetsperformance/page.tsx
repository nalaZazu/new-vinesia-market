"use client";
import React from "react";
import Image from "next/image";
import AssetsBanner from "@/components/AssetsPerformance/AssetsBanner";
import InvestorsLove from "@/components/AssetsPerformance/InvestorsLove";
import Appactivity from "@/components/charts/page";

export default function AssetsPerformance() {
  return (
    <div className="absolute top-0 -z-10 left-0 right-0">
      <div>
        <div className="relative">
          <AssetsBanner />
        </div>
      </div>

      <div className="py-40">
        <div className="container mx-auto px-4">
          <InvestorsLove />
        </div>
      </div>

      <div className="py-28 bg-[#7D302E]">
        <div className="container mx-auto px-4">
          <h3 className="text-white text-4xl font-light leading-[44px] pb-6">
            10 years. 120% increase.
          </h3>
          <div className="grid grid-cols-2 gap-8">
            <p className="max-w-[608px] text-red-300 text-base font-normal leading-snug tracking-[-0.32px]">
              That’s been the history of fine wine as an asset. While investing
              in wine carries risks, just like other investments,  history
              proves it has the potential for substantially high returns.
            </p>
            <p className="max-w-[608px] text-red-300 text-base font-normal leading-snug tracking-[-0.32px]">
              Fine wine value grows over time as it matures and becomes rarer.
              It has shown consistent positive performance over long periods and
              is resilient during economic downturns. That has been the
              historical performance of fine wine as an asset class (2010-2020).
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 pt-10">
            <div className="bg-[#F9F5EB] p-6">
              <Appactivity />
            </div>

            <div className="bg-[#F9F5EB] p-6">
              <Appactivity />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
