import Image from "next/image";
import { Section } from "@/components/landing/Section";
import OrganicDecor from "@/components/shared/OrganicDecor";

const process = [
  {
    step: "01",
    title: "Source",
    body: "Aquatic farms in Bihar's lowlands, where makhana has been harvested for centuries.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
  },
  {
    step: "02",
    title: "Hand-select",
    body: "Every kernel inspected by hand for size, color, and the right satisfying weight.",
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80",
  },
  {
    step: "03",
    title: "Slow roast",
    body: "Small-batch roasting at controlled temperatures. Never fried, never rushed.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    step: "04",
    title: "Season & seal",
    body: "Tossed with clean seasonings and sealed fresh to preserve the just-roasted aroma.",
    image:
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=800&q=80",
  },
];

export default function AboutProcess() {
  return (
    <Section tone="light" className="flex items-center py-28">
      <OrganicDecor variant="care" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-earth">
            — How we do it
          </p>
          <h2 className="reveal mt-5 font-serif text-5xl font-semibold leading-[0.95] text-forest md:text-7xl">
            From pond to packet, one batch at a time.
          </h2>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {process.map((item, index) => (
            <article
              key={item.step}
              className={`reveal group relative overflow-hidden rounded-2xl bg-white/40 shadow-soft backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:shadow-premium ${
                index % 2 === 1 ? "sm:translate-y-12" : ""
              }`}
            >
              <div className="relative aspect-[5/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-cream/90 px-3 py-1 font-serif text-xl font-semibold text-forest backdrop-blur-sm">
                  {item.step}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-forest">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-forest/66">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
