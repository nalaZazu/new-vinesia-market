import { InfoIcon } from "@/assets/icons/Icons";
import React from "react";

export default function InfoTooltip({
  fill = "#BF4D20",
  icon = <InfoIcon fill={fill} />,
}: {
  fill?: any;
  icon?: any;
}) {
  return (
    <>
      <span className="group relative">
        {/* <InfoIcon fill={fill} /> */}
        {icon}
        <div className=" hidden group-hover:block absolute w-40 px-4 py-3 mb-7  text-white bg-white shadow-md border rounded-lg z-10 top-[-125px] -translate-x-[47%]">
          <span className="inline-block text-xs text-center font-normal leading-tight text-[#141619]  tracking-wide ">
            A quick explanation of the technology used here and how it differs
            from the {`"old word"`}. BLE explanation.
          </span>
          <span
            className="absolute bottom-0 right-0 w-2 h-2 -mb-1 transform rotate-45 bg-white z-0"
            style={{ left: "50%" }}
          ></span>
        </div>
      </span>
    </>
  );
}
