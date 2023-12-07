import React, { useState } from "react";
import Image from "next/image";
// import bottle from "@/assets/icon/bottle.svg";
// import case1 from "@/assets/icon/Case.svg";
// import redwine from "@/assets/icon/redwine.svg";
// import big from "@/assets/icon/big.png";
// import big1 from "@/assets/icon/big1.png";
// import logo1 from "@/assets/icon/logo1.svg";
// import award from "@/assets/icon/award.svg";

export default function ProductTopSection() {
  return (
    <div>
      <section className="py-12 mt-5 px-4">
        {/* <div className="container flex grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2"> */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 px-4 md:px-0 gap:4 md:gap-4 lg:gap-0">
          {/* slider start */}
          <div>
            <div className="flex justify-center items-center">
              {/* <span>
                <Image
                  src={big1}
                  alt="Picture of the author"
                  className="lg:h-full md:h-full h-1/2"
                />
              </span> */}
            </div>
            <div className="flex justify-center">
              <div className="flex bg-white items-center gap-5 py-2 px-5 text-spacegray shadow-md rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>

                {/* <div>
                  <Image
                    src={big1}
                    alt="Picture of the author"
                    width={55}
                    className=" flex justify-center rounded-sm shadow-sm border border-spacegray"
                  />
                </div>
                <div>
                  <Image
                    src={big}
                    alt="Picture of the author"
                    width={55}
                    className=" flex justify-center rounded-sm shadow-sm border border-spacegray"
                  />
                </div>
                <div>
                  <Image
                    src={big1}
                    alt="Picture of the author"
                    width={55}
                    className=" flex justify-center rounded-sm shadow-sm border border-spacegray"
                  />
                </div>
                <div>
                  <Image
                    src={big}
                    alt="Picture of the author"
                    width={55}
                    className=" flex justify-center rounded-sm shadow-sm border border-spacegray"
                  />
                </div> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* slider end */}
          {/* second section start */}
          <div className=" md:col-span-2 lg:col-span-1">
            <div className="flex gap-5 border-b border-orange-700 border-opacity-20">
              <div className="border-b border-orange-950 border-opacity-20 pb-5">
                <button className="text-zinc-800 text-lg font-semibold leading-relaxed">
                  Wine
                </button>
                <p className=" text-zinc-800 text-xs font-normal uppercase leading-3 tracking-tight">
                  LWIN: 123456
                </p>
              </div>
              <div>
                <button className="text-black text-lg font-semibold leading-relaxed">
                  Art
                </button>
                <p className=" text-black text-xs font-normal uppercase leading-3 tracking-tight">
                  Artist: Lola Designer Fun...
                </p>
              </div>
            </div>

            <div className="pt-10 flex">
              <div className="pb-6 space-y-4">
                <div className="flex gap-4 items-center text-stone-500 text-base font-normal leading-snug">
                  <p>First Release Date</p>
                  <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                  <p className="text-zinc-800 text-base font-normal leading-snug">
                    Dec 29, 2023
                  </p>
                </div>
                <div className="flex gap-4 items-center text-stone-500 text-base font-normal leading-snug">
                  <p>This wine is sourced</p>
                  <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                  <p className="text-zinc-800 text-base font-normal leading-snug">
                    directly from the winery
                  </p>
                </div>
                <div className="flex gap-4 items-center text-stone-500 text-base font-normal leading-snug">
                  <p>Case & bottle size</p>
                  <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                  <p className="text-zinc-800 text-base font-normal leading-snug">
                    99 bottle case, Double Magnum (1,5l)
                  </p>
                </div>
                <div className="flex gap-4 items-center text-stone-500 text-base font-normal leading-snug">
                  <p>Type </p>
                  <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                  <p className="text-zinc-800 text-base font-normal leading-snug">
                    Red, 14% Alc
                  </p>
                </div>
                <div className="flex gap-4 items-center text-stone-500 text-base font-normal leading-snug">
                  <p>Origin </p>
                  <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                  <p className="text-zinc-800 text-base font-normal leading-snug">
                    Winery
                  </p>
                  <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                  <p>Château Le Pin </p>
                  <div className="opacity-20 text-orange-700">/</div>
                  <p className="text-zinc-800 text-base font-normal leading-snug">
                    France, Region, Appellation
                  </p>
                </div>
              </div>
              <div>
                <hr className=" border-t-2" />
                {/* <div className="flex justify-end items-center gap-6 py-2 px-5 text-bgsecondary">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                      />
                    </svg>
                    <p className=" text-sm">Share</p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className=" text-sm">999</p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                      />
                    </svg>
                    <p className=" text-sm">999</p>
                  </div>
                  <button
                    type="button"
                    className="rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center text-bgsecondary bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium dark:focus:ring-gray-600 dark:bg-gray-800 mr-2"
                  >
                    See More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 ms-2 text-bgsecondary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                      />
                    </svg>
                  </button>
                </div> */}
              </div>
            </div>
            <div className="my-7 w-[608px] h-[0px] border border-orange-700 border-opacity-20"></div>
            <div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4]?.map((item: any, i: any) => {
                  return (
                    <div key={i} className=" col-span-1 py-5 rounded-sm">
                      <p className="text-stone-500 text-xs font-normal font-['Albert Sans'] uppercase leading-3 tracking-tight pb-3">
                        A. Critic name
                      </p>
                      <div className="flex items-end">
                        <p className=" text-zinc-800 text-[21px] font-light font-['Canela'] leading-[29px] tracking-wide">
                          87/
                        </p>
                        <span className=" text-stone-400 text-xs font-normal font-['Albert Sans'] uppercase leading-3 tracking-tight">
                          100
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="my-7 w-[608px] h-[0px] border border-orange-700 border-opacity-20"></div>
          </div>
          {/* second section end */}
        </div>
      </section>
    </div>
  );
}
