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
        stroke-linecap="round"
        stroke-linejoin="round"
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
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Path_2"
            d="M6 2H3.33333C2.59667 2 2 2.59667 2 3.33333V12.6667C2 13.4033 2.59667 14 3.33333 14H12.6667C13.4033 14 14 13.4033 14 12.6667V10"
            stroke="#BF4D20"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
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
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  )
}

export function MarksAnim({ fill }: { fill: any }) {
  return (
    <svg width="109" height="112" viewBox="0 0 109 112" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M42.43 8.96206C41.6757 6.14706 41.7211 3.30619 42.427 0.680643L37.3259 2.04747C39.25 3.96832 40.7098 6.40588 41.4641 9.22087L49.7463 40.1305C52.0333 48.666 46.968 57.4393 38.4326 59.7264L7.52293 68.0086C5.09815 68.6583 2.65416 68.7147 0.345143 68.2667L1.43657 72.3399C3.21224 70.7975 5.35696 69.6243 7.78174 68.9746L38.6914 60.6923C47.2268 58.4053 56.0002 63.4706 58.2873 72.0061L66.5695 102.916C67.3238 105.731 67.2783 108.572 66.5725 111.197L71.6736 109.83C69.7495 107.909 68.2897 105.472 67.5354 102.657L59.2532 71.7472C56.9661 63.2118 62.0315 54.4384 70.5669 52.1513L101.477 43.8691C103.901 43.2194 106.345 43.163 108.654 43.611L107.563 39.5378C105.787 41.0803 103.643 42.2535 101.218 42.9032L70.3081 51.1854C61.7726 53.4725 52.9993 48.4071 50.7122 39.8717L42.43 8.96206Z" fill={fill}/>
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
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Path_2"
          d="M11.667 14.1667H28.3337"
          stroke="#BF4D20"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Path_3"
          d="M5 20L35 19.9998"
          stroke="#BF4D20"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Path_4"
          d="M11.667 25.8333H28.3337"
          stroke="#BF4D20"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Path_5"
          d="M26.667 5H30.0003C32.7617 5 35.0003 7.23858 35.0003 10V13.3333"
          stroke="#BF4D20"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Path_6"
          d="M5 26.6667V30C5 32.7614 7.23858 35 10 35H13.3333"
          stroke="#BF4D20"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Path_7"
          d="M5 13.3333V10C5 7.23858 7.23858 5 10 5H13.3333"
          stroke="#BF4D20"
          stroke-linecap="round"
          stroke-linejoin="round"
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
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Path_2"
          d="M12.5 8.75L9.375 11.875"
          stroke="#BF4D20"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Rectangle"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 17.5C5.85786 17.5 2.5 14.1421 2.5 10V10C2.5 5.85786 5.85786 2.5 10 2.5V2.5C14.1421 2.5 17.5 5.85786 17.5 10V10C17.5 14.1421 14.1421 17.5 10 17.5V17.5Z"
          stroke="#BF4D20"
          stroke-linecap="round"
          stroke-linejoin="round"
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
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Path_2"
          d="M18.6094 14.445C19.8467 16.0288 20.5007 17.9905 20.461 20C20.5007 22.0095 19.8467 23.9712 18.6094 25.555"
          stroke="#BF4D20"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Path_3"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.95262 11.3807L11.3807 6.95262C12.631 5.70238 14.3266 5 16.0947 5H23.9036C25.6717 5 27.3674 5.70238 28.6176 6.95262L33.0474 11.3824C34.2976 12.6326 35 14.3283 35 16.0964V23.9019C35 25.67 34.2976 27.3657 33.0474 28.6159L28.616 33.0474C27.3657 34.2976 25.67 35 23.9019 35H16.0964C14.3288 35 12.6335 34.298 11.3833 33.0483L6.9535 28.6202C5.70272 27.3699 5 25.6738 5 23.9052V16.0948C5 14.3267 5.70237 12.631 6.95262 11.3807Z"
          stroke="#BF4D20"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Path_4"
          d="M14.9999 17.2217C16.2354 18.8678 16.2354 21.1322 14.9999 22.7783"
          stroke="#BF4D20"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
}
