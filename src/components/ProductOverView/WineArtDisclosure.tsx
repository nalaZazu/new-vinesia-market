"use client";
import React, { useState } from "react";
// import { Wine, releaseDetails, rating } from "@/propTypes/page";
import WineCard from "./WineCard";
import ArtCard from "./ArtCard";
import ProductCarousel from "./ProductOverviewCarousel";
import ShareCard from "@/common/ShareCard";
import { Disclosure } from "@headlessui/react";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

export default function WineArtDisclosure() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <>
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
                    <div className="  pb-5 text-start">
                      <button
                        className="text-zinc-800 text-lg font-semibold leading-relaxed"
                        onClick={() => setSelectedTab(0)}
                      >
                        Wine
                      </button>
                      {open && (
                        <p className=" text-zinc-800 text-xs font-normal uppercase leading-3 tracking-tight">
                          LWIN: 123456
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
                    <WineCard />
                  </div>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

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
                    <div className="  pb-5 text-start">
                      <button
                        className="text-zinc-800 text-lg font-semibold leading-relaxed"
                        onClick={() => setSelectedTab(1)}
                      >
                        Art
                      </button>
                      {open && (
                        <p className=" text-zinc-800 text-xs font-normal uppercase leading-3 tracking-tight">
                          Artist: Lola Designer Fun...
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
        </Disclosure>
      </>
    </div>
  );
}
