"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Arrows,
  NextIcon,
  NextIcon2,
  PrevIcon,
  PrevIcon2,
} from "@/assets/icons/Icons";
import Image from "next/image";
import shareIcon from "@/assets/icons/share.svg";
import { VideoSlider } from "@/constants/videoslider";
import Link from "next/link";
import VideoPopup from "@/components/videoPopup/page";
const AboutSlider = ({ data = VideoSlider }: { data?: any }) => {
  const [currentslide, setCurrentSlide] = useState(0);
  const [open, setOpen] = useState(false);
  const [videoLink, setVideoLink] = useState(null);
  const slider = useRef<any>();

  const sliderSettings = {
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
  };

  const CarouselControls = () => {
    return (
      <div className="flex md:justify-end justify-center gap-4 md:pe-20 pe-0">
        <div className="  z-50">
          <div
            onClick={() => slider?.current?.slickPrev()}
            className={`text-black w-16 h-12 flex items-center rounded-full border  justify-center cursor-pointer  ${
              currentslide == 0
                ? "border-[#BF4D2020] pointer-events-none"
                : "border-orange-700"
            }`}
          >
            <div>
              <PrevIcon fill={currentslide == 0 ? "#BF4D2020" : "#BF4D20"} />
            </div>
          </div>
        </div>

        <div className=" z-50">
          <div
            onClick={() => slider?.current?.slickNext()}
            className={`" text-black w-16 h-12 flex items-center rounded-full border justify-center  cursor-pointer  ${
              currentslide == data?.length - 1
                ? "border-[#BF4D2020] pointer-events-none disabled"
                : "border-orange-700"
            }`}
          >
            <div>
              <NextIcon
                fill={
                  currentslide == data?.length - 1 ? "#BF4D2020" : "#BF4D20"
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  const handleVideoModal = (video: any) => {
    setVideoLink(video);
    setOpen(true);
  };
  return (
    <React.Fragment>
      <VideoPopup open={open} setOpen={() => setOpen(false)} link={videoLink} />
      <div>
        <div className="flex justify-between">
          <Link href="/invest" className="z-20">
            <button className="  px-8 py-[22px]  cursor-pointer  rounded-[48px] border border-white border-opacity-20 justify-center items-center gap-3 inline-flex   text-center text-white text-xs font-normal   uppercase leading-3 tracking-tight">
              START INVESTING NOW
              <Arrows storke="#FFFFFF" />
            </button>
          </Link>

          <div className="hidden md:block">
            <CarouselControls />
          </div>
        </div>
        <Slider
          ref={slider}
          {...sliderSettings}
          className="invest_carousel z-20"
        >
          {data?.map((item: any, i: any) => {
            const { video } = item;
            return (
              <div key={i} className="md:px-8 px-4 pt-8">
                <div className="">
                  <div
                    onClick={() => handleVideoModal(video)}
                    className=" cursor-pointer relative h-[246.23px]  bg-no-repeat bg-center md:bg-[url('https://i.ibb.co/LCb3y9J/slider-Image.png')]  bg-[url('https://i.ibb.co/MnXJPpn/01-Images.png')] "
                  >
                    {/* <Image src={sliderabout} alt="image" /> */}
                    <div className="absolute md:bottom-7 md:-left-6   bottom-12 -left-0">
                      {/* absolute bottom-24 -left-6 */}
                      <div className="max-w-[121px] h-[0px] border border-orange-700 my-5"></div>
                      <p className="text-white text-lg font-semibold  leading-relaxed">
                        {item.label}
                      </p>
                    </div>
                  </div>
                  <div className="pt-[15px] flex justify-end gap-4 items-center">
                    <p className="text-white text-[13px] font-normal   uppercase tracking-tight">
                      share
                    </p>
                    <Image src={shareIcon} alt="shareicon" />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        <div className="md:hidden block">
          <CarouselControls />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutSlider;
