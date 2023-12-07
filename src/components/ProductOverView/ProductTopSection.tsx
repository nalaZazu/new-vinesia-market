"use client";
import React, { useState } from "react";
// import { Wine, releaseDetails, rating } from "@/propTypes/page";
import WineCard from "./WineCard";
import ArtCard from "./ArtCard";
import ProductCarousel from "../ProductOverView/ProductCarousel";
import ShareCard from "@/common/ShareCard";

const ProductTopSection = ({}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div>
      <section className="bg-themegray mt-5 px-4 pb-20">
        <div className="grid px-4 pb-16 lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
          {/* slider start */}
          <ProductCarousel />
          <div className="md:hidden block">
            <ShareCard />
          </div>
          {/* slider end */}
          {/* first section start */}
          <div className=" md:col-span-2 lg:col-span-1 md:pb-0 pb-5">
            <div className="flex gap-5 border-b border-orange-700 border-opacity-20">
              <div className="border-b border-orange-950 border-opacity-20 pb-5">
                <button
                  className="text-zinc-800 text-lg font-semibold leading-relaxed"
                  onClick={() => setSelectedTab(0)}
                >
                  Wine
                </button>
                <p className=" text-zinc-800 text-xs font-normal uppercase leading-3 tracking-tight">
                  LWIN: 123456
                </p>
              </div>
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
                <WineCard />
              </>
            ) : (
              <>
                <ArtCard />
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
export default ProductTopSection;
