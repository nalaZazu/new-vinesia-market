"use client";
import React, { useEffect, useState } from "react";
import Newsletter from "@/components/newsletter/page";
import Footer from "@/components/footer/page";
import Dropdown from "@/common/DropDown/page";
import MobileFilter from "../invest/moibleview/page";
import Product from "@/components/products/page";
import NewsletterMobile from "@/components/newsletter/MobileView";
import Link from "next/link";
import ScrollAnimation from "@/common/ScrollAnimation/page";
import VerticalBreadCrumb from "@/common/verticalBreadcrumb/page";
import useSWR from "swr";
import FilterSection from "@/components/FilterSection/page";

export default function WineryArt() {
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
    <div className="absolute top-0 left-0 right-0 -z-10">
      <div className="w-full md:h-[742px] custom-collection-bg-image md:pt-0 pt-40 h-[620px] bg-no-repeat bg-cover bg-center bg-[url('https://i.ibb.co/pRfQnBG/image-137.png')]">
        {/* BreadCrumb start */}
        <VerticalBreadCrumb />
        {/* BreadCrumb end */}
        <div className="flex md:items-end  items-center container mx-auto h-[628px] md:px-0 px-4 ">
          <div className="md:block hidden">
            <div className="">
              <h3 className="text-white md:text-4xl font-light md:leading-[44px] text-cente text-[21px] leading-[29px]">
                Collections
              </h3>
            </div>
            <div className="">
              <h1 className="text-white md:text-[144px] font-normal text-6xl">
                Wine & art
              </h1>
            </div>
          </div>
          {/* mobile view */}
          <div>
            <div className="block md:hidden   container mx-auto   md:px-0 px-4">
              <div className="">
                <h1 className="      text-white text-6xl font-normal  leading-[68px]">
                  Wine & art
                </h1>
              </div>
              <div className="">
                <h3 className="text-white md:text-4xl font-light md:leading-[44px] text-cente text-[21px] leading-[29px]">
                  Collections
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* text */}
      <div className="flex flex-wrap py-20 max-w-[1030px] mx-auto gap-8 md:px-0 px-4">
        <div className="pb-7 md:pb-0">
          <p className="max-w-[499px] text-zinc-800 text-base font-normal leading-snug">
            Not all great wine producers come from traditional families or have
            a long history in winemaking. A notable example is Jérôme Galeyrand,
            whose journey in the world of wine began when he purchased his first
            half-hectare vineyard in 2002.
          </p>
        </div>
        <div>
          <p className="max-w-[499px] text-zinc-800 text-base font-normal leading-snug">
            Up until then, Jérôme Galeyrand worked in the food industry, and his
            first immersion into the Burgundy world happened during two harvests
            at Domaine Alain Burguet in Gevrey-Chambertin.
          </p>
        </div>
      </div>
      <div>
        {" "}
        <Link href="/wacollections/reso">
          <div className="relative md:block hidden container mx-auto">
            <div className="absolute flex justify-between w-full">
              <h1 className="text-[600px] opacity-20 text-stone-400 font-normal leading-[600px] md:ms-[-450px] -z-10">
                reso
              </h1>
              <h1 className="text-[600px] opacity-20 text-end text-stone-400 font-normal leading-[600px] -z-10 absolute -right-[740px] ">
                reso
              </h1>
            </div>

            <div className="w-[494px] h-[494px] rounded-full mx-auto z-10 bg-no-repeat bg-cover bg-center bg-[url('https://i.ibb.co/qmPYRPj/reso.png')]">
              <div className="flex justify-center items-center container mx-auto h-[742px]">
                <div>
                  <div>
                    <h1 className="text-white text-4xl font-light  leading-[44px]">
                      Reso
                    </h1>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-white text-xs font-normal  uppercase leading-3 tracking-tight">
                      ARTIST
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Destop View */}
      <div className="container mx-auto mt-20">
        <hr className="border border-orange-700 border-opacity-20" />
        <div className="my-20">
          <FilterSection
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
          {/* product list */}
          <Product items={data?.data} />
          {/* product list  */}
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

      {/* <Newsletter /> */}
      <Footer />
    </div>
  );
}
