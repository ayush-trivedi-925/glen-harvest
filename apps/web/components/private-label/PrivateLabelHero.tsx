import Image from "next/image";
import { Section } from "@/components/landing/Section";
import OrganicDecor from "@/components/shared/OrganicDecor";

export default function PrivateLabelHero() {
  return (
    <Section tone="cream" className="flex items-center">
      <OrganicDecor />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-24 md:px-8 lg:pt-40">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <p className="reveal text-xs font-semibold uppercase tracking-[0.32em] text-gold">
              — Private Label
            </p>
            <h1 className="reveal mt-6 font-serif text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.88] text-forest text-balance">
              Your brand. Our harvest.
            </h1>
            <p className="reveal mt-8 max-w-xl text-base leading-8 text-forest/68 md:text-lg">
              Launch a premium makhana line under your own label. We bring the
              farms, the craft, and the production. You bring the vision.
            </p>
            <div className="reveal mt-10 flex flex-wrap gap-4">
              <a
                href="#inquiry"
                className="rounded-full bg-forest px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-cream transition hover:bg-botanical"
              >
                Start Inquiry
              </a>
              <a
                href="#process"
                className="rounded-full border border-forest/20 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-forest transition hover:border-forest/45 hover:bg-white/35"
              >
                How it works
              </a>
            </div>
          </div>

          <div className="reveal relative flex items-center justify-center">
            <div className="absolute -inset-8 rounded-full bg-gold/15 blur-2xl" />
            <div className="parallax-slow relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-premium">
              <Image
                src="/images/plant-images/plant-image-6.png"
                alt="Glen Harvest manufacturing facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
