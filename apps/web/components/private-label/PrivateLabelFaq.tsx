"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/landing/Section";
import OrganicDecor from "@/components/shared/OrganicDecor";

const faqs = [
  {
    q: "What's the minimum order quantity?",
    a: "Our standard MOQ starts at 2,000 units per SKU for custom packaging, and 500 units for pre-existing packaging templates. For first-time partners, we often work with smaller pilot batches to help you test the market.",
  },
  {
    q: "How long does the full process take?",
    a: "From initial conversation to delivered product, expect 6-10 weeks. Flavor development typically takes 2-3 weeks, sample approval 1-2 weeks, and production 3-5 weeks depending on order size.",
  },
  {
    q: "Can I use my own packaging design?",
    a: "Absolutely. You can provide print-ready files, or work with our design team to develop packaging that meets your brand standards. We handle the printing and assembly either way.",
  },
  {
    q: "What flavors can you produce?",
    a: "We have a library of proven flavor profiles (mint, peri peri, classic salt, masala, and more), and we can develop custom flavors based on your direction. Spicy, savory, sweet — most directions are possible.",
  },
  {
    q: "Do you handle certifications and compliance?",
    a: "Yes. All our products are FSSAI certified, and we provide complete documentation including ingredient lists, nutritional analysis, and shelf-life testing. Export documentation is available for international orders.",
  },
  {
    q: "What if I want to scale up after my first order?",
    a: "We're built for growing brands. Repeat orders move faster (typically 2-3 weeks), and we offer volume-based pricing that improves as your order sizes increase.",
  },
];

export default function PrivateLabelFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <Section tone="cream" className="flex items-center py-28">
      <OrganicDecor variant="quiet" />
      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 md:px-8">
        <div className="text-center">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            — Questions
          </p>
          <h2 className="reveal mt-5 font-serif text-5xl font-semibold leading-[0.95] text-forest md:text-7xl">
            Frequently asked.
          </h2>
        </div>
        <div className="mt-14 space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className="reveal overflow-hidden rounded-2xl border border-forest/10 bg-white/40 backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left transition hover:bg-white/20"
              >
                <span className="font-serif text-xl font-semibold text-forest md:text-2xl">
                  {faq.q}
                </span>
                <ChevronDown
                  size={22}
                  className={`shrink-0 text-forest/60 transition-transform duration-300 ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  openFaq === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-7 pb-6 text-base leading-8 text-forest/68">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
