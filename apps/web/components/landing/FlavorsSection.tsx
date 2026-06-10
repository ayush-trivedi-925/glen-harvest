import { flavors } from "@/lib/landing-data";
import { FlavorCarousel } from "./FlavorCarousel";
import { Section } from "./Section";

export function FlavorsSection() {
  return (
    <Section id="products" tone="warm" className="flex items-center py-28">
      <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-[#eaf0df] to-transparent" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-earth">
            Current flavors
          </p>
          <h2 className="reveal mt-5 font-serif text-6xl font-semibold leading-none text-forest md:text-8xl">
            A flavor for every kind of crunch.
          </h2>
        </div>
        <FlavorCarousel flavors={flavors} />
      </div>
    </Section>
  );
}
