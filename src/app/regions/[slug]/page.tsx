"use client";
import Dropdown from "@/common/DropDown/page";
import VerticalBreadCrumb from "@/common/verticalBreadcrumb/page";
import React, { useEffect, useRef, useState } from "react";
import Product from "@/components/products/page";
import Newsletter from "@/components/newsletter/page";
import Footer from "@/components/footer/page";
import xmark from "../../../assets/icons/x-mark-anim.svg";
import Image from "next/image";
import NewsletterMobile from "@/components/newsletter/MobileView";
import MobileFilter from "@/components/FilterSection/moibleview/page";
import ProductCards from "@/components/productCard/page";
import { MarksAnim } from "@/assets/icons/Icons";
import ScrollAnimation from "@/common/ScrollAnimation/page";
import useSWR from "swr";
import FilterSection from "@/components/FilterSection/page";
import InvestBread from "@/common/InvestBread";

function France({ params }: { params: any }) {
  const { slug } = params;
  const divRef = useRef<any>(null);

  const [selectedFilters, setSelectedFilters] = useState<any>([]);
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
        divRef.current.style.transform = ` translate(-40%, ${
          width / 2
        }px) rotate(-90deg)`;
      }
    };
    measureDiv();
    // }
  }, [data, slug]);
  useEffect(() => {
    mutate();
  }, [selectedFilters, priceRange, mutate]);

  useEffect(() => {
    if (slug) {
      setSelectedFilters([decodeURIComponent(slug)]);
    }
  }, [slug]);
  return (
    <div className=" absolute top-0 right-0 left-0 -z-10">
      <div className="w-full md:h-[744px] h-[620px] pt-40 bg-no-repeat bg-cover bg-center bg-[url('https://i.ibb.co/hLLYBjr/winery-bg.png')] relative">
        <div className="container px-4 mx-auto relative w-full">
          <span ref={divRef} className={` absolute left-0  md:block hidden `}>
            {/* translate-y-[${breadSize?.width / 2}px]  */}
            <InvestBread baseName="vinesia marketplace" />
          </span>
        </div>
        <span className="block md:hidden">
          <InvestBread baseName="vinesia marketplace" />
        </span>
        <div className="flex justify-center  items-center md:h-[600px] h-[400px]">
          <h1 className="text-center text-zinc-800 md:text-[144px] text-6xl font-normal capitalize">
            {slug}
          </h1>
        </div>
      </div>
      {/* text */}
      <div className="flex flex-wrap py-20 max-w-[1030px] mx-auto gap-8 md:px-0 px-4">
        <div className="pb-7 md:pb-0">
          <p className="max-w-[499px] text-zinc-800 text-base font-normal leading-snug">
            France is renowned worldwide for its exquisite wines, each region
            offering a unique and distinct flavor profile. Bordeaux, in the
            southwest, is celebrated for its robust reds, notably blends of
            Merlot, Cabernet Sauvignon, and Cabernet Franc. Burgundy, in the
            east, is famed for its Pinot Noir and Chardonnay, reflecting the
            {`region's`} terroir with elegance and finesse.
          </p>
        </div>
        <div>
          <p className="max-w-[499px] text-zinc-800 text-base font-normal leading-snug">
            Champagne, a region in the northeast, is synonymous with sparkling
            wine, using the traditional méthode champenoise to produce the
            iconic bubbly. The Loire Valley is diverse, boasting a range of
            white, red, rosé, and sparkling wines, with Sauvignon Blanc and
            Cabernet Franc being prominent.
          </p>
        </div>
      </div>
      {/* Destop View */}
      <div className="container mx-auto ">
        <hr className="border border-orange-700 border-opacity-20" />
        <div className="hidden md:block my-20 ">
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
        {/* Mobile view */}
      </div>
      {/* desktop Newsletter*/}
      <div className="hidden sm:block">
        <Newsletter />
      </div>
      {/* mobile Newsletter */}
      <div className="block sm:hidden">
        <NewsletterMobile />
      </div>{" "}
      <Footer />
    </div>
  );
}

export default France;
