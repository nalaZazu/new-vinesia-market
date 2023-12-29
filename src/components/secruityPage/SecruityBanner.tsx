import Image from "next/image";
import React from "react";
import videoplay from "@/assets/images/winevideobutton.svg";

export default function SecruityBanner() {
  return (
    <div>
      {" "}
      <div className="grid md:grid-cols-12 md:gap-8">
        <div className="col-span-5">
          <p className="text-orange-700 text-xs font-normal uppercase leading-[18px] tracking-tight pb-7">
            Security
          </p>
          <h2 className="text-zinc-800 md:text-7xl text-5xl font-normal md:leading-[84px] md:tracking-[-1.44px] pb-6">
            Shifting from a system of trust to a system of truth
          </h2>
          <p className="max-w-[373px] text-neutral-600 text-base font-normal font-['Albert Sans'] leading-snug">
            With the help of blockchain technology, Vinesia revolutionized wine
            investing and security with our Peace of Mind pledge.
          </p>
        </div>
        <div className="col-span-7">
          <div className="w-full md:h-[460px] h-[480px] bg-no-repeat bg-cover bg-center bg-[url('https://i.ibb.co/1z06641/security.png')] relative">

          </div>
        </div>
      </div>
    </div>
  );
}
