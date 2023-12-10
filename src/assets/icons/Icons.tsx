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
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 4.16663L15.8333 9.99996L10 15.8333"
        stroke="#212529"
        stroke-width="2"
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
          stroke-width="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M10 4.16663L15.8333 9.99996L10 15.8333"
          stroke="#212529"
          stroke-width="2"
          strokeLinecap="round"
          strokeLinejoin="round"
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
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 5V7.5"
            stroke="#212529"
            stroke-width="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 10H7.50625"
            stroke="#212529"
            stroke-width="2"
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
    </div>
  );
}

export const TextIcon = ({
  label,
  width,
  letter,
  startOffset,
  fontSize,
}: {
  label?: any;
  width?: any;
  letter?: any;
  startOffset?: any;
  fontSize?: any;
}) => {
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
          font-size={fontSize}
          fill="text-secondary"
          letter-spacing={letter}
          font-family="sans-serif"
          font-weight="normal"
        >
          <textPath
            href="#SunCatcherStudio"
            // side="left"
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
        stroke-width="1.5"
        stroke="currentColor"
        className="w-7 h-7"
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
      stroke-width="1.5"
      stroke="currentColor"
      className="w-6 h-6"
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
      stroke-width="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
}

export function SearchIcon({ fill }: { fill?: any }) {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="11.5586"
        cy="11.059"
        r="7.06194"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5033 20.0034L16.5516 16.0518"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function UserIcon({ fill }: { fill?: any }) {
  return (
    <svg
      width="17"
      height="18"
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <path
          id="Path"
          d="M16.5 17.5V16.75C16.5 14.4028 14.5972 12.5 12.25 12.5H4.75C2.40279 12.5 0.5 14.4028 0.5 16.75V17.5"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          id="Oval"
          cx="8.5"
          cy="4.5"
          r="4"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export function CartIcon({ fill }: { fill?: any }) {
  return (
    <svg
      className=" w-4 h-5"
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <path
          id="Path"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.40805 11.1796L2.87305 3.93359H15.499C16.15 3.93359 16.627 4.54459 16.469 5.17659L15.121 10.5686C14.916 11.3876 14.22 11.9896 13.38 12.0736L6.56405 12.7556C5.54805 12.8566 4.61905 12.1776 4.40805 11.1796Z"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Path_2"
          d="M2.874 3.93359L2.224 0.933594H0.5"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Path_3"
          d="M14.1093 16.2004C13.9073 16.2004 13.7433 16.3644 13.7453 16.5664C13.7453 16.7684 13.9093 16.9324 14.1113 16.9324C14.3133 16.9324 14.4773 16.7684 14.4773 16.5664C14.4763 16.3644 14.3123 16.2004 14.1093 16.2004"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Path_4"
          d="M5.69773 16.2009C5.49573 16.2009 5.33173 16.3649 5.33373 16.5669C5.33173 16.7699 5.49673 16.9339 5.69873 16.9339C5.90073 16.9339 6.06473 16.7699 6.06473 16.5679C6.06473 16.3649 5.90073 16.2009 5.69773 16.2009"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export function AlertIcons() {
  return (
    <>
      <svg
        width="16"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.999 8C11.861 8 11.749 8.112 11.75 8.25C11.75 8.388 11.862 8.5 12 8.5C12.138 8.5 12.25 8.388 12.25 8.25C12.25 8.112 12.138 8 11.999 8"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 21V21C7.029 21 3 16.971 3 12V12C3 7.029 7.029 3 12 3V3C16.971 3 21 7.029 21 12V12C21 16.971 16.971 21 12 21Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 12V17"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}

export function Arrows({ storke }: { storke: any }) {
  return (
    <>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.9023 12.1738L1.90234 12.1738" stroke={storke} />
        <path
          d="M15.9023 16.8477C16.1599 15.2899 17.54 12.1744 21.0005 12.1744"
          stroke={storke}
        />
        <path
          d="M15.9023 7.5C16.1599 9.05775 17.54 12.1733 21.0005 12.1733"
          stroke={storke}
        />
      </svg>
    </>
  );
}

export function BgRectangle() {
  return (
    <svg
      width="100%"
      height="1037"
      // viewBox="0 0 394 1037"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0H394V967L197 1037L0 967V0Z" fill="#f7f0e0" />
    </svg>
  );
}
export const Xmark_old = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-7 h-7"
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

export function NextIcon2_old() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}

export function PrevIcon2_old() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
}

export function AlertCircle({ storke }: { storke: any }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M11.999 8.5C11.861 8.5 11.749 8.612 11.75 8.75C11.75 8.888 11.862 9 12 9C12.138 9 12.25 8.888 12.25 8.75C12.25 8.612 12.138 8.5 11.999 8.5"
        stroke={storke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21.5V21.5C7.029 21.5 3 17.471 3 12.5V12.5C3 7.529 7.029 3.5 12 3.5V3.5C16.971 3.5 21 7.529 21 12.5V12.5C21 17.471 16.971 21.5 12 21.5Z"
        stroke={storke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12.5V17.5"
        stroke={storke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
