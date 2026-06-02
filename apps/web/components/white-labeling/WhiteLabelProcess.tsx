"use client";
import { useInView } from "@/hooks/useInView";

const processSteps = [
  {
    number: "01",
    title: "Inquiry",
    description:
      "Share your requirements through our form below — products, quantities, timeline, and any custom needs.",
  },
  {
    number: "02",
    title: "Consultation",
    description:
      "Our team reaches out within 48 hours to discuss your vision, suggest options, and provide a detailed quote.",
  },
  {
    number: "03",
    title: "Sampling",
    description:
      "We send you samples of your chosen products in custom packaging for approval before bulk production.",
  },
  {
    number: "04",
    title: "Production & Delivery",
    description:
      "Once approved, we manufacture, pack, and deliver your order on schedule — ready to hit the shelves.",
  },
];

function WhiteLabelProcess() {
  const { ref, isInView } = useInView<HTMLElement>(0.05);
  return (
    <section
      ref={ref}
      id="how-it-works"
      className="bg-brand-green py-24 md:py-32 overflow-hidden"
    >
      <div className="mx-auto px-6 sm:px-8 lg:px-16 xl:px-2 2xl:px-32">
        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <p
            className={`font-sans text-sm font-semibold text-white/60 uppercase tracking-[0.2em] mb-6 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            How It Works
          </p>
          <h2
            className={`font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-[1.1] tracking-tight transition-all duration-1000 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Form inquiry to shelf, in four steps.
          </h2>
        </div>
        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`relative transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{
                transitionDelay: isInView ? `${300 + index * 150}ms` : "0ms",
              }}
            >
              {/* Connector Line (desktop only, expect last) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+30px)] right-0 h-px bg-white/15" />
              )}

              {/* Step Number Circle */}
              <div className="relative w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mb-6">
                <span className="font-heading text-base font-semibold text-white">
                  {step.number}
                </span>
              </div>
              {/* Title */}
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              {/* Description */}
              <p className="font-sans text-sm text-white/60 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhiteLabelProcess;
