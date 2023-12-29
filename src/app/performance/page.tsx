"use client";
import React, { useState } from "react";
import Image from "next/image";
import AssetsBanner from "@/components/AssetsPerformance/AssetsBanner";
import InvestorsLove from "@/components/AssetsPerformance/InvestorsLove";
import ChartsSection from "@/components/AssetsPerformance/ChartsSection";
import inflationImage from "@/assets/images/inflationimage.png";
import simulatorPreview from "@/assets/images/simulatorPreview.png";
import { Arrows, NextIcon } from "@/assets/icons/Icons";
import TestimonialsSection from "@/components/AssetsPerformance/TestimonialsSection";
import AboutSlider from "@/components/AboutSection/aboutslider/page";
import Footer from "@/components/footer/page";
import { VideoSlider } from "@/constants/videoslider";
import NewslettersTwo from "@/components/newslttersTwo/page";
import { AccordionWineAbout } from "@/components/accordion/page";
import performance_image140 from "@/assets/images/performance_image140.png";
import KnowUsVideos from "@/components/KnowUsVideos/page";
import QASummary from "@/components/qasummary/page";
import ModalContainer from "@/common/ModalContainer";
import { GraphProvider } from "@/context/GraphContextProvider";
import { Flex } from "antd";
import LeftPanel from "@/components/simulator/LeftPanel";
import RightPanel from "@/components/simulator/RightPanel";
import GraphPanel from "@/components/simulator/GraphPanel";
import Link from "next/link";

export default function AssetsPerformance() {
  const [visible, setVisible] = useState(false);
  return (
    <>
    <ModalContainer
        visible={visible}
        setVisible={setVisible}
        modalClass="max-h-[95vh] max-w-[90vw] rounded-md pt-4 pb-4 px-12"
        backgroundClass="bg-zinc-800 bg-opacity-95"
        isCloseBtn={true}
      >
        <div>
          <GraphProvider>
            <Flex gap="small" vertical={false} >
              <LeftPanel />
              <GraphPanel />
              <RightPanel />
            </Flex>
          </GraphProvider>
        </div>
      </ModalContainer>
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
          <div className="grid md:grid-cols-2 max-w-[1140px] pb-40">
            <div>
              <Image src={inflationImage} alt="" />
            </div>
            <div className="md:ps-[139px]">
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
          <div className="grid md:grid-cols-2">
            <div className="md:pe-[139px] flex items-end">
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
              <Image src={performance_image140} alt="returns" />
            </div>
          </div>
        </div>
      </div>

      <div className="md:py-40 py-20 bg-[#F7EFDF]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2">
            <div className="md:pe-[139px]">
              <h2 className=" text-zinc-800 md:text-7xl font-normal  md:leading-[84px] md:tracking-[-1.44px] text-4xl leading-[42px] tracking-[-0.36px]">
                The potential of wine investment in numbers
              </h2>
              <p className="max-w-[329px] text-zinc-800 text-lg font-semibold  md:pt-[72px] pt-6 pb-6 leading-relaxed   tracking-[-0.36px]">
                See what your portfolio could have returned with wine
              </p>

              <button
                onClick={() => setVisible(true)}
                className="px-8 py-4 text-white  bg-orange-700 rounded-[48px] justify-center items-center gap-3 inline-flex"
              >
                CALCULATE{" "}
                <span>
                  <Arrows storke="#FFFFFF" />
                </span>
              </button>
            </div>
            <div className="md:max-w-[608px] mt-10 md:mt-0">
              <div className="bg-white p-4 h-[400px]">
                <h5 className="text-zinc-800 text-lg font-semibold  leading-relaxed pb-3 tacking-[-0.36px]">
                  Performance of investment portfolio with fine wine in
                  comparison to baseline
                </h5>
                <div className="bg-orange-100 h-64">
                  <div className="pt-1">
                    {/* <Appactivity /> */}
                    <Image src={simulatorPreview} alt="image" onClick={() => setVisible(true)} />
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
          <Link href="/invest">
          <div className="text-center text-white text-xs font-normal uppercase leading-[18px] tracking-tight w-44 h-[68px] px-8 py-[22px] rounded-[48px] border border-white border-opacity-20 justify-center items-center gap-3 inline-flex">
            Invest now
            <NextIcon fill={"#fff"} />
          </div>
          </Link>
        </div>
      </div>
      <KnowUsVideos title="Learn more about wine & art investment" />
      {/* desktop */}
      <div>
        <NewslettersTwo />
      </div>
      <div className="bg-[#F7EFDF]">
        <QASummary title="You might have questions, we definitely have answers." />
      </div>

      <Footer />
    </div>
    </>
  );
}
