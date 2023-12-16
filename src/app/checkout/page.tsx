"use client";
import { EditIcon, TickCirIcon } from "@/assets/icons/Icons";
import { CartControls, Checkbox, CheckoutComponent } from "@/common/Components";
import BillingInfo from "@/components/checkout/BillingInfo";
import CartInfo from "@/components/checkout/CheckoutAside";
import EmailInfo from "@/components/checkout/EmailInfo";
import React from "react";

export default function Checkout() {
  return (
    <div className="max-w-[1171px] mx-auto px-4 md:mb-40 mb-20">
      <CheckoutComponent heading="Billing information" icon={true} />
      <div className="flex justify-between mt-12 ">
        <div className="max-w-[501px]">
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
                {/* <div className="self-stretch justify-start items-center gap-3 inline-flex">
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch h-14 pl-6 pr-5 py-2 bg-orange-700 bg-opacity-10 rounded-[100px] border border-orange-700 border-opacity-20 justify-between items-center inline-flex">
                      <div className="grow shrink basis-0 h-[22px] justify-start items-center gap-2 flex">
                        <div className="text-zinc-800 text-base font-normal  leading-snug">
                          john.l@email.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-6 h-6 justify-center items-center flex">
                    <button>
                      <EditIcon />
                    </button>
                  </div>
                </div> */}

                <EmailInfo />
              </div>
              {/* </div>

            //  Acknowledgements 

            <div className="  flex-col justify-start items-start gap-8 inline-flex"> */}
              <div className="self-stretch">
                <span className="text-zinc-800 text-xs font-normal leading-[18px]">
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our{" "}
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
                      I agree to all (number of contracts) the contracts for
                      every purchased NFT that binds it to the physical asset
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

          <CartControls />
        </div>
        <div className="max-w-[501px] md:block hidden">
          <CartInfo />
        </div>
      </div>
    </div>
  );
}
