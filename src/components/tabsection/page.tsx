"use client";
import React, { useState } from "react";
// import { Wine, releaseDetails, rating } from "@/propTypes/page";

import WineTabe from "./wineTabe/page";

const TabSection = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div>
      <section className=" pb-20">
        <div className="container max-w-[395px]">
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
                <WineTabe/>
              </>
            ) : (
              <>
                <WineTabe />{" "}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
export default TabSection;
