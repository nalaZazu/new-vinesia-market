import { AlertCircle, LineDot, SensorModal } from "@/assets/icons/Icons";
import React from "react";
import SwitchToggle from "../Switch";

export default function StorageConditions() {
  return (
    <div>
      <div className="justify-start items-center gap-4 flex pb-8">
        <div className="justify-center items-center gap-2.5 flex">
          <div className="text-right text-zinc-800 text-lg font-semibold leading-relaxed">
            Our Proof of Storage Conditions
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
                We are monitoring conditions in our cellars using Internet of
                Things technology and specialistic sensors to provide best
                storage conditions. Live.a
              </p>
            </div>
          </div>
          <div className="ps-16 pt-8">
            <p className=" text-[#906447] text-xs font-normal uppercase leading-3 tracking-tight pb-2">
              HOW IT WORKS
            </p>
            <p className="max-w-[399px] text-zinc-800 text-base font-normal leading-snug">
              We are monitoring conditions in our cellars. Live. We are
              monitoring conditions in our cellars. Live.We are monitoring
              conditions in our cellars. Live.We are monitoring conditions in
              our cellars. Live. We are monitoring conditions in our cellars.
              Live.
            </p>
          </div>
          <div className="flex ps-16 pt-8 gap-2 items-center">
            <p className=" text-[#906447] text-right text-xs font-normal font-['Albert Sans'] uppercase leading-3 tracking-tight">
              Date of last check
            </p>
            <p className="text-right text-zinc-800 text-base font-normal font-['Albert Sans'] leading-snug">
              19.10.2023, 12:45 PM
            </p>
          </div>
        </div>
        <div className="ms-10 px-6 pt-6 pb-5 bg-orange-50">
          <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
            History of storage conditions
          </p>
          <div className="bg-orange-100 rounded px-4 pt-4 pb-3">
            <div className="flex justify-between items-center">
              <div className="max-w-[74.36px] h-[22px] left-[16px] top-[16px] justify-start items-center gap-[3px] inline-flex">
                <p className="text-zinc-800 text-base font-normal leading-snug">
                  °C
                </p>

                <SwitchToggle />

                <p className="w-4 h-[22px] text-zinc-800 text-base font-normal leading-snug">
                  °F
                </p>
              </div>
              <div className="max-w-[252.40px] h-[22px] left-[160.87px] top-[16px] justify-start items-center gap-4 inline-flex">
                <div className="justify-start items-center gap-1 flex">
                  <LineDot storke="#28475C" />
                  <p className="text-zinc-800 text-base font-normal leading-snug">
                    Temprature
                  </p>
                </div>
                <div className="justify-start items-center gap-1 flex">
                  <LineDot storke="#CB220D" />
                  <p className="text-zinc-800 text-base font-normal leading-snug">
                    Humidity
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <div className="flex justify-between gap-1.5 items-end pb-5">
                <p className="text-zinc-800 text-xs font-normal uppercase leading-3 tracking-tight">
                  13°C
                </p>
                <div className="grow shrink basis-0 h-[0px] border border-orange-700 border-opacity-20"></div>
                <p className="text-zinc-800 text-xs font-normal uppercase leading-3 tracking-tight">
                  71%
                </p>
              </div>
              <div className="flex justify-between gap-1.5 items-end pb-5">
                <p className="text-zinc-800 text-xs font-normal uppercase leading-3 tracking-tight">
                  12°C
                </p>
                <div className="grow shrink basis-0 h-[0px] border border-orange-700 border-opacity-20"></div>
                <p className="text-zinc-800 text-xs font-normal uppercase leading-3 tracking-tight">
                  68%
                </p>
              </div>
              <div className="flex justify-between gap-1.5 items-end">
                <p className="text-zinc-800 text-xs font-normal uppercase leading-3 tracking-tight">
                  11°C
                </p>
                <div className="grow shrink basis-0 h-[0px] border border-orange-700 border-opacity-20"></div>
                <p className="text-zinc-800 text-xs font-normal uppercase leading-3 tracking-tight">
                  65%
                </p>
              </div>
            </div>
            <div className="pt-4">
              <div className="justify-around flex">
                <div className="text-zinc-800 text-base font-normal leading-snug">
                  Oct 23
                </div>
                <div className="text-zinc-800 text-base font-normal leading-snug">
                  Oct 30
                </div>
                <div className="text-zinc-800 text-base font-normal leading-snug">
                  Nov 7
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[433px] border border-orange-700 border-opacity-20 my-6"></div>
          <div className="flex gap-1">
            <p className="text-zinc-800 text-base font-normal leading-snug">
              Recommended temprature : 12°C
            </p>
            <AlertCircle storke="#BF4D20" />
          </div>
          <div className="flex gap-1">
            <p className="text-zinc-800 text-base font-normal leading-snug">
              Recommended humidity : 17%
            </p>
            <AlertCircle storke="#BF4D20" />
          </div>
        </div>
      </div>
    </div>
  );
}
