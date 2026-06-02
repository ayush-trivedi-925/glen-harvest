"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";

export default function Hero() {
  const { ref, isInView } = useInView<HTMLElement>(0.05);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: "#2A5640" }}
    >
      {/* Large Background Arc Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-19%] w-225 h-225 md:w-400 md:h-400 rounded-full bg-[#2E945C26]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-19%] w-225 h-225 md:w-275 md:h-275 rounded-full bg-[#D1EDD933]" />

      {/* Left Product Image - Peri Peri */}
      <div
        className={`absolute left-0 bottom-0 w-62.5 sm:w-75 md:w-95 lg:w-105 z-10 transition-all duration-1000 delay-500 ${
          isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
        }`}
      >
        <div className="rotate-6">
          <Image
            src="/images/products/peri-peri.png"
            alt="Glen Harvest Makhana - Peri Peri"
            width={500}
            height={625}
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Right Product Image - Mint Masti */}
      <div
        className={`absolute right-0 bottom-0 w-62.5 sm:w-75 md:w-95 lg:w-105 z-10 transition-all duration-1000 delay-700 ${
          isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
      >
        <div className="-rotate-6">
          <Image
            src="/images/products/mint-masti.png"
            alt="Glen Harvest Makhana - Mint Masti"
            width={500}
            height={625}
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Center Content */}
      <div className="relative z-20 text-center px-6 pt-24 pb-16">
        {/* Badge */}
        <div
          className={`mb-8 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span
            className="inline-block px-6 py-2.5 rounded-full text-xs font-semibold tracking-[0.15em] text-brand-cream"
            style={{ backgroundColor: "#1A3328" }}
          >
            FOR THE MINDFUL SNACKER
          </span>
        </div>

        {/* Heading */}
        <h1
          className={`font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-brand-cream leading-[1.05] tracking-tight mb-8 transition-all duration-1000 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Pure Nature,
          <br />
          Crafted for You
        </h1>

        {/* Subtitle */}
        <p
          className={`font-sans text-sm md:text-base text-white/70 leading-relaxed max-w-md mx-auto mb-10 transition-all duration-1000 delay-400 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          We craft slow-roasted, premium fox nuts
          <br />
          for those who refuse to compromise on taste or health.
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-600 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-8 py-3 bg-brand-cream text-brand-green-dark text-sm font-semibold rounded-full hover:bg-white transition-colors duration-200"
          >
            Explore Flavors
          </Link>
          <Link
            href="/our-story"
            className="inline-flex items-center justify-center px-8 py-3 border border-brand-cream/40 text-brand-cream text-sm font-semibold rounded-full hover:border-brand-cream hover:bg-brand-cream/10 transition-all duration-200"
          >
            Our Story
          </Link>
        </div>

        {/* Scroll to Explore */}
        <p
          className={`font-sans text-[11px] font-medium tracking-[0.25em] text-white/40 uppercase transition-all duration-1000 delay-800 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          SCROLL TO EXPLORE
        </p>
      </div>
    </section>
  );
}
