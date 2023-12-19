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

const Invest = () => {
  return (
    <div>
      {/* <Headersecond /> */}
      <div className=" pt-6 container mx-auto px-3">
        <InvestBread />

        <div className=" mt-9 hidden md:block">
          <h2 className=" text-primary text-[144px] font-normal ">Invest</h2>
        </div>
        {/* for mobileView */}
        <div className="mt-9 md:hidden block">
          <h2 className=" text-6xl font-normal leading-[68px] text-primary">
            Invest
          </h2>
        </div>

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
        <Product items={[]}/>

        {/* animation  component  */}
        {/* <div className="p-16 flex justify-center mx-auto ">
          <Image src={xmark} alt="xmark" />
        </div> */}
        {/* next product list  */}

        {/* <Product /> */}
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
