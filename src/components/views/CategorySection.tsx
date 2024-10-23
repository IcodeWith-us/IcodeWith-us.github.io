
import Image from "next/image";
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
        image: "/Mask2 group (1).png",
        title: "VIDA App - Remote access to your scooter",
        category: "APP DESIGN",
        price: 100,
      },
      {
        image: "/Go JEK.png",
        title: "VIDA App - Remote access to your scooter",
        category: "APP DESIGN",
        price: 100,
      },
      {
        image: "/Mask2 group (1).png",
        title: "VIDA App - Remote access to your scooter",
        category: "APP DESIGN",
        price: 100,
      },
      {
        image: "/Mask3 group (1).png",
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
        image: "/APP VPN.png",
        title: "Outline - 81 mini Essential Icons outline",
        category: "ICON",
        price: 24.5,
      },
      {
        image: "/Luefty.png",
        title: "Outline - 81 mini Essential Icons outline",
        category: "ICON",
        price: 100,
      },
      {
        image: "/Three.png",
        title: "Outline - 81 mini Essential Icons outline",
        category: "ICON",
        price: 100,
      },
      {
        image: "/web and tablet.png",
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
        image: "/Tab.png",
        title: "ottonova - Working on the health insurance",
        category: "WEB DESIGN",
        price: 34.5,
      },
      {
        image: "/tab2.png",
        title: "ottonova - Working on the health insurance",
        category: "WEB DESIGN",
        price: 34.5,
      },
      {
        image: "/tab3.png",
        title: "ottonova - Working on the health insurance",
        category: "WEB DESIGN",
        price: 34.5,
      },
      {
        image: "/Tab.png",
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
          <div className="flex gap-5 justify-between sm:justify-between md:justify-between lg:justify-start xl:justify-start 2xl:flex 3xl:flex pl-0 pr-0 3xl:pl-36">
            <h3 className="text-2xl font-medium tracking-tighter">
              {category.title}
            </h3>
            <button className="text-base tracking-tight px-5 py-1 bg-primary/10 text-primary rounded-md transform transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:text-lightGrey">
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 3xl:gap-10 mt-5 max-w-fit overflow-x-auto justify-center mx-auto">
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
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 xl:grid-cols-12 items-center gap-14 mx-auto max-w-fit">
          {categoryIcons.map((Icon, index) => (
            <Icon key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
