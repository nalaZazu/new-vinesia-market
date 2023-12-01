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
            <div className="flex ps-10 md:ps-0">
              <Image
                src={wineart}
                alt="image"
                className="shadow z-10 relative w-[186.86px] md:w-[404px]"
              />
            </div>
            <div>
              <Image
                src={art1}
                alt="image"
                className="absolute md:-bottom-10 -bottom-7 right-14 z-20 max-w-[98.52px] md:max-w-[213px]"
              />
            </div>
          </div>
          <div className="col-span-1 relative">
            <Image
              src={glass}
              alt="image"
              className="absolute -top-20 right-20 z-20 hidden md:block"
            />
            <div className=" pl-5 md:pt-16 py-4">
              <h1 className="text-white md:text-9xl text-6xl font-normal font-['Canela'] leading-none">
                Wine
              </h1>
              <p className="origin-top-left rotate-[-12.28deg] absolute right-0 left-40 text-white text-2xl font-normal font-['Bon Vivant'] leading-normal text-center">
                Collections
              </p>
              <h1 className=" text-white md:text-9xl text-6xl font-normal font-['Canela'] text-center">
                Art
              </h1>

              <h1 className="left-0 top-[60px] lg:absolute opacity-10 text-white md:text-[500px] text-[278.07px] font-bold font-['Canela'] md:leading-[144px] leading-[68px] ">
                &
              </h1>
              <div className=" pt-8">
                <p className="max-w-[396px] text-stone-400 text-base font-normal font-['Albert Sans'] leading-snug">
                  Collections are carefully curated around specific themes,
                  featuring exceptional wines from prestigious wineries
                  worldwide. Each collection is a celebration of the finest
                  vintages, thoughtfully selected by our team of experts.{" "}
                </p>
                <p className="max-w-[396px] text-stone-400 text-base font-normal font-['Albert Sans'] leading-snug">
                  Some of our collections also include captivating artwork from
                  the renowned artist Reso, adding an artistic touch to the wine
                  collections you invest in.
                </p>
              </div>
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
