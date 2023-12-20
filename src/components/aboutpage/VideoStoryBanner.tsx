"use client";
import React from "react";
import Image from "next/image";
import videoplay from "@/assets/images/winevideobutton.svg";

export default function VideoStoryBanner() {
  return (
    <div>
      <div className="w-full md:h-[588px]  h-[480px] bg-no-repeat bg-cover bg-center bg-[url('https://i.ibb.co/bBksnF6/about-Ourstory.png')] relative">
        <div className="flex justify-center items-center w-full md:h-[588px] h-[480px] text-center">
          <div>
            <div>
              <Image
                src={videoplay}
                alt=""
                className="max-w-[124.04px] mx-auto"
              />
            </div>
            <div>
              <h3 className="text-white text-4xl font-light font-['Canela'] leading-[44px]">
                Our video-story
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
