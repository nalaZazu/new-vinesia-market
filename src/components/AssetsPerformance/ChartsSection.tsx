import React from "react";
import Image from "next/image";
import performance_image140 from "@/assets/images/performance_image140.png";
import performance_image141 from "@/assets/images/performance_image141.png";
export default function ChartsSection() {
  return (
    <div>
      <h3 className="text-white text-4xl font-light leading-[44px] pb-6">
        10 years. 120% increase.
      </h3>
      <div className="grid grid-cols-2 gap-8">
        <p className="max-w-[608px] text-[#eaa79e] text-base font-normal leading-snug tracking-[-0.32px]">
          That’s been the history of fine wine as an asset. While investing in
          wine carries risks, just like other investments,  history proves it
          has the potential for substantially high returns.
        </p>
        <p className="max-w-[608px] text-[#eaa79e] text-base font-normal leading-snug tracking-[-0.32px]">
          Fine wine value grows over time as it matures and becomes rarer. It
          has shown consistent positive performance over long periods and is
          resilient during economic downturns. That has been the historical
          performance of fine wine as an asset class (2010-2020).
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 pt-10">
        <div className="bg-[#F9F5EB]">
          <Image src={performance_image140} alt="returns"/>
        </div>

        <div className="bg-[#F9F5EB]">
          <Image src={performance_image141} className="w-full" alt="returns"/>
        </div>
      </div>
    </div>
  );
}
