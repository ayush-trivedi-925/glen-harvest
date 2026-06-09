import { Section } from "@/components/landing/Section";
import OrganicDecor from "@/components/shared/OrganicDecor";

const stats = [
  {
    number: "500",
    label: "Minimum units",
    body: "With pre-existing packaging templates. Perfect for pilot runs and small launches.",
  },
  {
    number: "6-10",
    label: "Weeks total",
    body: "From first call to delivered product. Faster turnaround on repeat orders.",
  },
  {
    number: "100%",
    label: "Made by us",
    body: "No third-party manufacturing. Every pack made in-house with full quality control.",
  },
];

export default function PrivateLabelNumbers() {
  return (
    <Section tone="warm" className="flex items-center py-28">
      <OrganicDecor />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-earth">
            — The numbers
          </p>
          <h2 className="reveal mt-5 font-serif text-5xl font-semibold leading-[0.95] text-forest md:text-7xl">
            Designed to scale with you.
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="reveal rounded-2xl bg-white/40 p-8 shadow-soft backdrop-blur-sm"
            >
              <p className="font-serif text-6xl font-semibold text-forest md:text-7xl">
                {stat.number}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-forest/55">
                {stat.label}
              </p>
              <p className="mt-4 text-sm leading-7 text-forest/65">
                {stat.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
