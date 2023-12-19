"use client";
import React, { useState } from "react";
// import { Wine, releaseDetails, rating } from "@/propTypes/page";
import WineCard from "./WineCard";
import ArtCard from "./ArtCard";
import ProductCarousel from "./ProductOverviewCarousel";
import ShareCard from "@/common/ShareCard";
import { Disclosure } from "@headlessui/react";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import WineArtDisclosure from "./WineArtDisclosure";

const ProductTopSection = ({ data }: { data: any }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  if (data === undefined || data === null) {
    return <></>
  }

  return (
    <div>
      <section className="md:mx-0 mx-4">
        <div className="grid pb-16 lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
          {/* slider start */}
          <div className="">
            <ProductCarousel />
          </div>
          <div className="md:hidden block">
            <ShareCard data={data} />
          </div>
          {/* slider end */}
          {/* first section start */}
          <div className="md:grid md:grid-cols-1 md:pb-0 pb-5 hidden max-w-[607px]">
            <div className="flex gap-5 border-b border-orange-700 border-opacity-20">
              { data.wine === null ? <></>:
              <div className="border-b border-orange-950 border-opacity-20 pb-5">
                <button
                  className="text-zinc-800 text-lg font-semibold leading-relaxed"
                  onClick={() => setSelectedTab(0)}
                >
                  Wine
                </button>
                <p className=" text-zinc-800 text-xs font-normal uppercase leading-3 tracking-tight">
                  LWIN: {data.wine.lwinNumber}
                </p>
              </div>
              }

              <div>
                <button
                  className="text-black text-lg font-semibold leading-relaxed"
                  onClick={() => setSelectedTab(1)}
                >
                  Art
                </button>
                <p className=" text-black text-xs font-normal uppercase leading-3 tracking-tight">
                  Artist: Lola Designer Fun...
                </p>
              </div>
            </div>

            {selectedTab == 0 ? (
              <>
                <WineCard data={data}/>
              </>
            ) : (
              <>
                <ArtCard />
              </>
            )}
          </div>

          {/* Mobile View */}
          <div className="block md:hidden">
            <WineArtDisclosure />
          </div>
        </div>
      </section>
    </div>
  );
};
export default ProductTopSection;
