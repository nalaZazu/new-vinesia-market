import React from "react";
import Image from "next/image";
import ourmission from "@/assets/images/about-our-mission.png";

export default function OurMission() {
  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="md:pe-[139px] ">
          <p className="text-zinc-800 text-xs font-normal uppercase leading-[18px] tracking-tight">
            Our
          </p>
          <h2 className="text-zinc-800 text-7xl font-normal leading-[84px]">
            Mission
          </h2>
          <div className="py-8">
            <p className=" text-zinc-800 text-lg font-semibold leading-relaxed pb-6">
              We are the direct bridge between prestigious vineyards and
              investors, coming to life through a truth-based innovative
              investment digital ecosystem.
            </p>
            <p className=" text-neutral-600 text-base font-normal leading-snug">
              Thanks to 30+ years of experience operating in the wine industry,
              we have developed strong and trust-based relationships which grant
              us access to an unmatched portfolio of high quality and sought
              after wines that we source directly from the wine producers.
              <br />
              Here at Vinesia, we own the wines sourced directly from the
              winemakers and you buy them from us. You can then sell them later
              on our marketplace. We never, ever sell wine we do not already
              own. That is part of our transparency pledge.
            </p>
          </div>

          <button className="text-center text-white text-xs font-normal uppercase leading-[18px] tracking-tight px-8 py-4 bg-orange-700 rounded-[48px]">
            Read more
          </button>
        </div>
        <div className="md:pt-0 pt-8">
          <Image className="w-full h-auto" src={ourmission} alt="Transistor" />
        </div>
      </div>
    </div>
  );
}
