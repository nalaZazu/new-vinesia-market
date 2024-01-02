"use client";
import React, { useState } from "react";
// import { Wine, releaseDetails, rating } from "@/propTypes/page";
import WineCard from "./WineCard";
import ArtCard from "./ArtCard";
import ProductCarousel from "./ProductOverviewCarousel";
import ShareCard from "@/common/ShareCard";
import { Disclosure } from "@headlessui/react";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { ProductWineDto } from "@/types/dto/productWine.dto";
import { ProductArt } from "@/types/productOverview.dto";

export default function WineArtDisclosure({wine, art}: {wine: ProductWineDto | null, art: ProductArt | null}) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <>
      {wine &&
        <Disclosure>
          {({ open }) => (
            <>
              <div className="">
                <Disclosure.Button
                  className={`flex w-full justify-between px-4 py-6 ${
                    open ? "bg-transparent" : "bg-[#bf4d2010]"
                  }`}
                >
                  <div className="flex w-full flex-wrap justify-between items-center">
                    <div className=" text-start">
                      <div
                        className="text-zinc-800 text-lg font-semibold leading-relaxed"
                        onClick={() => setSelectedTab(0)}
                      >
                        Wine
                      </div>
                      {open && (
                        <p className=" text-zinc-800 text-xs font-normal uppercase leading-3 tracking-tight">
                          LWIN: {wine.lwinNumber}
                        </p>
                      )}
                    </div>
                    <div>
                      <ArrowUpRightIcon
                        className={` text-[#bf4d20] ${
                          open ? "" : "rotate-180 transform"
                        } h-6 w-6`}
                      />
                    </div>
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel>
                  <div className="px-4">
                    <WineCard data={{wine: wine}} />
                  </div>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>}
                        {art &&
        <Disclosure>
          {({ open }) => (
            <>
              <div className="">
                <Disclosure.Button
                  className={`flex w-full justify-between px-4 py-6 ${
                    open ? "bg-transparent" : "bg-[#bf4d2010]"
                  }`}
                >
                  <div className="flex w-full flex-wrap justify-between items-center">
                    <div className=" text-start">
                      <div
                        className="text-zinc-800 text-lg font-semibold leading-relaxed"
                        onClick={() => setSelectedTab(1)}
                      >
                        Art
                      </div>
                      {open && (
                        <p className=" text-zinc-800 text-xs font-normal uppercase leading-3 tracking-tight">
                          Artist: 
                        </p>
                      )}
                    </div>
                    <div>
                      <ArrowUpRightIcon
                        className={` text-[#bf4d20] ${
                          open ? "" : "rotate-180 transform"
                        } h-6 w-6`}
                      />
                    </div>
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel>
                  <div className="px-4">
                    <ArtCard />
                  </div>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>}
      </>
    </div>
  );
}
