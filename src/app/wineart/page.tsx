import React from "react";
import Wanttoknow from "@/components/aboutpage/Wanttoknow";
import Relationship from "@/components/wineArtPage/Relationship";
import WineryBanner from "@/components/wineArtPage/WineryBanner";
import Artists from "@/components/wineArtPage/Artists";
import BlogsCollection from "@/components/wineArtPage/BlogsCollection";
import AboutSlider from "@/components/AboutSection/aboutslider/page";
import VectorTwo from "@/assets/icons/VectorTwo.svg";
import VectorOne from "@/assets/icons/VectorOne.svg";
import Image from "next/image";
import { VideoSlider } from "@/constants/videoslider";
import NewslettersTwo from "@/components/newslttersTwo/page";
import Footer from "@/components/footer/page";
import { NextIcon } from "@/assets/icons/Icons";
import { AccordionWineAbout } from "@/components/accordion/page";
import Newsletter from "@/components/newsletter/page";
import NewsletterMobile from "@/components/newsletter/MobileView";
import QASummary from "@/components/qasummary/page";
import { AccordionFAQ } from "@/constants/accrodion";

export default function wineryArt() {
  return (
    <div className="absolute top-0 -z-10 left-0 right-0">
      <div>
        <div className="relative">
          <WineryBanner />
        </div>
      </div>

      <div className="py-40">
        <div className="container mx-auto px-4">
          <Relationship />
        </div>
      </div>

      <div className="py-12 bg-red-900">
        <div className=" container mx-auto px-4">
          <Wanttoknow />
        </div>
      </div>

      <div className="pt-32 pb-40">
        <div className="container mx-auto px-4">
          <h2 className="text-zinc-800 md:text-7xl text-6xl font-normal md:leading-[84px] leading-[68px] pb-12">
            Artists we have partnered with 
          </h2>
          <Artists />
        </div>
      </div>

      {/* <div className="pb-40">
        <div className="container mx-auto px-4">
          <h2 className="max-w-[960px] mx-auto text-center text-zinc-800 md:text-7xl text-5xl font-normal md:leading-[84px] leading-[58px] tracking-[-1.44] pb-12">
            Selected wineries represented in our Collections 
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            {[1, 2, 3].map((items, i) => {
              return (
                <div key={i}>
                  <BlogsCollection />
                </div>
              );
            })}
          </div>
        </div>
      </div> */}

      {/* <div className="py-52 bg-[#28475C]">
        <div className="container mx-auto px-4">
          <h4 className="text-white text-center text-[21px] font-light leading-[29px] tracking-wide">
            Commercial space
          </h4>
        </div>
      </div> */}

      {/* The faster way to get to know us */}
      <div className="bg-[#2F222B]">
        <div className="flex text-center justify-center md:py-40 md:px-0  px-4 py-20">
            <div>
              <div>
                <h3 className="text-white text-4xl font-light   leading-[44px] pb-8">
                  Learn more about wine & art investment
                </h3>
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

      <NewslettersTwo />
      <div className="bg-[#F7EFDF]">
        <QASummary title="You might have questions, we definitely have answers." />
      </div>

      {/*  */}
      {/* desktop */}
      <div className="md:block hidden">
        <Newsletter />
      </div>
      {/* Mobile */}
      <div className="block md:hidden">
        <NewsletterMobile />
      </div>
      <Footer />
    </div>
  );
}
