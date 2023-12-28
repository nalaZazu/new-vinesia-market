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

export function InfoIcon({
  fill = "gray",
  size = "21",
}: {
  fill?: any;
  size?: any;
}) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
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
          fillRule="evenodd"
          clipRule="evenodd"
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
    </>
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

export function NextIcon2({ fill = "currentColor" }: { fill?: any }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={fill}
      className="w-full h-full"
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
      width="20"
      height="20"
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
        fillRule="evenodd"
        clipRule="evenodd"
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
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 154 154"
      width="200"
      height="200"
      className="scroll_rotate"
    >
      <path
        fill={fill}
        d="M147,.34l6.58,6.6a2.24,2.24,0,0,1-.61.34,29.18,29.18,0,0,0-12.44,7.51Q119.93,35.39,99.33,56a28.84,28.84,0,0,0-8.66,23.91A27.87,27.87,0,0,0,98.2,96.81c1.77,1.91,3.65,3.71,5.49,5.55q18.12,18.14,36.24,36.27A31.71,31.71,0,0,0,151,146.12a3.65,3.65,0,0,1,.45.22l-5.18,5.18a5.68,5.68,0,0,1-.35-.73,29.22,29.22,0,0,0-6.71-10.13Q118.61,120,98,99.42A29.47,29.47,0,0,0,56,99.31Q35.3,120,14.59,140.76a29.4,29.4,0,0,0-7.22,11.75c-.14.43-.31.84-.42,1.15L.38,147c.39-.15.89-.35,1.4-.52A27.89,27.89,0,0,0,12.55,140c14.33-14.31,28.74-28.55,42.93-43C65.91,86.37,66,68.65,56,57.58c-.85-.94-1.73-1.87-2.63-2.77Q34,35.49,14.73,16.16A33.3,33.3,0,0,0,2.6,7.85c-.14,0-.24-.18-.19-.13l5.2-5.21c0,.11.25.5.42.9a29.66,29.66,0,0,0,6.45,9.76Q35.33,34,56.16,54.83a29.35,29.35,0,0,0,40.44,1.1c.15-.14.3-.27.45-.42Q118.58,34,140.1,12.42a26.73,26.73,0,0,0,6.16-10.11c.21-.58.41-1.16.62-1.73A1,1,0,0,1,147,.34Z"
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
          stroke={storke ?? "#BF4D20"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Path_2"
          d="M12.5 8.75L9.375 11.875"
          stroke={storke ?? "#BF4D20"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Rectangle"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 17.5C5.85786 17.5 2.5 14.1421 2.5 10V10C2.5 5.85786 5.85786 2.5 10 2.5V2.5C14.1421 2.5 17.5 5.85786 17.5 10V10C17.5 14.1421 14.1421 17.5 10 17.5V17.5Z"
          stroke={storke ?? "#BF4D20"}
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
          fillRule="evenodd"
          clipRule="evenodd"
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
            fillRule="evenodd"
            clipRule="evenodd"
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
            fillRule="evenodd"
            clipRule="evenodd"
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
            fillRule="evenodd"
            clipRule="evenodd"
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
        fillRule="evenodd"
        clipRule="evenodd"
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
          fillRule="evenodd"
          clipRule="evenodd"
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

export function ErrorIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        clipRule="evenodd"
        d="M12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21Z"
        fill="#EF4444"
        stroke="#DC2626"
      />
      <path
        clipRule="evenodd"
        d="M12.001 16.75C12.139 16.75 12.251 16.638 12.25 16.5C12.25 16.362 12.138 16.25 12 16.25C11.862 16.25 11.75 16.362 11.75 16.5C11.75 16.638 11.862 16.75 12.001 16.75Z"
        fill="white"
      />
      <path
        d="M12.001 16.75C12.139 16.75 12.251 16.638 12.25 16.5C12.25 16.362 12.138 16.25 12 16.25C11.862 16.25 11.75 16.362 11.75 16.5C11.75 16.638 11.862 16.75 12.001 16.75"
        stroke="white"
      />
      <path clipRule="evenodd" d="M12 12.75L12 7.75L12 12.75Z" fill="white" />
      <path d="M12 12.75L12 7.75" stroke="white" />
    </svg>
  );
}

export function ArrowLongUP() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.9488 7.04971L7.04883 16.9497"
        stroke="#BF4D20"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.875 7.04958L16.948 7.04958L16.947 14.1216"
        stroke="#BF4D20"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function ArrowLongDown() {
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
            d="M16.9498 16.9508L7.0498 7.05078"
            stroke="#35844B"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Path_2"
            d="M9.87695 16.9509L16.95 16.9509L16.949 9.87891"
            stroke="#35844B"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}
export function ArrowTable() {
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
          <g id="Group 1">
            <path
              id="Path"
              d="M16 10L12 6L8 10"
              stroke="#BF4D20"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Path_2"
              d="M8 14L12 18L16 14"
              stroke="#BF4D20"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export function MenuDots() {
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
            d="M11.9972 17.5039C11.7221 17.5039 11.497 17.729 11.5 18.0041C11.5 18.2792 11.7251 18.5043 12.0002 18.5043C12.2754 18.5043 12.5004 18.2792 12.5004 18.0041C12.5004 17.729 12.2754 17.5039 11.9972 17.5039"
            stroke="#2F222B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Path_2"
            d="M11.9972 11.5039C11.7221 11.5039 11.497 11.729 11.5 12.0041C11.5 12.2792 11.7251 12.5043 12.0002 12.5043C12.2754 12.5043 12.5004 12.2792 12.5004 12.0041C12.5004 11.729 12.2754 11.5039 11.9972 11.5039"
            stroke="#2F222B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Path_3"
            d="M11.9972 5.5C11.7221 5.5 11.497 5.72509 11.5 6.00021C11.5 6.27532 11.7251 6.50042 12.0002 6.50042C12.2754 6.50042 12.5004 6.27532 12.5004 6.00021C12.5004 5.72509 12.2754 5.5 11.9972 5.5"
            stroke="#2F222B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}

export function Google() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_861_42028)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.6 10.2273C19.6 9.51819 19.5364 8.83637 19.4182 8.18182H10V12.05H15.3818C15.15 13.3 14.4455 14.3591 13.3864 15.0682V17.5773H16.6182C18.5091 15.8364 19.6 13.2727 19.6 10.2273Z"
          fill="#4285F4"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.0008 20C12.7008 20 14.9645 19.1045 16.619 17.5772L13.3872 15.0681C12.4917 15.6681 11.3463 16.0227 10.0008 16.0227C7.39627 16.0227 5.19173 14.2636 4.40536 11.9H1.06445V14.4909C2.70991 17.7591 6.09173 20 10.0008 20Z"
          fill="#34A853"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.40455 11.9C4.20455 11.3 4.09091 10.6591 4.09091 10C4.09091 9.34091 4.20455 8.7 4.40455 8.1V5.50909H1.06364C0.386364 6.85909 0 8.38637 0 10C0 11.6136 0.386364 13.1409 1.06364 14.4909L4.40455 11.9Z"
          fill="#FBBC05"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.0008 3.97727C11.469 3.97727 12.7872 4.48182 13.8235 5.47273L16.6917 2.60455C14.9599 0.990909 12.6963 0 10.0008 0C6.09173 0 2.70991 2.24091 1.06445 5.50909L4.40536 8.1C5.19173 5.73636 7.39627 3.97727 10.0008 3.97727Z"
          fill="#EA4335"
        />
      </g>
      <defs>
        <clipPath id="clip0_861_42028">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function VintageIcon({ color = "white" }: { color?: any }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="18"
      // height="21"
      viewBox="0 0 18 21"
      fill="none"
    >
      <path d="M3.44238 5H6.55764" stroke={color} />
      <path d="M8.76752 11H1.23242" stroke={color} />
      <path d="M9 16H1" stroke={color} />
      <path
        d="M9 13V18C9 19.1046 8.10457 20 7 20H3C1.89543 20 1 19.1046 1 18V13C0.99981 11.4143 1.43197 9.85846 2.25 8.5V8.5C3.06782 7.14145 3.49997 5.58572 3.5 4V2C3.5 1.44772 3.94772 1 4.5 1H5.5C6.05228 1 6.5 1.44772 6.5 2V4C6.49981 5.58575 6.93197 7.14154 7.75 8.5V8.5C8.56782 9.85855 8.99997 11.4143 9 13Z"
        stroke={color}
      />
      <path d="M11.4424 5H14.5576" stroke={color} />
      <path d="M16.7675 11H9.23242" stroke={color} />
      <path d="M17 16H9" stroke={color} />
      <path
        d="M17 13V18C17 19.1046 16.1046 20 15 20H11C9.89543 20 9 19.1046 9 18V13C8.99981 11.4143 9.43197 9.85846 10.25 8.5V8.5C11.0678 7.14145 11.5 5.58572 11.5 4V2C11.5 1.44772 11.9477 1 12.5 1H13.5C14.0523 1 14.5 1.44772 14.5 2V4C14.4998 5.58575 14.932 7.14154 15.75 8.5V8.5C16.5678 9.85855 17 11.4143 17 13Z"
        stroke={color}
      />
    </svg>
  );
}

export function GiftIcon({ color = "white" }: { color?: any }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="25"
      // height="24"
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M20.6666 8H4.66663C4.11463 8 3.66663 8.448 3.66663 9V11C3.66663 11.552 4.11463 12 4.66663 12H20.6666C21.2186 12 21.6666 11.552 21.6666 11V9C21.6666 8.448 21.2186 8 20.6666 8Z"
        stroke={color}
      />
      <path d="M12.6666 21V8" stroke={color} />
      <path
        d="M16.3626 6.61328C15.2846 7.73528 13.5876 8.00128 12.7656 8.00128"
        stroke={color}
      />
      <path
        d="M12.7656 8.00109C12.7656 8.00109 12.2716 4.88509 13.4866 3.62109"
        stroke={color}
      />
      <path
        d="M16.3626 6.6115C17.1566 5.7855 17.1566 4.4455 16.3626 3.6195C15.5686 2.7935 14.2816 2.7935 13.4876 3.6195"
        stroke={color}
      />
      <path
        d="M8.97064 6.61328C10.0486 7.73528 11.7456 8.00128 12.5676 8.00128"
        stroke={color}
      />
      <path
        d="M12.5677 8.00109C12.5677 8.00109 13.0617 4.88509 11.8467 3.62109"
        stroke={color}
      />
      <path
        d="M8.97062 6.6115C8.17662 5.7855 8.17662 4.4455 8.97062 3.6195C9.76462 2.7935 11.0516 2.7935 11.8456 3.6195"
        stroke={color}
      />
      <path
        d="M19.6666 12V20C19.6666 20.552 19.2186 21 18.6666 21H6.66663C6.11463 21 5.66663 20.552 5.66663 20V12"
        stroke={color}
      />
    </svg>
  );
}

export function ExculsiveIcon({ color = "white" }: { color?: any }) {
  return (
    <svg viewBox="0 0 25 24" fill="none">
      <path
        d="M6.33089 2.99609C6.33089 5.20615 4.53928 6.99776 2.32922 6.99776C4.53928 6.99776 6.33089 8.78937 6.33089 10.9994C6.33089 8.78937 8.1225 6.99776 10.3326 6.99776C8.1225 6.99776 6.33089 5.20615 6.33089 2.99609Z"
        stroke={color}
      />
      <path
        d="M17.3355 15.0042C17.3355 12.2416 15.0959 10.0021 12.3334 10.0021C15.0959 10.0021 17.3355 7.76257 17.3355 5C17.3355 7.76257 19.575 10.0021 22.3375 10.0021C19.575 10.0021 17.3355 12.2416 17.3355 15.0042Z"
        stroke={color}
      />
      <path d="M17.3355 15.0039V16.0043" stroke={color} />
      <path d="M17.3355 4.99651V3.99609" stroke={color} />
      <path d="M10.3325 21.0039V22.0043" stroke={color} />
      <path d="M10.3325 14.0004V13" stroke={color} />
      <path d="M6.3309 11V12.0004" stroke={color} />
      <path d="M6.3309 1.99609V2.99651" stroke={color} />
      <path
        d="M10.3325 13.5C10.3325 15.7101 8.54093 17.5017 6.33087 17.5017C8.54093 17.5017 10.3325 19.2933 10.3325 21.5033C10.3325 19.2933 12.1241 17.5017 14.3342 17.5017C12.1241 17.5017 10.3325 15.7101 10.3325 13.5Z"
        stroke={color}
      />
    </svg>
  );
}
export function DecentrIcon({ color = "white" }: { color?: any }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="19"
      // height="20"
      viewBox="0 0 19 20"
      fill="none"
    >
      <path
        d="M15.5 15H17.5C18.052 15 18.5 15.448 18.5 16V18C18.5 18.552 18.052 19 17.5 19H15.5C14.948 19 14.5 18.552 14.5 18V16C14.5 15.448 14.948 15 15.5 15Z"
        stroke={color}
      />
      <path
        d="M1.5 1H3.5C4.052 1 4.5 1.448 4.5 2V4C4.5 4.552 4.052 5 3.5 5H1.5C0.948 5 0.5 4.552 0.5 4V2C0.5 1.448 0.948 1 1.5 1Z"
        stroke={color}
      />
      <path
        d="M8.5 8H10.5C11.052 8 11.5 8.448 11.5 9V11C11.5 11.552 11.052 12 10.5 12H8.5C7.948 12 7.5 11.552 7.5 11V9C7.5 8.448 7.948 8 8.5 8Z"
        stroke={color}
      />
      <path
        d="M8.5 3H16.5C17.605 3 18.5 3.895 18.5 5V8C18.5 9.105 17.605 10 16.5 10H14.5"
        stroke={color}
      />
      <path
        d="M10.5 17H2.5C1.395 17 0.5 16.105 0.5 15V12C0.5 10.895 1.395 10 2.5 10H4.5"
        stroke={color}
      />
    </svg>
  );
}

export function DocIcon({ color = "white" }: { color?: any }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="25"
      // height="24"
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M7.5 21H18C19.3807 21 20.5 19.8807 20.5 18.5V8.37167C20.5 7.57602 20.1839 6.81296 19.6213 6.25035L17.2497 3.87868C16.687 3.31607 15.924 3 15.1283 3H8C6.61929 3 5.5 4.11929 5.5 5.5V19C5.5 20.1046 6.39543 21 7.5 21Z"
        stroke={color}
      />
      <path
        d="M20.4764 7.99982H17C16.1716 7.99982 15.5 7.32824 15.5 6.49982V3.02344"
        stroke={color}
      />
      <path d="M16.5 12H12.75" stroke={color} />
      <path d="M16.5 16H12.75" stroke={color} />
      <path
        d="M9.5 11.875C9.43096 11.875 9.375 11.931 9.375 12C9.375 12.069 9.43096 12.125 9.5 12.125C9.56904 12.125 9.625 12.069 9.625 12C9.625 11.931 9.56904 11.875 9.5 11.875"
        stroke={color}
      />
      <path
        d="M9.5 15.875C9.43096 15.875 9.375 15.931 9.375 16C9.375 16.069 9.43096 16.125 9.5 16.125C9.56904 16.125 9.625 16.069 9.625 16C9.625 15.931 9.56904 15.875 9.5 15.875"
        stroke={color}
      />
    </svg>
  );
}
export function DocVerifyIcon({ color = "white" }: { color?: any }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="25"
      // height="24"
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M20.5033 7.99818H16.5016C15.9491 7.99818 15.5012 7.55028 15.5012 6.99776V2.99609"
        stroke={color}
      />
      <path
        d="M6.4975 7.99818V4.99693C6.4975 3.8919 7.3933 2.99609 8.49833 2.99609H15.6733C16.2039 2.99609 16.7128 3.20708 17.0879 3.58234L19.9171 6.41152C20.2923 6.78666 20.5033 7.29549 20.5033 7.82611V19.0028C20.5033 20.1078 19.6075 21.0036 18.5025 21.0036H8.49833C7.3933 21.0036 6.4975 20.1078 6.4975 19.0028V18.0023"
        stroke={color}
      />
      <path
        d="M10.3611 11.9648L7.86006 14.4659L6.35944 12.9653"
        stroke={color}
      />
      <rect
        x="3.49622"
        y="8"
        width="10.0042"
        height="10.0042"
        rx="3"
        stroke={color}
      />
    </svg>
  );
}

export function BookIcon({ color = "#BF4D20" }: { color?: any }) {
  return (
    <svg
      // width="20"
      // height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M1.00003 3.86142V17.1263C1.00319 17.4761 1.1883 17.799 1.48856 17.9784C1.78883 18.1579 2.16088 18.168 2.47044 18.0051C4.95213 16.7937 7.9179 17.1853 10 18.9995C12.0822 17.1853 15.0479 16.7937 17.5296 18.0051C17.8392 18.168 18.2112 18.1579 18.5115 17.9784C18.8118 17.799 18.9969 17.4761 19 17.1263V3.86142C19.0034 3.24165 18.7191 2.65539 18.2303 2.27423C15.7215 0.337935 12.1491 0.639181 10 2.96826C7.85091 0.639184 4.27851 0.337951 1.76972 2.27426C1.28101 2.65541 0.996707 3.24167 1.00003 3.86142Z"
        stroke={color}
      />
      <path d="M10 19V2.96875" stroke={color} />
    </svg>
  );
}

export function Certif_Icon({ color = "#BF4D20" }: { color?: any }) {
  return (
    <svg
      // width="16"
      // height="20"
      viewBox="0 0 16 20"
      fill="none"
    >
      <circle cx="8" cy="12.5" r="6.5" stroke={color} />
      <circle cx="8" cy="12.5" r="3" stroke={color} />
      <path
        d="M6.84277 6.10876L10.1203 1.42654C10.3075 1.15921 10.6133 1 10.9396 1H14.4983C14.8711 0.999986 15.2131 1.20744 15.3853 1.53819C15.5575 1.86893 15.5314 2.26802 15.3175 2.57349L11.9674 7.35938"
        stroke={color}
      />
      <path
        d="M8.00002 4.45557L5.87965 1.42651C5.69252 1.1592 5.38673 0.999998 5.06043 1H1.50178C1.12889 0.999975 0.786953 1.20743 0.614741 1.53817C0.442529 1.86892 0.468649 2.26801 0.682499 2.57349L4.0326 7.35938"
        stroke={color}
      />
    </svg>
  );
}

export function ArtworkIcon({ color = "#BF4D20" }: { color?: any }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="1" y="1" width="18" height="18" rx="5" stroke="#BF4D20" />
      <path
        d="M1.0835 14.9148L6.28993 9.70834C7.23438 8.76389 8.76563 8.76389 9.71009 9.70834L17.5364 17.5347"
        stroke={color}
      />
      <path
        d="M13.3226 6.32383L13.323 6.32339C13.4205 6.22614 13.5784 6.22629 13.6757 6.32372C13.773 6.42116 13.773 6.57901 13.6756 6.67639C13.5782 6.77376 13.4204 6.77381 13.3229 6.6765C13.2255 6.57919 13.2253 6.42133 13.3226 6.32383"
        stroke={color}
      />
    </svg>
  );
}

export function Facebook({ fill }: { fill: any }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <g clipPath="url(#clip0_1284_51895)">
        <path
          d="M9.98374 7.73917L10.3292 5.46409H8.16791V3.98836C8.16791 3.36578 8.46928 2.75858 9.43732 2.75858H10.4206V0.82169C10.4206 0.82169 9.52864 0.667969 8.67628 0.667969C6.89546 0.667969 5.7326 1.75786 5.7326 3.7301V5.46409H3.75391V7.73917H5.7326V13.2393C6.12986 13.3024 6.53625 13.3346 6.95025 13.3346C7.36426 13.3346 7.77065 13.3024 8.16791 13.2393V7.73917H9.98374Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1284_51895">
          <rect
            width="13.3333"
            height="13.3333"
            fill={fill}
            transform="translate(0.419922 0.333984)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export function LinkdeIn({ fill }: { fill: any }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <g clipPath="url(#clip0_1284_49430)">
        <path
          d="M15.0412 15.1783C15.0412 15.2069 15.0374 15.2355 15.0346 15.2736H12.0091V15.0716C12.0091 13.4781 12.0134 11.8846 12.0029 10.2911C12.0027 9.92873 11.9708 9.5671 11.9076 9.21031C11.7236 8.21294 11.0741 7.87604 10.1444 7.98373C9.29765 8.0838 8.83209 8.57891 8.70009 9.4948C8.6531 9.83014 8.62937 10.1683 8.62909 10.5069C8.62146 12.0294 8.62575 13.5515 8.62575 15.0735V15.3041H5.60886V5.56632H8.49375V6.87772C8.53426 6.85532 8.55332 6.85103 8.56047 6.83959C9.19663 5.81411 10.1483 5.36236 11.3243 5.32519C11.9957 5.3047 12.6524 5.38571 13.2719 5.67735C14.0701 6.05332 14.517 6.71331 14.7644 7.5358C14.9612 8.19102 15.0293 8.86531 15.0341 9.5434C15.0446 11.4204 15.0398 13.2994 15.0412 15.1783ZM0.672528 15.2975H3.68608V5.56203H0.672528V15.2975ZM2.16501 0.693359C1.70246 0.699465 1.26076 0.886768 0.934817 1.21503C0.608876 1.54328 0.424705 1.9863 0.421875 2.44888C0.421875 3.42052 1.22482 4.22537 2.18931 4.21965C3.1538 4.21393 3.93387 3.40956 3.92863 2.44221C3.92757 2.21169 3.88111 1.98364 3.7919 1.77109C3.70269 1.55853 3.57247 1.36563 3.4087 1.2034C3.24493 1.04118 3.0508 0.912804 2.8374 0.825617C2.62401 0.738429 2.39553 0.694135 2.16501 0.695264V0.693359Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1284_49430">
          <rect
            width="14.6198"
            height="14.6108"
            fill={fill}
            transform="translate(0.419922 0.695312)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Twitter({ fill }: { fill: any }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill={fill}
    >
      <path
        d="M8.64564 5.98229L13.6098 0.335938H12.4336L8.12128 5.23756L4.67954 0.335938H0.708984L5.91474 7.74872L0.708984 13.6693H1.88518L6.43631 8.49178L10.0718 13.6693H14.0423L8.64564 5.98229ZM7.03415 7.81379L6.50589 7.07519L2.30934 1.20358H4.11621L7.50396 5.94391L8.02999 6.68252L12.4331 12.8439H10.6262L7.03415 7.81379Z"
        fill={fill}
      />
    </svg>
  );
}

export function SharePin({ fill }: { fill: any }) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <g id="Group_2">
          <path
            id="Path"
            d="M15.9636 6.87169C17.3446 5.49069 19.5826 5.49069 20.9636 6.87169V6.87169C22.3446 8.25269 22.3446 10.4907 20.9636 11.8717L15.0846 17.7507C13.7036 19.1317 11.4656 19.1317 10.0846 17.7507V17.7507C8.70358 16.3697 8.70358 14.1317 10.0846 12.7507L10.9636 11.8717"
            stroke={fill}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Path_2"
            d="M8.03575 19.7995C6.65475 21.1805 4.41675 21.1805 3.03575 19.7995V19.7995C1.65475 18.4185 1.65475 16.1805 3.03575 14.7995L8.91475 8.92052C10.2958 7.53952 12.5338 7.53952 13.9148 8.92052V8.92052C15.2958 10.3015 15.2958 12.5395 13.9148 13.9205L12.9998 14.8355"
            stroke={fill}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}

export function LinkDinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <g clipPath="url(#clip0_1284_49430)">
        <path
          d="M15.0412 15.1783C15.0412 15.2069 15.0374 15.2355 15.0346 15.2736H12.0091V15.0716C12.0091 13.4781 12.0134 11.8846 12.0029 10.2911C12.0027 9.92873 11.9708 9.5671 11.9076 9.21031C11.7236 8.21294 11.0741 7.87604 10.1444 7.98373C9.29765 8.0838 8.83209 8.57891 8.70009 9.4948C8.6531 9.83014 8.62937 10.1683 8.62909 10.5069C8.62146 12.0294 8.62575 13.5515 8.62575 15.0735V15.3041H5.60886V5.56632H8.49375V6.87772C8.53426 6.85532 8.55332 6.85103 8.56047 6.83959C9.19663 5.81411 10.1483 5.36236 11.3243 5.32519C11.9957 5.3047 12.6524 5.38571 13.2719 5.67735C14.0701 6.05332 14.517 6.71331 14.7644 7.5358C14.9612 8.19102 15.0293 8.86531 15.0341 9.5434C15.0446 11.4204 15.0398 13.2994 15.0412 15.1783ZM0.672528 15.2975H3.68608V5.56203H0.672528V15.2975ZM2.16501 0.693359C1.70246 0.699465 1.26076 0.886768 0.934817 1.21503C0.608876 1.54328 0.424705 1.9863 0.421875 2.44888C0.421875 3.42052 1.22482 4.22537 2.18931 4.21965C3.1538 4.21393 3.93387 3.40956 3.92863 2.44221C3.92757 2.21169 3.88111 1.98364 3.7919 1.77109C3.70269 1.55853 3.57247 1.36563 3.4087 1.2034C3.24493 1.04118 3.0508 0.912804 2.8374 0.825617C2.62401 0.738429 2.39553 0.694135 2.16501 0.695264V0.693359Z"
          fill="#ACA7AA"
        />
      </g>
      <defs>
        <clipPath id="clip0_1284_49430">
          <rect
            width="14.6198"
            height="14.6108"
            fill="white"
            transform="translate(0.419922 0.695312)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Time() {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <g id="Group_2">
          <path
            id="Path"
            d="M8.55691 3.72639C13.1479 1.82439 18.4109 4.00539 20.3129 8.59639C22.2149 13.1874 20.0339 18.4504 15.4429 20.3524C10.8519 22.2544 5.58891 20.0734 3.68691 15.4824C1.78591 10.8914 3.96591 5.62839 8.55691 3.72639"
            stroke="#BF4D20"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Path_2"
            d="M11.7178 8.02344V12.6744L15.3738 14.9034"
            stroke="#BF4D20"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}

export function Envelope() {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <path
          id="Path"
          d="M21 9.53906L13.5736 12.7166C12.5686 13.1466 11.4314 13.1466 10.4264 12.7166L3 9.53906"
          stroke="#BF4D20"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <rect
          id="Rectangle"
          x="3"
          y="5.03906"
          width="18"
          height="15"
          rx="4"
          stroke="#BF4D20"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
}

export function LinereGion() {
  return (
    <svg
      width="121"
      height="5"
      viewBox="0 0 121 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M2.66485 3.33011C3.41419 3.82397 4.40941 4.09561 5.46786 4.09561C6.5263 4.09561 7.52152 3.82397 8.27086 3.33011L11.7085 1.06452C13.7715 -0.295155 17.1248 -0.295155 19.1878 1.06452L22.6559 3.35017C24.2014 4.36877 26.714 4.36877 28.2596 3.35017L31.7557 1.046C32.7556 0.386996 34.0834 0.024315 35.4954 0.024315C36.9074 0.024315 38.2352 0.386996 39.2351 1.046L42.6727 3.31159C43.422 3.80545 44.4173 4.07707 45.4757 4.07707C46.5341 4.07707 47.5294 3.80545 48.2787 3.31159L51.6882 1.06452C53.7512 -0.295155 57.1045 -0.295155 59.1676 1.06452L62.6052 3.33011C63.3545 3.82397 64.3498 4.09561 65.4082 4.09561C66.4666 4.09561 67.4619 3.82397 68.2112 3.33011L71.623 1.08149C73.6861 -0.278181 77.0394 -0.278181 79.1024 1.08149L82.5634 3.36253C83.3128 3.8564 84.308 4.12802 85.3664 4.12802C86.4249 4.12802 87.4201 3.8564 88.1695 3.36253L91.6398 1.07531C93.7029 -0.28436 97.0562 -0.28436 99.1192 1.07531L102.587 3.36099C104.133 4.37958 106.645 4.37958 108.191 3.36099L111.743 1.01975C113.806 -0.339918 117.16 -0.339918 119.223 1.01975L121 2.19113L120.061 2.81001L118.284 1.63863C117.534 1.14476 116.539 0.873145 115.481 0.873145C114.422 0.873145 113.427 1.14476 112.678 1.63863L109.125 3.97986C107.062 5.33953 103.709 5.33953 101.646 3.97986L98.1779 1.69419C96.6323 0.675591 94.1197 0.675591 92.5742 1.69419L89.1038 3.98139C88.0735 4.66045 86.7176 5 85.3641 5C84.0106 5 82.6548 4.66045 81.6244 3.98139L78.1634 1.70037C77.4141 1.2065 76.4188 0.934863 75.3627 0.934863C74.3066 0.934863 73.3091 1.2065 72.5597 1.70037L69.1479 3.94898C67.0848 5.30866 63.7315 5.30866 61.6685 3.94898L58.2309 1.68339C57.4816 1.18953 56.4863 0.917888 55.4279 0.917888C54.3694 0.917888 53.3742 1.18953 52.6249 1.68339L49.2154 3.93047C48.2155 4.58947 46.8877 4.95215 45.4757 4.95215C44.0637 4.95215 42.7359 4.58947 41.736 3.93047L38.2984 1.66487C36.7529 0.646276 34.2402 0.646276 32.6947 1.66487L29.1986 3.96905C27.1356 5.32872 23.7822 5.32872 21.7192 3.96905L18.2512 1.68339C17.5018 1.18953 16.5066 0.917888 15.4505 0.917888C14.3944 0.917888 13.3968 1.18953 12.6475 1.68339L9.20988 3.94898C7.14685 5.30866 3.79354 5.30866 1.73051 3.94898L0 2.80846L0.939019 2.18959L2.66953 3.33011H2.66485Z"
        fill="#BF4D20"
      />
    </svg>
  );
}

export function BuyCart() {
  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <path
          id="Path"
          d="M6 14.5625L3 0.5625H1"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Path_2"
          d="M6.25 14.5625H16.25"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle
          id="Oval"
          cx="16.25"
          cy="16.3125"
          r="1.75"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle
          id="Oval_2"
          cx="6.25"
          cy="16.3125"
          r="1.75"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Path_3"
          d="M3.64307 3.5625H17.9996C18.3103 3.5625 18.6033 3.70688 18.7926 3.95323C18.9819 4.19958 19.0459 4.51991 18.9659 4.82009L17.3664 10.8201C17.2497 11.2579 16.8533 11.5625 16.4002 11.5625H5.35737"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
}
