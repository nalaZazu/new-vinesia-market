import React from "react";
import Image from "next/image";
import { AboutSection } from "@/constants/aboutSection";
import bubble from "@/assets/icons/bubbble.svg";
import amer from "@/assets/icons/amer.svg";
import enhance from "@/assets/icons/enhance.svg";
import webpack from "@/assets/icons/webpath.svg";
import mediator from "@/assets/icons/mediator.svg";
const AboutOne = () => {
  return (
    <React.Fragment>
      {/* here is next section */}
      <div className="md:px-0 container mx-auto py-14 px-4">
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="col-span-1">
            <p className="md:max-w-[214px] text-zinc-800 text-base font-normal  leading-snug">
              Sourced exclusively from winemakers
            </p>
          </div>
          <div className="col-span-2">
            <h3 className=" text-zinc-800 md:text-4xl md:leading-[44px]  md:py-0 py-6  text-[21px] font-light  leading-[29px]">
              We are the first marketplace that protects your investment in a
              secure and transparent way to offer you complete Peace of Mind.
            </h3>
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
                    <span className="text-zinc-800 text-lg font-semibold pt-6 pb-3 leading-relaxed">
                      {title}
                    </span>
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
      {/* <div className="md:block hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 container">
          <div className="flex flex-wrap justify-between  gap-10 items-center">
            <span className="text-center text-stone-600 text-xs font-normal uppercase leading-3 tracking-tight">
              Featured in
            </span>
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
      </div> */}

      {/* Here is mobile responsive view */}
      {/* <div className="block md:hidden">
        <div className="py-20 px-4">
          <div className="mx-auto max-w-7xl px-6 ">
            <h6 className="text-center text-stone-600 text-xs font-normal uppercase leading-3 tracking-tight pb-8">
              Featured in
            </h6>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-6 gap-y-12  ">
              {/*sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 
              <Image
                className="col-span-2  object-contain lg:col-span-1"
                src={bubble}
                alt="Transistor"
                width={100}
                height={48}
              />
              <Image
                className="col-span-2   object-contain lg:col-span-1"
                src={amer}
                alt="Reform"
                width={100}
                height={48}
              />
              <Image
                className="col-span-2   object-contain lg:col-span-1"
                src={enhance}
                alt="Tuple"
                width={100}
                height={48}
              />
              <Image
                className="col-span-2   object-contain sm:col-start-2 lg:col-span-1"
                src={webpack}
                alt="SavvyCal"
                width={100}
                height={48}
              />
              <Image
                className="col-span-2 col-start-2  object-contain sm:col-start-auto lg:col-span-1"
                src={mediator}
                alt="Statamic"
                width={100}
                height={48}
              />
            </div>
          </div>
        </div>
      </div> */}
    </React.Fragment>
  );
};

export default AboutOne;
