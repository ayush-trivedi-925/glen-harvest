"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const badges = [
  { label: "Gluten Free", filled: true },
  { label: "High Protein", filled: false },
  { label: "Zero Preservatives", filled: false },
];

export default function WhyChoose() {
  const { ref, isInView } = useInView<HTMLElement>(0.05);

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: "#F6EFE5" }}
    >
      <div className="mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div
            className={`transition-all duration-1000 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Heading */}
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-brand-green-dark leading-[1.1] tracking-tight mb-8">
              Premium
              <br />
              Makhana, Zero
              <br />
              Compromise
            </h2>

            {/* Description */}
            <p className="font-sans text-base md:text-lg text-brand-muted leading-relaxed max-w-md mb-8">
              We turn Bihar&apos;s finest aquatic fox nuts into an extraordinary
              snacking experience. Every kernel is hand-selected, slow-roasted —
              never fried — and sealed to preserve peak nutrition and crunch.
            </p>

            {/* Badges */}
            <div
              className={`flex flex-wrap gap-3 transition-all duration-1000 delay-300 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                    badge.filled
                      ? "bg-brand-green text-brand-cream"
                      : "border border-brand-text/30 text-brand-text"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {badge.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Product Images */}
          <div
            className={`relative h-100 md:h-130 transition-all duration-1000 delay-200 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Peri Peri - Front */}
            <div className="absolute left-[38%] top-[12%] w-[58%] z-20 rotate-[-10deg]">
              <Image
                src="/images/products/peri-peri.png"
                alt="Glen Harvest Makhana - Peri Peri"
                width={400}
                height={500}
                className="object-contain drop-shadow-2xl"
              />
            </div>
            {/* Mint Masti - Left tilted */}
            <div className="absolute left-[0%] top-[8%] w-[55%] z-10 rotate-16">
              <Image
                src="/images/products/mint-masti.png"
                alt="Glen Harvest Makhana - Mint Masti"
                width={400}
                height={500}
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
