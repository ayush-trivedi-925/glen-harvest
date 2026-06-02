"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import BrandButton from "@/components/ui/BrandButton";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function ContactPage() {
  const { ref, isInView } = useInView<HTMLDivElement>(0.05);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send to NestJS backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div ref={ref} className="bg-brand-cream min-h-screen">
      {/* Hero */}
      <section className="pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-32">
          <div className="max-w-2xl">
            <h1
              className={`font-heading text-5xl sm:text-6xl md:text-7xl font-semibold text-brand-text leading-[1.1] tracking-tight mb-6 transition-all duration-1000 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Talk to <span className="text-brand-green">us!</span>
            </h1>
            <p
              className={`font-sans text-base md:text-lg text-brand-muted leading-relaxed transition-all duration-1000 delay-200 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Have a question about our products, need help with an order, or
              just want to say hello? We&apos;d love to hear from you. Fill out
              the form below and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-32">
          <div
            className={`grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 lg:gap-24 transition-all duration-1000 delay-400 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Left - Form */}
            <div>
              {submitted ? (
                <div className="py-16">
                  <h2 className="font-heading text-3xl font-semibold text-brand-text mb-4">
                    Thank you!
                  </h2>
                  <p className="font-sans text-base text-brand-muted">
                    We&apos;ve received your message and will get back to you
                    shortly.
                  </p>
                </div>
              ) : (
                <form onScroll={handleSubmit} className="space-y-8">
                  {/* Name */}
                  <div className="space-y-3">
                    <Label
                      htmlFor="name"
                      className="font-sans text-base font-medium text-brand-text"
                    >
                      What&apos;s your name?
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="font-sans bg-transparent border-brand-text/20 text-brand-text placeholder:text-brand-muted/50 focus:border-brand-green focus:ring-brand-green/20 rounded-md px-4 py-3 text-base"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-3">
                    <Label
                      htmlFor="email"
                      className="font-sans text-base font-medium text-brand-text"
                    >
                      What&apos;s your email address?
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="font-sans bg-transparent border-brand-text/20 text-brand-text placeholder:text-brand-muted/50 focus:border-brand-green focus:ring-brand-green/20 rounded-md px-4 py-3 text-base"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-3">
                    <Label
                      htmlFor="phone"
                      className="font-sans text-base font-medium text-brand-text"
                    >
                      Your phone number (optional)
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="font-sans bg-transparent border-brand-text/20 text-brand-text placeholder:text-brand-muted/50 focus:border-brand-green focus:ring-brand-green/20 rounded-md px-4 py-3 text-base"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-3">
                    <Label
                      htmlFor="message"
                      className="font-sans text-base font-medium text-brand-text"
                    >
                      What&apos;s your question?
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="font-sans bg-transparent border-brand-text/20 text-brand-text placeholder:text-brand-muted/50 focus:border-brand-green focus:ring-brand-green/20 rounded-md px-4 py-3 text-base resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <div>
                    <BrandButton type="submit" className="inline-flex">
                      Submit
                    </BrandButton>
                    <p className="font-sans text-sm text-brand-muted mt-4">
                      We&apos;ll get back to you soon.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Right - Contact Info */}
            <div className="space-y-10">
              {/* Email */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Mail size={20} />
                  <h3 className="font-sans text-base font-semibold text-brand-text">
                    Prefer email?
                  </h3>
                </div>
                <p className="font-sans text-sm text-brand-muted mb-1">
                  You can also reach us at
                </p>
                <a
                  href="mailto:hello@glenharvest.com"
                  className="font-sans text-sm  hover:underline"
                >
                  hello@glenharvest.com
                </a>
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Phone size={20} />
                  <h3 className="font-sans text-base font-semibold text-brand-text">
                    Call us
                  </h3>
                </div>
                <p className="font-sans text-sm text-brand-muted mb-1">
                  Available Mon-Sat, 10am - 6pm IST
                </p>
                <a
                  href="tel:+919876543210"
                  className="font-sans text-sm hover:underline"
                >
                  +91 98765 43210
                </a>
              </div>

              {/* Address */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <MapPin size={20} />
                  <h3 className="font-sans text-base font-semibold text-brand-text">
                    Visit us
                  </h3>
                </div>
                <p className="font-sans text-sm text-brand-muted leading-relaxed">
                  Glen Harvest Foods Pvt. Ltd.
                  <br />
                  123 Business Park, Sector 5
                  <br />
                  New Delhi, India - 110001
                </p>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-sans text-base font-semibold text-brand-text mb-4">
                  Follow us
                </h3>
                <div className="flex items-center gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-full border border-brand-text/20 flex items-center justify-center text-brand-muted hover:bg-brand-green hover:border-brand-green hover:text-white transition-all duration-200"
                  >
                    <FaFacebookF size={16} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full border border-brand-text/20 flex items-center justify-center text-brand-muted hover:bg-brand-green hover:border-brand-green hover:text-white transition-all duration-200"
                  >
                    <FaInstagram size={16} />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-10 h-10 rounded-full border border-brand-text/20 flex items-center justify-center text-brand-muted hover:bg-brand-green hover:border-brand-green hover:text-white transition-all duration-200"
                  >
                    <FaYoutube size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
