"use client";
import { Arrows } from "@/assets/icons/Icons";
import React from "react";

export default function NewslettersTwo() {
  return (
    <div className=" md:py-40  py-20 flex md:justify-around   flex-wrap ">
      <div className="w-[534px] h-[534px] bg-[#7D302E]  md:rounded-full  rounded-none flex justify-center items-center">
        <div>
          <div className="flex-col justify-start items-center gap-3 flex">
            <h3 className="text-center text-orange-100 text-4xl font-light  leading-[44px]">
              Be the first to know
            </h3>
            <p className="text-center text-orange-100 text-base font-normal  leading-snug pb-10">
              Join our newsletter and stay up to date with the latest releases and developments at Vinesia
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
      {/* <div className="w-[534px] h-[534px] bg-[#28475C]  md:rounded-full rounded-none  flex justify-center items-center">
        <div className="text-center">
          <div className="flex-col justify-start items-center gap-3 flex pb-6">
            <h3 className="text-center text-[#D4DADE] text-4xl font-light max-w-[360px]  leading-[44px]">
              Fancy discussing wine with our community?
            </h3>
            <p className=" text-center text-[#D4DADE] text-base font-normal max-w-[360px]  leading-snug pt-4">
              Join our {`investor's`} community and talk about investment
              opportunities, ask questions or discuss anything wine-related!
            </p>
          </div>
          <button className="px-8 py-4 bg-white rounded-full justify-center items-center gap-3 inline-flex  text-orange-700 text-xs font-normal   uppercase leading-[18px] tracking-tight">
            Join the community{" "}
            <span>
              <Arrows storke=" #BF4D20" />
            </span>
          </button>
        </div>
      </div> */}
    </div>
  );
}
