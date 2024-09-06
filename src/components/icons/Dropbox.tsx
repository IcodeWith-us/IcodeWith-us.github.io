import React from "react";
type Props = {
  className?: string;
};
function Dropbox({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="32"
      fill="none"
      viewBox="0 0 38 32"
      className={className}
    >
      <path
        fill="#0061FF"
        d="M19.024 6.013l-9.512 6.014 9.512 6.013-9.512 6.013L0 18.007l9.512-6.013L0 6.014 9.512 0l9.512 6.013zm-9.56 19.974l9.511-6.013 9.512 6.013L18.975 32l-9.512-6.013zm9.56-7.98l9.513-6.013-9.512-5.98L28.487 0 38 6.013l-9.512 6.013L38 18.04l-9.512 6.013-9.463-6.046z"
      ></path>
    </svg>
  );
}

export default Dropbox;
