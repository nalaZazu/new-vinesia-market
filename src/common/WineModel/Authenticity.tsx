import { AlertCircle, BarcodeLink, CheckBox } from "@/assets/icons/Icons";
import React from "react";

export default function Authenticity() {
  return (
    <div>
      <div className="md:grid md:grid-cols-2">
        <div className="md:border-r-2 border-orange-700 border-opacity-20 md:pr-10">
          <div className="flex gap-6">
            <div className="md:block hidden">
              <BarcodeLink />
            </div>
            <div>
              <p className=" text-[#906447] text-xs font-normal uppercase leading-3 tracking-tight pb-2">
                HOW WE PROVIDE IT
              </p>
              <p className="max-w-[399px] text-zinc-800 text-base font-normal leading-snug">
                We use NFC tags to secure wine and keep track of information
                about a given bottle.
              </p>
            </div>
          </div>
          <div className="md:ps-16 pt-8">
            <p className=" text-[#906447]  text-xs font-normal uppercase leading-3 tracking-tight pb-2">
              HOW IT WORKS
            </p>
            <p className="max-w-[399px] text-zinc-800 text-base font-normal leading-snug">
              The bottles brought from the winery are sealed with NFC stickers
              and placed in the safe environment of our wearhouse. From this
              point on, the bottle data is recorded live and digitally.
            </p>
          </div>
        </div>

        <div className="flex md:ps-10 py-6">
          <div className="space-y-4">
            <div className="md:flex gap-4 items-center">
              <p className="text-[#906447] text-base font-normal leading-snug">
                NFC ID
              </p>
              <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20 md:block hidden"></div>
              <div className="flex items-center gap-2">
                <p className="text-center text-orange-700 text-xs font-normal uppercase leading-3 tracking-tight">
                  123456
                </p>
                <AlertCircle storke="#BF4D20" />
              </div>
              <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20 md:hidden block"></div>
            </div>
            <div className="md:flex gap-4 items-center">
              <p className="text-[#906447] text-base font-normal leading-snug md:pb-0 pb-4">
                Stciker applied on
              </p>
              <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20 md:block hidden"></div>
              <p className="text-center text-orange-700 text-base  font-normal uppercase leading-3 tracking-tight">
                23.08.2023 | 12:36 pm
              </p>
            </div>
            <div className="md:flex gap-4 items-center">
              <p className="text-[#906447] text-base font-normal leading-snug">
                Seal Status
              </p>
              <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20 md:block hidden"></div>
              <div className="flex gap-2 items-center">
                <CheckBox storke="#22C55E" />
                <p className="text-center text-orange-700 text-base  font-normal uppercase leading-3 tracking-tight">
                  Integrity Verified
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
