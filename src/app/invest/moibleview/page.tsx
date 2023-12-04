"use client";
import React, { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { filtersList } from "@/constants/invesdropdown";
import Link from "next/link";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function MobileFilter() {
  const [firstDropdownOpen, setFirstDropdownOpen] = useState(false);
  const [activeState, setActiveState] = useState<any>();
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
      <div className=" pt-6  pb-14">
        <Menu as="div" className="relative inline-block text-left w-full">
          <div>
            <Menu.Button
              className="flex items-center w-full justify-between gap-x-1.5 rounded-full  px-3 py-4 text-xs font-normal text-primary shadow-sm  bg-orange-700 bg-opacity-10"
              onClick={() => setFirstDropdownOpen(!firstDropdownOpen)}
            >
              Filter
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-secondary"
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

            {filtersList?.map((filterItem:any, filterItemId: any) => {
              const { name, options, type } = filterItem;

              return (
                <Menu
                  as="div"
                  className="relative inline-block text-left w-full pt-7 "
                  key={filterItemId}
                >
                  <div>
                    <Menu.Button
                      className="inline-flex w-full justify-between gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-primary divide-y divide-gray-800"
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
                      {name == "Color" ? (
                        <Menu.Item>
                          {({ active }: any) => (
                            <p className="p-2 cursor-pointer hover:bg-secondary-dark   text-secondary text-xxs font-normal  tracking-wide flex gap-2 items-center">
                              <input
                                id={`${filterItem}-${filterItemId}`}
                                name="checkbox"
                                type="checkbox"
                                className="h-3 w-3 form-checkbox rounded-full"
                                onChange={(e) =>
                                  handleChange(filterItem?.toLowerCase())
                                }
                              />
                              <label
                                htmlFor={`${filterItem}-${filterItemId}`}
                                className={classNames(
                                  active
                                    ? " text-primary"
                                    : "text-primary-dark ",
                                  " text-sm"
                                )}
                              >
                                {name}
                              </label>
                            </p>
                          )}
                        </Menu.Item>
                      ) : (
                        options?.map((item: any, itemId: any) => {
                          return (
                            <div className="pt-4 " key={itemId}>
                              <div>
                                <span className=" px-3 py-2 bg-orange-700 bg-opacity-10 rounded-[100px]  justify-center items-center gap-1 inline-flex">
                                  <p className="text-primary text-sm font-normal tracking-wide capitalize">
                                    {item}
                                  </p>
                                  {/* <Image
                                    src={xDelete}
                                    alt="x-delete"
                                    onClick={() => handleRemoved(item)}
                                    className=" cursor-pointer"
                                  /> */}
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
          </Transition>
        </Menu>
      </div>

      {/* second dropdown */}
      <div className="grid grid-cols-5">
        <p className="text-primary text-xs font-normal  tracking-wide pt-4">
          Sort by
        </p>
        <Menu
          as="div"
          className="relative inline-block text-left w-full col-span-2"
        >
          <div>
            <Menu.Button className="flex justify-center gap-x-1.5 pl-4 pr-3 py-4 rounded-full   px-3  text-xs font-normal text-priamry shadow-sm  bg-orange-700 bg-opacity-10 ">
              Recommended
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-secondary"
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
    </>
  );
}

export default MobileFilter;
