"use client";
import React, { useState } from "react";
import wineBottle from "@/assets/images/bolltewine.png";
import wineBottles from "@/assets/images/wineImageBottle.png";
import investment from "@/assets/images/investment.png";
import lineregion from "@/assets/icons/lineregion.svg";
import { AccordionWine } from "@/components/accordion/page";
import { Arrows, LineDot, MarksAnim } from "@/assets/icons/Icons";
import Image from "next/image";
import ModalContainer from "@/common/ModalContainer";
import AboutDropDown from "@/components/Modal/AboutModalDropdown/page";
import CalculationSetting from "@/components/Modal/Calculation/page";
import PerformanceModel from "@/components/Modal/Performance/page";
import Appactivity from "@/components/charts/page";
import Link from "next/link";
import { GraphProvider } from "@/context/GraphContextProvider";
import { Flex } from 'antd';
import LeftPanel from "@/components/simulator/LeftPanel";
import GraphPanel from "@/components/simulator/GraphPanel";
import RightPanel from "@/components/simulator/RightPanel";
const AboutTwo = () => {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(1);
  return (
    <React.Fragment>
      {/* here is a investment section */}
      <ModalContainer
        visible={visible}
        setVisible={setVisible}
        isCloseBtn={false}
      >
        <div className="md:pt-[18px] px-4 pt-[10px] pb-[18px] font-['Canela']">
        <GraphProvider>
          <Flex gap="small" vertical={false} >
            <LeftPanel />
            <GraphPanel />
            <RightPanel />
          </Flex>
        </GraphProvider>
        </div>
      </ModalContainer>

      {/* here is end of modal */}
      <div className="py-16 px-4 md:py-30 md:px-24">
        <div className="text-center">
          <h2 className="max-w-[769px] text-zinc-800 md:text-7xl font-normal md:leading-[84px] mx-auto   text-center text-4xl   leading-[42px]">
            Wine investments without the worries
          </h2>
          <p className=" py-8 text-neutral-600 text-base font-normal leading-snug">
            Learn how our process brings our investor “Peace of Mind” pledge to
            life.
          </p>
          <Link href="/invest">
            <button className="px-8 py-4 bg-orange-700 rounded-[48px] justify-center items-center gap-3 inline-flex text-center text-white text-xs font-normal  uppercase leading-3 tracking-tight">
              START INVESTING NOW
              <span>
                <Arrows storke="#FFFFFF" />
              </span>
            </button>
          </Link>
        </div>
        {/* here is image defined */}
        <div className="flex justify-center md:pt-[92px] pt-12">
          {/* <Image src={investment} alt="image" /> */}
          <video className="w-1/2" autoPlay loop muted>
                <source src='assets/video/vinesia 211223.mp4' />
                Your browser does not support the video tag.
              </video>
        </div>
      </div>

      {/* here is invest in wine section */}

      <div className="flex flex-wrap  bg-[#7D302E]  md:h-[800px] ">
        <div className=" md:basis-5/12 md:block hidden h-full w-full">
          <Image src={wineBottle} className="w-full h-full" alt="winebottle" />
        </div>
        {/* for Mobile responsive  */}
        <div className="w-full block md:hidden">
          <Image src={wineBottles} className="w-full h-full" alt="winebottle" />
        </div>

        <div className="  md:basis-7/12 h-[800px] md:pt-[110px] py-20">
          <div className="md:ps-[139px] w-full h-full px-4">
            <div className=" flex flex-col justify-between max-w-[501px] w-full h-full">
              <div>
                <div className=" ">
                  <h3 className="text-white md:text-4xl font-light  md:leading-[44px]    text-[21px]  leading-[29px]">
                    Why investing in wine?
                  </h3>

                  <div className="underline decoration-wavy md:pt-10 pt-8">
                    <Image src={lineregion} alt="image" />
                  </div>
                </div>
                <AccordionWine />
              </div>
              {/* here is button  */}
              <Link href="/invest">
                <div className=" pb-[70px]">
                  <button className="w-full  px-8 py-[22px] rounded-full border border-white border-opacity-20 justify-center items-center gap-3 inline-flex text-center text-white text-xs font-normal  uppercase leading-3 tracking-tight">
                    START INVESTING NOW{" "}
                    <span>
                      <Arrows storke="#FFFFFF" />
                    </span>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*The potential of wine investment in numbers (next section) */}
      <div className="md:py-40 md:px-0   py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="max-w-[512px]">
              <h2 className=" text-zinc-800 md:text-7xl font-normal  md:leading-[84px] md:tracking-[-1.44px]      text-4xl  leading-[42px] tracking-[-0.36px]">
                The potential of wine investment in numbers
              </h2>
              <p className="max-w-[329px] text-zinc-800 text-lg font-semibold  md:pt-[72px] pt-6 pb-6 leading-relaxed   tracking-[-0.36px]">
                See what your investment could have returned with wine
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
            <div className="md:max-w-[608px] ">
              <div className="tracking-[-0.32px] md:pb-8 py-10 ">
                <p className="pb-8">
                  Fine wine is a uniquely resilient asset class that will
                  diversify an investment portfolio and hedge risk. Over time,
                  it offers on average a solid 9% Compound Annual Growth Rate
                  (CAGR) with low volatility.{" "}
                </p>
                <p>
                  This tool allows you to do your own backtesting and see what
                  introducing fine wines into your own portfolio could have
                  yielded for you over time.
                </p>
              </div>

              <div className="bg-white p-4 h-[400px]">
                <h5 className="text-zinc-800 text-lg font-semibold  leading-relaxed pb-3 tacking-[-0.36px]">
                  Performance of investment portfolio with fine wine in
                  comparison to baseline
                </h5>
                <div className="bg-orange-100 h-64">
                  <div className="pt-1">
                    {/* <ul className="flex justify-end gap-4">
                      <li className="flex items-center">
                        <LineDot storke="#28475C" />
                        Baseline
                      </li>
                      <li className="flex items-center">
                       
                        <LineDot storke="#CB220D" /> Portofolio performace
                      </li>
                    </ul> */}
                    <Appactivity />
                  </div>
                </div>
                {/* HERE IS NUMBER DEFINED  */}
                {/* <ul className="flex justify-between text-zinc-800 text-base font-normal   leading-snug">
                  <li>2005</li>
                  <li>2010</li>
                  <li>2015</li>
                  <li>2020</li>
                  <li>2023</li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutTwo;
