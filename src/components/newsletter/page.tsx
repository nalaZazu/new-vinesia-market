"use client";
import Image from "next/image";
import React from "react";
import graps from "../../assets/images/newslettergraps.png";

export default function Newsletter() {
  return (
    <div className=" py-40 newsletter_banner flex justify-center">
      <div className="w-[534px] h-[534px] bg-[#7D302E99]  rounded-full  flex justify-center items-center">
        <div>
          <div className="flex justify-center mb-6">
            <Image src={graps} alt="" className="w-[46.40px] h-[75px] " />
          </div>
          <div className="flex-col justify-start items-center gap-3 flex">
            <h3 className="text-center text-orange-100 text-4xl font-light  leading-[44px]">
              Be the first to know
            </h3>
            <p className="text-center text-orange-100 text-base font-normal  leading-snug pb-10">
              Join Vinesia Newsletter and ... benefits
            </p>
          </div>
          <div className="flex-col justify-start items-center gap-4 flex relative">
            <div className="w-[370px] h-16 relative bg-orange-50 rounded-[57px] border border-white">
              <input
                placeholder="Enter your email"
                className="left-0 w-2/3 outline-slate-200 p-3 border-0 top-0 rounded-s-full h-full absolute text-stone-400 text-base font-normal  leading-snug bg-transparent"
              ></input>
              <button className="text-center text-white text-xs font-normal  uppercase leading-3 tracking-tight w-[131px] h-14 px-8 py-[22px] left-[233px] top-[4.09px] absolute bg-orange-700 rounded-[48px] justify-center items-center gap-3 inline-flex">
                SUBSCRIBE
              </button>
            </div>
            <div className="w-[289px] text-center text-red-400 text-base font-normal  leading-snug">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
