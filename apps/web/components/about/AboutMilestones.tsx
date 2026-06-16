import { Section } from "@/components/landing/Section";

const milestones = [
  {
    year: "2021",
    title: "A pond, a pan, an idea",
    body: "Two siblings, one borrowed kitchen in Patna, and a stubborn belief that snacking could feel quieter.",
  },
  {
    year: "2022",
    title: "First fifty farms",
    body: "Partnered with smallholder makhana growers across Madhubani and Darbhanga — fair price, full traceability.",
  },
  {
    year: "2023",
    title: "The roast room",
    body: "Built our own small-batch roastery. Same iron-pan principle, scaled with care, never sacrificed for speed.",
  },
  {
    year: "2024",
    title: "Into thoughtful pantries",
    body: "Landed on shelves in 200+ independent grocers and tea rooms across India, UK, and the UAE.",
  },
  {
    year: "2026",
    title: "Still small. Still slow.",
    body: "Six flavors, one promise: every pack tastes like it was made for someone, not for a market.",
  },
];

const stats = [
  { value: "50+", label: "Partner farms" },
  { value: "6", label: "Flavors crafted" },
  { value: "200+", label: "Stockists worldwide" },
  { value: "1.2M", label: "Packs roasted" },
];

export default function AboutMilestones() {
  return (
    <Section tone="cream" className="flex items-center py-28">
      <div className="absolute -right-32 top-12 h-96 w-96 rounded-[58%_42%_61%_39%] bg-moss/12 blur-3xl" />
      <div className="absolute -left-32 bottom-12 h-96 w-96 rounded-[42%_58%_39%_61%] bg-gold/12 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            — A short journey
          </p>
          <h2 className="reveal mt-5 font-serif text-5xl font-semibold leading-[0.95] text-forest md:text-6xl">
            Five years, one steady promise.
          </h2>
          <p className="reveal mt-6 text-base leading-8 text-forest/68">
            Every chapter of Glen Harvest has been written slowly, on purpose.
            Here&apos;s a quick look at where we&apos;ve been.
          </p>
        </div>

        {/* Timeline */}
        <ol className="relative mt-20">
          {/* Center spine */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-6 top-2 h-full w-px bg-gradient-to-b from-gold/0 via-gold/40 to-gold/0 md:left-1/2 md:-translate-x-1/2"
          />

          {milestones.map((m, index) => {
            const isRight = index % 2 === 1;
            return (
              <li
                key={m.year}
                className="reveal relative mb-12 grid grid-cols-[3rem_1fr] gap-6 md:mb-16 md:grid-cols-2 md:gap-12"
              >
                {/* Year + node */}
                <div
                  className={`relative flex md:justify-end ${
                    isRight ? "md:order-2" : ""
                  }`}
                >
                  <div
                    className={`flex w-full max-w-xs items-center gap-4 ${
                      isRight ? "" : "md:flex-row-reverse md:text-right"
                    } md:flex-row`}
                  >
                    <span className="font-serif text-4xl font-semibold text-forest md:text-5xl">
                      {m.year}
                    </span>
                  </div>
                  {/* Node dot */}
                  <span
                    aria-hidden="true"
                    className="absolute left-6 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_0_6px_rgba(212,168,83,0.18)] md:left-auto md:right-[-2.85rem] md:top-4"
                    style={{
                      ...(isRight
                        ? { right: "auto", left: "-2.85rem" }
                        : {}),
                    }}
                  />
                </div>

                {/* Body card */}
                <div className="rounded-2xl border border-forest/10 bg-white/55 p-6 shadow-soft backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:shadow-premium md:p-7">
                  <h3 className="font-serif text-2xl font-semibold text-forest">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-forest/68 md:text-base md:leading-8">
                    {m.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Stats strip */}
        <div className="reveal mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-forest/10 bg-forest/10 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-cream/95 p-6 text-center md:p-8"
            >
              <p className="font-serif text-4xl font-semibold text-forest md:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-forest/55">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
