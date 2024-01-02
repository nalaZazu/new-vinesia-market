import Image from "next/image";
import React from "react";
import nfc from "@/assets/icons/nfc.svg";
import ble from "@/assets/icons/ble.svg";

export default function SecruityTags() {
  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-1 h-[1000.40px] bg-no-repeat bg-contain bg-center md:bg-[url('https://i.ibb.co/gyrPZn1/securitytagbanner.png')]">
        <div className="pb-16 flex flex-col justify-end">
          <div className=" p-10 bg-orange-50 rounded-lg shadow gap-5 md:mb-[140px] mb-14">
            <div className="flex justify-between pb-5">
              <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
                NFC tag
              </p>
              <p className="p-2 bg-orange-700 bg-opacity-10 rounded justify-center items-center gap-2.5 flex text-center text-orange-700 text-xs font-normal uppercase leading-[18px] tracking-tight">
                Near Field Communication
              </p>
            </div>
            <p className=" text-zinc-500 text-base font-normal leading-snug">
              This tag ensures the {`bottle's`} authenticity, recording all the
              information about the wine itself. The NFC creates a unique ID
              that, along with the initial upload info, cannot be changed or
              tampered with.
            </p>
          </div>

          <div className=" p-10 bg-orange-50 rounded-lg shadow gap-5">
            <div className="flex justify-between pb-5">
              <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
                BLE tag
              </p>
              <p className="p-2 bg-orange-700 bg-opacity-10 rounded justify-center items-center gap-2.5 flex text-center text-orange-700 text-xs font-normal uppercase leading-[18px] tracking-tight">
                Bluetooth low energy
              </p>
            </div>
            <p className=" text-zinc-500 text-base font-normal leading-snug">
              This second tag lets owners check in on their investment in our
              warehouse remotely.  T° and H° levels are continuously monitored
              and recorded on the blockchain. You can check these data points
              near-real time while ensuring your wine is still where we have
              said it is.
            </p>
          </div>
        </div>

        {/* button */}
        <div className="relative md:block hidden">
          <div className="absolute flex justify-center top-[240px] left-60 right-0">
            <div className="w-[99px] h-[99px] bg-red-700 rounded-full flex justify-end flex-col items-center pb-3 relative">
              <p className="text-white text-lg font-semibold leading-relaxed">
                NFC
              </p>
            </div>
            <div className="absolute right-0">
              <Image src={nfc} alt="" />
            </div>
          </div>

          <div className="absolute flex justify-center top-[421px] left-36 right-0">
            <div className="w-[99px] h-[99px] bg-red-700 rounded-full flex justify-end flex-col items-center pb-3 relative">
              <p className="text-white text-lg font-semibold leading-relaxed">
                NFC
              </p>
            </div>
            <div className="absolute flex justify-center left-36 right-0">
              <Image src={ble} alt="" />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className=" hidden md:block">
            <div className="w-[99px] mx-auto h-[99px] bg-sky-500 rounded-full flex justify-center flex-col items-center mb-[100px]">
              <p className="text-center text-white text-lg font-semibold leading-relaxed">
                IOT
              </p>
              <p className="text-center text-white text-xs font-normal uppercase leading-[18px] tracking-tight">
                Sensors
              </p>
            </div>
          </div>

          <div className=" p-10 bg-orange-50 rounded-lg shadow gap-5">
            <div className="flex justify-between pb-5">
              <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
                BLE tag
              </p>
              <p className="p-2 bg-orange-700 bg-opacity-10 rounded justify-center items-center gap-2.5 flex text-center text-orange-700 text-xs font-normal uppercase leading-[18px] tracking-tight">
                Bluetooth low energy
              </p>
            </div>
            <p className=" text-zinc-500 text-base font-normal leading-snug">
              This second tag lets owners check in on their investment in our
              warehouse remotely.  T° and H° levels are continuously monitored
              and recorded on the blockchain. You can check these data points
              near-real time while ensuring your wine is still where we have
              said it is.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
