import React from "react";

import Dropdown from "@/common/DropDown/page";
import Newsletter from "@/components/newsletter/page";
import Footer from "@/components/footer/page";
import NewsletterMobile from "@/components/newsletter/MobileView";
import Product from "@/components/products/page";
import MobileFilter from "../invest/moibleview/page";

// import xmark from "../../assets/icons/x-mark-anim.svg";
import xmark from "@/assets/icons/x-mark-anim.svg";
import Image from "next/image";
import Card from "@/components/card/page";
import lineregion from "@/assets/icons/lineregion.svg";
import ProductCards from "@/components/productCard/page";

export default function Regions() {
  return (
    <React.Fragment>
      <div className="container mx-auto pt-14 px-4 md:px-0">
        <h1 className="text-zinc-800 md:text-[144px] text-6xl font-normal">
          Regions
        </h1>
        <div className="underline decoration-wavy py-8">
          <Image src={lineregion} alt="image" />
        </div>
        <Card />
        {/* here is next list */}
        {/* dropdown */}
        <div className="hidden md:block">
          <Dropdown />
          <div className="border border-secondary mt-12"></div>
        </div>
        {/* Mobile view */}
        <div className="md:hidden block">
          <MobileFilter />
        </div>
        {/* product list  */}
        <div className="grid xl:grid-cols-4  lg:grid-cols-3 gap-8 md:grid-cols-2 grid-cols-1 pt-20 ">
          {[1, 2, 3, 4, 5, 6, 7, 8]?.map((item: any, index: any) => {
            return (
              <div key={index}>
                <ProductCards />
              </div>
            );
          })}
        </div>{" "}
        {/* animation  component  */}
        <div className="p-16 flex justify-center mx-auto ">
          <Image src={xmark} alt="xmark" />
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
    </React.Fragment>
  );
}
