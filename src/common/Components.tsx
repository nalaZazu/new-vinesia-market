"use client";
// import { CheckCircleIcon, XIcon } from '@heroicons/react/solid'
import {
  AlertCircle,
  AlertIcons,
  ErrorIcon,
  InfoIcon,
  NextIcon,
  PrevIcon,
  TickCirIcon,
} from "@/assets/icons/Icons";
import { XCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import React, { Fragment, useEffect, useState } from "react";
import { Listbox, Transition, RadioGroup } from "@headlessui/react";
import { useRouter } from "next/navigation";
import ReactSlider from "react-slider";
import { Controller, useFormContext } from "react-hook-form";
import { findInputError, isFormInvalid } from "@/utils/form";

export function Checkbox({ label, name, value, setValue }: { label?: any; name?: any, value?: boolean, setValue?: any }) {
  return (
    <>
      <div className="flex gap-2">
        <label className="custom_checkbox">
          <input type="checkbox" name={name} checked={value} onChange={setValue} />
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
  disabled = false,
}: {
  label: any;
  beforeIcon?: any;
  afterIcon?: any;
  onClick?: any;
  filled?: any;
  btnStyle?: any;
  disabled?: boolean;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`flex items-center gap-4 border border-[#BF4D2020] rounded-full px-8 justify-center h-14 w-full uppercase ${filled ? "bg-[#BF4D20] text-white" : "text-[#BF4D20] "
        } ${btnStyle}`}
    >
      {beforeIcon && beforeIcon}
      {label}
      {afterIcon && afterIcon}
    </button>
  );
}

export function CartControls({
  btnOneTittle = "Back",
  btnTwoTittle = "Next",
  prevStep,
  nextStep,
  prevStepDesc,
  nextStepDesc,
  disable,
}: {
  step?: any;
  setStep?: any;
  btnOneTittle?: any;
  btnTwoTittle?: any;

  prevStep?: any
  nextStep?: any

  prevStepDesc?: string;
  nextStepDesc?: string;

  disable?: any;
}) {
  return (
    <div>
      {nextStep &&
      <div className="flex sm:justify-end justify-center pt-8">
        <span className="uppercase text-xs">
          <span className="text-[#BF4D20]">next step: </span>
          {nextStepDesc}
        </span>
      </div>}
      <div className="sm:flex justify-between pt-4 pb-[106px] sm:gap-0 grid grid-cols-1 gap-6">
        { prevStep &&
        <button
          onClick={() => prevStep()}
          className="flex items-center gap-4 border border-[#BF4D2020] rounded-full text-[#BF4D20] px-8 justify-center h-14 sm:order-1 order-2 sm:w-auto w-full"
        >
          <PrevIcon />
          {btnOneTittle}
        </button>}
        {nextStep &&
        <button
          disabled={disable}
          onClick={() => nextStep()}
          className={`  ${disable ? "cursor-no-drop" : "cursor-pointer"
            }  flex items-center gap-4 border   border-[#BF4D2020] rounded-full text-white px-8 justify-center h-14 bg-[#BF4D20] sm:order-2 order-1 sm:w-auto w-full
        `}
        >
          {btnTwoTittle} <NextIcon fill="white" />
        </button>}
      </div>
    </div>
  );
}

export function BillingInput({
  name,
  label,
  id,
  placeholder,
  validation,
  className,
  value,
  required = false,
}: {
  name: string;
  label?: string;
  id?: any;
  placeholder?: string;
  validation?: any;
  className?: string;
  required?: boolean;
  value?: string;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputErrors = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputErrors);

  const options = { value: value, ...validation };

  return (
    <div
      className={`flex-col justify-start items-start gap-2 inline-flex w-full ${className}`}
    >
      {label && (
        <div className="h-4 justify-start items-center gap-1 inline-flex">
          <div className="text-[#A6836C] text-xs font-normal uppercase leading-[18px] tracking-tight">
            {label} {required && <>*</>}
          </div>
        </div>
      )}
      <input
        id={id}
        placeholder={placeholder}
        className="self-stretch text-[#827A80] h-14 pl-6 pr-5 p-4 rounded-full border border-[#BF4D20] bg-transparent outline-red-500 placeholder-[#D99479]"
        {...register(name, options)}
      />
      {isInvalid && <InputError text={inputErrors.error?.message ?? ""} />}
    </div>
  );
}

export function InputError({ text }: { text: string }) {
  return <span className="text-[#EF4444] text-[12px]">{text}</span>;
}

export function TextArea({
  title,
  placeholder,
  name,
  Inputclass,
  required,
}: {
  title?: any;
  placeholder?: any;
  name?: any;
  Inputclass?: any;
  required?: boolean;
}) {
  return (
    <div
      className={`flex-col justify-start items-start gap-2 inline-flex w-full ${Inputclass}`}
    >
      {title && (
        <div className="h-4 justify-start items-center gap-1 inline-flex">
          <div className="text-[#A6836C] text-xs font-normal uppercase leading-[18px] tracking-tight">
            {title} {required !== undefined ? <>*</> : <></>}
          </div>
        </div>
      )}
      <textarea
        name={name}
        rows={5}
        className="self-stretch text-[#827A80] pl-6 pr-5 p-4 rounded-xl border border-[#BF4D20] bg-transparent outline-red-500 placeholder-[#D99479]"
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
        <p className={`text-zinc-800 text-base leading-snug ${titleClass} `}>
          {title}
        </p>
        <p className="text-zinc-500 text-xs font leading-[18px]">{subTitle}</p>
      </div>

      <div className=" p-4">
        <p className={`text-right  text-base leading-snug ${valueClass}`}>
          {value}
        </p>
        <p className="text-zinc-500 text-xs leading-[18px] text-end">
          {subValue}
        </p>
      </div>
    </div>
  );
}

/* This example requires Tailwind CSS v2.0+ */

export function AlertSuccess({ text = "" }: { text?: string }) {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return <></>;
  }

  return (
    <div className="rounded-md bg-[#42A55E20] p-4 w-full">
      <div className="flex items-start">
        <div className="flex-shrink-0 h-6 w-6">
          <TickCirIcon />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">{text}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className="inline-flex rounded-md p-1.5 text-red-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon
                onClick={() => setVisible(false)}
                className="h-5 w-5 text-red-500"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AlertError({ message }: { message?: any }) {
  return (
    <div className="rounded-md bg-red-500/20 p-4 w-full">
      <div className="flex items-start">
        <div className="flex-shrink-0 h-6 w-6">
          <span className=" rotate-90 text-red-500 ">
            <ErrorIcon />
          </span>
        </div>
        <div className="ml-3">
          <p className=" text-base font-medium text-[#DC2626]">{message}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className="inline-flex rounded-md p-1.5 text-red-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SelectBox({
  title,
  name,
  placeholder,
  validation,
  value,
  required,
  data = [],
}: {
  title?: any;
  name: any;
  placeholder?: any;
  validation?: any;
  value?: any;
  required?: boolean;
  data: any[];
}) {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext();

  const inputErrors = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputErrors);

  const options = { value: value, ...validation };

  return (
    <div className=" flex-col w-full justify-start items-start gap-2 inline-flex">
      {title && (
        <div className="h-4 justify-start items-center gap-1 inline-flex">
          <div className="text-[#A6836C] text-xs font-normal uppercase leading-[18px] tracking-tight">
            {title} {required !== undefined ? <>*</> : <></>}
          </div>
        </div>
      )}
      <select
        {...register(name, options)}
        className="self-stretch w-full text-start text-[#D99479] h-14 pl-6 pr-5 p-4 rounded-full border  border-[#BF4D20]  bg-transparent outline-red-500 placeholder-[#D99479]"
      >
        <option value="">Select {title}</option>
        {data.map((d, i) => (
          <option key={i} value={d.id}>
            {d.name}
          </option>
        ))}
      </select>
      {isInvalid && <InputError text={inputErrors.error?.message ?? ""} />}
    </div>
  );
}

export function CheckoutComponent({
  stage = 1,
}: {
  stage: number
}) {
  const selected = 'text-[#2f222b] text-[36px]'
  const notSelected = 'text-[#A6836C] text-[21px]'
  
  const firstClass = stage === 1 ? selected : notSelected
  const secondClass = stage === 2 ? selected : notSelected
  const thirdClass = stage === 3 ? selected : notSelected

  return <>
    <div className="w-full font-['Canela'] md:justify-start justify-between items-center md:gap-8 inline-flex pt-[74px] pb-4 border-b border-[#A6836C20]">
      <div className={`flex justify-start items-center w-[170px] font-light leading-[29px] tracking-wide ${firstClass}`}>
        {stage > 1 ?
          <div className="w-8 h-8 justify-center items-center">
            <TickCirIcon />
          </div> : <>01 - </>}
        Billing
      </div>
      <div className="grow shrink basis-0 h-[1px] border border-[#ACA7AA] border-dashed md:block hidden"></div>
      <div className={`flex justify-center items-center text-center w-[210px] font-light leading-[29px] tracking-wide ${secondClass}`}>
        {stage > 2 ?
          <div className="w-8 h-8 justify-center items-center">
            <TickCirIcon />
          </div> : <>02 - </>}
        Payment
      </div>
      <div className="grow shrink basis-0 h-[1px] border border-[#ACA7AA] border-dashed md:block hidden"></div>
      <div className={`flex justify-end items-right text-right w-[170px] font-light leading-[29px] tracking-wide ${thirdClass}`}>
      {stage > 2 ?
          <div className="w-8 h-8 justify-right items-right">
            <TickCirIcon />
          </div> : <>03 - </>}
        Finalized
      </div>
    </div>
  </>
}

const plans = ["Euro (€)", "US Dollars ($)"];

export function RadioButton() {
  const [plan, setPlan] = useState(plans[0]);

  return (
    <RadioGroup value={plan} onChange={setPlan} name="plan">
      {/* <RadioGroup.Label>Plan</RadioGroup.Label> */}
      {plans.map((p) => (
        // <RadioGroup.Option key={plan} value={plan}>
        //   {plan}
        // </RadioGroup.Option>
        <RadioGroup.Option
          key={p}
          value={p}
          className=" my-4 w-full border rounded-lg border-[#6C757D] "
        >
          {({ checked }) => (
            <p className={` p-5 w-full flex gap-4 `}>
              <span
                className={`w-6 h-6 rounded-full border-[#6C757D]  ${checked ? " border-8" : "border-2"
                  } `}
              ></span>
              {p}
            </p>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
}

export const RangeSlider = ({
  range,
  onChange,
  value,
}: {
  range: any;
  onChange: Function;
  value?: any;
}) => {
  const Thumb = (props: any, state: any) => (
    <div
      {...props}
      style={{
        ...props.style,

        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
      }}
      className="relative shadow-md bg-gray-200 h-5 w-5 rounded-full mt-[6px]"
    >
      <span className="absolute -top-8 bg-gray-200 rounded-md p-1 min-w-[20px] min-w text-black text-xxs">
        {state.valueNow}
      </span>
    </div>
  );

  return (
    <div>
      <ReactSlider
        value={value}
        className="horizontal-slider w-full mt-10"
        thumbClassName="bg-primary w-5 h-5 rounded-full top-2 text-xs mx-auto"
        trackClassName="example-track"
        defaultValue={range}
        ariaLabel={["Leftmost thumb", "Rightmost thumb"]}
        // renderThumb={(props: any, state: any) => (
        //   <div {...props}>{state.valueNow}</div>
        // )}
        onChange={(e) => onChange(e)}
        pearling
        min={range[0]}
        max={range[1]}
        minDistance={10}
        renderThumb={Thumb}
      />
    </div>
  );
};
