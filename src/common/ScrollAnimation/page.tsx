import { MarksAnim } from "@/assets/icons/Icons";
import React from "react";

const ScrollAnimation = () => {
  return (
    <React.Fragment>
      {/* animation  component  */}
      <div className="p-16 flex justify-center mx-auto items-center gap-16">
        <div className=" border-b-2 h-0 w-full border-[#CB220D] border-opacity-10"></div>
        <MarksAnim fill="#CB220D" />
        <div className="border-b-2 h-0 w-full border-[#CB220D]  border-opacity-10"></div>
      </div>
    </React.Fragment>
  );
};

export default ScrollAnimation;
