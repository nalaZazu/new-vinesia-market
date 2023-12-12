"use client"
import React from "react";
import AboutDropDown from "./AboutModalDropdown/page";
import { Arrows } from "@/assets/icons/Icons";

const AboutModalOne = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <div className="md:px-[416px] md:py-[72px]  text-center   px-4  pt-[60px] pb-[72px] ">
          <div className="md:pb-14 pb-8">
            <span className="text-[#A6836C]  text-xs font-normal  uppercase leading-3 tracking-tight ">
              Steps
            </span>
            <h3 className="text-zinc-800 text-4xl font-light  leading-[44px] tracking[-0.36px]">
              1/3
            </h3>
          </div>
          <div>
            <h3 className=" text-center text-zinc-800 md:text-4xl  pb-4 md:leading-[44px] tracking-[-0.36px]     text-[21px] font-light   leading-[29px]">
              Assets in your investment portfolio
            </h3>
            <p className="text-center text-zinc-800 text-base font-normal  leading-snug ">
              Choose assets and determine what percentage of your portfolio they
              represent
            </p>
          </div>

          <AboutDropDown />

          <button className="px-8 py-[22px] rounded-full border border-orange-700 text-orange-700 border-opacity-20 justify-center items-center gap-3 inline-flex">
          NEXT <Arrows storke="#BF4D20" />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutModalOne;
