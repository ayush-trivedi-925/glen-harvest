"use client";

import { useInView } from "@/hooks/useInView";
import { Award, Palette, Package, Headphones } from "lucide-react";
const benefits = [
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "FSSAI-certified facility, rigorous quality checks, and the same standards we hold our own brand to. Your customers get the best, every time.",
  },
  {
    icon: Palette,
    title: "Full Customization",
    description:
      "Choose your flavours, packaging design, pack sizes, and labels. We make your vision come to life — exactly the way you want it.",
  },
  {
    icon: Package,
    title: "Flexible MOQs",
    description:
      "Whether you're starting small or scaling fast, our minimum order quantities work for businesses of all sizes. Grow at your pace.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "A dedicated account manager guides you from sample to shipment. Quick responses, clear communication, zero confusion.",
  },
];

function WhiteLableBenefits() {
  const { ref, isInView } = useInView<HTMLElement>(0.05);
  return (
    <section
      ref={ref}
      className="bg-brand-warm/40 py-24 md:py-32 overflow-hidden"
    >
      <div className="mx-auto px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <h2
            className={`font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-brand-text leading-[1.1] tracking-tight mb-6 transition-all duration-100- ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Why partner with Glen Harvest?
          </h2>
          <p
            className={`text-base md:text-lg text-brand-muted leading-relaxed transition-all duration-1000 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            We&apos;ve built our reputation on consistency, quality, and trust —
            the same things we bring to every private label partnership.
          </p>
        </div>
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className={`flex gap-6 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{
                  transitionDelay: isInView ? `${300 + index * 150}ms` : "0ms",
                }}
              >
                {/* Icon */}
                <div className="shrink-0 w-14 h-14 rounded-full bg-brand-green/10 flex items-center justify-center">
                  <Icon size={24} className="text-brand-green" />
                </div>
                {/* Content */}
                <div className="pt-1">
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-brand-text mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-base text-brand-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhiteLableBenefits;
