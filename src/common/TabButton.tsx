"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function TabButton({ data }: { data?: any }) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="">
      <div className="flex border-b-2 border-orange-700 border-opacity-20">
        {data?.map((item: any, i: any) => {
          return (
            <div
              key={i}
              className={` border-orange-700 text-center w-full ${
                selectedTab == i && "border-b-2"
              } `}
            >
              <button
                className="text-orange-700 text-xs font-normal uppercase tracking-tight py-4"
                onClick={() => setSelectedTab(i)}
              >
                {item}
              </button>
            </div>
          );
        })}
      </div>
      {/* <div
          className={`border-orange-700 text-center w-full ${
            selectedTab == 1 && "border-b-2"
          } `}
        >
          <button
            className="text-orange-700 text-xs font-normal uppercase tracking-tight px-4 py-4"
            onClick={() => setSelectedTab(1)}
          >
            {countryName}
          </button>
        </div>
        <div
          className={`  border-orange-700 text-center w-full ${
            selectedTab == 2 && "border-b-2"
          } `}
        >
          <button
            className="text-orange-700 text-xs font-normal uppercase tracking-tight px-4 py-4"
            onClick={() => setSelectedTab(2)}
          >
            {countryName}
          </button>
        </div> */}
      {/* {selectedTab == 0 ? <><WineCard /></> : <><ArtCard /></>} */}
    </div>
  );
}
