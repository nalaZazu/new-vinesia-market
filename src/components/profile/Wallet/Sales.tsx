import {
  ArrowDown,
  ArrowTable,
  LinkIcon,
  MenuDots,
  SearchIcon,
} from "@/assets/icons/Icons";
import TabButton from "@/common/TabButton";
import React from "react";

export default function Sales() {
  const countryName = ["ALL", "Open Bids"];
  return (
    <>
      <div>
        <div className="justify-between items-center flex pb-8">
          <div>
            <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
              Sales
            </p>
            <p className="w-[501px] text-black text-base font-normal leading-snug">
              The list below shows the history of wine transactions for which
              another investor decided to buy your wine at ask price.
            </p>
          </div>
          <div className="flex border border-stone-400 rounded-full items-center px-3 gap-2">
            <div>
              <SearchIcon fill={"#000"} />
            </div>
            <input
              type="search"
              className="h-14 bg-transparent py-2 text-[#BCA291] text-base font-normal leading-snug outline-none transition duration-200 ease-in-out focus:z-10 focus:shadow-none focus:outline-none "
              id="exampleSearch"
              placeholder="Search wine name"
            />
          </div>
        </div>

        <div>
          <table className="w-full text-left">
            <thead className="text-xs text-gray-700 uppercase bg-[#EED9BD]">
              <tr>
                <th
                  scope="col"
                  className="py-5 px-4 w-1/2 text-[#906447] text-xs font-normal uppercase leading-[18px] tracking-tight"
                >
                  NAME
                </th>
                <th
                  scope="col"
                  className="flex w-1/2 gap-1 items-center py-5 px-4 text-[#906447] text-xs font-normal uppercase leading-[18px] tracking-tight"
                >
                  Sale price
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7].map((items, i) => {
                return (
                  <tr key={i}>
                    <td
                      scope="row"
                      className="py-6 px-4 max-w-[363px] text-zinc-800 text-lg font-semibold  leading-relaxed border-b-2 border-orange-700 border-opacity-20"
                    >
                      49# Château Lafite Rothschild - Vintage 100 points Dunnuck
                      | 2020
                    </td>

                    <th className="py-5 px-4 text-neutral-900 text-base font-normal leading-snug border-b-2 border-orange-700 border-opacity-20">
                      €3,210
                    </th>
                    <td className="py-5 px-4 text-red-600 text-base font-normal leading-snug text-end border-b-2 border-orange-700 border-opacity-20">
                      <button className="border-b-2 border-orange-700 border-opacity-20 text-orange-700 text-xs font-normal uppercase leading-[18px] tracking-tight">
                        See INVOICE
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
