"use client";
import React from "react";
import GiftImg from "@/assets/images/gift_img.png";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextIcon2, PrevIcon2 } from "../../assets/icons/Icons";

export default function GiftSlider() {
  const sliderSettings = {
    // customPaging: function (i) {
    //   return (
    //     <div className="image.dots z-10 w-5 h-5 rounded-full  flx-img-border">
    //      <p></p>
    //     </div>
    //   );
    // },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    autoplaySpeed: 3000,
    centerPadding: "100px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          // slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div>
        <Slider {...sliderSettings} className="subcribe_soon_slider z-0">
          {[1, 2, 3]?.map((item: any, i: any) => {
            return (
              <Image
                key={i}
                src={GiftImg}
                alt="rectangle8589"
                className="w-full h-full"
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
