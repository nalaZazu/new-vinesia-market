import Image from "next/image";
import React from "react";
import videoplay from "@/assets/images/winevideobutton.svg";

export default function TestimonialsSection() {
  return (
    <div>
      <div className="grid md:grid-cols-12 gap-8">
        <div className="col-span-5 flex flex-col justify-end items-end ">
          <h3 className="max-w-[499px] text-center text-zinc-800 text-4xl font-light leading-[44px] pb-12">
            Why fine wine is a unique investment asset class
          </h3>
          <div className="max-w-[501px] h-[299px] bg-red-800 pt-14 pl-12 md:pe-11 pb-10 relative">
            <h1 className="text-center text-red-400 text-[144px] font-normal absolute top-0 leading-[90px]">
              “
            </h1>
            <div>
              <p className="text-rose-200 text-base font-normal leading-snug">
                “Buying shares in a company is risky: management can fail,
                reputations can be damaged, and competitors can disrupt its
                entire business model.
                <br />
                <br />
                Wine, on the other hand, is blissfully simple. Once bottled and
                reviewed by critics, you already know enough to significantly
                minimise your risk.
              </p>
              <br />
              <p className="text-rose-200 text-lg font-semibold leading-relaxed">
                Jason Zweig
              </p>
            </div>
            <h1 className="text-end text-red-400 text-[144px] font-normal">
              <span className="rotate-180 absolute right-10 -bottom-16">“</span>
            </h1>
          </div>
        </div>

        <div className="col-span-7 w-full md:h-[480px]  h-[480px] bg-no-repeat bg-cover bg-center bg-[url('/assets/images/security.png')] relative">
          <div className="h-[480px] justify-center mx-auto items-center gap-8 flex flex-wrap md:px-0 px-4">

          </div>
        </div>
      </div>
    </div>
  );
}
