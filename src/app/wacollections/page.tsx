import Dropdown from "@/common/DropDown/page";
import VerticalBreadCrumb from "@/common/verticalBreadcrumb/page";
import React from "react";
import MobileFilter from "../invest/moibleview/page";
import Product from "@/components/products/page";
import Image from "next/image";
import xmark from "../../assets/icons/x-mark-anim.svg";
import ProductCards from "@/components/productCard/page";

const LimitedCollection = () => {
  return (
    <React.Fragment>
      <div className=" absolute top-0 right-0 left-0 -z-10">
        <div className="z-0">
          <section className="grid grid-cols-1 custom-bg-image md:pt-0 pt-40 bg-[#4e261a] object-cover bg-center h-[818px] bg-top-[5rem]')] relative">
            {/* BreadCrumb start */}
            <VerticalBreadCrumb />
            {/* BreadCrumb end */}

            <div className=" container max-w-[1030px] mx-auto flex flex-col  justify-between text-white md:px-0 px-4 pt-10 md:pt-0">
              <div>
                <p className="text-stone-400 text-xs font-normal uppercase leading-3 tracking-tight pb-7 max-w-[200px] md:max-w-full">
                  appreciating your wine, guarding its emotions
                </p>
                <p className="text-white md:text-9xl sm:text-6xl text-5xl font-normal  ">
                  Marketplace
                </p>
                <p className="text-stone-400 text-base font-normal leading-snug pt-4 pb-10 max-w-[470px]">
                  Something about technology, advantage of wine investments,
                  unique buying and reselling experience
                </p>
                <button className="h-14 px-8 py-[22px] rounded-full border border-white border-opacity-20 justify-center items-center gap-3 inline-flex text-center text-white text-xs font-normal uppercase tracking-tight">
                  START EXPLORING
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className=" w-4"
                  >
                    <path
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
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

          <Product items={[]} />

          {/* animation  component  */}
          <div className="p-16 flex justify-center mx-auto ">
            <Image src={xmark} alt="xmark" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LimitedCollection;
