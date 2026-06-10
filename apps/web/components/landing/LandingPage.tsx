"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { benefits, features, flavors, testimonials } from "@/lib/landing-data";
import { BenefitCard } from "./BenifitCard";
import { FeatureCard } from "./FeatureCard";
import { ProductCard } from "./ProductCard";
import { Section } from "./Section";
import { TestimonialCard } from "./TestimonialCard";

gsap.registerPlugin(ScrollTrigger);

export function LandingPage() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      gsap.set(root.querySelectorAll(".reveal"), { autoAlpha: 1, y: 0 });
      return;
    }

    /* ─── Lenis smooth-scroll, hard-synced with GSAP ─── */
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      lerp: 0.1,
    });

    const lenisScrollHandler = () => ScrollTrigger.update();
    lenis.on("scroll", lenisScrollHandler);

    const tickerFn = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    gsap.defaults({ overwrite: "auto" });
    ScrollTrigger.config({ ignoreMobileResize: true });

    const ctx = gsap.context(() => {
      /* Batched scroll reveals for the sections AFTER the hero */
      ScrollTrigger.batch(".reveal", {
        start: "top 85%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.08,
            overwrite: "auto",
          }),
      });

      /* Floating decor leaves (only used by OrganicDecor, not the hero) */
      const floatLeaves = gsap.to(".float-leaf", {
        y: "random(-18, 18)",
        x: "random(-10, 10)",
        rotation: "random(-8, 8)",
        duration: "random(3.8, 6.2)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });

      const onVisChange = () => {
        if (document.hidden) floatLeaves.pause();
        else floatLeaves.play();
      };
      document.addEventListener("visibilitychange", onVisChange);

      const refresh = () => ScrollTrigger.refresh();
      if (document.readyState === "complete") refresh();
      else window.addEventListener("load", refresh, { once: true });
      if (document.fonts?.ready) document.fonts.ready.then(refresh);

      return () => {
        document.removeEventListener("visibilitychange", onVisChange);
      };
    }, root);

    return () => {
      ctx.revert();
      gsap.ticker.remove(tickerFn);
      lenis.off("scroll", lenisScrollHandler);
      lenis.destroy();
    };
  }, []);

  return (
    <main ref={rootRef} className="relative bg-cream">
      <HeroSection />

      <Section id="about" tone="green" className="flex items-center py-28">
        <OrganicDecor variant="quiet" />
        <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-6 md:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Why makhana
            </p>
            <h2 className="reveal mt-5 font-serif text-6xl font-semibold leading-[0.92] text-forest md:text-8xl">
              Light by nature. Rich by tradition.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={benefit.label}
                benefit={benefit}
                index={index}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section id="products" tone="warm" className="flex items-center py-28">
        <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-[#eaf0df] to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-earth">
              Current flavors
            </p>
            <h2 className="reveal mt-5 font-serif text-6xl font-semibold leading-none text-forest md:text-8xl">
              A flavor for every kind of crunch.
            </h2>
          </div>
          <div
            className="scrollbar-hide -mx-6 mt-16 flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain px-6 pb-10 active:cursor-grabbing md:-mx-8 md:gap-6 md:px-8"
            aria-label="Glen Harvest product flavors"
          >
            {flavors.map((flavor) => (
              <div
                key={flavor.id}
                className="w-[84vw] max-w-[32rem] shrink-0 snap-start sm:w-[68vw] lg:w-[calc((100%-1.5rem)/2)] lg:max-w-none"
              >
                <ProductCard flavor={flavor} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="light" className="flex items-center py-28">
        <OrganicDecor variant="care" />
        <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-14 px-6 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Why choose us
            </p>
            <h2 className="reveal mt-5 font-serif text-6xl font-semibold leading-[0.92] text-forest md:text-8xl">
              Crafted With Care
            </h2>
            <p className="reveal mt-8 max-w-md text-base leading-8 text-forest/65">
              Every pack is designed to feel calm, considered, and deeply
              satisfying from first pour to final bite.
            </p>
          </div>
          <div className="grid gap-x-10 sm:grid-cols-2">
            {features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="testimonials"
        tone="deep"
        className="flex items-center py-28"
      >
        <div className="absolute left-1/2 top-16 h-80 w-184 -translate-x-1/2 rounded-full bg-cream/5 blur-3xl" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Loved daily
            </p>
            <h2 className="reveal mt-5 font-serif text-6xl font-semibold leading-[0.95] text-cream md:text-8xl">
              Quiet luxury for everyday snacking.
            </h2>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section id="contact" tone="cream" className="flex items-center py-28">
        <OrganicDecor />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-8">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Glen Harvest
          </p>
          <h2 className="reveal mx-auto mt-6 max-w-4xl font-serif text-6xl font-semibold leading-[0.9] text-forest md:text-9xl">
            Discover Your New Favorite Snack
          </h2>
          <p className="reveal mx-auto mt-8 max-w-xl text-base leading-8 text-forest/68 md:text-lg">
            Choose a refreshing mint roast or a warm chili crunch, and make
            better snacking feel special.
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
      </Section>
    </main>
  );
}

/* ───────────────────────────────────────────────────────────
   Hero — fully static. No animation, no floating, no GSAP.
   Asset mapping:
     raw.png         → product pack (big, right column)
     makhana 2.png   → woman with bowl (small, landscape)
     makhana.png     → bowl of laddoo-style makhana (landscape)
     bird.png        → archway + bird perched on top (far left of landscape)
     tree.png        → single tree element (landscape)
     tree-bg.png     → full-width tree-line backdrop (landscape)
     sun.png         → orange sun glyph (placed in sky, static)
     house.png       → small house (landscape)
     cow.png         → decorative cow (far right of landscape)
     lotus.png       → lotus flower (landscape)
     cloud.png       → small cloud (scattered in sky)
─────────────────────────────────────────────────────────── */
function HeroSection() {
  const HERO_IMG = "/images/home hero";

  // Static cloud placements — three on each side of the headline.
  const clouds = [
    { top: "18%", left: "-1%", width: 320, opacity: 0.55 },

    { top: "62%", left: "38%", width: 320, opacity: 0.55 },
    { top: "24%", left: "63%", width: 320, opacity: 0.6 },
    { top: "70%", left: "86%", width: 320, opacity: 0.5 },
  ];

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#F0DEC2] text-forest"
      style={{ height: "100vh", minHeight: "720px" }}
    >
      {/* Paper noise */}
      <div className="noise-overlay pointer-events-none absolute inset-0 z-0" />

      {/* ─── Sky: scattered clouds ─── */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-1/2">
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
        className="pointer-events-none absolute z-10"
        style={{
          left: "21%",
          bottom: "min(6vh, 32rem)",
          width: "44%",
        }}
      >
        <Image
          src={`${HERO_IMG}/sun.png`}
          alt=""
          width={350}
          height={350}
          className="h-auto w-full select-none"
          draggable={false}
        />
      </div>

      {/* ─── Content (wordmark + headline + CTAs + pack) ─── */}
      <div
        className="absolute inset-x-0 z-20"
        style={{ top: "6.5rem", bottom: "min(36vh, 19rem)" }}
      >
        <div className="mx-auto grid h-full max-w-7xl items-center gap-6 px-6 md:grid-cols-[1.05fr_0.95fr] md:px-10 lg:px-12 2xl:w-[78vw] 2xl:max-w-none 2xl:grid-cols-[0.9fr_1.1fr] 2xl:gap-[4vw] 2xl:px-0">
          {/* Left */}
          <div className="max-w-xl 2xl:max-w-[30vw] 2xl:translate-y-[-12vh] 2xl:translate-x-[10vh]">
            <p
              className="font-serif text-4xl font-bold leading-[0.95] text-forest md:text-5xl lg:text-[3.5rem] 2xl:text-[clamp(3rem,2.7vw,4.25rem)]"
              style={{ letterSpacing: "-0.015em" }}
            >
              Glen
              <br />
              Harvest
            </p>

            <h1 className="mt-5 font-serif text-[clamp(2.25rem,4.6vw,3.9rem)] leading-[1.02] 2xl:mt-6 2xl:text-[clamp(3.25rem,3vw,4.75rem)]">
              <span className="block font-extrabold text-[#2C3D2A]">
                Tradition in
                <br />
                every bite,
              </span>
              <span className="mt-1 block font-extrabold text-[#7A341E]">
                Nutrition in
                <br />
                every grain.
              </span>
            </h1>
          </div>

          {/* Right — product pack (raw.png IS the pack) */}
          <div className="relative flex h-full items-end justify-center md:justify-center 2xl:translate-y-[5vh]">
            <div className="relative bottom-[-8%] left-[14%] w-[15rem] md:w-[20rem] lg:w-[24rem] xl:w-[42rem] 2xl:left-[18%] 2xl:w-[42vw] 2xl:max-w-[72rem]">
              <Image
                src={`${HERO_IMG}/raw.png`}
                alt="Glen Harvest High Protein Makhana"
                width={420}
                height={340}
                priority
                className="h-auto w-full select-none object-contain drop-shadow-[0_30px_50px_rgba(60,30,10,0.18)]"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ─── Landscape band ─── */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
        style={{ height: "min(38vh, 20rem)" }}
      >
        {/* Tree-line backdrop, full width */}
        <div className="absolute inset-x-0 bottom-0 h-full">
          <Image
            src={`${HERO_IMG}/tree-bg.png`}
            alt=""
            width={2172}
            height={724}
            sizes="100vw"
            className="absolute inset-x-0 bottom-0 h-full w-full select-none object-cover object-bottom 2xl:h-auto"
            draggable={false}
            priority
          />
        </div>

        {/* Diorama layered above the tree-line */}
        <div className="absolute inset-x-0 bottom-0 h-full">
          {/* Archway + bird (single asset) — far left */}
          <div className="absolute bottom-[-24] left-[1%] w-[7.5rem] md:w-[9rem] lg:w-[16.5rem]">
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
          <div className="absolute bottom-[-24] left-[14%] w-14 md:w-16 lg:w-34">
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
          <div className="absolute bottom-1 left-[26%] w-[6.5rem] md:w-[8rem] lg:w-[11rem]">
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
          <div className="absolute bottom-2 left-[42%] hidden w-14 sm:block md:w-16 lg:w-22">
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
          <div className="absolute bottom-10 left-[47%] w-20 md:w-24 lg:w-39">
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
          <div className="absolute bottom-0 left-[58%] hidden w-[5.5rem] md:block md:w-[6.5rem] lg:w-[7.5rem]">
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
          <div className="absolute bottom-0 left-[74%] hidden w-[5rem] md:block md:w-[6rem] lg:w-[7rem]">
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
          <div className="absolute bottom-[-12%] right-[-1%] w-[6.5rem] md:w-[8rem] lg:w-[14rem] scale-x-[-1] ">
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
    </section>
  );
}

function OrganicDecor({
  variant = "hero",
}: {
  variant?: "hero" | "quiet" | "care";
}) {
  const muted = variant === "quiet";

  return (
    <>
      <div
        className="absolute -left-32 top-24 h-72 w-72 rounded-[48%_52%_61%_39%] bg-moss/10 blur-xl md:h-112 md:w-md"
        style={{ transform: "translateZ(0)", willChange: "transform" }}
      />
      <div
        className="absolute -right-28 bottom-12 h-80 w-80 rounded-[58%_42%_45%_55%] bg-gold/10 blur-xl md:h-120 md:w-120"
        style={{ transform: "translateZ(0)", willChange: "transform" }}
      />
      <span
        className={`float-leaf absolute left-[10%] top-[22%] h-12 w-6 rounded-full border border-forest/12 ${muted ? "opacity-20" : "opacity-45"}`}
        style={{ transform: "rotate(-28deg)", borderRadius: "80% 12% 80% 12%" }}
      />
      <span
        className={`float-leaf absolute right-[12%] top-[34%] h-16 w-8 rounded-full border border-gold/24 ${muted ? "opacity-20" : "opacity-45"}`}
        style={{ transform: "rotate(22deg)", borderRadius: "14% 80% 12% 80%" }}
      />
      <span
        className={`float-leaf absolute bottom-[16%] left-[22%] h-10 w-5 rounded-full bg-forest/8 ${variant === "care" ? "opacity-45" : "opacity-25"}`}
        style={{ transform: "rotate(42deg)", borderRadius: "80% 12% 80% 12%" }}
      />
    </>
  );
}
