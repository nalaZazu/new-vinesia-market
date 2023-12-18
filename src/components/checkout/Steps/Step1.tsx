import React from "react";
import BillingInfo from "../BillingInfo";
import EmailInfo from "../EmailInfo";
import { Checkbox } from "@/common/Components";

export default function Step1() {
  return (
    <div>
      <div>
        <p className="pb-8">This data will be used for invoicing.</p>
        <div className=" flex-col justify-start items-start gap-1">
          <div>
            <BillingInfo />
          </div>
          {/* Email Address */}
          <div className=" mt-12 flex flex-col gap-8">
            <div className=" flex-col justify-start items-start gap-3 inline-flex">
              <div className="self-stretch text-neutral-900 text-base font-normal  leading-snug">
                E-mail address to which the electronic invoice will be sent
              </div>
              <EmailInfo />
            </div>

            {/* //  Acknowledgements  */}

            <div className="self-stretch">
              <span className="text-zinc-800 text-xs font-normal leading-[18px]">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our{" "}
              </span>
              <span className="text-orange-700 text-xs font-normal leading-[18px] underline">
                Privacy policy
              </span>
              <span className="text-zinc-800 text-xs font-normal leading-[18px]">
                .
              </span>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="w-6 h-6 relative">
                  <Checkbox />
                </div>
                <div className="grow shrink basis-0">
                  <span className="text-red-500 text-xs font-normal leading-[18px]">
                    *
                  </span>
                  <span className="text-neutral-900 text-xs font-normal leading-[18px]">
                    I agree to all (number of contracts) the contracts for every
                    purchased NFT that binds it to the physical asset
                  </span>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="w-6 h-6 relative">
                  <Checkbox />{" "}
                </div>
                <div className=" text-neutral-900 text-xs font-normal leading-[18px]">
                  Subscribe to the Vinesia newsletter
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
