import type { Benefit } from "@/lib/landing-data";

export function BenefitCard({
  benefit,
  index,
}: {
  benefit: Benefit;
  index: number;
}) {
  return (
    <article className="reveal rounded-lg border border-forest/10 bg-white/38 p-6 shadow-soft backdrop-blur-sm">
      <h3 className="mt-5 text-xl font-semibold text-forest">
        {benefit.label}
      </h3>
      <p className="mt-3 text-sm leading-7 text-forest/68">{benefit.detail}</p>
    </article>
  );
}
