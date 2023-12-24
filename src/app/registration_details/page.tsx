"use client";

import { BillingInput, Button, SelectBox } from "@/common/Components";
import TabButton from "@/common/TabButton";
import Loading from "@/components/loading/loading";
import { useUserContext } from "@/context/user";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const tabs = ["private", "company"];

const titles = [
  {id: 1, name: 'Mr.'},
  {id: 2, name: 'Mrs.'},
  {id: 3, name: 'Ms.'},
]

export default function Page() {
  const { isLoggedIn } = useUserContext()

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    async function check() {
      const user = await isLoggedIn()

      if (user !== undefined) {
        setIsLoading(false)
      } else {
        router.push('/signup')
      }
    }
    check()
  }, [isLoggedIn, router]) 

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
          <div className="py-6 grid sm:grid-cols-2 grid-cols-1 gap-6">
            <SelectBox title="title" data={titles} />
            <br className="hidden md:block" />
            <BillingInput title="First name" required={true} />
            <BillingInput title="Last name" required={true} />
            <BillingInput title="Email Address" required={true} />
            <BillingInput title="Phone Number" required={true} />
            <SelectBox title="Country" required={true} data={[]} />
            <SelectBox title="Region" required={true} data={[]} />
            <BillingInput title="address line 1" required={true} />
            <BillingInput title="address line 2 (optional) " />
            <BillingInput title="Zip code" required={true} />
            <BillingInput title="City" required={true} />
          </div>
        )}

        {activeTab == 1 && (
          <div className="py-6 grid sm:grid-cols-2 grid-cols-1 gap-6">
            <div className=" sm:col-span-2 col-span-1">
              <BillingInput title="company name" required={true} />
            </div>
            <BillingInput title="Email Address" required={true} />
            <BillingInput title="tax id" required={true} />
            <SelectBox title="Country" required={true} data={[]} />
            <SelectBox title="Region" required={true} data={[]} />
            <BillingInput title="address line 1" required={true} />
            <BillingInput title="address line 2 (optional) " />
            <BillingInput title="Zip code" required={true}/>
            <BillingInput title="City" required={true}/>
          </div>
        )}
        <div className="max-w-[300px] mx-auto">
          <Button label="Save & Continue" />
        </div>
      </div>
    </div>
  );
}
