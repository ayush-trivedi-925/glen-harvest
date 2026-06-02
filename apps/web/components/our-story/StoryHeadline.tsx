"use client";

import { useInView } from "@/hooks/useInView";

const stats = [
  "Sourced directly from Bihar's wetlands",
  "Supporting 100+ local farming families",
  "Zero preservatives, zero additives",
  "Delivering freshness across India",
];

function StoryHeadline() {
  const { ref, isInView } = useInView<HTMLElement>(0.1);
  return (
    <section
      ref={ref}
      className="bg-brand-green py-24 md:py-32 overflow-hidden border-b border-white/10"
    >
      <div className="mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-32">
        {/* Big Headline */}
        <h2
          className={`font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white leading-[1.1] tracking-tight mb-20 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Eat Pure. <br />
          Live Better.
        </h2>
        {/* Two Column - Description + Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left - Description */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-base md:text-lg text-white leading-relaxed">
              {" "}
              India grows over 90% of the world&apos;s makhana, yet most of it
              is exported or processed beyond recognition. We started Glen
              Harvest to change that — to bring the purest form of this
              incredible superfood directly to Indian households. No long supply
              chains, no artificial anything. Just honest food from people who
              care.
            </p>
          </div>
          {/* Right - Stats */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={stat}
                className="py-4 border-b border-white/15"
                style={{
                  animationDelay: `${600 + index * 150}ms`,
                }}
              >
                <p className="font-heading text-lg md:text-xl font-medium text-white">
                  {stat}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StoryHeadline;
