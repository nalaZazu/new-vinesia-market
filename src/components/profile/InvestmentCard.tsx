import DropDownButton from "@/common/DropDownButton";
import React from "react";
import ProductCards from "../productCard/page";
import { SearchIcon } from "@/assets/icons/Icons";
import TabButton from "@/common/TabButton";

export default function InvestmentCard() {
  const countryName = ["ALL", "CURRENTLY SELLING", "NOT CURRENtly SELLING"];
  return (
    <div>
      <div className="flex flex-col pt-20">
        <p className="text-zinc-800 text-lg font-semiboldleading-relaxed">
          Your investments
        </p>
        <div className="pt-4">
          <span className="text-neutral-600 text-base font-normalleading-snug">
            Below you can see the list of wine assets that you have. For each
            wine assets you can set the ask price, you will find this option
            under {"Actions"}. Once you set the {"Ask price"}, a given wine
            asset can be sold at any time. If another investor buys your wine
            asset, it will disappear from the list and appear under
          </span>
          <span className="text-orange-700 text-base font-normalleading-snug">
            Bids & Sales.
          </span>
        </div>
      </div>
      <div className="w-[928px] h-[0px] border border-orange-700 border-opacity-20 my-10"></div>
      <div className="grid grid-cols-2 gap-16 pb-12">
        <div className=" border-t-2 border-orange-700 border-opacity-20">
          <TabButton data={countryName} />
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="flex border border-stone-400 rounded-full items-center px-3">
            <div>
              <SearchIcon fill={"#000"} />
            </div>
            <input
              type="search"
              className="h-14 bg-transparent py-2 text-[#BCA291] text-base font-normal leading-snug outline-none transition duration-200 ease-in-out focus:z-10 focus:shadow-none focus:outline-none "
              id="exampleSearch"
              placeholder="Search wine name"
            />
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <p className="text-stone-600 text-base font-normal leading-snug">
                Sort by
              </p>
            </div>
            <div>
              <DropDownButton />
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {[1, 2, 3, 4, 5, 6]?.map((item: any, i: any) => {
          return (
            <div key={i}>
              <ProductCards />
            </div>
          );
        })}
      </div>
    </div>
  );
}