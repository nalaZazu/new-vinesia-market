"use client";
import Image from "next/image";
import React, { useState } from "react";
import france from "../../assets/images/france.png";
import germany from "../../assets/images/germany.png";
import switzerland from "../../assets/images/Switzerland.png";
import italy from "../../assets/images/italy.png";
import usa from "../../assets/images/usa.png";
import arrow from "../../assets/icons/LongarrowDown.svg";
import arrowbtn from "../../assets/icons/Button Arrow.svg";
import Link from "next/link";
import Popup from "../popup/page";
import {
  regionItaly,
  regionUs,
  regionexplore,
} from "../../constants/regionexplor";
const ExploreRegion = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="bg-[#F7EFDF] hidden md:block">
      <Popup open={open} setOpen={handleOpen} />
      <section className="container mx-auto max-w-[1247px]">
        <div className="py-10">
          <h1 className="text-zinc-800 text-4xl font-light  leading-[44px]">
            Explore by region
          </h1>
        </div>
        <div className=" grid lg:grid-cols-6 gap-4">
          {/* column one */}
          <div className="items-end justify-left  cursor-pointer">
            <div onClick={handleOpen}>
              <Image src={france} alt="play-button" />
            </div>
            <Link href="/regions/france">
              <div className=" flex items-end justify-left gap-28 mt-4">
                <p className=" text-black text-lg  tracking-tight">France</p>
                <Image src={arrow} alt="arrow" />
              </div>
            </Link>
          </div>

          {/* column two */}

          <div className=" h-[21rem] items-end justify-left p-3">
            <div>
              <ul className=" text-sm font-normal   leading-[49px] tracking-tight">
                {regionexplore?.map((reg) => {
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
            <div className=" h-40 items-end justify-left  cursor-pointer">
              <div onClick={handleOpen}>
                <Image src={germany} alt="play-button" />
              </div>
            </div>
            <Link href="/regions/germany">
              <div className=" flex items-end justify-left  gap-[19rem] mt-4">
                <p className="text-black text-lg   tracking-tight ">Germany</p>
                <Image src={arrow} alt="arrow" />
              </div>
            </Link>
            <div
              className=" h-40 items-end justify-left  cursor-pointer"
              onClick={handleOpen}
            >
              <div className=" ">
                <Image src={switzerland} alt="play-button" />
              </div>
              <div className=" flex items-end justify-left  gap-72 mt-4">
                <p className="text-black text-lg  tracking-tight ">
                  Switzerland
                </p>
                <Image src={arrow} alt="arrow" />
              </div>
            </div>
          </div>

          {/* column two */}
          <div className="flex flex-col gap-4 ">
            <div className=" h-40 items-end justify-left cursor-pointer">
              <div onClick={handleOpen}>
                <Image src={italy} alt="play-button" />
              </div>
            </div>
            <Link href="/regions/italy">
              <div className=" flex items-end justify-left gap-32 ">
                <p className="text-black text-lg  tracking-tight mt-4">Italy</p>
                <Image src={arrow} alt="arrow" />
              </div>{" "}
            </Link>
            {/* next div */}
            <div className=" h-40 items-end justify-left cursor-pointer">
              <div onClick={handleOpen}>
                <Image src={usa} alt="play-button" />
              </div>
            </div>
            <Link href="/regions/usa">
              <div className=" flex items-end justify-left gap-32 ">
                <p className="text-black text-lg  tracking-tight ">USA</p>
                <Image src={arrow} alt="arrow" />
              </div>
            </Link>
          </div>
          {/* link colum */}

          <div className="flex flex-col gap-4">
            <div className=" h-40 items-end justify-left p-3  ">
              <ul className=" text-sm font-normal   leading-[49px] tracking-tight">
                {regionItaly?.map((italy) => {
                  const { id, name, href } = italy;
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
              <ul className=" text-sm font-normal  leading-[49px] tracking-tight">
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
          <Link href="/regions">  <button className="  bg-orange-700 rounded-full   tracking-tight px-4 py-5 justify-center items-center gap-2 inline-flex bg-bgsecondary  my-24 text-center text-white text-xs font-normal  uppercase leading-3">
            Start Exploring
            <span>
              <Image src={arrowbtn} alt="right-arrow" />
            
            </span>
          </button>
          </Link>
        
        </div>
      </section>
    </div>
  );
};
export default ExploreRegion;
