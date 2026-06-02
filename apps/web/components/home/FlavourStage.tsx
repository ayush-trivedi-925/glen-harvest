"use client";

import { useState } from "react";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import { ArrowRight, Check, CircleCheck } from "lucide-react";

const flavors = [
  {
    id: "mint-masti",
    name: "Mint Masti",
    emoji: "🌿",
    tag: "REFRESHING",
    tagColor: "bg-brand-green",
    description:
      "A refreshing burst of mint on premium makhana — light, cool, and utterly addictive.",
    price: 99,
    image: "/images/products/mint-masti.png",
    circleBg: "bg-brand-green/10",
    circleOuter: "bg-[#2E945C0D]",
    circleMiddle: "bg-[#D1EDD9]",
    circleInner: "bg-[#2E945C1F]",
    theme: "#1A3C2E",
  },
  {
    id: "peri-peri",
    name: "Peri Peri",
    emoji: "🌶️",
    tag: "SPICY",
    tagColor: "bg-[#CC402E]",
    description:
      "A fiery kick of peri peri on premium makhana — bold, spicy, and impossible to put down.",
    price: 99,
    image: "/images/products/peri-peri.png",
    circleBg: "bg-red-600/10",
    circleOuter: "bg-[#94422E0D]",
    circleMiddle: "bg-[#EDDDD1]",
    circleInner: "bg-[#942E2E1F]",
    theme: "#CC402E",
  },
];

const benefitsBar = [
  "Gluten Free",
  "High Protein",
  "Zero Additives",
  "Slow Roasted",
  "100% Organic",
  "Bihar Farms",
];

export default function FlavorStage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, isInView } = useInView<HTMLElement>(0.05);
  const active = flavors[activeIndex];

  return (
    <section ref={ref} style={{ backgroundColor: "#F6F3EB" }}>
      {/* Main Content */}
      <div className="py-16 md:py-24 overflow-hidden">
        <div className="mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left - Content */}
            <div
              className={`transition-all duration-1000 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Eyebrow */}
              <p className="font-sans text-xs font-semibold tracking-[0.2em] text-brand-yellow uppercase mb-4 flex items-center gap-2">
                <span className="w-4 h-px bg-brand-yellow" />
                SIGNATURE FLAVORS
              </p>

              {/* Heading */}
              <h2 className="font-heading text-6xl sm:text-7xl md:text-8xl font-bold text-brand-green-dark-figma leading-none tracking-tight mb-8">
                Flavor
                <br />
                Stage.
              </h2>

              {/* Subtitle */}
              <p className="font-sans text-base text-brand-muted leading-relaxed mb-8">
                Two bold expressions.
                <br />
                One obsessive standard.
              </p>

              {/* Tab Switcher */}
              <div className="inline-flex items-center bg-brand-warm/80 rounded-full p-1 mb-8">
                {flavors.map((flavor, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <button
                      key={flavor.id}
                      onClick={() => setActiveIndex(index)}
                      style={{
                        backgroundColor: isActive
                          ? flavor.theme
                          : "transparent",
                        color: isActive ? "#ffffff" : "",
                      }}
                      className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        !isActive
                          ? "text-brand-text hover:text-brand-green-dark"
                          : ""
                      }`}
                    >
                      <span>{flavor.emoji}</span>
                      {flavor.name}
                    </button>
                  );
                })}
              </div>

              {/* Tag */}
              <div className="mb-4">
                <span
                  key={`tag-${activeIndex}`}
                  className={`inline-block px-4 py-1.5 ${active?.tagColor} text-white text-[11px] font-bold tracking-[0.15em] rounded-full animate-fade-in`}
                >
                  {active?.tag}
                </span>
              </div>

              {/* Product Name */}
              <h3
                key={`name-${activeIndex}`}
                className="font-heading text-4xl md:text-5xl font-bold text-brand-green-dark-figma mb-4 animate-fade-in"
              >
                {active?.name}
              </h3>

              {/* Description */}
              <p
                key={`desc-${activeIndex}`}
                className="font-sans text-base text-brand-muted leading-relaxed max-w-md mb-10 animate-fade-in"
              >
                {active?.description}
              </p>

              {/* Price + Add to Cart */}
              <div className="flex items-center gap-6">
                <span className="font-heading text-4xl md:text-5xl font-bold text-brand-green-dark-figma pb-2">
                  ₹{active?.price}
                </span>
                <button
                  className={`inline-flex items-center gap-2 px-8 py-3.5 ${active?.tagColor} text-white text-sm font-semibold rounded-full hover:bg-brand-text transition-colors duration-300`}
                >
                  Add to Cart
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right - Product Image */}
            <div
              className={`relative flex items-center justify-center min-h-125 transition-all duration-1000 delay-200 ${
                isInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              {/* Large Outer Circle Ring */}
              <div
                className={`absolute w-125 h-125 md:w-250 md:h-250 rounded-full ${active?.circleOuter}`}
              />

              {/* Inner Filled Circle - Larger */}
              <div
                key={`circle-outer-${activeIndex}`}
                className={`absolute w-87.5 h-87.5 md:w-105 md:h-105 rounded-full animate-fade-in ${active?.circleMiddle}`}
              />

              {/* Inner Filled Circle - Smaller */}
              <div
                key={`circle-inner-${activeIndex}`}
                className={`absolute w-87.5 h-87.5 md:w-80 md:h-80 rounded-full animate-fade-in ${active?.circleInner}`}
              />
              {/* Product Image - Tilted */}
              <div
                key={`img-${activeIndex}`}
                className="relative z-10 w-70 md:w-87.5 -rotate-6 animate-fade-in"
              >
                <Image
                  src={active?.image || ""}
                  alt={active?.name || ""}
                  width={400}
                  height={500}
                  className="object-contain drop-shadow-2xl"
                />
              </div>

              {/* Floating Badges */}
              <div className="absolute top-8 right-0 md:right-8 z-20">
                <span className="inline-flex items-center px-4 py-2 bg-white rounded-full text-xs font-medium text-brand-text shadow-sm border border-brand-text/10">
                  High Protein
                </span>
              </div>
              <div className="absolute top-1/4 left-0 md:left-8 z-20">
                <span className="inline-flex items-center px-4 py-2 bg-white rounded-full text-xs font-medium text-brand-text shadow-sm border border-brand-text/10">
                  Gluten Free
                </span>
              </div>
              <div className="absolute bottom-16 right-0 md:right-4 z-20">
                <span className="inline-flex items-center px-4 py-2 bg-white rounded-full text-xs font-medium text-brand-text shadow-sm border border-brand-text/10">
                  0 Additives
                </span>
              </div>

              {/* Decorative Dots */}
              <div className="absolute top-1/4 left-1/4 w-2.5 h-2.5 rounded-full bg-brand-green" />
              <div className="absolute top-12 right-1/4 w-3 h-3 rounded-full bg-brand-gold" />
              <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-brand-gold/50" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Benefits Bar */}
      <div
        className={`py-4 mx-6 sm:mx-8 lg:mx-16 xl:mx-24 2xl:mx-32 rounded-full mb-8 `}
        style={{ backgroundColor: active?.theme }}
      >
        <div className="flex items-center justify-between px-8 overflow-x-auto scrollbar-hide gap-6">
          {benefitsBar.map((benefit) => (
            <div key={benefit} className="flex items-center gap-2 shrink-0">
              <CircleCheck size={18} className="text-white/60" />
              <span className="font-sans text-xs md:text-sm text-white/80 whitespace-nowrap">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
