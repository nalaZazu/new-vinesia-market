"use client";
import React, { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { filtersList } from "@/constants/invesdropdown";
import Badges from "../badage/page";
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
  const handleClear = (close: any) => {
    setSearchTerm("");
    // setSelectedFilters([]);
    close();
  };

  return (
    <>
      <div className="flex flex-wrap gap-2  md:pb-14">
        {filtersList?.map((filterItem: any, filterItemId: any) => {
          const { name, options, type } = filterItem;
          return (
            <Menu
              as="div"
              className="relative inline-block text-left "
              key={filterItemId}
            >
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 pl-4 pr-3 py-4 rounded-full  px-3 items-center text-xs font-normal text-priamry shadow-sm bg-orange-700 bg-opacity-10  uppercase ">
                  {name}
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-zinc-800"
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
                <Menu.Items className="absolute left-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-orange-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                  <div className="py-1">
                    <form>
                      <label
                        htmlFor="default-search"
                        className="text-primary text-xs font-normal p-1"
                      >
                        Search
                      </label>
                      <div className="relative p-1">
                        <input
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          type="search"
                          id="default-search"
                          autoComplete="off"
                          className="block w-full p-2 pl-4  border border-orange-700 rounded-lg bg-orange-50 text-primary   text-sm font-normal   leading-tight  focus:border-orange-700 focus-visible:border-orange-700 outline-none"
                        />
                      </div>
                    </form>
                    {options?.map((item: any, itemId: any) => {
                      return (
                        <div key={itemId}>
                          <Menu.Item>
                            {({ active }) => (
                              <p className="p-2 cursor-pointer hover:bg-secondary-dark   text-secondary text-xxs font-normal  tracking-wide flex gap-2 items-center">
                                <input
                                  id={`${item}-${itemId}`}
                                  name="checkbox"
                                  type="checkbox"
                                  className="h-3 w-3 form-checkbox rounded-full"
                                  onChange={(e) =>
                                    handleChange(item?.toLowerCase())
                                  }
                                />
                                <label
                                  htmlFor={`${item}-${itemId}`}
                                  className={classNames(
                                    active
                                      ? " text-primary"
                                      : "text-primary-dark ",
                                    " text-sm"
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
                    <div className=" pt-4 pb-4 border-secondary border-t-2 justify-center items-center gap-2 inline-flex cursor-pointer px-1">
                      <button
                        className="text-center text-primary text-xs font-normal  tracking-wide    px-8 py-3 rounded-full border border-secondary "
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
