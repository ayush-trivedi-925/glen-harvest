import { Section } from "@/components/landing/Section";

const audiences = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M3 21V8l9-5 9 5v13M3 21h18M9 21v-6h6v6M7 11h.01M12 11h.01M17 11h.01"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Hotels & hospitality",
    body: "Branded room amenities, in-flight snacks, club-lounge pairings. Premium presentation, consistent supply.",
    examples: ["Room minibar", "Lounge bowls", "Welcome amenity"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M3 9l1-5h16l1 5M3 9v11h18V9M3 9h18M9 13h6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Retail & house labels",
    body: "Launch a private label SKU under your store brand. We handle the production; you keep the shelf and the margin.",
    examples: ["Grocers", "Specialty shops", "House labels"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16zM3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Corporate & gifting",
    body: "Diwali boxes, employee onboarding kits, premium client gifts. Considered design, ready-to-gift presentation.",
    examples: ["Festive hampers", "Onboarding kits", "Client gifts"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M20 7h-3l-2-2H9L7 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM12 17a4 4 0 100-8 4 4 0 000 8z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Wellness & D2C",
    body: "Add a hero snack SKU to your wellness range or D2C lineup. Clean labels, lab-tested, story-rich.",
    examples: ["Wellness brands", "Subscription boxes", "D2C startups"],
  },
];

export default function PrivateLabelAudience() {
  return (
    <Section tone="cream" className="flex items-center py-28">
      <div className="absolute -left-40 top-10 h-112 w-md rounded-[58%_42%_61%_39%] bg-moss/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-104 w-104 rounded-[42%_58%_39%_61%] bg-gold/12 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <p className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              — Who it&apos;s for
            </p>
            <h2 className="reveal mt-5 font-serif text-5xl font-semibold leading-[0.95] text-forest md:text-6xl">
              Built for the brands you&apos;d want next to yours.
            </h2>
          </div>
          <p className="reveal max-w-md text-base leading-8 text-forest/68 lg:justify-self-end">
            We don&apos;t take every project — we take the ones where care and
            craft actually matter. Here are the partners we&apos;re built for.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {audiences.map((a, index) => (
            <article
              key={a.title}
              className={`reveal group relative overflow-hidden rounded-2xl border border-forest/10 bg-white/55 p-7 shadow-soft backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-forest/20 hover:shadow-premium md:p-9 ${
                index % 2 === 1 ? "sm:translate-y-10" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-forest/8 text-forest transition group-hover:bg-gold/20 group-hover:text-forest">
                  {a.icon}
                </span>
                <span className="font-serif text-3xl font-semibold text-gold/55">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 font-serif text-2xl font-semibold text-forest md:text-3xl">
                {a.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-forest/68 md:text-base md:leading-8">
                {a.body}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {a.examples.map((ex) => (
                  <li
                    key={ex}
                    className="rounded-full border border-forest/15 bg-cream/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-forest/65"
                  >
                    {ex}
                  </li>
                ))}
              </ul>

              <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-gold/10 blur-2xl transition duration-500 group-hover:scale-125 group-hover:bg-gold/20" />
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
