"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { CraftedSection } from "./CraftedSection";
import { CtaSection } from "./CtaSection";
import { FlavorsSection } from "./FlavorsSection";
import { HeroSection } from "./HeroSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { WhyMakhanaSection } from "./WhyMakhanaSection";

/* Layout effect on the client (runs before paint → no intro flash),
   plain effect on the server (avoids the SSR useLayoutEffect warning). */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

gsap.registerPlugin(ScrollTrigger);

export function LandingPage() {
  const rootRef = useRef<HTMLElement | null>(null);

  /* ─── Hero load-in intro ─────────────────────────────────────────
     Runs before first paint so the initial hidden state never flashes.
     Text slides in from the left; images pop in (scale + fade) with a
     gentle overshoot. Uses data-* hooks only — no style/layout edits —
     and clearProps restores the pristine transforms when done. */
  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const hero = root.querySelector<HTMLElement>("#home");
    if (!hero) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return; // hero is naturally visible — leave it

    const ctx = gsap.context(() => {
      const pick = (sel: string) =>
        Array.from(hero.querySelectorAll<HTMLElement>(sel));

      const sky = pick("[data-hero-sky] img");
      const sun = pick("[data-hero-sun]");
      const treebg = pick("[data-hero-treebg]");
      const wordmark = pick("[data-hero-wordmark]");
      const headline = pick("[data-hero-headline] span");
      const pack = pick("[data-hero-pack]");
      const diorama = pick("[data-hero-diorama] img");

      /* Initial hidden states — applied synchronously before paint */
      gsap.set(sky, { autoAlpha: 0, scale: 0.92, transformOrigin: "50% 50%" });
      gsap.set(sun, { autoAlpha: 0, scale: 0.55, transformOrigin: "50% 50%" });
      gsap.set(treebg, { autoAlpha: 0, yPercent: 12 });
      gsap.set(pack, { autoAlpha: 0, scale: 0.78, transformOrigin: "50% 82%" });
      gsap.set(diorama, {
        autoAlpha: 0,
        scale: 0.5,
        yPercent: 16,
        transformOrigin: "50% 100%",
      });
      gsap.set([...wordmark, ...headline], { autoAlpha: 0, x: -48 });

      const intro = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.12,
      });

      intro
        .to(sky, { autoAlpha: 1, scale: 1, duration: 1.1, stagger: 0.1 }, 0)
        .to(
          sun,
          { autoAlpha: 1, scale: 1, duration: 1, ease: "back.out(1.5)" },
          0.05,
        )
        .to(treebg, { autoAlpha: 1, yPercent: 0, duration: 1.1 }, 0.1)
        .to(wordmark, { autoAlpha: 1, x: 0, duration: 0.85 }, 0.28)
        .to(
          headline,
          { autoAlpha: 1, x: 0, duration: 0.85, stagger: 0.14 },
          0.42,
        )
        .to(
          pack,
          { autoAlpha: 1, scale: 1, duration: 1, ease: "back.out(1.4)" },
          0.52,
        )
        .to(
          diorama,
          {
            autoAlpha: 1,
            scale: 1,
            yPercent: 0,
            duration: 0.85,
            stagger: 0.07,
            ease: "back.out(1.7)",
          },
          0.62,
        )
        .set(
          [
            ...sky,
            ...sun,
            ...treebg,
            ...wordmark,
            ...headline,
            ...pack,
            ...diorama,
          ],
          { clearProps: "transform" },
        );
    }, root);

    return () => ctx.revert();
  }, []);

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
      <WhyMakhanaSection />
      <FlavorsSection />
      <CraftedSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  );
}
