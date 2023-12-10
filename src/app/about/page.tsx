import React from "react";
import Image from "next/image";
import bubble from "@/assets/icons/bubbble.svg";
import amer from "@/assets/icons/amer.svg";
import enhance from "@/assets/icons/enhance.svg";
import webpack from "@/assets/icons/webpath.svg";
import mediator from "@/assets/icons/mediator.svg";
import investment from "@/assets/images/investment.png";
import videoImage from "@/assets/images/video (1080p) 2.png";
import { Arrows } from "@/assets/icons/Icons";
import { AboutSection } from "@/constants/aboutSection";

const About = () => {
  return (
    <React.Fragment>
      {/* Main heading section */}
      {/* <div className="mx-4 md:mx-96 text-center">
        <span className=" text-zinc-800 text-4xl font-light  leading-[44px]">
          The future of wine investing
        </span>
        <h1 className=" text-zinc-800 text-[144px] font-normal ">
          secure, transparent, easily tradable
        </h1>
      </div> */}
      {/* here is video section */}
      <div>
        <Image src={videoImage} alt="video" />
      </div>
      {/* here is next section */}
      <div className="md:py-40 md:px-24  py-12 px-4">
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="col-span-1">
            <p className="md:max-w-[214px] text-zinc-800 text-base font-normal  leading-snug">
              Sourced exclusively from winemakers
            </p>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-2">
            <h4 className=" text-zinc-800 md:text-4xl md:leading-[44px]  md:py-0 py-6  text-[21px] font-light  leading-[29px]">
              We are the first marketplace that protects your investment in a
              secure and transparent way to offer you complete Peace of Mind.
            </h4>
            <p className="md:pt-8 pt-0 text-zinc-800 text-base font-normal leading-snug">
              As stewards of your wine, sourced exclusively from winemakers,
              Vinesia is the best place to appreciate it while guarding its
              future emotions.
            </p>

            {/* here is 4th div defined  */}
            <div className="grid md:grid-cols-2  grid-cols-1 md:gap-8 gap-6 pt-[60px] ">
              {AboutSection?.map((item: any, index: any) => {
                const { title, text, icon } = item;
                return (
                  <div
                    className="p-8 bg-orange-50 flex-col justify-start items-start  inline-flex"
                    key={index}
                  >
                    <span>
                      <Image src={icon} alt="lock" width={20} height={20} />
                    </span>
                    <h6 className="text-zinc-800 text-lg font-semibold pt-6 pb-3 leading-relaxed">
                      {title}
                    </h6>
                    <p className="text-neutral-600 text-base font-normal  leading-snug">
                      {text}
                    </p>
                  </div>
                );
              })}{" "}
            </div>
          </div>
        </div>
      </div>

      {/* here is logo img */}

      <div className=" ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* <ul className="flex justify-evenly">
            <li>
              <h6 className="text-center text-stone-600 text-xs font-normal uppercase leading-3 tracking-tight">
                Featured in
              </h6>
            </li>
            <li>
              <Image
                className="col-span-2  max-w-[74.24px] max-h-[19.20px] object-contain lg:col-span-1"
                src={bubble}
                alt="Transistor"
              />
            </li>
            <li>
              {" "}
              <Image
                className="col-span-2  max-w-[74.24px] max-h-[19.20px] object-contain lg:col-span-1"
                src={bubble}
                alt="Transistor"
              />
            </li>
            <li>
              {" "}
              <Image
                className="col-span-2  max-w-[74.24px] max-h-[19.20px] object-contain lg:col-span-1"
                src={bubble}
                alt="Transistor"
              />
            </li>
            <li>
              {" "}
              <Image
                className="col-span-2  max-w-[74.24px] max-h-[19.20px] object-contain lg:col-span-1"
                src={bubble}
                alt="Transistor"
              />
            </li>
            <li>
              {" "}
              <Image
                className="col-span-2  max-w-[74.24px] max-h-[19.20px] object-contain lg:col-span-1"
                src={bubble}
                alt="Transistor"
              />
            </li>
          </ul> */}

          <div className="grid grid-cols-6 gap- items-center">
            {/* mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 */}
            <h6 className="text-center text-stone-600 text-xs font-normal uppercase leading-3 tracking-tight">
              Featured in
            </h6>
            <Image
              className="col-span-2  max-w-[74.24px] max-h-[19.20px] object-contain lg:col-span-1"
              src={bubble}
              alt="Transistor"
            />
            <Image
              className="col-span-2  max-w-[74.24px] max-h-[19.20px] object-contain lg:col-span-1"
              src={amer}
              alt="Transistor"
            />
            <Image
              className="col-span-2  max-w-[74.24px] max-h-[19.20px] object-contain lg:col-span-1"
              src={enhance}
              alt="Transistor"
            />
            <Image
              className="col-span-2  max-w-[74.24px] max-h-[19.20px] object-contain lg:col-span-1"
              src={webpack}
              alt="Transistor"
            />
            <Image
              className="col-span-2  max-w-[74.24px] max-h-[19.20px] object-contain lg:col-span-1"
              src={mediator}
              alt="Transistor"
            />
          </div>
        </div>
      </div>

      {/* here is a investment section */}

      <div className="py-20  px-4 md:py-40 md:px-24">
        <div className="text-center">
          <h2 className="text-zinc-800 md:text-7xl font-normal md:leading-[84px]   text-center text-4xl   leading-[42px]">
            Wine investments without the worries
          </h2>
          <p className=" py-6 text-neutral-600 text-base font-normal leading-snug">
            Learn how our process brings our investor “Peace of Mind” pledge to
            life.
          </p>
          <button className="px-8 py-[22px] bg-orange-700 rounded-[48px] justify-center items-center gap-3 inline-flex text-center text-white text-xs font-normal  uppercase leading-3 tracking-tight">
            START InVESTING NOW
            <span>
              <Arrows storke="#FFFFFF" />
            </span>
          </button>
        </div>
        {/* here is image defined */}
        <div className="flex justify-center md:pt-[92px] pt-12">
          <Image src={investment} alt="image" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
