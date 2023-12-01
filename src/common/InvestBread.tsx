import Link from "next/link";
import React from "react";

const InvestBread = () => {
  return (
    <>
      <div className="conatiner mx-auto hidden md:block">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="container mx-auto flex flex-wrap gap-3 px-4 items-center">
            <li className="inline-flex items-center">
              <Link
                href="#"
                className="text-primary-dark text-base font-normal leading-snug"
              >
                vinesia marketplace
              </Link>
            </li>
            <li className="hidden md:block lg:block  text-secondary text-opacity-20 text-base font-normal  leading-snug">
              /
            </li>
            <li>
              <div className="flex items-center">
                <Link
                  href="#"
                  className=" text-primary-dark text-base font-normal  leading-snug"
                >
                  home
                </Link>
              </div>
            </li>
            <li className="hidden md:block lg:block text-secondary text-opacity-20 text-base font-normal  leading-snug">
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
                  className=" text-secondary text-base font-normal  leading-snug"
                >
                  home
                </Link>
              </div>
            </li>
            <li className=" text-secondary text-opacity-20 text-base font-normal  leading-snug">
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
    </>
  );
};

export default InvestBread;