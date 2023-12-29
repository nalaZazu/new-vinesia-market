"use client";
import React from "react";
import { NextIcon } from "@/assets/icons/Icons";
import icon1 from "@/assets/icons/Transparency.svg";
import icon2 from "@/assets/icons/Security.svg";
import icon3 from "@/assets/icons/empowerment.svg";
import icon4 from "@/assets/icons/Beautifulstories.svg";
import Image from "next/image";

const value = [
  {
    id: 1,
    title: "Transparency",
    text: "The photos you see on our website are those of the actual wines you can invest in, no mystery as to what you own. No mystery either as to where you own it or whether you actually own it through our Peace of Mind pledge to you.",
    info: icon1,
  },
  {
    id: 2,
    title: "Security and risk mitigation",
    text: "Traditionally, you need to trust a third party that they hold your investment. We take your concern on whether you hold an authentic asset, at any moment in time, in optimal conditions extremely seriously and we believe that no other technology than blockchain can offer this.",
    info: icon2,
  },
  {
    id: 3,
    title: "Empowerment",
    text: "At Vinesia, we believe that we need to use technology as a way to collate the actionable data that exists out there and offer it to you on a silver platter so that you can ultimately make your own investment decisions. Our AI-powered engine will help you achieve this goal",
    info: icon3,
  },
  {
    id: 4,
    title: "Beautiful stories",
    text: "This is not just about investing, our love for wine is an extension of who we are. And the rewards we get from collecting the beautiful masterpieces featured on this site go way beyond just monetary value. In fact, we grow and develop with many of the wines we purchase, they are part of our lives for what is usually a long time.",
    info: icon4,
  },
];

export default function OurValues() {
  return (
    <div>
      <div className="grid grid-cols-2 pb-20">
        <h2 className="text-white text-7xl font-normal leading-[84px]">
          Our Values
        </h2>
        <p className="max-w-[607px] text-neutral-300 text-lg font-semibold leading-relaxed">
          We believe that the distance that exists today between a wine investor
          and their investment is too far apart. The belief that that distance
          should be as minimal as possible is our core driver.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {value.map((items: any, i: any) => {
          const { title, info, text } = items;
          return (
            <div key={i} className="pb-16">
              <div className="w-[72px] h-[72px] bg-orange-700 rounded-[150px] items-center flex">
                <span className="mx-auto">
                  <Image src={info} alt="image" />
                </span>
              </div>
              <div className="pt-6 pb-8 max-w-[507px]">
                <p className="text-white text-lg font-semibold leading-relaxed pb-2">
                  {title}
                </p>
                <p className="self-stretch text-neutral-400 text-base font-normal leading-snug">
                  {text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
