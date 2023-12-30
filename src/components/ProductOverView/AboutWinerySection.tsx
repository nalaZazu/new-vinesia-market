import Image from "next/image";
import React, { useState } from "react";
import FranceMap from "@/assets/images/FranceMap.svg";
import Franceimage from "@/assets/images/franceimage.png";
export default function AboutWinerySection({data}: {data?: any}) {

  const [sections, ] = useState(data?.description.replace('\n\n', '\n').replace('\n\n', '\n').replace('\n\n', '\n').split('\n'))

  return (
    <div className="py-40">
      <section className="pb-32">
        <div className="container mx-auto  max-w-[1248px]">
          <div className="items-center grid grid-col-1 md:grid-cols-5 lg:grid-cols-5 mx-auto">
            <div className=" col-span-3">
              <span className=" text-stone-500 text-xs font-normal uppercase leading-3 tracking-tight">
                About
              </span>
              <h2 className="max-w-[535px] text-7xl text-zinc-800  font-normal  leading-[84px] pb-12">
                {data?.name}
              </h2>
              <p>
                <span className="font-semibold">{data?.region.name},</span> {data?.region?.country?.name}
              </p>
              <p className="max-w-[608px] text-zinc-800 text-base font-normal leading-snug pt-2 pb-8 whitespace-pre-line">
                {sections[0]}
              </p>
              <p className="max-w-[608px] text-zinc-800 text-base font-normal leading-snug">
                {sections[1]}
              </p>
            </div>
            <div className="col-span-2">
              <Image
                src={FranceMap}
                alt="Picture of the author"
                className="w-full max-h-[476px] mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-10">
        <div className="container mx-auto max-w-[1248px]">
          <div className="gap-10 items-center grid grid-col-1  md:grid-cols-5 lg:grid-cols-5 mx-auto py-8">
            <div className=" col-span-3">
              <Image
                src={Franceimage}
                alt="Picture of the author"
                className="w-full max-h-[314px]"
              />
            </div>
            <div className="col-span-2">
              <p className="text-zinc-800 text-base font-normal leading-snug pb-12">
                {sections[2]}
              </p>
              <p className="text-zinc-800 text-base font-normal leading-snug">
                {sections[3]}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
