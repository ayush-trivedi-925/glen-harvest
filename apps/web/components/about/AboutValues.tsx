import { Section } from "@/components/landing/Section";

const values = [
  {
    label: "Premium harvests",
    detail:
      "We source makhana from Bihar's finest growing regions, selecting only the highest-quality harvests for every batch.",
  },
  {
    label: "Careful selection",
    detail:
      "Every kernel is chosen for its size, texture, and consistency, ensuring a superior snacking experience.",
  },
  {
    label: "Pure ingredients",
    detail:
      "No artificial flavors, preservatives, or unnecessary additives—just quality ingredients that complement the natural goodness of makhana.",
  },
  {
    label: "Exceptional quality",
    detail:
      "From sourcing to packaging, every step is designed to preserve freshness, flavor, and the premium standards Glen Harvest stands for.",
  },
];

export default function AboutValues() {
  return (
    <Section tone="deep" className="flex items-center py-28">
      <div className="absolute left-1/2 top-16 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-cream/5 blur-3xl" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <p className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              — What we stand for
            </p>
            <h2 className="reveal mt-5 font-serif text-5xl font-semibold leading-[0.95] text-cream md:text-7xl">
              Four ideas guide every pack.
            </h2>
          </div>
          <p className="reveal max-w-md text-base leading-8 text-cream/65">
            These aren&apos;t just words on a wall. They&apos;re the standards
            we hold ourselves to with every harvest, every roast, every pack we
            send out into the world.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {values.map((value, index) => (
            <article
              key={value.label}
              className="reveal group relative overflow-hidden rounded-2xl border border-cream/15 bg-cream/[0.06] p-8 text-cream shadow-soft backdrop-blur-md transition duration-500 hover:border-cream/30 hover:bg-cream/[0.10]"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="mt-5 font-serif text-2xl font-semibold">
                    {value.label}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-cream/72">
                    {value.detail}
                  </p>
                </div>
              </div>
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-12 translate-x-12 rounded-full bg-gold/10 blur-2xl transition duration-500 group-hover:scale-125" />
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
