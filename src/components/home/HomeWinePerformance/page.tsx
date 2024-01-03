"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const items = [
  { name: 'Château Cheval Blanc 2019', photo: 'home_graph_cheval_blanc_bg.png', legend: 'Cheval Blanc', cover: 'home_cheval_blanc.png' },
  { name: 'Cristal Roederer 2014', photo: 'home_graph_cristal_bg.png', legend: 'Cristal Roederer', cover: 'home_cristal.png' },
  { name: 'Château Petrus 2013', photo: 'home_graph_petrus_bg.png', legend: 'Château Petrus', cover: 'home_petrus.png' },
]

export default function HomeWinePerformance() {
  const [selectedTab, setSelectedTab] = useState(0)

  const selectedItem = items[selectedTab]

  useEffect(() => {
    const interval = setInterval(() => {
      let next = selectedTab + 1
      if (next > 2) {
        next = 0
      }
      setSelectedTab(next)

    }, 6000)

    return () => clearInterval(interval)

  }, [selectedTab, setSelectedTab])

  return (
    <div className="md:py-10 md:px-0 py-16 px-4 bg-[#F7EFDF] h-[100vh] flex justify-center items-center">
      <div className="container mx-auto text-center">
        <h2 className="text-zinc-800 text-center md:text-7xl font-normal md:leading-[84px] md:tracking-[-1.44px] text-4xl leading-[42px] md:tracking[-0.36px]">
          Wine performance
        </h2>
        <h3 className="mt-10 text-xl">Between 2004 and 2022, fine wine* grew at a 9% Compound Annual Growth Rate (CAGR)</h3>
        <h4 className="mt-5 text-xs">*Liv-Ex 1000 Fine Wine Index</h4>

        <div className="w-full mt-10">
          <div className="grid md:grid-cols-3 gap-5 border-b border-orange-700 border-opacity-20 w-full">
            {items.map((item, i) => {
              return (
                <React.Fragment key={i}>
                  <div
                    className={`${selectedTab === i ? "border-b-2" : ""
                      }  border-orange-700  pb-3  min-w-[180px]`}
                  >
                    <button className="text-start"
                      onClick={() => setSelectedTab(i)}>
                      <p className="text-zinc-800 text-lg font-semibold leading-relaxed uppercase ">
                        {item.name}
                      </p>
                    </button>
                  </div>
                </React.Fragment>)
            })}
          </div>
        </div>

        <div className="w-full m-10 text-left">
        </div>
        <div className="w-full md:m-10 md:grid md:grid-cols-2 my-10 md:my-0">
          <div className="w-full">
            <img className="h-[350px] w-full" src={'/assets/images/' + selectedItem.photo} alt="performance chart" />
          </div>
          <div className="w-full flex">
            <div className="flex md:block mt-4 md:mt-0 md:ml-5 md:w-1/3 md:text-left justify-between w-full">
              <div><span className="inline-block border-solid border-2 border-[#BF4D20] rounded mb-[3px] md:w-[40px] w-[6px]"></span> {selectedItem.legend}</div>
              <div><span className="inline-block border-solid border-2 border-[#BD936B] rounded mb-[3px] md:w-[40px] w-[6px]"></span> S&P 500</div>
              <div><span className="inline-block border-solid border-2 border-[#2F222B] rounded mb-[3px] md:w-[40px] w-[6px]"></span> Gold</div>
              <div><span className="inline-block border-solid border-2 border-[#7D302E] rounded mb-[3px] md:w-[40px] w-[6px]"></span> Rolex Index</div>
            </div>
            <div className="hidden md:flex md:w-2/3 text-center items-center">
              <img src={'/assets/images/' + selectedItem.cover} className="h-[350px] mx-auto" alt="performance chart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
