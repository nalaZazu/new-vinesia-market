import Image from "next/image";
import React from "react";
import { DecentrIcon, DocIcon, DocVerifyIcon } from "@/assets/icons/Icons";


export default function Benifits() {
  return (
    <div>
      <div className="grid sm:grid-cols-3 grid-cols-1 font-albertsans gap-10 md:gap-[136px] justify-start px-5 w-auto md:w-full">
        <div className="flex flex-col gap-[22px] items-start justify-start w-auto">
          <div className="flex flex-col items-start justify-start w-16">
            <span className="flex h-16 items-center justify-center w-16 p-5 bg-[#28475C] rounded-full">
              <DecentrIcon />
            </span>
          </div>
          <p className="font-semibold leading-[26.00px] max-w-[183px] md:max-w-full text-[#2F222B] text-lg tracking-[-0.36px]">
            Decentralized and immutable data
          </p>
        </div>
        <div className="flex flex-col gap-[22px] items-start justify-start w-auto">
          <div className="flex flex-col items-start justify-start w-16">
            <span className="flex h-16 items-center justify-center w-16 bg-[#28475C] p-5 rounded-full">
              <DocIcon />
            </span>
          </div>
          <p className="font-semibold leading-[26.00px] max-w-[183px] md:max-w-full text-[#2F222B] text-lg tracking-[-0.36px]">
            Full history of asset in real-time
          </p>
        </div>
        <div className="flex flex-col gap-[22px] items-start justify-start w-auto">
          <div className="flex flex-col items-start justify-start w-16">
            <span className="flex h-16 items-center justify-center w-16 bg-[#28475C] p-5 rounded-full">
              <DocVerifyIcon />
            </span>
          </div>
          <p className="font-semibold leading-[26.00px] max-w-[183px] md:max-w-full  text-[#2F222B] text-lg tracking-[-0.36px]">
            360° verifiable asset integrity
          </p>
        </div>
      </div>
    </div>
  );
}