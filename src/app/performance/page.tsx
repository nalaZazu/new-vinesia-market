"use client";
import React, { useState } from "react";
import Image from "next/image";
import AssetsBanner from "@/components/AssetsPerformance/AssetsBanner";
import InvestorsLove from "@/components/AssetsPerformance/InvestorsLove";
import ChartsSection from "@/components/AssetsPerformance/ChartsSection";
import inflationImage from "@/assets/images/inflationimage.png";
import Appactivity from "@/components/charts/page";
import { Arrows, NextIcon } from "@/assets/icons/Icons";
import TestimonialsSection from "@/components/AssetsPerformance/TestimonialsSection";
import AboutSlider from "@/components/AboutSection/aboutslider/page";
import Footer from "@/components/footer/page";
import { VideoSlider } from "@/constants/videoslider";
import NewslettersTwo from "@/components/newslttersTwo/page";
import { AccordionWineAbout } from "@/components/accordion/page";

export default function AssetsPerformance() {
  return (
    <div className="absolute top-0 -z-10 left-0 right-0">
      <div>
        <div className="relative">
          <AssetsBanner />
        </div>
      </div>

      <div className="py-40">
        <div className="container mx-auto px-4">
          <InvestorsLove />
        </div>
      </div>

      <div className="py-28 bg-[#7D302E]">
        <div className="container mx-auto px-4">
          <ChartsSection />
        </div>
      </div>

      <div className="py-40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 max-w-[1140px] pb-40">
            <div>
              <Image src={inflationImage} alt="" />
            </div>
            <div className="ps-[139px]">
              <div className="pb-20">
                <h3 className="text-zinc-800 text-4xl font-light leading-[44px]">
                  Inflation resilience
                </h3>
                <div className="py-8">
                  <p className=" text-neutral-600 text-base font-normal leading-snug">
                    Historically, when inflation increases the prices of goods
                    and services, the value of wine tends to rise in tandem,
                    thus fighting the effects of inflation. 
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-zinc-800 text-4xl font-light leading-[44px]">
                  Sustained global demand, scarce supply
                </h3>
                <div className="py-8">
                  <p className=" text-neutral-600 text-base font-normal leading-snug">
                    Historically, when inflation increases the prices of goods
                    and services, the value of wine tends to rise in tandem,
                    thus fighting the effects of inflation. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="pe-[139px] flex items-end">
              <div>
                <h3 className="text-zinc-800 text-4xl font-light leading-[44px]">
                  Low correlation with traditional markets
                </h3>
                <div className="py-8">
                  <p className=" text-neutral-600 text-base font-normal leading-snug">
                    While stock markets can be highly unpredictable and
                    unstable, fine wine as an asset maintains steady returns
                    during market downturns and through recessions. 
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#F9F5EB] p-8">
              <Appactivity />
            </div>
          </div>
        </div>
      </div>

      <div className="py-40 bg-[#F7EFDF]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="pe-[139px]">
              <h2 className=" text-zinc-800 md:text-7xl font-normal  md:leading-[84px] md:tracking-[-1.44px] text-4xl leading-[42px] tracking-[-0.36px]">
                The potential of wine investment in numbers
              </h2>
              <p className="max-w-[329px] text-zinc-800 text-lg font-semibold  md:pt-[72px] pt-6 pb-6 leading-relaxed   tracking-[-0.36px]">
                See what your portfolio could have returned with wine
              </p>

              <button
                // onClick={() => setVisible(true)}
                className="px-8 py-4 text-white  bg-orange-700 rounded-[48px] justify-center items-center gap-3 inline-flex"
              >
                CALCULATE{" "}
                <span>
                  <Arrows storke="#FFFFFF" />
                </span>
              </button>
            </div>
            <div className="md:max-w-[608px] ">
              <div className="bg-white p-4 h-[400px]">
                <h5 className="text-zinc-800 text-lg font-semibold  leading-relaxed pb-3 tacking-[-0.36px]">
                  Performance of investment portfolio with fine wine in
                  comparison to baseline
                </h5>
                <div className="bg-orange-100 h-64">
                  <div className="pt-1">
                    <Appactivity />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-40">
        <div className="container mx-auto px-4">
          <TestimonialsSection />
        </div>
      </div>

      <div className="py-28 bg-[#7D302E]">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="text-center pb-10">
            <span className="text-orange-100 text-4xl font-light leading-[44px]">
              Start your wine investing journey with{" "}
            </span>
            <p className="text-red-900 text-4xl font-light leading-[44px]">
              Vinesia
            </p>
            <span className="text-center text-stone-400 text-base font-normal leading-snug">
              Let us help you add this unique asset to your portfolio. 
            </span>
          </div>
          <div className="text-center text-white text-xs font-normal uppercase leading-[18px] tracking-tight w-44 h-[68px] px-8 py-[22px] rounded-[48px] border border-white border-opacity-20 justify-center items-center gap-3 inline-flex">
            Invest now
            <NextIcon fill={"#fff"} />
          </div>
        </div>
      </div>

      {/* The faster way to get to know us */}
      <div className="bg-[#2F222B]">
        <div className="flex justify-end md:py-40 md:px-0  px-4 py-20">
          <div className=" max-w-[1314px]">
            <div>
              <div>
                <h3 className="text-white text-4xl font-light   leading-[44px] pb-8">
                  Learn more about wine & art investment
                </h3>
              </div>
            </div>

            {/* here is new slider  section */}
            <div className="hidden md:block">
              <div>
                <AboutSlider data={VideoSlider} />
              </div>
            </div>
            <div className="md:hidden block  ">
              <div className="grid grid-cols-1 ">
                <AboutSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* desktop */}
      <div>
        <NewslettersTwo />
      </div>
      <div className="py-40 bg-[#F7EFDF]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8">
            <div className="max-w-[498px]">
              <h3 className=" text-zinc-800 text-4xl font-light leading-[44px]">
                You might have questions, we definitely have answers.
              </h3>
              <div className="flex gap-3 pt-9">
                <button className="border-b-2 border-orange-700 border-opacity-20 text-center text-orange-700 text-xs font-normal font-['Albert Sans'] uppercase leading-[18px] tracking-tight">
                  SEE ALL QUESTIONS & ANSWERS
                </button>
                <NextIcon />
              </div>
            </div>

            <div>
              <AccordionWineAbout />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
