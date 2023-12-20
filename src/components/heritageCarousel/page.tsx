"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextIcon, PrevIcon } from "../../assets/icons/Icons";
import ProductCards from "../productCard/page";
import { ProductCardDto } from "@/types/productCard.dto";

export default function HeritageCarousel({items}:{items?: ProductCardDto[]}) {
  const [currentslide, setCurrentSlide] = useState(0);
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
                  currentslide == items?.length
                    ? "border-[#BF4D2020]"
                    : "border-orange-700"
                }`}
              >
                <div>
                  <NextIcon
                    fill={
                      currentslide == items?.length ?? 0 - 2
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
              ? "border-[#BF4D2020] pointer-events-none "
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
            currentslide == items?.length ?? 0 - 1
              ? "border-[#BF4D2020] pointer-events-none disabled"
              : "border-orange-700"
          }`}
        >
          <div>
            <NextIcon
              fill={
                currentslide == items?.length ?? 0 - 1
                  ? "#BF4D2020"
                  : "#BF4D20"
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
          {items?.map((item: any, i: any) => {
            return (
              <div key={i} className="px-4">
                <ProductCards item={item} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
