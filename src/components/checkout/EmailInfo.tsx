"use client";
import { EditIcon } from "@/assets/icons/Icons";
import { BillingInput, Button } from "@/common/Components";
import React, { useState } from "react";

export default function EmailInfo({ onSubmit }: { onSubmit?: any }) {
  const [edit, setEdit] = useState(false);
  return (
    <div>
      {/* Billing Address */}
      {edit ? (
        <div className="pt-6">
          <div className="flex-col justify-start items-start gap-3 inline-flex">
            <div className="self-stretch">
              <span className="text-neutral-900 text-base font-normal  leading-snug">
                E-mail address{" "}
              </span>
              <span className="text-red-500 text-base font-normal  leading-snug">
                *
              </span>
            </div>
            <div className="self-stretch justify-start items-center gap-3 sm:inline-flex grid grid-cols-1">
              <div>
                <BillingInput name='email'/>
              </div>
              <button
                onClick={() => setEdit(false)}
                className="sm:w-[141px] w-full px-8 py-[22px] bg-orange-700 rounded-[48px] justify-center items-center gap-3 flex"
              >
                <span className="text-center text-white text-xs font-normal  uppercase leading-[18px] tracking-tight">
                  Save E-mail
                </span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="self-stretch justify-start items-center gap-3 inline-flex">
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
              <button onClick={() => setEdit(true)}>
                <EditIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
