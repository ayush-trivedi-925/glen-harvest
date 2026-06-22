import { Section } from "@/components/landing/Section";

const process = [
  {
    step: "01",
    title: "Discovery call",
    body: "Tell us about your brand, target audience, and what you're imagining. We'll talk flavors, formats, and feasibility.",
  },
  {
    step: "02",
    title: "Flavor development",
    body: "Our team develops 2-3 flavor profiles based on your direction. You taste, give feedback, and we refine until it's right.",
  },
  {
    step: "03",
    title: "Sample approval",
    body: "We send production samples in your packaging for final approval. Nothing moves to production without your sign-off.",
  },
  {
    step: "04",
    title: "Production & delivery",
    body: "Once approved, your order goes into the roast schedule. Sealed, packed, and shipped to your warehouse.",
  },
];

export default function PrivateLabelProcess() {
  return (
    <Section id="process" tone="deep" className="flex items-center py-28">
      <div className="absolute left-1/2 top-16 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-cream/5 blur-3xl" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <p className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              — How it works
            </p>
            <h2 className="reveal mt-5 font-serif text-5xl font-semibold leading-[0.95] text-cream md:text-7xl">
              Four steps to your own line.
            </h2>
          </div>
          <p className="reveal max-w-md text-base leading-8 text-cream/65">
            Our process is built for clarity. You&apos;ll know what&apos;s
            happening, when it&apos;s happening, and what&apos;s next at every
            stage.
          </p>
        </div>
        <div className="relative mt-16">
          <div className="absolute bottom-4 left-[11px] top-4 hidden w-px bg-gold/30 sm:block" />
          <div className="space-y-12">
            {process.map((item) => (
              <article
                key={item.step}
                className="reveal flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10"
              >
                <div className="flex shrink-0 items-center gap-4">
                  <div className="relative h-5.5 w-5.5 rounded-full bg-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-3xl font-semibold text-cream md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-8 text-cream/65">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
