import React from "react";
import VerticalBreadCrumb from "@/common/verticalBreadcrumb/page";
import ProductTopSection from "@/components/ProductOverView/ProductTopSection";

export default function ProductsOverview() {
  return (
    <div>
      <div className="container mx-auto pt-3 md:pt-5 lg:pt-10 pb-7 px-4">
        <h1 className="text-zinc-800 md:text-7xl md:leading-[84px] text-4xl font-normal leading-[42px]">
          Chateau La Mission Haut Brion Cru Classe | 2009
        </h1>
        <p className="text-zinc-800 text-base font-normal leading-snug pt-2 ">
          With Art of Lola Designer Fun
        </p>
      </div>

      <div className="flex">
        <div className="basis-1/12">{/* <VerticalBreadCrumb /> */}</div>
        <div className=" basis-11/12 bg-orange-100">
          <ProductTopSection />
        </div>
      </div>
    </div>
  );
}
