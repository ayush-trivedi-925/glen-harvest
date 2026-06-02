"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ProductCardProps = {
  name: string;
  price: number;
  image: string;
  slug: string;
};

function Productcard({ name, price, image, slug }: ProductCardProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  return (
    <div className="flex flex-col">
      {/* Image */}
      <Link
        href={`/shop/${slug}`}
        className="relative aspect-4/5 overflow-hidden rounded-lg group"
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>
      {/* Product Info */}
      <div className="pt-4">
        <h3 className="font-heading text-lg md:text-xl font-semibold text-brand-text">
          {name}
        </h3>
        <p className="text-base text-brand-muted mt-1">₹{price}</p>
      </div>
      {/* Quantity + Add to Cart */}
      <div className="flex items-stretch mt-4 border border-brand-text/20 rounded-md overflow-hidden">
        {/* Quantity Selector */}
        <div className="flex items-center border-r border-brand-text/20">
          <button
            onClick={decrement}
            className="px-3 py-2.5 text-brand-text hover:bg-brand-warm transition-colors duration-200 font-sans text-base"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="px-3 py-2.5 font-sans text-sm text-brand-text min-w-8 text-center">
            {quantity}
          </span>
          <button
            onClick={increment}
            className="px-3 py-2.5 text-brand-text hover:bg-brand-warm transition-colors duration-200 font-sans text-base"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        {/* Add to Cart */}
        <button className="flex-1 px-6 py-2.5 font-sans text-sm font-medium text-brand-text hover:bg-brand-warm transition-colors duration-200 text-center">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Productcard;
