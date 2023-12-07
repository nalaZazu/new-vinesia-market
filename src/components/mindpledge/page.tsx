import React from "react";
import barcode from "@/assets/icons/Barcode.svg";
import scaner from "@/assets/icons/Sensor.svg";
import temp from "@/assets/icons/Temprature.svg";
import play from "@/assets/icons/Play.svg";
import Image from "next/image";
import { Arrows } from "@/assets/icons/Icons";
const MindPledge = () => {
  return (
    <React.Fragment>
      <div className=" bg-red-900">
        <div className="py-[198px] mx-auto w-[816px]  text-white">
          <div className="">
            <div className=" relative">
              <span className="collection text-center   text-2xl font-normal  leading-[72px] absolute left-0 top-[-37px]  right-[270px]">
                Our
              </span>
              <h1 className="text-center text-4xl font-light   leading-[44px]">
                Peace of Mind Pledge
              </h1>
            </div>

            <p className="  text-stone-400 text-base font-normal  pt-4 pb-12 leading-snug">
              “Investor Peace of Mind” is a core principle at Vinesia. It
              encapsulates our commitment to providing a secure, transparent,
              and hassle-free investment experience. Here’s what it entails:
            </p>
          </div>
          <div className="grid grid-cols-4 gap-8 py-12">
            <div className="p-6 rounded-3xl border border-white border-opacity-20 flex-col justify-between items-start inline-flex">
              <span>
                <Image src={barcode} alt="barcode" />
              </span>
              <p className="self-stretch text-white text-lg font-semibold  leading-relaxed pt-4">
                Proof of authenticity
              </p>
            </div>
            <div className="p-6 rounded-3xl border border-white border-opacity-20 flex-col justify-between items-start inline-flex">
              <Image src={scaner} alt="barcode" />
              <p className="self-stretch text-white text-lg font-semibold  leading-relaxed pt-4">
                Proof of ownership
              </p>
            </div>
            <div className="p-6 rounded-3xl border border-white border-opacity-20 flex-col justify-between items-start inline-flex">
              <Image src={temp} alt="barcode" />
              <p className="self-stretch text-white text-lg font-semibold  leading-relaxed pt-4 w-[184.67px]">
                Proof of storage conditions
              </p>
            </div>
            <div className="p-6 rounded-3xl border bg-pink-950 border-white border-opacity-20 flex-col justify-between items-start inline-flex">
              <Image src={play} alt="barcode" />
              <p className="self-stretch text-white text-lg font-semibold  leading-relaxed">
                See our video
              </p>
            </div>
          </div>
          {/* here is button  */}
          <div className="flex justify-center">
            <button className="py-[22px] px-8 rounded-[48px] border border-white border-opacity-40 justify-center items-center gap-3 inline-flex">
              SEE ALL CERTIFICATES
              <span>
                <Arrows storke="#FFFFFF" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MindPledge;
