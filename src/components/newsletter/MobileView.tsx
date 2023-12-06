"use client";
import Image from "next/image";
import React from "react";
import graps from "../../assets/images/newslettergraps.png";

export default function NewsletterMobile() {
  return (
    <div className=" bg-red-900 backdrop-blur-[20px] h-[571.75px] flex justify-center items-center">
      <div className="px-4 md:px-0">
        <div className="flex justify-center">
          <Image src={graps} alt="" className="w-16 h-[103.44px] " />
        </div>
        <div className="flex-col gap-2 flex text-center pb-8">
          <h3 className="text-center text-white text-xl font-light  leading-[29px]">
            Be the first to know
          </h3>
          <p className="text-center text-white text-base font-normal  leading-snug">
            Soon you will be able to invest in new wines. Sign up for the
            waiting list to get notified.
          </p>
        </div>
        <div className="flex-col gap-2 flex pb-7">
          <input
            className="h-14 grow shrink basis-0 px-6 py-[22px] rounded-[80px] border border-neutral-600 justify-start items-center flex"
            placeholder="Enter your email"
          >
            {/* <input
              type="text"
              id="first_name"
              className=" bg-transparent text-white text-opacity-40 text-base font-normal  leading-snug"
              placeholder="Enter your email"
              required
            /> */}
          </input>
          <button className="self-stretch px-8 py-[22px] bg-orange-700 rounded-[48px] justify-center items-center gap-3 inline-flex">
            <p className="text-center text-white text-xs font-normal  uppercase leading-3 tracking-tight">
              SUBSCRIBE
            </p>
          </button>
        </div>

        <div className="max-w-[283px] mx-auto text-center">
          <span className="text-center text-red-400 text-base font-normal  leading-snug">
            By submitting your email address you agree to our{" "}
          </span>
          <span className="text-center text-red-400 text-base font-normal  leading-snug">
            terms & conditions
          </span>
        </div>
      </div>
    </div>
  );
}
