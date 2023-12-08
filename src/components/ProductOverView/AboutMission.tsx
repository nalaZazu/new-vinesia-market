"use client";
import Image from "next/image";
// import React, { useEffect, useState } from "react";
import redwine from "@/assets/images/redwine.png";
import CriticsDetailCards from "./CriticsDetailCards";

export default function AboutMission() {
  return (
    <div>
      <section className=" py-40 px-4 lg:px-6 md:px-4">
        <div className=" container mx-auto">
          <p className=" text-stone-500 text-xs font-normal font-['Albert Sans'] uppercase leading-3 tracking-tight">
            About
          </p>
          <h2 className=" text-zinc-800 text-7xl font-normal font-['Canela'] leading-[84px]   ">
            Chateau La Mission Haut Brion Cru Classe | 2009
          </h2>
        </div>

        <div className="container mx-auto gap-7 items-center grid grid-col-1  md:grid-cols-5 lg:grid-cols-5 py-8">
          <div className="pb-4 lg:pb-0 md:pb-4 md:col-span-2 col-span-1 ">
            <div className="flex gap-3">
              <span className=" text-zinc-800 text-base font-bold font-['Albert Sans'] leading-snug">
                Red, 14% Alc
              </span>
            </div>
            <p className="w-full text-zinc-800 text-base font-normal font-['Albert Sans'] leading-snug pb-8">
              An evocative nose, floral and exotic with black cherry, lychee and
              passion fruit aromas, delicate and nuanced. Svelte on the palate
              with sculpted and refined tannins – it’s confident, with sinew,
              muscle and plump fruit, but not showy. The 2019 Le Pin is a rich,
              expansive wine that soars from the glass with aromas of raspberry
              preserve, plums, wild berries, rose petals and licorice, framed by
              a deftly judged patina of creamy new oak.
            </p>
            <p className="w-full text-zinc-800 text-base font-normal font-['Albert Sans'] leading-snug">
              Full-bodied, supple and velvety, it’s broad and enveloping, with
              a fleshy core of fruit that’s framed by lively acids and powdery
              tannins, concluding with a long, aromatic finish. Le Pin’s vines
              are rooted in clay, which no doubt helps to explain how this wine
              can perform so well in warm, dry vintages.
            </p>
          </div>
          <div className="flex justify-end md:col-span-3 col-span-1">
            <Image src={redwine} alt="Picture of the author" className="" />
          </div>
        </div>

        <CriticsDetailCards />
      </section>
    </div>
  );
}
