import { features } from "@/lib/landing-data";
import { FeatureCard } from "./FeatureCard";
import { OrganicDecor } from "./OrganicDecor";
import { Section } from "./Section";

export function CraftedSection() {
  return (
    <Section tone="light" className="flex items-center py-28">
      <OrganicDecor variant="care" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-14 px-6 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            Why choose us
          </p>
          <h2 className="reveal mt-5 font-serif text-6xl font-semibold leading-[0.92] text-forest md:text-8xl">
            Crafted With Care
          </h2>
          <p className="reveal mt-8 max-w-md text-base leading-8 text-forest/65">
            Every pack is designed to feel calm, considered, and deeply
            satisfying from first pour to final bite.
          </p>
        </div>
        <div className="grid gap-x-10 sm:grid-cols-2">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </Section>
  );
}
