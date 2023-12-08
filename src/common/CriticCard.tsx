import React from "react";

export default function CriticCard() {
  return (
    <div>
      <div className="py-2 px-4">
        <div className="flex flex-col justify-center items-center gap-4 pb-8">
          <div className="h-5 text-center">
            <span className="text-zinc-800 text-[21px] font-light leading-[29px] tracking-wide">
              87
            </span>
            <span className="text-stone-400 text-xs font-normal uppercase leading-3 tracking-tight">
              / 100
            </span>
          </div>
          <p className="text-stone-500 text-xs font-normal uppercase leading-3 tracking-tight">
            A. Critic name
          </p>
        </div>
        <div>
          <p className="text-center text-zinc-800 text-base font-normal font-['Albert Sans'] leading-snug">
            This is the best wine for romantic dinner and long term investment.
            Buy it as soon as you can, cause it wont last long. Buy it as soon
            as you can.
          </p>
        </div>
      </div>
    </div>
  );
}
