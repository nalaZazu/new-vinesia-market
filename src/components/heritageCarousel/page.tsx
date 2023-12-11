"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextIcon2, PrevIcon2 } from "../../assets/icons/Icons";
import winebotel1 from "../../assets/images/winebotel1.png";
import Art from "../../assets/images/arat.png";
import ProductCards from "../productCard/page";

export default function HeritageCarousel() {
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
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
        <div className="text-black w-16 h-12 flex items-center rounded-full border border-orange-700 justify-center">
          <div>
            <PrevIcon2 />
          </div>
        </div>
      </div>
    ),
    nextArrow: (
      <div className="productcarousel  z-50">
        <div className=" text-black w-16 h-12 flex items-center rounded-full border border-orange-700 justify-center">
          <div>
            <NextIcon2 />
          </div>
        </div>
      </div>
    ),
  };
  return (
    <div>
      <div className=" container mx-auto lg:max-w-[928px] md:max-w-[600px]">
        <Slider {...sliderSettings} className="invest_carousel z-0">
          {[1, 2, 3, 4, 5]?.map((item: any, i: any) => {
            return (
              <div key={i} className="px-4">
                <ProductCards />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
