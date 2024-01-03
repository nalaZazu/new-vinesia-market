import Link from "next/link"
import { Arrows } from "@/assets/icons/Icons";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import support1 from "@/assets/images/support1.png";
import support2 from "@/assets/images/support2.png";
import support3 from "@/assets/images/support3.png";
import support4 from "@/assets/images/support4.png";
import Image from "next/image";

const WineInvestmentWithoutWorries = () => {
    const image1Ref = useRef(null);
    const image2Ref = useRef(null);
    const image3Ref = useRef(null);
    const image4Ref = useRef(null);
    const videoRef = useRef<any>(null)

    const [tl, setTl] = useState<gsap.core.Timeline | null>(null)

    useGSAP(() => {
        // const tl = gsap.timeline({ repeat: -1, paused: true });

        const tl = gsap.timeline({ paused: true })

        tl
            .fromTo(
                image1Ref.current,
                { scale: 0.5, opacity: 0.7 },
                { scale: 1, opacity: 1, duration: 1 }
            )
            .to(image1Ref.current, {
                scale: 0.5,
                opacity: 0.7,
                duration: 1,
                delay: 3,
            })
            .fromTo(
                image2Ref.current,
                { scale: 0.5, opacity: 0.7 },
                { scale: 1, opacity: 1, duration: 1 }
            )
            .to(image2Ref.current, {
                scale: 0.5,
                opacity: 0.7,
                duration: 1,
                delay: 4,
            })
            .fromTo(
                image3Ref.current,
                { scale: 0.5, opacity: 0.7 },
                { scale: 1, opacity: 1, duration: 1 }
            )
            .to(image3Ref.current, {
                scale: 0.5,
                opacity: 0.7,
                duration: 1,
                delay: 2,
            })
            .fromTo(
                image4Ref.current,
                { scale: 0.5, opacity: 0.7 },
                { scale: 1, opacity: 1, duration: 1 }
            )
            .to(image4Ref.current, {
                scale: 0.5,
                opacity: 0.7,
                duration: 1,
                delay: 5
            });

        setTl(tl)
    });

    useEffect(() => {
        if (videoRef.current === null || tl === undefined || tl === null) return

        function animUpdate() {
            if (videoRef.current === null || tl === undefined || tl === null) return
            
            const progress = videoRef.current.currentTime / videoRef.current.duration
            tl.progress(progress)
        }

        gsap.ticker.add(animUpdate)

        return () => gsap.ticker.remove(animUpdate)

    }, [videoRef, tl])

    return (
        <>
            {/* here is end of modal */}
            <div className="md:py-30 my-3 bg-[#F7EFDF] py-10">
                <div className="text-center">
                    <h2 className="text-zinc-800 md:text-7xl font-normal md:leading-[84px] mx-auto   text-center text-4xl   leading-[42px]">
                        Wine investment, no worries
                    </h2>
                    <p className=" py-8 text-neutral-600 text-base font-normal leading-snug">
                        Learn how our process brings our investor “Peace of Mind” pledge to
                        life.
                    </p>
                    <Link href="/invest">
                        <button className="px-8 py-4 bg-orange-700 rounded-[48px] justify-center items-center gap-3 inline-flex text-center text-white text-xs font-normal  uppercase leading-3 tracking-tight">
                            START INVESTING NOW
                            <span>
                                <Arrows storke="#FFFFFF" />
                            </span>
                        </button>
                    </Link>
                </div>
                {/* support video */}
                <div className="flex justify-center md:pt-[60px] pt-2 ">
                    <div className="flex flex-row w-2/3 justify-between">
                        <div className="flex flex-col w-1/4 items-center " ref={image1Ref}>
                            <Image
                                src={support1}
                                alt="Image 1"
                                width={100}
                                height={100}
                            />
                            <span className="w-auto text-wrap text-center">Wine is sourced directly from the wineries and is sent to our warehouse in Luxembourg</span>
                        </div>
                        <div className="flex flex-col w-1/4 items-center" ref={image2Ref}>
                            <Image

                                src={support2}
                                alt="Image 2"
                                width={100}
                                height={100}
                            />
                            <span className="w-auto text-wrap text-center">NFC and Bluetooth Low Energy tags are added to each wine bottle & securely stored in our warehouse</span>
                        </div>
                        <div className="flex flex-col w-1/4 items-center" ref={image3Ref}>
                            <Image

                                src={support3}
                                alt="Image 3"
                                width={100}
                                height={100}
                            />
                            <span className="w-auto text-wrap text-center">Bottles and their NFT counterparts exist on the Polygon blockchain, <br></br>offering total Peace of Mind</span>
                        </div>
                        <div className="flex flex-col w-1/4 items-center" ref={image4Ref}>
                            <Image

                                src={support4}
                                alt="Image 4"
                                width={100}
                                height={100}
                            />
                            <span className="w-auto text-wrap text-center">NFT integrity can be checked at any time and can be traded on our marketplace</span>
                        </div>
                    </div>
                </div>
                {/* here is image defined */}
                <div className="flex justify-center md:pt-[22px] pt-12">
                    {/* <Image src={investment} alt="image" /> */}
                    <video ref={videoRef} className="lg:w-1/2 w-full" autoPlay loop muted controls>
                        <source src='assets/video/vinesia 211223_360.mp4' media="all and (max-width: 1200px)" />
                        <source src='assets/video/vinesia 211223_960.mp4' />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

        </>)

}

export default WineInvestmentWithoutWorries