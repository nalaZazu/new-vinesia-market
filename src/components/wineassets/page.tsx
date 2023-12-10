"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AlertCircle, Arrows } from "@/assets/icons/Icons";
import law from "@/assets/icons/law.svg";
import esstinal from "@/assets/icons/esstinal.svg";
import avatar from "@/assets/images/avatar Base.png";
export default function AssetDetails() {
  const [selected, setSelected] = useState(0);
  const list = ["All", "Transactions", "Bid", "Asks"];
  return (
    <section className="container mx-auto">
      <div className="mt-12">
        <div className="grid gap-4 md:gap-10 md:grid-cols-8 grid-cols-4   pl-6 pr-24 py-6 bg-orange-50 rounded">
          <div className=" md:col-span-5 col-span-4  ">
            <div className="flex items-center pb-6">
              <div className="basis-1/4">
                <h3 className="text-zinc-800 text-lg font-semibold  leading-relaxed">
                  Pricing history
                </h3>
              </div>
            </div>

            <div>
              {/* first box */}
              <div className=" flex  rounded-tl rounded-tr border  items-center gap-[10px]  p-5 bg-orange-50 border-b border-orange-700 border-opacity-20">
                <div className="flex text-bgsecondary">
                  <p className="flex gap-[10px] items-center">
                    <span className="text-zinc-800 text-base font-normal  leading-snug">
                      On the market are
                    </span>
                    <span className="text-zinc-800 text-lg font-semibold   leading-relaxed">
                      243
                    </span>
                    <span className="text-zinc-800 text-base font-normal   leading-snug">
                      editions of this product
                    </span>
                  </p>
                </div>

                <span>
                  <AlertCircle storke="#BF4D20" />
                </span>
              </div>
              {/* next box section  */}
              <div className=" grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
                <div className=" grid gap-0 lg:grid-cols-1 md:grid-cols-1 grid-cols-1">
                  <div className=" flex justify-between items-center   border-x-2   gap-2.5  p-5   border-b border-orange-700 border-opacity-20">
                    <div className="flex gap-1 items-center">
                      <h2 className="text-stone-500 text-xs font-normal   uppercase leading-3 tracking-tight">
                        Release Price{" "}
                      </h2>{" "}
                      <AlertCircle storke="#BF4D20" />
                    </div>

                    <div>
                      <p className="text-zinc-800 text-lg font-semibold   leading-relaxed">
                        €38,888
                      </p>
                    </div>
                  </div>
                  <div className=" flex justify-between items-center   border-x-2   gap-2.5      p-5   border-b border-orange-700 border-opacity-20">
                    <div className="flex gap-1 items-center">
                      <h2 className="text-stone-500 text-xs font-normal   uppercase leading-3 tracking-tight">
                        AVERAGE MARKET PRICE
                      </h2>{" "}
                      <AlertCircle storke="#BF4D20" />
                    </div>

                    <div>
                      <p className="text-zinc-800 text-lg font-semibold   leading-relaxed">
                        €48,888
                      </p>
                    </div>
                  </div>
                  <div className=" flex justify-between items-center   border-x-2   gap-2.5  p-5   border-b border-orange-700 border-opacity-20">
                    <div>
                      <div className="flex gap-1 items-center">
                        <h2 className="text-stone-500 text-xs font-normal   uppercase leading-3 tracking-tight">
                          Highest Price
                        </h2>

                        <AlertCircle storke="#BF4D20" />
                      </div>
                      <h2 className="text-stone-400 text-xs font-normal leading-3">
                        ever transacted for product
                      </h2>
                    </div>{" "}
                    <div>
                      <p className="text-zinc-800 text-lg font-semibold  leading-relaxed">
                        €48,888
                      </p>
                    </div>
                  </div>

                  <div className="bg-typegray border-typegray text-white flex justify-between items-center   border-x-2   gap-2.5  p-5   border-b border-orange-700 border-opacity-20 bg-slate-700">
                    <div>
                      <div className="flex gap-1 items-center">
                        <h2 className="text-white text-xs font-normal  uppercase leading-3 tracking-tight">
                          Price Change
                        </h2>

                        <AlertCircle storke="#FFFFFF" />
                      </div>
                      <h2 className="text-slate-400 text-xs font-normal   leading-3">
                        Ever transacted for product
                      </h2>
                    </div>
                    <p className=" text-lg font-semibold text-white  tracking-tight flex">
                      + 66.6%{" "}
                      <span>
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.9508 7.55005L7.05078 17.45"
                            stroke="#42A55E"
                            stroke-width="1.5"
                            strokeLinecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10 7.5L16.95 7.549L17 14.5"
                            stroke="#42A55E"
                            stroke-width="1.5"
                            strokeLinecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </p>
                  </div>
                </div>
                {/* column two */}
                <div className=" grid gap-0 lg:grid-cols-1 md:grid-cols-1 grid-cols-1">
                  {/* <Appactivity /> */} 
                  <div className="pt-6 pl-5 pr-5 pb-5 rounded-bl rounded-tr border">
                    <h3 className="text-zinc-800 text-lg font-semibold  leading-relaxed">Price history</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* second box */}
          <div className="md:col-span-3 col-span-4 px-4 md:px-6">
            <div className="flex items-center pb-6 gap-10">
              <h2 className="basis-1/2 text-black text-lg font-semibold tracking-tight">
                Transactions history
              </h2>
            </div>
            <div className="flex justify-between mx-auto ">
              <div className="">
                <ul
                  className="flex  font-medium text-center border-b   border-t  border-orange-700 border-opacity-20"
                  id="default-tab"
                  data-tabs-toggle="#default-tab-content"
                  role="tablist"
                >
                  {list.map((l, i) => {
                    return (
                      <li
                        key={i}
                        className="text-orange-700 text-xs font-normal  uppercase leading-3 tracking-tight mt-0"
                        role="presentation"
                      >
                        <button
                          onClick={() => setSelected(i)}
                          className={` px-6 py-4 ${
                            selected == i
                              ? "border-b border-orange-700 text-orange-700"
                              : "text-zinc-800"
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
                <div className="">
                  <div className="flow-root">
                    <ul role="list" className="">
                      <li className="flex justify-between border-b border-orange-700 border-opacity-20 items-center">
                        <div className="flex-col inline-flex py-4 px-6">
                          <p className="  text-zinc-800 text-lg font-semibold   leading-relaxed">
                            @Marta
                          </p>
                          <div className="pl-2.5   border-black border-opacity-30 justify-start items-center gap-2 inline-flex">
                            <p className="opacity-60 text-right text-black text-xs font-normal   tracking-tight">
                              Place a bid
                            </p>
                            <div className="  justify-start items-start gap-2.5 flex">
                              <p className="text-justify   text-zinc-800 text-base font-normal   leading-snug">
                                50 560 EUR
                              </p>
                            </div>
                            <div className="  justify-start items-start gap-2.5 flex">
                              <p className="text-justify   text-zinc-800 text-base font-normal   leading-snug">
                                <Image src={law} alt="law" />
                              </p>
                            </div>
                          </div>
                          <div className="px-2.5 pb-1   border-black border-opacity-40 justify-start items-center gap-2 inline-flex">
                            <p className="text-justify   text-zinc-500 text-xs font-normal  leading-tight flex gap-1">
                              5 minutes ago
                              <span>
                                <Image src={esstinal} alt="law" />
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <Image src={avatar} alt="Picture of the author" />
                        </div>
                      </li>
                      {/* second */}
                      <li className="flex justify-between border-b border-orange-700 border-opacity-20 items-center">
                        <div className="flex-col inline-flex py-4 px-6">
                          <p className="  text-zinc-800 text-lg font-semibold   leading-relaxed">
                            @Jo_azja
                          </p>
                          <div className="pl-2.5   border-black border-opacity-30 justify-start items-center gap-2 inline-flex">
                            <p className="opacity-60 text-right text-black text-xs font-normal   tracking-tight">
                              Buy for
                            </p>
                            <div className="  justify-start items-start gap-2.5 flex">
                              <p className="text-justify   text-zinc-800 text-base font-normal   leading-snug">
                                €46,560
                              </p>
                            </div>
                          </div>
                          <div className="px-2.5 pb-1   border-black border-opacity-40 justify-start items-center gap-2 inline-flex">
                            <p className="text-justify   text-zinc-500 text-xs font-normal  leading-tight flex gap-1">
                              9 minutes ago
                              <span>
                                <Image src={esstinal} alt="law" />
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <Image src={avatar} alt="Picture of the author" />
                        </div>
                      </li>
                      {/* third  */}
                      <li className="flex justify-between border-b border-orange-700 border-opacity-20 items-center">
                        <div className="flex-col inline-flex py-4 px-6">
                          <p className="  text-zinc-800 text-lg font-semibold   leading-relaxed">
                            @buyer_1234_5432...
                          </p>
                          <div className="pl-2.5   border-black border-opacity-30 justify-start items-center gap-2 inline-flex">
                            <p className="opacity-60 text-right text-black text-xs font-normal   tracking-tight">
                              Buy for
                            </p>
                            <div className="  justify-start items-start gap-2.5 flex">
                              <p className="text-justify   text-zinc-800 text-base font-normal   leading-snug">
                                €46,560
                              </p>
                            </div>
                          </div>
                          <div className="px-2.5 pb-1   border-black border-opacity-40 justify-start items-center gap-2 inline-flex">
                            <p className="text-justify   text-zinc-500 text-xs font-normal  leading-tight flex gap-1">
                              Sep 24, 2023 | 2:45 am{" "}
                              <span>
                                <Image src={esstinal} alt="law" />
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <Image src={avatar} alt="Picture of the author" />
                        </div>
                      </li>
                      {/* four */}
                      <li className="flex justify-between border-b border-orange-700 border-opacity-20 items-center">
                        <div className="flex-col inline-flex py-4 px-6">
                          <p className="  text-zinc-800 text-lg font-semibold   leading-relaxed">
                            @buyer_1234_5432...
                          </p>
                          <div className="pl-2.5   border-black border-opacity-30 justify-start items-center gap-2 inline-flex">
                            <p className="opacity-60 text-right text-black text-xs font-normal   tracking-tight">
                              Buy for
                            </p>
                            <div className="  justify-start items-start gap-2.5 flex">
                              <p className="text-justify   text-zinc-800 text-base font-normal   leading-snug">
                                €46,560
                              </p>
                            </div>
                          </div>
                          <div className="px-2.5 pb-1   border-black border-opacity-40 justify-start items-center gap-2 inline-flex">
                            <p className="text-justify   text-zinc-500 text-xs font-normal  leading-tight flex gap-1">
                              Sep 24, 2023 | 2:45 am{" "}
                              <span>
                                <Image src={esstinal} alt="law" />
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <Image src={avatar} alt="Picture of the author" />
                        </div>
                      </li>
                    </ul>

                    <button className="text-center text-orange-700 text-xs font-normal  uppercase leading-3 tracking-tight justify-center
                     items-center gap-3 w-full mx-auto flex pt-6">
                      SEE MORE
                      <span>
                        <Arrows storke="#BF4D20" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
