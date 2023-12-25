import InvestBread from "@/common/InvestBread";
import xmark from "../../assets/icons/x-mark-anim.svg";
import React from "react";
import Image from "next/image";
import Dropdown from "@/common/DropDown/page";
import MobileFilter from "./moibleview/page";
import Newsletter from "@/components/newsletter/page";
import Footer from "@/components/footer/page";
import NewsletterMobile from "@/components/newsletter/MobileView";
import Product from "@/components/products/page";
import { MarksAnim } from "@/assets/icons/Icons";
import { ItemCardDto } from "@/types/productCard.dto";
import ScrollAnimation from "@/common/ScrollAnimation/page";

export default function AvailableSoon() {
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
          <Product />
           
          {/* animation  component  */}
        <ScrollAnimation />
        </div>
        {/* next product list  */}
        <Product />
       
      </div>
      <div className="p-16 flex justify-center mx-auto items-center gap-16">
        <div className=" border-b-2 h-0 w-full border-[#CB220D] border-opacity-10"></div>
        <MarksAnim fill="#CB220D" />
        <div className="border-b-2 h-0 w-full border-[#CB220D]  border-opacity-10"></div>
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
