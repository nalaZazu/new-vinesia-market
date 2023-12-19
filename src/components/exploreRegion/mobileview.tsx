"use client";
import Image from "next/image";
import React, { useState } from "react";
// import france from "../../assets/images/mobilefrance.png";
// import germany from "../../assets/images/germany.png";
// import switzerland from "../../assets/images/Switzerland.png";
// import italy from "../../assets/images/italy.png";
// import usa from "../../assets/images/usa.png";
import arrow from "../../assets/icons/LongarrowDown.svg";
import Link from "next/link";
import Popup from "../popup/page";
import {
  regionItaly,
  regionUs,
  regionexplor,
} from "../../constants/regionexplor";
import TabButton from "@/common/TabButton";
const ExploreRegionMobile = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="bg-[#F7EFDF] block md:hidden py-20 px-4">
      <Popup open={open} setOpen={handleOpen} />
      <section className="container mx-auto">
        <div className="pb-4">
          <h1 className="text-zinc-800 text-4xl font-light  leading-[44px]">
            Explore by region
          </h1>
        </div>
        <TabButton />

        <div>
          {/* column one */}
          <div className="cursor-pointer" onClick={handleOpen}>
            <div>
              <iframe
                className=" w-full lg:h-[600px] md:h-[400px] sm:h-[400px]"
                src="https://www.youtube.com/embed/iu2C7AeIqac?si=m_dZQecmVZYzo6MU "
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className=" flex items-end justify-between mt-4">
              <h1 className=" text-zinc-800 text-4xl font-light  leading-[44px]">
                France
              </h1>
              <div className="w-[37px] h-[37px] bg-orange-700 rounded-full flex justify-center items-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className="py-6 text-zinc-800 text-lg font-semibold  leading-relaxed">
          Sub Regions
        </p>
        <div className="">
          <div>
            <ul className="text-secondary text-sm font-normal   leading-[49px] tracking-tight">
              {regionexplor?.map((reg) => {
                const { id, name, href } = reg;
                return (
                  <Link href={href} key={id}>
                    <li className="flex items-center justify-between">
                      <span className="text-[#61423D]">{name}</span>
                      <span>
                        <Image src={arrow} alt="arrow" />
                      </span>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ExploreRegionMobile;
