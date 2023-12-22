import React from "react";
import Image from "next/image";
import selected from "@/assets/images/selected-our-collection.png";

export default function BlogsCollection() {
  return (
    <div>
      {" "}
      <div className="flex-col gap-10 inline-flex">
        <Image src={selected} alt="" />
        <div className="grow shrink basis-0 flex-col gap-[74px] flex">
          <div className="flex-col gap-6 flex">
            <h3 className=" text-black text-4xl font-light leading-[44px]">
              Opus One
            </h3>
            <p className="  text-black text-base font-normal leading-snug">
              The vineyards are located in Oakville. These are alluvial soils,
              the very soils that give the Cabernet Sauvignon grape what it
              takes to thrive. 
            </p>
          </div>
          <div className=" flex-col justify-start items-start gap-6 flex">
            <div>
              <span className="text-black text-lg font-semibold leading-relaxed">
                Country,
              </span>
              <span className="text-black text-base font-normal leading-snug">
                Region, Appellation
              </span>
            </div>
            <button className="px-8 py-2 bg-orange-700 rounded-[48px] text-center text-white text-xs font-normal uppercase leading-[18px] tracking-tight">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
