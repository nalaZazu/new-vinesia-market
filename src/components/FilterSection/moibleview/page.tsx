"use client";
import React, { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import xDelete from "../../../assets/icons/X-delete.svg";
import Image from "next/image";
import { filtersList, sortList } from "@/constants/invesdropdown";

import Link from "next/link";
import { RangeSlider } from "@/common/Components";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface data {
  selectedFilters?: any;
  setSelectedFilters?: any;
  priceRange?: any;
  setPriceRange?: any;
}

export default function MobileFilter({
  selectedFilters,
  setSelectedFilters,
  priceRange,
  setPriceRange,
}: {
  selectedFilters?: any;
  setSelectedFilters?: any;
  priceRange?: any;
  setPriceRange?: any;
}) {
  const [selectedItems, setSelectedItems] = useState<string[]>(
    selectedFilters || []
  );
  // const [tempRange, setTempRange] = useState([0, 500]);
  const [firstDropdownOpen, setFirstDropdownOpen] = useState(false);
  const [activeState, setActiveState] = useState<any>({});
  const [selectedSort, setSelectedSort] = useState("default");
  const [isSelected, setIsSelected] = useState<any>([]);
  const [inputRange, setInputRange] = useState([1, 1500]);

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
    // setSelectedFilters(tempSelected);
    // close();
  };

  // const handleClear = (close: any) => {
  //   setSearchTerm("");
  //   // setSelectedFilters([]);
  //   close();
  // };

  const handleSelected = (item: any) => {
    const isSelectedItem = isSelected.includes(item);
    if (isSelectedItem) {
      const updatedIds = isSelected.filter(
        (selectedId: any) => selectedId !== item
      );
      setIsSelected(updatedIds);
    } else {
      const updatedIds = [...isSelected, item];
      setIsSelected(updatedIds);
    }
  };

  const handleRangeApply = (close: any) => {
    setPriceRange(inputRange);
    setSelectedFilters(isSelected);
    setFirstDropdownOpen(false);
  };

  const handleClear = (close: any) => {
    setSelectedItems([]);
    setIsSelected([]);
    setFirstDropdownOpen(false);
  };

  const handleRangeMove = (e: []) => {
    setInputRange(e);
  };

  return (
    <>
      <div className=" pt-6  pb-4">
        <Menu as="div" className="relative inline-block text-start w-full">
          <div>
            <Menu.Button
              className="flex items-center w-full justify-between gap-x-1.5 rounded-full   text-xs font-normal   shadow-sm  bg-orange-700   pl-4 pr-3 py-4   bg-opacity-10   text-zinc-800   uppercase leading-3 tracking-tight"
              onClick={() => setFirstDropdownOpen(!firstDropdownOpen)}
            >
              Filter
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-stone-500"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={"div"}
            show={firstDropdownOpen}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            {/* here is defined the new dropdown */}
            <div className="flex justify-end gap-5 w-full mt-3">
              <button
                onClick={() => handleClear(close)}
                className="text-center text-black text-xs font-normal tracking-wide   px-8 py-3 border border-orange-700  rounded-full"
              >
                Clear
              </button>
              <button
                onClick={handleRangeApply}
                className="text-center text-white text-xs font-normal tracking-wide   px-8 py-3 bg-secondary rounded-full"
              >
                Apply
              </button>
            </div>
            <div className="pt-7">
              {filtersList?.map((filterItem: any, filterItemId: any) => {
                const { name, options, type } = filterItem;
                return (
                  <Menu
                    as="div"
                    className="relative inline-block text-start w-full py-3 pb-4 "
                    key={filterItemId}
                  >
                    <div>
                      <Menu.Button
                        className="inline-flex w-full justify-between gap-x-1.5 rounded-md  px-3   text-primary 
                        divide-y divide-gray-800  text-base font-normal  leading-snug"
                        onClick={() => setActiveState({ [name]: true })}
                      >
                        {name}
                        <ChevronDownIcon
                          className="-mr-1 h-5 w-5 text-secondary"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={"div"}
                      show={activeState && activeState[name]}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <div className="flex flex-wrap gap-2">
                        {name === "Color" ? (
                          <Menu.Item>
                            {({ active }) => (
                              <div className="p-2 cursor-pointer hover:bg-secondary-dark text-secondary text-xxs font-normal tracking-wide flex gap-2 items-center">
                                <p className="p-2 cursor-pointer hover:bg-secondary-dark text-secondary text-sm font-normal tracking-wide">
                                  {options?.map(
                                    (itemName: any, itemNameId: any) => (
                                      <div key={itemNameId}>
                                        <input
                                          id={`${itemName}-${itemNameId}`}
                                          name="checkbox"
                                          type="checkbox"
                                          className="h-3 w-3 form-checkbox rounded-full"
                                          onChange={(e) =>
                                            handleChange(
                                              itemName?.toLowerCase()
                                            )
                                          }
                                        />
                                        <label
                                          htmlFor={`${itemName}-${itemNameId}`}
                                          className={classNames(
                                            active
                                              ? "text-primary"
                                              : "text-primary-dark",
                                            "pl-3 text-zinc-800 text-base font-normal leading-snug tracking-tight capitalize"
                                          )}
                                        >
                                          {itemName}
                                        </label>
                                      </div>
                                    )
                                  )}
                                </p>
                              </div>
                            )}
                          </Menu.Item>
                        ) : name === "Price" ? (
                          <div className="p-2 cursor-pointer hover:bg-secondary-dark text-secondary text-xxs font-normal tracking-wide mt-3 pl-3">
                            <p className="text-sm font-medium text-black  ">
                              Price range
                            </p>
                            <p className="text-sm  text-neutral-600 mt-2 mb-4  ">
                              User slider or enter min and max price
                            </p>
                            <div className="flex gap-4">
                              <div className="flex items-center  gap-1">
                                <p className="font-medium text-sm text-black">
                                  Min
                                </p>
                                <input
                                  name="min"
                                  type="number"
                                  value={inputRange[0]}
                                  onChange={(e) =>
                                    setInputRange([
                                      parseInt(e.target.value),
                                      inputRange[0],
                                    ])
                                  }
                                  className="h-8 w-20 p-2 text-black  rounded-[70px] border border-orange-700"
                                />
                              </div>
                              <span className="text-black font-semibold">
                                -
                              </span>
                              <div className="flex items-center gap-1">
                                <p className="font-medium text-sm text-black">
                                  Max
                                </p>
                                <input
                                  name="max"
                                  type="number"
                                  className="h-8 w-20 p-2 text-black  rounded-[70px] border border-orange-700"
                                  value={inputRange[1]}
                                  onChange={(e) =>
                                    setInputRange([
                                      parseInt(e.target.value),
                                      inputRange[1],
                                    ])
                                  }
                                />
                              </div>
                            </div>
                            <RangeSlider
                              range={options}
                              onChange={handleRangeMove}
                              value={inputRange}
                            />
                          </div>
                        ) : (
                          options.map((item: any, itemId: any) => (
                            <div className="pt-4" key={itemId}>
                              <div onClick={() => handleSelected(item)}>
                                <span
                                  className={`cursor-pointer px-3 py-2 bg-orange-700  rounded-[100px] justify-center items-center gap-1 inline-flex  ${
                                    isSelected.includes(item)
                                      ? "text-center text-white rounded-full"
                                      : "bg-opacity-10 text-primary"
                                  }`}
                                >
                                  <p className=" text-sm font-normal tracking-wide capitalize">
                                    {item}
                                  </p>
                                </span>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </Transition>
                  </Menu>
                );
              })}
            </div>
          </Transition>
        </Menu>
      </div>

      {/* second dropdown */}
      <div className="flex flex-row">
        <div className="basis-1/4">
          <p className=" tracking-wide pt-4  text-stone-600 text-base font-normal leading-snug">
            Sort by
          </p>
        </div>
        <Menu as="div" className="relative inline-block text-start basis-3/4">
          <div>
            <Menu.Button className="w-full flex gap-x-1.5 pl-4 pr-3 py-4 rounded-full   px-3 text-stone-500 text-base font-normal  leading-snug text-priamry border border-stone-500 justify-between uppercase">
              {selectedSort}
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-stone-500"
                aria-hidden="true"
              />
            </Menu.Button>
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
            <Menu.Items className="absolute left-0 z-10 mt-2 w-full origin-top-right rounded-md bg-orange-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-2">
              <div className="py-1">
                {sortList.map((d: any, i: any) => {
                  const { name } = d;
                  return (
                    <Menu.Item key={i}>
                      {({ active }) => (
                        <div
                          onClick={() => setSelectedSort(name)}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm capitalize"
                          )}
                        >
                          {name}
                        </div>
                      )}
                    </Menu.Item>
                  );
                })}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <hr
        className="border-secondary opacity-20 mt-8
        "
      />
    </>
  );
}
