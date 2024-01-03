"use client";
import Image from "next/image";
import React, { useState } from "react";
import wine from "../../assets/images/critcsimage.png";
import signature from "../../assets/images/signature.png";
import { Arrows, InfoIcon } from "@/assets/icons/Icons";
import Link from "next/link";

const Critics = ({ data }: { data: any }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="pt-16 pb-5 sm:py-8">
      {/* critics-section */}
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 lg:gap-14 md:gap-[30px] gap-4">
        <div className=" col-span-2 flex">
          <ul className=" text-secondary text-lg font-semibold  tracking-tight">
            {data?.map((item: any, index: any) => {
              const { winery, name, vintage } = item;
              return (
                <li
                  className=" mt-4 flex gap-[63px] align-top cursor-pointer"
                  key={index}
                  onClick={() => setSelectedTab(index)}
                >
                  <span
                    className={
                      selectedTab === index
                        ? "text-[13px] font-normal leading-[60px]  tracking-tight  text-critcscount"
                        : "text-[13px] font-normal leading-[60px]  tracking-tight text-[#2F222B20]"
                    }
                  >
                    {index + 1}
                  </span>
                  <div className=" col-span-4 pe-3">
                    <h1
                      className={
                        selectedTab === index
                          ? "text-[#2F222B] text-4xl font-light"
                          : " text-[#2F222B20] text-4xl font-light "
                      }
                      // className="text-[#2F222B] text-4xl font-light"
                    >
                      {winery} {name} {vintage}
                    </h1>
                  </div>{" "}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <div>
            <div className="flex">
              <div>
                <Image src={wine} alt="image" className="mr-2" />
              </div>
            </div>
          </div>
        </div>

        <div className=" col-span-2">
          <div className="flex gap-14">
            <ul className="text-base font-normal   tracking-tight flex flex-col justify-between text-critparacolor">
              {data?.map((detail: any, index: any) => {
                const { description } = detail;
                return (
                  <div key={index}>
                    {index === selectedTab && (
                      <div>
                        <li>{description}</li>
                        <div className="text-center"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </ul>
            <div>
              <p className="  flex items-center text-stone-500 text-xs font-normal  percase leading-3 tracking-tight uppercase gap-2">
                Vinesia Score
                <InfoIcon fill="#BF4D20" />
              </p>
              {data?.map((items: any, index: any) => {
                const { maxRating, rating, ratingBy } = items;
                return (
                  <div key={index}>
                    {index === selectedTab && (
                      <div className="flex flex-col ">
                        <h1 className="  tracking-tight   text-zinc-800 text-7xl font-normal  ">
                          {maxRating} / {rating}
                        </h1>
                        <span className=" mt-8  text-stone-500 text-xs font-normal  uppercase leading-3 tracking-tight">
                          Critiqued By
                        </span>
                        <p className="text-zinc-800 text-lg font-semibold  leading-relaxed">
                          {ratingBy}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}

              <span>
                <Image src={signature} alt="signature" />
              </span>
              <Link href="/invest">
                {" "}
                <button className="w-[156px] h-10 px-4 py-2.5 rounded-[48px] border border-orange-700 justify-center items-center gap-2 inline-flex text-center text-orange-700 text-xs font-normal  uppercase leading-3 tracking-tight cursor-pointer">
                  Invest now
                  <span>
                    <Arrows storke="#BF4D20" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Critics;
