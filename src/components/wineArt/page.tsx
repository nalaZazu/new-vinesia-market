"use client";
import Image from "next/image";
import React, { useState } from "react";
import wineart from "../../assets/images/wineart.png";
import graps from "../../assets/images/graps.png";
import art1 from "../../assets/images/art1.png";
import glass from "../../assets/images/glass.png";
import bottle from "../../assets/images/bottle.png";
export default function WineArt() {
  return (
    <div>
      <div className=" container mx-auto max-w-[1097px]">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
          <div className="relative">
            <div className="hidden md:block">
              <Image
                src={graps}
                alt="image"
                className="absolute -top-20 -left-14 z-0"
              />
            </div>
            <div className="flex ps-10 md:ps-0 relative">
              <Image
                src={wineart}
                alt="image"
                className="shadow z-10 relative w-2/3 md:w-[404px]"
              />
              <Image
                src={art1}
                alt="image"
                className="absolute md:-bottom-10 -bottom-7 right-14 z-20 max-w-[98.52px] md:max-w-[213px]"
              />
            </div>
            <div></div>
          </div>
          <div className="col-span-1 relative">
            <Image
              src={glass}
              alt="image"
              className="absolute -top-20 right-20 z-20 hidden md:block"
            />
            <div className="px-4 md:px-0 md:pt-16 pt-16">
              <h1 className="flex md:justify-center ps-5 md:left-0 md:top-[60px] top-[130px] md:right-0 absolute opacity-10 text-white md:text-[500px] text-[278.07px] font-bold  md:leading-[144px] leading-[68px]">
                &
              </h1>
              <h1 className="flex justify-center pt-12 md:pt-0 pr-16 md:pr-0 text-white md:text-9xl text-6xl font-normal  leading-none">
                Wine
              </h1>
              <div className="relative">
                <h1 className="text-white md:text-9xl text-6xl font-normal   text-center lg:ps-56 ps-20">
                  Art
                  <span className=" origin-top-left rotate-[-12.28deg] absolute md:right-12 right-0 md:top-0 -top-5 text-white text-2xl font-normal  leading-normal collection">
                    Collections
                  </span>
                </h1>
              </div>

              <div className=" md:pt-8 pt-14 flex justify-center">
                <p className=" max-w-[396px] text-stone-400 text-base font-normal  leading-snug pb-4">
                  Collections are carefully curated around specific themes,
                  featuring exceptional wines from prestigious wineries
                  worldwide. Each collection is a celebration of the finest
                  vintages, thoughtfully selected by our team of experts.
                </p>
              </div>
              <div className=" flex justify-center">
                <p className="max-w-[396px] text-stone-400 text-base font-normal  leading-snug">
                  Some of our collections also include captivating artwork from
                  the renowned artist Reso, adding an artistic touch to the wine
                  collections you invest in.
                </p>
              </div>
            </div>

            <div className=" md:flex md:justify-center md:pt-12 pt-10 px-4 md:px-0 ">
              <button className=" w-full md:w-auto h-14 px-8 py-[22px] rounded-full border border-white border-opacity-20 justify-center items-center gap-3 inline-flex text-center text-white text-xs font-normal uppercase tracking-tight">
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
              </button>
              <button className="w-full md:w-auto h-14 px-8 py-[22px] justify-center items-center gap-3 inline-flex text-center text-white text-xs font-normal uppercase tracking-tight">
                MEET THE ARTIST
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
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center ">
        <Image
          src={bottle}
          alt="image"
          className="absolute bottom-0 hidden md:block"
        />
      </div>
    </div>
  );
}
