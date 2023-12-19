'use client'

import InvestBread from "@/common/InvestBread";
import xmark from "../../assets/icons/x-mark-anim.svg";
import React, { useState } from "react";
import Image from "next/image";
import Dropdown from "@/common/DropDown/page";
import MobileFilter from "./moibleview/page";
import Newsletter from "@/components/newsletter/page";
import Footer from "@/components/footer/page";
import NewsletterMobile from "@/components/newsletter/MobileView";
import Product from "@/components/products/page";
import useSWR from "swr";

const fetcher = async (url: string, payload?: string) => {
  const options = {
    method: 'POST',
    ...(payload && { body: payload }),
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  }

  return fetch(url, options).then((res) => res.json())
}
import { MarksAnim, Xmark } from "@/assets/icons/Icons";
import ProductCards from "@/components/productCard/page";

const Invest = () => {
  const [tags, setTags] = useState<String[]>([])
  
  const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_ADDRESS}products/search/`, fetcher)
  

  return (
    <div >
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
        {/* dropdown */}
        <div className="hidden md:block">
          <Dropdown />
          <div className=" border-red-700 border-[0.5px]  mt-12"></div>
        </div>
        {/* Mobile view */}
        <div className="md:hidden block">
          <MobileFilter />
        </div>
        {/* product list  */}
        <div className="md:block hidden">
          <Product items={data?.data} />
        </div>
          {/* animation  component  */}
          <div className="p-16 flex justify-center mx-auto items-center gap-10">
            <div className=" border-b-[1px] h-0 w-full border-[#CB220D] border-opacity-10"></div>
            <MarksAnim fill="#CB220D" />
            <div className="border-b-[1px] h-0 w-full border-[#CB220D]  border-opacity-10"></div>
          </div>
        </div>

        {/* next product list  */}
        <Product  items={data?.data} />
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
