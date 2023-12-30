"use client";
import React, { useState } from "react";
// import { Wine, releaseDetails, rating } from "@/propTypes/page";
import WineCard from "./WineCard";
import ArtCard from "./ArtCard";
import ProductCarousel from "./ProductOverviewCarousel";
import ShareCard from "@/common/ShareCard";
import WineArtDisclosure from "./WineArtDisclosure";
import { ProductOverview } from "@/types/productOverview.dto";

const ProductTopSection = ({ data }: { data: ProductOverview }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  if (data === undefined || data === null) {
    return <></>;
  }

  return (
    <div>
      <section className="md:mx-0 mx-4">
        <div className="grid pb-16 lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
          {/* slider start */}
          <div className="">
            <ProductCarousel data={[data?.wine?.media ?? '']}/>
          </div>
          <div className="md:hidden block">
            <ShareCard data={data} />
          </div>
          {/* slider end */}
          {/* first section start */}
          <div className="md:grid md:grid-cols-1 md:pb-0 pb-5 hidden max-w-[607px]">
            <div className="flex gap-5 border-b border-orange-700 border-opacity-20">
              {data.wine === null ? (
                <></>
              ) : (
                <div
                  className={`${selectedTab === 0 ? "border-b-2" : ""
                    }  border-orange-700  pb-3  min-w-[180px]`}
                >
                  <button
                    className="text-start"
                    onClick={() => setSelectedTab(0)}
                  >
                    <p className=" text-zinc-800 text-lg font-semibold leading-relaxed ">
                      {" "}
                      Wine
                    </p>
                    <p className=" text-zinc-800 text-xs font-normal uppercase leading-3 tracking-tight">
                      LWIN: {data.wine.lwinNumber}
                    </p>
                  </button>
                </div>
              )}

              {data.art === null ? (
                <></>
              ) : (
                <div
                  className={`${selectedTab === 1 ? "border-b-2" : ""
                    }  border-orange-700  pb-3  min-w-[180px]`}
                >
                  <button
                    className="text-start"
                    onClick={() => setSelectedTab(1)}
                  >
                    <p className="text-black text-lg font-semibold leading-relaxed">
                      {" "}
                      Art
                    </p>{" "}
                    <p className=" text-black text-xs font-normal uppercase leading-3 tracking-tight">
                      Artist:
                    </p>
                  </button>
                </div>
              )}

            </div>

            {selectedTab == 0 ? (
              <>
                <WineCard data={data} />
              </>
            ) : (
              <>
                <ArtCard />
              </>
            )}

            <ShareCard data={data} />
          </div>

          {/* Mobile View */}
          <div className="block md:hidden">
            <WineArtDisclosure wine={data.wine} art={data.art} />
          </div>
        </div>
      </section>
    </div>
  );
};
export default ProductTopSection;
