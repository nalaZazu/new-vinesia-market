import Image from "next/image";
import React from "react";
import productImg from "@/assets/images/bolltewine.png";
import InfoTooltip from "@/common/InfoTooltip";
export default function CartCard() {
  return (
    <div className=" p-8 border-b-2 border-[rgba(191, 77, 32, 0.20)] bg-[#FAF5EA]">
      <div className="flex gap-6 w-full">
        <Image src={productImg} width={112} alt="Product Image" />
        <div className="flex flex-col justify-between w-full">
          <div className="flex justify-between">
            <div>
              <h6 className=" text-[21px] text-[#2F222B] font-light">
                1# Chateau La Mission Haut Brion Cru Classe | 2009
              </h6>
              <p className=" text-base font-normal">
                With Art of Lola Designer Fun
              </p>
            </div>
            <div>
              <p>€ 5,300</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-lg font-semibold text-[#2F222B] flex gap-1 items-center">
                Service fee{" "}
                <span>
                  {" "}
                  <InfoTooltip />{" "}
                </span>
              </p>
              <p className="font-normal text-xs text-[#594E55] uppercase">
                Until 12.10.2024
              </p>
            </div>
            <div>
              <p>€ 0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
