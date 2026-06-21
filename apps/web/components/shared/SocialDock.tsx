"use client";

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
   horizontal drawer of social icons on hover or keyboard focus, and
   collapses back to the round button when the pointer/focus leaves. */
export default function SocialDock() {
  return (
    <div className="group fixed bottom-6 left-6 z-50">
      <div className="flex items-center rounded-full bg-forest text-cream shadow-premium ring-1 ring-cream/10">
        {/* Handle — always visible */}
        <span
          aria-hidden="true"
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center"
        >
          <FaShareNodes className="h-[17px] w-[17px] transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
        </span>

        {/* Drawer — collapsed to width 0, expands on hover/focus */}
        <div className="invisible flex max-w-0 items-center gap-1 overflow-hidden pr-0 opacity-0 transition-all duration-500 ease-out group-hover:visible group-hover:max-w-[15rem] group-hover:pr-2 group-hover:opacity-100">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-cream/75 outline-none transition-colors duration-300 hover:bg-cream hover:text-forest focus-visible:bg-cream focus-visible:text-forest"
            >
              <Icon className="h-[17px] w-[17px]" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
