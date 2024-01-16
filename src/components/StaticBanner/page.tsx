import React from "react";

export default function StaticBanner({small, title, title2, bgClass}: {small: string, title: string, title2: string, bgClass: string}) {
  return (
    <div>
      <section className={`grid grid-cols-1 md:pt-0 pt-40 object-cover bg-center h-[818px] bg-top-[5rem]')] ${bgClass}`}>
        <div className="container mx-auto flex flex-col md:justify-center justify-between text-white md:px-0 px-4 pt-10 md:pt-24">
          <div>
            <div>
              <p className="text-stone-400 text-xs font-normal font-['Albert Sans'] uppercase leading-[18px] tracking-tight">
                appreciating your wine, guarding its emotions
              </p>
              <h3 className="text-white text-4xl font-light leading-[44px] max-w-[638px] pt-9">
                {small}
              </h3>
              <h1 className=" flex flex-col text-white text-[66px] leading-[84px] md:text-[130px] font-normal md:leading-[130px] md:tracking-[-2.88px]">
                {title}
                <span>{title2}</span>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
