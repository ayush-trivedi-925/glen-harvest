"use client";
import { useInView } from "@/hooks/useInView";
import { ChevronDown } from "lucide-react";

function StoryHero() {
  const { ref, isInView } = useInView<HTMLElement>(0.05);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={ref}
      className="relative bg-brand-green min-h-screen flex items-center overflow-hidden mt-[-16] border-b border-white/10"
    >
      <div className="mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
          {/* Left - Number + Description */}
          <div
            className={`relative border-r border-white/10 pr-12 py-16 transition-all duration-1000 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Large Outlined Number */}
            <div className="flex items-baseline gap-0 mb-24">
              {/* Outlined O */}
              <span className="font-heading text-[180px] sm:text-[220px] md:text-[280px] font-light leading-none text-white/70 [-webkit-text-stroke:1.5px_rgba(255,255,255,0.15)] select-none">
                0
              </span>
              {/* Filled 1 */}
              <span className="font-heading text-[180px] sm:text-[220px] md:text-[280px] font-light leading-none text-white/75 select-none -ml-4">
                1
              </span>
            </div>

            {/* Description */}
            <p className="font-sans text-base md:text-lg text-white/60 leading-relaxed max-w-sm">
              Glen Harvest was born from a simple belief — that the best snacks
              come from nature, not a factory. We set out to bring Bihar&apos;s
              ancient superfood to modern tables, with nothing added and nothing
              to hide.
            </p>
          </div>

          {/* Right - Title + Arrow */}
          <div
            className={`pl-12 py-16 flex flex-col transition-all duration-1000 delay-300 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Divider Line */}
            <div className="w-full h-px bg-white/20 mb-16" />

            {/* Title */}
            <h1 className="font-heading text-7xl sm:text-8xl md:text-9xl font-semibold text-white leading-none tracking-tight">
              Our
              <br />
              Story
            </h1>

            {/* Scroll Down Arrow */}
            <button
              onClick={scrollToContent}
              className="mt-20 w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/50 transition-all duration-300 group animate-bounce"
              aria-label="Scroll down"
            >
              <svg
                width="20"
                height="24"
                viewBox="0 0 20 24"
                fill="none"
                className="group-hover:translate-y-1 transition-transform duration-300"
              >
                <path
                  d="M10 0 L10 20 M3 14 L10 22 L17 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default StoryHero;
