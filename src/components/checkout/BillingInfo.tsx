"use client";
import { EditIcon } from "@/assets/icons/Icons";
import {
  AlertSuccess,
  BillingInput,
  Button,
  SelectBox,
} from "@/common/Components";
import React, { useState } from "react";

export default function BillingInfo() {
  const [edit, setEdit] = useState(true);
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
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
            <BillingInput
              title="Title"
              name="title"
              placeholder="Choose Value"
            />

            <br className="hidden sm:block" />
            <BillingInput
              title="FIRST NAME"
              name="fname"
              placeholder="FIRST NAME"
            />
            <BillingInput
              title="Last NAME"
              name="lname"
              placeholder="Last NAME"
            />
            <div className="w-full">
              <SelectBox
                title="Country"
                name="country"
                placeholder="Select Country"
              />
            </div>

            <SelectBox
              title="Region"
              name="region"
              placeholder="Select Region"
            />

            {/* Country Pending */}
            {/* Region Pending */}
            <BillingInput
              title="address line 1"
              name="address1"
              placeholder="Address"
            />
            <BillingInput
              title="address line (optional)"
              name="address2"
              placeholder="Addres (Optional)"
            />
            <BillingInput
              title="Zip Code"
              name="zip_code"
              placeholder="Zip Code"
            />
            <BillingInput title="City" name="city" placeholder="City" />
          </div>

          <div onClick={() => setEdit(false)} className=" max-w-[200px] pt-8">
            <Button label="save address" btnStyle="text-xs" />
          </div>
        </div>
      ) : (
        <>
          <div className="pt-4 pb-6">
            <AlertSuccess />
          </div>
          <div>
            <p className="w-44 text-zinc-800 text-base font-normal leading-snug">
              John
            </p>
            <p className="w-44 text-zinc-800 text-base font-normal leading-snug">
              Newman
            </p>
            <p className="w-44 text-zinc-800 text-base font-normal leading-snug">
              Jangfemsteg 12
            </p>
            <p className="justify-start items-start gap-1 inline-flex">
              <span className="text-zinc-800 text-base font-normal leading-snug">
                20350
              </span>
              <span className=" text-zinc-800 text-base font-normal leading-snug">
                Hamburg
              </span>
            </p>
            <p className=" text-zinc-800 text-base font-normal leading-snug">
              Deutschland
            </p>
          </div>
        </>
      )}
    </div>
  );
}
