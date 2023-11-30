import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function DropDownButton() {
  return (
    <Menu as="div" className="relative inline-block text-left w-full">
      <Menu.Button className=" w-full justify-between bg-white px-3 py-2  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50    text-zinc-800 text-xxs font-normal  tracking-wide   p-2 rounded-lg border border-neutral-400 items-center gap-1 inline-flex">
        Recommended
        <ChevronDownIcon
          className="-mr-1 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </Menu.Button>


      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className="p-2 cursor-pointer hover:bg-secondary-dark   text-secondary text-xxs font-normal  tracking-wide flex gap-3"
                >
                  Edit
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className="p-2 cursor-pointer hover:bg-secondary-dark   text-secondary text-xxs font-normal  tracking-wide flex gap-3"
                >
                  Duplicate
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className="p-2 cursor-pointer hover:bg-secondary-dark   text-secondary text-xxs font-normal  tracking-wide flex gap-3"
                >
                  Archive
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className="p-2 cursor-pointer hover:bg-secondary-dark   text-secondary text-xxs font-normal  tracking-wide flex gap-3"
                >
                  Move
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className="p-2 cursor-pointer hover:bg-secondary-dark   text-secondary text-xxs font-normal  tracking-wide flex gap-3"
                >
                  Share
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className="p-2 cursor-pointer hover:bg-secondary-dark   text-secondary text-xxs font-normal  tracking-wide flex gap-3"
                >
                  Add to favorites
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className="p-2 cursor-pointer hover:bg-secondary-dark   text-secondary text-xxs font-normal  tracking-wide flex gap-3"
                >
                  Delete
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>

  );
}
