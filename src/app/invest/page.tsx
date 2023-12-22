"use client";

import InvestBread from "@/common/InvestBread";
import xmark from "../../assets/icons/x-mark-anim.svg";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Dropdown from "@/common/DropDown/page";
import MobileFilter from "./moibleview/page";
import Newsletter from "@/components/newsletter/page";
import Footer from "@/components/footer/page";
import NewsletterMobile from "@/components/newsletter/MobileView";
import Product from "@/components/products/page";
import useSWR from "swr";

import { MarksAnim, Xmark } from "@/assets/icons/Icons";
import ProductCards from "@/components/productCard/page";
import FilterSection from "@/components/FilterSection/page";

const Invest = () => {
  const [tags, setTags] = useState<String[]>([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const fetcher = async (url: string, payload?: string) => {
    const options = {
      method: "POST",
      ...(selectedFilters && {
        body: JSON.stringify({ filters: selectedFilters }),
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
    `${process.env.NEXT_PUBLIC_API_ADDRESS}products/search/`,
    fetcher
  );
  useEffect(() => {
    mutate();
  }, [selectedFilters]);

  return (
    <div>
      {/* {`${process.env.NEXT_PUBLIC_API_ADDRESS}products/search/`} */}
      {/* {JSON.stringify(error)} */}
      {/* {JSON.stringify(data)} */}
      <div>
        {/* <Headersecond /> */}
        <div className=" pt-6 container mx-auto px-3">
          <InvestBread />
          <div className=" mt-9 hidden md:block">
            <h2 className=" text-primary text-[144px] font-normal ">Invest</h2>
          </div>
          {/* for mobileView */}
          <div className="mt-9 md:hidden block">
            <h2 className=" text-zinc-800 text-6xl font-normal   leading-[68px]">
              Invest
            </h2>
          </div>

          <FilterSection
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />

          {/* product list  */}
          <div className="md:block hidden">
            <Product items={data?.data} />
          </div>
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

export default Invest;
