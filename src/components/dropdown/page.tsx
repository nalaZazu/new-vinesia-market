"use client";
import React, { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { filtersList } from "@/constants/invesdropdown";
import Badges from "../badage/page";
import { SearchIcon } from "@/assets/icons/Icons";
import { usePathname } from "next/navigation";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const DropDown = ({
  selectedFilters,
  setSelectedFilters,
}: {
  selectedFilters?: any;
  setSelectedFilters?: any;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
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
    // setSelectedFilters(selectedItems);
    console.log("selectedItems", selectedItems);

    // close();
  };
  const handleClear = (close: any) => {
    setSearchTerm("");
    // setSelectedItems([]);
    close();
  };

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {filtersList?.map((filterItem: any, filterItemId: any) => {
          const { name, options, type } = filterItem;
          return (
            <Menu
              as="div"
              className="relative inline-block text-start "
              key={filterItemId}
            >
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 pl-4 pr-3 py-4    px-3 items-center text-xs font-normal text-priamry shadow-sm     leading-3 tracking-tight   bg-orange-700 bg-opacity-10 rounded-full">
                  {name}
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-zinc-800     text-xs font-normal  uppercase leading-3 tracking-tight"
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
                <Menu.Items className="absolute left-0 z-10 mt-2 w-[355px] origin-top-right rounded-md bg-orange-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1 ">
                    <form>
                      <div className="relative px-4 py-6 w-full">
                        <div className="absolute left-5 inset-y-0 flex items-center w-7  pointer-events-none ps-2">
                          <SearchIcon
                            fill={pathName == "/" ? "white" : "#3a2824"}
                          />
                        </div>
                        <input
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          type="search"
                          id="default-search"
                          autoComplete="off"
                          placeholder="search"
                          className="block w-full p-4 bg-orange-50 text-primary ps-8 text-sm font-normal  leading-tight   outline-none  rounded-full border border-stone-400  "
                        />
                      </div>
                    </form>
                    <div className=" dropdownstyle">
                      {" "}
                      {/* here add the webkit classs  */}
                      {options?.map((item: any, itemId: any) => {
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
                                      handleChange(item?.toLowerCase())
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
                      })}
                    </div>

                    <div className=" cursor-pointer p-6  justify-end items-start gap-4 flex">
                      <button
                        className="text-center text-secondary text-xs font-normal  tracking-wide   px-8 py-3 rounded-full border border-secondary "
                        onClick={() => handleClear(close)}
                      >
                        Clear
                      </button>

                      <button
                        className="text-center text-white text-xs font-normal tracking-wide   px-8 py-3 bg-secondary rounded-full"
                        onClick={() => handleApply(close)}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          );
        })}
      </div>

      <div>
        <Badges
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      </div>
    </>
  );
};

export default DropDown;
