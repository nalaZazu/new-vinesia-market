import { AlertCircle, Arrows } from "@/assets/icons/Icons";
import React from "react";

const CalculationSetting = () => {
  return (
    <React.Fragment>
        {/* here is  */}
        <div >
         
          {/* here is choise option  */}
          <div>
            <h6 className="text-zinc-800 text-start text-lg font-semibold pb-5  leading-relaxed">
              What would you like to see on the graph?
            </h6>

            <form>
              <div className="pb-10">
                <div className="flex gap-4 items-center pb-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-6 w-6 border-gray-900 text-zinic-800 focus:ring-gray-900"
                  />
                  <label
                    htmlFor="push-nothing"
                    className="text-zinc-800 text-base font-normal   leading-snug"
                  >
                    Performance
                  </label>
                  <AlertCircle storke="#BF4D20" />
                </div>
                <div className="flex gap-4 items-center">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-6 w-6 border-gray-900 text-zinic-800 focus:ring-gray-900"
                  />
                  <label
                    htmlFor="push-nothing"
                    className="text-zinc-800 text-base font-normal   leading-snug"
                  >
                    Volatility
                  </label>
                  <AlertCircle storke="#BF4D20" />
                </div>
              </div>

              <div>
                <h6 className="text-zinc-800 text-lg font-semibold tracking-[-0.36px] text-start leading-relaxed">
                  Choose what you want to compare the performance of your
                  portfolio with
                </h6>
                <p className="text-xs font-normal text-start text-[#A6836C] py-4  uppercase leading-3 tracking-tight">
                  Baseline
                </p>
              </div>

              <div className="flex gap-4 items-center pb-3">
                <input
                  id="push-nothing"
                  name="push-notifications"
                  type="radio"
                  className="h-6 w-6 border-gray-900 text-zinic-800 focus:ring-gray-900"
                />
                <label
                  htmlFor="push-nothing"
                  className="text-zinc-800 text-base font-normal   leading-snug"
                >
                  60/40
                </label>
              </div>

              <div className="flex gap-4 items-center pb-3">
                <input
                  id="push-nothing"
                  name="push-notifications"
                  type="radio"
                  className="h-6 w-6 border-gray-900 text-zinic-800 focus:ring-gray-900"
                />
                <label
                  htmlFor="push-nothing"
                  className="text-zinc-800 text-base font-normal   leading-snug"
                >
                  S&P 500
                </label>
              </div>
              <div className="flex gap-4 items-center pb-3">
                <input
                  id="push-nothing"
                  name="push-notifications"
                  type="radio"
                  className="h-6 w-6 border-gray-900 text-zinic-800 focus:ring-gray-900"
                />
                <label
                  htmlFor="push-nothing"
                  className="text-zinc-800 text-base font-normal   leading-snug"
                >
                  EURO STOCKX 50 Index
                </label>
              </div>
              <div className="flex gap-4 items-center pb-3">
                <input
                  id="push-nothing"
                  name="push-notifications"
                  type="radio"
                  className="h-6 w-6 border-gray-900 text-zinic-800 focus:ring-gray-900"
                />
                <label
                  htmlFor="push-nothing"
                  className="text-zinc-800 text-base font-normal   leading-snug"
                >
                  iShares 7-10 Year Treasure{" "}
                </label>
              </div>
            </form>
          </div>
        </div>

     
      
    </React.Fragment>
  );
};

export default CalculationSetting;
