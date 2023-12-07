import Dropdown from "@/common/DropDown/page";
// import VerticalBreadCrumb from "@/common/verticalBreadcrumb/page";
import React from "react";
import MobileFilter from "../invest/moibleview/page";
import Product from "@/components/products/page";
import Newsletter from "@/components/newsletter/page";
import Footer from "@/components/footer/page";
import xmark from "../../assets/icons/x-mark-anim.svg";
import Image from "next/image";
import NewsletterMobile from "@/components/newsletter/MobileView";
import VerticalBreadCrumb from "@/common/verticalBreadcrumb/page";

function Reso() {
  return (
    <React.Fragment>
      <div className="w-full md:h-[744px] h-[620px] bg-no-repeat bg-cover bg-center bg-[url('https://i.ibb.co/QfzgMwN/image-137-1.png')] relative">
        {/* BreadCrumb start */}
        <VerticalBreadCrumb />
        {/* BreadCrumb end */}
        <div className="flex items-end container mx-auto h-[644px] md:ps-40 ps-0">
          <div>
            <div className="pb-3">
              <h3 className="  text-white text-xs font-normal  uppercase leading-3 tracking-tight">
                Meet the Artist
              </h3>
            </div>
            <div>
              <h1 className="text-white md:text-[144px] font-normal text-6xl ">
                Reso
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* text */}
      <div className="flex flex-wrap py-20 max-w-[1030px] mx-auto gap-8">
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
      <div className="max-w-[1038px] mx-auto ">
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

export default Reso;
