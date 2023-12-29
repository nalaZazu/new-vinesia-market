import React from "react";
import { LinkDinIcon } from "@/assets/icons/Icons";
import Link from "next/link";

export default function OurExpert({item}:{item: any}) {
  return (
    <div>
      <div className="w-[395px] h-[480px] bg-center bg-cover mb-10"
      style={{backgroundImage:'url(/assets/images/'+item.photo+')'}}>
        <div className="flex justify-between px-12 py-8 h-[480px] items-end">
          <div className="flex-col justify-start items-start gap-0.5 inline-flex">
            <p className="text-white text-lg font-semibold font-['Albert Sans'] leading-relaxed">
              {item.name}
            </p>
            <p className="text-white text-xs font-normal font-['Albert Sans'] leading-[18px]">
              {item.position}
            </p>
          </div>
          <Link href={item.linkedin}>
          <div className="w-[42px] p-[11.78px] bg-sky-600 rounded-[10px] justify-start items-center gap-[20.19px] flex">
            <LinkDinIcon />
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
