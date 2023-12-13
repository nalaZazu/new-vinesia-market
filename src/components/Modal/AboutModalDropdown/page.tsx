import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { AboutModalValue } from "@/constants/aboutSection";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function AboutDropDown() {
  return (
    <div className="py-8">
      {AboutModalValue?.map((item: any, index: any) => {
        const { id, title, number } = item;
        return (
          <Menu
            as="div"
            className="relative inline-block text-left w-full "
            key={id}
          >
            <div>
              <Menu.Button className="inline-flex w-full justify-between items-center gap-x-1.5 rounded-md  text-sm font-semibold text-gray-900  pl-6 pr-4 py-4 border-t border-b border-orange-700 border-opacity-20  ">
                <div className="flex items-center gap-3">
                  <input
                    id="options"
                    name="options"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-900 text-gray-900 focus:ring-text-gray-900"
                  />
                  <label
                    htmlFor="options"
                    className=" text-zinc-800 text-base font-normal  leading-snug"
                  >
                    {title}
                  </label>
                </div>
                <div className="flex gap-4">
                  <p className="text-right text-zinc-800 text-base font-normal   leading-snug">
                    {number}%
                  </p>
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-orange-700"
                    aria-hidden="true"
                  />
                </div>
              </Menu.Button>
            </div>

            {/* <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Account settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Support
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  License
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition> */}
          </Menu>
        );
      })}
    </div>
  );
}
