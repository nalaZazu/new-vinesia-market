import {
  ArrowDown,
  ArrowTable,
  LinkIcon,
  MenuDots,
  SearchIcon,
} from "@/assets/icons/Icons";
import TabButton from "@/common/TabButton";
import React from "react";

export default function ReceivedBids() {
  const countryName = ["ALL", "Open Bids"];
  return (
    <>
      <div>
        <div className="justify-between items-center flex">
          <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
            Received Bids
          </p>
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
        <div className="my-6 border-t-2 border-orange-700 border-opacity-20">
          <TabButton data={countryName} />
        </div>

        <div>
          <table className="w-full text-left">
            <thead className="text-xs text-gray-700 uppercase bg-[#EED9BD]">
              <tr>
                <th
                  scope="col"
                  className="py-5 px-4 w-1/4 text-[#906447] text-xs font-normal uppercase leading-[18px] tracking-tight"
                >
                  NAME
                </th>
                <th
                  scope="col"
                  className="flex gap-1 items-center py-5 px-4 w-1/5 text-[#906447] text-xs font-normal uppercase leading-[18px] tracking-tight"
                >
                  Status
                  <span>
                    <ArrowTable />
                  </span>
                </th>
                <th
                  scope="col"
                  className="py-5 px-4 w-1/12 text-[#906447] text-xs font-normal uppercase leading-[18px] tracking-tight"
                >
                  Estimated value
                </th>
                <th
                  scope="col"
                  className="py-5 px-4 text-[#906447] text-xs font-normal uppercase leading-[18px] tracking-tight"
                >
                  Ask Price
                </th>
                <th
                  scope="col"
                  className="py-5 px-4  text-[#906447] text-xs font-normal uppercase leading-[18px] tracking-tight"
                >
                  Bid
                </th>
                <th
                  scope="col"
                  className="py-5 px-4  text-[#906447] text-xs font-normal uppercase leading-[18px] tracking-tight"
                ></th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((items, i) => {
                return (
                  <tr key={i}>
                    <td
                      scope="row"
                      className=" text-zinc-800 text-base font-normal leading-snug py-5 px-4"
                    >
                      1# Brunello di Montalcino {"Piaggione"} | 2019
                      <p className="flex gap-2 pt-2 text-[#906447] text-xs font-normal font-['Albert Sans'] uppercase leading-[18px] tracking-tight">
                        ALL BIDS FOR THIS WINE ASSET
                        <LinkIcon />
                      </p>
                    </td>
                    <td className="py-5 px-4 text-red-600 text-base font-normal leading-snug">
                      <button
                        className={`w-[99px] h-[29px]  text-amber-700 text-xs font-normal uppercase leading-[18px] tracking-tight px-4 py-1  bg-opacity-20 rounded-[30px] border justify-center items-center gap-1.5 inline-flex ${
                          i == 0
                            ? "bg-amber-500 "
                            : i == 1
                            ? "bg-[#DC2626]"
                            : "bg-[#286338]"
                        }`}
                      >
                        Open
                      </button>
                    </td>
                    <th className="py-5 px-4 text-neutral-900 text-base font-normal leading-snug">
                      €12,600
                    </th>
                    <th className="py-5 px-4 text-neutral-900 text-base font-normal leading-snug">
                      €4,500
                    </th>
                    <td className="py-5 px-4 text-neutral-900 text-base font-normal leading-snug">
                      €4,456
                      <p className="text-[#906447] text-xs font-normal uppercase leading-[18px] tracking-tight">
                        20/02/2023
                      </p>
                    </td>
                    <td className="py-5 px-4 text-neutral-900 text-base font-normal leading-snug gap-6">
                      <div className="flex justify-between">
                        <button className="text-orange-700 text-xs font-normal uppercase leading-[18px] tracking-tight border-b-2 border-orange-700 border-opacity-20">
                          Accept
                        </button>
                        <button className=" text-zinc-800 text-xs font-normal uppercase leading-[18px] tracking-tight border-b-2 border-orange-700 border-opacity-20">
                          CANCEL
                        </button>
                        <MenuDots />
                      </div>
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
