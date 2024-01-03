import React from "react";

export default function WineryBanner() {
  return (
    <div>
      <section className="grid grid-cols-1 winery-bg-image md:pt-0 pt-40 bg-[#4e261a] object-cover bg-center h-[818px] bg-top-[5rem]')]">
        <div className=" container mx-auto flex flex-col md:justify-center justify-between text-white md:px-0 px-4 pt-10 md:pt-24">
          <div>
            <div>
              <p className="text-stone-400 text-xs font-normal uppercase leading-[18px] tracking-tight">
                appreciating your wine, guarding its emotions
              </p>
              <h3 className="text-white text-4xl font-light leading-[44px] max-w-[638px] pt-9">
                Wine and Art
              </h3>
              <h1 className="max-w-[1100px] flex flex-col text-white md:text-[144px] text-7xl font-normal md:leading-[144px] leading-[80px] tracking-[-2.88px]">
                Match made
                <span>in heaven</span>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
