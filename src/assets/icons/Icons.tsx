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

export function LinkIcon({ storke }: { storke?: any }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <g id="Group_2">
          <path
            id="Path"
            d="M8 8L14 2V6.66667V2H9.33333"
            stroke="#BF4D20"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_2"
            d="M6 2H3.33333C2.59667 2 2 2.59667 2 3.33333V12.6667C2 13.4033 2.59667 14 3.33333 14H12.6667C13.4033 14 14 13.4033 14 12.6667V10"
            stroke="#BF4D20"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
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

export function ArrowLongRight({ storke }: { storke?: any }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-6 h-6 text-secondary"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
}

export function MarksAnim({ fill }: { fill: any }) {
  return (
    <svg
      width="109"
      height="112"
      viewBox="0 0 109 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M42.43 8.96206C41.6757 6.14706 41.7211 3.30619 42.427 0.680643L37.3259 2.04747C39.25 3.96832 40.7098 6.40588 41.4641 9.22087L49.7463 40.1305C52.0333 48.666 46.968 57.4393 38.4326 59.7264L7.52293 68.0086C5.09815 68.6583 2.65416 68.7147 0.345143 68.2667L1.43657 72.3399C3.21224 70.7975 5.35696 69.6243 7.78174 68.9746L38.6914 60.6923C47.2268 58.4053 56.0002 63.4706 58.2873 72.0061L66.5695 102.916C67.3238 105.731 67.2783 108.572 66.5725 111.197L71.6736 109.83C69.7495 107.909 68.2897 105.472 67.5354 102.657L59.2532 71.7472C56.9661 63.2118 62.0315 54.4384 70.5669 52.1513L101.477 43.8691C103.901 43.2194 106.345 43.163 108.654 43.611L107.563 39.5378C105.787 41.0803 103.643 42.2535 101.218 42.9032L70.3081 51.1854C61.7726 53.4725 52.9993 48.4071 50.7122 39.8717L42.43 8.96206Z"
        fill={fill}
      />
    </svg>
  );
}

export function BarcodeLink({ storke }: { storke?: any }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Vinesia Icons/Barcode">
        <path
          id="Path"
          d="M26.667 35H30.0003C32.7617 35 35.0003 32.7614 35.0003 30V26.6667"
          stroke="#BF4D20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Path_2"
          d="M11.667 14.1667H28.3337"
          stroke="#BF4D20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Path_3"
          d="M5 20L35 19.9998"
          stroke="#BF4D20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Path_4"
          d="M11.667 25.8333H28.3337"
          stroke="#BF4D20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Path_5"
          d="M26.667 5H30.0003C32.7617 5 35.0003 7.23858 35.0003 10V13.3333"
          stroke="#BF4D20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Path_6"
          d="M5 26.6667V30C5 32.7614 7.23858 35 10 35H13.3333"
          stroke="#BF4D20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Path_7"
          d="M5 13.3333V10C5 7.23858 7.23858 5 10 5H13.3333"
          stroke="#BF4D20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export function CheckBox({ storke }: { storke?: any }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <path
          id="Path"
          d="M9.375 11.875L7.5 10"
          stroke="#BF4D20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Path_2"
          d="M12.5 8.75L9.375 11.875"
          stroke="#BF4D20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Rectangle"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 17.5C5.85786 17.5 2.5 14.1421 2.5 10V10C2.5 5.85786 5.85786 2.5 10 2.5V2.5C14.1421 2.5 17.5 5.85786 17.5 10V10C17.5 14.1421 14.1421 17.5 10 17.5V17.5Z"
          stroke="#BF4D20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export function SensorModal({ storke }: { storke?: any }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Vinesia Icons/Sensor">
        <path
          id="Path"
          d="M21.9121 11.6667C23.944 13.9624 25.0449 16.9345 24.9988 20C25.0449 23.0655 23.944 26.0376 21.9121 28.3333"
          stroke="#BF4D20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Path_2"
          d="M18.6094 14.445C19.8467 16.0288 20.5007 17.9905 20.461 20C20.5007 22.0095 19.8467 23.9712 18.6094 25.555"
          stroke="#BF4D20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Path_3"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.95262 11.3807L11.3807 6.95262C12.631 5.70238 14.3266 5 16.0947 5H23.9036C25.6717 5 27.3674 5.70238 28.6176 6.95262L33.0474 11.3824C34.2976 12.6326 35 14.3283 35 16.0964V23.9019C35 25.67 34.2976 27.3657 33.0474 28.6159L28.616 33.0474C27.3657 34.2976 25.67 35 23.9019 35H16.0964C14.3288 35 12.6335 34.298 11.3833 33.0483L6.9535 28.6202C5.70272 27.3699 5 25.6738 5 23.9052V16.0948C5 14.3267 5.70237 12.631 6.95262 11.3807Z"
          stroke="#BF4D20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Path_4"
          d="M14.9999 17.2217C16.2354 18.8678 16.2354 21.1322 14.9999 22.7783"
          stroke="#BF4D20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export function InvestmentPortfolio({ storke }: { storke?: any }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <circle
          id="Oval"
          cx="19.503"
          cy="4.49714"
          r="2.50104"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Path"
          d="M15.9998 10L13.2797 13.6265L9.99734 11.0004L6.99609 15.0021"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Path_2"
          d="M21.0036 9.99901V17.0019C21.0036 19.212 19.212 21.0036 17.0019 21.0036H6.99776C4.7877 21.0036 2.99609 19.212 2.99609 17.0019V6.99776C2.99609 4.7877 4.7877 2.99609 6.99776 2.99609H14.0007"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export function FavouriteWine({ storke }: { storke?: any }) {
  return (
    <svg
      width="18"
      height="21"
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <g id="Group 1">
          <path
            id="Path"
            d="M3.44141 5H6.55667"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_2"
            d="M8.76752 11H1.23242"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_3"
            d="M9 16H1"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_4"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9 13V18C9 19.1046 8.10457 20 7 20H3C1.89543 20 1 19.1046 1 18V13C0.99981 11.4143 1.43197 9.85846 2.25 8.5V8.5C3.06782 7.14145 3.49997 5.58572 3.5 4V2C3.5 1.44772 3.94772 1 4.5 1H5.5C6.05228 1 6.5 1.44772 6.5 2V4C6.49981 5.58575 6.93197 7.14154 7.75 8.5V8.5C8.56782 9.85855 8.99997 11.4143 9 13Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <g id="Group 2">
          <path
            id="Path_5"
            d="M11.4414 5H14.5567"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_6"
            d="M16.7675 11H9.23242"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_7"
            d="M17 16H9"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_8"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17 13V18C17 19.1046 16.1046 20 15 20H11C9.89543 20 9 19.1046 9 18V13C8.99981 11.4143 9.43197 9.85846 10.25 8.5V8.5C11.0678 7.14145 11.5 5.58572 11.5 4V2C11.5 1.44772 11.9477 1 12.5 1H13.5C14.0523 1 14.5 1.44772 14.5 2V4C14.4998 5.58575 14.932 7.14154 15.75 8.5V8.5C16.5678 9.85855 17 11.4143 17 13Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}

export function BidsOffer({ storke }: { storke?: any }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <g id="Group_2">
          <path
            id="Path"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.4255 2.94836L15.1475 2.06736C15.7915 1.85836 16.4915 2.14936 16.7995 2.75136L18.1005 5.29936C18.2325 5.55736 18.4425 5.76836 18.7015 5.90036L21.2175 7.18536C21.8385 7.50236 22.1375 8.22436 21.9225 8.88836L21.0525 11.5764C20.9635 11.8524 20.9635 12.1494 21.0525 12.4254L21.9335 15.1474C22.1425 15.7914 21.8515 16.4914 21.2495 16.7994L18.7015 18.1004C18.4435 18.2324 18.2325 18.4424 18.1005 18.7014L16.7985 21.2494C16.4905 21.8524 15.7905 22.1424 15.1465 21.9334L12.4245 21.0524C12.1485 20.9634 11.8515 20.9634 11.5755 21.0524L8.85347 21.9334C8.20947 22.1424 7.50947 21.8514 7.20147 21.2494L5.90047 18.7014C5.76847 18.4434 5.55847 18.2324 5.29947 18.1004L2.75147 16.7984C2.14847 16.4904 1.85847 15.7904 2.06747 15.1464L2.94847 12.4244C3.03747 12.1484 3.03747 11.8514 2.94847 11.5754L2.06747 8.85436C1.85947 8.21036 2.14947 7.50936 2.75247 7.20136L5.29947 5.90036C5.55847 5.76836 5.76847 5.55836 5.90047 5.29936L7.20247 2.75136C7.50947 2.14936 8.21047 1.85936 8.85447 2.06736L11.5765 2.94836C11.8515 3.03836 12.1495 3.03836 12.4255 2.94836V2.94836Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_2"
            d="M9 15L15 9"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_3"
            d="M9.249 9C9.111 9 8.999 9.112 9 9.25C9 9.388 9.112 9.5 9.25 9.5C9.388 9.5 9.5 9.388 9.5 9.25C9.5 9.112 9.388 9 9.249 9"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_4"
            d="M14.749 14.5C14.611 14.5 14.499 14.612 14.5 14.75C14.5 14.888 14.612 15 14.75 15C14.888 15 15 14.888 15 14.75C15 14.612 14.888 14.5 14.749 14.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}

export function Wallet({ storke }: { storke?: any }) {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.0023 6.95113L16.6365 3.79672C15.9993 2.94719 14.8095 2.74338 13.926 3.33243L8.42773 6.99791"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.001 11.4998H21.5021C22.0546 11.4998 22.5025 11.9477 22.5025 12.5002V15.5015C22.5025 16.054 22.0546 16.5019 21.5021 16.5019H19.001C17.6198 16.5019 16.5 15.3821 16.5 14.0008V14.0008C16.5 12.6195 17.6198 11.4998 19.001 11.4998V11.4998Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5036 11.4998V9.49895C21.5036 8.11766 20.3838 6.99791 19.0026 6.99791H5.99714C4.61585 6.99791 3.49609 8.11766 3.49609 9.49895V18.5027C3.49609 19.884 4.61585 21.0037 5.99714 21.0037H19.0026C20.3838 21.0037 21.5036 19.884 21.5036 18.5027V16.5019"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Invoice({ storke }: { storke?: any }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <path
          id="Path"
          d="M9.00781 14.5H15.0078"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Path_2"
          d="M10.5 10.3L11.7 11.5L13.7 9.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Path_3"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.449 20.396L18.459 20.8935C18.1785 21.0345 17.8481 21.0355 17.5667 20.8964L15.9942 20.1188L14.4533 20.8929C14.172 21.0342 13.8406 21.0348 13.5588 20.8945L12 20.1185L10.4412 20.8945C10.1594 21.0348 9.82799 21.0342 9.54668 20.8929L8.00578 20.1188L6.4333 20.8964C6.15191 21.0355 5.82151 21.0345 5.54102 20.8935L4.55102 20.396C4.21321 20.2263 4.00001 19.8805 4 19.5025V4.49752C4 4.11947 4.2132 3.77374 4.551 3.604L5.541 3.10648C5.82149 2.96552 6.15189 2.96446 6.43328 3.10361L8.00576 3.8812L9.54666 3.10713C9.82797 2.96581 10.1594 2.96521 10.4412 3.10551L12 3.88151L13.5588 3.10551C13.8406 2.96521 14.172 2.96581 14.4533 3.10713L15.9942 3.8812L17.5667 3.10361C17.8481 2.96446 18.1785 2.96552 18.459 3.10648L19.449 3.604C19.7868 3.77374 20 4.11947 20 4.49752V19.5025C20 19.8806 19.7868 20.2263 19.449 20.396Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export function VinesiaCircle({ storke }: { storke?: any }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <g id="Group_2">
          <path
            id="Path"
            d="M6.49039 15.578C7.27144 16.359 7.27144 17.6254 6.49039 18.4064C5.70934 19.1875 4.44301 19.1875 3.66196 18.4064C2.88091 17.6254 2.88091 16.359 3.66196 15.578C4.44301 14.7969 5.70934 14.7969 6.49039 15.578"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_2"
            d="M13.4142 3.58579C14.1953 4.36684 14.1953 5.63317 13.4142 6.41422C12.6332 7.19527 11.3668 7.19527 10.5858 6.41422C9.80474 5.63317 9.80474 4.36684 10.5858 3.58579C11.3668 2.80474 12.6332 2.80474 13.4142 3.58579"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_3"
            d="M20.3361 15.5741C21.1171 16.3551 21.1171 17.6214 20.3361 18.4025C19.555 19.1835 18.2887 19.1835 17.5077 18.4025C16.7266 17.6214 16.7266 16.3551 17.5077 15.5741C18.2887 14.793 19.555 14.793 20.3361 15.5741"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_4"
            d="M17.7171 18.5742C16.2661 20.0632 14.2441 20.9922 12.0001 20.9922C10.8551 20.9922 9.77011 20.7462 8.78711 20.3122"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_5"
            d="M4.29765 15.1478C3.73765 13.1498 3.94565 10.9388 5.06565 8.99878C5.63965 8.00378 6.39865 7.18578 7.26965 6.55078"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_6"
            d="M13.9727 5.25391C15.9887 5.76591 17.8037 7.05191 18.9267 8.99591C19.4957 9.98091 19.8247 11.0359 19.9437 12.0979"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}

export function MyAccount({ storke }: { storke?: any }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <path
          id="Path"
          d="M20 20V19.25C20 16.9028 18.0972 15 15.75 15H8.25C5.90279 15 4 16.9028 4 19.25V20"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          id="Oval"
          cx="12"
          cy="7"
          r="4"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export function Logout({ storke }: { storke?: any }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <g id="Group_2">
          <path
            id="Path"
            d="M15 12H3"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_2"
            d="M3.94727 16C5.42027 18.961 8.46827 21 12.0003 21C16.9713 21 21.0003 16.971 21.0003 12C21.0003 7.029 16.9713 3 12.0003 3C8.46827 3 5.42027 5.039 3.94727 8"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_3"
            d="M12 9L15 12L12 15"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}
