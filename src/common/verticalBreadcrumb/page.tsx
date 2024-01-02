"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const VerticalBreadCrumb = () => {
  const pathname = usePathname();
  return (
    <React.Fragment>
      <div className="absolute -rotate-90 ">
        <span className="flex " aria-label="Breadcrumb">
          <span className="container mx-auto flex flex-wrap gap-3 px-4 items-center">
            <span className="inline-flex items-center">
              <Link
                href="#"
                className={` text-xs font-normal leading-3 ${
                  pathname === "/reso" || pathname === "/limitedcollections"
                    ? "text-stone-400"
                    : "text-stone-600"
                }`}
              >
                vinesia marketplace
              </Link>
            </span>
            <span
              className={`hidden md:block lg:block  text-xs font-normal  ${
                pathname === "/reso" || pathname === "/limitedcollections"
                  ? "text-orange-700 text-opacity-20  leading-3 "
                  : ""
              }`}
            >
              /
            </span>
            <span>
              <div className="flex items-center">
                <Link
                  href="#"
                  className={` text-xs font-normal leading-3 ${
                    pathname === "/reso" || pathname === "/limitedcollections"
                      ? "text-stone-400 "
                      : "text-stone-600"
                  }`}
                >
                  home page
                </Link>
              </div>
            </span>
            <span
              className={`hidden md:block lg:block  text-xs font-normal  ${
                pathname === "/reso" || pathname === "/limitedcollections"
                  ? "text-orange-700 text-opacity-20  leading-3 "
                  : ""
              }`}
            >
              /
            </span>
            <span aria-current="page">
              <Link
                href="#"
                className={` text-xs font-normal leading-3 ${
                  pathname === "/reso" || pathname === "/limitedcollections"
                    ? "text-stone-400 "
                    : "text-stone-600"
                }`}
              >
                {decodeURIComponent(pathname).split("/")}
              </Link>
            </span>
          </span>
        </span>
      </div>
    </React.Fragment>
  );
};

export default VerticalBreadCrumb;
