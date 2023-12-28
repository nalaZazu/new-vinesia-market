"use client";
import React, { Fragment, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ArrowDown, RoundArrow } from "@/assets/icons/Icons";
import { AccordionAbout, AccordionAboutTwo } from "@/constants/accrodion";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation";
export function AccordionWine({
  data = AccordionAbout,
  titleClass = "text-white",
  borderClass = "border-none",
  descClass = "",
  containerClass = "",
}: {
  data?: any;
  titleClass?: any;
  borderClass?: any;
  descClass?: any;
  containerClass?: any;
}) {
  const [isActive, setIsActive] = useState<any>();
  const handleDisclosure = (id: any) => {
    if (isActive === id) {
      setIsActive(undefined);
    } else {
      setIsActive(id);
    }
  };
  const pathname = usePathname();
  return (
    <div>
      {data?.map((item: any, index: any) => {
        const { id, title, text } = item;
        return (
          <div key={index} className={`w-full `}>
            <div className={`  w-full  rounded-2xl  md:px-2 ${containerClass}`}>
              <div>
                <>
                  <div
                    key={index}
                    className={`flex cursor-pointer md:gap-0 gap-10 w-full justify-between rounded-lg text-start md:text-lg md:leading-relaxed text-base font-semibold  leading-snug ${titleClass}`}
                    onClick={() => handleDisclosure(index)}
                  >
                    <span>{title}</span>
                    <span
                      className={` h-[25px] w-[25px] ${
                        isActive === index
                          ? " transition transform duration-500 rotate-0"
                          : "rotate-90 transition transform duration-500"
                      }`}
                    >
                      <RoundArrow />
                    </span>
                  </div>
                  {isActive === index && (
                    <div
                      key={index}
                      className={`text-red-300 text-base font-normal pt-6  leading-snug tracking-[0.32px] whitespace-pre-wrap ease-out transform transition-transform duration-1000 ${descClass}`}
                    >
                      {text}
                    </div>
                  )}
                </>
              </div>
            </div>
            <div className={`${borderClass}`}></div>
          </div>
        );
      })}
    </div>
  );
}

export function AccordionWineAbout({ data = AccordionAbout }: { data?: any }) {
  const [isActive, setIsActive] = useState<any>();
  const handleToggle = (id: any) => {
    if (isActive === id) {
      setIsActive(undefined);
    } else {
      setIsActive(id);
    }
  };
  return (
    <React.Fragment>
      {data?.map((item: any, index: any) => {
        const { id, title, text } = item;
        return (
          <div
            key={index}
            className="w-full pl-6 pr-4 py-4 border-t border-orange-700 border-opacity-20 justify-between items-center inline-flex"
          >
            <div className="w-full rounded-2xl  md:px-2" key={index}>
              <div>
                <>
                  <div
                    className="cursor-pointer flex md:gap-0 gap-10 w-full justify-between tracking[-0.36px] text-zinc-800 text-lg font-semibold text-start  leading-relaxed "
                    onClick={() => handleToggle(index)}
                  >
                    <p className="max-w-[440px]">{title}</p>
                    <span
                      className={`w-[25px] h-[25px] ${
                        isActive === index
                          ? " transition transform duration-500 rotate-0"
                          : "rotate-180 transition transform duration-500"
                      }`}
                    >
                      <ArrowDown />
                    </span>
                  </div>

                  {isActive == index && (
                    <div className="text-neutral-600 text-base font-normal pt-3 leading-snug tracking[-0.32px] whitespace-pre-line">
                      {text}
                    </div>
                  )}
                </>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}
