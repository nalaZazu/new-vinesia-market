"use client";
import React from "react";
import InfoTooltip from "@/common/InfoTooltip";
import { ArrowLongDown, ArrowLongUP } from "@/assets/icons/Icons";

export default function WalletOverview() {
  return (
    <>
      <div className="">
        <div className="pb-6">
          <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
            Wallet Overview
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[11px] ">
          <div className="col-span-2 flex grow p-6 bg-orange-50 rounded justify-between items-start ">
            <div className="flex flex-col justify-start items-start gap-1 ">
              <p className="text-[#906447] text-xs font-normal uppercase leading-[18px] tracking-tight">
                Current amount
              </p>
              <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
                €10,900
              </p>
            </div>
            <div className=" flex justify-start items-center gap-4">
              <button className="max-w-[153px] px-8 py-[22px] rounded-[48px] border border-orange-700 border-opacity-20 justify-center items-center gap-3 flex">
                <div className="text-center text-orange-700 text-xs font-normal uppercase leading-[18px] tracking-tight">
                  Withdrawals
                </div>
              </button>
              <button className="max-w-[135px] px-8 py-[22px] rounded-[48px] border border-orange-700 border-opacity-20 justify-center items-center gap-3 flex">
                <div className="text-center text-orange-700 text-xs font-normal uppercase leading-[18px] tracking-tight">
                  Add Funds
                </div>
              </button>
            </div>
          </div>
          <div className="bg-orange-50 p-6">
            <div className="pb-1">
              <div className="flex gap-2 pb-2">
                <p className="text-stone-500 text-xs font-normal uppercase leading-[18px] tracking-tight">
                  Blocked amount
                </p>
                <InfoTooltip />
              </div>
              <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
                €800
              </p>
            </div>
            <div className="flex justify-end">
              <button className="text-center text-orange-700 text-xs font-normal uppercase leading-[18px] tracking-tight border-b-2 border-orange-700 border-opacity-20">
                GO TO BIDS
              </button>
            </div>
          </div>
        </div>
        {/* col end*/}
        <div className="pt-12 pb-6">
          <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
            Transactions history
          </p>
        </div>

        <div>
          <table className="w-full text-left">
            <thead className="text-xs text-gray-700 uppercase bg-[#EED9BD] ">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-y text-stone-500 text-xs font-normal uppercase leading-[18px] tracking-tight"
                >
                  DATE
                </th>
                <th
                  scope="col"
                  className="px-6 w-3/4 py-4 text-stone-500 text-xs font-normal uppercase leading-[18px] tracking-tight"
                >
                  Action
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-stone-500 text-xs font-normal uppercase leading-[18px] tracking-tight"
                >
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  scope="row"
                  className="px-6 py-4 text-zinc-800 text-base font-normal leading-snug"
                >
                  10/10/2023
                </td>
                <td className="flex gap-2 px-6 py-4 text-red-600 text-base font-normal leading-snug">
                  <ArrowLongUP />
                  Withdraw funds
                </td>
                <th className="px-6 py-4 text-zinc-800 text-lg font-semibold leading-relaxed">
                  €2,200
                </th>
              </tr>
              <tr>
                <td
                  scope="row"
                  className="px-6 py-4 text-zinc-800 text-base font-normal leading-snug"
                >
                  10/10/2023
                </td>
                <td className="flex gap-2 px-6 py-4 text-green-700 text-base font-normal leading-snug">
                  <ArrowLongDown />
                  Withdraw funds
                </td>
                <th className="px-6 py-4 text-zinc-800 text-lg font-semibold leading-relaxed">
                  €2,200
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
