"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import wine from "../../assets/images/critcsimage.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextIcon2, PrevIcon2 } from "../../assets/icons/Icons";
import signature from "../../assets/images/mobilesignature.png";
import alert from "../../assets/icons/alert-circle.svg";

const CriticsMobile = () => {
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
    prevArrow: (
      <div className="mobile_view_slider z-50">
        <div className="text-black h-full w-full flex items-center justify-center rounded-full border border-orange-700">
          <div>
            <PrevIcon2 />
          </div>
        </div>
      </div>
    ),
    nextArrow: (
      <div className="mobile_view_slider  z-50 ">
        <div className=" text-black h-full w-full flex items-center rounded-full border border-orange-700 justify-center">
          <div>
            <NextIcon2 />
          </div>
        </div>
      </div>
    ),
  };
  return (
    <div className="">
      <h2 className="text-critcstext first-letter text-[21px] font-light  leading-[29px] py-8">
        Chateau La Mission Haut Brion Cru Classe 2009
      </h2>
      <div className=" container mx-auto max-w-[928px]">
        <Slider {...sliderSettings} className="critics_carousel z-0">
          {[1, 2, 3, 4, 5]?.map((item: any, i: any) => {
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
            <span>
              <Image
                src={alert}
                alt="Picture of the author"
                quality={75}
                style={{ objectFit: "contain" }}
                className="w-5 h-5"
              />
            </span>
          </h2>
          <span className="text-zinc-800 text-4xl font-normal  leading-[42px] ">
            5/5
          </span>
        </div>

        <div className="flex justify-between items-center py-6 border-b-2 border-stone-400">
          <div>
            <p className="text-stone-500 text-xs font-normal  uppercase leading-3 tracking-tight">
              Critiqued By
            </p>
            <p className="self-stretch text-zinc-800 text-base font-semibold  leading-snug">
              Robert Parker
            </p>
          </div>
          <div>
            <span>
              <Image src={signature} alt="signature" className="w-[120px]" />
            </span>
          </div>
        </div>
        <div className="w-[273px] text-neutral-600 text-base font-normal  leading-snug pt-6">
          <p>
            “This wine blushes in the glass like a tender, rosy dawn, inviting
            the drinker to embrace its delicate hue.
          </p>
        </div>
        <button className="flex items-center pt-4 gap-3 text-orange-700 text-xs font-normal  uppercase leading-3 tracking-tight">
          READ MORE
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </span>
        </button>
        <div className="pt-6">
          <button className=" text-orange-700 text-xs font-normal w-full  uppercase leading-3 tracking-tight px-8 py-4 rounded-full border border-orange-700 border-opacity-20 items-center gap-3 flex justify-center">
            INVEST NOW
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CriticsMobile;
