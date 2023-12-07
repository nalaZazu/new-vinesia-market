import Image from "next/image";
import React from "react";
import google from "../../assets/icons/Google.svg";
import facebook from "../../assets/icons/facebook.svg";
import xsoical from "../../assets/icons/Social Icons.svg";
import apple from "../../assets/icons/Apple Logo.svg";
import wallet from "../../assets/icons/Wallet.svg";
import magic from "../../assets/images/magic.png";
import alert from "../../assets/icons/alert-circle.svg"
const SignUp = () => {
  return (
    <React.Fragment>
      <div className=" absolute top-0 -z-10 left-0 right-0">
        <div className="relative">
          <div className="customsign-bg-image md:pt-0  object-cover bg-center h-[1158px] bg-top-[5rem]')]">
            <div className="flex justify-center items-center h-[1158px]">
              <div className="w-[608px]  mx-auto p-20 opacity-95 bg-orange-100 rounded-lg mt-40">
                <h1 className="w-[448px] text-center text-zinc-800 text-4xl font-light  leading-[44px] mb-8">
                  Sign-up to your Vinesia account and start investing in wine
                </h1>
                <div className="text-center">
                  {" "}
                  <h6>Sign in with social media </h6>
                  <div className="justify-center items-center gap-6 flex py-4 cursor-pointer">
                    {" "}
                    <span className="  p-3.5  bg-white rounded-xl border border-white justify-center items-center gap-6 flex">
                      <Image src={google} alt="google" />
                    </span>
                    <span className="p-3.5 bg-blue-500 rounded-xl justify-start items-center gap-6 inline-flex">
                      {" "}
                      <Image src={facebook} alt="facebook" />
                    </span>
                    <span className="  p-3.5 bg-black rounded-xl justify-start items-center gap-6 inline-flex">
                      {" "}
                      <Image src={xsoical} alt="xsoical" />
                    </span>
                    <span className="p-3.5 bg-black rounded-xl justify-start items-center gap-6 inline-flex">
                      {" "}
                      <Image src={apple} alt="apple" />
                    </span>
                  </div>
                  {/* here is next line */}
                  <div className=" text-center text-neutral-600 text-xs font-normal   leading-3">
                    <h6>
                      {" "}
                      We do not store any data related to your social logins
                    </h6>
                  </div>
                  <div className="text-stone-400 text-base font-normal  mt-6 mb-6 leading-snug">
                    or
                  </div>
                </div>
                {/* here is form start */}

                <form>
                  <div>
                    <div className="flex gap-1 items-center">
                      <label
                        htmlFor="email"
                        className="text-stone-500 text-xs font-normal  uppercase leading-3 tracking-tight"
                      >
                        E-MAIL or PHONE
                      </label>
                      <span>
                        <Image src={alert} alt="alert" />
                      </span>
                    </div>

                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Eg. +(00)123456 / example@mail.com"
                        className=" pl-6 pr-5 py-2 rounded-[100px] border bg-orange-100 outline-none border-orange-700 border-opacity-40 justify-between items-center inline-flex  w-full  "
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="text-center text-white text-xs font-normal  px-8 py-[22px] bg-orange-700 rounded-[48px]  w-full mt-4  uppercase leading-3 tracking-tight justify-center items-center gap-3 inline-flex "
                  >
                    Continue
                  </button>
                </form>

                <div className="text-stone-400 text-base font-normal text-center leading-snug my-6">
                  <h6>or external wallet</h6>
                </div>
                {/* hereis other wallet button */}
                <button className="text-center w-full text-orange-700 text-xs font-normal   uppercase leading-3 tracking-tight px-8 py-[22px] rounded-[48px] border border-orange-700 border-opacity-20 justify-center items-center gap-3 inline-flex">
                  <span>
                    <Image src={wallet} alt="wallet" />
                  </span>
                  CONNECT WITH WALLET
                </button>

                {/* here is agree term condition */}
                <div className="relative flex gap-x-3 mt-8">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6 flex gap-4 items-center">
                    <div>
                      <span className="text-zinc-800 text-xs font-normal  leading-3 ">
                        I read and accept
                      </span>
                      <span className="text-orange-700 text-xs font-normal leading-3">
                        Terms of service
                      </span>
                      <span className="text-zinc-800 text-xs font-normal  leading-3">
                        and
                      </span>
                      <span className="text-orange-700 text-xs font-normal leading-3">
                        Privacy Policy
                      </span>
                    </div>
                  </div>
                </div>

                {/* last  powered by */}

                <div className="justify-center items-center gap-1 flex mt-10">
                  <p className="text-center text-stone-400 text-xs font-normal  uppercase leading-3 tracking-tight">
                    Powered
                  </p>
                  <Image src={magic} alt="powered" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
