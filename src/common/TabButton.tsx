"use client"; 
import React, { useState } from "react";

export default function TabButton({
  data,
  activeTab,
  setActiveTab,
  className,
}: {
  data?: any;
  activeTab?: any;
  setActiveTab?: any;
  className?:"flex-nowrap";
}) {
  const [selectedTab, setSelectedTab] = useState(activeTab || 0);
  const handleTab = (i: any) => {
    setSelectedTab(i);
    setActiveTab(i);
  };
  return (
    <div className="">
      <div
        className={`flex   border-b-2 border-orange-700 border-opacity-20 flex-wrap md:flex-nowrap`}
      >
        {data?.map((item: any, i: any) => {
          return (
            <div
              key={i}
              className={` border-orange-700  text-center w-full min-w-96 md:min-w-fit ${
                selectedTab == i && "border-b-4 "
              } `}
            >
              <button
                className={`${
                  selectedTab == i ? " text-orange-700 " : " "
                }    py-4 font-normal uppercase tracking-tight text-xs `}
                onClick={() => handleTab(i)}
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
