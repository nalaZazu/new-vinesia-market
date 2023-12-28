"use client";
import React from "react";
import VerticalBreadCrumb from "@/common/verticalBreadcrumb/page";
import ProductTopSection from "@/components/ProductOverView/ProductTopSection";
import PricingDetail from "@/components/ProductOverView/PricingDetails";
import Appactivity from "@/components/charts/page";
import AllEditions from "@/components/ProductOverView/AllEditions";
import MindPledge from "@/components/mindpledge/page";
import WineVideoBanner from "@/components/ProductOverView/WineVideoBanner";
import AboutWine from "@/components/ProductOverView/AboutWine";
import infologo from "@/assets/icons/info.svg";
import AboutWinerySection from "@/components/ProductOverView/AboutWinerySection";
import Newsletter from "@/components/newsletter/page";
import Footer from "@/components/footer/page";
import NewsletterMobile from "@/components/newsletter/MobileView";
import useSWR from "swr";
import YouMayAlso from "@/components/YouMayAlso/page";
import Loading from "@/components/loading/loading";
import TabButton from "@/common/TabButton";
import Image from "next/image";

const fetcher = (arg: string) => fetch(arg).then((res) => res.json());

export default function ProductsOverview({
  params,
}: {
  params: { id: string };
}) {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_ADDRESS}products/overview/${params.id}`,
    fetcher
  );

  if (isLoading) {
    return <Loading />;
  }

  if (data === undefined) {
    return (
      <div>
        <div className="md:mx-0 mx-4">
          <div className="container mx-auto pt-10 pb-7">
            <div className="flex">
              An error has occured ... could not fetch data from the server
            </div>
          </div>
        </div>
      </div>
    );
  }
  const countryName = ["DEFAULT", "WEEKLY", "Monthly", "YEARLY"];

  return (
    <div>
      <div className="md:mx-0 mx-4">
        <div className=" mx-auto pt-10 pb-7">
          <div className="flex">
            <div className="basis-1/12 hidden md:block"></div>
            <div className="md:basis-11/12 basis-full">
              <h1 className="whitespace-pre-line text-zinc-800 md:text-7xl md:leading-[84px] text-4xl font-normal leading-[42px] tracking-[-1.44px]">
                {data.name}
              </h1>
              {data.art?.name !== undefined ? (
                <p className="text-zinc-800 text-base font-normal leading-snug pt-2 ">
                  With Art of Lola Designer Fun
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className="2xl:container mx-auto">
          <div className="flex relative">
            <div className="basis-1/12 hidden md:block">
              <div>
                <VerticalBreadCrumb />
              </div>
            </div>
            <div className="md:basis-11/12 basis-full ">
              <div className="bg-[#F7EFDF] pt-10 pb-20 ">
                <div className="md:max-w-[1350px] mx-auto">
                  <ProductTopSection data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Release details start  */}
      <section className="container mx-auto md:py-40">
        <div className="md:flex justify-between items-center">
          <div className="flex justify-between md:pb-6 pb-6  md:py-0 py-6 md:bg-transparent bg-[#F7EFDF] px-4 md:px-0 items-center">
            <h2 className="text-zinc-800 md:text-7xl md:font-normal md:leading-[84px] text-base font-semibold leading-snug">
              Release details
            </h2>
            <span className="block md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 text-secondary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </span>
          </div>
          <div className="flex flex-wrap gap-4 md:px-0 px-4 pt-8 md:pt-0">
            <p className="flex gap-4 items-center">
              <span className="text-zinc-800 text-base font-normal leading-snug">
                On the market are
              </span>
              <span className=" text-zinc-800 text-lg font-semibold leading-relaxed">
                {data.editions?.length}
              </span>
            </p>
            <p className="flex gap-4 items-center">
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
        <div className="  px-4 pb-14">
          {/* md:bg-[#FAF5EA] bg-transparent */}

          <div className="grid gap-5 lg:grid-cols-1 md:grid-cols-2 grid-cols-1 py-12">
            <div>
              <PricingDetail item={data} />
            </div>
          </div>
          <div>
            <p className="text-zinc-800 text-lg font-semibold  leading-relaxed pb-4">
              Wine asset performance
            </p>
            <div className="w-full  border-t-2  border-orange-700 border-opacity-20 pb-8">
              <TabButton data={countryName} />
            </div>
            <div className="grid  grid-cols-12 gap-8">
              <div className="col-span-9 md:bg-[#FAF5EA] bg-transparent">
                <Appactivity />
              </div>
              <div className="col-span-3">
                <div className="gap-5 p-5 w-full border  border-orange-700 border-opacity-20 flex-col justify-between items-start inline-flex">
                  <div className="flex items-center gap-3 text-[#906447] text-xs font-normal uppercase leading-3 tracking-tight">
                    <p>TOTAL PERFORMANCE </p>
                    <Image
                      src={infologo}
                      alt="Picture of the author"
                      className=" w-6 h-6 text-secondary"
                    />
                  </div>
                  <div className="flex gap-2 items-center">
                    <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
                      122%
                    </p>
                    <p className="text-zinc-800 text-xs font-normal   uppercase leading-[18px] tracking-tight">
                      +30€
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Release details end  */}
      {/* MindPledge start*/}
      <MindPledge btnTitle="Read More" />
      {/* MindPledge end */}

      {/* All editions start */}
      <AllEditions items={data.editions} />
      {/* All editions end */}
      {/* How to invest in wine start*/}
      <div className="md:block hidden">
        <WineVideoBanner />
      </div>
      {/* How to invest in wine end*/}
      {/* About Chateau La Mission Haut Brion Cru Classe | 2009 start */}
      <div className="md:block hidden">
        <AboutWine wine={data.wine} />
      </div>
      {/* About Chateau La Mission Haut Brion Cru Classe | 2009 end */}
      {/* About artwork start */}
      {/* <div className="md:block hidden">
        <AboutArtWork />
      </div> */}
      {/* About artwork end */}
      {/* About Winery Château Le Pin start */}
      <div className="md:block hidden">
        <AboutWinerySection data={data.wine?.winery} />
      </div>
      {/* you main also like section */}
      <div className=" text-center">
        <div className=" pb-12">
          <h1 className=" text-4xl font-light text-[#2F222B]">
            You may also like
          </h1>
        </div>
        <YouMayAlso />
      </div>
      {/* About Winery Château Le Pin end */}
      <div className="md:block hidden">
        <Newsletter />
      </div>
      <div className="md:hidden block">
        <NewsletterMobile />
      </div>

      <Footer />
    </div>
  );
}
