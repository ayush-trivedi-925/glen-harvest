import Image from "next/image";
import type { Flavor } from "@/lib/landing-data";
import { perks } from "./flavorPerks";

export function FlavorGrid({ flavors }: { flavors: Flavor[] }) {
  return (
    <div className="mt-14 grid grid-cols-1 gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {flavors.map((flavor) => (
        <article key={flavor.id} className="reveal group flex flex-col">
          {/* Arch backdrop + pack */}
          <div
            className="relative overflow-hidden rounded-t-[3.25rem] rounded-b-[1.5rem] transition duration-500 group-hover:shadow-[0_26px_60px_rgba(60,40,20,0.16)]"
            style={{
              background: `linear-gradient(180deg, ${flavor.palette.soft} 0%, #f8f1e3 78%)`,
            }}
          >
            {/* Choice seal */}
            <div className="absolute right-3.5 top-3.5 z-10 flex h-14 w-14 rotate-[8deg] items-center justify-center rounded-full bg-forest text-center shadow-md ring-2 ring-cream/25">
              <span className="text-[8px] font-bold uppercase leading-[1.25] tracking-[0.08em] text-cream">
                Glen
                <br />
                Pick
              </span>
            </div>

            <div className="relative mx-auto aspect-[4/5] w-full">
              <Image
                src={flavor.image}
                alt={flavor.name}
                fill
                unoptimized
                sizes="(min-width: 1280px) 18rem, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                className={`object-contain p-2 transition duration-500 ease-out group-hover:-translate-y-1.5 ${
                  flavor.id === "raw"
                    ? "scale-110 group-hover:scale-[1.15]"
                    : "scale-[1.4] group-hover:scale-[1.46]"
                }`}
              />
            </div>

            {/* Perk icons */}
            <div className="absolute bottom-4 right-4 flex items-center gap-1.5">
              {perks.map((perk) => (
                <span
                  key={perk.label}
                  title={perk.label}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-sm ring-1 ring-black/5"
                  style={{ color: perk.color }}
                >
                  {perk.icon}
                </span>
              ))}
            </div>
          </div>

          {/* Title */}
          <h3 className="mt-6 font-serif text-2xl font-semibold leading-tight text-forest">
            {flavor.name}
          </h3>

          <p className="mt-2 flex-1 text-sm leading-7 text-forest/60">
            {flavor.description}
          </p>

          {/* Price */}
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-xl font-semibold text-forest">
              {flavor.price}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-forest/40">
              Incl. all taxes
            </span>
          </div>

          {/* CTA */}
          <button
            type="button"
            className="mt-5 w-full rounded-full bg-forest px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-cream transition duration-300 hover:-translate-y-0.5 hover:bg-botanical"
          >
            Add to cart
          </button>
        </article>
      ))}
    </div>
  );
}
