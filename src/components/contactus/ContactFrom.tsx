import React from "react";
import { Envelope } from "@/assets/icons/Icons";
import { BillingInput, Button, SelectBox, TextArea } from "@/common/Components";
import { FormProvider, useForm } from "react-hook-form";
const data = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];


export default function ContactFrom() {
  const methods = useForm()

  const onSubmit = methods.handleSubmit(async (data) => {

  })

  return (
    <div>
      {" "}
      <div className="grid md:grid-cols-2">
        <div className="bg-[#F7EFDF] md:px-0 px-4">
          <div className="pt-20 pb-8 md:ps-20  ps-0">
            <h3 className="max-w-72 text-zinc-800 text-4xl font-light font-['Canela'] leading-[44px] pb-12">
              Get in touch, we are here to help
            </h3>
            <p className="pb-4 flex gap-2 items-center text-center text-orange-700 text-base font-normal leading-snug">
              <span>
                <Envelope />
              </span>
              <span> contact@vinesia.com</span>
            </p>
            <p className="text-neutral-600 text-base font-normal leading-snug">
              We generally answer within 24 hours on business days
            </p>

            <div className="max-w-[389px] h-[0px] border border-orange-700 border-opacity-20 my-8"></div>

            <div className="flex gap-4 items-center pb-6">
              <p className="text-zinc-800 text-base font-normal leading-snug">
                Marketing
              </p>
              <div className="w-4 h-[0px] border border-orange-700 border-opacity-20"></div>
              <p className="flex gap-2 items-center text-center text-orange-700 text-base font-normal leading-snug">
                <Envelope />
                marketing@vinesia.com
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <p className="text-zinc-800 text-base font-normal leading-snug">
                For press
              </p>
              <div className="w-4 h-[0px] border border-orange-700 border-opacity-20"></div>
              <p className="flex gap-2 items-center text-center text-orange-700 text-base font-normal leading-snug">
                <Envelope />
                pr@vinesia.com
              </p>
            </div>
          </div>
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={e => e.preventDefault()}
            noValidate
            autoComplete="off"
          >
            <div className=" bg-[#FAF5EA] md:p-20 p-4">
              <div className="py-3">
                <BillingInput name="name" label="Name" />
              </div>
              <div className="py-3">
                <BillingInput name="email" label="Email Address" />
              </div>

              <div className="py-3">
                <BillingInput name="phone" label="Phone (optional)" />
              </div>
              <div className="flex gap-6 py-3">
                <SelectBox name='topic' data={data} title={"TOPIC"} placeholder={"Choose"} />
                <SelectBox name='source'
                  data={data}
                  title={"How do you know about Vinesia?"}
                  placeholder={"Choose"}
                />
              </div>

              <div className="py-3">
                <TextArea title="LABEL" />
              </div>

              <div className="flex justify-end py-4">
                <span className="max-w-[200px]">
                  <Button label={"SEND"} />
                </span>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
