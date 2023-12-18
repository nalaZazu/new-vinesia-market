import { Button, RadioButton } from "@/common/Components";
import React from "react";

export default function Page() {
  return (
    <div>
      <div className=" max-w-[620px] mx-auto p-16 my-16 shadow bg-white rounded-lg">
        <h2 className="py-6 text-2xl">We are almost done...</h2>
        <p>
          Select the currency in which you wish to payfor your future purchases
        </p>

        <div>
          <div className="w-[400px] h-[72px] px-3 py-4 bg-gray-50 rounded-lg justify-start items-center inline-flex">
            <div className="h-10 justify-start items-center gap-2 flex">
              <div className="w-6 h-6 relative" />
              <div className="grow shrink basis-0 flex-col justify-center items-start gap-1 inline-flex">
                <div className="self-stretch text-indigo-900 text-sm font-medium tracking-tight">
                  Be careful. Once selected, you will no longer be able to
                  change it.
                </div>
              </div>
            </div>
          </div>

          <RadioButton />
        </div>
        <div className="max-w-[200px] mx-auto">
          <Button label="save" />
        </div>
      </div>
    </div>
  );
}
