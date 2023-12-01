"use client";
import Image from "next/image";
import React, { useState } from "react";
import alert from "../../assets/icons/alert-circle.svg";
export default function Banner() {
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
    <div>
      <section className="custom-bg-image">
        <div className=" container mx-auto text-white">
          <div className="flex items-end h-[818px] pb-14">
            <div>
              <p className="text-stone-400 text-xs font-normal uppercase leading-3 tracking-tight pb-7">
                appreciating your wine, guarding its emotions
              </p>
              <p className="text-white text-9xl font-normal font-['Canela'] ">
                Marketplace
              </p>
              <p className="text-stone-400 text-base font-normal leading-snug pt-4 pb-10 w-[470px]">
                Something about technology, advantage of wine investments,
                unique buying and reselling experience
              </p>
              <button className="h-14 px-8 py-[22px] rounded-full border border-white border-opacity-20 justify-center items-center gap-3 inline-flex text-center text-white text-xs font-normal uppercase tracking-tight">
                START EXPLORING
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className=" w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>{" "}
              <p className=" text-orange-100 text-lg font-semibold leading-relaxed pt-28 ">
                Peace of Mind pledge
              </p>
              <div className="pt-4">
                <ul className="flex gap-5 font-normal text-xs text-black">
                  <li className="flex relative font-normal gap-2 text-stone-400 text-base leading-snug items-center">
                    Proof of Authenticity
                    <span
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
                            how it differs from the {`"old word"`}. RFID
                            explanation.
                          </span>
                          <span
                            className="absolute bottom-0 right-0 w-2 h-2 -mb-1 transform rotate-45 bg-[#959596] z-0"
                            style={{ left: "50%" }}
                          ></span>
                        </div>
                      </div>
                    </span>
                  </li>
                  <li className="flex relative items-center font-normal gap-2 text-stone-400 text-base  leading-snug">
                    Proof of Ownership
                    <span onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
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
                            how it differs from the {`"old word"`}. RFID
                            explanation.
                          </span>
                          <span
                            className="absolute bottom-0 right-0 w-2 h-2 -mb-1 transform rotate-45 bg-[#959596] z-0"
                            style={{ left: "50%" }}
                          ></span>
                        </div>
                      </div>
                    </span>
                  </li>
                  <li className="flex relative gap-2 items-center  font-normal text-stone-400 text-base leading-snug">
                    Proof of Storage conditions
                    <span
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
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
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className=" pt-28 pb-14"></div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
