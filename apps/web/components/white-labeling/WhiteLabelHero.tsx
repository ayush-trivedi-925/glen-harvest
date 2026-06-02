"use client";

import { useInView } from "@/hooks/useInView";

function WhiteLabelHero() {
  const { ref, isInView } = useInView<HTMLElement>(0.05);
  const scrollToForm = () => {
    document
      .getElementById("inquiry-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHowItWorks = () => {
    document
      .getElementById("how-it-works")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section
      ref={ref}
      className="bg-brand-cream pt-16 md:pt-24 pb-20 md:pb-28 overflow-hidden"
    >
      <div className="mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-32">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p
            className={`font-sans text-sm font-semibold text-brand-green uppercase tracking-[0.2em] mb-6 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Private Label & Bulk Orders
          </p>
          {/* Headline */}
          <h1
            className={`font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-brand-text leading-[1.05] tracking-tight mb-8 transition-all duration-1000 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Build Your Brand <br />
            With <span className="text-brand-green">Us</span>{" "}
          </h1>
          {/* Description */}
          <p
            className={`font-sans text-base md:text-lg text-brand-muted leading-relaxed max-w-2xl mb-10 transition-all duration-1000 delay-400 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Glen Harvest manufactures premium makhana for retailers, gifting
            companies, hotels, and emerging D2C brands across India. Whether
            you&apos;re launching your own snack line or stocking shelves with
            quality private label products — we make it simple, scalable, and
            beautifully crafted.
          </p>
          {/* CTA */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-brand-green bg-brand-green text-white text-sm font-medium rounded-full hover:bg-transparent hover:text-brand-green transition-all duration-300 shadow-md hover:shadow-none"
            >
              {" "}
              Start Your Inquiry
            </button>
            <a
              onClick={scrollToHowItWorks}
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-brand-text/20 bg-transparent text-brand-text text-sm font-medium rounded-full hover:border-brand-text transition-all duration-300"
            >
              How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhiteLabelHero;
