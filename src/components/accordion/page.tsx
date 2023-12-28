"use client";
import React, { Fragment, useState, useRef } from "react";
import { Disclosure } from "@headlessui/react";
import { ArrowDown, RoundArrow } from "@/assets/icons/Icons";
import { AccordionAbout, AccordionAboutTwo, AccordionFAQ } from "@/constants/accrodion";
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
    setIsActive(id);
  };
  const pathname = usePathname();
  return (
    <div>
      {data?.map((item: any, index: any) => {
        const { id, title, text } = item;
        return (
          <div key={index} className={`w-full `}>
            <div
              className={`  w-full  rounded-2xl  md:px-2 ${containerClass}`}
              key={index}
            >
              <Disclosure>
                <>
                  <Disclosure.Button
                    className={`flex md:gap-0 gap-10 w-full justify-between rounded-lg text-start md:text-lg md:leading-relaxed text-base font-semibold  leading-snug ${titleClass}`}
                    onClick={() => handleDisclosure(id)}
                  >
                    <span>{title}</span>

                    <RoundArrow />
                  </Disclosure.Button>
                  {isActive == id && (
                    <Disclosure.Panel
                      className={`text-red-300 text-base font-normal pt-6  leading-snug tracking-[0.32px] whitespace-pre-wrap ${descClass}`}
                    >
                      {text}
                    </Disclosure.Panel>
                  )}
                </>
              </Disclosure>
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
    setIsActive(id);
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
              <Disclosure>
                <>
                  <Disclosure.Button
                    className="flex md:gap-0 gap-10 w-full justify-between tracking[-0.36px] text-zinc-800 text-lg font-semibold text-start  leading-relaxed "
                    onClick={() => handleToggle(id)}
                  >
                    <p className="max-w-[440px]">{title}</p>
                    <div className="md:w-0 md:h-0 w-6 h-6">
                      <ArrowDown />
                    </div>
                  </Disclosure.Button>

                  {isActive == id && (
                    <Disclosure.Panel className="text-neutral-600 text-base font-normal pt-3 leading-snug tracking[-0.32px] whitespace-pre-line">
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


type TAccordionWineFaq = {
  [key: string]: {id: number, question: string, answer: string}[]
}

type PanelRefs = {
  [key: string]: HTMLDivElement | null;
}

export function AccordionWineFaq({ data = AccordionFAQ }: { data?: TAccordionWineFaq }) {
  const [isActive, setIsActive] = useState<any>();
  const panelRefs = useRef<PanelRefs>({});
  const handleToggle = (id: any) => {
    setIsActive(isActive === id ? null : id);
    if(!isActive !== id){
      setTimeout(() => {
        panelRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100)
    }
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
      {
        Object.keys(data).map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h2 className="text-zinc-800 text-2xl font-bold font-Canela mb-6 ml-8">{category}</h2>
            {data[category].map(({ id, question, answer }, index) => (
              <div
                className="w-full pl-6 pr-4 py-4 border-t border-orange-700 border-opacity-20 justify-between items-center inline-flex"
                key={id}
              >
                <div className="w-full rounded-2xl md:px-2">
                  <Disclosure>
                    <>
                      <Disclosure.Button
                        className="flex md:gap-0 gap-10 w-full justify-between tracking[-0.36px] text-zinc-800 text-lg font-semibold text-start leading-relaxed"
                        onClick={() => handleToggle(id)}
                      >
                        <p className="max-w-[440px]">{question}</p>
                        <div className="md:w-0 md:h-0 w-6 h-6">
                          <ArrowDown />
                        </div>
                      </Disclosure.Button>

                      {isActive === id && (
                        <Disclosure.Panel className="text-neutral-600 text-base font-normal pt-3 leading-snug tracking[-0.32px] whitespace-pre-line"
                        ref={el => panelRefs.current[id] = el}>
                          {answer}
                        </Disclosure.Panel>
                      )}
                    </>
                  </Disclosure>
                </div>
              </div>
            ))}
          </div>
        ))
      }
    </div>
  );
}
