"use client";
import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import logo from "@/assets/images/logonew.png";
import logo1 from "@/assets/images/img1.png";
import logo2 from "@/assets/images/img2.png";
import logo3 from "@/assets/images/img3.png";
import logo4 from "@/assets/images/img4.svg";
import Image from "next/image";
// import { ArrowBtn } from "@/assets/icon/Icons";
const DisclosureModal = () => {
  const [selected, setSelected] = useState(0);
  const list = ["All", "Transactions", "Bid", "Asks"];
  return (
    <>
      <div>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full flex justify-between items-center gap-5 mt-10">
                <div className="basis-1/4">
                  <h2 className="text-black text-lg font-semibold tracking-tight text-left">
                    Transactions history
                  </h2>
                </div>
                <div className="basis-4/5 ">
                  <hr className=" border-black" />
                </div>
                <span
                  className={`${
                    open ? "" : "rotate-180 transform"
                  } h-5 w-5 text-primary`}
                >
                  {/* <ArrowBtn /> */}
                </span>
              </Disclosure.Button>

              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                <div className=" mx-auto flex">
                  <div className="flex justify-between mx-auto py-5">
                    <div className="">
                      <ul
                        className="flex flex-wrap font-medium text-center bg-zinc-100 rounded-lg"
                        id="default-tab"
                        data-tabs-toggle="#default-tab-content"
                        role="tablist"
                      >
                        {list.map((l, i) => {
                          return (
                            <li
                              key={i}
                              className="text-center text-zinc-700 text-xxs font-medium"
                              role="presentation"
                            >
                              <button
                                onClick={() => setSelected(i)}
                                className={`px-8 py-1.5 rounded-lg   ${
                                  selected == i ? "bg-white shadow-md" : ""
                                } `}
                                id="profile-tab"
                                data-tabs-target="#profile"
                                type="button"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false"
                              >
                                {l}
                              </button>
                            </li>
                          );
                        })}
                      </ul>

                      <div className="pt-6">
                        <div className="flow-root">
                          <ul role="list" className=" space-y-3">
                            <li className="flex justify-between ">
                              <div className="flex-col inline-flex">
                                <p className="text-neutral-900 text-xs font-medium ">
                                  @Marta
                                </p>
                                <div className="pl-2.5 border-l border-black border-opacity-30 justify-start items-center gap-2 inline-flex">
                                  <p className="opacity-60 text-right text-black text-xs font-normal uppercase tracking-tight">
                                    place a Bid
                                  </p>
                                  <div className="border-l justify-start items-start gap-2.5 flex">
                                    <p className="text-justify text-neutral-900 text-xs font-medium ">
                                      50 560 EUR
                                    </p>
                                  </div>
                                </div>
                                <div className="px-2.5 pb-1 border-l border-black border-opacity-40 justify-start items-center gap-2 inline-flex">
                                  <p className="text-justify text-neutral-400 text-xxs font-normal ">
                                    5 minutes ago
                                  </p>
                                </div>
                              </div>
                              <div className="flex-shrink-0">
                                <Image
                                  src={logo}
                                  alt="Picture of the author"
                                  className="w-5"
                                />
                              </div>
                            </li>
                            <li className="flex justify-between ">
                              <div className="flex-col inline-flex">
                                <p className="text-neutral-900 text-xs font-medium ">
                                  @Jo_azja
                                </p>
                                <div className="pl-2.5 border-l border-black border-opacity-30 justify-start items-center gap-2 inline-flex">
                                  <p className="opacity-60 text-right text-black text-xs font-normal uppercase tracking-tight">
                                    buy for
                                  </p>
                                  <div className="border-l justify-start items-start gap-2.5 flex">
                                    <p className="text-justify text-neutral-900 text-xs font-medium ">
                                      €49,550
                                    </p>
                                  </div>
                                </div>
                                <div className="px-2.5 pb-1 border-l border-black border-opacity-40 justify-start items-center gap-2 inline-flex">
                                  <p className="text-justify text-neutral-400 text-xxs font-normal ">
                                    Yesterday | 3:45 AM
                                  </p>
                                </div>
                              </div>
                              <div className="flex-shrink-0">
                                <Image
                                  src={logo1}
                                  alt="Picture of the author"
                                  className=" w-7"
                                />
                              </div>
                            </li>
                            <li className="flex justify-between ">
                              <div className="flex-col inline-flex">
                                <p className="text-neutral-900 text-base font-medium">
                                  @buyer_1234_5432
                                </p>
                                <div className="pl-2.5 border-l border-black border-opacity-30 justify-start items-center gap-2 inline-flex">
                                  <p className="opacity-60 text-right text-black text-xs font-normal uppercase">
                                    buy for
                                  </p>
                                  <div className="border-l justify-start items-start gap-2.5 flex">
                                    <p className="text-neutral-900 text-xs font-medium">
                                      €46,560
                                    </p>
                                  </div>
                                </div>
                                <div className="px-2.5 pb-1 border-l border-black border-opacity-40 justify-start items-center gap-2 inline-flex">
                                  <p className="text-justify text-neutral-400 text-xxs font-normal">
                                    Yesterday | 3:45 AM
                                  </p>
                                </div>
                              </div>
                              <div className="flex-shrink-0">
                                <Image
                                  src={logo2}
                                  alt="Picture of the author"
                                  className=" w-12"
                                />
                              </div>
                            </li>
                            <li className="flex justify-between ">
                              <div className="flex-col inline-flex">
                                <p className="text-neutral-900 text-xs font-medium">
                                  @buyer_1234_5432
                                </p>
                                <div className="pl-2.5 border-l border-black border-opacity-30 justify-start items-center gap-2 inline-flex">
                                  <p className="opacity-60 text-right text-black text-xs font-normal uppercase">
                                    place a Bid
                                  </p>
                                  <div className="border-l justify-start items-start gap-2.5 flex">
                                    <p className="text-neutral-900 text-xs font-medium">
                                      €46,560
                                    </p>
                                  </div>
                                </div>
                                <div className="px-2.5 pb-1 border-l border-black border-opacity-40 justify-start items-center gap-2 inline-flex">
                                  <p className="text-justify text-neutral-400 text-xxs font-normal">
                                    Sep 30, 2023 | 2:45 AM
                                  </p>
                                </div>
                              </div>
                              <div className="flex-shrink-0">
                                <Image
                                  src={logo2}
                                  alt="Picture of the author"
                                  className=" w-7"
                                />
                              </div>
                            </li>
                            <li className="flex justify-between ">
                              <div className="flex-col inline-flex">
                                <p className="text-neutral-900 text-xs font-medium">
                                  @Victorian
                                </p>
                                <div className="pl-2.5 border-l border-black border-opacity-30 justify-start items-center gap-2 inline-flex">
                                  <p className="opacity-60 text-right text-black text-xs font-normal uppercase">
                                    place a Bid
                                  </p>
                                  <div className="border-l justify-start items-start gap-2.5 flex">
                                    <p className="text-neutral-900 text-xs font-medium">
                                      46 360 EUR
                                    </p>
                                  </div>
                                </div>
                                <div className="px-2.5 pb-1 border-l border-black border-opacity-40 justify-start items-center gap-2 inline-flex">
                                  <p className="text-justify text-neutral-400 text-xxs font-normal">
                                    Sep 24, 2023 | 3:45 PM
                                  </p>
                                </div>
                              </div>
                              <div className="flex-shrink-0">
                                <Image
                                  src={logo3}
                                  alt="Picture of the author"
                                  className=" w-7"
                                />
                              </div>
                            </li>
                            <li className="flex justify-between ">
                              <div className="flex-col inline-flex">
                                <p className="text-neutral-900 text-xs font-medium">
                                  @Victorian
                                </p>
                                <div className="pl-2.5 border-l border-black border-opacity-30 justify-start items-center gap-2 inline-flex">
                                  <p className="opacity-60 text-right text-black text-xs font-normal uppercase">
                                    Ask for
                                  </p>
                                  <div className="border-l justify-start items-start gap-2.5 flex">
                                    <p className="text-neutral-900 text-xs font-medium">
                                      €46,560
                                    </p>
                                  </div>
                                </div>
                                <div className="px-2.5 pb-1 border-l border-black border-opacity-40 justify-start items-center gap-2 inline-flex">
                                  <p className="text-justify text-neutral-400 text-xxs font-normal">
                                    Sep 23, 2023 | 3:45 PM
                                  </p>
                                </div>
                              </div>
                              <div className="flex-shrink-0">
                                <Image
                                  src={logo4}
                                  alt="Picture of the author"
                                  className=" w-7 border rounded-2xl p-1"
                                />
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

export default DisclosureModal;
