import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  image: string;
  alt: string;
  title: string;
  price: number;
  category: string;
  width: number;
  height: number;
  imageClass?: React.ComponentProps<'div'>['className'];
};

const ProductCard = ({
  image,
  alt,
  title,
  price,
  category,
  width,
  height,
  imageClass,
}: Props) => {
  return (
    <Link
      className="space-y-4 max-w-[360px] group cursor-pointer"
      href={`/${title}`}
    >
      <Image
        src={image}
        alt={alt}
        width={width}
        height={height}
        className={imageClass || "w-auto"}
      />
      <div>
        <p className="text-lightGrey uppercase text-sm font-medium 3xl:text-base">
          {category}
        </p>
        <p className="text-2xl font-medium tracking-tight line-clamp-2 3xl:text-[28px]">
          {title}
        </p>
      </div>
      <p className="text-secondary text-xl font-medium tracking-tight opacity-100 group-hover:opacity-0 transition-opacity duration-300 3xl:text-2xl">
        $ {price}
      </p>
      <div className="h-7 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-11 border border-lightGrey flex items-center px-5 max-w-fit">
        <p className="text-secondary text-sm font-medium tracking-tight">
          $ {price}
        </p>
        <div className="h-full w-[1px] bg-lightGrey mx-5" />
        <p className="text-secondary text-sm font-light tracking-tight">
          ADD TO CART
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
