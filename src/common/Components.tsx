// import { CheckCircleIcon, XIcon } from '@heroicons/react/solid'
import { NextIcon, PrevIcon, TickCirIcon } from "@/assets/icons/Icons";
import { XCircleIcon } from "@heroicons/react/20/solid";
import React from "react";

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
}: {
  title?: any;
  placeholder?: any;
  name?: any;
}) {
  return (
    <div className=" flex-col justify-start items-start gap-2 inline-flex">
      {title && (
        <div className="h-4 justify-start items-center gap-1 inline-flex">
          <div className="text-[#A6836C] text-xs font-normal uppercase leading-[18px] tracking-tight">
            {title}
          </div>
        </div>
      )}
      <input
        name={name}
        className="self-stretch text-[#D99479] h-14 pl-6 pr-5 p-4 rounded-full border border-red-400 bg-transparent focus:border-red-500 placeholder-[#D99479]"
        placeholder={placeholder}
      />
    </div>
  );
}

export function ListCard({
  title,
  value,
  subTitle,
  subValue,
  titleClass,
  valueClass = "text-zinc-800",
}: {
  title?: any;
  value?: any;
  subTitle?: any;
  subValue?: any;
  titleClass?: any;
  valueClass?: any;
}) {
  return (
    <div className="w-full flex justify-between border-b border-orange-700 border-opacity-20">
      <div className="p-4 ">
        <p
          className={`text-zinc-800 text-base font-normal leading-snug ${titleClass} `}
        >
          {title}
        </p>
        <p className="text-zinc-500 text-xs font-normal font leading-[18px]">
          {subTitle}
        </p>
      </div>

      <div className=" p-4">
        <p
          className={`text-right  text-base font-normal leading-snug ${valueClass}`}
        >
          {value}
        </p>
        <p className="text-zinc-500 text-xs font-normal leading-[18px] text-end">
          {subValue}
        </p>
      </div>
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
