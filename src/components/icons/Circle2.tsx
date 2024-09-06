import React from "react";

type Props = {
    className: string
};

const Circle2 = ({className}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="691"
      height="885"
      fill="none"
      viewBox="0 0 691 885"
      className={className}
    >
      <g filter="url(#filter0_f_914_145)">
        <circle
          cx="442.5"
          cy="442.5"
          r="262.5"
          fill="#E2F8F0"
          fillOpacity="0.5"
        ></circle>
      </g>
      <defs>
        <filter
          id="filter0_f_914_145"
          width="885"
          height="885"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_914_145"
            stdDeviation="90"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};

export default Circle2;
