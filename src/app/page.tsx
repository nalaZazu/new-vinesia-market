import Image from "next/image";
import React from "react";
import HeroBanner from "../assets/images/herobanner.png";

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-1 custom-bg-image">
        <div className=" container mx-auto flex items-end text-white">
          <div className="">
            <div>
              <p className="text-stone-400 text-xs font-normal uppercase leading-3 tracking-tight pb-7">
                appreciating your wine, guarding its emotions
              </p>
              <p className="text-white text-9xl font-normal ">Marketplace</p>
              <p className="text-stone-400 text-base font-normal leading-snug pt-4 pb-10 w-[470px]">
                Something about technology, advantage of wine investments,
                unique buying and reselling experience
              </p>
              <button className="h-14 px-8 py-[22px] rounded-full border border-white border-opacity-20 justify-center items-center gap-3 inline-flex text-center text-white text-xs font-normal uppercase tracking-tight">
                START EXPLORING
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className=" w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
            <div className=" pt-28 pb-20">
              <p className="pt-4">Peace of Mind pledge</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
