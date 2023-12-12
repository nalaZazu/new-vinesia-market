"use client";
import React, { useState } from "react";
// import { Wine, releaseDetails, rating } from "@/propTypes/page";
import ProductCarousel from "../ProductOverView/ProductCarousel";
import ShareCard from "@/common/ShareCard";
import { Disclosure } from "@headlessui/react";
import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/20/solid";
import WineVideoBanner from "../ProductOverView/WineVideoBanner";

export default function AboutDisclosure() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <>
        {[1, 2, 3, 4]?.map((item: any, i: any) => {
          return (
            <div key={i} className="pb-6">
              <Disclosure>
                {({ open }) => (
                  <>
                    <div className="">
                      <Disclosure.Button
                        className={`flex w-full justify-between px-4 py-6`}
                      >
                        <div className="flex w-full flex-wrap justify-between items-center">
                          <div className="  pb-5 text-start">
                            <button
                              className="text-zinc-800 text-lg font-semibold leading-relaxed"
                              onClick={() => setSelectedTab(0)}
                            >
                              How to invest in wine?
                            </button>
                            {/* {open && (
                        <p className=" text-zinc-800 text-xs font-normal uppercase leading-3 tracking-tight">
                          LWIN: 123456
                        </p>
                      )} */}
                          </div>
                          <div>
                            <ArrowDownRightIcon
                              className={` text-[#bf4d20] ${
                                open ? "" : "rotate-180 transform"
                              } h-6 w-6`}
                            />
                          </div>
                        </div>
                      </Disclosure.Button>
                      <Disclosure.Panel>
                        <div className="px-4">
                          <WineVideoBanner />
                        </div>
                      </Disclosure.Panel>
                    </div>
                  </>
                )}
              </Disclosure>
            </div>
          );
        })}
      </>
    </div>
  );
}