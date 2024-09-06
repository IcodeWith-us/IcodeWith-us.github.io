import React from "react";
type Props = {
  className?: string;
};
function Logo({className}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="118"
      // height="38"
      fill="none"
      viewBox="0 0 118 38"
      className={className}
    >
      <path
        fill="#FF664F"
        d="M19.861 0h18.127v37.902H19.861V0zM40.049 0h16.479l21.423 37.902H61.47L40.05 0zM.087 0h18.127v37.902C8.203 37.902.087 29.786.087 19.775V0zM80.01 37.902V19.775h37.903c0 10.011-8.116 18.127-18.127 18.127H80.01zM80.01 0v18.127h37.903C117.913 8.116 109.797 0 99.786 0H80.01z"
      ></path>
      <path
        fill="#FF664F"
        fillRule="evenodd"
        d="M50.761 18.949l8.243-14.583 8.24 14.577-8.242 14.583-8.24-14.577zm-.946 1.674L40.05 37.902h16.479l1.527-2.702-8.24-14.577zM77.951 0l-9.76 17.268-8.24-14.577L61.47 0h16.48z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Logo;
