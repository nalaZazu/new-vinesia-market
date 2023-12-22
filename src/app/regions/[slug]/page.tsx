import Dropdown from "@/common/DropDown/page";
import VerticalBreadCrumb from "@/common/verticalBreadcrumb/page";
import React from "react";
import Product from "@/components/products/page";
import Newsletter from "@/components/newsletter/page";
import Footer from "@/components/footer/page";
import xmark from "../../../assets/icons/x-mark-anim.svg";
import Image from "next/image";
import NewsletterMobile from "@/components/newsletter/MobileView";
import MobileFilter from "@/app/invest/moibleview/page";
import ProductCards from "@/components/productCard/page";
import { MarksAnim } from "@/assets/icons/Icons";
import ScrollAnimation from "@/common/ScrollAnimation/page";

function France({ params }: { params: any }) {
  const { slug } = params;

  return (
    <div className=" absolute top-0 right-0 left-0 -z-10">
      <div className="w-full md:h-[744px] h-[620px] pt-40 bg-no-repeat bg-cover bg-center bg-[url('https://i.ibb.co/hLLYBjr/winery-bg.png')] relative">
        {/* BreadCrumb start */}
        <VerticalBreadCrumb />
        {/* BreadCrumb end */}
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
          <Dropdown />
        </div>
        {/* Mobile view */}
        <div className="md:hidden block px-6">
          <MobileFilter />
        </div>
        {/* product list */}
        <Product />

        {/* product list  */}
        {/* animation  component  */}
        <ScrollAnimation />
        {/* next product list  */}

        <Product />
        {/* animation  component  */}
        <ScrollAnimation />
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
