"use client";
import React from "react";
import VerticalBreadCrumb from "@/common/verticalBreadcrumb/page";
import ProductTopSection from "@/components/ProductOverView/ProductTopSection";
import PricingDetail from "@/components/ProductOverView/PricingDetails";
import Appactivity from "@/components/charts/page";
import AllEditions from "@/components/ProductOverView/AllEditions";
import MindPledge from "@/components/mindpledge/page";
import WineVideoBanner from "@/components/ProductOverView/WineVideoBanner";
import AboutMission from "@/components/ProductOverView/AboutMission";
import AboutArtWork from "@/components/ProductOverView/AboutArtWork";
import AboutWinerySection from "@/components/ProductOverView/AboutWinerySection";

export default function ProductsOverview() {
  return (
    <div>
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
            {/* <div>
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
          </div> */}
          </div>
          <div className="md:basis-11/12 basis-full ">
            <div className="bg-orange-200 pt-10 pb-20 ">
              <div className="md:max-w-[1350px] mx-auto">
                <ProductTopSection />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MindPledge start*/}
      <MindPledge btnTitle="Read More" />
      {/* MindPledge end */}
      {/*Release details start  */}
      <section className="container mx-auto md:py-40">
        <div className="md:flex justify-between items-center">
          <div className="flex justify-between md:pb-6 pb-6  md:py-0 py-6 md:bg-transparent bg-[#F7EFDF] px-4 md:px-0">
            <h2 className="text-zinc-800 md:text-7xl md:font-normal md:leading-[84px] text-base font-semibold leading-snug">
              Release details
            </h2>
            <span className="block md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4 text-secondary"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </span>
          </div>
          <div className="flex flex-wrap gap-4 md:px-0 px-4 pt-8 md:pt-0">
            <p className="flex gap-4">
              <span className="text-zinc-800 text-base font-normal leading-snug">
                On the market are
              </span>
              <span className=" text-zinc-800 text-lg font-semibold leading-relaxed">
                24
              </span>
            </p>
            <p className="flex gap-4">
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
        <div className="mt-8 md:bg-[#FAF5EA] bg-transparent md:p-6 px-4 pb-14">
          <div className="grid gap-5 lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
            <div>
              <PricingDetail />
            </div>

            <div>
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
      {/* How to invest in wine start*/}
      <div className="md:block hidden">
        <WineVideoBanner />
      </div>
      {/* How to invest in wine end*/}
      {/* About Chateau La Mission Haut Brion Cru Classe | 2009 start */}
      <div className="md:block hidden">
        <AboutMission />
      </div>
      {/* About Chateau La Mission Haut Brion Cru Classe | 2009 end */}
      {/* About artwork start */}
      <div className="md:block hidden">
        <AboutArtWork />
      </div>
      {/* About artwork end */}
      {/* About Winery Château Le Pin start */}
      <AboutWinerySection />
      {/* About Winery Château Le Pin end */}
    </div>
  );
}
