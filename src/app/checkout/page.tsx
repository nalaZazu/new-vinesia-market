"use client";
import { EditIcon, TickCirIcon } from "@/assets/icons/Icons";
import { CartControls, Checkbox } from "@/common/Components";
import BillingInfo from "@/components/checkout/BillingInfo";
import CartInfo from "@/components/checkout/CheckoutAside";
import EmailInfo from "@/components/checkout/EmailInfo";
import Step1 from "@/components/checkout/Steps/Step1";
import Step2 from "@/components/checkout/Steps/Step2";
import React, { useState } from "react";

export default function Checkout() {
  const [step, setStep] = useState(2);
  return (
    <div className="max-w-[1171px] mx-auto px-4 md:mb-40 mb-20">
      <div className="w-full md:justify-start justify-between items-center md:gap-8 inline-flex sm:pt-[74px] pt-4 pb-4 border-b border-[#A6836C20]">
        <div className="justify-start items-center gap-2 flex">
          <div className="w-8 h-8 justify-center items-center flex">
            <TickCirIcon />
          </div>
          <h1 className="text-[#2F222B] md:text-4xl text-[21px] font-light leading-[44px]">
            Billing information
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

      {step != 3 && (
        <div className="flex justify-between mt-12 ">
          <div className="max-w-[501px] w-full">
            {step == 1 && <Step1 />}
            {step == 2 && <Step2 />}

            <CartControls step={step} setStep={setStep} />
          </div>

          <div className="max-w-[501px] md:block hidden">
            <CartInfo />
          </div>
        </div>
      )}
      {step == 3 && (
        <div className="mt-12 max-w-[560px]  mx-auto">
          <CartInfo />
          <CartControls step={step} setStep={setStep} />
        </div>
      )}
    </div>
  );
}
