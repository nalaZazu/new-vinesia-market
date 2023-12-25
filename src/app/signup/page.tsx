"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import google from "../../assets/icons/Google.svg";
import facebook from "../../assets/icons/facebook.svg";
import xsoical from "../../assets/icons/Social Icons.svg";
import apple from "../../assets/icons/Apple Logo.svg";
import wallet from "../../assets/icons/Wallet.svg";
import * as magicIcon from "../../assets/images/magic.png";
import alert from "../../assets/icons/alert-circle.svg";
import { AlertCircle } from "@/assets/icons/Icons";
import { useUser } from "@/context/user";
import { useMagic } from "@/context/MagicProvider";
import { useRouter } from "next/navigation";
import { pagePaths } from "@/constants/navigate";
import { useWalletClient } from "wagmi";
import Loading from "@/components/loading/loading";

const Wrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => <>
    <div className=" md:absolute top-0 -z-10 left-0 right-0 px-4 md:px-0">
      <div className="relative">
        <div className="customsign-bg-image md:pt-0  object-cover bg-center md:h-[1158px] bg-top-[5rem]')]">
          <div className="flex justify-center md:items-center md:h-[1158px]">
            <div className="max-w-[608px]  mx-auto md:p-20 px-4 py-10 opacity-95 bg-orange-100 rounded-lg md:mt-40">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>

const SignUp = () => {
  const {
    isLoading,
    isLoggedIn,
    publicAddress,
    disconnectAsync
  } = useUser()

  const {isConnected, isRedirecting} = useMagic()

  const {connectAsync, connectSocialAsync} = useMagic()
  const {} = useWalletClient()

  const {push} = useRouter()

  const [terms, setTerms] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (isConnected) {
      push(pagePaths.profile)
    }
  }, [isConnected, push])

  async function change(e: any) {
    if (e.target.name === 'terms')
      setTerms(e.target.checked)

    if (e.target.name === 'email')
      setEmail(e.target.value)
  }

  async function connect(subtype: string) {
    await connectSocialAsync(subtype)
  }

  async function connectEmail() {
    if (email.length === 0) return
    await connectAsync(email)
  }


  async function disconnect() {
    await disconnectAsync()
  }

  if (isLoading) {
    return <Loading/>
  }

  if (isRedirecting) {
    return (<Wrapper>
      <h1 className="max-w-[448px] text-center text-zinc-800 md:text-4xl text-[21px]  font-light  md:leading-[44px] leading-[29px] mb-8">
        Redirecting ...
      </h1></Wrapper>)
  }


  // if (isConnecting || isReconnecting) {
  //   return (<Wrapper>
  //     <h1 className="max-w-[448px] text-center text-zinc-800 md:text-4xl text-[21px]  font-light  md:leading-[44px] leading-[29px] mb-8">
  //       Please wait ...
  //     </h1></Wrapper>)
  // }

  if (isConnected) {
    return (<Wrapper>
      <h1 className="max-w-[448px] text-center text-zinc-800 md:text-4xl text-[21px]  font-light  md:leading-[44px] leading-[29px] mb-8">
        You are already connected {publicAddress}
      </h1>
      {/* here is disconnect button */}
      <button onClick={disconnect} className="text-center w-full text-orange-700 text-xs font-normal   uppercase leading-3 tracking-tight px-8 py-[22px] rounded-[48px] border border-orange-700 border-opacity-20 justify-center items-center gap-3 inline-flex">
        DISCONNECT
      </button>
    </Wrapper>)
  }

  return (
    <Wrapper>
      <h1 className="max-w-[448px] text-center text-zinc-800 md:text-4xl text-[21px]  font-light  md:leading-[44px] leading-[29px] mb-8">
        Sign-up to your Vinesia account and start investing in wine
      </h1>
      <div className="text-center">
        {" "}
        <h6>Sign in with social media </h6>
        <div className="justify-center items-center gap-6 flex py-4 cursor-pointer">
          {" "}
          <span onClick={() => connect('google')} className="p-3.5 bg-white rounded-xl border border-white justify-center items-center gap-6 flex">
            <Image src={google} alt="google" />
          </span>
          <span onClick={() => connect('facebook')} className="p-3.5 bg-blue-500 rounded-xl justify-start items-center gap-6 inline-flex">
            {" "}
            <Image src={facebook} alt="facebook" />
          </span>
          <span onClick={() => connect('twitter')} className="p-3.5 bg-black rounded-xl justify-start items-center gap-6 inline-flex">
            {" "}
            <Image src={xsoical} alt="xsoical" />
          </span>
          <span onClick={() => connect('apple')} className="p-3.5 bg-black rounded-xl justify-start items-center gap-6 inline-flex">
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
        <div className="text-stone-400 text-base font-normal  md:my-6 my-8 leading-snug">
          or
        </div>
      </div>
      {/* here is form start */}

        <div>
          <div className="flex gap-1 items-center">
            <label
              htmlFor="email"
              className="text-stone-500 text-xs font-normal  uppercase leading-3 tracking-tight"
            >
              E-MAIL or PHONE
            </label>
            <span>
              <AlertCircle storke="#BF4D20" />
            </span>
          </div>

          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Eg. +(00)123456 / example@mail.com"
              className=" pl-6 pr-5 py-5 rounded-[100px] border bg-orange-100 outline-none border-orange-700 border-opacity-40 justify-between items-center inline-flex  w-full  "
              value={email}
              onChange={change}
            />
          </div>
        </div>

        <button
          onClick={connectEmail}
          type="submit"
          className="text-center text-white text-xs font-normal  px-8 py-[22px] bg-orange-700 rounded-[48px]  w-full mt-4  uppercase leading-3 tracking-tight justify-center items-center gap-3 inline-flex "
        >
          Continue
        </button>

      <div className="text-stone-400 text-base font-normal text-center leading-snug my-6">
        <h6>or external wallet</h6>
      </div>
      {/* here is other wallet button */}
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
            id="terms"
            name="terms"
            type="checkbox"
            checked={terms}
            onChange={change}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
        </div>
        <div className="text-sm leading-6 flex gap-4 items-center">
          <div>
            <span className="text-zinc-800 text-xs font-normal  leading-3 ">
              I read and accept
            </span>
            &nbsp;
            <span className="text-orange-700 text-xs font-normal leading-3">
              Terms of service
            </span>{" "}
            &nbsp;
            <span className="text-zinc-800 text-xs font-normal  leading-3">
              and
            </span>{" "}
            &nbsp;
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
        <Image src={magicIcon} alt="powered" />
      </div>
    </Wrapper>
  );
};

export default SignUp;
