"use client";
import React, { useEffect, useRef } from "react";
import VerticalBreadCrumb from "@/common/verticalBreadcrumb/page";
import ProductTopSection from "@/components/ProductOverView/ProductTopSection";
import AllEditions from "@/components/ProductOverView/AllEditions";
import MindPledge from "@/components/mindpledge/page";
import WineVideoBanner from "@/components/ProductOverView/WineVideoBanner";
import AboutWine from "@/components/ProductOverView/AboutWine";
import AboutWinerySection from "@/components/ProductOverView/AboutWinerySection";
import Newsletter from "@/components/newsletter/page";
import Footer from "@/components/footer/page";
import NewsletterMobile from "@/components/newsletter/MobileView";
import useSWR from "swr";
import YouMayAlso from "@/components/YouMayAlso/page";
import Loading from "@/components/loading/loading";
import ReleaseDetails from "@/components/Releasedetails/page";
import InvestBread from "@/common/InvestBread";

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

  const divRef = useRef<any>(null);

  useEffect(() => {
    const measureDiv = () => {
      if (divRef?.current) {
        const width = divRef?.current.offsetWidth;
        divRef.current.style.transform = ` translate(-60%, ${
          width / 2
        }px) rotate(-90deg)`;
      }
    };
    measureDiv();
  }, [divRef, data]);

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

  return (
    <div>
      <div className="md:mx-0 mx-4">
        <div className=" mx-auto pt-10 pb-7">
          <div className="flex">
            <div className="basis-1/12 hidden md:block"></div>
            <div className="md:basis-11/12 basis-full">
              <h1 className="whitespace-pre-line text-zinc-800 md:text-7xl md:leading-[84px] text-4xl font-normal leading-[42px] tracking-[-1.44px] md:max-w-[1350px] mx-auto">
                {data?.name}
              </h1>
              {data?.art?.name !== undefined ? (
                <p className="text-zinc-800 text-base font-normal leading-snug pt-2 ">
                  With Art of
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className="2xl:container mx-auto">
          <div className="flex relative">
            <div className="basis-1/12 hidden md:block relative"></div>
            <div className="md:basis-11/12 basis-full relative">
              {" "}
              <span
                ref={divRef}
                className={` absolute left-0  md:block hidden translate-x-[-60%] rotate-[-90deg] `}
              >
                <InvestBread baseName="vinesia marketplace" />
              </span>
              <div className="bg-[#F7EFDF] pt-10 md:pb-20 ">
                <div className="md:max-w-[1350px] mx-auto">
                  <ProductTopSection data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Release details start  */}
      <ReleaseDetails data={data} />
      {/*Release details end  */}
      {/* MindPledge start*/}
      <MindPledge btnTitle="Read More" />
      {/* MindPledge end */}

      {/* All editions start */}
      <AllEditions items={data?.editions} />
      {/* All editions end */}
      {/* How to invest in wine start*/}
      <div className="md:block hidden">
        <WineVideoBanner />
      </div>
      {/* How to invest in wine end*/}
      {/* About Chateau La Mission Haut Brion Cru Classe | 2009 start */}
      <div className="md:block hidden">
        <AboutWine wine={data?.wine} />
      </div>
      {/* About Chateau La Mission Haut Brion Cru Classe | 2009 end */}
      {/* About artwork start */}
      {/* <div className="md:block hidden">
        <AboutArtWork />
      </div> */}
      {/* About artwork end */}
      {/* About Winery Château Le Pin start */}
      <div className="md:block hidden">
        <AboutWinerySection data={data?.wine?.winery} />
      </div>
      {/* you main also like section */}
      <div className=" text-center">
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
