import React from "react";
type Props = {
  className?: string;
};
function Icon({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="40"
      fill="none"
      viewBox="0 0 27 40"
      className={className}
    >
      <path
        fill="#0ACF83"
        d="M6.667 40a6.669 6.669 0 006.666-6.667v-6.666H6.667A6.67 6.67 0 000 33.332 6.669 6.669 0 006.667 40z"
      ></path>
      <path
        fill="#A259FF"
        d="M0 20a6.67 6.67 0 016.667-6.666h6.666v13.333H6.667A6.669 6.669 0 010 20z"
      ></path>
      <path
        fill="#F24E1E"
        d="M0 6.667A6.67 6.67 0 016.667 0h6.666v13.333H6.667A6.67 6.67 0 010 6.667z"
      ></path>
      <path
        fill="#FF7262"
        d="M13.333 0H20a6.669 6.669 0 016.666 6.667A6.669 6.669 0 0120 13.333h-6.667V0z"
      ></path>
      <path
        fill="#1ABCFE"
        d="M26.666 20A6.669 6.669 0 0120 26.667 6.67 6.67 0 0113.333 20 6.67 6.67 0 0120 13.334 6.67 6.67 0 0126.666 20z"
      ></path>
    </svg>
  );
}

export default Icon;
