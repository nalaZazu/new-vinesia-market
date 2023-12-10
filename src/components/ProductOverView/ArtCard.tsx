import React from "react";

export default function ArtCard() {
  return (
    <div>
      <div>
        <div>
          <div className="pt-8 flex">
            <div className="space-y-4">
              <div className="flex gap-4 items-center text-stone-500 text-base font-normal leading-snug">
                <p>First Release Date</p>
                <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                <p className="text-zinc-800 text-base font-normal leading-snug">
                  Dec 29, 2023
                </p>
              </div>
              <div className="flex gap-4 items-center text-stone-500 text-base font-normal leading-snug">
                <p>This wine is sourced</p>
                <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                <p className="text-zinc-800 text-base font-normal leading-snug">
                  directly from the winery
                </p>
              </div>
              <div className="flex gap-4 items-center text-stone-500 text-base font-normal leading-snug">
                <p>Case & bottle size</p>
                <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                <p className="text-zinc-800 text-base font-normal leading-snug">
                  99 bottle case, Double Magnum (1,5l)
                </p>
              </div>
              <div className="flex gap-4 items-center text-stone-500 text-base font-normal leading-snug">
                <p>Type </p>
                <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                <p className="text-zinc-800 text-base font-normal leading-snug">
                  Red, 14% Alc
                </p>
              </div>
              <div className="flex gap-4 items-center text-stone-500 text-base font-normal leading-snug">
                <p>Origin </p>
                <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                <p className="text-zinc-800 text-base font-normal leading-snug">
                  Winery
                </p>
                <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                <p>Château Le Pin </p>
                <div className="opacity-20 text-orange-700">/</div>
                <p className="text-zinc-800 text-base font-normal leading-snug">
                  France, Region, Appellation
                </p>
              </div>
            </div>
            <div>
              <hr className=" border-t-2" />
            </div>
          </div>
          <div className="my-8 w-[608px] h-[0px] border border-orange-700 border-opacity-20"></div>
          <div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4]?.map((item: any, i: any) => {
                return (
                  <div key={i} className=" col-span-1 rounded-sm">
                    <p className="text-stone-500 text-xs font-normal uppercase leading-3 tracking-tight pb-3">
                      A. Critic name
                    </p>
                    <div className="flex items-end">
                      <p className=" text-zinc-800 text-[21px] font-lightw-6 h-6 leading-[29px] tracking-wide">
                        87/
                      </p>
                      <span className=" text-stone-400 text-xs font-normal uppercase leading-3 tracking-tight">
                        100
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="my-8 w-[608px] h-[0px] border border-orange-700 border-opacity-20"></div>
          <div className="flex justify-between items-center gap-6 pe-8">
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>

              <p className="text-zinc-800 text-xs font-normal uppercase leading-3 tracking-tight">
                Favorite
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
                999
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
                  d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                />
              </svg>
              <p className="text-zinc-800 text-xs font-normal uppercase leading-3 tracking-tight">
                999
              </p>
            </div>
            <button
              type="button"
              className=" text-center text-orange-700 text-xs font-normal font-['Albert Sans'] uppercase leading-3 tracking-tight flex gap-2 items-center focus:ring-0 focus:outline-none focus:ring-gray-100"
            >
              See More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
          <div className="my-8 w-[608px] h-[0px] border border-orange-700 border-opacity-20"></div>
          <div className="flex justify-between items-center">
            <div className=" uppercase items-center flex gap-3">
              <p className="text-right text-stone-500 text-xs font-normal font-['Albert Sans'] uppercase leading-3 tracking-tight">
                Floor PRICE
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-secondary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
              <p className=" text-zinc-800 text-4xl font-light leading-[44px]">
                €68,888
              </p>
            </div>
            <div>
              <button
                type="button"
                className="bg-secondary text-center rounded-full text-white text-xs font-normal uppercase leading-3 tracking-tight focus:ring-0 focus:outline-none w-48 px-8 py-5 items-center"
              >
                Invest now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
