import { Section } from "@/components/landing/Section";

const partners = [
  { name: "Taj Voyages", style: "font-serif italic text-2xl md:text-3xl" },
  {
    name: "OBEROI",
    style:
      "font-sans text-base font-semibold tracking-[0.32em] md:text-lg",
  },
  {
    name: "Foodhall",
    style: "font-serif text-2xl md:text-3xl",
  },
  {
    name: "NATURE'S BASKET",
    style:
      "font-sans text-[11px] font-bold tracking-[0.38em] md:text-xs",
  },
  {
    name: "soulful",
    style: "font-serif italic text-2xl md:text-3xl",
  },
  {
    name: "GODREJ",
    style:
      "font-sans text-base font-semibold tracking-[0.3em] md:text-lg",
  },
  {
    name: "Le Pain Quotidien",
    style: "font-serif text-xl md:text-2xl",
  },
];

export default function PrivateLabelTrustedBy() {
  return (
    <section className="relative overflow-hidden border-y border-forest/10 bg-cream py-14">
      <div className="noise-overlay absolute inset-0 opacity-60" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="reveal text-[10px] font-semibold uppercase tracking-[0.36em] text-gold">
            — Trusted by
          </p>
          <p className="reveal font-serif text-2xl text-forest md:text-3xl">
            40+ hospitality, retail &amp; wellness brands roast with us.
          </p>
        </div>

        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-forest/55 md:gap-x-16">
          {partners.map((p) => (
            <span key={p.name} className={p.style}>
              {p.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
