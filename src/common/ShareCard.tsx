"use client";
import React, { useState } from "react";
import ModalContainer from "./ModalContainer";
import { BiddingSection } from "@/constants/accrodion";
import { BillingInput } from "./Components";
import { CartIcon } from "@/assets/icons/Icons";
import { useUser } from "@/context/user";
import { useCart } from "@/context/cart";
import { ProductOverview } from "@/types/productOverview.dto";

export default function ShareCard({ data }: { data: ProductOverview }) {
  const { addProductCartItem } = useCart()

  const [visible, setVisible] = useState(false);

  const { getPriceText, currency } = useUser()

  if (data === undefined) {
    return <></>;
  }

  return (
    <React.Fragment>
      {/* here is start of modal */}
      <ModalContainer
        visible={visible}
        setVisible={setVisible}
        isCloseBtn={true}
        backgroundClass="bg-zinc-800 bg-opacity-95"
        modalClass="max-w-[614px] lg:h-auto rounded-md pt-12 pb-12  px-12"
        title="Place a bid"
      >
        <div className="pt-6 pb-8">
          {" "}
          <div className="bg-[#f9f5ea] rounded-tl-sm rounded-tr-sm">
            {BiddingSection?.map((item: any, index: any) => {
              const { title, concurrence } = item;
              const isLastItem = index === BiddingSection.length - 1;
              return (
                <div
                  className={`px-6 py-4 justify-between items-center gap-4 flex 
                ${
                  isLastItem
                    ? ""
                    : "border-b border-orange-700 border-opacity-20"
                }`}
                  key={index}
                >
                  <p className="text-zinc-800 text-base font-normal   leading-snug">
                    {title}
                  </p>
                  <p className="text-end text-zinc-800 text-lg font-semibold  leading-relaxed">
                    € {concurrence}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* here is input filed  */}
        <div className="pb-6">
          <form action="">
            <BillingInput
              label="BID AMOUNT*"
              name="amount"
              placeholder="€"
              className="w-full"
            />
          </form>
        </div>

        {/* here is next section  */}
        <div className="text-zinc-800 pb-12">
          <h6 className="  text-lg font-semibold  leading-relaxed pb-2">
            How bids works:
          </h6>
          <p className="  text-xs font-normal  tracking-[-0.24px] leading-[18px]">
            Vinesia marketplace is a real-time market. Bids are matched in
            real-time against Asks. If your bid matches a {`seller's`} asking
            price, the transaction is automatically executed. Otherwise, the
            transaction will be executed when the selling price matches your
            bid. For credit card-funded bids, there might be a slight delay.
            Your bid goes live only after we receive the payment. This process
            may take some time due to standard credit card processing
            procedures.
          </p>
          <p className="  text-xs font-normal  tracking-[-0.24px] leading-[18px] ">
            Remember, by placing a bid, you commit to completing the transaction
            at your bid price once payment is received and the bid goes live.
            Please ensure you are prepared for this commitment.
          </p>
        </div>
        {/* here is btn defined  */}
        <div className=" justify-center items-center gap-3  flex">
          <button className="text-center text-white text-xs font-normal   uppercase leading-[18px] tracking-tight   px-8 py-[22px] bg-orange-700 rounded-full">
            Place a BID
          </button>
        </div>
      </ModalContainer>
      {/* here is end of modal */}
      <div>
        <div className="flex md:justify-start justify-between items-center gap-3 md:gap-12 md:pe-8 pe-0">
          <div className="md:flex gap-2 items-center md:space-y-0 space-y-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>

            <p className="text-zinc-800 text-xs font-normal uppercase leading-3 tracking-tight">
              Favorite
            </p>
          </div>
          <div className="md:flex gap-2 items-center md:space-y-0 space-y-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
              />
            </svg>
            <p className="text-zinc-800 text-xs font-normal uppercase leading-3 tracking-tight">
              Share
            </p>
          </div>
          <div className="md:flex gap-2 items-center md:space-y-0 space-y-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p className="text-zinc-800 text-xs font-normal uppercase leading-3 tracking-tight">
              {data.starred}
            </p>
          </div>
        </div>
        <div className="my-8 max-w-[608px] h-[0px] border border-orange-700 border-opacity-20"></div>
        <div className="md:flex md:justify-between md:items-center">
          <div className=" uppercase items-center flex gap-3 md:pb-0 pb-4">
            <p className="text-right text-[#906447] text-xs font-normal  uppercase leading-3 tracking-tight">
              Buy NOW
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-secondary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
            <h1 className="text-zinc-800 text-4xl font-light leading-[44px]">
              {data.floorPrice && getPriceText(data.buyNowPrice[currency])}
            </h1>
          </div>

          {data.editions.filter((x) => x.isAvailable).length > 0 && (

          <div>
            <button
              onClick={() => {
                addProductCartItem(data)
              }}
              type="button"
              className="w-full flex justify-center gap-3 bg-secondary text-center rounded-full text-white text-xs font-normal uppercase leading-3 tracking-tight focus:ring-0 focus:outline-none md:w-48 px-8 py-5 items-center"
            >
              Invest now <CartIcon fill="#FFFF" />
            </button>
          </div>)}

          <div className="my-8 max-w-[608px] h-[0px] border border-orange-700 border-opacity-20 md:hidden block"></div>
        </div>
      </div>
    </React.Fragment>
  );
}
