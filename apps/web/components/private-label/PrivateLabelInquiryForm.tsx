"use client";

import { useState } from "react";
import Image from "next/image";
import { Section } from "@/components/landing/Section";
import OrganicDecor from "@/components/shared/OrganicDecor";
import FormField from "@/components/ui/FormField";

export default function PrivateLabelInquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    launchDate: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Private label inquiry:", formData);
    setSubmitted(true);
  };

  return (
    <Section id="inquiry" tone="cream" className="flex items-center py-28">
      <OrganicDecor variant="care" />

      {/* Decorative product packet floating in background */}
      <div className="absolute right-[-8%] top-[10%] hidden opacity-30 lg:block">
        <div className="relative h-[28rem] w-[20rem] rotate-12">
          <Image
            src="/images/products/mint-masti.png"
            alt=""
            fill
            className="object-contain"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            — Start your inquiry
          </p>
          <h2 className="reveal mt-5 font-serif text-5xl font-semibold leading-[0.95] text-forest md:text-7xl">
            Tell us about your project.
          </h2>
          <p className="reveal mx-auto mt-8 max-w-xl text-base leading-8 text-forest/68">
            Share a few details and we&apos;ll get back within 48 hours with
            next steps, a sample timeline, and indicative pricing for your
            volume.
          </p>
        </div>

        {/* Form card */}
        <div className="reveal mx-auto mt-16 max-w-3xl">
          {submitted ? (
            <div className="relative overflow-hidden rounded-3xl border border-forest/10 bg-white/60 p-12 text-center shadow-premium backdrop-blur-md">
              <div className="absolute right-0 top-0 h-40 w-40 -translate-y-12 translate-x-12 rounded-full bg-gold/15 blur-2xl" />
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-forest/8">
                <svg
                  className="h-8 w-8 text-forest"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-4xl font-semibold text-forest">
                Inquiry received.
              </h3>
              <p className="mx-auto mt-4 max-w-md text-base leading-8 text-forest/68">
                Thank you for reaching out. Our team will be in touch within 48
                hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-3xl border border-forest/10 bg-white/60 p-8 shadow-premium backdrop-blur-md md:p-12"
            >
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
              <div className="absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-moss/10 blur-3xl" />

              <div className="relative space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <FormField
                    label="Phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 xxx xxxx xxx"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@brand.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <FormField
                    label="Location"
                    name="location"
                    placeholder="City, Country"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>

                <FormField
                  label="When are you planning to launch?"
                  name="launchDate"
                  placeholder="Approximate timeline"
                  value={formData.launchDate}
                  onChange={handleChange}
                  required
                />

                <FormField
                  label="Describe your project"
                  name="description"
                  placeholder="Tell us about your brand, target audience, and what you're imagining..."
                  value={formData.description}
                  onChange={handleChange}
                  required
                  multiline
                />

                <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-forest/55">
                    Or email{" "}
                    <a
                      href="mailto:hello@glenharvest.com"
                      className="text-forest underline underline-offset-4 hover:text-botanical"
                    >
                      hello@glenharvest.com
                    </a>
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream transition hover:bg-botanical"
                  >
                    Submit Inquiry
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
