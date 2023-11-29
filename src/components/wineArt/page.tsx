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
        <div className="grid lg:grid-cols-2">
          <div className="relative">
            <div className="">
              <Image
                src={graps}
                alt="image"
                className="absolute -top-20 -left-14 z-0"
              />
            </div>
            <div>
              <Image
                src={wineart}
                alt="image"
                className="shadow z-10 relative"
              />
            </div>
            <div className="">
              <Image
                src={art1}
                alt="image"
                className="absolute -bottom-10 right-28 z-20"
              />
            </div>
          </div>
          <div className="col-span-1 relative">
            <Image
              src={glass}
              alt="image"
              className="absolute -top-20 right-20 z-20"
            />
            <div className=" pl-5 md:pt-16 py-4">
              <h1 className="text-white text-9xl font-normal font-['Canela'] leading-none">
                Wine
              </h1>
              <p className="origin-top-left rotate-[-12.28deg] absolute right-0 left-40 text-white text-2xl font-normal font-['Bon Vivant'] leading-normal text-center">
                Collections
              </p>
              <h1 className=" text-white text-9xl font-normal font-['Canela'] text-center">
                Art
              </h1>

              <h1 className="left-0 top-[60px] absolute opacity-10 text-white text-[500px] font-bold font-['Canela'] leading-[144px]">
                &
              </h1>
              <div className=" pt-8">
                <p className="w-[396px] text-stone-400 text-base font-normal font-['Albert Sans'] leading-snug">
                  Collections are carefully curated around specific themes,
                  featuring exceptional wines from prestigious wineries
                  worldwide. Each collection is a celebration of the finest
                  vintages, thoughtfully selected by our team of experts.{" "}
                </p>
                <p className="w-[396px] text-stone-400 text-base font-normal font-['Albert Sans'] leading-snug">
                  Some of our collections also include captivating artwork from
                  the renowned artist Reso, adding an artistic touch to the wine
                  collections you invest in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center">
        <Image src={bottle} alt="image" className="absolute bottom-0" />
      </div>
    </div>
  );
}
