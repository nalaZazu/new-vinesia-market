"use client";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDownButton() {
  return (
    <>
      <Menu as="div" className="w-full relative inline-block text-left">
        <div>
          <Menu.Button className="justify-between    gap-1 flex items-center w-full gap-x-1.5 pl-4 pr-3 py-4 rounded-full  px-3  text-zinc-800 text-xs font-normal uppercase leading-3 tracking-tight bg-orange-700 bg-opacity-10">
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
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-orange-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-2">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="#"
                    className={classNames(
                      active
                        ? "  text-gray-900 hover:bg-none"
                        : "text-gray-700",
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
                      active ? "  text-gray-900" : "text-gray-700",
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
                      active ? "  text-gray-900" : "text-gray-700",
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
    </>
  );
}
