"use client";

import { BillingInput, Button, SelectBox } from "@/common/Components";
import TabButton from "@/common/TabButton";
import Loading from "@/components/loading/loading";
import { pagePaths } from "@/constants/navigate";
import { useUser } from "@/context/user";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const tabs = ["private", "company"];

const titles = [
  { id: 1, name: 'Mr.' },
  { id: 2, name: 'Mrs.' },
  { id: 3, name: 'Ms.' },
]

type Inputs = {
  firstName: string
  lastName: string
  emailAddress: string
  phoneNumber: string
  country: string,
  region: string,
  addressLine1: string
  addressLine2: string
  zipCode: string
  city: string
}

export default function Page() {
  const { isLoggedIn, isLoading } = useUser()

  const {push} = useRouter();

  const [activeTab, setActiveTab] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  useEffect(() => {
    if (isLoading) return
    if (!isLoggedIn) push(pagePaths.signup)
  }, [isLoggedIn, isLoading, push])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <div className=" max-w-[620px] mx-auto pb-16">
        <h2 className="py-6 text-2xl">Bravo! Account created.</h2>
        <p>
          Fill in your personal or company details and billing address. We will
          invoice you using these details if you make a purchase. You can change
          these details later under My Profile.
        </p>
        <TabButton
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          data={tabs}
        />

        {activeTab == 0 && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-6 grid sm:grid-cols-2 grid-cols-1 gap-6">
              <SelectBox title="title" name='title' data={titles} />
              <br className="hidden md:block" />
              <BillingInput label="First name" name='firstName' required={true} />
              <BillingInput label="Last name" name='lastName' required={true} />
              <BillingInput label="Email Address" name='email' required={true} />
              <BillingInput label="Phone Number" name='phone' required={true} />
              <SelectBox title="Country" name='country' required={true} data={[]} />
              <SelectBox title="Region" name='region' required={true} data={[]} />
              <BillingInput label="address line 1" name='address1' required={true} />
              <BillingInput label="address line 2 (optional)" name='address2' />
              <BillingInput label="Zip code" name='zipCode' required={true} />
              <BillingInput label="City" name='city' required={true} />
            </div>
          </form>
        )}

        {activeTab == 1 && (
          <div className="py-6 grid sm:grid-cols-2 grid-cols-1 gap-6">
            <div className=" sm:col-span-2 col-span-1">
              <BillingInput label="company name" name='companyName' required={true} />
            </div>
            <BillingInput label="Email Address" name='email' required={true} />
            <BillingInput label="tax id" name='taxId' required={true} />
            <SelectBox title="Country" name='country' required={true} data={[]} />
            <SelectBox title="Region" name='region' required={true} data={[]} />
            <BillingInput label="address line 1" name='address1' required={true} />
            <BillingInput label="address line 2 (optional)" name='address2' />
            <BillingInput label="Zip code" name='zipCode' required={true} />
            <BillingInput label="City" name='city' required={true} />
          </div>
        )}
        <div className="max-w-[300px] mx-auto">
          <Button label="Save & Continue" />
        </div>
      </div>
    </div>
  );
}
