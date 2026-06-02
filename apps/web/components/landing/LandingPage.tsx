"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { benefits, features, flavors, testimonials } from "@/lib/landing-data";
import { BenefitCard } from "./BenifitCard";
import { FeatureCard } from "./FeatureCard";
import { ProductCard } from "./ProductCard";
import { ProductStage } from "./ProductStage";
import { Section } from "./Section";
import { TestimonialCard } from "./TestimonialCard";

gsap.registerPlugin(ScrollTrigger);

type Pose = { x: string; y: string; scale: number; rotation: number };

type Config = {
  heroMint: Pose;
  heroPeri: Pose;
  cardScale: number;
  cardRotMint: number;
  cardRotPeri: number;
  vMint: Pose;
  vPeri: Pose;
};

const DESKTOP: Config = {
  heroMint: { x: "28vw", y: "-16vh", scale: 0.8, rotation: 8 },
  heroPeri: { x: "14vw", y: "-12vh", scale: 0.88, rotation: -10 },
  cardScale: 0.82,
  cardRotMint: -3,
  cardRotPeri: 3,
  vPeri: { x: "28vw", y: "-6vh", scale: 0.72, rotation: -18 },
  vMint: { x: "14vw", y: "-6vh", scale: 0.72, rotation: 18 },
};

const TABLET: Config = {
  heroMint: { x: "-10vw", y: "-28vh", scale: 0.58, rotation: 8 },
  heroPeri: { x: "10vw", y: "-28vh", scale: 0.64, rotation: -8 },
  cardScale: 0.8,
  cardRotMint: -3,
  cardRotPeri: 3,
  vPeri: { x: "-10vw", y: "10vh", scale: 0.52, rotation: -16 },
  vMint: { x: "10vw", y: "10vh", scale: 0.52, rotation: 16 },
};

const MOBILE: Config = {
  heroMint: { x: "2vw", y: "10vh", scale: 0.55, rotation: 8 },
  heroPeri: { x: "-26vw", y: "10vh", scale: 0.55, rotation: -8 },
  cardScale: 0.75,
  cardRotMint: -3,
  cardRotPeri: 3,
  vPeri: { x: "-45vw", y: "16vh", scale: 0.6, rotation: -14 },
  vMint: { x: "-15vw", y: "16vh", scale: 0.6, rotation: 14 },
};

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
      const m = document.querySelector<HTMLElement>('[data-product="mint"]');
      const p = document.querySelector<HTMLElement>('[data-product="peri"]');
      if (m && p) {
        gsap.set(m, { ...DESKTOP.heroMint, autoAlpha: 1 });
        gsap.set(p, { ...DESKTOP.heroPeri, autoAlpha: 1 });
      }
      return;
    }

    /* ─────────────────────────────────────────────────────────
       1. Lenis smooth-scroll, hard-synced with GSAP ticker.
          If you already initialize Lenis in a layout/provider,
          DELETE this whole block (until the marker below).
    ──────────────────────────────────────────────────────────── */
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
    /* ── end of Lenis block ────────────────────────────────── */

    /* Global perf defaults */
    gsap.defaults({ overwrite: "auto" });
    ScrollTrigger.config({ ignoreMobileResize: true });

    const ctx = gsap.context(() => {
      const mint = document.querySelector<HTMLElement>('[data-product="mint"]');
      const peri = document.querySelector<HTMLElement>('[data-product="peri"]');
      if (!mint || !peri) return;

      /* Promote the moving products to their own GPU layers */
      gsap.set([mint, peri], { force3D: true, willChange: "transform" });

      /* ─── Batched reveals (one trigger, not 30+) ─────────── */
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

      /* ─── Ambient motion (auto-paused when tab not visible) ─ */
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

      const packs = gsap.to(".product-pack", {
        y: "+=14",
        rotation: "+=1.5",
        duration: 3.8,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0.45,
      });

      const onVisChange = () => {
        if (document.hidden) {
          floatLeaves.pause();
          packs.pause();
        } else {
          floatLeaves.play();
          packs.play();
        }
      };
      document.addEventListener("visibilitychange", onVisChange);

      /* ─── Pinning (invalidate on refresh prevents stale layout) ─ */
      ScrollTrigger.create({
        trigger: "[data-pin='hero']",
        start: "top top",
        end: "+=42%",
        pin: true,
        pinSpacing: false,
        invalidateOnRefresh: true,
      });
      ScrollTrigger.create({
        trigger: "[data-pin='products']",
        start: "top top",
        end: "+=55%",
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
      });
      ScrollTrigger.create({
        trigger: "[data-pin='cta']",
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
      });

      const mm = gsap.matchMedia();

      const build = (cfg: Config) => {
        gsap.set(mint, { ...cfg.heroMint, autoAlpha: 1 });
        gsap.set(peri, { ...cfg.heroPeri, autoAlpha: 1 });

        gsap.from(peri, {
          autoAlpha: 0,
          scale: cfg.heroPeri.scale * 0.8,
          duration: 1.1,
          ease: "power3.out",
        });
        gsap.from(mint, {
          autoAlpha: 0,
          scale: cfg.heroMint.scale * 0.8,
          duration: 1.1,
          ease: "power3.out",
          delay: 0.08,
        });

        const toHero = () => {
          gsap.to(peri, {
            ...cfg.heroPeri,
            autoAlpha: 1,
            duration: 0.6,
            ease: "power3.out",
            overwrite: "auto",
          });
          gsap.to(mint, {
            ...cfg.heroMint,
            autoAlpha: 1,
            duration: 0.6,
            ease: "power3.out",
            overwrite: "auto",
          });
        };

        const hide = () => {
          gsap.to([mint, peri], {
            autoAlpha: 0,
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        const landOn = (
          bag: HTMLElement,
          target: Element,
          scale: number,
          rotation: number,
          fromLeft: boolean,
        ) => {
          gsap.set(bag, {
            x: fromLeft ? "-80vw" : "80vw",
            y: "0vh",
            scale,
            rotation,
            autoAlpha: 1,
          });
          const t = target.getBoundingClientRect();
          const b = bag.getBoundingClientRect();
          const dx = t.left + t.width / 2 - (b.left + b.width / 2);
          const dy = t.top + t.height / 2 - (b.top + b.height / 2) - 120;
          gsap.to(bag, {
            x: "+=" + dx,
            y: "+=" + dy,
            duration: 0.85,
            ease: "power3.out",
            overwrite: "auto",
          });
        };

        const toCards = () => {
          /* Read DOM after the pin has settled */
          requestAnimationFrame(() => {
            const cards = Array.from(
              document.querySelectorAll<HTMLElement>(
                "[data-pin='products'] .product-card",
              ),
            );
            if (cards.length < 2) return;
            const [first, second] = cards;
            if (!first || !second) return;
            const mockOf = (c: HTMLElement) =>
              c.querySelector<HTMLElement>("[class*='rounded-[1.8rem]']") ?? c;
            landOn(mint, mockOf(first), cfg.cardScale, cfg.cardRotMint, true);
            landOn(peri, mockOf(second), cfg.cardScale, cfg.cardRotPeri, false);
          });
        };

        const toV = () => {
          gsap.set(peri, {
            x: "85vw",
            y: cfg.vPeri.y,
            scale: cfg.vPeri.scale,
            rotation: cfg.vPeri.rotation,
            autoAlpha: 1,
          });
          gsap.set(mint, {
            x: "85vw",
            y: cfg.vMint.y,
            scale: cfg.vMint.scale,
            rotation: cfg.vMint.rotation,
            autoAlpha: 1,
          });
          gsap.to(peri, {
            x: cfg.vPeri.x,
            duration: 0.8,
            ease: "power3.out",
            overwrite: "auto",
          });
          gsap.to(mint, {
            x: cfg.vMint.x,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.06,
            overwrite: "auto",
          });
        };

        /* fastScrollEnd + preventOverlaps:
           - fastScrollEnd forces the leave callback to fire even
             if the user scroll-blasts past a section
           - preventOverlaps groups these triggers so only the most
             recent one's callbacks "win" — no more racing tweens. */
        ScrollTrigger.create({
          trigger: "#about",
          start: "top 70%",
          fastScrollEnd: true,
          preventOverlaps: "products",
          onEnter: hide,
          onLeaveBack: toHero,
        });

        ScrollTrigger.create({
          trigger: "[data-pin='products']",
          start: "top top",
          end: "+=55%",
          fastScrollEnd: true,
          preventOverlaps: "products",
          onEnter: toCards,
          onEnterBack: toCards,
          onLeave: hide,
          onLeaveBack: hide,
        });

        ScrollTrigger.create({
          trigger: "[data-pin='cta']",
          start: "top top",
          end: "+=80%",
          fastScrollEnd: true,
          preventOverlaps: "products",
          onEnter: toV,
          onEnterBack: toV,
          onLeave: hide,
          onLeaveBack: hide,
        });
      };

      mm.add("(min-width: 1024px)", () => build(DESKTOP));
      mm.add("(min-width: 640px) and (max-width: 1023.98px)", () =>
        build(TABLET),
      );
      mm.add("(max-width: 639.98px)", () => build(MOBILE));

      /* Refresh after fonts + images settle — fixes the
         "wrong positions on first load" problem. */
      const refresh = () => ScrollTrigger.refresh();
      if (document.readyState === "complete") {
        refresh();
      } else {
        window.addEventListener("load", refresh, { once: true });
      }
      if (document.fonts?.ready) {
        document.fonts.ready.then(refresh);
      }

      /* Local cleanup for the visibility listener */
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
      <ProductStage />

      <Section
        id="home"
        tone="cream"
        data-pin="hero"
        className="flex items-center"
      >
        <OrganicDecor />
        <div className="relative z-10 mx-auto grid w-full max-w-6xl px-6 pb-24 pt-32 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-8 lg:pt-40">
          <div className="max-w-3xl">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.32em] text-gold">
              Premium roasted makhana
            </p>
            <h1 className="reveal mt-6 font-serif text-[clamp(4.2rem,11vw,9.5rem)] font-semibold leading-[0.82] text-forest text-balance">
              Nature&apos;s Crunch, Perfectly Harvested.
            </h1>
            <p className="reveal mt-8 max-w-xl text-base leading-8 text-forest/68 md:text-lg">
              Premium roasted makhana crafted with wholesome ingredients and
              bold flavors.
            </p>
            <div className="reveal mt-10 flex flex-wrap gap-4">
              <a
                href="#products"
                className="rounded-full bg-forest px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-cream transition hover:bg-botanical"
              >
                Explore Flavors
              </a>
              <a
                href="#about"
                className="rounded-full border border-forest/20 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-forest transition hover:border-forest/45 hover:bg-white/35"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 z-10 h-px w-24 -translate-x-1/2 bg-forest/20" />
      </Section>

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

      <Section
        id="products"
        tone="warm"
        data-pin="products"
        className="flex items-center py-28"
      >
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#eaf0df] to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-earth">
              Current flavors
            </p>
            <h2 className="reveal mt-5 font-serif text-6xl font-semibold leading-none text-forest md:text-8xl">
              Two bold paths to a better crunch.
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {flavors.map((flavor) => (
              <ProductCard key={flavor.id} flavor={flavor} />
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
        <div className="absolute left-1/2 top-16 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-cream/5 blur-3xl" />
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

      <Section
        id="contact"
        tone="cream"
        data-pin="cta"
        className="flex items-center py-28"
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

function OrganicDecor({
  variant = "hero",
}: {
  variant?: "hero" | "quiet" | "care";
}) {
  const muted = variant === "quiet";

  /* Reduced blur radius + GPU-promoted via transform.
     The old `blur-2xl` on 34rem blobs was the #1 paint cost. */
  return (
    <>
      <div
        className="absolute -left-32 top-24 h-72 w-72 rounded-[48%_52%_61%_39%] bg-moss/10 blur-xl md:h-[28rem] md:w-[28rem]"
        style={{ transform: "translateZ(0)", willChange: "transform" }}
      />
      <div
        className="absolute -right-28 bottom-12 h-80 w-80 rounded-[58%_42%_45%_55%] bg-gold/10 blur-xl md:h-[30rem] md:w-[30rem]"
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
