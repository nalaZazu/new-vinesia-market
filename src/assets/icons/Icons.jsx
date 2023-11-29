import React from "react";

export function NextIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M4.16699 10H15.8337"
        stroke="#212529"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 4.16663L15.8333 9.99996L10 15.8333"
        stroke="#212529"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function PrevIcon() {
  return (
    <div className="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        version="1.1"
        transform="matrix(-1,1.2246467991473532e-16,-1.2246467991473532e-16,-1,0,0)"
      >
        <path
          d="M4.16699 10H15.8337"
          stroke="#212529"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M10 4.16663L15.8333 9.99996L10 15.8333"
          stroke="#212529"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </div>
  );
}

export function InfoIcon() {
  return (
    <div className="">
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2264_20859)">
          <path
            d="M7.5 13.75C10.9518 13.75 13.75 10.9518 13.75 7.5C13.75 4.04822 10.9518 1.25 7.5 1.25C4.04822 1.25 1.25 4.04822 1.25 7.5C1.25 10.9518 4.04822 13.75 7.5 13.75Z"
            stroke="#212529"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.5 5V7.5"
            stroke="#212529"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.5 10H7.50625"
            stroke="#212529"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2264_20859">
            <rect width="15" height="15" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export const TextIcon = ({ label , width,letter ,startOffset , fontSize}) => {
  return (
    <>
      <svg viewBox="0 0 300 300" width={width} height='100%' xmlns="http://www.w3.org/2000/svg">
        <path
          id="SunCatcherStudio"
          fill="none"
          stroke="none"
          d="M 32.550491,148.48008 A -108.15144,-108.15144 0 0 1 140.70194,40.328644 -108.15144,-108.15144 0 0 1 248.85338,148.48008 -108.15144,-108.15144 0 0 1 140.70194,256.63153 -108.15144,-108.15144 0 0 1 32.550491,148.48008 Z"
        />
        <text
          font-size={fontSize}
          fill="text-secondary"
          letter-spacing={letter}
          font-family="sans-serif"
          font-weight="normal"
        >
          <textPath href="#SunCatcherStudio" side="left" startOffset={startOffset}>
            {/* Secure Ownership */} {label}
          </textPath>
        </text>
      </svg>
    </>
  );
};



export const Xmark=()=>{
  return(
    <>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
    </>
  )
}

export function NextIcon2() {
  return (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>


  )
}


export function PrevIcon2() {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
</svg>



  )
}

