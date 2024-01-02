import DropDownButton from "@/common/DropDownButton";
import React from "react";
import ProductCards from "../productCard/page";
import { SearchIcon } from "@/assets/icons/Icons";
import TabButton from "@/common/TabButton";
import Product from "../products/page";
import useSWR from "swr";
import { useUser } from "@/context/user";
import Loading from "../loading/loading";
import { fetcherWithToken } from "@/utils/common";
import { ItemCardDto } from "@/types/productCard.dto";

export default function InvestmentCard() {
  const { jwtToken, isLoading } = useUser()
  const {data, isLoading: isDataLoading, error, mutate} = useSWR([`${process.env.NEXT_PUBLIC_API_ADDRESS}profile/investments`, jwtToken], fetcherWithToken)

  if (isLoading || isDataLoading) {
    return <Loading text="Loading your investments ..."/>
  }

  const filterName = ["ALL", "CURRENTLY SELLING", "NOT CURRENtly SELLING"];
  return (
    <div>
      <div className="flex flex-col">
        <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
          Your investments
        </p>
        <div className="pt-4">
          <span className="text-neutral-600 text-base font-normal leading-snug">
            Below you can see the list of wine assets that you have. 
            
            {/* For each
            wine assets you can set the ask price, you will find this option
            under {"Actions"}. Once you set the {"Ask price"}, a given wine
            asset can be sold at any time. If another investor buys your wine
            asset, it will disappear from the list and appear under */}
          </span>
          {/* <span className="text-orange-700 text-base font-normal leading-snug">
            Bids & Sales.
          </span> */}
        </div>
      </div>
      <div className="md:w-[928px] h-[0px] border border-orange-700 border-opacity-20 my-10"></div>
      {/* <div className="grid grid-cols-2 gap-16 pb-12">
        <div className=" border-t-2 border-orange-700 border-opacity-20">
          <TabButton data={filterName} />
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="flex border border-stone-400 rounded-full items-center px-3 gap-2">
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
      </div> */}

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {data.map((item: ItemCardDto, i: any) => {
          return (
            <div key={i}>
              <ProductCards item={item} />
            </div>
          );
        })}
      </div>
      <Product />
    </div>
  );
}
