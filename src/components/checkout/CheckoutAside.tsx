import React from "react";

const cartList = [
  { name: 'Brunello di Montalcino "Piaggione" | 2019', price: "1,900" },
  {
    name: "Château Lafite Rothschild - Vintage 100 points Dunnuck | 2020",
    price: "1,900",
  },
  {
    name: "Château Lafite Rothschild - Vintage 100 points Parker | 2019",
    price: "1,900",
  },
];
export default function CheckoutAside() {
  return (
    <div>
      <div className=" bg-[#F7EFDF] rounded-lg flex-col justify-start items-center inline-flex shadow-sm">
        <div className="self-stretch px-6 py-5 bg-red-900 justify-start items-center gap-2 inline-flex rounded-t-lg">
          <div className="grow shrink basis-0 text-white text-lg font-semibold  leading-relaxed">
            In cart
          </div>
          <div className="justify-start items-start gap-2.5 flex">
            <div className="text-white text-lg font-semibold  leading-relaxed">
              3{" "}
            </div>
            <div className="text-white text-lg font-semibold  leading-relaxed">
              Wine assets
            </div>
          </div>
        </div>
        <div className="self-stretch px-6 flex-col justify-start items-start flex ">
          {cartList?.map((d, i) => {
            const { name, price } = d;
            return (
              <div className="self-stretch py-6 border-b border-orange-700 border-opacity-20 justify-between items-start inline-flex">
                <div className="w-[295px] text-zinc-800 text-base font-normal  leading-snug">
                  {name}
                </div>
                <div className="text-zinc-800 text-base font-normal  leading-snug">
                  € {price}
                </div>
              </div>
            );
          })}
          <div className="self-stretch py-6 border-b border-orange-700 border-opacity-20 justify-between items-start inline-flex">
            <div className="w-[285px] text-zinc-800 text-base font-normal  leading-snug">
              Service fees
            </div>
            <div className="text-zinc-800 text-base font-normal  leading-snug">
              € 13.20
            </div>
          </div>
        </div>
        <div className="self-stretch p-6 justify-between items-center inline-flex">
          <div className="text-zinc-800 text-lg font-semibold  leading-relaxed">
            Order summary
          </div>
          <div className="text-zinc-800 text-lg font-semibold  leading-relaxed">
            € 5,900
          </div>
        </div>
      </div>
    </div>
  );
}
