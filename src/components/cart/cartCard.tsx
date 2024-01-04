import React from "react";
import InfoTooltip from "@/common/InfoTooltip";
import { useUser } from "@/context/user";
import { useCart } from "@/context/cart";
import { CartItem, ItemType } from "@/types/dto/checkoutCart.dto";


export default function CartCard({ item }: { item: CartItem }) {
  const { getPriceText, currency } = useUser();
  const { removeCartItem } = useCart();

  if (item === undefined) return <></>;

  const imgUrl = process.env.NEXT_PUBLIC_API_ADDRESS + (item.type === ItemType.Product ? 'products/file/' : 'edition/file/')+item.media

  return (
    <div className=" p-8 border-b-2 border-[rgba(191, 77, 32, 0.20)] bg-[#FAF5EA]">
      <div className="flex gap-6 w-full">
        <img 
        src={imgUrl} 
        height={150} width={0} 
        alt="Product Image" 
        className="w-auto h-[150px]"
        />
        <div className="md:flex md:flex-col justify-between w-full">
          <div className="md:flex md:gap-4 items-start text-right md:text-left  justify-between">
            <div>
              <h6 className=" text-[21px] text-[#2F222B] font-light">
                {item.name}
              </h6>
              <p className=" text-base font-normal">{item.description}</p>
            </div>
            <div className="flex gap-4 md:my-0 my-6 justify-between">
              <button
                className="text-orange-700  border-b border-orange-700 border-opacity-20 uppercase"
                onClick={() => removeCartItem(item)}
              >
                <span className="hidden md:block">Remove</span>
                <span className="md:hidden">Remove</span>
              </button>
              <p className="text-right">{getPriceText(item.price[currency] ?? 0)}</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <div className="text-lg font-semibold text-[#2F222B] flex gap-1 items-center">
                Service fee{" "}
                <span>
                  {" "}
                  <InfoTooltip />{" "}
                </span>
              </div>
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
