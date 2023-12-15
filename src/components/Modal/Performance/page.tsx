import { Arrows, LineDot } from "@/assets/icons/Icons";
import Appactivity from "@/components/charts/page";
import React from "react";

const PerformanceModel = () => {
  return (
    <React.Fragment>
      {/* here is chart  */}
      <div className="pb-8">
        <div className="bg-white p-4">
          <h5 className="text-zinc-800 text-lg font-semibold  text-start leading-relaxed pb-6 tacking-[-0.36px]">
            Performance of investment portfolio with fine wine in comparison to
            baseline
          </h5>
          <div className="bg-orange-100 h-64">
            <div className="">
            <Appactivity/>
              {/* <ul className="flex md:justify-end justify-start flex-wrap gap-4">
                <li className="flex items-center">
                  <LineDot storke="#28475C" />
                  Baseline
                </li>
                <li className="flex items-center">
                  {" "}
                  <LineDot storke="#CB220D" /> Portofolio performace
                </li>
              </ul> */}
            </div>
          </div>
          {/* HERE IS NUMBER DEFINED  */}
          {/* <ul className="flex justify-between text-zinc-800 text-base font-normal   leading-snug">
            <li>2005</li>
            <li>2010</li>
            <li>2015</li>
            <li>2020</li>
            <li>2023</li>
          </ul> */}
        </div>
      </div>

    
    </React.Fragment>
  );
};

export default PerformanceModel;
