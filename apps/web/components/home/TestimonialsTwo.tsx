"use client";

import { useInView } from "@/hooks/useInView";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function TestimonialsTwo() {
  const { ref, isInView } = useInView<HTMLElement>(0.05);

  return (
    <section
      ref={ref}
      className="py-12 md:py-16 overflow-hidden bg-brand-green"
    >
      <div className="mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 text-center">
        {/* Large Quote Mark */}
        <div
          className={`transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="font-heading text-6xl md:text-7xl text-brand-gold leading-none">
            <Image
              src={"/images/svgs/quotes-svgrepo-com.svg"}
              alt="Testimonials"
              className="object-cover"
              width={120}
              height={120}
            />
          </span>
        </div>

        {/* Eyebrow */}
        <p
          className={`font-sans text-xs font-semibold tracking-[0.25em] text-white/50 uppercase mb-10 transition-all duration-1000 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          LOVED BY OUR COMMUNITY
        </p>

        {/* Quote */}
        <blockquote
          className={`max-w-3xl mx-auto mb-10 transition-all duration-1000 delay-400 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-heading text-2xl sm:text-3xl md:text-4xl font-medium text-white leading-[1.4] tracking-tight">
            &ldquo;Glen Harvest has completely redefined my snacking habits. The
            crunch is unmatched and knowing it&apos;s organic makes every bite
            better.&rdquo;
          </p>
        </blockquote>

        {/* Customer Name */}
        <p
          className={`font-sans text-sm text-white/60 mb-8 transition-all duration-1000 delay-600 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          — Sarah J., Mindful Snacker
        </p>

        {/* Stars */}
        <div
          className={`flex items-center justify-center gap-1.5 transition-all duration-1000 delay-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} size={20} className="text-brand-yellow" />
          ))}
        </div>
      </div>
    </section>
  );
}
