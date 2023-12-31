"use client";
import Image from "next/image";
import React, { useState } from "react";
// import { useSelector } from "react-redux";
import barcode from "@/assets/icons/Barcode.svg";
import scaner from "@/assets/icons/Sensor.svg";
import temp from "@/assets/icons/Temprature.svg";
import play from "@/assets/icons/Play.svg";
import { Arrows } from "@/assets/icons/Icons";
import CollectionPopup2 from "../collectionPopup2/page";
import { EditionOverview } from "@/types/editionOverview.dto";
const MindPledge = ({
  btnTitle = "SEE ALL CERTIFICATES",
  item
}: {
  btnTitle?: any;
  item?: EditionOverview
}) => {
  const [open, setOpen] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  // const isAuthenticted = useSelector<any>(
  //   (state) => state?.account?.isAuthenticated
  // );
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleNext = () => {
    setOpenModal2(!openModal2);
    setOpen(!open);
  };
  return (
    <React.Fragment>
      {item !== undefined &&
      <CollectionPopup2
        item={item}
        open={openModal2}
        setOpen={() => setOpenModal2(!openModal2)}
      />}
      <div className=" bg-[#7D302E]">
        <div className="md:py-[198px] mx-auto max-w-[816px] text-white">
          <div className="">
            {/* desktop */}
            <div className="flex md:justify-center justify-between relative py-6 md:px-0 px-4 md:bg-transparent bg-[#642625]">
              <span className="collection text-center text-2xl font-normal leading-[72px] absolute left-0 md:top-[-37px] right-[270px] hidden md:block">
                Our
              </span>
              <h3 className=" flex text-center md:text-4xl md:font-light md:leading-[44px] text-white text-base font-semibold leading-snug">
                <span className="md:hidden block"> Our &nbsp;</span> Peace of
                Mind Pledge
              </h3>
              <span className="block md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </span>
            </div>
            <p className="text-base text-[#CBACAB] md:text-center font-normal md:pt-4 md:pb-12 leading-snug px-4 md:px-0 md:py-0 pt-14">
              “Investor Peace of Mind” is a core principle at Vinesia. It
              encapsulates our commitment to providing a secure, transparent,
              and hassle-free investment experience. Here’s what it entails:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 px-4 md:px-0">
            <div className="p-6 rounded-3xl border border-white border-opacity-20 flex-col justify-between items-start inline-flex">
              <span>
                <Image src={barcode} alt="barcode" />
              </span>
              <p className=" text-white md:text-lg font-semibold  md:leading-relaxed pt-6 text-base  leading-snug">
                Proof of authenticity
              </p>
            </div>
            <div className="p-6 rounded-3xl border border-white border-opacity-20 flex-col justify-between items-start inline-flex">
              <Image src={scaner} alt="barcode" />
              <p className=" text-white md:text-lg font-semibold  md:leading-relaxed pt-6 text-base  leading-snug">
                Proof of ownership
              </p>
            </div>
            <div className="p-6 rounded-3xl border border-white border-opacity-20 flex-col justify-between items-start inline-flex">
              <Image src={temp} alt="barcode" />
              <p className=" text-white md:text-lg font-semibold  md:leading-relaxed pt-6 text-base  leading-snug w-[184.67px]">
                Proof of storage conditions
              </p>
            </div>
            <div className="p-6 rounded-3xl border bg-[#5F2020] border-white border-opacity-20 flex-col justify-between items-start inline-flex">
              <Image src={play} alt="barcode" />
              <p className="text-white md:text-lg font-semibold  md:leading-relaxed pt-6 text-base  leading-snug">
                See our video
              </p>
            </div>
          </div>
          {/* here is button  */}
          <div className="flex justify-center md:pb-0 pb-14">
            <button
              onClick={handleNext}
              className="py-[22px] uppercase px-8 rounded-[48px] border border-white border-opacity-40 justify-center items-center gap-3 inline-flex"
            >
              {btnTitle}
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
