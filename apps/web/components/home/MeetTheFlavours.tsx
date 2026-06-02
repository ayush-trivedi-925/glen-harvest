"use client";

import { useInView } from "@/hooks/useInView";

export default function MeetTheFlavors() {
  const { ref, isInView } = useInView<HTMLElement>(0.05);

  return (
    <section
      ref={ref}
      className="py-16 md:py-20 overflow-hidden"
      style={{ backgroundColor: "#2A5640" }}
    >
      <div className="mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 text-center">
        {/* Eyebrow */}
        <p
          className={`font-sans text-xs font-semibold tracking-[0.25em] text-white/50 uppercase mb-6 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          TWO SIGNATURES. ONE STANDARD.
        </p>

        {/* Heading */}
        <h2
          className={`font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-brand-cream leading-[1.1] tracking-tight mb-4 transition-all duration-1000 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Meet the Flavors
        </h2>

        {/* Description */}
        <p
          className={`font-sans text-sm md:text-base text-white/60 leading-relaxed transition-all duration-1000 delay-400 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Each variant tells its own story. Both deliver the same uncompromising
          quality.
        </p>
      </div>
    </section>
  );
}
