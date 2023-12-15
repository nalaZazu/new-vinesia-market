"use client"
 
import { Arrows } from "@/assets/icons/Icons";
import AboutDropDown from "@/components/Modal/AboutModalDropdown/page";
import CalculationSetting from "@/components/Modal/Calculation/page";
import CalcuationProgress from "@/components/Modal/CalculationProgress/page";
import PerformanceModel from "@/components/Modal/Performance/page";
import Comparison from "@/components/Modal/comparison/page";
import React from "react";
const AboutModalOne = () => {
  return (
    <React.Fragment>
      
      <div className="container mx-auto">
        <div className="md:px-[416px] md:py-[72px]  text-center  px-4  pt-[60px] pb-[72px] ">
          <div className="md:pb-14 pb-8">
            <span className="text-[#A6836C]  text-xs font-normal  uppercase leading-3 tracking-tight ">
              Steps
            </span>
            <h3 className="text-zinc-800 text-4xl font-light  leading-[44px] tracking[-0.36px]">
              1/3
            </h3>
          </div>
          <div>
            <h3 className=" text-center text-zinc-800 md:text-4xl  pb-4 md:leading-[44px] tracking-[-0.36px]  text-[21px] font-light   leading-[29px]">
              Assets in your investment portfolio
            </h3>
            <p className="text-center text-zinc-800 text-base font-normal  leading-snug ">
              Choose assets and determine what percentage of your portfolio they
              represent
            </p>
          </div>
          <div className="py-8 md:px-12 ">
            <AboutDropDown />
          </div>
          <button className="px-8 py-[22px] rounded-full border text-center border-orange-700 text-orange-700 border-opacity-20 justify-center items-center gap-3 inline-flex">
            NEXT <Arrows storke="#BF4D20" />
          </button>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="md:px-[415px] md:py-[72px] text-center  px-4  pt-[60px] pb-[72px]">
          <div className="md:pb-14 pb-8 text-center">
            <span className="text-[#A6836C]  text-xs font-normal  uppercase leading-3 tracking-tight ">
              Steps
            </span>
            <h3 className="text-zinc-800 text-4xl font-light  leading-[44px] tracking[-0.36px]">
              2/3
            </h3>
          </div>
          <div className="py-8 md:px-12">
            <div className="pb-8">
              <h3 className="  text-zinc-800 md:text-4xl  text-center pb-4 md:leading-[44px] tracking-[-0.36px]  text-[21px] font-light   leading-[29px]">
                Calculation settings
              </h3>
            </div>
            <CalculationSetting />
            <button className="px-8 py-[22px] rounded-full border text-center border-orange-700 text-orange-700 border-opacity-20 justify-center items-center gap-3 inline-flex">
              NEXT <Arrows storke="#BF4D20" />
            </button>
          </div>
        </div>
      </div>

      {/* <CalcuationProgress/> */}

      <div className="container mx-auto">
        <div className="md:px-[416px] md:py-[72px] text-center   px-4  pt-[60px] pb-[72px] ">
          <div className="md:pb-14 pb-8 text-center">
            <span className="text-[#A6836C]  text-xs font-normal  uppercase leading-3 tracking-tight ">
              Steps
            </span>
            <h3 className="text-zinc-800 text-4xl font-light  leading-[44px] tracking[-0.36px]">
              3/3
            </h3>
          </div>
          <PerformanceModel />
          <button className="px-8 py-[22px] rounded-full border text-center border-orange-700 text-orange-700 border-opacity-20 justify-center items-center gap-3 inline-flex">
            NEXT <Arrows storke="#BF4D20" />
          </button>
        </div>
      </div>
      <Comparison />

      
        
    </React.Fragment>
  );
};

export default AboutModalOne;
