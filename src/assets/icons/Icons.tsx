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
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.0391 18.2539V18.2539C5.89656 18.2539 2.53906 14.8964 2.53906 10.7539V10.7539C2.53906 6.61141 5.89656 3.25391 10.0391 3.25391V3.25391C14.1816 3.25391 17.5391 6.61141 17.5391 10.7539V10.7539C17.5391 14.8964 14.1816 18.2539 10.0391 18.2539Z"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.0397 10.7539V14.9206"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
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
          fontSize={fontSize}
          fill="text-secondary"
          letterSpacing={letter}
          fontFamily="sans-serif"
          fontWeight="normal"
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

export function NextIcon2() {
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

export function PrevIcon2() {
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

export function RoundArrow() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.8643 18.4053V18.4053C15.3493 21.9203 9.65125 21.9203 6.13625 18.4053V18.4053C2.62125 14.8903 2.62125 9.19227 6.13625 5.67727V5.67727C9.65125 2.16227 15.3493 2.16227 18.8643 5.67727V5.67727C22.3793 9.19227 22.3793 14.8903 18.8643 18.4053Z"
        stroke="#EAA79E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 9.04102L9.5 15.041"
        stroke="#EAA79E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 9.04102H15.5V13.541"
        stroke="#EAA79E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LineDot({ storke }: { storke: any }) {
  return (
    <svg
      width="35"
      height="11"
      viewBox="0 0 35 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="5.36523" r="4.5" fill={storke} stroke={storke} />
      <path d="M0 5.36523H35" stroke={storke} />
    </svg>
  );
}

export function ArrowDown() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 14.041L12.5 10.041L16.5 14.041"
        stroke="#BF4D20"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TickCirIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="32"
      // height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28Z"
        fill="#42A55E"
        stroke="#35844B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 19L12 16"
        stroke="#ECF6EF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 14L15 19"
        stroke="#ECF6EF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EditIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3 18.3797L12.19 9.18973C12.581 8.79873 13.214 8.79873 13.604 9.18973L14.81 10.3957C15.201 10.7867 15.201 11.4197 14.81 11.8097L5.62 20.9997H3L3 18.3797Z"
        stroke="#BF4D20"
      />
      <path d="M13.202 13.4239L10.582 10.7939" stroke="#BF4D20" />
      <path
        d="M3 13V6.375C3 4.511 4.511 3 6.375 3H17.625C19.489 3 21 4.511 21 6.375V17.625C21 19.489 19.489 21 17.625 21H11"
        stroke="#BF4D20"
      />
    </svg>
  );
}
