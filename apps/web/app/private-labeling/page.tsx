"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrivateLabelHero from "@/components/private-label/PrivateLabelHero";
import PrivateLabelTrustedBy from "@/components/private-label/PrivateLabelTrustedBy";
import PrivateLabelWhatIs from "@/components/private-label/PrivateLabelWhatIs";
import PrivateLabelAudience from "@/components/private-label/PrivateLabelAudience";
import PrivateLabelBenefits from "@/components/private-label/PrivateLabelBenefits";
import PrivateLabelCustomize from "@/components/private-label/PrivateLabelCustomize";
import PrivateLabelProcess from "@/components/private-label/PrivateLabelProcess";
import PrivateLabelComparison from "@/components/private-label/PrivateLabelComparison";
import PrivateLabelNumbers from "@/components/private-label/PrivateLabelNumbers";
import PrivateLabelTestimonial from "@/components/private-label/PrivateLabelTestimonial";
import PrivateLabelFaq from "@/components/private-label/PrivateLabelFaq";
import PrivateLabelInquiryForm from "@/components/private-label/PrivateLabelInquiryForm";

gsap.registerPlugin(ScrollTrigger);

export default function PrivateLabelingPage() {
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

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((item) => {
        gsap.to(item, {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 84%", once: true },
        });
      });

      gsap.to(".parallax-slow", {
        y: -60,
        scrollTrigger: {
          trigger: ".parallax-slow",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".float-leaf", {
        y: "random(-18, 18)",
        x: "random(-10, 10)",
        rotation: "random(-8, 8)",
        duration: "random(3.8, 6.2)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={rootRef} className="relative bg-cream">
      <PrivateLabelHero />
      {/* <PrivateLabelTrustedBy /> */}
      <PrivateLabelWhatIs />
      <PrivateLabelAudience />
      <PrivateLabelBenefits />
      <PrivateLabelCustomize />
      <PrivateLabelProcess />
      <PrivateLabelComparison />
      <PrivateLabelNumbers />
      <PrivateLabelTestimonial />
      <PrivateLabelFaq />
      <PrivateLabelInquiryForm />
    </main>
  );
}
