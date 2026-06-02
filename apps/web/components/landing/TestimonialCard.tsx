import type { Testimonial } from "@/lib/landing-data";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="reveal rounded-lg border border-cream/15 bg-cream/[0.07] p-7 text-cream shadow-soft backdrop-blur-md">
      <p className="font-serif text-2xl leading-9 text-cream/90">
        "{testimonial.quote}"
      </p>
      <div className="mt-8">
        <p className="font-semibold">{testimonial.name}</p>
        <p className="mt-1 text-sm text-cream/55">{testimonial.role}</p>
      </div>
    </article>
  );
}
