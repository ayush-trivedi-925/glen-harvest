import Image from "next/image";
import { Section } from "@/components/landing/Section";

export default function AboutStory() {
  return (
    <Section tone="warm" className="flex items-center py-28">
      {/* Soft botanical wash */}
      <div className="absolute -left-40 top-10 h-112 w-md rounded-[58%_42%_61%_39%] bg-moss/12 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-104 w-104 rounded-[42%_58%_39%_61%] bg-gold/15 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          {/* Left - Portrait stack */}
          <div className="reveal relative">
            <div className="parallax-slow relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-2xl shadow-premium">
              <Image
                src="/images/glen-harvest.logo.jpeg"
                alt="Glen Harvest founder"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-forest/35 via-transparent to-transparent" />
            </div>

            {/* Floating credential card */}
            <div className="absolute -bottom-6 -right-2 hidden rounded-2xl border border-forest/10 bg-cream/95 px-5 py-4 shadow-premium backdrop-blur-sm md:block">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
                Established
              </p>
              <p className="mt-1 font-serif text-3xl font-semibold text-forest">
                2026
              </p>
              <p className="mt-0.5 text-xs text-forest/55">Bihar, India</p>
            </div>

            {/* Decorative ring */}
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full border-2 border-dashed border-gold/40" />
          </div>

          {/* Right - Quote */}
          <div>
            <p className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              — A note from the founder
            </p>

            <svg
              className="reveal mt-8 h-14 w-14 text-gold/70"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36 1 24.832 4.32 28 8.32 28c3.776 0 6.56-3.04 6.56-6.624 0-3.552-2.464-6.144-5.728-6.144-.64 0-1.504.128-1.728.224.544-3.68 3.968-7.968 7.392-10.112L9.352 4zm16.512 0c-4.832 3.456-8.288 9.12-8.288 15.36 0 5.472 3.328 8.64 7.328 8.64 3.712 0 6.56-3.04 6.56-6.624 0-3.552-2.528-6.144-5.792-6.144-.64 0-1.44.128-1.664.224.544-3.68 3.904-7.968 7.328-10.112L25.864 4z" />
            </svg>

            <blockquote className="reveal mt-6 font-serif text-2xl font-medium leading-tight text-forest text-balance md:text-4xl lg:text-4xl">
              &ldquo;Our mission is to take Bihar&rsquo;s finest makhana to the
              world, ensuring farmers receive their fair share while showcasing
              Bihar&rsquo;s rich heritage. Every pack supports local communities
              and delivers the highest-quality makhana to consumers
              everywhere.&rdquo;
            </blockquote>

            <div className="reveal mt-10 flex items-center gap-5">
              <div className="h-px flex-1 bg-forest/20" />
              <div>
                <p className="font-serif text-xl font-semibold text-forest">
                  Glen Harvest Team
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-forest/55">
                  Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
