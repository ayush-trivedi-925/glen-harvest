import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaArrowRight,
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

const socialLinks = [
  { href: "https://facebook.com", icon: FaFacebookF, label: "Facebook" },
  { href: "https://instagram.com", icon: FaInstagram, label: "Instagram" },
  { href: "https://youtube.com", icon: FaYoutube, label: "YouTube" },
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

            {/* Newsletter */}
            <div className="mt-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                From our fields to your inbox
              </h3>
              <p className="mt-2 text-sm text-cream/60">
                Seasonal recipes, harvest stories, and the occasional exclusive
                offer.
              </p>
              {/* TODO: wire up to your newsletter service — replace action with your endpoint or a server action */}
              <form
                action="#"
                method="post"
                className="mt-4 flex max-w-md items-center gap-2"
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  aria-label="Email address"
                  className="min-w-0 flex-1 rounded-full border border-cream/15 bg-botanical/50 px-5 py-3 text-sm text-cream placeholder:text-cream/40 outline-none transition-all duration-300 focus:border-gold/50 focus:bg-botanical/70 focus:ring-2 focus:ring-gold/20"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="group flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gold text-forest transition-all duration-300 hover:bg-cream hover:shadow-lg hover:shadow-gold/30"
                >
                  <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              </form>
            </div>

            {/* Social */}
            <div className="mt-9">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Follow Us On
              </h3>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-forest"
                  >
                    <social.icon className="h-[15px] w-[15px] transition-transform duration-300 group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>
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
