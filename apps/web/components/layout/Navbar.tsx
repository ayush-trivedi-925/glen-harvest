"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Private Labeling", href: "/private-labeling" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const linkRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  const activeIndex = links.findIndex((link) => link.href === pathname);

  /* Move the sliding pill to the hovered link, or fall back to the active one */
  useEffect(() => {
    const targetIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;
    const target = linkRefs.current[targetIndex];
    if (target) {
      setIndicator({
        left: target.offsetLeft,
        width: target.offsetWidth,
        opacity: 1,
      });
    } else {
      setIndicator((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [hoveredIndex, activeIndex, pathname]);

  /* Compress the navbar a touch once the user starts scrolling */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close menu whenever the route changes */
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  /* Lock body scroll while the mobile sheet is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        data-navbar
        className={cn(
          "fixed inset-x-0 z-50 mx-auto flex w-[calc(100%-1.5rem)] max-w-6xl items-center rounded-full border px-4 transition-all duration-500 ease-out md:px-6",
          scrolled
            ? "top-2 h-14 border-cream/10 bg-forest/95 shadow-premium backdrop-blur-xl md:top-3 md:h-16"
            : "top-4 h-16 border-white/40 bg-forest shadow-soft backdrop-blur-xl md:top-6 md:h-20",
        )}
      >
        <nav className="flex w-full items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center"
            aria-label="Glen Harvest home"
          >
            <Image
              src="/images/glen-harvest-logo-nobg.png"
              width={160}
              height={160}
              alt="Glen Harvest Premium Makhana"
              className={cn(
                "w-auto transition-all duration-500 group-hover:scale-[1.03]",
                scrolled ? "h-10 md:h-11" : "h-12 md:h-14",
              )}
              priority
            />
          </Link>

          {/* Desktop nav — sliding indicator + links */}
          <div
            className="relative hidden items-center lg:flex"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              aria-hidden
              className="absolute top-1/2 h-10 -translate-y-1/2 rounded-full bg-cream/10 ring-1 ring-cream/15 transition-all duration-300 ease-out"
              style={{
                left: indicator.left,
                width: indicator.width,
                opacity: indicator.opacity,
              }}
            />

            {links.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  ref={(el) => {
                    linkRefs.current[i] = el;
                  }}
                  href={link.href}
                  onMouseEnter={() => setHoveredIndex(i)}
                  className={cn(
                    "relative px-5 py-2.5 text-sm font-medium tracking-wide transition-colors duration-300",
                    isActive ? "text-cream" : "text-cream/65 hover:text-cream",
                  )}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_8px_rgba(183,145,74,0.6)]"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right side — Shop Now + hamburger */}
          <div className="flex items-center gap-2">
            <Link
              href="#products"
              className="group relative hidden items-center gap-2 overflow-hidden rounded-full bg-botanical px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-cream transition-all duration-300 hover:bg-gold hover:text-forest hover:shadow-lg hover:shadow-gold/20 sm:inline-flex"
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-cream/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              <ShoppingBag
                className="relative z-10 h-3.5 w-3.5"
                strokeWidth={2.25}
              />
              <span className="relative z-10">Shop Now</span>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-botanical text-cream transition-all duration-300 hover:bg-gold hover:text-forest lg:hidden"
            >
              <div className="relative h-5 w-5">
                <Menu
                  className={cn(
                    "absolute inset-0 h-5 w-5 transition-all duration-300",
                    isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100",
                  )}
                />
                <X
                  className={cn(
                    "absolute inset-0 h-5 w-5 transition-all duration-300",
                    isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0",
                  )}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        aria-hidden
        className={cn(
          "fixed inset-0 z-30 bg-botanical/40 backdrop-blur-sm transition-opacity duration-500 lg:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* Mobile / Tablet menu sheet */}
      <div
        className={cn(
          "fixed inset-x-3 z-40 mx-auto max-w-6xl origin-top overflow-hidden rounded-3xl border border-cream/10 bg-forest/95 backdrop-blur-2xl transition-all duration-500 ease-out lg:hidden",
          isOpen
            ? "top-22 scale-100 opacity-100 shadow-premium md:top-32"
            : "pointer-events-none top-20 scale-95 opacity-0 md:top-28",
        )}
        style={{ maxHeight: isOpen ? "32rem" : "0" }}
      >
        <div className="flex flex-col gap-1 p-5 md:p-6">
          {links.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  animation: isOpen
                    ? `navItemIn 0.4s ease-out ${i * 60 + 100}ms both`
                    : "none",
                }}
                className={cn(
                  "group flex items-center justify-between rounded-2xl px-5 py-4 text-base font-medium transition-all duration-300",
                  isActive
                    ? "bg-cream/10 text-cream ring-1 ring-cream/15"
                    : "text-cream/65 hover:bg-cream/5 hover:text-cream",
                )}
              >
                <span>{link.label}</span>
                <span
                  aria-hidden
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-all duration-300",
                    isActive
                      ? "bg-gold shadow-[0_0_8px_rgba(183,145,74,0.6)]"
                      : "bg-cream/0 group-hover:bg-cream/30",
                  )}
                />
              </Link>
            );
          })}

          <Link
            href="#products"
            onClick={() => setIsOpen(false)}
            style={{
              animation: isOpen
                ? `navItemIn 0.4s ease-out ${links.length * 60 + 100}ms both`
                : "none",
            }}
            className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-gold px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-forest transition-all duration-300 hover:bg-cream sm:hidden"
          >
            <ShoppingBag className="h-4 w-4" strokeWidth={2.25} />
            Shop Now
          </Link>
        </div>
      </div>
    </>
  );
}
