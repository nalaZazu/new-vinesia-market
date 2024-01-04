"use client";
import { ErrorIcon, TickCirIcon } from "@/assets/icons/Icons";
import { CartControls } from "@/common/Components";
import CartInfo from "@/components/checkout/CheckoutAside";
import Step1 from "@/components/checkout/Steps/Step1";
import Step2 from "@/components/checkout/Steps/Step2";
import Loading from "@/components/loading/loading";
import { pagePaths } from "@/constants/navigate";
import { useCart } from "@/context/cart";
import { useUser } from "@/context/user";
import { Address, User } from "@/types/user.dto";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

function check(item: string): boolean {
  return (item !== undefined && item !== null && item.length > 0)
}

function isComplete(addr: Address) {
  let res = true

  res = res && check(addr.addressLine1)
  res = res && check(addr.firstName)
  res = res && check(addr.lastName)
  res = res && check(addr.country)
  res = res && check(addr.zipCode)
  res = res && check(addr.city)
  res = res && check(addr.invoiceEmail)

  return res
}

function verify(legalAge: boolean, profile: User) {
  let error = ''

  //validate data from step1, go to payment amount confirmation (includes info about Vinesia Wallet)
  if (!legalAge) {
    error += "You need to be of legal drinking age to purchase wines\n"
  }

  if (!isComplete(profile.billingAddress)) {
    error += "You need to fill your Billing Information"
  }

  return error
}

export default function Checkout() {
  const { isLoggedIn, profile } = useUser()
  const { cartItems, cartOrder, checkout, isCartLoading } = useCart()
  const { push } = useRouter()
  const [saving, setIsSaving] = useState(false)
  const [step, setStep] = useState(1);
  const [nextStepDesc, setNextStepDesc] = useState('Summary')

  const [legalAge, setLegalAge] = useState(false)
  const [newsletter, setNewsletter] = useState(false)

  const [error, setError] = useState('')

  useEffect(() => {
    if (isCartLoading) return

    //User is not logged in, redirect to signup    
    if (!isLoggedIn) push(pagePaths.signup)

    //Cart is empty, redirect to invest page
    if (cartItems.length === 0) push(pagePaths.invest)

  }, [isCartLoading, isLoggedIn, push, cartItems])

  useEffect(() => {
    if (isCartLoading) return
    if (cartItems.length > 0) return

    if (cartOrder !== null) {
      push('/payment')
    } else {
      push('/invest')
    }
  }, [push, cartOrder, isCartLoading, cartItems])


  function setCheckbox(e: any) {
    if (e.target.name === 'legalAge') {
      setLegalAge(e.target.checked)

      if (profile === undefined || profile === null) return
      const error = verify(e.target.checked, profile)
      setError(error)
    }

    if (e.target.name === 'newsletter')
      setNewsletter(e.target.checked)
  }


  if (saving) {
    return <Loading text="Checkout ..." />
  }

  if (isCartLoading) {
    return <Loading />
  }

  function prevStep() {
    if (step === 1) {
      push('/cart')
    }
    if (step === 2) {
      //Go back to step about billing details
      setStep(1)
      setNextStepDesc('Summary')
    }
  }
  async function nextStep() {
    if (step === 1) {
      if (profile === undefined || profile === null) return

      const error = verify(legalAge, profile)
      setError(error)

      if (error.length === 0) {
        setStep(2)
        setNextStepDesc('Payment')
      }
    }
    if (step === 2) {

      setIsSaving(true)
      try {
        //validate data and move to payment
        await checkout()
        push('/payment')

      } catch (e) {
        console.error(e)
        setIsSaving(false)
      }
    }
  }

  return (
    <div className="max-w-[1171px] mx-auto px-4 md:mb-40 mb-20">
      <div className="w-full md:justify-start justify-between items-center md:gap-8 inline-flex sm:pt-[74px] pt-4 pb-4 border-b border-[#A6836C20]">
        <div className="justify-start items-center gap-2 flex">
          <div className="w-8 h-8 justify-center items-center flex">
            <TickCirIcon />
          </div>
          <h1 className="text-[#2F222B] md:text-4xl text-[21px] font-light leading-[44px]">
            Billing information
          </h1>
        </div>
        <div className="grow shrink basis-0 h-[1px] border border-[#ACA7AA] border-dashed md:block hidden"></div>
        <h2 className="text-[#A6836C] text-[21px] font-light leading-[29px] tracking-wide md:block hidden ">
          02 — Finalized
        </h2>
        <div className="w-[65px] justify-start items-center gap-4 inline-flex md:hidden">
          <h2 className="text-[#2F222B] text-[21px] font-light leading-[29px]">
            02
          </h2>
          <h2 className="text-[#A6836C] text-[21px] font-light leading-[29px]">
            03
          </h2>
        </div>
      </div>

      {step != 3 && (
        <div className="flex justify-between mt-12 ">
          <div className="max-w-[501px] w-full">
            {step == 1 && <Step1 legalAge={legalAge} setLegalAge={setCheckbox} newsletter={newsletter} setNewsletter={setCheckbox} />}
            {step == 2 && <Step2 />}

            {error.length > 0 && <div className="bg-[#FEEDED] text-[#DC2626] rounded-[8px] mt-10 p-4 align-middle flex"><ErrorIcon /> <div className="mx-2 flex justify-center">{error}</div></div>}

            <CartControls step={step} prevStep={prevStep} nextStep={nextStep} nextStepDesc={nextStepDesc} />
          </div>

          <div className="max-w-[501px] md:block hidden">
            <CartInfo />
          </div>
        </div>
      )}
      {step == 3 && (
        <div className="mt-12 max-w-[560px]  mx-auto">
          <CartInfo />
          <CartControls step={step} prevStep={prevStep} nextStep={nextStep} />
        </div>
      )}
    </div>
  );
}
