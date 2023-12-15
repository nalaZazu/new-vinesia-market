import { Wallet } from "@/assets/icons/Icons";
import InfoTooltip from "@/common/InfoTooltip";
import { profileOverview } from "@/constants/profileOverview";
import React from "react";

export default function InvestmentTab() {
  const countryName = [
    "3 months",
    "6 months",
    "1 year",
    "years to date",
    "6 months",
  ];
  return (
    <>
      <div>
        <p className="text-zinc-800 text-lg font-semibold leading-relaxed pb-6">
          Portfolio overview
        </p>
      </div>
      <div className="grid grid-cols-6 gap-8">
        <div className="col-span-2">
          {profileOverview?.map((item, i) => {
            const {
              id,
              title,
              subtext,
              amount,
              dates,
              tooltip,
              wallet,
              blocktool,
            } = item;
            return (
              <div
                key={i}
                className="flex flex-col gap-4 justify-center max-w-[264px] h-[193.33px] p-6 rounded border border-orange-700 border-opacity-20 mb-4"
              >
                <div>
                  <p className="flex gap-2 text-[#906447] text-xs font-normal uppercase leading-[18px] tracking-tight pb-2">
                    {title}
                    {wallet && <Wallet />}
                    {tooltip && <InfoTooltip />}
                  </p>

                  <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
                    {subtext}
                  </p>
                  <p className="text-neutral-600 text-xs font-normal uppercase leading-[18px] tracking-tight">
                    {amount}
                  </p>
                </div>
                <div className="flex gap-2 text-zinc-500 text-xs font-normal leading-[18px]">
                  {dates}
                  {blocktool && <InfoTooltip />}
                </div>
              </div>
            );
          })}
        </div>

        <div></div>
      </div>
    </>
  );
}
