"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";

export default function CTA() {
  const { ref, isInView } = useInView<HTMLElement>(0.05);

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: "#2A5640" }}
    >
      <div className="mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 text-center">
        {/* Heading */}
        <h2
          className={`font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-brand-cream leading-[1.1] tracking-tight mb-6 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Ready to Elevate Your Snacking?
        </h2>

        {/* Subtitle */}
        <p
          className={`font-sans text-sm md:text-base text-white/60 leading-relaxed mb-10 transition-all duration-1000 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Join thousands of others who have switched to guilt-free, premium
          makhana.
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-400 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-8 py-3 bg-brand-cream text-brand-green-dark text-sm font-semibold rounded-full hover:bg-white transition-colors duration-200"
          >
            Shop the Flavours
          </Link>
          <Link
            href="/white-labeling"
            className="inline-flex items-center justify-center px-8 py-3 border border-brand-cream/40 text-brand-cream text-sm font-semibold rounded-full hover:border-brand-cream hover:bg-brand-cream/10 transition-all duration-200"
          >
            Wholesale Inquiries
          </Link>
        </div>
      </div>
    </section>
  );
}
