"use client";
import React, { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { filtersList } from "@/constants/invesdropdowncomponents/Layout";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const DropDown = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tempSelected, setTempSelected] = useState<any>([]);

  const handleChange = (e: any) => {
    let index = tempSelected?.findIndex((d: any) => d == e);
    if (index == -1) {
      setTempSelected([...tempSelected, e]);
    } else {
      let tempArr = [...tempSelected];
      tempArr.splice(index, 1);
      setTempSelected(tempArr);
    }
  };
  // const handleApply = (close: any) => {
  //   setSelectedFilters(tempSelected);
  //   dispatch(handleSelected(tempSelected));
  //   close();
  // };
  // const handleClear = (close: any) => {
  //   setSearchTerm("");
  //   // setSelectedFilters([]);
  //   close();
  // };

  return (
    <>
      <div className="flex flex-wrap	 gap-4">
        {filtersList?.map((filterItem: any, filterItemId: any) => {
          const { name, options, type } = filterItem;
          return (
            <Menu
              as="div"
              className="relative inline-block text-left"
              key={filterItemId}
            >
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 pl-4 pr-3 py-4 rounded-full   px-3   text-sm font-semibold text-priamry shadow-sm   bg-orange-700 bg-opacity-10">
                  {name}
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-primary"
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
                <Menu.Items className="absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-orange-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <form>
                    <label
                      htmlFor="default-search"
                      className="text-zinc-800 text-xs font-normal  tracking-wide"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        type="search"
                        id="default-search"
                        autoComplete="off"
                        className="block w-full p-2 pl-4    border border-gray-300 rounded-lg bg-gray-50 text-neutral-400   text-sm font-normal   leading-tight  focus:ring-gry-300 focus:border-gray-300"
                      />
                    </div>
                  </form>
                  <div className="py-1">
                    {options?.map((item: any, itemId: any) => {
                      return (
                        <div>
                          <Menu.Item key={itemId}>
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
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          );
        })}
      </div>
    </>
  );
};

export default DropDown;
 
 
