import Image from "next/image";
import React from "react";
import videoplay from "@/assets/images/winevideobutton.svg";

export default function SecruityBanner() {
  return (
    <div>
      {" "}
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-5">
          <p className="text-orange-700 text-xs font-normal uppercase leading-[18px] tracking-tight pb-7">
            Security
          </p>
          <h2 className="text-zinc-800 text-7xl font-normal leading-[84px] tracking-[-1.44px] pb-6">
            Shifting from a system of trust to a system of truth
          </h2>
          <p className="max-w-[373px] text-neutral-600 text-base font-normal font-['Albert Sans'] leading-snug">
            With the help of blockchain technology, Vinesia revolutionized wine
            investing and security with our Peace of Mind pledge.
          </p>
        </div>
        <div className="col-span-7">
          <div className="w-full md:h-[460px] h-[480px] bg-no-repeat bg-cover bg-center bg-[url('https://i.ibb.co/1z06641/security.png')] relative">
            <div className="flex justify-center items-center w-full md:h-[460px] h-[480px] text-center">
              <div>
                <div>
                  <Image
                    src={videoplay}
                    alt=""
                    className="max-w-[124.04px] mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}