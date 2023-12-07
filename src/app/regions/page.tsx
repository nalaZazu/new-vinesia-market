import Image from "next/image";
import React from "react";
 
import Dropdown from "@/common/DropDown/page";
import Newsletter from "@/components/newsletter/page";
import Footer from "@/components/footer/page";
import NewsletterMobile from "@/components/newsletter/MobileView";
import Product from "@/components/products/page";
import MobileFilter from "../invest/moibleview/page";
import xmark from "../../assets/icons/x-mark-anim.svg";
import Image from "next/image";
 
import Card from "@/components/card/page";
import lineregion from "@/assets/icons/lineregion.svg";

 
export default function Regions() {
  return (
    <React.Fragment>
      <div className="container mx-auto pt-14 px-4 md:px-0">
        <h1 className="text-zinc-800 md:text-[144px] text-6xl font-normal">
          Regions
        </h1>
        <div className="underline decoration-wavy py-8">
          <Image src={lineregion} />
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


      </div>
     
      {/* product list  */}
      <Product />
      {/* animation  component  */}
      <div className="p-16 flex justify-center mx-auto ">
        <Image src={xmark} alt="xmark" />
      </div>
      {/* next product list  */}

      <Product />

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
