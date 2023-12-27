"use client";
import Image from "next/image";
import React, { useState } from "react";
import alert from "../../assets/icons/alert-circle.svg";
import BreadCrumb from "@/common/BreadCrumb";
import bgImg from "@/assets/images/herobanner.png";
import Link from "next/link";
import InfoTooltip from "@/common/InfoTooltip";
export default function Banner({ breadCrumbData }: { breadCrumbData?: any }) {
  const [tooltipExtraVisible, setTooltipExtraVisible] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);

  const showTooltipExtra = () => {
    setTooltipExtraVisible(true);
  };

  const hideTooltipExtra = () => {
    setTooltipExtraVisible(false);
  };

  const showTooltip = () => {
    setTooltipVisible(true);
  };

  const hideTooltip = () => {
    setTooltipVisible(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="z-0">
      {/* <section className="grid grid-cols-1 custom-bg-image md:pt-0 pt-40 bg-[#4e261a] object-cover md:bg-[50rem_center] bg-center h-[818px] bg-top-[5rem]')]"> */}
      <section className="grid grid-cols-1 custom-bg-image md:pt-0 pt-40 bg-[#4e261a] object-cover bg-center h-[818px] bg-top-[5rem]')]">
        <div className=" container mx-auto flex flex-col md:justify-end justify-between text-white md:px-0 px-4 pt-10 md:pt-0">
          <div>
            <div>
              <p className="text-stone-400 text-xs font-normal uppercase leading-3 tracking-tight   pb-6 max-w-[200px] md:max-w-full">
                appreciating your wine, guarding its emotions
              </p>
              <h1 className="text-white md:text-[144px] md:leading-[200px] sm:text-6xl text-5xl font-normal">
                Marketplace
              </h1>
              <p className="text-stone-400 text-base font-normal leading-snug md:pt-6  pt-4 pb-8 md:pb-10 max-w-[470px]">
                Something about technology, advantage of wine investments,
                unique buying and reselling experience
              </p>
              <Link
                href="/invest"
                className="h-14 px-8 py-[22px] rounded-full border border-white border-opacity-20 justify-center items-center gap-3 inline-flex text-center text-white text-xs font-normal uppercase tracking-tight"
              >
                START EXPLORING
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className=" w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className=" pt-28 md:pb-14 pb-5">
            <p className=" text-orange-100 text-lg font-semibold leading-relaxed">
              Peace of Mind pledge
            </p>
            <div className="pt-4 flex flex-wrap md:flex-row flex-col justify-between gap-40 md:gap-20 lg:gap-0">
              <ul className="flex flex-col md:flex-row gap-5 font-normal text-xs text-black">
                <li className="flex relative font-normal gap-2 text-[#CBACAB] text-base leading-snug items-center">
                  Proof of Authenticity
                  <InfoTooltip fill="#CBACAB" />
                  {/* <span
                    onMouseEnter={showTooltipExtra}
                    onMouseLeave={hideTooltipExtra}
                  >
                    <Image
                      src={alert}
                      alt="Picture of the author"
                      width={16}
                      height={16}
                      quality={75}
                      style={{ objectFit: "contain" }}
                    />
                    <div
                      className={`relative ${
                        tooltipExtraVisible ? "block" : "hidden"
                      }`}
                    >
                      <div className="absolute inline-block w-40 px-4 py-3 mb-10 -ml-32 text-white bg-[#959596] rounded-lg z-10 top-[-125px] left-12">
                        <span className="inline-block text-xs text-center font-normal leading-tight text-[#141619]  tracking-wide ">
                          A quick explanation of the technology used here and
                          how it differs from the {`"old word"`}. BLE (Bluetooth Low Energy)
                          explanation.
                        </span>
                        <span
                          className="absolute bottom-0 right-0 w-2 h-2 -mb-1 transform rotate-45 bg-[#959596] z-0"
                          style={{ left: "50%" }}
                        ></span>
                      </div>
                    </div>
                  </span> */}
                </li>
                <li className="flex relative items-center font-normal gap-2 text-[#CBACAB] text-base  leading-snug">
                  Proof of Ownership
                  <InfoTooltip fill="#CBACAB" />
                  {/* <span onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
                    <Image
                      src={alert}
                      alt="Picture of the author"
                      width={16}
                      height={16}
                      quality={75}
                      style={{ objectFit: "contain" }}
                    />

                    <div
                      className={`relative ${
                        tooltipVisible ? "block" : "hidden"
                      }`}
                    >
                      <div className="absolute inline-block w-40 px-4 py-3 -ml-32 text-white bg-[#959596] rounded-lg z-10 top-[-125px] left-12">
                        <span className="inline-block text-xs text-center font-normal leading-tight text-[#141619]  tracking-wide ">
                          A quick explanation of the technology used here and
                          how it differs from the {`"old word"`}. BLE (Bluetooth Low Energy)
                          explanation.
                        </span>
                        <span
                          className="absolute bottom-0 right-0 w-2 h-2 -mb-1 transform rotate-45 bg-[#959596] z-0"
                          style={{ left: "50%" }}
                        ></span>
                      </div>
                    </div>
                  </span> */}
                </li>
                <li className="flex relative gap-2 items-center  font-normal text-[#CBACAB] text-base leading-snug">
                  Proof of Storage conditions
                  <InfoTooltip fill="#CBACAB" />
                  {/* <span
                 
                  >
                    <Image
                      src={alert}
                      alt="Picture of the author"
                      width={16}
                      height={16}
                      quality={75}
                      style={{ objectFit: "contain" }}
                    />
                    <div
                      className={`relative ${isHovered ? "block" : "hidden"}`}
                    >
                      <div className="absolute inline-block w-40 px-4 py-3 -ml-32 text-white bg-[#959596] rounded-lg z-10 top-[14px] left-[68px]">
                        <span className="inline-block text-xs text-center font-normal leading-tight text-[#141619]  ">
                          Rating comes from world recognized critics like by
                          either Robert Parker, Jeb Dunnuck or Suckling.
                        </span>
                        <span
                          className="absolute w-2 h-2 -mb-1 transform rotate-45 bg-[#959596] z-30"
                          style={{ left: "40%", top: "-4%" }}
                        ></span>
                      </div>
                    </div>
                  </span> */}
                </li>
              </ul>

              <div>
                <BreadCrumb breadCrumbData={breadCrumbData} />
              </div>
            </div>
            {/* <div className=" pt-28 pb-14"></div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
