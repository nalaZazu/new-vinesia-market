import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { AboutModalValue } from "@/constants/aboutSection";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function AboutDropDown() {
  return (
    <div>
      {AboutModalValue?.map((item: any, index: any) => {
        const { id, title, number } = item;
        return (
          <Menu
            as="div"
            className="relative inline-block text-left w-full border-t border-b border-orange-700 border-opacity-20 "
            key={index}
          >
            <div>
              <Menu.Button className="inline-flex w-full justify-between items-center gap-x-1.5 rounded-md  text-sm font-semibold text-gray-900  pl-6 pr-4 py-4   cursor-pointer">
                <div className="flex items-center gap-3 ">
                  <input
                    id={id}
                    name={title}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-900 text-gray-900 focus:ring-text-gray-900"
                  />
                  <label
                    htmlFor={title}
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
          </Menu>
        );
      })}
    </div>
  );
}
