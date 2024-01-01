"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const temp = ["vinesia marketplace", "invest"];

const InvestBread = ({ baseName }: { baseName?: any }) => {
  const pathname = usePathname();
  return (
    <>
      <span className="conatiner mx-auto">
        <span className="flex" aria-label="Breadcrumb">
          <span className="container mx-auto flex flex-wrap gap-2 px-2 items-center">
            <span className="inline-flex items-center">
              <Link
                href="#"
                className={` text-[#975958] text-base font-normal  leading-snug `}
              >
                {baseName}
              </Link>
            </span>
            {/* <span
                    key={"/" + i}
                    className="hidden md:block lg:block  text-orange-700 text-opacity-20 text-base font-normal leading-snug      "
                  >
                    /
                  </span> */}

            {decodeURIComponent(pathname)
              ?.split("/")
              .slice(1)
              ?.map((d: any, i: any) => {
                return (
                  <>
                    <span
                      key={"_" + i}
                      className="hidden md:block lg:block  text-orange-700 text-opacity-20 text-base font-normal leading-snug      "
                    >
                      /
                    </span>
                    <span key={i} className="inline-flex items-center">
                      <Link
                        href="#"
                        className={`text-zinc-800 text-base font-normal  leading-snug `}
                      >
                        {d}
                      </Link>
                    </span>
                  </>
                );
              })}
            {/* <span aria-current="page">
              <div className="flex items-center">
                <span className="  text-base font-normal  leading-snug">
                  {pathname.split("/")}
                </span>
              </div>
            </span> */}
          </span>
        </span>
      </span>
    </>
  );
};

export default InvestBread;

// This Code Can be Used if Array Passed From Parrent Component

{
  /* <span className="conatiner mx-auto">
        <span className="flex" aria-label="Breadcrumb">
          <span className="container mx-auto flex flex-wrap gap-2 px-2 items-center">
            {data?.map((d: any, i: any) => {
              return (
                <>
                  <span key={i} className="inline-flex items-center">
                    <Link
                      href="#"
                      className={`${
                        i == 0 ? "text-[#975958]" : "text-zinc-800"
                      }  text-base font-normal  leading-snug `}
                    >
                      {d}
                    </Link>
                  </span>
                  <span
                    key={"/" + i}
                    className="hidden md:block lg:block  text-orange-700 text-opacity-20 text-base font-normal leading-snug      "
                  >
                    /
                  </span>
                </>
              );
            })}
            <span aria-current="page">
              <div className="flex items-center">
                <span className="  text-base font-normal  leading-snug">
                  {pathname.split("/")}
                </span>
              </div>
            </span>
          </span>
        </span>
      </span> */
}
