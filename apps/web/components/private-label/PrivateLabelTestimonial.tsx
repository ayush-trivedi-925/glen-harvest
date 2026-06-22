import { Section } from "@/components/landing/Section";

export default function PrivateLabelTestimonial() {
  return (
    <Section tone="warm" className="flex items-center py-28">
      <div className="absolute -left-40 top-12 h-[28rem] w-[28rem] rounded-[58%_42%_61%_39%] bg-moss/14 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-[26rem] w-[26rem] rounded-[42%_58%_39%_61%] bg-gold/18 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          {/* Quote */}
          <div>
            <p className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              — Partner story
            </p>

            <svg
              className="reveal mt-6 h-12 w-12 text-gold/70"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36 1 24.832 4.32 28 8.32 28c3.776 0 6.56-3.04 6.56-6.624 0-3.552-2.464-6.144-5.728-6.144-.64 0-1.504.128-1.728.224.544-3.68 3.968-7.968 7.392-10.112L9.352 4zm16.512 0c-4.832 3.456-8.288 9.12-8.288 15.36 0 5.472 3.328 8.64 7.328 8.64 3.712 0 6.56-3.04 6.56-6.624 0-3.552-2.528-6.144-5.792-6.144-.64 0-1.44.128-1.664.224.544-3.68 3.904-7.968 7.328-10.112L25.864 4z" />
            </svg>

            <blockquote className="reveal mt-6 font-serif text-3xl font-medium leading-[1.25] text-forest text-balance md:text-4xl">
              &ldquo;We piloted with 1,000 tins for our club lounges. Eight
              months later we&apos;re on 38,000 a quarter. Glen Harvest scaled
              with us without flinching — and the product still tastes like
              the first pilot batch.&rdquo;
            </blockquote>

            <div className="reveal mt-10 flex items-center gap-5">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-cream bg-forest/10 shadow-soft">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-8 w-8 text-forest/35"
                  aria-hidden="true"
                >
                  <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2.5c-4.5 0-8 2.3-8 5.2V22h16v-2.3c0-2.9-3.5-5.2-8-5.2z" />
                </svg>
              </div>
              <div>
                <p className="font-serif text-xl font-semibold text-forest">
                  Riya Bhandari
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-forest/55">
                  VP Hospitality · Atelier Hotels
                </p>
              </div>
            </div>
          </div>

          {/* Results card */}
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-3xl border border-forest/10 bg-cream/95 p-8 shadow-premium backdrop-blur-sm md:p-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-gold">
                — In numbers
              </p>

              <ul className="mt-7 divide-y divide-forest/12">
                <li className="flex items-baseline justify-between py-5">
                  <span className="text-sm text-forest/65 md:text-base">
                    Pilot order
                  </span>
                  <span className="font-serif text-3xl font-semibold text-forest">
                    1,000
                  </span>
                </li>
                <li className="flex items-baseline justify-between py-5">
                  <span className="text-sm text-forest/65 md:text-base">
                    Quarterly volume today
                  </span>
                  <span className="font-serif text-3xl font-semibold text-forest">
                    38,000
                  </span>
                </li>
                <li className="flex items-baseline justify-between py-5">
                  <span className="text-sm text-forest/65 md:text-base">
                    Time to first delivery
                  </span>
                  <span className="font-serif text-3xl font-semibold text-forest">
                    7&nbsp;wks
                  </span>
                </li>
                <li className="flex items-baseline justify-between py-5">
                  <span className="text-sm text-forest/65 md:text-base">
                    Repeat order rate
                  </span>
                  <span className="font-serif text-3xl font-semibold text-forest">
                    100%
                  </span>
                </li>
              </ul>

              <div className="mt-4 flex items-center gap-3 rounded-full bg-forest/6 px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-gold" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-forest/70">
                  Partner since 2023 · Still on the roast schedule
                </p>
              </div>
            </div>

            {/* Decorative dashed ring */}
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full border-2 border-dashed border-gold/40" />
          </div>
        </div>
      </div>
    </Section>
  );
}
