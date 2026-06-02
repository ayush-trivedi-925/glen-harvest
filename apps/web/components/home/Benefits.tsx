"use client";

import { useInView } from "@/hooks/useInView";
import { Wheat, Dumbbell, Zap, Leaf } from "lucide-react";

const benefits = [
  {
    icon: Wheat,
    title: "Gluten Free",
    description: "Safe for all dietary needs. Naturally free from gluten.",
  },
  {
    icon: Dumbbell,
    title: "High Protein",
    description: "More protein per gram than most conventional snacks.",
  },
  {
    icon: Zap,
    title: "Boosts Energy",
    description: "Natural complex carbs that fuel your day without a crash.",
  },
  {
    icon: Leaf,
    title: "Rich in Nutrients",
    description: "Packed with calcium, magnesium, and antioxidants.",
  },
];

export default function Benefits() {
  const { ref, isInView } = useInView<HTMLElement>(0.05);

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: "#F6EFE5" }}
    >
      <div className="mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-32">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            className={`font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-brand-text leading-[1.1] tracking-tight mb-4 transition-all duration-1000 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Wholesome Benefits
          </h2>
          <p
            className={`font-sans text-sm md:text-base text-brand-muted leading-relaxed transition-all duration-1000 delay-200 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Every batch is crafted to deliver maximum nutrition, exceptional
            crunch, and zero compromise.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className={`bg-white rounded-2xl p-8 flex flex-col transition-all duration-700 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isInView ? `${300 + index * 150}ms` : "0ms",
                }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center mb-6">
                  <Icon size={22} className="text-brand-green-dark" />
                </div>

                {/* Title */}
                <h3 className="font-sans text-lg font-bold text-brand-text mb-2">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-brand-muted leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
