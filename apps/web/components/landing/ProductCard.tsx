import Image from "next/image";
import type { Flavor } from "@/lib/landing-data";

export function ProductCard({ flavor }: { flavor: Flavor }) {
  return (
    <article
      className="product-card reveal group relative overflow-hidden rounded-lg p-6 text-cream shadow-premium transition duration-500 hover:-translate-y-2 hover:scale-[1.015] hover:shadow-[0_30px_90px_rgba(29,45,33,0.24)]"
      style={{
        background: `linear-gradient(150deg, ${flavor.palette.base}, ${flavor.palette.deep})`,
      }}
    >
      <div className="absolute right-0 top-0 h-40 w-40 -translate-y-12 translate-x-12 rounded-full bg-white/10 blur-2xl transition duration-500 group-hover:scale-125" />

      <div className="relative mx-auto h-72 w-52 md:h-96 md:w-64">
        <Image
          src={
            flavor.id === "mint"
              ? "/images/products/mint-pack.png"
              : "/images/products/peri-pack.png"
          }
          alt={flavor.name}
          fill
          className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition duration-500 group-hover:scale-105"
        />
      </div>

      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-cream/62">
        {flavor.eyebrow}
      </p>

      <h3 className="mt-3 font-serif text-5xl font-semibold">{flavor.name}</h3>

      <p className="mt-4 min-h-20 text-sm leading-7 text-cream/72">
        {flavor.description}
      </p>

      <div className="mt-8 flex items-center justify-between gap-4">
        <span className="font-serif text-4xl font-semibold">
          {flavor.price}
        </span>

        <button className="rounded-full bg-cream px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-forest transition hover:bg-white">
          Add To Cart
        </button>
      </div>
    </article>
  );
}
