"use client";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextIcon, NextIcon2, PrevIcon } from "../../assets/icons/Icons";
import winebotel1 from "../../assets/images/winebotel1.png";
import Art from "../../assets/images/arat.png";
import ProductCards from "../productCard/page";

export default function HeritageCarousel() {
  const [currentslide, setCurrentSlide] = useState(0);
  const slideData = [0, 1, 2, 3, 4, 5, 6, 8, 9];
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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    centerPadding: "20px",
    beforeChange: (current: any, next: any) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
          nextArrow: (
            <div className="productcarousel  z-50">
              <div
                className={`" text-black w-16 h-12 flex items-center rounded-full border justify-center   ${
                  currentslide == slideData?.length
                    ? "border-[#BF4D2020]"
                    : "border-orange-700"
                }`}
              >
                <div>
                  <NextIcon
                    fill={
                      currentslide == slideData?.length - 2
                        ? "#BF4D2020"
                        : "#BF4D20"
                    }
                  />
                </div>
              </div>
            </div>
          ),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: (
      <div className=" productcarousel z-50">
        <div
          className={`text-black w-16 h-12 flex items-center rounded-full border  justify-center  ${
            currentslide == 0
              ? "border-[#BF4D2020] pointer-events-none                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     "
              : "border-orange-700"
          }`}
        >
          <div>
            <PrevIcon fill={currentslide == 0 ? "#BF4D2020" : "#BF4D20"} />
          </div>
        </div>
      </div>
    ),
    nextArrow: (
      <div className="productcarousel  z-50">
        <div
          className={`" text-black w-16 h-12 flex items-center rounded-full border justify-center   ${
            currentslide == slideData?.length - 1
              ? "border-[#BF4D2020] pointer-events-none disabled"
              : "border-orange-700"
          }`}
        >
          <div>
            <NextIcon
              fill={
                currentslide == slideData?.length - 1 ? "#BF4D2020" : "#BF4D20"
              }
            />
          </div>
        </div>
      </div>
    ),
  };
  return (
    <div>
      <div className=" container mx-auto lg:max-w-[928px] md:max-w-[600px]">
        <Slider {...sliderSettings} className="invest_carousel z-0">
          {slideData?.map((item: any, i: any) => {
            return (
              <div key={i} className="px-4">
                <ProductCards />
              </div>
              // <div
              //   key={i}
              //   className="card_shape_slider relative flex  justify-end mx-auto"
              // >
              //   <div className="h-[674px] left-0">
              //     <div className="flex justify-center">
              //       <Image src={winebotel1} alt="Picture of the author" />
              //     </div>
              //     <div className="flex flex-col items-center gap-6 pt-10">
              //       <div className="justify-start items-start gap-2 inline-flex">
              //         <div className="p-2 h-9 bg-zinc-800 rounded-[30px] border flex justify-end items-center gap-1.5">
              //           <Image src={Art} alt="Picture of the author" />
              //           <p className="text-center text-white text-xs font-normal uppercase leading-3 tracking-tight">
              //             ARTWORK
              //           </p>
              //         </div>
              //         <div className="p-2 h-9 bg-green-500 rounded-[30px] border flex justify-start items-center gap-1.5">
              //           <div className=" w-2 h-2 bg-white rounded-full" />
              //           <p className="text-center text-white text-xs font-normal uppercase leading-3 tracking-tight">
              //             Available
              //           </p>
              //         </div>
              //       </div>
              //       <div className="flex-col items-center gap-4 flex">
              //         <h3 className="w-[243px] text-center text-zinc-800 text-xl font-light  leading-[29px] tracking-wide">
              //           Brunello di Montalcino {`"Piaggione"`} | Winery name |
              //           2019
              //         </h3>
              //         <p className="text-neutral-600 text-base font-normal  leading-snug">
              //           OWC 6 x 0,75 cl + Artwork
              //         </p>
              //       </div>
              //     </div>
              //     <div className="w-60 mx-auto flex justify-between items-center pt-8">
              //       <div className="flex-col justify-center items-center gap-2 inline-flex">
              //         <div className="text-stone-500 text-xs font-normal  uppercase leading-3 tracking-tight">
              //           EST. PRICE
              //         </div>
              //         <div className="text-zinc-800 text-xl font-light  leading-[29px] tracking-wide">
              //           €38,600
              //         </div>
              //       </div>
              //       <div className="flex-col justify-center items-center gap-2 inline-flex">
              //         <div className="text-center text-stone-500 text-xs font-normal  uppercase leading-3 tracking-tight">
              //           FLoor PRICE
              //         </div>
              //         <div className="text-zinc-800 text-xl font-light  leading-[29px] tracking-wide">
              //           ---
              //         </div>
              //       </div>
              //     </div>
              //   </div>
              //   <div className="flex-col justify-start items-center gap-4 flex absolute left-0 right-0 bottom-10">
              //     <button className="px-8 py-5 bg-orange-700 rounded-full justify-center items-center gap-3 inline-flex text-center text-white text-xs font-normal uppercase leading-3 tracking-tight">
              //       SEE OVERVIEW
              //     </button>
              //     <div className="text-center">
              //       <span className="text-neutral-600 text-base font-normal leading-snug">
              //         50 Bottles
              //       </span>
              //       <span className="text-stone-300 text-base font-normal leading-snug">
              //         /
              //       </span>
              //       <span className="text-red-700 text-base font-normal leading-snug">
              //         14 Remaining
              //       </span>
              //     </div>
              //   </div>
              // </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
