import React from "react";
import warning from "@/assets/icons/Warning Icons.svg";
import Image from "next/image";
import { CartControls } from "@/common/Components";
const PaymentMethod = () => {
  return (
    <React.Fragment>
      <div className="max-w-[1139px] mx-auto px-4 md:mb-40 mb-20">
        <div className="w-full md:justify-start justify-between items-center md:gap-8 inline-flex pt-[74px] pb-4 border-b border-[#A6836C20]">
          <div className="justify-start items-center gap-2 flex">
            <div className="w-8 h-8 justify-center items-center flex"></div>
            <h1 className="text-black text-4xl font-light  leading-[44px] tracking-[-0.36px]">
              01 — Payment method
            </h1>
          </div>
          <div className="grow shrink basis-0 h-[1px] border border-[#ACA7AA] border-dashed md:block hidden"></div>
          <h2 className="text-[#A6836C] text-[21px] font-light leading-[29px] tracking-wide md:block hidden ">
            02 — Finalized
          </h2>
          <div className="w-[65px] justify-start items-center gap-4 inline-flex md:hidden">
            <h2 className="text-[#2F222B] text-[21px] font-light leading-[29px]">
              02
            </h2>
            <h2 className="text-[#A6836C] text-[21px] font-light leading-[29px]">
              03
            </h2>
          </div>
        </div>

        <div className="mt-12 max-w-[607px] mx-auto">
          <div className="  p-6 border-t border-b border-orange-700 border-opacity-20 items-center justify-between   flex">
            <p className=" text-zinc-800 text-lg font-semibold   leading-relaxed">
              {" "}
              1# Chateau La Mission Haut Brion Cru Classe | 2009
            </p>
            <p className="text-zinc-800 text-lg font-semibold  leading-relaxed">
              €1000
            </p>
          </div>
          <div className=" p-6    items-center justify-between   flex">
            <p className=" text-zinc-800 text-lg font-semibold   leading-relaxed">
              {" "}
              Available funds
            </p>
            <p className="text-[#DC2626]  leading-relaxed   text-end  text-lg font-semibold  ">
              €70
            </p>
          </div>
          {/* here is next section  */}
          <div className="pb-10">
            <div className="p-6 mt-12 bg-[#F7EFDF] rounded ">
              <div className="p-4 bg-red-500 bg-opacity-10 rounded-lg justify-start   gap-2 md:items-start  items-baseline  flex">
                <span>
                  <Image src={warning} alt="warning" />
                </span>
                <p>
                  You cannot make a purchase because you currently do not have
                  enough funds. Please top up your wallet first.
                </p>
              </div>
              <div className="flex justify-between pt-6">
                <p className=" text-zinc-800 text-lg font-semibold leading-relaxed">
                  Missing funds
                </p>
                <p className="text-red-600 text-lg font-semibold  leading-relaxed">
                  {" "}
                  - €930
                </p>
              </div>
            </div>
          </div>

          <CartControls />
        </div>
      </div>
    </React.Fragment>
  );
};

export default PaymentMethod;
