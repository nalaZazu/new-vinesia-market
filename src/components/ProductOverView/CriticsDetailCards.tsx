import CriticCard from "@/common/CriticCard";
import React from "react";

export default function CriticsDetailCards({reviews}: {reviews?: any[]}) {
  if (reviews === undefined || reviews.length === 0) {
    return <></>
  }

  return (
    <div>
      <div className="container mx-auto mt-12 grid grid-cols-8 p-10 bg-[#FAF5EA]">
        <div className="col-span-2">
          <CriticCard review={reviews[0]} />
        </div>
        <div className="flex justify-center">
          <div className="w-[130.05px] h-[0px] rotate-[102.43deg] border border-orange-700 border-opacity-20 mt-[150px]"></div>
        </div>
        <div className="col-span-2">
          <CriticCard review={reviews[1]} />
        </div>
        <div>
          <div className="w-[130.05px] h-[0px] rotate-[102.43deg] border border-orange-700 border-opacity-20 mt-[150px]"></div>
        </div>
        <div className="col-span-2">
          <CriticCard review={reviews[2]} />
        </div>
      </div>
    </div>
  );
}
