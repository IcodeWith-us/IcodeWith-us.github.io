"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import AdobeXd from "../icons/AdobeXd";
import Figma from "../icons/Figma";
import In from "../icons/In";
import MainCategory from "../icons/MainCategory";
import Sketch from "../icons/Sketch";
type Props = {};
const productProperties = [
  "21 Responsive pages",
  "Editable UI components",
  "Ready to Use in Your Web, Mobile and Print Projects",
  "SEO-friendly design",
  "Breakpoints for tablets and phones",
  "Google fonts",
  "File size: 718 Mb",
];
const ProjectDescription = (props: Props) => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);  
  return (
    <section ref={sectionRef} className="mx-container relative">
      <div className="pt-44 flex gap-x-9">
        <div className="basis-2/3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2.5">
              <MainCategory />
              <p className="text-lg">Main category web projects</p>
            </div>
            <div className="flex items-center gap-x-4">
              <p className="text-base font-light">Compatible With</p>
              <div className="flex items-center gap-x-2">
                <Sketch className="w-6 h-6" />
                <Figma className="w-6 h-6" />
                <AdobeXd className="w-6 h-6" />
                <In className="w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="mt-14">
            <h3 className="text-5xl tracking-tighter font-semibold">
              Responsive ottonova - Working on the future of health insurance
            </h3>
            <p className="mt-4 text-lg font-light">
              21 Responsive pages for car rental and auto dealership websites.
              All the graphics resources you need for a truly streamlined design
              process.
            </p>
          </div>
          <Image
            ref={imageRef}
            src="/LandingPage.png"
            alt="Product Image"
            width={816}
            height={2726}
            className="mt-28 h-auto shadow-[0px_6px_45px_-2px_#1018280D] object-cover p-0 w-full"
          />
        </div>
        <div
          ref={divRef}
          className="basis-1/3 p-10 border border-[#848E9820] shadow-[0px_10px_16px_-4px_#10182814] fixed right-0 z-40 3xl:right-[calc(50%-920px)]"
        >
          <h4 className="text-4xl font-medium">Product include:</h4>
          <ul className="mt-5 space-y-1 list-disc">
            {productProperties.map((property, index) => (
              <li key={index} className="text-[#757575] text-lg">
                {property}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-secondary text-3xl tracking-wider ">
            $40 <span className="text-[#757575] line-through">5,999</span>
          </p>
          <button className="bg-primary py-3.5 text-lg rounded-md text-white mt-5 w-full">
            Add to Cart
          </button>
          <button className="py-3.5 text-lg rounded-md mt-5 w-full border-[1.5px] border-black dark:border-white">
            Preview
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;
