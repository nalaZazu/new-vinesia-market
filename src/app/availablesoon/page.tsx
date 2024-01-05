"use client";
import InvestBread from "@/common/InvestBread";
import xmark from "../../assets/icons/x-mark-anim.svg";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Dropdown from "@/common/DropDown/page";
import Newsletter from "@/components/newsletter/page";
import Footer from "@/components/footer/page";
import NewsletterMobile from "@/components/newsletter/MobileView";
import Product from "@/components/products/page";
import useSWR from "swr";
import FilterSection from "@/components/FilterSection/page";

export default function AvailableSoon() {
  const divRef = useRef<any>(null);

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
    const measureDiv = () => {
      if (divRef.current) {
        const width = divRef.current.offsetWidth;
        const height = divRef.current.offsetHeight;
        console.log("Width:", width, "Height:", height);
        divRef.current.style.transform = ` translate(-76%,-45px) rotate(-90deg)`;
        //  ${ width / 2  }
        // translate(-76%, -45px) rotate(-90deg);
      }
    };
    measureDiv();
    mutate();
  }, [selectedFilters, priceRange, mutate]);

  return (
    <div>
      {/* <Headersecond /> */}
      <div className=" pt-6 container mx-auto px-3">
        {/* <InvestBread />
        <div className=" mt-9 hidden md:block">
          <h2 className=" text-primary text-[144px] font-normal ">
            Available Soon
          </h2>
        </div> */}
        {/* <VerticalBreadCrumb /> */}
        <div className="container px-4 mx-auto relative w-full md:block hidden">
          <h2 className=" text-primary text-[144px] font-normal ">Available Soon</h2>
          <span ref={divRef} className={` absolute left-0   `}>
            {/* translate-y-[${breadSize?.width / 2}px]  */}

            <InvestBread baseName="vinesia marketplace" />
          </span>
        </div>
        <span className="block md:hidden">
          <InvestBread baseName="vinesia marketplace" />
        </span>
        {/* BreadCrumb end */}
        {/* for mobileView */}
        <div className="mt-9 md:hidden block">
          <h2 className=" text-zinc-800 text-4xl font-normal   leading-[68px]">
            Available Soon
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
}
