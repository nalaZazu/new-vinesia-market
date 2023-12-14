import { NextIcon, PrevIcon } from "@/assets/icons/Icons";
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
    <div className=" h-20 flex-col justify-start items-start gap-2 inline-flex">
      <div className="h-4 justify-start items-center gap-1 inline-flex">
        <div className="text-[#A6836C] text-xs font-normal uppercase leading-[18px] tracking-tight">
          {title}
        </div>
      </div>
      <input
        name={name}
        className="self-stretch text-[#D99479] h-14 pl-6 pr-5 p-4 rounded-full border border-red-400 bg-transparent focus:border-red-500 placeholder-[#D99479]"
        placeholder={placeholder}
      />
    </div>
  );
}
