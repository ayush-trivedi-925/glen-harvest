"use client";

import { useInView } from "@/hooks/useInView";

const steps = [
  {
    number: "01",
    title: "Aquatic Farms",
    description: "Sourced from Bihar's pristine ponds",
  },
  {
    number: "02",
    title: "Hand Selected",
    description: "Every kernel inspected manually",
  },
  {
    number: "03",
    title: "Slow Roasted",
    description: "Never fried, always roasted",
  },
  {
    number: "04",
    title: "Sealed Fresh",
    description: "Packed to preserve peak nutrition",
  },
];

export default function PondToPacket() {
  const { ref, isInView } = useInView<HTMLElement>(0.05);

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: "#2A5640" }}
    >
      <div className="mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Content */}
          <div
            className={`transition-all duration-1000 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Eyebrow */}
            <p className="font-sans text-xs font-semibold tracking-[0.2em] text-brand-yellow uppercase mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-brand-yellow" />
              WHY TRUST US
            </p>

            {/* Heading */}
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
              Pond to Packet,
              <br />
              <span className="text-brand-yellow">No Shortcuts.</span>
            </h2>

            {/* Description */}
            <p className="font-sans text-base text-white/60 leading-relaxed max-w-md">
              Direct sourcing from Bihar&apos;s pristine aquatic farms.
              <br />
              We own every step — cleanest makhana, batch after batch.
            </p>
          </div>

          {/* Right - Timeline */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-2.75 top-4 bottom-4 w-px bg-brand-gold/40" />

              {/* Steps */}
              <div className="space-y-12">
                {steps.map((step, index) => (
                  <div
                    key={step.number}
                    className={`flex items-start gap-6 transition-all duration-700 ${
                      isInView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{
                      transitionDelay: isInView
                        ? `${500 + index * 200}ms`
                        : "0ms",
                    }}
                  >
                    {/* Dot + Number */}
                    <div className="flex items-center gap-3 shrink-0">
                      {/* Gold Dot */}
                      <div className="w-5.5 h-5.5 rounded-full bg-brand-yellow relative z-10" />
                      {/* Number */}
                      <span className="font-sans text-xs font-semibold text-brand-yellow tracking-wider">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="pt-0.5">
                      <h3 className="font-sans text-base font-bold text-white mb-1">
                        {step.title}
                      </h3>
                      <p className="font-sans text-sm text-white/50">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
