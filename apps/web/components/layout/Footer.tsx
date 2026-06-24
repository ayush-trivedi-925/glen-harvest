import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaArrowRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaRegClock,
} from "react-icons/fa";

const quickLinks = [
  { href: "/contact", label: "Contact Us" },
  { href: "/our-story", label: "Our Story" },
  { href: "/white-labeling", label: "White Labeling" },
  { href: "/shop", label: "Shop" },
];

const productLinks = [
  { href: "/shop", label: "All Products" },
  { href: "/shop", label: "Classic Makhana" },
  { href: "/shop", label: "Flavored Makhana" },
  { href: "/shop", label: "Gift Boxes" },
];

const categoryLinks = [
  { href: "/shop", label: "Roasted" },
  { href: "/shop", label: "Seasoned" },
  { href: "/shop", label: "Premium" },
  { href: "/shop", label: "Combo Packs" },
];

const policyLinks = [
  { href: "/delivery", label: "Delivery" },
  { href: "/refunds", label: "Refunds" },
  { href: "/cancellation", label: "Cancellation" },
  { href: "/returns", label: "Returns" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        {title}
      </h3>
      <ul className="space-y-3.5">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-1.5 text-sm text-cream/65 transition-colors duration-300 hover:text-cream"
            >
              <span className="relative">
                {link.label}
                <span
                  aria-hidden
                  className="absolute -bottom-0.5 left-0 h-px w-0 bg-cream/60 transition-all duration-300 group-hover:w-full"
                />
              </span>
              <FaArrowRight
                aria-hidden
                className="h-2.5 w-2.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-70"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative z-30 overflow-hidden bg-forest text-cream">
      {/* Soft radial atmosphere — subtle warm glow from upper-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(183,145,74,0.08),transparent_55%)]"
      />

      {/* Top accent — echoes the navbar's gold active dot */}
      <div className="relative flex items-center justify-center px-6 pt-14">
        <div className="h-px w-full max-w-[180px] bg-gradient-to-r from-transparent via-gold/20 to-gold/40" />
        <div
          aria-hidden
          className="mx-3 h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_12px_rgba(183,145,74,0.55)]"
        />
        <div className="h-px w-full max-w-[180px] bg-gradient-to-l from-transparent via-gold/20 to-gold/40" />
      </div>

      {/* Main grid */}
      <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-16 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          {/* Brand block — spans 2 cols on desktop */}
          <div className="md:col-span-2 lg:col-span-2 lg:pr-8">
            <Link
              href="/"
              className="group inline-flex items-center"
              aria-label="Glen Harvest home"
            >
              <Image
                src="/images/glen-harvest-logo-nobg.png"
                width={160}
                height={160}
                alt="Glen Harvest Premium Makhana"
                className="h-14 w-auto transition-transform duration-500 group-hover:scale-[1.04] md:h-16"
              />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/70">
              Premium quality makhana, harvested from the ponds of Bihar and
              crafted with care for mindful, everyday snacking.
            </p>

            {/* Contact */}
            <address className="mt-8 not-italic">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Get In Touch
              </h3>
              <ul className="space-y-3.5 text-sm text-cream/70">
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt
                    aria-hidden
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold/80"
                  />
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold/70">
                      Manufactured &amp; Packed By
                    </span>
                    <br />
                    <span>
                      Torque Farmer Producer Company Limited
                      <br />
                      Killa No 38,8,1,1 Village Hansapur Aterna
                      <br />
                      Block Rai, Sonipat, Haryana 131023
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt
                    aria-hidden
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold/80"
                  />
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold/70">
                      Marketed By
                    </span>
                    <br />
                    <span>
                      Torque Farmer Producer Company Limited
                      <br />
                      Registered Office: Agapur, Begusarai,
                      <br />
                      Bihar 851128
                    </span>
                  </div>
                </li>
                <li>
                  {/* TODO: replace with your contact number */}
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-3 transition-colors duration-300 hover:text-cream"
                  >
                    <FaPhoneAlt
                      aria-hidden
                      className="h-4 w-4 flex-shrink-0 text-gold/80"
                    />
                    +91 99997 45726
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@glenharvest.com"
                    className="flex items-center gap-3 transition-colors duration-300 hover:text-cream"
                  >
                    <FaEnvelope
                      aria-hidden
                      className="h-4 w-4 flex-shrink-0 text-gold/80"
                    />
                    support@glenharvest.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FaRegClock
                    aria-hidden
                    className="h-4 w-4 flex-shrink-0 text-gold/80"
                  />
                  Mon – Sat: 9:00 AM – 6:00 PM
                </li>
              </ul>
            </address>

            {/* Social */}
          </div>

          {/* Link columns */}
          <FooterColumn title="Quick Links" links={quickLinks} />
          <FooterColumn title="Products" links={productLinks} />
          <FooterColumn title="Categories" links={categoryLinks} />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-cream/50">
              © {new Date().getFullYear()} Glen Harvest. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {policyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-cream/50 transition-colors duration-300 hover:text-cream"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Oversized wordmark sign-off */}
      <div
        aria-hidden
        className="pointer-events-none relative overflow-hidden px-6 pb-2 pt-4"
      >
        <div
          className="select-none text-center font-serif font-medium leading-[0.9] tracking-tight text-cream/[0.05]"
          style={{ fontSize: "clamp(3rem, 14vw, 12rem)" }}
        >
          Glen Harvest
        </div>
      </div>
    </footer>
  );
}

export default Footer;
