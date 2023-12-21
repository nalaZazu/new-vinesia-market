import Dropdown from "@/common/DropDown/page";
import VerticalBreadCrumb from "@/common/verticalBreadcrumb/page";
import React from "react";
import MobileFilter from "../invest/moibleview/page";
import Product from "@/components/products/page";
import Image from "next/image";
import xmark from "../../assets/icons/x-mark-anim.svg";
import ProductCards from "@/components/productCard/page";
import { MarksAnim } from "@/assets/icons/Icons";
import ScrollAnimation from "@/common/ScrollAnimation/page";

const LimitedCollection = () => {
  return (
    <React.Fragment>
      <div className=" absolute top-0 right-0 left-0 -z-10">
        <div className="z-0">
          <section className="grid grid-cols-1 custom-limited-bg-image md:pt-0 pt-40 bg-[#4e261a] object-cover bg-center h-[818px] bg-top-[5rem]')] relative">
            {/* BreadCrumb start */}
            <VerticalBreadCrumb />
            {/* BreadCrumb end */}

            <div className=" container max-w-[1030px] mx-auto flex flex-col  justify-center text-white md:px-0 px-4 pt-10 md:pt-0">
              <div>
                <h1 className="text-white font-normal text-[144px]  tracking-[-2.88px] leading-[160px]">
                  Limited Collections
                </h1>
              </div>
            </div>
          </section>
        </div>

        <div className="flex flex-wrap py-20 max-w-[1030px] mx-auto gap-8">
          <div className="pb-7 md:pb-0">
            <p className="max-w-[499px] text-zinc-800 text-base font-normal leading-snug">
              Bordeaux, a renowned wine region, is acclaimed for its bold red
              blends, predominantly featuring Merlot, Cabernet Sauvignon, and
              Cabernet Franc. The wines exhibit rich flavors and a superb
              balance, making Bordeaux a global wine capital. Burgundy, in
              eastern France, is famous for its exquisite Pinot Noir and
              Chardonnay wines.
            </p>
          </div>
          <div>
            <p className="max-w-[499px] text-zinc-800 text-base font-normal leading-snug">
              The terroir of Burgundy imparts a unique character, resulting in
              elegant, nuanced, and often complex flavors, highly sought after
              by wine connoisseurs. Champagne, located in northeastern France,
              is synonymous with sparkling wine. Using the traditional méthode
              champenoise, this region crafts the {`world's`} most celebrated
              bubbly. Champagne is known for its effervescence, finesse, and
              celebratory nature.
            </p>
          </div>
        </div>

        {/* Destop View */}
        <div className="container mx-auto ">
          <hr className=" border border-orange-700 border-opacity-20" />
          <div className="hidden md:block my-20 ">
            <Dropdown />
          </div>
          {/* Mobile view */}
          <div className="md:hidden block px-6">
            <MobileFilter />
          </div>

          {/* product list */}

          <div className="md:block hidden">
            <Product />

            {/* animation  component  */}
            <ScrollAnimation />
          </div>
          {/* product list  */}

          <Product />

          {/* next product list  */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default LimitedCollection;
