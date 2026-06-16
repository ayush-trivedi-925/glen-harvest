import { flavors } from "@/lib/landing-data";
import { FlavorGrid } from "./FlavorGrid";
import { perks } from "./flavorPerks";
import { Section } from "./Section";

export function FlavorsSection() {
  return (
    <Section id="products" tone="warm" className="py-28">
      <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-[#eaf0df] to-transparent" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8">
        {/* Header — title left, perks right */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-earth">
              Current flavors
            </p>
            <h2 className="reveal mt-4 font-serif text-5xl font-semibold leading-[0.95] text-forest md:text-6xl">
              A flavor for every kind of crunch.
            </h2>
            <p className="reveal mt-5 max-w-xl text-base leading-8 text-forest/65">
              From cooling Mint Masti to slow-building Peri Peri — seven honest
              roasts, every one high-protein and airy-light.
            </p>
          </div>

          <div className="reveal flex flex-wrap gap-x-8 gap-y-4">
            {perks.map((perk) => (
              <div key={perk.label} className="flex items-center gap-2.5">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${perk.color}1f`, color: perk.color }}
                >
                  {perk.icon}
                </span>
                <span className="text-sm font-medium text-forest/75">
                  {perk.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mt-10 h-px w-full bg-forest/12" />

        <FlavorGrid flavors={flavors} />
      </div>
    </Section>
  );
}
