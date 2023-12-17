"use client";
import React from "react";
import AboutDropDown from "../AboutModalDropdown/page";
import PerformanceModel from "../Performance/page";
import CalculationSetting from "../Calculation/page";
import { Arrows } from "@/assets/icons/Icons";

const Comparison = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <div className="md:pt-[72px] md:pb-[117px] md:px-0 py-[60px] px-4 text-center">
          <div className="md:pb-14 pb-8 text-center">
            <span className="text-[#A6836C]  text-xs font-normal  uppercase leading-3 tracking-tight ">
              Steps
            </span>
            <h3 className="text-zinc-800 text-4xl font-light  leading-[44px] tracking[-0.36px]">
              2/3
            </h3>
          </div>
          {/* here is grid section */}
          <div className="grid md:grid-cols-4 gap-8 pb-8">
            <div className="col-span-1">
              <AboutDropDown />
            </div>
            <div className="col-span-2">
              <PerformanceModel />
            </div>
            <div className="col-span-1">
              <CalculationSetting />
            </div>
          </div>
          {/* here is button  */}
          <button className="px-8 py-[22px] rounded-full border text-center border-orange-700 text-orange-700 border-opacity-20 justify-center items-center gap-3 inline-flex">
          START AGAN<Arrows storke="#BF4D20" />
            </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Comparison;
