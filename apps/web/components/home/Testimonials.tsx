"use client";
import { useInView } from "@/hooks/useInView";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const testimonials = [
  {
    rating: 4.5,
    product: "Classic Roasted Makhana",
    review:
      "Been snacking on these for months now. The crunch is perfect and they're so light you don't feel guilty eating the whole pack. Way better than any chips. My kids love them too — finally a snack I don't have to hide!",
    customer: "Priya S, Delhi",
  },
  {
    rating: 5.0,
    product: "Peri Peri Makhana",
    review:
      "The peri peri flavour is absolutely spot on. Not too spicy, just the right kick. I ordered 2 packs and they were gone in 3 days. Already placed my next order. Best makhana I've tried and I've tried many brands.",
    customer: "Rahul M, Mumbai",
  },
  {
    rating: 4.5,
    product: "Premium Gift Box",
    review:
      "Ordered this as a Diwali gift for my in-laws and they couldn't stop talking about it. The packaging is beautiful and the quality is consistent every single time. I've been buying from Glen Harvest for all occasions now. Worth every rupee.",
    customer: "Anita K, Bangalore",
  },
  {
    rating: 5.0,
    product: "Cheese & Herbs Makhana",
    review:
      "I was skeptical about cheese flavoured makhana but wow — this is genuinely delicious. Great for movie nights. The herbs give it a gourmet feel. My friends thought I was serving some fancy imported snack!",
    customer: "Vikram P, Pune",
  },
  {
    rating: 4.5,
    product: "Himalayan Salt Makhana",
    review:
      "Simple, clean, and perfectly salted. This is my go-to work snack now. I keep a pack at my desk and it gets me through the afternoon without reaching for junk. Light on the stomach and actually tastes great.",
    customer: "Meera R, Chennai",
  },
];

function StarRating({ rating }: { rating: number }) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FaStar key={`full-${i}`} className="text-brand-gold" size={16} />,
    );
  }

  if (hasHalf) {
    stars.push(
      <FaStarHalfAlt key={"half"} className="text-brand-gold" size={16} />,
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <FaRegStar key={`empty-${i}`} className="text-brand-gold" size={16} />,
    );
  }

  return <div className="flex items-center gap-0.5">{stars}</div>;
}

function Testimonials() {
  const { ref, isInView } = useInView<HTMLElement>(0.1);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 400;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={ref}
      className="bg-brand-cream py-24 md:py-32 overflow-hidden"
    >
      <div className="mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-32">
        {/* Header */}
        <div
          className={`flex items-end justify-between mb-12 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-brand-text leading-[1.1] tracking-tight">
            What Our <br />
            Customers Say
          </h2>
          {/* Navigation Arrows */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-brand-text/20 flex items-center justify-center text-brand-text hover:bg-brand-green hover:text-white transition-all duration-200"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-brand-text/20 flex items-center justify-center text-brand-text hover:bg-brand-green hover:border-brand-green hover:text-white transition-all duration-200"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        {/* Testimonial Cards = Horizontal Scroll */}
        <div
          ref={scrollRef}
          className={`flex gap-6 overflow-x-auto pb-4 no-scrollbar scrollbar-hide transition-all duration-1000 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.customer}
              className="shrink-0 w-[350] md:w-100 bg-brand-warm/50 rounded-lg p-8 flex flex-col justify-between"
            >
              {/* Rating + Score */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <StarRating rating={testimonial.rating} />
                  <span className="text-sm font-medium text-brand-text">
                    {testimonial.rating.toFixed(1)}
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="font-heading text-lg font-semibold text-brand-text mb-4">
                  {testimonial.product}
                </h3>
                {/* Review */}
                <p className="text-sm text-brand-muted leading-relaxed mb-6">
                  &ldquo;{testimonial.review}&rdquo;
                </p>
              </div>
              <p className="text-sm font-medium text-brand-text">
                {testimonial.customer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
