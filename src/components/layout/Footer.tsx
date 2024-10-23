import React from "react";
import Logo from "../icons/Logo";

type Props = {};
const company = ["About", "Who we are", "Careers", "Blog", "Contact Us"];
const products = ["UI Kits", "Mockups", "Icons", "Templates", "Vectors"];
const social = ["Behance", "Dribbble", "Facebook", "Instagram"];
const Footer = (props: Props) => {
  return (
    <footer
      className="bg-[linear-gradient(180deg,_#F9F4FF_100%,_rgba(255,_255,_255,_0)_-13.38%)] dark:bg-[linear-gradient(180deg,_rgba(249,_244,_255,_0.1)_100%,_rgba(255,_255,_255,_0)_-13.38%)] pt-16 mt-24"
    >
      <div className="mx-container">
        <div className=" sm:justify-between-flex-row md:justify-between-flex-row lg:justify-between-flex space-y-12 sm:space-y-12 md:space-y-12 lg:space-y-0 xl:space-y-0 items-center">
          <h5 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 3xl:text-4xl font-semibold max-w-[498px] ">
            Let&apos;s start something completely new together
          </h5>
          <button className="px-16 py-4 bg-primary text-white rounded-md transform transition-transform hover:scale-105 duration-300 hover:shadow-lg ">
            Contact me
          </button>
        </div>
        <hr className="border-[1px] border-[#E4E4E4] my-20" />
        <div className="sm:grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 space-y-14 sm:space-y-14 md:space-y-14 lg:space-y-0 xl:space-y-0 ">
          <div className="space-y-10 basis-1/2">
            <Logo className="w-40" />
            <p className="text-2xl tracking-tighter max-w-64">
              Ideate. design & iterate until satisfied.
            </p>
          </div>
          <div className="sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 space-y-12 sm:space-y-10 md:space-y-0 lg:space-y-0 xl:space-y-0">
            <div className="basis-1/3">
              <h6 className="text-2xl font-bold">Company</h6>
              <ul className="mt-5 space-y-5">
                {company.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-lg hover:text-newGrey transition-colors duration-100 ">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="basis-1/3">
              <h6 className="text-2xl font-bold">Products</h6>
              <ul className="mt-5 space-y-5">
                {products.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-lg hover:text-newGrey transition-colors duration-100 ">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="basis-1/3 ">
              <h6 className="text-2xl font-bold">Social</h6>
              <ul className="mt-5 space-y-5">
                {social.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-lg hover:text-newGrey transition-colors duration-100 ">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1D2432] mt-32">
        <div className="mx-container py-6 justify-between-flex">
          <p className="text-white text-lg">© 2024 User Experience Design Resources.</p>
          {/* <div className="centered-flex gap-10">
            <a href="#" className="text-white hover:text-newGrey transition-colors duration-100">
              Term of Use
            </a>
            <a href="#" className="text-white hover:text-newGrey transition-colors duration-100">
              Privacy Policy
            </a>
            <a href="#" className="text-white hover:text-newGrey transition-colors duration-100">
              Cardholder Agreement
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;