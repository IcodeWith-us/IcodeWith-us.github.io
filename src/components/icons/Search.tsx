import React from "react";
type Props = {
    className?: string;
}
function Search({className}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      className={className}
    >
      <path
        stroke="#99A4B8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9.584 17.5a7.917 7.917 0 100-15.833 7.917 7.917 0 000 15.833zM18.334 18.333l-1.667-1.666"
      ></path>
    </svg>
  );
}

export default Search;
