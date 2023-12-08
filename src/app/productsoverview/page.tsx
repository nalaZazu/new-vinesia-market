"use client";
import React from "react";
import VerticalBreadCrumb from "@/common/verticalBreadcrumb/page";
import ProductTopSection from "@/components/ProductOverView/ProductTopSection";
import PricingDetail from "@/components/ProductOverView/PricingDetails";
import Appactivity from "@/components/charts/page";
import AllEditions from "@/components/ProductOverView/AllEditions";

export default function ProductsOverview() {
  return (
    <div className="md:mx-0 mx-4">
      <div className="container mx-auto pt-10 pb-7">
        <h1 className="text-zinc-800 md:text-7xl md:leading-[84px] text-4xl font-normal leading-[42px]">
          Chateau La Mission Haut Brion Cru Classe | 2009
        </h1>
        <p className="text-zinc-800 text-base font-normal leading-snug pt-2 ">
          With Art of Lola Designer Fun
        </p>
      </div>

      <div className="flex relative">
        <div className="basis-1/12 hidden md:block">
          
        </div>
        <div className="md:basis-11/12 basis-full">
          <div className="bg-orange-100 pt-10">
            <ProductTopSection />
          </div>
        </div>
      </div>
      {/*Release details start  */}
      <section className="container mx-auto py-40">
        <div className="flex flex-wrap justify-between px-4 md:px-0">
          <div>
            <h2 className="text-zinc-800 text-7xl font-normal leading-[84px]">
              Release details
            </h2>
          </div>
          <div className="flex flex-wrap">
            <p className="flex gap-4 items-end">
              <span className="text-zinc-800 text-base font-normal leading-snug">
                On the market are
              </span>
              <span className=" text-zinc-800 text-lg font-semibold leading-relaxed">
                24
              </span>
              <span className="text-zinc-800 text-base font-normal leading-snug">
                editions of this product
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-secondary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
              </span>
            </p>
          </div>
        </div>

        <div className="mt-7 bg-orange-100">
          <div className="grid gap-5 lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
            <div className="p-6">
              <PricingDetail />
            </div>

            <div className="p-6">
              <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
                Pricing details
              </p>
              <Appactivity />
            </div>
          </div>
        </div>
      </section>
      {/*Release details end  */}
      {/* All editions start */}
      <AllEditions />
      {/* All editions end */}
    </div>
  );
}
