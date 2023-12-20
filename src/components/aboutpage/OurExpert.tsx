import React from "react";
import { LinkDinIcon } from "@/assets/icons/Icons";

export default function OurExpert() {
  return (
    <div>
      <div className="w-[395px] h-[680px] bg-[url('https://i.ibb.co/X3gZqdn/henry.png')] ">
        <div className="flex justify-between px-12 py-8 h-[680px] items-end">
          <div className="flex-col justify-start items-start gap-0.5 inline-flex">
            <p className="text-white text-lg font-semibold font-['Albert Sans'] leading-relaxed">
              Henry, Arthur
            </p>
            <p className="text-white text-xs font-normal font-['Albert Sans'] leading-[18px]">
              Chief Executive Officer
            </p>
          </div>
          <div className="w-[42px] p-[11.78px] bg-sky-600 rounded-[10px] justify-start items-center gap-[20.19px] flex">
            <LinkDinIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
