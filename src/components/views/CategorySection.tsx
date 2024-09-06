import Image from "next/image";
import React from "react";
import Sketch from "../icons/Sketch";
import Figma from "../icons/Figma";
import Webflow from "../icons/Webflow";
import AdobeXd from "../icons/AdobeXd";
import Illustrator from "../icons/Illustrator";
import Photoshop from "../icons/Photoshop";
import AfterEffects from "../icons/AfterEffects";
import In from "../icons/In";
import Bitmap from "../icons/Bitmap";
import Slack from "../icons/Slack";
import Zeplin from "../icons/Zeplin";
import Dropbox from "../icons/Dropbox";
import ProductCard from "../ProductCard";
type Props = {};

const categories = [
  {
    title: "Mobile UI Kits",
    products: [
      {
        image: "/mobile.png",
        title: "VIDA App - Remote access to your scooter",
        category: "APP DESIGN",
        price: 100,
      },
      {
        image: "/mobile.png",
        title: "VIDA App - Remote access to your scooter",
        category: "APP DESIGN",
        price: 100,
      },
      {
        image: "/mobile.png",
        title: "VIDA App - Remote access to your scooter",
        category: "APP DESIGN",
        price: 100,
      },
      {
        image: "/mobile.png",
        title: "VIDA App - Remote access to your scooter",
        category: "APP DESIGN",
        price: 100,
      },
      {
        image: "/mobile.png",
        title: "VIDA App - Remote access to your scooter",
        category: "APP DESIGN",
        price: 100,
      },
      {
        image: "/mobile.png",
        title: "VIDA App - Remote access to your scooter",
        category: "APP DESIGN",
        price: 100,
      },
    ],
  },
  {
    title: "Icons",
    products: [
      {
        image: "/icons.png",
        title: "Outline - 81 mini Essential Icons outline",
        category: "ICON",
        price: 24.5,
      },
      {
        image: "/icons.png",
        title: "Outline - 81 mini Essential Icons outline",
        category: "ICON",
        price: 100,
      },
      {
        image: "/icons.png",
        title: "Outline - 81 mini Essential Icons outline",
        category: "ICON",
        price: 100,
      },
      {
        image: "/icons.png",
        title: "Outline - 81 mini Essential Icons outline",
        category: "ICON",
        price: 100,
      },
      {
        image: "/icons.png",
        title: "Outline - 81 mini Essential Icons outline",
        category: "ICON",
        price: 100,
      },
      {
        image: "/icons.png",
        title: "Outline - 81 mini Essential Icons outline",
        category: "ICON",
        price: 100,
      },
    ],
  },
  {
    title: "UI Kits",
    products: [
      {
        image: "/ui-kit.png",
        title: "ottonova - Working on the health insurance",
        category: "WEB DESIGN",
        price: 34.5,
      },
      {
        image: "/ui-kit.png",
        title: "ottonova - Working on the health insurance",
        category: "WEB DESIGN",
        price: 34.5,
      },
      {
        image: "/ui-kit.png",
        title: "ottonova - Working on the health insurance",
        category: "WEB DESIGN",
        price: 34.5,
      },
      {
        image: "/ui-kit.png",
        title: "ottonova - Working on the health insurance",
        category: "WEB DESIGN",
        price: 34.5,
      },
      {
        image: "/ui-kit.png",
        title: "ottonova - Working on the health insurance",
        category: "WEB DESIGN",
        price: 34.5,
      },
    ],
  },
];
const categoryIcons = [
  Sketch,
  Figma,
  Webflow,
  AdobeXd,
  Illustrator,
  Photoshop,
  AfterEffects,
  In,
  Bitmap,
  Slack,
  Zeplin,
  Dropbox,
];
const CategorySection = (props: Props) => {
  return (
    <section className="mt-24 space-y-16">
      {categories.map((category, index) => (
        <div key={index} className="mx-container">
          <div className="flex gap-5">
            <h3 className="text-2xl font-medium tracking-tighter">
              {category.title}
            </h3>
            <button className="text-base tracking-tight px-5 py-1 bg-primary/10 text-primary rounded-md">
              View All
            </button>
          </div>
          <div className="flex gap-5 3xl:gap-10 mt-5 max-w-fit overflow-x-auto">
            {category.products.map(
              ({ title, image, category, price }, index) => (
                <ProductCard
                  key={index}
                  image={image}
                  alt={title}
                  title={title}
                  category={category}
                  price={price}
                  width={274}
                  height={200}
                  imageClass="3xl:min-w-96"
                />
              )
            )}
          </div>
        </div>
      ))}
      <div className="mt-24 space-y-10">
        <h6 className="text-2xl tracking-tighter text-center">
          Browse by category:
        </h6>
        <div className="flex items-center gap-14 mx-auto max-w-fit">
          {categoryIcons.map((Icon, index) => (
            <Icon key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
