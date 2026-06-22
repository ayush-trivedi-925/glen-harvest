import Image from "next/image";
import { Section } from "@/components/landing/Section";

const options = [
  {
    label: "Pack format",
    detail: "Pouches, tins, glass jars, gable boxes, multi-packs.",
  },
  {
    label: "Pack size",
    detail: "15 g sachets to 250 g family packs. Single-serve to gift-grade.",
  },
  {
    label: "Flavor profile",
    detail:
      "Classic salt, masala, peri peri, mint, dark chocolate — or custom.",
  },
  {
    label: "Ingredient list",
    detail: "Clean-label, vegan, no-oil, low-sodium, ghee-roasted — your call.",
  },
  {
    label: "Packaging design",
    detail:
      "Use your artwork, or co-design with our studio. Print-ready or full service.",
  },
  {
    label: "Certifications",
    detail:
      "FSSAI standard. Organic, gluten-free, kosher and export docs on request.",
  },
];

export default function PrivateLabelCustomize() {
  return (
    <Section tone="green" className="flex items-center py-28">
      <div className="absolute -right-40 top-0 h-112 w-md rounded-[42%_58%_39%_61%] bg-gold/12 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-104 w-104 rounded-[58%_42%_61%_39%] bg-moss/14 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
          {/* Left - Visual */}
          <div className="reveal relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="parallax-slow relative aspect-3/4 overflow-hidden rounded-2xl shadow-premium">
                <Image
                  src="/images/plant-images/plant-image-4.png"
                  alt="Glen Harvest roasting and processing line"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="relative aspect-square overflow-hidden rounded-2xl shadow-premium">
                  <Image
                    src="/images/plant-images/plant-image-1.png"
                    alt="Glen Harvest production facility"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-5/6 overflow-hidden rounded-2xl shadow-premium">
                  <Image
                    src="/images/plant-images/plant-image-5.png"
                    alt="Stainless-steel processing equipment at Glen Harvest"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating "fully custom" chip */}
            <div className="absolute -bottom-5 left-6 rounded-full border border-forest/10 bg-cream/95 px-5 py-3 shadow-premium backdrop-blur-sm">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
                <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
                Fully customizable
              </p>
            </div>
          </div>

          {/* Right - Options list */}
          <div>
            <p className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              — What you can shape
            </p>
            <h2 className="reveal mt-5 font-serif text-5xl font-semibold leading-[0.95] text-forest md:text-6xl">
              Six dials, infinite combinations.
            </h2>
            <p className="reveal mt-6 max-w-lg text-base leading-8 text-forest/68">
              Pick and mix. Tell us your brand&apos;s ambition and we&apos;ll
              configure the line — from format to finish — to match it.
            </p>

            <ul className="mt-10 divide-y divide-forest/12 border-y border-forest/12">
              {options.map((o, index) => (
                <li
                  key={o.label}
                  className="reveal flex items-start gap-5 py-5"
                >
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-forest">
                      {o.label}
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-forest/65 md:text-base">
                      {o.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
