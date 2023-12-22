import React from "react";
import Image from "next/image";
import pathshape1 from "@/assets/icons/path1.svg";
import pathshape2 from "@/assets/icons/path2.svg";
import pathshape3 from "@/assets/icons/path3.svg";
import { AccordionWineAbout } from "@/components/accordion/page";
import { AccordionSecurity } from "@/constants/accrodion";

export default function PeaceVinesia() {
  return (
    <div>
      {" "}
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-5">
          <div className="flex-col justify-start items-start gap-10 inline-flex">
            <h3 className=" text-zinc-800 text-4xl font-light leading-[44px] tracking-[-0.35px]">
              You don’t need to be a blockchain expert to take advantage of the
              distinctive features it offers.
            </h3>
            <p className="text-neutral-600 text-base font-normal leading-snug">
              Using blockchain is how Vinesia can offer a unique shift from a
              system of trust to a system of truth.
              <br />
              <br />
              You do not have to trust a third party anymore; you have ongoing
              automated audits. The “truth” surrounding your assets is recorded
              on the blockchain.
            </p>
          </div>
        </div>
        <div className="col-span-7">
          <div className="flex justify-center">
            <p className="px-8 py-4 text-center bg-red-900 rounded-[54px] border border-red-900 text-white text-lg font-semibold leading-relaxed">
              Peace of mind
            </p>
          </div>
          <div className="pb-5 flex justify-center relative items-center">
            <Image src={pathshape1} alt="" />
            <Image src={pathshape3} alt="" className="absolute bottom-0 " />
            <Image src={pathshape2} alt="" />
          </div>
          <div className="flex gap-6 pt-2 justify-center">
            <p className="px-6 py-4 rounded-[54px] text-center text-zinc-800 border border-red-900 text-base font-normal leading-snug">
              Proof of ownership
            </p>
            <p className="px-6 py-4 text-center rounded-[54px] text-zinc-800 text-base border border-red-900 font-normal leading-snug">
              Proof of authenticity
            </p>
            <p className="px-6 py-4 rounded-[54px] text-center text-zinc-800 border border-red-900  text-base font-normal leading-snug">
              Proof of storage conditions
            </p>
          </div>
        </div>
      </div>
      {/* Learn more about  */}
      <div className="grid grid-cols-2 gap-10 pt-40">
        <div className="w-[499px]">
          <div className="flex-col justify-start items-start gap-10 inline-flex">
            <h3 className=" text-zinc-800 text-4xl font-light leading-[44px] tracking-[-0.35px]">
              Learn more about Vinesia certificates - see how they provide peace
              of mind for our investors
            </h3>
          </div>
        </div>
        <div>
          <AccordionWineAbout data={AccordionSecurity} />
        </div>
      </div>
    </div>
  );
}
