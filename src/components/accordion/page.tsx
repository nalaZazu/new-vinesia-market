"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { RoundArrow } from "@/assets/icons/Icons";
import { AccordionAbout } from "@/constants/accrodion";
export default function AccordionWine() {
  return (
    <React.Fragment>
      {AccordionAbout?.map((item: any, index: any) => {
        const { title, text } = item;
        return (
          <div key={index} className="w-full md:pt-10 pt-8">
            <div className="  w-full  rounded-2xl  md:px-2" key={index}>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex md:gap-0 gap-10 w-full justify-between rounded-lg   md:text-lg    md:leading-relaxed  text-white text-base font-semibold  leading-snug">
                      <span>{title}</span>
                      <RoundArrow />
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-red-300 text-base font-normal pt-6  leading-snug tracking-[0.32px]">
                      {text}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}
