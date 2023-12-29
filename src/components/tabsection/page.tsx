"use client";
import React, { useState } from "react";
// import { Wine, releaseDetails, rating } from "@/propTypes/page";

import WineTabe from "./wineTabe/page";
import ArtCard from "../ProductOverView/ArtCard";
import { EditionOverview } from "@/types/editionOverview.dto";

const TabSection = ({ data }: { data?: EditionOverview }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  if (data === undefined) {
    return <></>
  }

  return (
    <div>
      <section className="">
        <div className="container max-w-[395px]">
          {/* first section start */}
          <div className=" md:col-span-2 lg:col-span-1 md:pb-0 pb-5">
            <div className="flex gap-5 border-b border-orange-700 border-opacity-20">
              {data?.wine !== null &&
                <div
                  className={`${selectedTab == 0 && "border-b-2 border-[#BF4D20]"
                    } pb-5 min-w-[180px]`}
                >
                  <button
                    className="text-zinc-800 text-lg font-semibold leading-relaxed"
                    onClick={() => setSelectedTab(0)}
                  >
                    Wine
                  </button>
                  <p className=" text-zinc-800 text-xs font-normal uppercase leading-3 tracking-tight">
                    LWIN: {data?.wine.lwinNumber}
                  </p>
                </div>}
              {data?.art !== null &&
                <div
                  className={`${selectedTab == 1 && "border-b-2 border-[#BF4D20]"
                    } pb-5 min-w-[180px]`}
                >
                  <button
                    className="text-black text-lg font-semibold leading-relaxed"
                    onClick={() => setSelectedTab(1)}
                  >
                    Art
                  </button>
                  <p className=" text-black text-xs font-normal uppercase leading-3 tracking-tight">
                    Artist: Lola Designer Fun...
                  </p>
                </div>}
            </div>

            {selectedTab == 0 ? (
              data.wine !== null &&
              <>
                <WineTabe item={data.wine} starred={data.starred} />
              </>
            ) : (
              <>
                <ArtCard />{" "}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
export default TabSection;
