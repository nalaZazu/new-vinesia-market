"use client";
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Menu, Transition, Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { filtersList } from "@/constants/invesdropdown";
import Badges from "../badage/page";
import { SearchIcon } from "@/assets/icons/Icons";
import { usePathname } from "next/navigation";
import useSWR from "swr";
import { RangeSlider } from "@/common/Components";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const fetcher = async (url: string, payload?: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  return fetch(url, options).then((res) => res.json());
};

const Filters = ({
  selectedFilters,
  setSelectedFilters,
  priceRange,
  setPriceRange,
}: {
  selectedFilters?: any;
  setSelectedFilters?: any;
  priceRange?: any;
  setPriceRange?: any;
}) => {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_ADDRESS}products/filters`,
    fetcher
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState<string[]>(
    selectedFilters || []
  );
  const [tempRange, setTempRange] = useState([0, 500]);
  const pathName = usePathname();
  const handleChange = (e: any) => {
    let index = selectedItems?.findIndex((d: any) => d === e);
    if (index === -1) {
      setSelectedItems([...selectedItems, e]);
    } else {
      let tempArr = [...selectedItems];
      tempArr.splice(index, 1);
      setSelectedItems(tempArr);
    }
  };
  const handleApply = (close: any) => {
    setSelectedFilters(selectedItems);
    setSelectedItems([]);
    close();
  };
  const handleClear = (close: any) => {
    setSearchTerm("");
    setSelectedItems([]);
    close();
  };
  const handleRangeChange = (e: []) => {
    setTempRange(e);
  };
  const handleRangeApply = (close: any) => {
    setPriceRange(tempRange);
    close();
  };

  useEffect(() => {
    setSelectedItems(selectedFilters);
  }, [selectedFilters]);

  return (
    <>
      <div className="flex flex-wrap gap-y-4 gap-x-3">
        {data
          ?.filter((d: any) => d.options.length > 0)
          .map((filterItem: any, filterItemId: any) => {
            const { name, options, type } = filterItem;
            return (
              <Menu
                as="div"
                className="relative inline-block text-start "
                key={filterItemId}
              >
                <Popover className="relative">
                  {({ open, close }) => (
                    <>
                      <div>
                        <Popover.Button className="inline-flex w-full justify-center gap-x-1.5 pl-4 pr-3 py-4    px-3 items-center text-xs font-normal text-priamry shadow-sm     leading-3 tracking-tight   bg-orange-700 bg-opacity-10 rounded-full">
                          {name}
                          <ChevronDownIcon
                            className="-mr-1 h-5 w-5 text-zinc-800     text-xs font-normal  uppercase leading-3 tracking-tight"
                            aria-hidden="true"
                          />
                        </Popover.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Popover.Panel className="absolute left-0 z-10 mt-2 w-[355px] origin-top-right rounded-lg bg-orange-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1 ">
                            {/* <form>
                              <div className="relative px-4 py-6 w-full">
                                <div className="absolute left-5 inset-y-0 flex items-center w-7  pointer-events-none ps-2">
                                  <SearchIcon
                                    fill={pathName == "/" ? "white" : "#3a2824"}
                                  />
                                </div>
                                <input
                                  value={searchTerm}
                                  onChange={(e) =>
                                    setSearchTerm(e.target.value)
                                  }
                                  type="search"
                                  id="default-search"
                                  autoComplete="off"
                                  placeholder="search"
                                  className="block w-full p-4 bg-orange-50 text-primary ps-8 text-sm font-normal  leading-tight   outline-none  rounded-full border border-stone-400  "
                                />
                              </div>
                            </form> */}
                            <div className=" dropdownstyle max-h-60 overflow-y-auto">
                              {" "}
                              {/* here add the webkit classs  */}
                              {type && type?.toLowerCase() === "range" ? (
                                <div className="py-4 px-8">
                                  <div className="w-[289px]  flex-col justify-start items-start gap-1 inline-flex">
                                    <div className="text-zinc-800 text-base font-semibold leading-snug">
                                      Price range
                                    </div>
                                    <div className="self-stretch text-neutral-600 text-base font-normal leading-snug">
                                      User slider or enter min and max price
                                    </div>

                                    <div className="w-[307px] h-14 justify-start items-center gap-6 inline-flex">
                                      <div className="justify-start items-center gap-2 flex">
                                        <div className="text-center text-black text-lg font-semibold font-['Albert Sans'] leading-relaxed">
                                          Min
                                        </div>
                                        <div className="w-[84px] flex-col justify-start items-start gap-2 inline-flex">
                                          <input
                                            // defaultValue={tempRange[0]}
                                            value={tempRange[0]}
                                            type="number"
                                            onChange={(e) =>
                                              setTempRange([
                                                parseInt(e.target.value),
                                                tempRange[1],
                                              ])
                                            }
                                            className="self-stretch h-14 px-4 py-2 rounded-[100px] border border-orange-700 justify-between items-center inline-flex bg-transparent"
                                          ></input>
                                        </div>
                                      </div>
                                      <div className="text-center text-black text-lg font-semibold font-['Albert Sans'] leading-relaxed">
                                        -
                                      </div>
                                      <div className="justify-start items-center gap-2 flex">
                                        <div className="text-center text-black text-lg font-semibold font-['Albert Sans'] leading-relaxed">
                                          Max
                                        </div>
                                        <div className="w-[84px] flex-col justify-start items-start gap-2 inline-flex">
                                          <input
                                            value={tempRange[1]}
                                            type="number"
                                            onChange={(e) =>
                                              setTempRange([
                                                tempRange[1],
                                                parseInt(e.target.value),
                                              ])
                                            }
                                            className="self-stretch bg-transparent h-14 px-4 py-2 rounded-[100px] border border-orange-700 justify-between items-center inline-flex"
                                          ></input>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <RangeSlider
                                    range={options}
                                    onChange={handleRangeChange}
                                    value={tempRange}
                                  />
                                </div>
                              ) : (
                                options?.map((item: any, itemId: any) => {
                                  return (
                                    <div key={itemId}>
                                      <Menu.Item>
                                        {({ active }) => (
                                          <p className="px-4 py-4 cursor-pointer text-secondary text-xxs font-normal  tracking-wide flex gap-2 items-center border border-orange-100 ">
                                            <input
                                              id={`${item}-${itemId}`}
                                              name="checkbox"
                                              type="checkbox"
                                              className="h-3 w-3 form-checkbox    bg-orange-50 rounded-md border border-zinc-800"
                                              onChange={(e) =>
                                                handleChange(
                                                  item?.toLowerCase()
                                                )
                                              }
                                            />
                                            <label
                                              htmlFor={`${item}-${itemId}`}
                                              className={classNames(
                                                active
                                                  ? "  text-zinc-800 "
                                                  : "text-primary-dark ",
                                                "text-lg font-semibold  leading-relaxed"
                                              )}
                                            >
                                              {item}
                                            </label>
                                          </p>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  );
                                })
                              )}
                            </div>

                            <div className=" cursor-pointer p-6  justify-end items-start gap-4 flex">
                              <button
                                className="text-center text-secondary text-xs font-normal  tracking-wide   px-8 py-3 rounded-full border border-secondary "
                                onClick={() =>
                                  type?.toLowerCase() == "range"
                                    ? setPriceRange([])
                                    : handleClear(close)
                                }
                              >
                                Clear
                              </button>

                              <button
                                className="text-center text-white text-xs font-normal tracking-wide   px-8 py-3 bg-secondary rounded-full"
                                onClick={() =>
                                  type?.toLowerCase() == "range"
                                    ? handleRangeApply(close)
                                    : handleApply(close)
                                }
                              >
                                Apply
                              </button>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Menu>
            );
          })}
      </div>

      <div>
        <Badges
          selectedItems={selectedFilters}
          setSelectedItems={setSelectedFilters}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
      </div>
    </>
  );
};

export default Filters;
