import Link from "next/link";
import React from "react";

const InvestBread = () => {
  return (
    <>
      <div className="conatiner mx-auto hidden md:block">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="container mx-auto flex flex-wrap gap-2 px-2 items-center">
            <li className="inline-flex items-center">
              <Link
                href="#"
                className="text-[#975958] text-base font-normal  leading-snug "
              >
                vinesia marketplace
              </Link>
            </li>
            <li className="hidden md:block lg:block  text-orange-700 text-opacity-20 text-base font-normal leading-snug      ">
              /
            </li>
            <li>
              <div className="flex items-center">
                <Link
                  href="#"
                  className=" text-[#975958] text-base font-normal  leading-snug"
                >
                  home
                </Link>
              </div>
            </li>
            <li className="hidden md:block lg:block  text-base font-normal     text-orange-700 text-opacity-20  leading-snug">
              /
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className=" text-zinc-800 text-base font-normal  leading-snug">
                  winery
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* for mobileView */}
      <div className="conatiner mx-auto md:hidden block">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="container mx-auto flex flex-wrap gap-3 px-4 items-center">
            <li>
              <div className="flex items-center">
                <Link
                  href="#"
                  className=" text-base font-normal text-stone-500  leading-snug"
                >
                  home
                </Link>
              </div>
            </li>
            <li className="text-opacity-20  leading-snug text-orange-700  text-base font-normal  ">
              /
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className=" text-zinc-800 text-base font-normal  leading-snug   ">
                  winery
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
};

export default InvestBread;
