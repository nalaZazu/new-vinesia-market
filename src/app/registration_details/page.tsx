"use client";
import { BillingInput, Button, SelectBox } from "@/common/Components";
import TabButton from "@/common/TabButton";
import React, { useState } from "react";
const tabs = ["private", "company"];
export default function page() {
  const [activeTab, setActiveTab] = useState(0);
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
            <SelectBox title="title" />
            <br className="hidden md:block" />
            <BillingInput title="First name" />
            <BillingInput title="Last name" />
            <BillingInput title="Email Address" />
            <BillingInput title="Phone Number" />
            <SelectBox title="Country" />
            <SelectBox title="Region" />
            <BillingInput title="address line 1" />
            <BillingInput title="address line 2 (optional) " />
            <BillingInput title="Zip code" />
            <BillingInput title="City" />
          </div>
        )}

        {activeTab == 1 && (
          <div className="py-6 grid sm:grid-cols-2 grid-cols-1 gap-6">
            <div className=" sm:col-span-2 col-span-1">
              <BillingInput title="company name" />
            </div>
            <BillingInput title="Email Address" />
            <BillingInput title="tax id" />
            <SelectBox title="Country" />
            <SelectBox title="Region" />
            <BillingInput title="address line 1" />
            <BillingInput title="address line 2 (optional) " />
            <BillingInput title="Zip code" />
            <BillingInput title="City" />
          </div>
        )}
        <div className="max-w-[300px] mx-auto">
          <Button label="Save & Continue" />
        </div>
      </div>
    </div>
  );
}
