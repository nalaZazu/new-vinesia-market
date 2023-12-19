import InvestBread from "@/common/InvestBread";
import xmark from "../../assets/icons/x-mark-anim.svg";
import React from "react";
import Image from "next/image";
import Dropdown from "@/common/DropDown/page";
import MobileFilter from "./moibleview/page";
import Newsletter from "@/components/newsletter/page";
import Footer from "@/components/footer/page";
import NewsletterMobile from "@/components/newsletter/MobileView";
import ProductCards from "@/components/productCard/page";

const AvailableSoon = () => {
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
          <div className="grid xl:grid-cols-4  lg:grid-cols-3 gap-8 md:grid-cols-2 grid-cols-1 pt-20">
            {[1, 2, 3, 4, 5, 6, 7, 8]?.map((item: any, index: any) => {
              return (
                <div key={index}>
                  <ProductCards />
                </div>
              );
            })}
          </div>
          {/* animation  component  */}
          <div className="p-16 flex justify-center mx-auto ">
            <Image src={xmark} alt="xmark" />
          </div>
        </div>
        {/* next product list  */}
        <div className="grid xl:grid-cols-4  lg:grid-cols-3 gap-8 md:grid-cols-2 grid-cols-1 pt-20 ">
          {[1, 2, 3, 4, 5, 6, 7, 8]?.map((item: any, index: any) => {
            return (
              <div key={index}>
                <ProductCards />
              </div>
            );
          })}
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

export default AvailableSoon;
