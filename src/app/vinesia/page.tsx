"use client";
import Image from "next/image";
import React from "react";
import { LinereGion } from "@/assets/icons/Icons";
import VinesiaBanner from "@/components/vinesia/VinesiaBanner";
import AboutSlider from "@/components/AboutSection/aboutslider/page";
import Footer from "@/components/footer/page";
import NewslettersTwo from "@/components/newslttersTwo/page";
import WineVideoBanner from "@/components/ProductOverView/WineVideoBanner";
import Wanttoknow from "@/components/aboutpage/Wanttoknow";
import vinesiaccordion from "@/assets/images/vinesiadropdown.png";
import { AccordionAbout } from "@/constants/accrodion";
import { AccordionWineAbout } from "@/components/accordion/page";
import { AccordionSecurity } from "@/constants/accrodion";
const title = "How Vinesia works";
const descripition =
  "Discover the seamless journey of wine investment with Vinesia in our 'How It Works' video.";

export default function Vinesia() {
  return (
    <div className="absolute top-0 -z-10 left-0 right-0">
      <div>
        <div className="relative">
          <VinesiaBanner />
        </div>
      </div>
      <div className="py-40">
        <div className="container mx-auto px-4">
          <div className="max-w-[877px] mx-auto flex-col justify-center items-center gap-12 flex">
            <div className="h-[236px] flex-col justify-start items-center gap-6 flex">
              <h2 className="self-stretch text-center text-zinc-800 text-7xl font-normal leading-[84px]">
                Pursue a profitable portfolio you are passionate about
              </h2>
              <p className="max-w-[699px] text-center text-neutral-600 text-base font-normal leading-snug">
                We have simplified wine investing and brought it into the modern
                era. Our deep knowledge and unique marketplace offer you peace
                of mind as you invest in something you love. 
              </p>
            </div>
            <LinereGion />
            <h3 className="text-center text-zinc-800 text-4xl font-light leading-[44px]">
              How can I invest in wine?
            </h3>
          </div>
        </div>
      </div>

      <WineVideoBanner title={title} descripition={descripition} />
      <div className="py-12 bg-red-900">
        <div className=" container mx-auto px-4">
          <Wanttoknow />
        </div>
      </div>

      <div className="py-40">
        <div className=" container mx-auto px-4">
          <div className="pb-20">
            <h2 className="self-stretch text-center text-zinc-800 text-7xl font-normal leading-[84px]">
              How Vinesia makes wine investing transparent, safe, and easy to
              trade
            </h2>
            <div className="max-w-[768px] mx-auto pt-4">
              <span className="text-neutral-600 text-base font-normal leading-snug">
                Our method of wine investment is layered to create a
              </span>
              <span className="text-orange-700 text-base font-normal leading-snug">
                Peace of Mind
              </span>
              <span className="text-neutral-600 text-base font-normal leading-snug">
                pledge. Every feature of how we do things speaks to our
                dedication to creating a system of truth you can rely on for
                your wine portfolio.
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className=" pe-[139px]">
              <Image src={vinesiaccordion} alt="" className="w-full" />
            </div>
            <div>
              <AccordionWineAbout data={AccordionSecurity} />
            </div>
          </div>
        </div>
      </div>
      {/* The faster way to get to know us */}
      <div className="bg-[#2F222B]">
        <div className="flex justify-end md:py-40 md:px-0 px-4 py-20">
          <div className="max-w-[1314px]">
            <div className="">
              <div>
                <h3 className="text-white text-4xl font-light   leading-[44px] pb-8">
                  The faster way to get to know us
                </h3>
              </div>
            </div>

            {/* here is new slider  section */}
            <div className="hidden md:block">
              <div>
                <AboutSlider />
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
      <NewslettersTwo />
      {/* footer */}
      <Footer />
    </div>
  );
}
