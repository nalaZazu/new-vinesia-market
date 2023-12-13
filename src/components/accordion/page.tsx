"use client";
import React, { Fragment, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ArrowDown, RoundArrow } from "@/assets/icons/Icons";
import { AccordionAbout, AccordionAboutTwo } from "@/constants/accrodion";

export function AccordionWine() {
  const [isActive, setIsActive] = useState<any>();
  const handleDisclosure = (id: any) => {
    setIsActive(id);
  };
  return (
    <React.Fragment>
      {AccordionAbout?.map((item: any, index: any) => {
        const { id, title, text } = item;
        return (
          <div key={index} className="w-full md:pt-10 pt-8">
            <div className="  w-full  rounded-2xl  md:px-2" key={index}>
              <Disclosure>
                <>
                  <Disclosure.Button
                    className="flex md:gap-0 gap-10 w-full justify-between rounded-lg text-start  md:text-lg    md:leading-relaxed  text-white text-base font-semibold  leading-snug"
                    onClick={() => handleDisclosure(id)}
                  >
                    <span>{title}</span>
                    <RoundArrow />
                  </Disclosure.Button>

                  {isActive == id && (
                    <Disclosure.Panel className="text-red-300 text-base font-normal pt-6  leading-snug tracking-[0.32px]">
                      {text}
                    </Disclosure.Panel>
                  )}
                </>
              </Disclosure>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export function AccordionWineAbout() {
  const [isActive, setIsActive] = useState<any>();
  const handleToggle = (id: any) => {
    setIsActive(id);
  };
  return (
    <React.Fragment>
      {AccordionAboutTwo?.map((item: any, index: any) => {
        const { id, title, text } = item;
        return (
          <div className="w-full x   pl-6 pr-4 py-4 border-t border-orange-700 border-opacity-20 justify-between items-center inline-flex">
            <div className="  w-full  rounded-2xl  md:px-2" key={index}>
              <Disclosure>
                <>
                  <Disclosure.Button
                    className="flex md:gap-0 gap-10 w-full justify-between     tracking[-0.36px] text-zinc-800 text-lg font-semibold text-start  leading-relaxed "
                    onClick={() => handleToggle(id)}
                  >
                    <p className="max-w-[425px]">{title}</p>
                    <div className="md:w-0 md:h-0 w-6 h-6">
                      <ArrowDown />
                    </div>
                  </Disclosure.Button>

                  {isActive == id && (
                    <Disclosure.Panel className="text-neutral-600 text-base font-normal pt-3 leading-snug tracking[-0.32px]  ">
                      {text}
                    </Disclosure.Panel>
                  )}
                </>
              </Disclosure>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}
