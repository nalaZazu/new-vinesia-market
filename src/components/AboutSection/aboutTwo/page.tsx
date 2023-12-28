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
        <div>
          <div className="text-center md:pt-[72px]    px-4  pt-[60px] pb-[72px]">
            {step === 1 && (
              <div className="md:max-w-[607px]   mx-auto text-center ">
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
                    Choose assets and determine what percentage of your
                    portfolio they represent
                  </p>
                </div>
                <div className="py-8 md:px-12 ">
                  <AboutDropDown />
                </div>
              </div>
            )}
            {step === 2 && (
              <div className=" md:max-w-[607px]   mx-auto ">
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
                </div>
              </div>
            )}
            {step === 3 && (
              <div className=" ">
                <div className=" text-center">
                  <span className="text-[#A6836C]  text-xs font-normal  uppercase leading-3 tracking-tight ">
                    Steps
                  </span>
                  <h3 className="text-zinc-800 text-4xl font-light  leading-[44px] tracking[-0.36px]">
                    3/3
                  </h3>
                </div>{" "}
                <div className="md:pb-[163px] pb-[150px]">
                  <div className="pt-[146px] flex justify-center animate-rotate ">
                    <MarksAnim fill="#2F222B" />
                  </div>
                  <h4 className=" md:pt-6  text-center text-zinc-800 text-[21px] font-light  leading-[29px] tracking-wide">
                    Calculation in progress
                  </h4>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="md:max-w-[607px]  mx-auto ">
                <div className="md:pb-14 pb-8 text-center">
                  <span className="text-[#A6836C]  text-xs font-normal  uppercase leading-3 tracking-tight ">
                    Steps
                  </span>
                  <h3 className="text-zinc-800 text-4xl font-light  leading-[44px] tracking[-0.36px]">
                    3/3
                  </h3>
                </div>
                <PerformanceModel />
              </div>
            )}
            {step === 5 && (
              <div className="container mx-auto">
                <div className="  md:pb-[117px]  md:py-0  py-[60px] px-4 text-center">
                  <div className="md:pb-14 pb-8 text-center">
                    <span className="text-[#A6836C]  text-xs font-normal  uppercase leading-3 tracking-tight ">
                      Steps
                    </span>
                    <h3 className="text-zinc-800 text-4xl font-light  leading-[44px] tracking[-0.36px]">
                      3/3
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
                </div>
              </div>
            )}

            {step == 1 || step === 2 || step === 3 || step === 4 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="px-8 py-[22px] rounded-full border text-center border-orange-700 text-orange-700 border-opacity-20 justify-center items-center gap-3 inline-flex"
              >
                NEXT <Arrows storke="#BF4D20" />
              </button>
            ) : (
              <button className="px-8 py-[22px] rounded-full border text-center border-orange-700 text-orange-700 border-opacity-20 justify-center items-center gap-3 inline-flex">
                START AGAN
                <Arrows storke="#BF4D20" />
              </button>
            )}
          </div>
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
          <video className="lg:w-1/2 w-full" autoPlay loop muted>
            
                <source src='assets/video/vinesia 211223_360.mp4' media="all and (max-width: 1200px)" />
                <source src='assets/video/vinesia 211223_960.mp4' />
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
                    Why invest in fine wine?
                  </h3>

                  <div className="underline decoration-wavy md:pt-10 pt-8">
                    <Image src={lineregion} alt="image" />
                  </div>
                </div>
                <AccordionWine containerClass=" md:py-5 py-4" />
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
