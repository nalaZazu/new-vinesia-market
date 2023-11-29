"use client";
import Image from "next/image";
import React, { useState } from "react";
import france from "../../assets/images/france.png";
import germany from "../../assets/images/germany.png";
import switiland from "../../assets/images/Switzerland.png";
import italy from "../../assets/images/italy.png";
import usa from "../../assets/images/usa.png";
import arrow from "../../assets/icons/Long arrow Down.svg";
import Link from "next/link";
import Popup from "../popup/page";
import {
  regionItaly,
  regionUs,
  regionexplor,
} from "../../constants/regionexplor";
const ExploreRegion = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="bg-[#F7EFDF]">
      <Popup open={open} setOpen={handleOpen} />
      <section className="container mx-auto">
        <div className="py-10">
          <h1 className="text-zinc-800 text-7xl font-normal font-['Canela'] leading-[80px]">
            Explore by region
          </h1>
        </div>
        <div className=" grid lg:grid-cols-6 gap-4">
          {/* column one */}
          <div
            className="border border-[#7c7b83] h-[21rem] items-end justify-left p-3 cursor-pointer"
            onClick={handleOpen}
          >
            <div className="flex items-end justify-center h-1/2 ">
              <Image src={france} alt="play-button" />
            </div>
            <div className=" flex items-end justify-left h-1/2">
              <h1 className=" text-black text-xxl font-semibold tracking-tight">
                France
              </h1>
            </div>
          </div>

          {/* column two */}

          <div className=" h-[21rem] items-end justify-left p-3">
            <div>
              <ul className="text-secondary text-sm font-normal   leading-[49px] tracking-tight">
                {regionexplor?.map((reg) => {
                  const { id, name, href } = reg;
                  return (
                    <Link href={href} key={id}>
                      <li className="flex items-center justify-between">
                        <span>{name}</span>
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

          {/* column two */}
          <div className="col-span-2 flex flex-col gap-4">
            <div
              className="border  border-[#7c7b83] h-40 items-end justify-left p-3 cursor-pointer"
              onClick={handleOpen}
            >
              <div className="flex items-end justify-center h-1/2">
                <Image src={germany} alt="play-button" />
              </div>
              <div className=" flex items-end justify-left h-1/2">
                <h1 className="text-black text-xxl font-semibold  tracking-tight ">
                  Germany
                </h1>
              </div>
            </div>
            <div
              className="border  border-[#7c7b83] h-40 items-end justify-left p-3 cursor-pointer"
              onClick={handleOpen}
            >
              <div className="flex items-end justify-center h-1/2">
                <Image src={switiland} alt="play-button" />
              </div>
              <div className=" flex items-end justify-left h-1/2">
                <h1 className="text-black text-xxl font-semibold  tracking-tight ">
                  Switzerland
                </h1>
              </div>
            </div>
          </div>

          {/* column two */}
          <div className="flex flex-col gap-4 ">
            <div
              className="border  border-[#7c7b83] h-40 items-end justify-left p-3 cursor-pointer"
              onClick={handleOpen}
            >
              <div className="flex items-end justify-center h-1/2">
                <Image src={italy} alt="play-button" />
              </div>
              <div className=" flex items-end justify-left h-1/2">
                <h1 className="text-black text-xxl font-semibold  tracking-tight ">
                  Italy
                </h1>
              </div>
            </div>

            {/* next div */}
            <div
              className="border  border-[#7c7b83] h-40 items-end justify-left p-3 cursor-pointer "
              onClick={handleOpen}
            >
              <div className="flex items-end justify-center h-1/2">
                <Image src={usa} alt="play-button" />
              </div>
              <div className=" flex items-end justify-left h-1/2">
                <h1 className="text-black text-xxl font-semibold  tracking-tight ">
                  USA
                </h1>
              </div>
            </div>
          </div>
          {/* link colum */}

          <div className="flex flex-col gap-4">
            <div className=" h-40 items-end justify-left p-3  ">
              <ul className="text-secondary text-sm font-normal   leading-[49px] tracking-tight">
                {regionItaly?.map((itly) => {
                  const { id, name, href } = itly;
                  return (
                    <Link href={href} key={id}>
                      <li className="flex items-center justify-between">
                        <span>{name}</span>
                        <span>
                          <Image src={arrow} alt="arrow" />
                        </span>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>

            {/* next div */}
            <div className=" h-40 items-end justify-left p-3  ">
              <ul className="text-secondary text-sm font-normal  leading-[49px] tracking-tight">
                {regionUs?.map((us) => {
                  const { id, name, href } = us;
                  return (
                    <Link href={href} key={id}>
                      <li className="flex items-center justify-between">
                        <span>{name}</span>
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
        </div>
        <div className="text-center ">
          <button className=" text-white text-base font-medium  tracking-tight px-4 py-2.5 justify-center items-center gap-2 inline-flex bg-bgsecondary rounded-lg mt-9">
            Start Exploring
          </button>
        </div>
      </section>
    </div>
  );
};
export default ExploreRegion;
