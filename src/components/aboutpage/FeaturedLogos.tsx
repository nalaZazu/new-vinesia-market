import React from "react";
import Image from "next/image";
import bubble from "@/assets/icons/bubbble.svg";
import amer from "@/assets/icons/amer.svg";
import enhance from "@/assets/icons/enhance.svg";
import webpack from "@/assets/icons/webpath.svg";
import mediator from "@/assets/icons/mediator.svg";

export default function FeaturedLogos() {
  return (
    <div>
      {" "}
      {/* here is logo img */}
      <div className="md:block hidden">
        <div className="mx-auto px-4 py-20 max-w-[1040px]">
          <div className="flex flex-wrap justify-between  gap-10 items-center">
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
      {/* Here is mobile responsive view */}
      <div className="block md:hidden">
        <div className="py-20 px-4">
          <div className="mx-auto max-w-7xl px-6 ">
            <h6 className="text-center text-stone-600 text-xs font-normal uppercase leading-3 tracking-tight pb-8">
              Featured in
            </h6>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-6 gap-y-12  ">
              {/*sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 */}
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
      </div>
    </div>
  );
}
