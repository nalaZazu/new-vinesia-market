"use client";
import { EditIcon } from "@/assets/icons/Icons";
import {
  AlertSuccess,
  BillingInput,
  Button,
  SelectBox,
} from "@/common/Components";
import { Countries } from "@/constants/countries";
import { address_validation, city_validation, country_validation, last_name_validation, name_validation } from "@/constants/formFields";
import { useUser } from "@/context/user";
import { truncate } from "fs";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Loading from "../loading/loading";
import { useRouter } from "next/navigation";
import { pagePaths } from "@/constants/navigate";
import { Address } from "@/types/user.dto";

export default function BillingInfo() {
  const { profile, isLoading, isLoggedIn, setBillingAddress } = useUser()
  const { push } = useRouter()

  const [edit, setEdit] = useState(false);
  const [isSaving, setIsSaving] = useState(false)

  const methods = useForm()

  const onSubmit = methods.handleSubmit(async (data) => {
    setIsSaving(true)
    const address: Address = {
      title: data.title,
      firstName: data.firstName,
      lastName: data.lastName,
      country: data.country,
      region: data.region,
      addressLine1: data.address1,
      addressLine2: data.address2,
      zipCode: data.zipCode,
      city: data.city
    }

    await setBillingAddress(address)

    setIsSaving(false)
    setEdit(false)
  })

  useEffect(() => {
    if (isLoading) return
    if (!isLoggedIn) push(pagePaths.signup)
  }, [isLoggedIn, isLoading, push])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <div className="justify-start items-center gap-2 inline-flex">
        <div className="text-zinc-800 text-lg font-semibold leading-relaxed">
          Billing Address
        </div>
        {!edit && (
          <button onClick={() => setEdit(!edit)}>
            <EditIcon />
          </button>
        )}
      </div>
      {/* Billing Address */}
      {edit ? (
        <div className="pt-6">

          <FormProvider {...methods}>
            <form
              onSubmit={e => e.preventDefault()}
              noValidate
              autoComplete="off"
              className="container"
            >
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                <BillingInput
                  label="Title"
                  name="title"
                  placeholder="Choose Value"
                />

                <br className="hidden sm:block" />
                <BillingInput
                  label="FIRST NAME"
                  name="firstName"
                  placeholder="FIRST NAME"
                  value={profile?.billingAddress?.firstName}
                  {...name_validation}
                />
                <BillingInput
                  label="Last NAME"
                  name="lastName"
                  placeholder="Last NAME"
                  value={profile?.billingAddress?.lastName}
                  {...last_name_validation}

                />
                <SelectBox
                  title="Country"
                  name="country"
                  placeholder="Select Country"
                  data={Countries.map((x) => x.name)}
                  value={profile?.billingAddress?.country}
                  {...country_validation}
                />

                <BillingInput
                  label="Region"
                  name="region"
                  placeholder="Region"
                  value={profile?.billingAddress?.region}
                />

                {/* Country Pending */}
                {/* Region Pending */}
                <BillingInput
                  label="address line 1"
                  name="address1"
                  placeholder="Address"
                  value={profile?.billingAddress?.addressLine1}
                  {...address_validation}
                />
                <BillingInput
                  label="address line (optional)"
                  name="address2"
                  placeholder="Address (Optional)"
                  value={profile?.billingAddress?.addressLine2}
                />
                <BillingInput
                  label="Zip Code"
                  name="zipCode"
                  placeholder="Zip Code"
                  value={profile?.billingAddress?.zipCode}
                />
                <BillingInput
                  label="City"
                  name="city"
                  placeholder="City"
                  value={profile?.billingAddress?.city}
                  {...city_validation}
                />
              </div>

              <div onClick={onSubmit} className=" max-w-[200px] pt-8">
                <Button disabled={isSaving} label="save address" btnStyle="text-xs" />
              </div>
            </form>
          </FormProvider>
        </div>
      ) : (
        <>
          {profile === null ? <></> :
            <div>
              <p className="w-44 text-zinc-800 text-base font-normal leading-snug">
                {profile.billingAddress.firstName}
              </p>
              <p className="w-44 text-zinc-800 text-base font-normal leading-snug">
                {profile.billingAddress.lastName}
              </p>
              <p className="w-44 text-zinc-800 text-base font-normal leading-snug">
                {profile.billingAddress.addressLine1}
              </p>
              <p className="justify-start items-start gap-1 inline-flex">
                <span className="text-zinc-800 text-base font-normal leading-snug">
                  {profile.billingAddress.zipCode}
                </span>
                <span className=" text-zinc-800 text-base font-normal leading-snug">
                  {profile.billingAddress.city}
                </span>
              </p>
              <p className=" text-zinc-800 text-base font-normal leading-snug">
                {profile.billingAddress.country}
              </p>
            </div>}
        </>
      )}
    </div>
  );
}
