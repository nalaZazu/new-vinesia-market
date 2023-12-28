"use client";
import React, { useEffect, useState } from "react";
import Dropdown from "@/common/DropDown/page";
import Newsletter from "@/components/newsletter/page";
import Footer from "@/components/footer/page";
import NewsletterMobile from "@/components/newsletter/MobileView";
import Product from "@/components/products/page";
import MobileFilter from "../invest/moibleview/page";
// import xmark from "../../assets/icons/x-mark-anim.svg";
import Image from "next/image";
import Card from "@/components/card/page";
import lineregion from "@/assets/icons/lineregion.svg";
import { MarksAnim } from "@/assets/icons/Icons";
import ScrollAnimation from "@/common/ScrollAnimation/page";
import VerticalBreadCrumb from "@/common/verticalBreadcrumb/page";
import FilterSection from "@/components/FilterSection/page";
import useSWR from "swr";

export default function Regions() {
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
  }, [selectedFilters, priceRange]);

  return (
    <React.Fragment>
      <div className="container mx-auto pt-14 px-4 md:px-0">
        {/* BreadCrumb start */}
        {/* <VerticalBreadCrumb/> */}
        {/* BreadCrumb end */}
        <h1 className="text-zinc-800 md:text-[144px] text-6xl font-normal">
          Regions
        </h1>
        <div className="underline decoration-wavy py-8">
          <Image src={lineregion} alt="image" />
        </div>
        <Card />
        {/* here is next list */}
        {/* dropdown */}

        <FilterSection
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
        {/* product list  */}
        <Product items={data?.data} />

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
    </React.Fragment>
  );
}
