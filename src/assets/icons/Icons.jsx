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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 4.16663L15.8333 9.99996L10 15.8333"
        stroke="#212529"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
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
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M10 4.16663L15.8333 9.99996L10 15.8333"
          stroke="#212529"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
  );
}

export function InfoIcon() {
  return (
    <span className="">
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2264_20859)">
          <path
            d="M7.5 13.75C10.9518 13.75 13.75 10.9518 13.75 7.5C13.75 4.04822 10.9518 1.25 7.5 1.25C4.04822 1.25 1.25 4.04822 1.25 7.5C1.25 10.9518 4.04822 13.75 7.5 13.75Z"
            stroke="#212529"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 5V7.5"
            stroke="#212529"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 10H7.50625"
            stroke="#212529"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2264_20859">
            <rect width="15" height="15" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
}

export const TextIcon = ({ label, width, letter, startOffset, fontSize }) => {
  return (
    <>
      <svg
        viewBox="0 0 300 300"
        width={width}
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="SunCatcherStudio"
          fill="none"
          stroke="none"
          d="M 32.550491,148.48008 A -108.15144,-108.15144 0 0 1 140.70194,40.328644 -108.15144,-108.15144 0 0 1 248.85338,148.48008 -108.15144,-108.15144 0 0 1 140.70194,256.63153 -108.15144,-108.15144 0 0 1 32.550491,148.48008 Z"
        />
        <text
          fontSize={fontSize}
          fill="text-secondary"
          letterSpacing={letter}
          fontFamily="sans-serif"
          fontWeight="normal"
        >
          <textPath
            href="#SunCatcherStudio"
            side="left"
            startOffset={startOffset}
          >
            {/* Secure Ownership */} {label}
          </textPath>
        </text>
      </svg>
    </>
  );
};

export const Xmark = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        class="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </>
  );
};

export function NextIcon2() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}

export function PrevIcon2() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
}

export const ArrowBtn = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-3.5 h-3.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
      />
    </svg>
  );
};
