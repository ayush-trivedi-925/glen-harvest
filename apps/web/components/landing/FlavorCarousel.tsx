"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Flavor } from "@/lib/landing-data";
import { ProductCard } from "./ProductCard";

/* Horizontal, snap-based flavor carousel with prev/next controls.
   ProductCard styling is intentionally left untouched — this only
   wraps the cards with a scroller + navigation affordances. */
export function FlavorCarousel({ flavors }: { flavors: Flavor[] }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const update = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const max = scrollWidth - clientWidth;
    setCanLeft(scrollLeft > 4);
    setCanRight(scrollLeft < max - 4);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [update]);

  const scrollByCards = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const gap = 24; // matches gap-6 (1.5rem)
    const step = first ? first.offsetWidth + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="mt-16">
      {/* Scroller */}
      <div
        ref={scrollerRef}
        className="scrollbar-hide -mx-6 flex  snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain scroll-smooth px-6 pb-6  md:-mx-8 md:gap-6 md:px-8"
        aria-label="Glen Harvest product flavors"
        role="region"
      >
        {flavors.map((flavor) => (
          <div
            key={flavor.id}
            className="w-[84vw] max-w-[34rem] shrink-0 snap-start sm:w-[68vw] lg:w-[calc((100%-1.5rem)/2)] lg:max-w-none"
          >
            <ProductCard flavor={flavor} />
          </div>
        ))}
      </div>

      {/* Controls — centered below, never overlapping the cards */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => scrollByCards(-1)}
          aria-label="Previous flavors"
          disabled={!canLeft}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-forest/20 bg-forest text-cream shadow-soft transition duration-300 hover:bg-botanical disabled:cursor-not-allowed disabled:border-forest/15 disabled:bg-transparent disabled:text-forest/30 disabled:shadow-none"
        >
          <ChevronLeft />
        </button>
        <button
          type="button"
          onClick={() => scrollByCards(1)}
          aria-label="Next flavors"
          disabled={!canRight}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-forest/20 bg-forest text-cream shadow-soft transition duration-300 hover:bg-botanical disabled:cursor-not-allowed disabled:border-forest/15 disabled:bg-transparent disabled:text-forest/30 disabled:shadow-none"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M15 5l-7 7 7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M9 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
