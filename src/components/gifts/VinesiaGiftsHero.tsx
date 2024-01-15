import Image from "next/image";
import React from "react";
import heroBg from "@/assets/images/gift_hero_bg.png";

const VinesiaGiftsHero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full">
        <div className="flex h-[800px] md:h-[834px] justify-end relative w-full">
          <Image
            // width="900"
            className="h-[834px] mt-auto mx-auto object-cover w-full"
            src={heroBg}
            alt="image137"
          />
          <div className="absolute md:bottom-[15%] bottom-[30%] flex flex-col items-center justify-start left-[6%] w-auto">
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                  <h3 className="font-Canela font-light text-2xl md:text-3xl sm:text-[32px] md:text-[36px] text-center text-white tracking-[-0.36px] w-auto">
                    An investment for today
                  </h3>
                  <h3 className="font-Canela md:max-w-[1100px] max-w-full flex flex-col text-white text-7xl md:text-[144px] font-normal md:leading-[144px] leading-[80px] md:tracking-[-2.88px]">
                    A legacy for tomorrow
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VinesiaGiftsHero;
