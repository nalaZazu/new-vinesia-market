import React from "react";

export default function VinesiaBanner() {
  return (
    <div>
      <section className="grid grid-cols-1 vinesia-bg-image md:pt-0 pt-40 bg-[#4e261a] object-cover bg-center h-[818px] bg-top-[5rem]')]">
        <div className=" container mx-auto flex flex-col md:justify-center justify-between text-white md:px-0 px-4 pt-10 md:pb-24 md:mt-10">
          <div>
            <div>
              <p className="text-stone-400 text-xs font-normal uppercase leading-[18px] tracking-tight">
                appreciating your wine, guarding its emotions
              </p>
              <h3 className="text-white text-4xl font-light leading-[44px] max-w-[638px] pt-9"></h3>
              <h1 className="flex flex-col text-white text-7xl font-normal leading-[84px]">
                How Vinesia works
              </h1>
              {/* <h1 className="flex flex-col text-white text-7xl font-normal leading-[84px]">
                Lorem ipsum dolor sit
                <span>amet consectetur.</span>
              </h1> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
