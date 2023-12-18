import React from "react";
import Image from "next/image";
import winebotel from "@/assets/images/big1.png";
import avatarBase from "@/assets/images/avatarBase.png";
import {
  ArrowLongRight,
  InfoIcon,
  LinkIcon,
  NextIcon,
} from "@/assets/icons/Icons";
import TabButton from "@/common/TabButton";
const dataArray = [
  {
    label: "PURCHASE PRICE",
    value: "€1,100",
  },
  {
    label: "PURCHASE DATE",
    value: "10/10/2023",
  },
  {
    label: "EST. VALUE",
    value: "€5,900",
  },
];

export default function PortfolioOverview() {
  const countryName = ["ALL", "TRANSACTIONS", "BIDS", "ASKS"];
  return (
    <>
      <div>
        <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
          Portfolio overview
        </p>
        <div className="max-w-[928px] h-[0px] border border-orange-700 border-opacity-20 my-6"></div>
        <div className="pb-4">
          <span className="text-zinc-500 text-xs font-normal leading-[18px]">
            Investement portfolio /
          </span>
          <span className="text-zinc-800 text-xs font-normal leading-[18px]">
            1# Brunello Di Montaclcino “Piaggione” | 2019
          </span>
        </div>

        {/* headding */}

        <div className="py-6 bg-[#FAF5EA] rounded px-6">
          <div className="flex flex-col pb-6">
            <div className="flex gap-2 items-center pb-2">
              <h4 className="text-zinc-800 text-[21px] font-light leading-[29px] tracking-wide">
                1# Brunello di Montalcino "Piaggione" | 2019
              </h4>
              <LinkIcon />
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-zinc-800 text-xs font-normal leading-[18px]">
                6 single bottles
              </p>
              <span className=" w-6">
                <InfoIcon fill={"#BF4D20"} />
              </span>
            </div>
          </div>
          <div className="gap-20 flex max-w-[928px] mx-auto">
            <div>
              <div className="flex py-9 px-5">
                <Image
                  src={winebotel}
                  alt="Picture of the author"
                  className="max-w-[237.05px] h-[278px]"
                />
              </div>
              <div className="w-[100px] h-[29px] mx-auto pl-1 pr-2 py-1 bg-zinc-800 rounded-[30px] border justify-center items-center gap-1.5 flex">
                <img
                  className="w-[21px] h-[21px] rounded-[55.56px] shadow border border-red-600"
                  src="https://via.placeholder.com/21x21"
                />
                <p className="text-center text-white text-xs font-normal uppercase leading-[18px] tracking-tight">
                  ARTWORK
                </p>
              </div>
            </div>

            <div className="max-w-[394px] flex flex-col py-12">
              <div className="flex-col gap-6 flex">
                <div className="flex-col gap-1 flex max-w-[394px]">
                  <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
                    Trade Wine Asset
                  </p>
                  <p className="self-stretch text-neutral-600 text-base font-normal leading-snug">
                    To allow other traders to buy, create an ask pirce. Remember
                    that your wine asset can be sold right away
                  </p>
                </div>
                <button className="max-w-[188px] px-8 py-[22px] bg-orange-700 rounded-[48px] gap-3 flex items-center">
                  <p className="text-white text-xs font-normal uppercase leading-[18px] tracking-tight">
                    Set ask price
                  </p>
                  <NextIcon fill={"#fff"} />
                </button>
              </div>
              <div className="gap-[13px] flex pt-10">
                <div className="w-6 h-6 relative">
                  <div className="w-6 h-6 left-0 top-0 absolute bg-orange-50 rounded-md border border-zinc-800" />
                </div>
                <div className="w-[249px] text-neutral-900 text-base font-normal leading-snug">
                  let me know if anyone bids
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FAF5EA] pb-6">
          <div className="border border-orange-700 border-opacity-20 mb-6"></div>
          <div className="px-6 justify-between flex">
            {dataArray.map((item, i) => (
              <div
                className="h-[46px] flex-col justify-between items-start inline-flex"
                key={i}
              >
                <p className="text-stone-500 text-xs font-normal uppercase leading-[18px] tracking-tight">
                  {item.label}
                </p>
                <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-6 my-8">
          <div className=" bg-[#FAF5EA]">
            <div className="px-6 pt-6">
              <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
                Value contribution of this wine asset
              </p>
            </div>
            <div className="border border-orange-700 border-opacity-20 mt-6"></div>
            <div className="py-8 grid grid-cols-8 gap-7 items-center">
              <div className="text-end col-span-3">
                <p className="text-[#906447] text-xs font-normal uppercase leading-[18px] tracking-tight pb-2">
                  This wine asset est. value
                </p>
                <p className="text-zinc-800 text-lg font-semibold leading-relaxed pb-2">
                  €5,900
                </p>
                <p className="text-zinc-500 text-base font-normal leading-snug">
                  0,1% of your estimated portfolio value
                </p>
              </div>
              <div className="col-span-2">
                <div className="max-w-[215px] h-[215px] bg-[#28475C] rounded-full"></div>
              </div>
              <div className="col-span-3">
                <p className="text-xs font-normal uppercase leading-[18px] tracking-tight">
                  Current market value of your portfolio
                </p>
                <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
                  €55,000
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* col 3 */}
        <div className="bg-[#FAF5EA] rounded">
          <div className="px-6 py-6">
            <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
              Estimated performance
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between bg-[#F3E8CF] p-6">
            <p className="text-stone-500 text-xs font-normal uppercase leading-[18px] tracking-tight">
              Purchase Price
            </p>
            <p className="text-stone-500 text-xs font-normal uppercase leading-[18px] tracking-tight">
              Last 3 months
            </p>
            <p className="text-stone-500 text-xs font-normal uppercase leading-[18px] tracking-tight">
              Last 6 months
            </p>
            <p className="text-stone-500 text-xs font-normal uppercase leading-[18px] tracking-tight">
              2023 YTD
            </p>
            <p className="text-stone-500 text-xs font-normal uppercase leading-[18px] tracking-tight">
              All time
            </p>
          </div>
          <div className="flex justify-between p-6 bg-[#FAF5EA] border-b border-orange-700 border-opacity-20">
            <p className="w-[132px] text-zinc-800 text-base font-normal leading-snug">
              Estimated increase in value
            </p>
            <div>
              <p className="text-right text-zinc-800 text-base font-normal leading-snug">
                €60
              </p>
              <p className="text-green-700 text-xs font-normal leading-[18px]">
                +25%
              </p>
            </div>
            <div>
              <p className="text-right text-zinc-800 text-base font-normal leading-snug">
                €1,000
              </p>
              <p className="text-green-700 text-xs font-normal leading-[18px]">
                +55%
              </p>
            </div>
            <div>
              <p className="text-right text-zinc-800 text-base font-normal leading-snug">
                €4,800
              </p>
              <p className="text-green-700 text-xs font-normal leading-[18px]">
                +155%
              </p>
            </div>
            <div>
              <p className="text-right text-zinc-800 text-base font-normal leading-snug">
                €4,800
              </p>
              <p className="text-green-700 text-xs font-normal leading-[18px]">
                +1555%
              </p>
            </div>
          </div>
          <div className="flex justify-between p-6 bg-[#FAF5EA] border-b border-orange-700 border-opacity-20">
            <p className="text-zinc-800 text-base font-normal leading-snug">
              Purchase Price
            </p>
            <p className="text-right text-zinc-800 text-base font-normal leading-snug">
              €1,100
            </p>
          </div>
          <div className="flex justify-between p-6 bg-[#FAF5EA]">
            <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
              Total
            </p>
            <p className="text-right text-zinc-800 text-lg font-semibold leading-relaxed">
              €1,160
            </p>
            <p className="text-right text-zinc-800 text-lg font-semibold leading-relaxed">
              €2,100
            </p>
            <p className="text-right text-zinc-800 text-lg font-semibold leading-relaxed">
              €5,900
            </p>
            <p className="text-right text-zinc-800 text-lg font-semibold leading-relaxed">
              €5,900
            </p>
          </div>
        </div>
        {/* col 4 */}
        <div className="bg-[#FAF5EA] rounded my-8">
          <div className="px-6 py-6">
            <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
              Transaction history
            </p>
          </div>
          <div className="border-t-2 border-orange-700 border-opacity-20">
            <TabButton data={countryName} />
          </div>
          {[1, 2, 3, 4].map((item, i) => (
            <div
              key={i}
              className="px-6 py-4 border-b border-orange-700 border-opacity-20 flex justify-between items-center"
            >
              <div>
                <div>
                  <p className=" text-zinc-800 text-lg font-semibold leading-relaxed">
                    @Marta
                  </p>
                </div>
                <div className="justify-start gap-2 flex flex-col">
                  <div className="flex gap-2">
                    <p className="text-neutral-600 text-base font-normal leading-snug">
                      Place a bid 50 560 EUR
                    </p>
                    <LinkIcon />
                  </div>
                  <div className="flex gap-2">
                    <p className="text-zinc-500 text-xs font-normal leading-tight">
                      5 minutes ago
                    </p>
                    <LinkIcon />
                  </div>
                </div>
              </div>
              <Image
                src={avatarBase}
                alt="Picture of the author"
                className=""
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
