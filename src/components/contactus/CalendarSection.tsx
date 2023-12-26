"use client";
import { useState } from "react";
import Image from "next/image";
import contactinvest from "@/assets/images/contactinvest.png";
import { Time } from "@/assets/icons/Icons";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarSection() {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div>
      {" "}
      <h2 className="w-[683px] text-zinc-800 text-7xl font-normal font-['Canela'] leading-[84px] pb-12">
        Are you ready to invest? Let’s chat
      </h2>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8 bg-[#F7EFDF]">
          <div className="grid grid-cols-12">
            <div className="max-w-[217px] p-8 col-span-4">
              <p className="text-[#906447] text-xs font-normal uppercase leading-[18px] tracking-tight pb-2">
                Laurence Zimmer
              </p>
              <p className="text-zinc-800 text-lg font-semibold leading-relaxed tracking-[-0.36px] pb-4">
                30 minute Meeting
              </p>
              <p className="flex gap-2 items-center text-black text-xs font-normal leading-[18px]">
                <span>
                  <Time />{" "}
                </span>
                <span>30 min</span>
              </p>
            </div>
            <div className="max-w-[510px] p-8 col-span-8">
              <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
                Select Date and Time
              </p>
              <div className="py-6">
                <Calendar
                  onChange={onChange}
                  value={value}
                  className="flx-calender-style border-red-600"
                />
              </div>
              <p className="text-zinc-800 text-lg font-semibold font-['Albert Sans'] leading-relaxed">
                Time zone
              </p>
              <p className="text-zinc-800 text-base font-normal font-['Albert Sans'] leading-snug">
                UK, Ireland, Lisbon Time(10:13)
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <Image src={contactinvest} alt="" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}
