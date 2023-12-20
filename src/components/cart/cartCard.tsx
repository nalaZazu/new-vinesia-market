import Image from "next/image";
import React from "react";
import productImg from "@/assets/images/bolltewine.png";
import InfoTooltip from "@/common/InfoTooltip";
import { ProductCardDto } from "@/types/productCard.dto";
import { useUserContext } from "@/context/user";
import { useCartContext } from "@/context/cart";

export default function CartCard({item}: {item?: ProductCardDto}) {
  const {getPriceText} = useUserContext()
  const {removeCartItem} = useCartContext()

  if (item === undefined)
    return <></>

  return (
    <div className=" p-8 border-b-2 border-[rgba(191, 77, 32, 0.20)] bg-[#FAF5EA]">
      <div className="flex gap-6 w-full">
        <Image src={productImg} width={112} alt="Product Image" />
        <div className="flex flex-col justify-between w-full">
          <div className="flex justify-between">
            <div>
              <h6 className=" text-[21px] text-[#2F222B] font-light">
                {item?.name}
              </h6>
              <p className=" text-base font-normal">
                {item?.description}
              </p>
            </div>
            <div>
              <button className="text-orange-700  border-b border-orange-700 border-opacity-20 uppercase"
              onClick={() => removeCartItem(item)}>Remove</button>
            </div>
            <div>
              <p>{getPriceText(item?.floorPrice ?? 0)}</p>
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
