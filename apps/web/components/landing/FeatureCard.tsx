import type { Feature } from "@/lib/landing-data";

export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article className="reveal border-t border-forest/14 py-6">
      <h3 className="font-serif text-2xl font-semibold text-forest">
        {feature.title}
      </h3>
      <p className="mt-3 max-w-sm text-sm leading-7 text-forest/66">
        {feature.body}
      </p>
    </article>
  );
}
