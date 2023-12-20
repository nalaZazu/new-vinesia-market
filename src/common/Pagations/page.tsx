import React from "react";

import {
  Arrows,
  NextIcon,
  NextIcon2,
  PrevIcon,
} from "../../assets/icons/Icons";
import Link from "next/link";
const Pagations = () => {
  return (
    <React.Fragment>
      <div className="flex items-center  justify-center  px-4 py-3 sm:px-6">
        <div className="   flex  gap-12  items-center ">
          {/* Here is button previous  */}
          <div className="md:block hidden">
            <button className="relative inline-flex items-center  justify-center  w-16 h-12  border-[#BF4D2020] border rounded-full">
              <span className="sr-only ">Previous</span>
              <PrevIcon fill="#BF4D2020" />
            </button>
          </div>
          <nav
            className="isolate inline-flex -space-x-px gap-4"
            aria-label="Pagination"
          >
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <Link
              href="#"
              aria-current="page"
              className="relative inline-flex items-center py-[11px] bg-orange-700 rounded-[42px] justify-center  w-12 h-12"
            >
              1
            </Link>
            <Link
              href="#"
              className="relative inline-flex items-center py-[11px] text-zinc-800 text-lg font-semibold   leading-relaxed justify-center  w-12 h-12 "
            >
              2
            </Link>
            <Link
              href="#"
              className="relative inline-flex items-center py-[11px] text-zinc-800 text-lg font-semibold   leading-relaxed justify-center  w-12 h-12"
            >
              3
            </Link>
            <Link
              href="#"
              className="relative inline-flex items-center py-[11px] text-zinc-800 text-lg font-semibold   leading-relaxed justify-center  w-12 h-12"
            >
              4
            </Link>
            <Link
              href="#"
              className="relative inline-flex items-center py-[11px] text-zinc-800 text-lg font-semibold   leading-relaxed justify-center  w-12 h-12"
            >
              5
            </Link>

            <Link
              href="#"
              className="relative inline-flex items-center py-[11px] text-zinc-800 text-lg font-semibold   leading-relaxed justify-center  w-12 h-12"
            >
              6
            </Link>
          </nav>{" "}
          {/* here is next page */}
          <div className="md:block hidden">
            <button className="relative inline-flex items-center  justify-center cursor-pointer   text-black w-16 border-orange-700  h-12 rounded-full border">
              <span className="sr-only ">Previous</span>
              <NextIcon fill="#BF4D20" />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Pagations;
