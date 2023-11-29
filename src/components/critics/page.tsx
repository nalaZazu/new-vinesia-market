"use client";
import Image from "next/image";
import React, { useState } from "react";
import alert from "../../assets/images/alert_circle.png";
import arrowleft from "../../assets/images/arrow_slide_left.png";
import wine from "../../assets/images/group2.png";
import signature from "../../assets/images/signature.png";
import { NextIcon, PrevIcon } from "../../assets/icons/Icons";
const Critics = ({ data }: { data: any }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="pt-16 pb-5 sm:py-8">
      {/* critics-section */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 items-center">
        <div className=" flex">
          <ul className=" text-secondary text-lg font-semibold  tracking-tight w-4/5">
            {data?.map((critics: any, i: any) => {
              return (
                <li
                  key={i}
                  onClick={() => setSelectedTab(i)}
                  className=" mt-4 grid grid-cols-6 gap-2 items-center cursor-pointer"
                >
                  <span className=" text-xxl font-semibold  tracking-tight  text-primary">
                    {i + 1}
                  </span>
                  <div className=" col-span-4 pe-3">
                    <div className="">{critics?.name}</div>
                    <div> {critics?.vintage} </div>
                  </div>
                  {
                    <div>
                      {i == selectedTab && (
                        <div className="w-8 h-8 flex mx-auto bg-neutral-200 rounded-full border-2 border-black text-center items-center">
                          <span className="mx-auto">
                            <NextIcon />
                          </span>
                        </div>
                      )}
                    </div>
                  }
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col-span-2 ">
          {/* imageand text */}
          {data?.map((detail: any, i: any) => {
            return (
              <div key={i}>
                {i == selectedTab && (
                  <div className="flex">
                    <div>
                      <Image src={wine} alt="image" className="mr-2" />
                    </div>
                    <ul className=" md:w-2/3 px-4  text-base font-medium   tracking-tight flex flex-col justify-between">
                      {detail?.description}
                      <div className="text-center">
                        <button className="w-[108px] h-10 px-4 py-2.5 rounded-lg border border-gray-500 justify-center items-center gap-2 inline-flex">
                          <div className="text-gray-500 text-base font-medium tracking-tight">
                            Invest now
                          </div>
                        </button>
                      </div>
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {/* text portion */}
        <div className=" ">
          {data?.map((d: any, i: any) => {
            return (
              <div key={i}>
                {i == selectedTab && (
                  <div>
                    <h2 className="  flex text-secondary text-sm font-normal  tracking-tight">
                      Score
                      <Image
                        src={alert}
                        alt="Picture of the author"
                        width={15}
                        height={15}
                        quality={75}
                        style={{ objectFit: "contain" }}
                        className="ml-2"
                      />
                    </h2>
                    <div className="flex flex-col ">
                      <span className="font-semibold  text-secondary text-xxl  tracking-tight">
                        {d?.rating}/{d?.maxRating}
                      </span>
                      <span className="text-base font-medium mt-5   text-secondary  tracking-tigh">
                        by {d?.ratingBy}
                      </span>
                    </div>
                    <span>
                      <Image src={signature} alt="signature" />
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Critics;
