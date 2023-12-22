"use client";
import Image from "next/image";
// import React, { useEffect, useState } from "react";
import redwine from "@/assets/images/redwine.png";
import CriticsDetailCards from "./CriticsDetailCards";

export default function AboutWine({wine}: {wine?: any}) {
  return (
    <div>
      <section className=" py-40 px-4 lg:px-6 md:px-4">
        <div className=" container mx-auto  max-w-[1248px]">
          <p className=" text-stone-500 text-xs font-normal uppercase leading-3 tracking-tight">
            About
          </p>
          <h2 className=" text-zinc-800 text-7xl font-normal  leading-[84px]   ">
            {wine?.winery.name} | {wine?.vintage} | <br/> {wine?.name}
          </h2>

          <div className="gap-7 items-center grid grid-col-1  md:grid-cols-2  py-8">
            <div className="pb-4 lg:pb-0 md:pb-4 col-span-1 ">
              <div className="max-w-[500px]">
                <div className="flex gap-3">
                  <span className=" text-zinc-800 text-base font-bold leading-snug">
                  </span>
                </div>
                <p className="w-full text-zinc-800 text-base font-normal leading-snug pb-8 whitespace-pre-line">
                  {wine?.description}
                </p>
              </div>
            </div>
            <div className="flex justify-end col-span-1">
              <Image src={redwine} alt="Picture of the author" className="" />
            </div>
          </div>

          <CriticsDetailCards reviews={wine?.ratings} />
        </div>
      </section>
    </div>
  );
}
