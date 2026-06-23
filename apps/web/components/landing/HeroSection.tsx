"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/* ───────────────────────────────────────────────────────────
   Hero — one fixed "design canvas" that scales as a single unit.

   WHY THE OLD VERSION BROKE
   It mixed viewport units (vh / vw), fixed pixels, rem widths and
   percentage offsets, plus responsive breakpoints (sm / lg / xl).
   None of those scale in proportion to each other, so the layout
   only lined up at the one laptop width you designed against.
   A browser zoom changes the *effective* viewport width, so zooming
   (or any non-laptop screen) both crossed Tailwind breakpoints AND
   recalculated every vw/vh value — which slid the pieces around.

   THE FIX
   Lay everything out ONCE at a fixed 1440 × 900 stage, then scale
   that whole stage by (containerWidth / 1440). The composition is
   now pixel-identical at every width and zoom — it just gets
   uniformly bigger or smaller, exactly like scaling an image.

   Because the stage is a fixed size, there are NO breakpoints and
   NO vw/vh inside it (those would still read the real viewport, not
   the stage, and defeat the point). Every inner value is plain
   px / rem / %.

   All data-hero-* hooks are untouched, so the GSAP intro driven by
   LandingPage keeps working (GSAP finds the DOM nodes at runtime).
─────────────────────────────────────────────────────────── */

const DESIGN_W = 1440; // the width everything below is laid out against
const DESIGN_H = 900; // matches the old lg:h-[900px]

// Leave as Infinity to fill any width (truly identical look everywhere).
// Set e.g. 1.4 to STOP growing past ~2016px wide on huge monitors — the
// stage will then cap and sit centered with cream margins on the sides.
const MAX_SCALE = Infinity;

export function HeroSection() {
  const HERO_IMG = "/images/home hero";
  const shellRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return;

    let lastW = -1;
    const apply = () => {
      const w = shell.clientWidth;
      if (w === lastW) return; // ignore height-only changes (avoids RO loop)
      lastW = w;

      const scale = Math.min(w / DESIGN_W, MAX_SCALE);
      shell.style.setProperty("--hero-scale", String(scale));
      // Centers the stage only when it's capped; 0 while it fills the width.
      shell.style.setProperty(
        "--hero-offset-x",
        `${(w - DESIGN_W * scale) / 2}px`,
      );
      // Section height = the scaled stage height, so there's no gap/overflow.
      shell.style.height = `${DESIGN_H * scale}px`;
    };

    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(shell);
    return () => ro.disconnect();
  }, []);

  // Static cloud placements — fixed width now (no longer vw-based).
  const clouds = [
    { top: "18%", left: "-1%", width: 320, opacity: 0.55 },
    { top: "62%", left: "38%", width: 320, opacity: 0.55 },
    { top: "24%", left: "63%", width: 320, opacity: 0.6 },
    { top: "70%", left: "86%", width: 320, opacity: 0.5 },
  ];

  return (
    <section
      id="home"
      ref={shellRef}
      className="hero-shell relative isolate w-full overflow-hidden bg-cream text-forest"
      // Fallback height before JS runs (close enough; JS sets the exact px).
      style={{ height: `calc(100vw * ${DESIGN_H} / ${DESIGN_W})` }}
    >
      {/* The fixed design canvas — everything lives inside and scales together. */}
      <div
        className="absolute top-0"
        style={{
          left: "var(--hero-offset-x, 0px)",
          width: DESIGN_W,
          height: DESIGN_H,
          transformOrigin: "top left",
          transform: "scale(var(--hero-scale, 1))",
        }}
      >
        {/* Paper noise */}
        <div className="noise-overlay pointer-events-none absolute inset-0 z-0" />

        {/* ─── Sky: scattered clouds ─── */}
        <div
          data-hero-sky
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-1/2"
        >
          {clouds.map((c, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                top: c.top,
                left: c.left,
                width: c.width,
                opacity: c.opacity,
              }}
            >
              <Image
                src={`${HERO_IMG}/cloud.png`}
                alt=""
                width={c.width}
                height={Math.round(c.width * 0.55)}
                className="h-auto w-full select-none"
                draggable={false}
                priority={i < 2}
              />
            </div>
          ))}
        </div>

        {/* ─── Sun (static, sitting in the sky just above the landscape) ─── */}
        <div
          className="pointer-events-none absolute z-10 w-[18%]"
          style={{
            left: "50%",
            bottom: "260px",
            transform: "translateX(-50%)",
          }}
        >
          <Image
            src={`${HERO_IMG}/sun.png`}
            alt=""
            width={200}
            height={100}
            className="h-auto w-full select-none"
            draggable={false}
            data-hero-sun
          />
        </div>

        {/* ─── Content (wordmark + headline + pack) ─── */}
        <div className="absolute inset-x-0 z-20 top-26 bottom-[304px]">
          <div className="mx-auto grid h-full w-full max-w-[1440px] grid-cols-[1.05fr_0.95fr] items-center gap-6 px-12">
            {/* Left */}
            <div className="block text-left">
              <div className="flex items-center gap-4">
                <Image
                  src={`${HERO_IMG}/glen-harvest.png`}
                  width={200}
                  height={200}
                  alt="Glen Harvest title"
                  className="h-auto w-[220px]"
                />
                <p
                  data-hero-tagline
                  className="whitespace-nowrap text-lg font-semibold uppercase tracking-[0.3em] text-earth"
                >
                  — Product of Mithila
                </p>
              </div>

              {/* Headline */}
              <h1
                data-hero-headline
                className="mt-5 whitespace-nowrap font-serif text-[2.8rem] leading-[1.05] tracking-[-0.01em]"
              >
                <span className="block font-extrabold text-[#2C3D2A]">
                  Tradition in every bite,
                </span>
                <span className="block font-extrabold text-[#7A341E]">
                  Nutrition in every grain.
                </span>
              </h1>
            </div>

            {/* Right — product pack (raw.png IS the pack) */}
            <div className="relative flex h-full items-end justify-center">
              <div className="relative bottom-[-62%] left-[-2rem] w-[34rem]">
                <Image
                  src={`${HERO_IMG}/raw.png`}
                  alt="Glen Harvest High Protein Makhana"
                  width={420}
                  height={340}
                  priority
                  className="h-auto w-full select-none object-contain drop-shadow-[0_30px_50px_rgba(60,30,10,0.18)]"
                  draggable={false}
                  data-hero-pack
                />
              </div>
            </div>
          </div>
        </div>

        {/* ─── Landscape band ─── */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[320px]">
          {/* Tree-line backdrop, full width */}
          <div className="absolute inset-x-0 bottom-0 h-full">
            <Image
              src={`${HERO_IMG}/tree-bg.png`}
              alt=""
              width={2172}
              height={724}
              sizes="100vw"
              className="absolute inset-x-0 bottom-0 h-full w-full select-none object-cover object-bottom"
              draggable={false}
              priority
              data-hero-treebg
            />
          </div>

          {/* Diorama layered above the tree-line */}
          <div data-hero-diorama className="absolute inset-x-0 bottom-0 h-full">
            {/* Archway + bird (single asset) — far left */}
            <div className="absolute bottom-[-24px] left-[1%] w-[16.5rem]">
              <Image
                src={`${HERO_IMG}/bird.png`}
                alt=""
                width={240}
                height={380}
                className="h-auto w-full select-none"
                draggable={false}
              />
            </div>

            {/* Lotus */}
            <div className="absolute bottom-[-24px] left-[14%] w-34">
              <Image
                src={`${HERO_IMG}/lotus.png`}
                alt=""
                width={140}
                height={140}
                className="h-auto w-full select-none"
                draggable={false}
              />
            </div>

            {/* Woman with bowl (makhana 2) */}
            <div className="absolute bottom-1 left-[26%] w-[11rem]">
              <Image
                src={`${HERO_IMG}/makhana 2.png`}
                alt=""
                width={260}
                height={200}
                className="h-auto w-full select-none"
                draggable={false}
              />
            </div>

            {/* Bowl of makhana (next to the woman) */}
            <div className="absolute bottom-2 left-[42%] w-22">
              <Image
                src={`${HERO_IMG}/makhana.png`}
                alt=""
                width={160}
                height={140}
                className="h-auto w-full select-none"
                draggable={false}
              />
            </div>

            {/* House */}
            <div className="absolute bottom-[8px] left-[47%] w-39">
              <Image
                src={`${HERO_IMG}/house.png`}
                alt=""
                width={220}
                height={200}
                className="h-auto w-full select-none"
                draggable={false}
              />
            </div>

            {/* Mid tree */}
            <div className="absolute bottom-[-9%] left-[58%] w-[7.5rem]">
              <Image
                src={`${HERO_IMG}/tree.png`}
                alt=""
                width={180}
                height={300}
                className="h-auto w-full select-none"
                draggable={false}
              />
            </div>

            {/* Right tree */}
            <div className="absolute bottom-[-9%] left-[80%] w-[7rem]">
              <Image
                src={`${HERO_IMG}/tree.png`}
                alt=""
                width={180}
                height={300}
                className="h-auto w-full select-none"
                draggable={false}
              />
            </div>

            {/* Cow */}
            <div className="absolute bottom-[-12%] left-[83%] w-[14rem]">
              <Image
                src={`${HERO_IMG}/cow.png`}
                alt=""
                width={220}
                height={180}
                className="h-auto w-full select-none"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
