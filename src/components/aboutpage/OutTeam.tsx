import React from "react";
import Image from "next/image";
import Aboutteam from "@/assets/images/aboutteam.png";
import { LinkDinIcon } from "@/assets/icons/Icons";
import Link from "next/link";

export default function OutTeam({item}:{item:any}) {
  if (item === undefined) {
    return <></>
  }
  return (
    <div>
      <div className="rounded overflow-hidden w-[352px] h-[352px]">
      <img src={"assets/images/"+item.photo} width={352} height={0} alt="" className="pb-6 rounded-t-full" />
      </div>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
            {item.name}
          </p>
          <p className="text-zinc-800 text-xs font-normal leading-[18px]">
            {item.position}
          </p>
        </div>
        <Link href={item.linkedin}>
        <LinkDinIcon />
        </Link>
      </div>
    </div>
  );
}
