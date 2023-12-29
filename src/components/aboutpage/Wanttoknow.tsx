import React from "react";
import Image from "next/image";
import { NextIcon } from "@/assets/icons/Icons";
import facebook from "@/assets/icons/facebook.svg";
import Linkdin from "@/assets/icons/linkdeIn.svg";
import marks from "@/assets/icons/TwitterX.svg";
import insta from "@/assets/icons/instagram.svg";
import youtube from "@/assets/icons/youtube.svg";

export default function Wanttoknow() {
  return (
    <div>
      <div className="md:flex md:justify-between max-w-[1040px] items-center mx-auto">
        <p className="w-[174px] text-right text-white text-lg font-semibold leading-relaxed">
          Want to know more?
        </p>
        <div className="justify-start items-center gap-6 flex">
          <button className="w-[301px] px-8 py-[22px] rounded-[48px] text-center text-white text-xs font-normal uppercase leading-[18px] tracking-tight border border-white border-opacity-20 justify-center items-center gap-3 flex">
            Subscribe to our newsletter
            <NextIcon fill={"#fff"} />
          </button>
        </div>
        <div className="hidden md:block h-[60px] origin-top-left rotate-12 border border-stone-500"></div>
        <p className="md:text-right text-white text-center text-lg font-semibold leading-relaxed">
          Or find us on
        </p>
        <div className="flex gap-3">
          <Image src={facebook} alt="" />
          <Image src={Linkdin} alt="" />
          <Image src={marks} alt="" />
          <Image src={insta} alt="" />
          <Image src={youtube} alt="" />
        </div>
      </div>
    </div>
  );
}
