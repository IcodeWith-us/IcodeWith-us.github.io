import React from "react";
type Props = {
    className?: string;
    };
function Sketch({className}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="40"
      fill="none"
      viewBox="0 0 45 40"
      className={className}
    >
      <g clipPath="url(#clip0_831_542)">
        <path
          fill="#FDB300"
          d="M9.61 1.307L22.026 0l12.413 1.307 9.61 12.851-22.024 25.546L0 14.158l9.61-12.85z"
        ></path>
        <path
          fill="#EA6C00"
          d="M8.921 14.158l13.104 25.547L0 14.158h8.921z"
        ></path>
        <path
          fill="#EA6C00"
          d="M35.128 14.158L22.024 39.705 44.05 14.158h-8.921z"
        ></path>
        <path
          fill="#FDAD00"
          d="M8.92 14.158h26.208L22.024 39.705 8.921 14.158z"
        ></path>
        <path
          fill="#FDD231"
          d="M22.024 0L9.611 1.307l-.69 12.851L22.024 0zM22.024 0l12.414 1.307.69 12.851L22.024 0z"
        ></path>
        <path
          fill="#FDAD00"
          d="M44.049 14.158l-9.61-12.85.689 12.85h8.92zM0 14.158l9.61-12.85-.689 12.85H0z"
        ></path>
        <path fill="#FEEEB7" d="M22.024 0L8.921 14.158h26.207L22.024 0z"></path>
      </g>
      <defs>
        <clipPath id="clip0_831_542">
          <path fill="#fff" d="M0 0H44.138V40H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Sketch;
