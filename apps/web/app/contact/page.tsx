"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ContactForm from "@/components/ui/ContactForm";

export default function ContactPage() {
  const rootRef = useRef<HTMLElement | null>(null);

  /* ContactForm's content uses the global `.reveal` class, which starts
     hidden. This page is a single screen, so reveal it on mount. */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const els = root.querySelectorAll(".reveal");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      gsap.set(els, { autoAlpha: 1, y: 0 });
      return;
    }

    const tween = gsap.to(els, {
      autoAlpha: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.08,
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <main ref={rootRef} className="relative bg-cream">
      <ContactForm eyebrow="— Contact us" />
    </main>
  );
}
