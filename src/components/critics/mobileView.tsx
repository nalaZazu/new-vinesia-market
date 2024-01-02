"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import wine from "../../assets/images/critcsimage.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Arrows,
  NextIcon,
  NextIcon2,
  PrevIcon,
  PrevIcon2,
} from "../../assets/icons/Icons";
import { InfoIcon } from "@/assets/icons/Icons";

import signature from "../../assets/images/mobilesignature.png";
import alert from "../../assets/icons/alert-circle.svg";
import Link from "next/link";

const CriticsMobile = ({ data }: { data: any }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    customPaging: function () {
      return (
        <div className="image.dots z-0 flx-img-border">
          {/* <Image src={big} alt="" width={56} height={74} /> */}
        </div>
      );
    },
    // dots: true,
    // dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    centerPadding: "100px",
    beforeChange: (current: any, next: any) => setCurrentSlide(next),
    nextArrow: (
      <div className="mobile_view_slider  z-50 ">
        <div
          className={`text-black w-full h-full flex items-center rounded-full border justify-center   ${
            currentSlide == data?.length
              ? "border-[#BF4D2020]"
              : "border-orange-700"
          }`}
        >
          <div>
            <NextIcon
              fill={
                currentSlide == data?.length ?? 0 - 2 ? "#BF4D2020" : "#BF4D20"
              }
            />
          </div>
        </div>
      </div>
    ),
    prevArrow: (
      <div className="mobile_view_slider z-50">
        <div
          className={` text-black h-full w-full flex items-center rounded-full border justify-center   ${
            currentSlide == data?.length
              ? "border-[#BF4D2020]"
              : "border-orange-700"
          }`}
        >
          {/*    */}
          {/* className="text-black h-full w-full flex items-center justify-center rounded-full border border-orange-700" */}
          <div>
            <PrevIcon fill={currentSlide == 0 ? "#BF4D2020" : "#BF4D20"} />
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="">
      {/* {data?.map((item: any, index: any) => {
        const { winery, name, vintage } = item;
        return ( */}
      <h2 className="text-critcstext first-letter text-[21px] font-light  leading-[29px] py-8">
        {/* Chateau La Mission Haut Brion Cru Classe 2009 */}
        {data && data[currentSlide].winery} {data && data[currentSlide].name}{" "}
        {data && data[currentSlide].vintage}
      </h2>
      {/* );
      })} */}

      <div className=" container mx-auto max-w-[928px]">
        <Slider {...sliderSettings} className="critics_carousel z-0">
          {data?.map((item: any, i: any) => {
            return (
              <div key={i}>
                <div className="">
                  <div className="flex justify-center">
                    <Image
                      src={wine}
                      alt="image"
                      className="w-[147.81px] h-[204.88px] md:w-96 md:h-auto"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="pt-6 ">
        <div className=" flex justify-between items-center py-6 border-y-2 border-stone-400">
          <h2 className=" flex items-center gap-2 text-stone-500 text-xs font-normal  uppercase leading-3 tracking-tight">
            Vinesia Score
            <InfoIcon fill="#BF4D20" />
          </h2>
          <span className="text-zinc-800 text-4xl font-normal  leading-[42px] ">
            {data && data[currentSlide].maxRating} /
            {data && data[currentSlide].rating}
          </span>
        </div>

        <div className="flex justify-between items-center py-6 border-b-2 border-stone-400">
          <div>
            <p className="text-stone-500 text-xs font-normal  uppercase leading-3 tracking-tight">
              Critiqued By
            </p>
            <p className="self-stretch text-zinc-800 text-base font-semibold  leading-snug">
              {data && data[currentSlide].ratingBy}
            </p>
          </div>
          <div>
            <span>
              <Image src={signature} alt="signature" className="w-[120px]" />
            </span>
          </div>
        </div>
        <div className="w-[273px] text-neutral-600 text-base font-normal  leading-snug pt-6">
          <p>{data && data[currentSlide].description}</p>
        </div>
        <button className="flex items-center pt-4 gap-3 text-orange-700 text-xs font-normal  uppercase leading-3 tracking-tight ">
          <span className="border-b border-orange-700 border-opacity-20">
            READ MORE
          </span>
          <span>
            <Arrows storke="#BF4D20" />
          </span>
        </button>
        <div className="pt-6">
          <Link href="/invest">
            <button className=" text-orange-700 text-xs font-normal w-full  uppercase leading-3 tracking-tight px-8 py-4 rounded-full border border-orange-700 border-opacity-20 items-center gap-3 flex justify-center">
              INVEST NOW
              <span>
                <Arrows storke="#BF4D20" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CriticsMobile;
