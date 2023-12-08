import CriticCard from "@/common/CriticCard";
import React from "react";

export default function CriticsDetailCards() {
  return (
    <div>
      <div className="container mx-auto mt-12 items-center grid grid-cols-8 p-10 bg-[#FAF5EA]">
        <div className="col-span-2">
          <CriticCard />
        </div>
        <div className="flex justify-center">
          <div className="w-[130.05px] h-[0px] rotate-[102.43deg] border border-orange-700 border-opacity-20"></div>
        </div>
        <div className="col-span-2">
          <CriticCard />
        </div>
        <div>
          <div className="w-[130.05px] h-[0px] rotate-[102.43deg] border border-orange-700 border-opacity-20"></div>
        </div>
        <div className="col-span-2">
          <CriticCard />
        </div>
      </div>
    </div>
  );
}
