import { EditIcon, Google, InfoIcon } from "@/assets/icons/Icons";
import DropDownButton from "@/common/DropDownButton";
import SwitchToggle from "@/common/Switch";
import React from "react";

export default function Account() {
  return (
    <div className="pb-[150px]">
      <p className="text-zinc-800 text-lg font-semiboldleading-relaxed">
        Account data
      </p>
      <div className="pt-6 pb-8 flex justify-between">
        <div>
          <p className="text-[#906447] text-xs font-normaluppercase leading-[18px] tracking-tight">
            Name and last name
          </p>
        </div>
        <div>
          <div>
            <div className="flex justify-between min-w-[293px] pb-3">
              <p className="text-zinc-800 text-base font-normal leading-snug">
                John
              </p>
              <span>
                <EditIcon />
              </span>
            </div>
            <div className="flex justify-between min-w-[293px]">
              <p className="text-zinc-800 text-base font-normal leading-snug">
                John
              </p>
              <span>
                <EditIcon />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* col 2 */}
      <div className="pb-8 flex justify-between">
        <div>
          <p className="text-[#906447] text-xs font-normaluppercase leading-[18px] tracking-tight">
            Email address
          </p>
        </div>
        <div>
          <div>
            <div className="flex justify-between min-w-[293px] pb-3">
              <p className="text-zinc-800 text-base font-normal leading-snug">
                john.t@gmail.com
              </p>
              <span>
                <InfoIcon fill={"#BF4D20"} size={"24"} />
              </span>
            </div>
            <div className="flex justify-between min-w-[293px]">
              <p className=" flex gap-2 text-zinc-500 text-xs font-normal leading-[18px]">
                Registered with
                <span>
                  <Google />
                </span>
              </p>
              <span>
                <EditIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* col 3 */}
      <div className="pb-8 flex justify-between">
        <div>
          <p className="text-[#906447] text-xs font-normaluppercase leading-[18px] tracking-tight">
            Billing address
          </p>
        </div>
        <div>
          <div>
            <div className="flex justify-between min-w-[293px] pb-3">
              <p className="text-zinc-800 text-base font-normal leading-snug">
                Jangfemsteg 12
              </p>
              <span>
                <InfoIcon fill={"#BF4D20"} size={"24"} />
              </span>
            </div>
            <div>
              <p className=" text-zinc-800 text-base font-normal leading-snug pb-2">
                20350 Hamburg
              </p>
              <p className="text-zinc-800 text-base font-normal leading-snug pb-2">
                Deutschland
              </p>
              <p className=" text-zinc-500 text-xs font-normal leading-[18px]">
                email address for invoices
              </p>
              <p className="text-zinc-800 text-base font-normal leading-snug">
                comany@example.com
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* col 4 */}
      <div className="flex justify-between">
        <div>
          <p className="text-[#906447] text-xs font-normaluppercase leading-[18px] tracking-tight">
            Bank account number
          </p>
        </div>
        <div className="flex justify-between min-w-[293px] pb-3">
          <p className="text-zinc-800 text-base font-normal leading-snug">
            DE89370400440532013000
          </p>
          <span>
            <EditIcon />
          </span>
        </div>
      </div>
      <div className=" h-[0px] border border-orange-700 border-opacity-20 my-12"></div>
      {/* col 5 Preferences */}
      <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
        Preferences
      </p>
      <div className="flex justify-between pt-6 items-center">
        <div>
          <p className="text-[#906447] text-xs font-normaluppercase leading-[18px] tracking-tight">
            Language
          </p>
        </div>
        <div className="flex justify-between min-w-[293px]">
          <div className="w-[200px]">
            <DropDownButton title="English" />
          </div>
        </div>
      </div>
      {/* col 6 */}
      <div className="flex justify-between pt-6 items-center">
        <div>
          <p className="text-[#906447] text-xs font-normaluppercase leading-[18px] tracking-tight">
            Currency
          </p>
        </div>
        <div className="flex justify-between min-w-[293px]">
          <p className="flex gap-2 text-zinc-800 text-base font-normal leading-snug">
            $ Dollars
            <InfoIcon fill={"#BF4D20"} size={"24"} />
          </p>
        </div>
      </div>
      <div className=" h-[0px] border border-orange-700 border-opacity-20 my-12"></div>
      {/* col 7 */}
      <p className=" flex gap-2 items-center text-zinc-800 text-lg font-semibold leading-relaxed">
        Preferences
        <InfoIcon fill={"#BF4D20"} size={"24"} />
      </p>
      <div className="flex justify-between pt-6 items-center">
        <div>
          <p className="text-[#906447] text-xs font-normaluppercase leading-[18px] tracking-tight">
            Notify me when someone bids on my assets
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <span>On</span>
          <SwitchToggle />
        </div>
      </div>

      <div className="flex justify-between pt-6 items-center">
        <div>
          <p className="text-[#906447] text-xs font-normaluppercase leading-[18px] tracking-tight">
            Notify me of acceptance of the bids
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <span>Off</span>
          <SwitchToggle />
        </div>
      </div>

      <div className="flex justify-between pt-6 items-center">
        <div>
          <p className="text-[#906447] text-xs font-normaluppercase leading-[18px] tracking-tight">
            Notify me about new drops
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <span>On</span>
          <SwitchToggle />
        </div>
      </div>

      <div className="flex justify-between pt-6 items-center">
        <div>
          <p className="text-[#906447] text-xs font-normaluppercase leading-[18px] tracking-tight">
            Notify me when I sell
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <span>Off</span>
          <SwitchToggle />
        </div>
      </div>

      <div className="flex justify-between pt-6 items-center">
        <div>
          <p className="text-[#906447] text-xs font-normaluppercase leading-[18px] tracking-tight">
            Others
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <span>On</span>
          <SwitchToggle />
        </div>
      </div>
      <div className=" h-[0px] border border-orange-700 border-opacity-20 my-12"></div>
      {/* col 8 */}
      <p className=" flex gap-2 items-center text-zinc-800 text-lg font-semibold leading-relaxed">
        KYC
      </p>
      <div className="flex justify-between pt-6 items-center">
        <div>
          <p className="text-[#906447] text-xs font-normaluppercase leading-[18px] tracking-tight">
            Status
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-[77px] h-[29px] px-2.5 py-[11px] bg-green-500 rounded-[30px] border justify-start items-center gap-1.5 inline-flex">
            <div className="w-[7px] h-[7px] bg-white rounded-full" />
            <p className="text-center text-white text-xs font-normal  uppercase leading-[18px] tracking-tight">
              Active
            </p>
          </div>
        </div>
      </div>
      <div className=" h-[0px] border border-orange-700 border-opacity-20 my-12"></div>
      {/* col 9 */}
      <p className=" flex gap-2 items-center text-zinc-800 text-lg font-semibold leading-relaxed">
        Newsletter
      </p>
      <div className="flex justify-between pt-6 items-center">
        <div>
          <p className="text-[#906447] text-xs font-normaluppercase leading-[18px] tracking-tight">
            Status
          </p>
        </div>
        <div className="flex gap-8 items-center">
          <p className="border-b-2 border-orange-700 border-opacity-20 text-center text-orange-700 text-xs font-normal  uppercase leading-[18px] tracking-tight">
            UNSUBSCRIBE
          </p>
          <div className="w-[77px] h-[29px] px-2.5 py-[11px] bg-green-500 rounded-[30px] border justify-start items-center gap-1.5 inline-flex">
            <div className="w-[7px] h-[7px] bg-white rounded-full" />
            <p className="text-center text-white text-xs font-normal  uppercase leading-[18px] tracking-tight">
              Active
            </p>
          </div>
        </div>
      </div>
      <div className=" h-[0px] border border-orange-700 border-opacity-20 my-12"></div>
      {/* col 10 */}
      <p className=" flex gap-2 items-center text-zinc-800 text-lg font-semibold leading-relaxed">
        Password
      </p>
      <div className="flex justify-between pt-6 items-center">
        <div>
          <p className=" flex gap-2 text-zinc-500 text-xs font-normal leading-[18px]">
            Registered with
            <span>
              <Google />
            </span>
          </p>
        </div>
        <div className="flex gap-8 items-center">
          <div>
            <p className="text-zinc-800 text-base font-normal  leading-snug">
              Unable to change password
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
