import { ProductWineDto } from "@/types/dto/productWine.dto";
import { Rating } from "@/types/productOverview.dto";
import React from "react";

export default function WineTabe({ item, starred }: { item: ProductWineDto, starred: number }) {
  function getSize() {
    if (item.size === 'Standard') {
      // return 'Standard (0,75l)'
      return '75cl'
    }
    if (item.size === 'Magnum') {
      return '150cl'
    }

    return item.size
  }

  function getPackageType() {
    if (item.packageType === 'Case') {
      return 'Case of ' + item.items
    }
    return item.packageType
  }

  return (
    <div>
      <div className="pt-8 flex">
        <div className="space-y-4">
          <div className="flex gap-3 items-center text-stone-500 text-base font-normal leading-snug">
            <p>This wine is sourced</p>
            <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
            <p className="text-zinc-800 text-base font-normal leading-snug">
              directly from the winery
            </p>
          </div>
          <div className="flex gap-3 items-center text-stone-500 text-base font-normal leading-snug">
            <p>Case & bottle size</p>
            <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
            <p className="text-zinc-800 text-base font-normal leading-snug">
              {getPackageType()} x {getSize()}
            </p>
          </div>
          <div className="flex gap-3 items-center text-stone-500 text-base font-normal leading-snug">
            <p>Type/Alc. </p>
            <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
            <p className="text-zinc-800 text-base font-normal leading-snug">
              {item.metadata['color']}, {item.metadata['percentage']} Alc
            </p>
          </div>
          <div className="flex gap-3 items-center text-stone-500 text-base font-normal leading-snug">
            <p>Origin </p>
            <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
            <p className="text-zinc-800 text-base font-normal leading-snug">
              {item.winery?.region?.name}, {item.winery?.region?.country?.name}
            </p>
          </div>
          <div className="flex gap-3 items-center text-stone-500 text-base font-normal leading-snug">
            <p>Winery </p>
            <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
            <p className="  text-base font-normal leading-snug text-orange-700">
              {item.winery?.name}
            </p>
          </div>
        </div>
        <div>
          <hr className=" border-t-2" />
        </div>
      </div>
      <div className="my-8 w-[395px] h-[0px] border border-orange-700 border-opacity-20"></div>
      <div>
        <div className="grid grid-cols-2">
          {item.ratings?.map((item: Rating, index: any) => {
            return (
              <div key={index} className=" rounded-sm">
                <p className="text-stone-500 text-xs font-normal uppercase leading-3 tracking-tight pb-3">
                  {item.critic}
                </p>
                <div className="flex items-end pb-8">
                  <p className=" text-zinc-800 text-[21px] font-lightw-6 h-6 leading-[29px] tracking-wide">
                    {item.rating}/
                  </p>
                  <span className=" text-stone-400 text-xs font-normal uppercase leading-3 tracking-tight">
                    {item.max}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mb-8 w-[395px] h-[0px] border border-orange-700 border-opacity-20"></div>

      {/* here is icon section */}
      <div className="flex gap-6 pe-8 mb-8">
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
            />
          </svg>
          <p className="text-zinc-800 text-xs font-normal uppercase leading-3 tracking-tight">
            Share
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="text-zinc-800 text-xs font-normal uppercase leading-3 tracking-tight">
            {starred}
          </p>
        </div>

        <button
          type="button"
          className="text-center text-orange-700 text-xs font-normal  uppercase leading-3 tracking-tight flex gap-2 items-center focus:ring-0 focus:outline-none focus:ring-gray-100"
        >
          See More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
