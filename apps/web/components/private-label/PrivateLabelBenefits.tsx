import { Section } from "@/components/landing/Section";
import OrganicDecor from "@/components/shared/OrganicDecor";

const benefits = [
  {
    label: "Your brand, our craft",
    detail:
      "Premium makhana made to your specs. Custom flavors, packaging, and pack sizes designed around your brand.",
  },
  {
    label: "Single-origin sourcing",
    detail:
      "Same Bihar farms we use for our own line. No compromise on quality, even at scale.",
  },
  {
    label: "Flexible MOQs",
    detail:
      "Start small, scale up. Our minimum order quantities are designed for growing brands, not just giants.",
  },
  {
    label: "End-to-end support",
    detail:
      "From flavor development to compliance to delivery. We handle the production so you can focus on your customers.",
  },
  {
    label: "Quick turnaround",
    detail:
      "Most orders shipped within 3-5 weeks from final approval. Faster on repeat orders.",
  },
  {
    label: "Quality you can stand behind",
    detail:
      "FSSAI certified, lab-tested batches, and full traceability documentation with every shipment.",
  },
];

export default function PrivateLabelBenefits() {
  return (
    <Section tone="light" className="flex items-center py-28">
      <OrganicDecor variant="care" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-earth">
            — Why partner with us
          </p>
          <h2 className="reveal mt-5 font-serif text-5xl font-semibold leading-[0.95] text-forest md:text-7xl">
            Built for brands who care.
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.label}
              className="reveal group rounded-2xl border border-forest/10 bg-white/40 p-7 shadow-soft backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:shadow-premium"
            >
              <span className="font-serif text-4xl font-semibold text-gold">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-forest">
                {benefit.label}
              </h3>
              <p className="mt-3 text-sm leading-7 text-forest/66">
                {benefit.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
