"use client";

import InvestBread from "@/common/InvestBread";
import React, { useEffect, useState } from "react";
import Newsletter from "@/components/newsletter/page";
import Footer from "@/components/footer/page";
import NewsletterMobile from "@/components/newsletter/MobileView";
import Product from "@/components/products/page";
import useSWR from "swr";
import lineregion from "@/assets/icons/lineregion.svg";

import FilterSection from "@/components/FilterSection/page";
import VerticalBreadCrumb from "@/common/verticalBreadcrumb/page";

const Invest = () => {
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
    return fetch(url, options).then((res) => res.json());
  };

  const { data, error, isLoading, mutate } = useSWR(
    `${process.env.NEXT_PUBLIC_API_ADDRESS}products/search`,
    fetcher
  );
  useEffect(() => {
    mutate();
  }, [selectedFilters, priceRange, mutate]);
const breadCrumbData = ['vinesia marketplace','invest']
  return (
    <div>
      {/* {`${process.env.NEXT_PUBLIC_API_ADDRESS}products/search/`} */}
      {/* {JSON.stringify(error)} */}
      {/* {JSON.stringify(data)} */}
      <div>
        {/* <Headersecond /> */}
        <div className=" pt-6 container mx-auto px-3">
          <span className="block md:hidden">
            <InvestBread baseName='vinesia marketplace' />
          </span>
          <div className=" mt-9 hidden md:block relative">
            <h2 className=" text-primary text-[144px] font-normal ">Invest</h2>
            <span className=" absolute -rotate-90 left-0 -translate-x-[60%] md:block hidden">
              <InvestBread baseName='vinesia marketplace' />
            </span>
            {/* <VerticalBreadCrumb /> */}
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
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />

          {/* product list  */}
          <div className="">
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
