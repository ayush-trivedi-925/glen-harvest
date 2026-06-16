import Image from "next/image";
import { Section } from "@/components/landing/Section";
import OrganicDecor from "@/components/shared/OrganicDecor";

export default function PrivateLabelWhatIs() {
  return (
    <Section tone="green" className="flex items-center py-28">
      <OrganicDecor variant="quiet" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-14 px-6 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="reveal relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-premium">
            <Image
              src="/images/placeholder-images/pumpkin_seeds-h.jpg"
              alt="Custom packaging"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
          </div>
        </div>

        <div>
          <p className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            — What is private labeling
          </p>
          <h2 className="reveal mt-5 font-serif text-5xl font-semibold leading-[0.95] text-forest md:text-6xl">
            We make. You brand.
          </h2>
          <p className="reveal mt-8 text-base leading-8 text-forest/72 md:text-lg">
            Private labeling means we produce premium makhana products that
            carry your brand name, your packaging, and your story. You get all
            the upside of a polished product line — without setting up sourcing,
            roasting, or manufacturing yourself.
          </p>
          <p className="reveal mt-6 text-base leading-8 text-forest/72 md:text-lg">
            Whether you&apos;re a hotel chain wanting a signature room amenity,
            a wellness brand expanding into snacks, or a retailer launching a
            house label — we work with brands at every scale.
          </p>
        </div>
      </div>
    </Section>
  );
}
