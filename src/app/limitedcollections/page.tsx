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
      <div className="z-0">
        <section className="grid grid-cols-1 custom-bg-image md:pt-0 pt-40 bg-[#4e261a] object-cover bg-center h-[818px] bg-top-[5rem]')] relative">
          {/* BreadCrumb start */}
          <VerticalBreadCrumb />
          {/* BreadCrumb end */}

          <div className=" container mx-auto flex flex-col md:justify-end justify-between text-white md:px-0 px-4 pt-10 md:pt-0">
            <div>
              {/* here is heading defined */}

              <div className="flex md:items-center  items-start container mx-auto h-[644px] md:ps-40 ps-0">
                <div className="md:block hidden">
                  <h1 className="text-white text-[144px] font-normal max-w-[638px] ">
                    Limited Collection{" "}
                  </h1>
                </div>
                {/* here is mobile responsive  */}
                <div className="block md:hidden">
                  <h1 className="w-[277px] text-white text-6xl font-normal  leading-[68px] ">
                    Limited Collection{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="flex flex-wrap py-20 max-w-[1030px] mx-auto gap-8">
        <div className="pb-7 md:pb-0">
          <p className="max-w-[499px] text-zinc-800 text-base font-normal leading-snug">
            Bordeaux, a renowned wine region, is acclaimed for its bold red
            blends, predominantly featuring Merlot, Cabernet Sauvignon, and
            Cabernet Franc. The wines exhibit rich flavors and a superb balance,
            making Bordeaux a global wine capital. Burgundy, in eastern France,
            is famous for its exquisite Pinot Noir and Chardonnay wines.
          </p>
        </div>
        <div>
          <p className="max-w-[499px] text-zinc-800 text-base font-normal leading-snug">
            The terroir of Burgundy imparts a unique character, resulting in
            elegant, nuanced, and often complex flavors, highly sought after by
            wine connoisseurs. Champagne, located in northeastern France, is
            synonymous with sparkling wine. Using the traditional méthode
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

        <Product />
        {/* product list  */}

        <Product />
        {/* animation  component  */}
        <div className="p-16 flex justify-center mx-auto ">
          <Image src={xmark} alt="xmark" />
        </div>
        {/* next product list  */}

        <Product />
        {/* animation  component  */}
        <div className="p-16 flex justify-center mx-auto ">
          <Image src={xmark} alt="xmark" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default LimitedCollection;
