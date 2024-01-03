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
 
  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    centerPadding: "20px",
    beforeChange: (current: any, next: any) => setCurrentSlide(next),

  };

  // const CarouselControls = () => {
  //   return (
  //     <div className="flex md:justify-end justify-center gap-4 md:pe-20 pe-0">
  //       <div className="  z-50">
  //         <div
  //           onClick={() => slider?.current?.slickPrev()}
  //           className={`text-black w-16 h-12 flex items-center rounded-full border  justify-center cursor-pointer  ${
  //             currentslide == 0
  //               ? "border-[#BF4D2020] pointer-events-none"
  //               : "border-orange-700"
  //           }`}
  //         >
  //           <div>
  //             <PrevIcon fill={currentslide == 0 ? "#BF4D2020" : "#BF4D20"} />
  //           </div>
  //         </div>
  //       </div>

  //       <div className=" z-50">
  //         <div
  //           onClick={() => slider?.current?.slickNext()}
  //           className={`" text-black w-16 h-12 flex items-center rounded-full border justify-center  cursor-pointer  ${
  //             currentslide == data?.length - 1
  //               ? "border-[#BF4D2020] pointer-events-none disabled"
  //               : "border-orange-700"
  //           }`}
  //         >
  //           <div>
  //             <NextIcon
  //               fill={
  //                 currentslide == data?.length - 1 ? "#BF4D2020" : "#BF4D20"
  //               }
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };
  const handleVideoModal = (video: any) => {
    setVideoLink(video);
    setOpen(true);
  };
  return (
    <React.Fragment>
      <VideoPopup open={open} setOpen={() => setOpen(false)} link={videoLink} />
      <div>
        {/* <Slider
          ref={slider}
          {...sliderSettings}
          className="invest_carousel z-20"
          
        > */}
        <div className="flex justify-center">
          {data?.map((item: any, i: any) => {
            const { video, thumbnails } = item;
            return (
              <div key={i} className="md:px-16 px-4 pt-8">
                <div className="">
                  <div
                    onClick={() => handleVideoModal(video)}
                    className={`text-center cursor-pointer relative max-w-[480px] m-auto h-[246.23px] bg-no-repeat bg-cover ]`}
                  >
                    <Image className="z-50" src={thumbnails} alt="thumbnails" width={480} height={0} />
                    <div className="">
                      {/* absolute bottom-24 -left-6 */}
                      <div className="inline-block w-[121px] h-[0px] mt-[0px] border border-orange-700"></div>
                      <p className="text-white text-lg leading-relaxed">
                        {item.label}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
          </div>
        {/* </Slider> */}
        {/* <div className="md:hidden block">
          <CarouselControls />
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default AboutSlider;
