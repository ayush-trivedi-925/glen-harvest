import Image from "next/image";
import { Section } from "@/components/landing/Section";
import OrganicDecor from "@/components/shared/OrganicDecor";

export default function AboutHero() {
  return (
    <Section tone="cream" className="flex items-center">
      <OrganicDecor />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-24 md:px-8 lg:pt-40">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          {/* Left content */}
          <div>
            <p className="reveal text-xs font-semibold uppercase tracking-[0.32em] text-gold">
              — Our Story
            </p>
            <h1 className="reveal mt-6 font-serif text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.88] text-forest text-balance">
              A quiet harvest, carried forward.
            </h1>
            <p className="reveal mt-8 max-w-xl text-base leading-8 text-forest/68 md:text-lg">
              Glen Harvest began with a simple idea — that the snacks we reach
              for every day deserve the same care as the meals we sit down to
              eat. Premium makhana, grown patiently in Bihar&apos;s aquatic
              farms, brought to you without compromise.
            </p>
            <div className="reveal mt-10 flex flex-wrap gap-8 border-t border-forest/15 pt-8">
              <div>
                <p className="font-serif text-4xl font-semibold text-forest">
                  100%
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-forest/55">
                  Single-origin
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl font-semibold text-forest">
                  0
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-forest/55">
                  Preservatives
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl font-semibold text-forest">
                  Small
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-forest/55">
                  Batch roast
                </p>
              </div>
            </div>
          </div>

          {/* Right - Hero image */}
          <div className="reveal relative flex items-center justify-center">
            <div className="absolute -inset-8 rounded-full bg-moss/15 blur-2xl" />

            {/* Dashed orbit ring */}
            <div
              aria-hidden="true"
              className="absolute right-0 top-6 hidden h-32 w-32 rounded-full border border-dashed border-gold/40 md:block"
            />

            <div className="parallax-slow relative h-112 w-[20rem] overflow-hidden rounded-2xl shadow-premium md:h-136 md:w-[24rem]">
              <Image
                src="/images/placeholder-images/nuts-red-h.jpg"
                alt="Aquatic farms in Bihar"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating "Est." sticker */}
            <div className="absolute -bottom-6 -left-6 flex h-28 w-28 items-center justify-center rounded-full bg-forest text-cream shadow-premium md:-left-10 md:h-32 md:w-32">
              <div className="text-center">
                <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-gold/90">
                  Est.
                </p>
                <p className="mt-0.5 font-serif text-3xl font-semibold leading-none">
                  2026
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.22em] text-cream/65">
                  Bihar · IN
                </p>
              </div>
            </div>

            {/* Floating leaf accent */}
            <span
              aria-hidden="true"
              className="float-leaf absolute -right-6 top-20 h-14 w-7 border border-gold/45 opacity-70 md:-right-10"
              style={{
                transform: "rotate(28deg)",
                borderRadius: "14% 80% 12% 80%",
              }}
            />
          </div>
        </div>

        {/* As featured in strip */}
        {/* <div className="reveal mt-20 flex flex-col items-center gap-5 border-t border-forest/10 pt-8 md:flex-row md:gap-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-forest/55">
            As featured in
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 font-serif text-xl italic text-forest/45 md:text-2xl">
            <li>Vogue&nbsp;India</li>
            <li className="tracking-wider not-italic">CONDÉ&nbsp;NAST</li>
            <li className="font-sans text-base font-semibold uppercase tracking-[0.32em] not-italic">
              Mint&nbsp;Lounge
            </li>
            <li>The&nbsp;Hindu</li>
            <li className="tracking-wider not-italic">VICE&nbsp;MUNCHIES</li>
          </ul>
        </div> */}
      </div>
    </Section>
  );
}
