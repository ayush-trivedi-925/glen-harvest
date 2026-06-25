import Image from "next/image";
import { OrganicDecor } from "./OrganicDecor";
import { Section } from "./Section";

const packs = [
  "mint-pack.png",
  "peri-pack.png",
  "pickle-pack.png",
  "salt-pack.png",
  "cream-pack.png",
  "protien-pack.png",
  "raw-pack.png",
];

export function CtaSection() {
  return (
    <Section
      id="contact"
      tone="cream"
      className="flex items-center py-16 min-h-[82vh]! lg:py-28 lg:min-h-[112vh]!"
    >
      <OrganicDecor />
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-8">
        <p className="reveal text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          Glen Harvest
        </p>
        <h2 className="reveal mx-auto mt-6 max-w-4xl font-serif text-6xl font-semibold leading-[0.9] text-forest md:text-9xl">
          Discover Your New Favorite Snack
        </h2>
        <p className="reveal mx-auto mt-8 max-w-xl text-base leading-8 text-forest/68 md:text-lg">
          Choose a refreshing mint roast or a warm chili crunch, and make better
          snacking feel special.
        </p>
        <div className="reveal mt-12">
          <a
            href="#products"
            className="inline-flex rounded-full bg-forest px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream transition hover:bg-botanical"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* Product pack lineup — peeking up half-height from the bottom.
         Square overflow-hidden slots + object-cover crop the packs'
         transparent margins so each shows at a consistent size. */}
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-90] bottom-0 z-5 flex translate-y-[50%] items-end justify-between px-[3vw] md:px-[5vw]"
      >
        {packs.map((file) => {
          // The source frames have transparent margin around each pack, so
          // zoom in to make the pack fill the slot. raw-pack is a square
          // frame where the pouch is smaller, so it needs a bit more zoom
          // to visually match the landscape packs.
          const zoom = file === "raw-pack.png" ? 1.6 : 1.5;
          return (
            <div
              key={file}
              className="relative aspect-square w-[15%] shrink-0 overflow-hidden md:w-[14%] lg:w-[13%]"
            >
              <Image
                src={`/images/products/${file}`}
                alt=""
                fill
                unoptimized
                className="select-none object-cover object-center"
                style={{ transform: `scale(${zoom})` }}
                draggable={false}
              />
            </div>
          );
        })}
      </div> */}
    </Section>
  );
}
