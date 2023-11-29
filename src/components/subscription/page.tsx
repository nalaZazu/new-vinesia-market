import React from "react";
import Image from "next/image";
import threewinebotel from "../../assets/images/three-Wine-Bottles.png";

export default function Subscription() {
  return (
    <div className="bg-zinc-800">
      <div className=" grid grid-cols-1 md:grid-cols-2 max-w-[1400px] mx-auto">
        <div className=" col-span-1 bg-zinc-800 h-[705px] flex justify-center items-center">
          <div>
            <div className="flex-col gap-2 flex text-center pb-8">
              <h3 className="text-center text-white text-4xl font-light font-['Canela'] leading-[44px]">
                Available soon
              </h3>
              <p className="w-[411px] mx-auto text-center text-zinc-500 text-base font-normal font-['Albert Sans'] leading-snug">
                Soon you will be able to invest in new wines. Sign up for the
                waiting list to get notified.
              </p>
            </div>
            <div className="flex-col gap-2 flex pb-7">
              <div className="self-stretch h-14 flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch grow shrink basis-0 px-6 py-3 rounded-[80px] border border-neutral-600 justify-start items-center inline-flex">
                  <div className="grow shrink basis-0 h-[22px] justify-start items-center gap-1.5 flex">
                    <div className="grow shrink basis-0 text-neutral-600 text-base font-normal font-['Albert Sans'] leading-snug">
                      Enter your email address
                    </div>
                  </div>
                  <div className="justify-start items-start gap-1.5 flex" />
                </div>
              </div>
              <div className="self-stretch px-8 py-[22px] bg-orange-700 rounded-[48px] justify-center items-center gap-3 inline-flex">
                <p className="text-center text-white text-xs font-normal font-['Albert Sans'] uppercase leading-3 tracking-tight">
                  SUBSCRIBE
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="text-white w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>

            <div className="w-[283px] mx-auto text-center">
              <span className="text-zinc-500 text-base font-normal font-['Albert Sans']">
                By submitting your email address you agree to our{" "}
              </span>
              <span className="text-white text-base font-normal font-['Albert Sans']">
                terms & conditions
              </span>
            </div>
          </div>
        </div>
        <div className=" col-span-1">
          <Image
            src={threewinebotel}
            alt="Picture of the author"
            className="h-[705px]"
          />
        </div>
      </div>
    </div>
  );
}
