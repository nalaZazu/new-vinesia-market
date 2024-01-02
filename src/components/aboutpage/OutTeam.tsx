import React from "react";
import Image from "next/image";
import Aboutteam from "@/assets/images/aboutteam.png";
import { LinkDinIcon } from "@/assets/icons/Icons";

export default function OutTeam() {
  return (
    <div>
      <Image src={Aboutteam} alt="" className="pb-6 w-full" />
      <div className="flex justify-between">
        <div>
          <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
            Leslie Alexander
          </p>
          <p className="text-zinc-800 text-xs font-normal leading-[18px]">
            Architect
          </p>
        </div>
        <LinkDinIcon />
      </div>
    </div>
  );
}
