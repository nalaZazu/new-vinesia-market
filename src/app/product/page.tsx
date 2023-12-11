"use client";
import VerticalBreadCrumb from "@/common/verticalBreadcrumb/page";
import React from "react";
import { AlertIcons, Arrows, BgRectangle } from "@/assets/icons/Icons";
import TabSection from "@/components/tabsection/page";
import MindPledge from "@/components/mindpledge/page";
import HeritageCarousel from "@/components/heritageCarousel/page";
import AssetDetails from "@/components/wineassets/page";
import YouMayAlso from "@/components/YouMayAlso/page";
import WineVideoBanner from "@/components/ProductOverView/WineVideoBanner";
import Newsletter from "@/components/newsletter/page";
import NewsletterMobile from "@/components/newsletter/MobileView";
import Footer from "@/components/footer/page";
import ProductCarousel from "@/components/ProductOverView/ProductCarousel";
import WineArtDisclosure from "@/components/ProductOverView/WineArtDisclosure";
const Product = () => {
  return (
    <React.Fragment>
      <div className="relative mx-auto ">
        <div className="container mx-auto pt-3 md:pt-5 lg:pt-10 px-4 md:absolute top-0 z-10 right-0 left-0">
          <div className="mx-auto max-w-[929px] text-center">
            <h1 className="text-zinc-800  md:text-7xl md:leading-[84px] text-4xl font-normal leading-[42px] tracking-[-1.44px] ">
              Chateau La Mission Haut Brion Cru Classe | 2009
            </h1>
            <span className="pt-2  text-zinc-800 text-base font-normal  leading-snug">
              With Art of Lola Designer Fun
            </span>
          </div>
        </div>


          <div className="flex container mx-auto">
            <div className="basis-24 hidden md:block">
              {/* <VerticalBreadCrumb /> */}
            </div>
            <div className=" md:basis-5/6">
              <div className="grid md:grid-cols-3 grid-cols-1 md:h-[898px]">
                {/* h-[968] */}
                {/* here is first section */}
                <div className="  flex items-end  order-2 md:order-1">
                  <div className=" w-full space-y-4">
                    <div className="hidden md:block space-y-4">
                      <div className=" flex gap-3 items-center   text-stone-500 text-base font-normal   leading-snug">
                        <p>First release date</p>
                        <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                        <p className="text-zinc-800 text-base font-normal leading-snug">
                          Sep 29, 2023
                        </p>
                      </div>
                      <div className="  flex gap-3 items-center text-stone-500 text-base font-normal leading-snug">
                        <p>Owner</p>
                        <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                        <p className="text-zinc-800 text-base font-normal leading-snug">
                          Vinesia
                        </p>
                      </div>
                      <div className=" flex gap-3 items-center text-stone-500 text-base font-normal leading-snug">
                        <p>Edition</p>
                        <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                        <p className="text-zinc-800 text-base font-normal leading-snug">
                          #1 from 24
                        </p>
                      </div>
                      <div className=" flex gap-3 items-center text-stone-500 text-base font-normal leading-snug">
                        <p>Wine asset ID</p>
                        <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                        <p className="text-zinc-800 text-base font-normal leading-snug">
                          123_1234_1345678
                        </p>
                      </div>
                      {/* here is next section */}
                      <div className="flex gap-2 items-center pb-8">
                        <span className=" text-center text-orange-700 text-xs font-normal  uppercase leading-3 tracking-tight">
                          Product integrity certificates
                        </span>
                        <span>
                          <Arrows storke="#BF4D20" />
                        </span>
                      </div>
                    </div>
                    {/* end of section */}
                    {/* price section */}
                    <div className=" p-8 bg-slate-700">
                      <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                          <p className="  text-gray-300 text-xs font-normal   uppercase leading-3 tracking-tight">
                            ASK PRICE
                          </p>
                          <AlertIcons />
                        </div>
                        <div className="p-2 h-9 bg-green-500 rounded-[30px]   flex justify-start items-center gap-1.5">
                          <div className=" w-2 h-2 bg-white rounded-full" />
                          <p className="text-center text-white text-xs font-normal uppercase leading-3 tracking-tight">
                            Available to buy
                          </p>
                        </div>
                      </div>

                      {/* next secion */}
                      <div>
                        <h6 className="text-white text-4xl font-light  leading-[44px]">
                          €66,666
                        </h6>
                        <div className="flex gap-4 mt-2">
                          <p className="text-gray-300 text-base font-normal  leading-snug">
                            Last sale: €66,666{" "}
                          </p>
                          <div
                            className=" 
                        flex items-center gap-2
                        text-white
                        text-xs
                        font-normal
                        uppercase
                        leading-3
                        tracking-tight"
                          >
                            MORE
                            <span>
                              {" "}
                              <Arrows storke="#FFFFFF" />
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* next  section */}

                      <button
                        type="submit"
                        className="text-center   text-xs font-normal  px-8 py-[22px] bg-white rounded-[48px]  w-full mt-4  uppercase leading-3 tracking-tight justify-center items-center gap-3 inline-flex text-orange-700"
                      >
                        ACCEPT ASK
                      </button>

                      <button
                        type="submit"
                        className="text-center   px-8 py-[22px]  rounded-[48px]  w-full mt-4  uppercase leading-3 tracking-tight justify-center items-center gap-3 inline-flex  text-white text-xs font-normal   border border-white border-opacity-40 "
                      >
                        Place a bid
                      </button>
                    </div>
                  </div>
                </div>

                {/* here is middle section with slider */}
                <div className=" order-1 md:order-2">
                  <div className=" bg-[#F7EFDF] h-full relative flex items-end">
                    <div className="w-full  mx-auto pb-28">
                      <ProductCarousel />
                    </div>
                    <div className="md:absolute top-full z-20 w-full md:block hidden">
                      <BgRectangle />
                    </div>
                    {/* <Image src={rectangle} alt="reactangle" /> */}
                  </div>
                </div>
                {/* here is last section  */}
                <div className="md:flex items-end  ps-8 md:order-3 hidden">
                  <div className="max-w-[395px]">
                    <TabSection />
                  </div>
                </div>

                {/* Mobile View */}
                <div className="block md:hidden order-3">
                  <WineArtDisclosure />
                </div>
              </div>
            </div>
            {/* padding section  */}
            <div className="md:basis-24 hidden"></div>
          </div>

        {/* here is mind pledge section */}
        <div className="w-full -z-10">
          <MindPledge />
        </div>
      </div>

      {/* wines about section */}
      <div className="md:block hidden ">
        <div className=" flex  pt-40 ">
          <div className="basis-1/12 hidden md:block"></div>

          {/* container mx-auto pl-24  pt-40  */}
          <div className="container max-w-6xl">
            <div className="md:basis-11/12 basis-full">
              {/* <div className="basis-1/4"></div> */}

              <p className="text-stone-500 text-xs font-normal uppercase leading-3 tracking-tight">
                ABOUT
              </p>

              <div className="flex justify-between items-end">
                <h1 className="text-zinc-800 text-7xl font-normal   leading-[84px]">
                  Wine asset details
                </h1>
                <button className="text-center text-orange-700 text-xs font-normal uppercase leading-3 tracking-tight px-8 py-[22px] rounded-[48px] border border-orange-700 border-opacity-20 justify-center items-center gap-3 inline-flex">
                  SEE PRODUCT OVERVIEW
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* here is component call */}

        <div className="flex relative ">
          <div className="basis-1/12 hidden md:block"></div>
          <div className="md:basis-11/12 basis-full">
            <div className="bg-orange-100 pt-10">
              <AssetDetails />
            </div>
          </div>
        </div>
      </div>

      {/* here is carsoul section */}
      <div className="md:py-40 py-20 md:block hidden">
        <div className="pb-14">
          <h1 className="text-zinc-800 text-4xl font-light  text-center  leading-[44px]">
            Other editions{" "}
          </h1>
        </div>
        <HeritageCarousel />
      </div>
      {/* here is video banner */}
      <div className="md:block hidden">
        <WineVideoBanner />
      </div>

      {/* here is might section */}

      <div className="md:py-40 md:px-24 py-20 hidden md:block">
        <div>
          <h3 className="text-center text-zinc-800 text-4xl font-light  leading-[44px]">
            You may also like
          </h3>
          <div>
            <YouMayAlso />
          </div>
        </div>
      </div>

      {/* here is mobile view of like might section */}
      <div className="py-20 md:hidden block">
        <div>
          <h3 className="text-center text-zinc-800 text-[21px] font-light   leading-[29px] pb-12">
            You may also like
          </h3>
          {/* here is video silder */}
          <HeritageCarousel />
        </div>
      </div>

      {/* desktop Newsletter*/}
      <div className="hidden sm:block">
        <Newsletter />
      </div>
      {/* mobile Newsletter */}
      <div className="block sm:hidden pt-4">
        <NewsletterMobile />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Product;
