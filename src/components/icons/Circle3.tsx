import React from "react";

type Props = {};

const Circle3 = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="823"
      height="823"
      fill="none"
      viewBox="0 0 823 823"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <g filter="url(#filter0_f_831_386)" opacity="0.8">
        <circle cx="411.5" cy="411.5" r="111.5" fill="#F7D2A1"></circle>
      </g>
      <defs>
        <filter
          id="filter0_f_831_386"
          width="823"
          height="823"
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
            result="effect1_foregroundBlur_831_386"
            stdDeviation="150"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};

export default Circle3;
