"use client";
import { useInView } from "@/hooks/useInView";
import Image from "next/image";
import BrandButton from "../ui/BrandButton";

// https://fastly.picsum.photos/id/128/1920/1080.jpg?hmac=A9n9Hfj2w0ohm-zgX1FrZsnp7jH_iE-NR6RJhjuMv4A

function StoryCTA() {
  const { ref, isInView } = useInView<HTMLElement>(0.2);
  return (
    <section
      ref={ref}
      className="relative w-full py-32 md:py-44 overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="https://fastly.picsum.photos/id/128/1920/1080.jpg?hmac=A9n9Hfj2w0ohm-zgX1FrZsnp7jH_iE-NR6RJhjuMv4A"
        alt="Glen Harvest journey"
        fill
        className="object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      {/* Content */}
      <div className="relative z-10 mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 text-center">
        <p
          className={`font-heading text-2xl md:text-3xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-10 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          The future depends on what we choose to eat today.
        </p>
        <div
          className={`transition-all duration-1000 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <BrandButton
            href="/shop"
            className="inline-flex border-white bg-transparent text-white hover:bg-white hover:text-brand-text hover:border-white"
          >
            Shop The Range
          </BrandButton>
        </div>
      </div>
    </section>
  );
}

export default StoryCTA;
