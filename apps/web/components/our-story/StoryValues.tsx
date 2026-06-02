"use client";
import { useInView } from "@/hooks/useInView";
import Image from "next/image";
import { useState } from "react";

const values = [
  {
    title: "Rooted in Tradition",
    description:
      "Makhana cultivation in Bihar dates back centuries. Our farmers follow the same time-honoured methods — hand-harvesting lotus seeds from natural ponds, sun-drying them to perfection, and roasting them over open flames. We don't cut corners. We preserve the craft.",
    image: "/images/pic1.jpg",
  },
  {
    title: "Community First",
    description:
      "Every pack of Glen Harvest directly supports farming families in Bihar's Mithilanchal region. We pay fair prices, provide stable demand, and invest in the communities that make our product possible. When you snack on Glen Harvest, you're supporting livelihoods.",
    image: "/images/pic2.jpg",
  },
  {
    title: "Uncompromising Quality",
    description:
      "From pond to pack, every batch is tested for purity, freshness, and crunch. We reject anything that doesn't meet our standards — no exceptions. Our facility follows strict food safety protocols, and we never use artificial flavours or preservatives.",
    image: "/images/pic3.jpg",
  },
  {
    title: "Sustainable Harvesting",
    description:
      "Makhana grows naturally in ponds without pesticides, fertilizers, or intensive farming. It's one of the most eco-friendly crops on the planet. By choosing makhana over processed snacks, you're making a choice that's good for you and gentle on the earth.",
    image: "/images/pic4.jpg",
  },
  {
    title: "From Bihar to Your Bowl",
    description:
      "We handle the entire journey — sourcing, roasting, seasoning, and packing — to ensure nothing is lost between the harvest and your hands. No middlemen, no compromises. Just pure, honest makhana delivered fresh to your doorstep.",
    image: "/images/pic5.jpg",
  },
];

function StoryValues() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, isInView } = useInView<HTMLElement>(0.05);
  return (
    <section
      ref={ref}
      className="bg-brand-green py-24 md:py-32 overflow-hidden"
    >
      <div className="mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_1fr] gap-8 lg:gap-12">
          {/* Left - Value Titles */}
          <div
            className={`flex flex-col transition-all duration-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {values.map((value, index) => (
              <button
                key={value.title}
                onMouseEnter={() => setActiveIndex(index)}
                className={`text-left py-4 border-b transition-all duration-300 ${
                  activeIndex === index
                    ? "border-white"
                    : "border-white/15 hover:border-white/40"
                }`}
              >
                <span
                  className={`font-heading text-lg md:text-xl font-medium transition-colors duration-300 ${
                    activeIndex === index ? "text-white" : "text-white/40"
                  }`}
                >
                  {value.title}
                </span>
              </button>
            ))}
          </div>
          {/* Center - Description */}
          <div
            className={`flex items-start pt-4 transition-all duration-1000 delay-300 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p
              key={`desc-${activeIndex}`}
              className="font-sans text-base md:text-lg text-white/70 leading-relaxed animate-fade-in"
            >
              {values[activeIndex]?.description}
            </p>
          </div>
          {/* Right - Image */}
          <div
            className={`relative aspect-4/5 overflow-hidden rounded-lg transition-all duration-1000 delay-500 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Image
              key={`img-${activeIndex}`}
              src={values[activeIndex]?.image ?? ""}
              alt={values[activeIndex]?.title ?? ""}
              fill
              className="object-cover animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StoryValues;
