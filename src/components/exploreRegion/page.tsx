"use client";
import Image from "next/image";
import React, { useState } from "react";
import france from "../../assets/images/france.png";
import germany from "../../assets/images/germany.png";
import switzerland from "../../assets/images/Switzerland.png";
import italy from "../../assets/images/italy.png";
import usa from "../../assets/images/usa.png";
import arrow from "../../assets/icons/Long arrow Down.svg";
import arrowbtn from "../../assets/icons/Button Arrow.svg";
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
            className="items-end justify-left  cursor-pointer"
            onClick={handleOpen}
          >
            <div>
              <Image src={france} alt="play-button" />
            </div>
            <div className=" flex items-end justify-left gap-28 mt-4">
              <h1 className=" text-black text-xxl font-semibold tracking-tight">
                France
              </h1>
              <Image src={arrow} alt="arrow" />
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
              className=" h-40 items-end justify-left  cursor-pointer"
              onClick={handleOpen}
            >
              <div className=" ">
                <Image src={germany} alt="play-button" />
              </div>
            </div>
            <div className=" flex items-end justify-left  gap-[19rem] mt-4">
              <h1 className="text-black text-xxl font-semibold  tracking-tight ">
                Germany
              </h1>
              <Image src={arrow} alt="arrow" />
            </div>
            <div
              className=" h-40 items-end justify-left  cursor-pointer"
              onClick={handleOpen}
            >
              <div className=" ">
                <Image src={switzerland} alt="play-button" />
              </div>
              <div className=" flex items-end justify-left  gap-72 mt-4">
                <h1 className="text-black text-xxl font-semibold  tracking-tight ">
                  Switzerland
                </h1>
                <Image src={arrow} alt="arrow" />
              </div>
            </div>
          </div>

          {/* column two */}
          <div className="flex flex-col gap-4 ">
            <div
              className=" h-40 items-end justify-left cursor-pointer"
              onClick={handleOpen}
            >
              <div>
                <Image src={italy} alt="play-button" />
              </div>
            </div>
            <div className=" flex items-end justify-left gap-32 ">
              <h1 className="text-black text-xxl font-semibold  tracking-tight mt-4">
                Italy
              </h1>
              <Image src={arrow} alt="arrow" />
            </div>
            {/* next div */}
            <div
              className=" h-40 items-end justify-left cursor-pointer"
              onClick={handleOpen}
            >
              <div className="">
                <Image src={usa} alt="play-button" />
              </div>
            </div>
            <div className=" flex items-end justify-left gap-32 ">
              <h1 className="text-black text-xxl font-semibold  tracking-tight ">
                USA
              </h1>
              <Image src={arrow} alt="arrow" />
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
            <div className=" h-40 items-end justify-left p-3  mt-8">
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
        <div className="text-center  ">
          <button className="  bg-orange-700 rounded-full   tracking-tight px-4 py-5 justify-center items-center gap-2 inline-flex bg-bgsecondary  my-24 text-center text-white text-xs font-normal font-['Albert Sans'] uppercase leading-3 tracking-tight">
            Start Exploring
            <span>
              <Image src={arrowbtn} alt="right-arrow" />
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg> */}
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};
export default ExploreRegion;
