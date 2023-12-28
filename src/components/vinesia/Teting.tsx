"use client";
import InfoTooltip from "@/common/InfoTooltip";
import React from "react";

export default function Testing() {
  return (
    <div>
      <svg
        className=""
        viewBox="0 0 1440 174"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter>
            <feDropShadow dx="0" dy="10" stdDeviation="6" />
          </filter>
        </defs>
        <circle
          className="circle"
          stroke="#f70202"
          stroke-width="2"
          fill="#f92020"
        >
          <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
            <mpath href="#path" />
            <InfoTooltip
              icon={
                <div className="w-16 h-16 fade-in bg-slate-700 rounded-full flex justify-center items-center vinesia-icon-animation">
                  <p className=" text-center text-white text-lg font-semibold leading-relaxed">
                    01
                  </p>
                </div>
              }
            />
          </animateMotion>
        </circle>
        <path
          id="path"
          d="M-214 172.999C-164.333 105.332 -2.3 -14.101 248.5 49.499C562 128.999 729 236.999 1045.5 93.499C1362 -50.001 1462 5.49894 1655 49.499"
          stroke="#A9B5BE"
          stroke-width="2"
          fill="none"
          filter="url(#shadow)"
        />
      </svg>
    </div>
  );
}
