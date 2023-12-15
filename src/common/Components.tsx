// import { CheckCircleIcon, XIcon } from '@heroicons/react/solid'
import { NextIcon, PrevIcon, TickCirIcon } from "@/assets/icons/Icons";
import { XCircleIcon } from "@heroicons/react/20/solid";
import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

export function Checkbox({ label, name }: { label?: any; name?: any }) {
  return (
    <>
      <div className="flex gap-2">
        <label className="custom_checkbox">
          <input type="checkbox" id="default-checkbox" />
          <span className="checkmark"></span>
        </label>
        {label && (
          <label htmlFor="default-checkbox" className=" ps-6">
            {label}
          </label>
        )}
      </div>
    </>
  );
}
export function Button({
  label,
  beforeIcon,
  afterIcon,
  onClick,
  filled = true,
  btnStyle,
}: {
  label: any;
  beforeIcon?: any;
  afterIcon?: any;
  onClick?: any;
  filled?: any;
  btnStyle?: any;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-4 border border-[#BF4D2020] rounded-full px-8 justify-center h-14 w-full uppercase ${
        filled ? "bg-[#BF4D20] text-white" : "text-[#BF4D20] "
      } ${btnStyle}`}
    >
      {beforeIcon && beforeIcon}
      {label}
      {afterIcon && afterIcon}
    </button>
  );
}

export function CartControls({}) {
  return (
    <>
      <div className="flex sm:justify-end justify-center pt-8 ">
        <span className=" uppercase text-xs">
          <span className=" text-[#BF4D20]">next step :</span>
          &nbsp; Billng details
        </span>
      </div>
      <div className="sm:flex justify-between pt-4 pb-[106px] sm:gap-0 grid grid-cols-1 gap-6">
        <button className="flex items-center gap-4 border border-[#BF4D2020] rounded-full text-[#BF4D20] px-8 justify-center h-14 sm:order-1 order-2 sm:w-auto w-full">
          <PrevIcon />
          Back
        </button>
        <button className="flex items-center gap-4 border border-[#BF4D2020] rounded-full text-white px-8 justify-center h-14 bg-[#BF4D20] sm:order-2 order-1 sm:w-auto w-full">
          Next <NextIcon fill={"white"} />
        </button>
      </div>
    </>
  );
}

export function BillingInput({
  title,
  placeholder,
  name,
  Inputclass,
}: {
  title?: any;
  placeholder?: any;
  name?: any;
  Inputclass?: any;
}) {
  return (
    <div
      className={`flex-col justify-start items-start gap-2 inline-flex ${Inputclass}`}
    >
      {title && (
        <div className="h-4 justify-start items-center gap-1 inline-flex">
          <div className="text-[#A6836C] text-xs font-normal uppercase leading-[18px] tracking-tight">
            {title}
          </div>
        </div>
      )}
      <input
        name={name}
        className="self-stretch text-[#D99479] h-14 pl-6 pr-5 p-4 rounded-full border border-red-400 bg-transparent outline-red-500 placeholder-[#D99479]"
        placeholder={placeholder}
      />
    </div>
  );
}

/* This example requires Tailwind CSS v2.0+ */

export function AlertSuccess() {
  return (
    <div className="rounded-md bg-[#42A55E20] p-4 w-full">
      <div className="flex items-start">
        <div className="flex-shrink-0 h-6 w-6">
          <TickCirIcon />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">
            Successfully uploaded
          </p>
        </div>
        {/* <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className="inline-flex rounded-md p-1.5 text-red-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
            >
              <span className="sr-only">Dismiss</span>
              <XCircleIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export function SelectBox({
  title,
  placeholder,
  name,
  value,
  onChange,
}: {
  title?: any;
  placeholder?: any;
  name?: any;
  value?: any;
  onChange?: any;
}) {
  const data = [
    { id: 1, name: "Durward Reynolds" },
    { id: 2, name: "Kenton Towne" },
    { id: 3, name: "Therese Wunsch" },
    { id: 4, name: "Benedict Kessler" },
    { id: 5, name: "Katelyn Rohan" },
  ];

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className=" flex-col w-full justify-start items-start gap-2 inline-flex">
      {title && (
        <div className="h-4 justify-start items-center gap-1 inline-flex">
          <div className="text-[#A6836C] text-xs font-normal uppercase leading-[18px] tracking-tight">
            {title}
          </div>
        </div>
      )}
      {/* <Listbox value={value} onChange={onChange}>
        <Listbox.Button>{value}</Listbox.Button>
        <Listbox.Options>
          {data.map((d, i) => (
            <Listbox.Option
              key={i}
              value={d}
              // disabled={d.unavailable}
            >
              {d.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox> */}

      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
              Assigned to
            </Listbox.Label>
            <div className="relative mt-2 w-full">
              <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                <span className="flex items-center">
                  {/* <img src={selected.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
                  <span className="ml-3 block truncate">{value}</span>
                </span>
                {/* <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span> */}
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {data.map((d, i) => (
                    <Listbox.Option
                      key={i}
                      className={({ active }) =>
                        classNames(
                          active ? "bg-indigo-600 text-white" : "text-gray-900",
                          "relative cursor-default select-none py-2 pl-3 pr-9"
                        )
                      }
                      value={d}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "ml-3 block truncate"
                              )}
                            >
                              {d.name}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-indigo-600",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              {/* <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              /> */}
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}
