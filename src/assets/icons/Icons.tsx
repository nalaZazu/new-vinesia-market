import React from "react";

export function NextIcon({ fill = "#BF4D20" }: { fill?: any }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="10"
      viewBox="0 0 21 10"
      fill="none"
    >
      <path
        d="M15.3711 9.67383C15.6286 8.11608 17.0088 5.00057 20.4692 5.00057"
        stroke={fill}
      />
      <path
        d="M15.3711 0.326172C15.6286 1.88392 17.0088 4.99943 20.4692 4.99943"
        stroke={fill}
      />
      <path d="M0 5L19 5" stroke={fill} />
    </svg>
  );
}

export function PrevIcon({ fill = "#BF4D20" }: { fill?: any }) {
  return (
    <div className="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="10"
        viewBox="0 0 21 10"
        fill="none"
      >
        <path
          d="M5.62891 9.67383C5.37139 8.11608 3.99124 5.00057 0.530768 5.00057"
          stroke={fill}
        />
        <path
          d="M5.62891 0.326172C5.37139 1.88392 3.99124 4.99943 0.530767 4.99943"
          stroke={fill}
        />
        <path d="M21 5L2 5" stroke={fill} />
      </svg>
    </div>
  );
}

export function InfoIcon({ fill = "gray" }: { fill?: any }) {
  return (
    <div className="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
      >
        <path
          d="M10.0389 7.42074C9.92388 7.42074 9.83055 7.51407 9.83138 7.62907C9.83138 7.74407 9.92472 7.8374 10.0397 7.8374C10.1547 7.8374 10.248 7.74407 10.248 7.62907C10.248 7.51407 10.1547 7.42074 10.0389 7.42074"
          stroke={fill}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.0391 18.2539V18.2539C5.89656 18.2539 2.53906 14.8964 2.53906 10.7539V10.7539C2.53906 6.61141 5.89656 3.25391 10.0391 3.25391V3.25391C14.1816 3.25391 17.5391 6.61141 17.5391 10.7539V10.7539C17.5391 14.8964 14.1816 18.2539 10.0391 18.2539Z"
          stroke={fill}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.0397 10.7539V14.9206"
          stroke={fill}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
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
          stroke-linecap="round"
          stroke-linejoin="round"
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
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.5033 20.0034L16.5516 16.0518"
        stroke={fill}
        stroke-linecap="round"
        stroke-linejoin="round"
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
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle
          id="Oval"
          cx="8.5"
          cy="4.5"
          r="4"
          stroke={fill}
          stroke-linecap="round"
          stroke-linejoin="round"
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.40805 11.1796L2.87305 3.93359H15.499C16.15 3.93359 16.627 4.54459 16.469 5.17659L15.121 10.5686C14.916 11.3876 14.22 11.9896 13.38 12.0736L6.56405 12.7556C5.54805 12.8566 4.61905 12.1776 4.40805 11.1796Z"
          stroke={fill}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Path_2"
          d="M2.874 3.93359L2.224 0.933594H0.5"
          stroke={fill}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Path_3"
          d="M14.1093 16.2004C13.9073 16.2004 13.7433 16.3644 13.7453 16.5664C13.7453 16.7684 13.9093 16.9324 14.1113 16.9324C14.3133 16.9324 14.4773 16.7684 14.4773 16.5664C14.4763 16.3644 14.3123 16.2004 14.1093 16.2004"
          stroke={fill}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Path_4"
          d="M5.69773 16.2009C5.49573 16.2009 5.33173 16.3649 5.33373 16.5669C5.33173 16.7699 5.49673 16.9339 5.69873 16.9339C5.90073 16.9339 6.06473 16.7699 6.06473 16.5679C6.06473 16.3649 5.90073 16.2009 5.69773 16.2009"
          stroke={fill}
          stroke-linecap="round"
          stroke-linejoin="round"
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
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 21V21C7.029 21 3 16.971 3 12V12C3 7.029 7.029 3 12 3V3C16.971 3 21 7.029 21 12V12C21 16.971 16.971 21 12 21Z"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 12V17"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
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
      // height="70"
      viewBox="0 0 394 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0H394V0L197 70L0 0V0Z" fill="#F7EFDF" />
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
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 21.5V21.5C7.029 21.5 3 17.471 3 12.5V12.5C3 7.529 7.029 3.5 12 3.5V3.5C16.971 3.5 21 7.529 21 12.5V12.5C21 17.471 16.971 21.5 12 21.5Z"
        stroke={storke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 12.5V17.5"
        stroke={storke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
