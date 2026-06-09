import { Section } from "@/components/landing/Section";

const rows = [
  {
    dimension: "Setup time",
    diy: "9–14 months sourcing, equipment, hiring",
    ours: "6–10 weeks, kick-off call to delivered pallet",
  },
  {
    dimension: "Capital outlay",
    diy: "₹40L+ on roasters, packing lines, warehouse",
    ours: "Zero. You pay per pack, not for the factory",
  },
  {
    dimension: "Sourcing risk",
    diy: "Negotiating with 50+ smallholder farms",
    ours: "Inherited from day one. 5 years of relationships",
  },
  {
    dimension: "Compliance",
    diy: "FSSAI filings, lab tests, export docs from scratch",
    ours: "Certified, audited, documented — included",
  },
  {
    dimension: "Quality control",
    diy: "Hire QA team, write SOPs, train operators",
    ours: "Every batch lab-tested, traceable to the pond",
  },
  {
    dimension: "Minimum viable launch",
    diy: "10,000+ units to justify a production run",
    ours: "500 units on stock packaging, 2,000 fully custom",
  },
];

export default function PrivateLabelComparison() {
  return (
    <Section tone="light" className="flex items-center py-28">
      <div className="absolute -right-32 top-10 h-104 w-104 rounded-[42%_58%_39%_61%] bg-moss/12 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-104 w-104 rounded-[58%_42%_61%_39%] bg-gold/12 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-earth">
            — The honest math
          </p>
          <h2 className="reveal mt-5 font-serif text-5xl font-semibold leading-[0.95] text-forest md:text-6xl">
            Build it yourself, or build with us.
          </h2>
          <p className="reveal mt-6 text-base leading-8 text-forest/68">
            You could spend a year and a factory&apos;s worth of capital to
            stand up your own line. Or you could be on shelves in eight weeks.
          </p>
        </div>

        {/* Comparison */}
        <div className="reveal mt-16 overflow-hidden rounded-3xl border border-forest/10 bg-white/55 shadow-soft backdrop-blur-sm">
          {/* Header */}
          <div className="grid grid-cols-[1.1fr_1fr_1fr] items-stretch border-b border-forest/12 bg-cream/70 md:grid-cols-[1.2fr_1fr_1fr]">
            <div className="px-5 py-5 md:px-8 md:py-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-forest/55">
                Dimension
              </p>
            </div>
            <div className="border-l border-forest/12 px-5 py-5 md:px-8 md:py-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-forest/50">
                Doing it yourself
              </p>
              <p className="mt-1 font-serif text-lg font-semibold text-forest/65 md:text-xl">
                In-house build
              </p>
            </div>
            <div className="relative border-l border-forest/12 bg-forest px-5 py-5 text-cream md:px-8 md:py-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
                Recommended
              </p>
              <p className="mt-1 font-serif text-lg font-semibold md:text-xl">
                With Glen Harvest
              </p>
              <span className="absolute top-2 right-4 rounded-full bg-gold px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-forest">
                Faster · Cheaper
              </span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, index) => (
            <div
              key={row.dimension}
              className={`grid grid-cols-[1.1fr_1fr_1fr] items-stretch md:grid-cols-[1.2fr_1fr_1fr] ${
                index !== rows.length - 1 ? "border-b border-forest/10" : ""
              }`}
            >
              <div className="px-5 py-5 md:px-8 md:py-6">
                <p className="font-serif text-base font-semibold text-forest md:text-lg">
                  {row.dimension}
                </p>
              </div>
              <div className="border-l border-forest/10 px-5 py-5 md:px-8 md:py-6">
                <p className="flex items-start gap-3 text-sm leading-7 text-forest/60 md:text-base">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 inline-block h-3 w-3 shrink-0 rounded-full border-[1.5px] border-forest/35"
                  />
                  {row.diy}
                </p>
              </div>
              <div className="border-l border-forest/10 bg-forest/4 px-5 py-5 md:px-8 md:py-6">
                <p className="flex items-start gap-3 text-sm leading-7 text-forest/82 md:text-base">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mt-1 h-4 w-4 shrink-0 text-gold"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12l5 5L20 7"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {row.ours}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 flex flex-col items-center gap-4 text-center">
          <p className="max-w-xl text-sm leading-7 text-forest/65">
            We&apos;ll happily put you in touch with partners who use both
            models. The math usually answers itself.
          </p>
          <a
            href="#inquiry"
            className="rounded-full bg-forest px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-cream transition hover:bg-botanical"
          >
            Talk to a partnerships lead
          </a>
        </div>
      </div>
    </Section>
  );
}
