import React from "react";
import Image from "next/image";
import AboutBanner from "@/components/aboutpage/AboutBanner";
import FeaturedLogos from "@/components/aboutpage/FeaturedLogos";
import OurMission from "@/components/aboutpage/OurMission";
import OurVision from "@/components/aboutpage/OurVision";
import OurValues from "@/components/aboutpage/OurValues";
import Wanttoknow from "@/components/aboutpage/Wanttoknow";
import OurStory from "@/components/aboutpage/OurStory";
import VideoStoryBanner from "@/components/aboutpage/VideoStoryBanner";
import OutTeam from "@/components/aboutpage/OutTeam";
import OurExpert from "@/components/aboutpage/OurExpert";
import AboutSlider from "@/components/AboutSection/aboutslider/page";
import VectorTwo from "@/assets/icons/VectorTwo.svg";
import VectorOne from "@/assets/icons/VectorOne.svg";
import Footer from "@/components/footer/page";

export default function AboutUs() {
  return (
    <div className="absolute top-0 -z-10 left-0 right-0">
      <div>
        <div className="relative">
          <AboutBanner />
        </div>
      </div>
      <FeaturedLogos />
      <div className="py-20">
        <div className="container mx-auto px-4">
          <OurMission />
        </div>
      </div>
      <div className="pt-20 pb-40">
        <div className="container mx-auto px-4">
          <OurVision />
        </div>
      </div>
      <div className="pt-40 pb-24 bg-zinc-800">
        <div className="container mx-auto px-4">
          <OurValues />
        </div>
      </div>
      <div className="py-12 bg-red-900">
        <div className=" container mx-auto px-4">
          <Wanttoknow />
        </div>
      </div>
      <div className="container mx-auto px-4 py-40">
        <OurStory />
      </div>
      <VideoStoryBanner />
      {/* our team */}
      <div className="bg-[#F7EFDF]">
        <div className=" container mx-auto px-4 pt-40 pb-24">
          <div className="pb-12">
            <h2 className="text-zinc-800 text-7xl font-normal font-['Canela'] leading-[84px]">
              Our team
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((items, i) => {
              return (
                <div key={i} className="pb-16">
                  <OutTeam />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* our experts */}
      <div className="py-40 px-4">
        <div className=" container mx-auto">
          <div className="flex-col justify-start items-start gap-1 flex">
            <p className="text-stone-500 text-xs font-normal font-['Albert Sans'] uppercase leading-[18px] tracking-tight">
              Our
            </p>
            <h2 className="text-zinc-800 text-7xl font-normal font-['Canela'] leading-[84px]">
              Expert advisors
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-20 pt-6 pb-16">
            <p className="grow shrink basis-0 text-zinc-800 text-base font-normal font-['Albert Sans'] leading-snug">
              Deep knowledge, experience and a healthy dose of challenge from
              our expert advisors to keep us on our toes.Our success stems from
              the ability to source exceptional wines for our investors, to act
              as respectful stewards towards the magical products.
            </p>
            <p className="grow shrink basis-0 text-zinc-800 text-base font-normal font-['Albert Sans'] leading-snug">
              Deep knowledge, experience and a healthy dose of challenge from
              our expert advisors to keep us on our toes.Our success stems from
              the ability to source exceptional wines for our investors, to act
              as respectful stewards towards the magical products.
            </p>
          </div>
          <div className="grid grid-cols-3">
            {[1, 2, 3].map((items, i) => {
              return (
                <div key={i}>
                  <OurExpert />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* the faster way */}
      {/* The faster way to get to know us */}
      <div className="bg-[#2F222B]">
        <div className="relative">
          <div className="absolute md:block hidden">
            <Image src={VectorOne} alt="vector" />
          </div>
        </div>
        <div className="flex justify-end md:py-40 md:px-0  px-4 py-20">
          <div className=" max-w-[1314px]">
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
            <div className="relative md:block hidden ">
              <div className="absolute bottom-[-151px] right-0">
                <Image src={VectorTwo} alt="vector" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}
