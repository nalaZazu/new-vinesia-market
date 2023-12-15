import React from "react";

const Purchase = () => {
  return (
    <React.Fragment>
      <div className="max-w-[560px] cotainer mx-auto ">
        <div className="pb-2 bg-orange-50 rounded-tl-[20px] rounded-tr-[20px] border border-orange-700 border-opacity-20 flex-col justify-center items-center gap-6 flex">
          <div className=" ">
            <h3 className="  text-green-500 text-4xl font-light pt-8  leading-[44px]">
              Your purchase is complete
            </h3>
            <p className="  text-green-700 py-4 text-base font-normal leading-snug">
              Your new wines are already in your portfolio.
            </p>
          </div>
          <div>
            <span className="text-[#906447]">SUMMARY</span>
            <div className="flex">
              <p className="text-right text-zinc-800 text-base font-normal  leading-snug">
                Assets price
              </p>
              <p className="text-right text-zinc-800 text-base font-normal  leading-snug">
                € 5,850.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Purchase;
