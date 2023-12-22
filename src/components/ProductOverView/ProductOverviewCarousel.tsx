import Image from "next/image";
import React from "react";
import big from "../../assets/images/big.png";
import big1 from "../../assets/images/big1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextIcon2, PrevIcon2 } from "@/assets/icons/Icons";
export default function ProductOverviewCarousel({data}: {data?: string[]}) {
  if (data === undefined || data.length === 0) {
    return <></>
  }

  const sliderSettings = {
    customPaging: function () {
      return (
        <div className="imagedots z-0 flx-img-border absolute top-0 buttom-0">
          <Image src={`http://localhost:3010/products/file/${data[0]}`} height={0} width={340} alt="" />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
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
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
    prevArrow: (
      <div className=" productcarousel z-50">
        <div className=" bg-rose-200 h-20 text-secondary w-6 text-center flex items-center absolute lg:top-[230px] lg:left-[100px] md:top-[215px] md:left-[0px] top-[0px] left-[0px] ">
          <div className="">
            <PrevIcon2 />
          </div>
        </div>
      </div>
    ),
    nextArrow: (
      <div className="productcarousel  z-50 ">
        <div className="text-secondary h-20 w-6 text-center flex items-center absolute lg:top-[230px] lg:right-[100px] md:top-[215px] md:right-[345px] top-[0px] right-[0px]">
          <div className="">
            <NextIcon2 />
          </div>
        </div>
      </div>
    ),
  };
  return (
    <div>
      <Slider {...sliderSettings} className="product_slider z-0">
        {data?.map((item: any, i: any) => {
          return (
            <div key={i}>
              <div
                key={i}
                className="flex justify-center items-center md:pb-20 pb-10"
              >
                <div className="relative">
                  <Image
                    src={`http://localhost:3010/products/file/${item}`}
                    width={340}
                    height={0} 
                    sizes="100vw"
                    alt="Picture of the author"
                    className=" z-0 px-5 h-[500px] w-auto"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
