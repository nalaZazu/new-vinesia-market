"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import support1 from "@/assets/images/support1.png";
import support2 from "@/assets/images/support2.png";
import support3 from "@/assets/images/support3.png";
import support4 from "@/assets/images/support4.png";
import Image from "next/image";

// const container = useRef();

const SupportAnim = () => {
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const image4Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.fromTo(
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

      /* tl.to([image1Ref.current, image2Ref.current, image3Ref.current, image4Ref.current], 
        { scale: 1, opacity: 1, duration: 1 }, "+=0")
    .to({}, { duration: 1 }); */
  }, []);

  return (
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
  );
};

export default SupportAnim;
