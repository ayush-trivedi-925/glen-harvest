import Image from "next/image";
import { Section } from "@/components/landing/Section";
import OrganicDecor from "@/components/shared/OrganicDecor";

export default function AboutMission() {
  return (
    <Section tone="green" className="flex items-center py-28">
      <OrganicDecor variant="quiet" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-14 px-6 md:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        {/* Left - Image */}
        <div className="reveal relative">
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl shadow-premium">
            <Image
              src="/images/placeholder-images/image-2.png"
              alt="Aquatic farms in Bihar"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-forest/40 to-transparent" />
          </div>
        </div>

        {/* Right - Content */}
        <div>
          <p className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            — Why we do it
          </p>
          <h2 className="reveal mt-5 font-serif text-5xl font-semibold leading-[0.95] text-forest md:text-6xl">
            Snacking, reimagined with intention.
          </h2>
          <p className="reveal mt-8 text-base leading-8 text-forest/72 md:text-lg">
            Most snacks are built for speed — fast to make, fast to forget. We
            wanted something different. A snack that respects its origin, honors
            its craft, and earns its place in a thoughtful moment.
          </p>
          <p className="reveal mt-6 text-base leading-8 text-forest/72 md:text-lg">
            Makhana has been part of Indian kitchens for centuries. Light,
            nourishing, and quietly powerful. We pair that tradition with modern
            flavors, clean recipes, and packaging that feels as considered as
            the product inside.
          </p>
        </div>
      </div>
    </Section>
  );
}
