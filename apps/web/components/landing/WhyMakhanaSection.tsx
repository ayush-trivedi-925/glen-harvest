import { benefits } from "@/lib/landing-data";
import { BenefitCard } from "./BenifitCard";
import { OrganicDecor } from "./OrganicDecor";
import { Section } from "./Section";

export function WhyMakhanaSection() {
  return (
    <Section id="about" tone="green" className="flex items-center py-28">
      <OrganicDecor variant="quiet" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-6 md:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div>
          <p className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            Why makhana
          </p>
          <h2 className="reveal mt-5 font-serif text-6xl font-semibold leading-[0.92] text-forest md:text-8xl">
            Light by nature. Rich by tradition.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.label} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
