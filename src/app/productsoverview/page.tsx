import React from "react";
import Link from "next/link";
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

      <div className="flex relative">
        <div className="basis-1/12 hidden md:block">
          <div>
            <nav
              className="flex absolute top-0 bottom-0 -rotate-90 left-48"
              aria-label="Breadcrumb"
            >
              <ol className="container mx-auto flex flex-wrap gap-3 px-4 items-center">
                <li className="inline-flex items-center">
                  <Link
                    href="#"
                    className="text-stone-600 text-xs font-normal leading-3"
                  >
                    vinesia marketplace
                  </Link>
                </li>
                <li className="hidden md:block lg:block  text-xs font-normal">
                  /
                </li>
                <li>
                  <div className="flex items-center">
                    <Link
                      href="#"
                      className=" text-stone-500 text-xs font-normal leading-3"
                    >
                      home page
                    </Link>
                  </div>
                </li>
                <li className="hidden md:block lg:block text-xs font-normal">
                  /
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className=" text-stone-500 text-xs font-normal leading-3">
                      collections
                    </span>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className=" text-stone-500 text-xs font-normal leading-3">
                      Chateau La Mission and Art
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="basis-11/12">
          <div className="  bg-orange-100 pt-10">
            <ProductTopSection />
          </div>
        </div>
      </div>
    </div>
  );
}
