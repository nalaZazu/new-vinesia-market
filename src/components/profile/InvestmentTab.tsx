import { Wallet } from "@/assets/icons/Icons";
import InfoTooltip from "@/common/InfoTooltip";
import TabButton from "@/common/TabButton";
import { profileOverview } from "@/constants/profileOverview";
import React from "react";
import Appactivity from "../charts/page";
import { ListCard } from "@/common/Components";

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
      <div className="bg-[#F7EFDF] py-6 ps-6 pr-8">
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

          <div className="col-span-4 border-t-2 border-orange-700 border-opacity-20">
            <TabButton data={countryName} />
            <div className="flex items-end justify-between pb-4 pt-5">
              <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
                Estimated portfolio value
              </p>
              <p className="text-zinc-500 text-xs font-normal leading-[18px]">
                Last updated: 10/10/2023
              </p>
            </div>
            <div className="bg-[#F3E8CF] p-6">
              <Appactivity />
            </div>
            <div className="grid grid-cols-5 pt-3 px-4">
              <div className="col-span-3">
                <p className="text-zinc-800 text-base font-normal leading-snug">
                  01/01/2023
                </p>
              </div>

              <div className="col-span-2 flex justify-between">
                <p className="text-zinc-800 text-base font-normal leading-snug">
                  20/02
                </p>
                <p className="text-zinc-800 text-base font-normal leading-snug">
                  31/03/2023
                </p>
              </div>
            </div>
            <div className="max-w-[576px] h-[0px] border border-orange-700 border-opacity-20 my-8"></div>
            <div className="pb-2 px-4">
              <p className="text-zinc-800 text-lg font-semibold font-['Albert Sans'] leading-relaxed">
                Estimated Returns
              </p>
            </div>
            <div>
              <ListCard title="Estimated increase in value" value="€55,000" />
              <ListCard
                title="Performance in %"
                value="+1555%"
                valueClass="text-green-700"
              />
              <ListCard title="Costs" value="€12,200" />
              <ListCard
                title="Number of wine assets invested in"
                value="25"
                subTitle={"Sold"}
                subValue={2}
              />
              <div className="bg-[#F1DFCC]">
                <ListCard
                  title="Total"
                  value="€42,800"
                  titleClass="text-lg font-semibold"
                  valueClass="text-lg font-semibold"
                  subTitle={"Total wine assets"}
                  subValue={23}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
