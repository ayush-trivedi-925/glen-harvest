"use client";

import { useInView } from "@/hooks/useInView";

import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

function WhiteLabelForm() {
  const { ref, isInView } = useInView<HTMLElement>(0.05);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    estimatedQuantity: "",
    productInterest: "",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send to NestJS backend
    console.log("White Label Inquiry:", formData);
    setSubmitted(true);
  };

  const inputClasses =
    "font-sans bg-transparent border-brand-text/20 text-brand-text placeholder:text-brand-muted/50 focus:border-brand-green focus:ring-brand-green/20 rounded-md px-4 py-3 text-base";

  return (
    <section
      ref={ref}
      id="inquiry-form"
      className="bg-brand-cream py-24 md:py-32 overflow-hidden"
    >
      <div className="mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-32">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <p
              className={`font-sans text-sm font-semibold text-brand-green uppercase tracking-[0.2em] mb-6 transition-all duration-1000 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Get In Touch
            </p>
            <h2
              className={`font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-brand-text leading-[1.1] tracking-tight mb-6 transition-all duration-1000 delay-200 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Tell us about your project.
            </h2>
            <p
              className={`font-sans text-base md:text-lg text-brand-muted leading-relaxed max-w-xl mx-auto transition-all duration-1000 delay-400 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Fill out the details below and our team will get back to you
              within 48 hours with a custom proposal.
            </p>
          </div>

          {/* Form */}
          {submitted ? (
            <div
              className={`text-center py-16 transition-all duration-1000 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="font-heading text-3xl md:text-4xl font-semibold text-brand-text mb-4">
                Thank you!
              </h3>
              <p className="font-sans text-base md:text-lg text-brand-muted max-w-md mx-auto">
                We&apos;ve received your inquiry. Our team will reach out within
                48 hours to discuss your project.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className={`space-y-6 transition-all duration-1000 delay-600 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Company Name + Contact Person */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label
                    htmlFor="companyName"
                    className="font-sans text-sm font-medium text-brand-text"
                  >
                    Company Name *
                  </Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    placeholder="Your company name"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </div>
                <div className="space-y-3">
                  <Label
                    htmlFor="contactPerson"
                    className="font-sans text-sm font-medium text-brand-text"
                  >
                    Contact Person *
                  </Label>
                  <Input
                    id="contactPerson"
                    name="contactPerson"
                    placeholder="Full name"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label
                    htmlFor="email"
                    className="font-sans text-sm font-medium text-brand-text"
                  >
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </div>
                <div className="space-y-3">
                  <Label
                    htmlFor="phone"
                    className="font-sans text-sm font-medium text-brand-text"
                  >
                    Phone *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* Estimated Quantity + Product Interest */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label
                    htmlFor="estimatedQuantity"
                    className="font-sans text-sm font-medium text-brand-text"
                  >
                    Estimated Quantity
                  </Label>
                  <Input
                    id="estimatedQuantity"
                    name="estimatedQuantity"
                    placeholder="e.g., 1000 packs/month"
                    value={formData.estimatedQuantity}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
                <div className="space-y-3">
                  <Label
                    htmlFor="productInterest"
                    className="font-sans text-sm font-medium text-brand-text"
                  >
                    Product Interest
                  </Label>
                  <Input
                    id="productInterest"
                    name="productInterest"
                    placeholder="e.g., Roasted, Peri Peri, Mixed"
                    value={formData.productInterest}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-3">
                <Label
                  htmlFor="message"
                  className="font-sans text-sm font-medium text-brand-text"
                >
                  Tell us about your project
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Share your goals, timeline, packaging requirements, or anything else we should know..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-brand-green bg-brand-green text-white text-sm font-medium rounded-full hover:bg-transparent hover:text-brand-green transition-all duration-300 shadow-md hover:shadow-none"
                >
                  Submit Inquiry
                </button>
                <p className="font-sans text-sm text-brand-muted mt-4">
                  We&apos;ll respond within 48 hours.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default WhiteLabelForm;
