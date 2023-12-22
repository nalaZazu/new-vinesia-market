import React from "react";
import TradeCard from "@/components/profile/TradeCard";
export default function InvestorsLove() {
  return (
    <div>
      <h2 className="max-w-[793px] text-zinc-800 text-7xl font-normal tracking-[-1.44px] leading-[84px] pb-20">
        Wine as an asset comes with benefits that investors love.
      </h2>
      <div className="grid grid-cols-2 ">
        <div>
          <TradeCard />
        </div>
        <div className="ps-[84px]">
          <h2 className="text-zinc-800 text-4xl font-light leading-[44px]">
            Bring your passion as a portfolio diversification
          </h2>
          <div className="py-8">
            <p className=" text-neutral-600 text-base font-normal leading-snug">
              The investment landscape is full of possibilities, from
              traditional stocks and bonds to alternative assets such as real
              estate, precious metals, and even art. One such alternative asset
              that's been garnering growing attention is fine wine. For many,
              wine is a passion, an indulgence, and a symbol of the good life.
              But increasingly, it is also being viewed as an investable asset,
              which can also convey unique emotions whenever the investor
              finally turns into a consumer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
