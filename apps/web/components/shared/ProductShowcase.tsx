"use client";

import { useInView } from "@/hooks/useInView";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import Productcard from "../ui/Productcard";

const products = [
  {
    name: "Classic Roasted Makhana",
    price: 199,
    image:
      "https://fastly.picsum.photos/id/556/600/750.jpg?hmac=xp_Fq1Lx_jTKPQqecGHpzzETzFSZBlddYAjGGSOsWqI",
    slug: "classic-roasted",
  },
  {
    name: "Peri Peri Makhana",
    price: 249,
    image:
      "https://fastly.picsum.photos/id/1065/600/750.jpg?hmac=5xxp10OOzQUHYnCDHCUUQtQYCyK2ltKkPMXGGOwwi-I",
    slug: "peri-peri",
  },
  {
    name: "Cheese & Herbs Makhana",
    price: 249,
    image:
      "https://fastly.picsum.photos/id/931/600/750.jpg?hmac=Oi0OdeM1G1aKROMEmSxViDIglU7dSXlXa6pVZMP-bRk",
    slug: "cheese-herbs",
  },
  {
    name: "Mint Makhana",
    price: 229,
    image:
      "https://fastly.picsum.photos/id/588/600/750.jpg?hmac=EWgRwGmEIqvzgepuJAc_21GGhJFLYXzZo-HFrHG7_Ec",
    slug: "mint",
  },
  {
    name: "Premium Gift Box",
    price: 999,
    image:
      "https://fastly.picsum.photos/id/296/600/750.jpg?hmac=RCTUCRJpqUSgDgzSdjJTwgEBMNaV-MzuYnrg-HCalvA",
    slug: "gift-box",
  },
];

type ProductShowcaseProps = {
  title?: string;
  description?: string;
};

function ProductShowcase({
  title = "Our Bestsellers",
  description = "From classic roasted to bold flavoured — our most loved makhana, handpicked by thousands of happy snackers.",
}: ProductShowcaseProps) {
  const { ref, isInView } = useInView<HTMLElement>(0.05);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 500;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={ref}
      className="bg-brand-cream py-24 md:py-32 overflow-hidden"
    >
      <div className="mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-32">
        {/* Header Row */}
        <div
          className={`flex items-start justify-between mb-8 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-brand-text leading-[1.1] tracking-tight">
            {title}
          </h2>
          <div className="hidden lg:flex items-center gap-3 mt-2">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-brand-text/20 flex items-center justify-center text-brand-text hover:bg-brand-green hover:border-brand-green hover:text-white transition-all duration-200"
              aria-label="Scroll left"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-brand-text/20 flex items-center justify-center text-brand-text hover:bg-brand-green hover:border-brand-green hover:text-white transition-all duration-200"
              aria-label="Scroll right"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
        {/* Description + Shop Link */}
        <div
          className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 transition-all delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-base text-brand-muted leading-relaxed max-w-md">
            {description}
          </p>
          <a
            href="/shop"
            className="font-sans text-sm font-semibold text-brand-text uppercase tracking-wider border-b border-brand-text pb-0.5 hover:text-brand-green hover:border-brand-green transition-colors duration-200 shrink-0"
          >
            Shop The Range
          </a>
        </div>
        {/* Product Cards - Horizontal Scroll */}
        <div
          ref={scrollRef}
          className={`flex gap-8 overflow-x-auto pb-4 scrollbar-hide transition-all duration-1000 delay-400 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {products.map((product) => (
            <div key={product.slug} className="shrink-0 w-87.5 md:w-105">
              <Productcard
                name={product.name}
                price={product.price}
                image={product.image}
                slug={product.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;
