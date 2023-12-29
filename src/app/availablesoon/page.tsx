'use client'
import InvestBread from "@/common/InvestBread";
import xmark from "../../assets/icons/x-mark-anim.svg";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Dropdown from "@/common/DropDown/page";
import Newsletter from "@/components/newsletter/page";
import Footer from "@/components/footer/page";
import NewsletterMobile from "@/components/newsletter/MobileView";
import Product from "@/components/products/page";
import { MarksAnim } from "@/assets/icons/Icons";
import { ItemCardDto } from "@/types/productCard.dto";
import ScrollAnimation from "@/common/ScrollAnimation/page";
import useSWR from "swr";
import FilterSection from "@/components/FilterSection/page";

export default function AvailableSoon() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [priceRange, setPriceRange] = useState([]);
  const fetcher = async (url: string, payload?: string) => {
    const options = {
      method: "POST",
      ...(selectedFilters && {
        body: JSON.stringify({
          filters: selectedFilters,
          price:
            priceRange?.length > 0
              ? { min: priceRange[0], max: priceRange[1] }
              : {},
        }),
      }),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    console.log("fetch", url, payload);
    return fetch(url, options).then((res) => res.json());
  };

  const { data, error, isLoading, mutate } = useSWR(
    `${process.env.NEXT_PUBLIC_API_ADDRESS}products/search`,
    fetcher
  );
  useEffect(() => {
    mutate();
  }, [selectedFilters, priceRange, mutate]);

  return (
    <div>
      {/* <Headersecond /> */}
      <div className=" pt-6 container mx-auto px-3">
        <InvestBread />
        <div className=" mt-9 hidden md:block">
          <h2 className=" text-primary text-[144px] font-normal ">
            AvailableSoon
          </h2>
        </div>
        {/* for mobileView */}
        <div className="mt-9 md:hidden block">
          <h2 className=" text-zinc-800 text-6xl font-normal   leading-[68px]">
            AvailableSoon
          </h2>
        </div>
        {/* dropdown */}
        <div className="">
        <FilterSection
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        </div>
        
        {/* product list  */}
        <div className="">
            <Product items={data?.data} />
          </div>
       
      </div>
     
      {/* desktop Newsletter*/}
      <div className="hidden sm:block">
        <Newsletter />
      </div>
      {/* mobile Newsletter */}
      <div className="block sm:hidden">
        <NewsletterMobile />
      </div>
      <Footer />
    </div>
  );
};
