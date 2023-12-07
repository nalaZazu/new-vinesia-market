"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function TabButton() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="pb-5">
      <div className="flex justify-between border-b-2 border-orange-700 border-opacity-20">
        <div
          className={` border-orange-700 ${selectedTab == 0 && "border-b-2"} `}
        >
          <button
            className="text-orange-700 text-xs font-normal uppercase tracking-tight px-4 py-4"
            onClick={() => setSelectedTab(0)}
          >
            France
          </button>
        </div>
        <div
          className={`border-orange-700 ${selectedTab == 1 && "border-b-2"} `}
        >
          <button
            className="text-orange-700 text-xs font-normal uppercase tracking-tight px-4 py-4"
            onClick={() => setSelectedTab(1)}
          >
            Germany
          </button>
        </div>
        <div
          className={`  border-orange-700 ${selectedTab == 2 && "border-b-2"} `}
        >
          <button
            className="text-orange-700 text-xs font-normal uppercase tracking-tight px-4 py-4"
            onClick={() => setSelectedTab(2)}
          >
            Switzerland
          </button>
        </div>
      </div>
      {/* {selectedTab == 0 ? <><WineCard /></> : <><ArtCard /></>} */}
    </div>
  );
}
