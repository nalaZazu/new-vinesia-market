"use client";
import Image from "next/image";
import React, { useState } from "react";
import wineart from "../../assets/images/wineart.png";
import graps from "../../assets/images/graps.png";
import art1 from "../../assets/images/art1.png";
import arrow from "../../assets/icons/arrow-right2.svg";

export default function WineArt() {
  return (
    <div className=" container mx-auto">
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
            <Image src={wineart} alt="image" className="shadow z-10 relative" />
          </div>
          <div className="">
            <Image
              src={art1}
              alt="image"
              className="absolute -bottom-10 right-28 z-20"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="grid md:grid-cols-2">
            <div className=" pl-5 md:pt-16 py-4">
              <h1 className="text-primary text-[32px] font-semibold tracking-tight">
                Wine & art collections
              </h1>
              <p className="max-w-[400px] text-base font-medium   tracking-tight">
                Collections are carefully curated around specific themes,
                featuring exceptional wines from prestigious wineries worldwide.
                Each collection is a celebration of the finest vintages,
                thoughtfully selected by our team of experts. Some of our
                collections also include captivating artwork from the renowned
                artist Reso, adding an artistic touch to the wine collections
                you invest in.
              </p>
              <div className="flex items-center mt-10">
                <button className="py-2.5 px-4 bg-bgsecondary text-white rounded-lg  ">
                  Start Exploring
                </button>
                <button className="py-2.5 px-4 gap-3 ml-2  text-bgsecondary rounded-lg  font-medium text-base flex items-center ">
                  <div className="text-gray-500 text-base font-medium tracking-tight">
                    Meet the artist
                  </div>
                  <Image src={arrow} alt="arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 