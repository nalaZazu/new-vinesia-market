import Image from "next/image";
import React from "react";
import infoIcon1 from "@/assets/icons/buyvinesia.svg";
import infoIcon2 from "@/assets/icons/acceptoffers.svg";
import infoIcon3 from "@/assets/icons/bidonwines.svg";

const datainvest = [
  {
    id: 1,
    title: "Buy directly from Vinesia",
    text: "We regularly update our marketplace with new wines from our own collection. You can purchase these at the Vinesia price, which we strive to align with current market rates. Just add your choice to the cart, proceed to checkout, and the wine is yours in just a few clicks. You choose your investment through the Vinesia Marketplace and make the deposit, plus agree to our terms and fees.",
    info: infoIcon1,
  },
  {
    id: 2,
    title: "Accept offers",
    text: "You can also buy wine assets from other private investors on our marketplace. If a wine has a set asking price and it suits you, simply bid the asked amount and continue to the checkout process.",
    info: infoIcon2,
  },
  {
    id: 3,
    title: "Bid on wines",
    text: "Feel free to bid on any privately owned wine on the marketplace, regardless of whether it has an asking price. Ensure your account is topped up before bidding, so we can block the bid amount. If the seller accepts your bid, the transaction will complete automatically, transferring the blocked funds to the seller. If you cancel your bid or the seller declines, the funds are unblocked in your wallet.",
    info: infoIcon3,
  },
];
export default function VinesiaWines() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-[140px]">
        <div className="col-span-5">
          <h3 className="text-[#261B22] text-[360px] font-normal leading-[240px]">
            3
          </h3>
          <h2 className="max-w-[450px] h-[341px] text-[#261B22] text-[144px] font-normal leading-[120px] tracking-[-2.88px]">
            ways to invest
            <br />
            in wines
          </h2>
        </div>
        <div className="col-span-7 divide-y-2 flex flex-col divide-[rgba(255,255,255,0.20)]">
          {datainvest.map((items: any, i: any) => {
            const { title, info, text } = items;
            return (
              <div
                className={`max-w-[608px] justify-start items-start gap-6 inline-flex py-12 ${
                  i == 0 && "pt-0"
                }`}
              >
                <div className="w-16 h-16 bg-[#261B22] rounded-[100px] justify-center items-center gap-2.5 flex">
                  <Image src={info} alt="" />
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                  <p className="text-white text-lg font-semibold font-['Albert Sans'] leading-relaxed">
                    {title}
                  </p>
                  <p className="self-stretch text-neutral-400 text-base font-normal font-['Albert Sans'] leading-snug">
                    {text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
    </div>
  );
}
