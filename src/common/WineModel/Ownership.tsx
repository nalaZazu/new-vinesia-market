import { AlertCircle, CheckBox, SensorModal } from "@/assets/icons/Icons";
import React from "react";

export default function Ownership() {
  return (
    <div>
      <div className="justify-start items-center gap-4 flex pb-8">
        <div className="justify-center items-center gap-2.5 flex">
          <div className="text-right text-zinc-800 text-lg font-semibold leading-relaxed">
            Our Proof of Ownership
          </div>
        </div>
        <div className="justify-start items-center gap-2 flex">
          <div className="w-[13px] h-[13px] relative">
            <div className="w-[13px] h-[13px] left-0 top-0 rounded-full border border-green-500" />
            <div className="w-[7px] h-[7px] left-[3px] absolute top-[3px] bg-green-500 rounded-full" />
          </div>
          <div className="text-green-700 text-xs font-normal uppercase leading-3 tracking-tight">
            Live
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="border-r-2 border-orange-700 border-opacity-20">
          <div className="flex gap-6">
            <SensorModal />
            <div>
              <p className=" text-[#906447] text-xs font-normal uppercase leading-3 tracking-tight pb-2">
                HOW WE PROVIDE IT
              </p>
              <p className="max-w-[399px] text-zinc-800 text-base font-normal leading-snug">
              We use BLE (Bluetooth Low Energy) technology to secure and locate our products in storage. This offers you proof that your wines are safe in our storage in real time.
              </p>
            </div>
          </div>
          <div className="ps-16 pt-8">
            <p className=" text-[#906447] text-xs font-normal uppercase leading-3 tracking-tight pb-2">
              HOW IT WORKS
            </p>
            <p className="max-w-[399px] text-zinc-800 text-base font-normal leading-snug">
            A second tag, BLE, is applied on each bottle or case. All BLE tags are scanned regularly and show whether your asset is indeed stored in our warehouse and has not moved. The safety and whereabouts of your assets is of paramount importance as we strive to offer Total Peace of Mind to our investors. All data is publicly available on the Polygon blockchain.
            </p>
          </div>
        </div>
        <div className="flex ps-10 py-6">
          <div className="space-y-4">
            <div className="md:flex gap-4 items-center">
              <p className="text-[#906447] text-base font-normal leading-snug">
                BLE ID
              </p>
              <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
              <p className="text-center text-orange-700 text-xs font-normal uppercase leading-3 tracking-tight">
                943469B5656E
              </p>
              <AlertCircle storke="#BF4D20" />
            </div>
            <div className="md:flex gap-4 items-center">
              <p className="text-[#906447] text-base font-normal leading-snug">
                Date of last check
              </p>
              <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
              <p className="text-zinc-800 text-base font-normal leading-snug">
                23.12.2023 | 08:00 am
              </p>
            </div>
            <div className="md:flex gap-4 items-center">
              <p className="text-[#906447]  text-base font-normal leading-snug">
                Last check status
              </p>
              <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
              <CheckBox storke="#22C55E" />
              <div>
                <div className="flex gap-1">
                  <p className="text-zinc-800 text-base font-normal leading-snug">
                    Product in our warehouse
                  </p>
                </div>
                <div className="flex gap-1">
                  <p className="text-zinc-800 text-base font-normal">in Luxembourg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
