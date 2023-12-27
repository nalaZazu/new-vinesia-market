import React from "react";
import { AccordionWineAbout } from "@/components/accordion/page";
import { CardAbout } from "@/constants/cardregion";
import { Arrows } from "@/assets/icons/Icons";
import Image from "next/image";
import AboutSlider from "../aboutslider/page";
import VectorOne from "@/assets/icons/VectorOne.svg";
import VectorTwo from "@/assets/icons/VectorTwo.svg";
import Link from "next/link";
const AboutThree = () => {
  return (
    <React.Fragment>
      {/* Start your investment journey today  */}
      <div className="md:py-25 md:px-0 px-4 py-20 bg-[#F7EFDF]">
        <div className="container mx-auto">
          <div className="max-w-[820px] mx-auto">
            <h2 className="md:tracking-[-1.44px] md:text-center text-zinc-800 md:text-7xl font-normal   md:leading-[84px]    text-4xl leading-[44px] tracking-[-0.36px]">
              Start your investment journey today
            </h2>
            <p className="mx-auto max-w-[634px] md:text-center text-neutral-600 text-base font-normal  leading-snug md:tracking-[-0.32px] py-6   tracking-[-0.32px]   ">
              {/* -0.32px */}
              We offer wine investment options suitable for every portfolio. We
              source exceptional wines directly from top wineries, and with
              diligent real-time monitoring in our Luxembourg warehouse, the
              value of these assets are poised to appreciate.
            </p>
            <Link href="/invest">
              <button className="px-8 py-4 bg-orange-700 rounded-full justify-center items-center mx-auto gap-3 flex  text-center text-white text-xs font-normal  uppercase leading-3 tracking-tight">
                EXPLORE YOUR OPTIONS <Arrows storke="#FFFFFF" />
              </button>
            </Link>
          </div>
          {/* here is card defined  */}
          <div className="max-w-[928px]  container pt-14 mx-auto flex  md:justify-center md:gap-8 gap-5  overflow-x-auto  md:grid md:grid-cols-3 grid-cols-1">
            {CardAbout?.map((item: any, index: any) => {
              const { id, text, image } = item;
              return (
                <div
                  className="md:min-w-full  min-w-[80%] p-4 bg-white rounded overflow-hidden"
                  key={index}
                >
                  <div className=" bg-white">
                    <div className=" " key="index">
                      <Image src={image} alt="image" className="" />
                      <p className="text-zinc-800 text-lg font-semibold tracking-[-0.36px]  leading-relaxed  ">
                        {text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* The faster way to get to know us */}
      <div className="bg-[#2F222B] h-[780px]">
        <div className="relative">
          <div className="absolute md:block hidden">
            <Image src={VectorOne} alt="vector" />
          </div>
        </div>
        <div className="flex justify-end md:py-40 md:px-0  px-4 py-25">
          <div className=" max-w-[1314px]">
            <div className="">
              <div>
                <h3 className="text-white text-4xl font-light   leading-[44px] pb-8">
                  The faster way to get to know us
                </h3>
              </div>
            </div>

            {/* here is new slider  section */}
            <div className="">
              <div className="grid grid-cols-1 ">
                <AboutSlider />
              </div>
            </div>
            {/* <div className="md:hidden block  ">
              <div className="grid grid-cols-1 ">
                <AboutSlider />
              </div>
            </div> */}
            <div className="relative md:block hidden ">
              <div className="absolute bottom-[-152px] right-0">
                <Image src={VectorTwo} alt="vector" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:py-40 md:px-0  py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-5 grid-cols-1 ">
            <div className="max-w-[698px] col-span-3">
              <h2 className="text-zinc-800 md:text-7xl font-normal  md:leading-[84px] md:tracking-[-1.44px]  text-4xl  leading-[42px] md:tracking[-0.36px]">
                Have some questions on how it works?
              </h2>
              <div className="flex items-center pt-9 md:pb-0 pb-12 gap-3">
                <button className="text-center  text-orange-700 text-xs font-normal justify-start items-center gap-3 inline-flex uppercase leading-3 tracking-tight">
                  SEE ALL QUESTIONS & ANSWERS
                </button>
                <span>
                  <Arrows storke="#BF4D20" />
                </span>
              </div>
            </div>
            {/* here is new sextion */}
            <div className="max-w-[501px] col-span-2">
              <AccordionWineAbout />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutThree;
