import Image from "next/image";
import React from "react";
import productImg from "@/assets/images/bolltewine.png";
import InfoTooltip from "@/common/InfoTooltip";
import { useUser } from "@/context/user";
import { useCart } from "@/context/cart";
import { ProductOverview } from "@/types/productOverview.dto";


export default function CartCard({ item }: { item?: ProductOverview }) {
  const { getPriceText } = useUser();
  const { removeCartItem } = useCart();

  if (item === undefined) return <></>;

  return (
    <div className=" p-8 border-b-2 border-[rgba(191, 77, 32, 0.20)] bg-[#FAF5EA]">
      <div className="flex gap-6 w-full">
        <img 
        src={`${process.env.NEXT_PUBLIC_API_ADDRESS}products/file/${item.wine?.media}`} 
        height={150} width={0} 
        alt="Product Image" 
        className="w-auto h-[150px]"
        />
        <div className="flex flex-col justify-between w-full">
          <div className="flex gap-4 items-start  justify-between">
            <div>
              <h6 className=" text-[21px] text-[#2F222B] font-light">
                {item?.wine?.winery.name} | {item?.wine?.vintage} | {item?.name}
              </h6>
              <p className=" text-base font-normal">{item?.description}</p>
            </div>
            <div className="flex gap-4 ">
              <button
                className="text-orange-700  border-b border-orange-700 border-opacity-20 uppercase"
                onClick={() => removeCartItem(item)}
              >
                Remove
              </button>

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
