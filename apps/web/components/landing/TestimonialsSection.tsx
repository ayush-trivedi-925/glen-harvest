import { testimonials } from "@/lib/landing-data";
import { Section } from "./Section";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialsSection() {
  return (
    <Section id="testimonials" tone="deep" className="flex items-center py-28">
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
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </Section>
  );
}
