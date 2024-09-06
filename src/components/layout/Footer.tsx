import React from "react";
import Logo from "../icons/Logo";

type Props = {};
const company = ["About", "Who we are", "Careers", "Blog", "Contact Us"];
const products = ["UI Kits", "Mockups", "Icons", "Templates", "Vectors"];
const social = ["Facebook", "Instagram", "Twitter", "Pinterest", "Linkedin"];
const Footer = (props: Props) => {
  return (
    <footer
      className="bg-[linear-gradient(180deg,_#F9F4FF_100%,_rgba(255,_255,_255,_0)_-13.38%)] dark:bg-[linear-gradient(180deg,_rgba(249,_244,_255,_0.1)_100%,_rgba(255,_255,_255,_0)_-13.38%)] pt-16 mt-24"
    >
      <div className="mx-container">
        <div className="justify-between-flex">
          <h5 className="text-4xl font-semibold max-w-[498px]">
            Let&apos;s start something completely new together
          </h5>
          <button className="px-16 py-4 bg-primary text-white rounded-md">
            Contact me
          </button>
        </div>
        <hr className="border-[1px] border-[#E4E4E4] my-16" />
        <div className="flex">
          <div className="space-y-10 basis-1/2">
            <Logo className="w-40" />
            <p className="text-2xl tracking-tighter max-w-64">
              Ideate. design & iterate until satisfield.
            </p>
          </div>
          <div className="flex basis-3/4">
            <div className="basis-1/3">
              <h6 className="text-2xl font-bold">Company</h6>
              <ul className="mt-5 space-y-5">
                {company.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-lg">
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
                    <a href="#" className="text-lg">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="basis-1/3">
              <h6 className="text-2xl font-bold">Social</h6>
              <ul className="mt-5 space-y-5">
                {social.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-lg">
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
        <div className="mx-container py-8 justify-between-flex">
          <p className="text-white text-lg">© 2020 UXD Stocks.</p>
          <div className="centered-flex gap-10">
            <a href="#" className="text-white">
              Term of Use
            </a>
            <a href="#" className="text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-white">
              Cardholder Agreement
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
