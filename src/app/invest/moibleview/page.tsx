"use client";
import React, { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import xDelete from "../../../assets/icons/X-delete.svg";
import Image from "next/image";
import { filtersList } from "@/constants/invesdropdown";

import Link from "next/link";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function MobileFilter() {
  const [firstDropdownOpen, setFirstDropdownOpen] = useState(false);
  const [activeState, setActiveState] = useState<any>({});
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

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
    console.log("selectedItems", selectedItems);

    // close();
  };
  // const handleClear = (close: any) => {
  //   setSearchTerm("");
  //   // setSelectedFilters([]);
  //   close();
  // };
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
            <div className="pt-7">
              {filtersList?.map((filterItem: any, filterItemId: any) => {
                const { name, options, type } = filterItem;
                return (
                  <Menu
                    as="div"
                    className="relative inline-block text-start w-full py-4 "
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
                              <div className="p-2 cursor-pointer hover:bg-secondary-dark   text-secondary text-xxs font-normal  tracking-wide flex gap-2 items-center">
                                <p className="p-2 cursor-pointer hover:bg-secondary-dark text-secondary text-sm font-normal  tracking-wide">
                                  {options?.map(
                                    (itemName: any, itemNameId: any) => {
                                      return (
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
                                                ? " text-primary"
                                                : "text-primary-dark ",
                                              " pl-3 text-zinc-800 text-base font-normal leading-snug tracking-tight capitalize"
                                            )}
                                          >
                                            {itemName}
                                          </label>
                                        </div>
                                      );
                                    }
                                  )}
                                </p>
                              </div>
                            )}
                          </Menu.Item>
                        ) : (
                          options.map((item: any, itemId: any) => {
                            return (
                              <div className="pt-4 " key={itemId}>
                                <div>
                                  <span className=" px-3 py-2 bg-orange-700 bg-opacity-10 rounded-[100px]  justify-center items-center gap-1 inline-flex">
                                    <p className="text-primary text-sm font-normal tracking-wide capitalize">
                                      {item}
                                    </p>
                                  </span>
                                </div>
                              </div>
                            );
                          })
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
              Recommended
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
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Account settings
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      License
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Support
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
        <hr  className="border-secondary opacity-20 mt-8
        "/>
    </>
  );
}

export default MobileFilter;
