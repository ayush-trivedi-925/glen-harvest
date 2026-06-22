"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaShareNodes,
} from "react-icons/fa6";

/* TODO: replace these with your real profile URLs */
const socials = [
  { href: "https://instagram.com", label: "Instagram", Icon: FaInstagram },
  { href: "https://x.com", label: "X (Twitter)", Icon: FaXTwitter },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: FaLinkedinIn },
  { href: "https://facebook.com", label: "Facebook", Icon: FaFacebookF },
  { href: "https://youtube.com", label: "YouTube", Icon: FaYoutube },
];

/* Floating social dock — a round button (bottom-left) that expands into a
   horizontal drawer of social icons. Opens on hover (mouse) or tap (touch);
   closes on mouse-leave, a second tap, a tap outside, or Escape. */
export default function SocialDock() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onOutside = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") setOpen(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") setOpen(false);
      }}
      className="fixed bottom-6 left-6 z-50"
    >
      <div className="flex items-center rounded-full bg-forest text-cream shadow-premium ring-1 ring-cream/10">
        {/* Handle — tap to toggle (touch), focusable for keyboard */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? "Hide social links" : "Show social links"}
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
        >
          <FaShareNodes
            className={`h-[17px] w-[17px] transition-transform duration-500 ease-out ${
              open ? "rotate-[360deg]" : ""
            }`}
          />
        </button>

        {/* Drawer */}
        <div
          className={`flex items-center gap-1 overflow-hidden transition-all duration-500 ease-out ${
            open
              ? "visible max-w-[15rem] pr-2 opacity-100"
              : "invisible max-w-0 pr-0 opacity-0"
          }`}
        >
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-cream/75 transition-colors duration-300 hover:bg-cream hover:text-forest"
            >
              <Icon className="h-[17px] w-[17px]" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
