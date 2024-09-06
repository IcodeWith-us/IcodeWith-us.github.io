import React from "react";
type Props = {
    className: string;
}
function Circle1({className}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="792"
      height="771"
      fill="none"
      viewBox="0 0 792 771"
      className={className}
    >
      <g filter="url(#filter0_f_914_146)" opacity="0.1">
        <circle cx="296.5" cy="275.5" r="275.5" fill="#FA7515"></circle>
      </g>
      <defs>
        <filter
          id="filter0_f_914_146"
          width="991"
          height="991"
          x="-199"
          y="-220"
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
            result="effect1_foregroundBlur_914_146"
            stdDeviation="110"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Circle1;
