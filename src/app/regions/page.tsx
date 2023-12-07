import Image from "next/image";
import React from "react";
import Card from "@/components/card/page";
import lineregion from "@/assets/icons/lineregion.svg";

export default function Regions() {
  return (
    <div>
      <div className="container mx-auto pt-14 px-4 md:px-0">
        <h1 className="text-zinc-800 md:text-[144px] text-6xl font-normal">
          Regions
        </h1>
        <div className="underline decoration-wavy py-8">
          <Image src={lineregion} />
        </div>
        <Card />
      </div>
    </div>
  );
}
