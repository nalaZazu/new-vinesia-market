import React from "react";

export default function CriticCard({ review }: { review?: any }) {
  return (
    <div>
      <div className="py-2 px-4">
        <div className="flex flex-col justify-center items-center gap-4 pb-8">
          <div className="h-5 text-center">
            <span className="text-zinc-800 text-[21px] font-light leading-[29px] tracking-wide">
              {review?.rating}
            </span>
            <span className="text-stone-400 text-xs font-normal uppercase leading-3 tracking-tight">
              / {review?.max}
            </span>
          </div>
          <p className="text-stone-500 text-xs font-normal uppercase leading-3 tracking-tight">
            {review?.critic}
          </p>
        </div>
        <div>
          <p className="text-center text-zinc-800 text-base font-normal  leading-snug">
            {review?.description}
          </p>
        </div>
      </div>
    </div>
  );
}
