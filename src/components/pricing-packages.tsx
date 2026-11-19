"use client";

import Link from "next/link";
import { Check, ArrowRight, Info } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export const WEBSITE_PACKAGES = [
  {
    id: "starter",
    name: "Starter",
    price: "£99",
    priceNote: "Starting price (one-off build)",
    badge: "One-Page Landing Page",
    pageLimit: "1 page (up to 5 content sections)",
    revisions: "1 revision round included",
    delivery: "Typically 3–5 working days",
    tagline:
      "A focused, professional one-page website to establish your UK business online quickly.",
    featured: false,
    serviceRequired: "Starter Website (£99)",
    budget: "£99 (Starter Website)",
    whatsappContext: "starter-99",
    deliverables: [
      "One-page landing page",
      "Up to five content sections",
      "Responsive design across mobile and desktop",
      "Contact information and social links",
      "Basic on-page SEO structure",
    ],
    exclusions:
      "Excludes domain registration, recurring hosting, ongoing maintenance and additional pages.",
  },
  {
    id: "business",
    name: "Business",
    price: "£349",
    priceNote: "Starting price (one-off build)",
    badge: "Most Popular",
    pageLimit: "Up to 5 pages",
    revisions: "Up to 2 revision rounds included",
    delivery: "Typically 1–2 weeks",
    tagline:
      "A tailored multi-page business website built to showcase services and capture customer enquiries.",
    featured: true,
    serviceRequired: "Business Website (£349)",
    budget: "£349 (Business Website)",
    whatsappContext: "business-349",
    deliverables: [
      "Up to five pages",
      "Professional custom design",
      "Mobile and tablet optimization",
      "Contact / enquiry form",
      "Social media integration",
      "Basic on-page SEO",
    ],
    exclusions:
      "Excludes domain registration, recurring hosting, copywriting and bespoke web software.",
  },
  {
    id: "growth",
    name: "Growth",
    price: "£699",
    priceNote: "Starting price (one-off build)",
    badge: "Advanced Business Site",
    pageLimit: "Up to 8 pages",
    revisions: "Up to 3 revision rounds included",
    delivery: "Typically 2–3 weeks",
    tagline:
      "An expanded, bespoke website with dedicated service pages and an agreed advanced integration.",
    featured: false,
    serviceRequired: "Growth Website (£699)",
    budget: "£699 (Growth Website)",
    whatsappContext: "growth-699",
    deliverables: [
      "Up to eight pages",
      "Advanced custom design",
      "Responsive layout across all devices",
      "One agreed advanced feature or integration",
      "Basic on-page SEO",
      "Deployment assistance",
    ],
    exclusions:
      "Excludes domain registration, recurring hosting, third-party subscription fees and full SaaS software.",
  },
];

export default function PricingPackages() {
  const handleSelectPackage = (serviceRequired: string, budget: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("cortexhive:select-package", {
          detail: { serviceRequired, budget },
        })
      );
      const contactEl = document.querySelector("#contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = `/contact?service=${encodeURIComponent(serviceRequired)}`;
      }
    }
  };

  return (
    <section id="website-packages" className="py-20 sm:py-28 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-10 mb-12 border-b border-[#E2E8F0]">
          <div className="lg:col-span-7 space-y-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-600 block">
              Website Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#14243A] tracking-tight leading-[1.1]">
              Transparent Website Packages for UK Businesses.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Clear starting prices with defined page limits, revision allowances and delivery estimates. No hidden retainers or vague agency estimates.
            </p>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch mb-10">
          {WEBSITE_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              id={pkg.id}
              className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                pkg.featured
                  ? "bg-[#F8FAFD] border-2 border-blue-600 shadow-subtle"
                  : "bg-white border border-[#E2E8F0] hover:border-slate-300"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-[#E2E8F0]">
                  <h3 className="text-base font-extrabold uppercase tracking-wider text-[#14243A]">
                    {pkg.name}
                  </h3>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-md ${
                      pkg.featured
                        ? "bg-blue-600 text-white"
                        : "bg-[#F5F8FC] text-[#475569] border border-[#E2E8F0]"
                    }`}
                  >
                    {pkg.badge}
                  </span>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-semibold uppercase text-[#64748B]">From</span>
                    <span className="text-4xl sm:text-5xl font-extrabold text-[#14243A] tracking-tight">
                      {pkg.price}
                    </span>
                  </div>
                  <span className="text-xs text-[#64748B] block mt-1">{pkg.priceNote}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5">
                  {pkg.tagline}
                </p>

                {/* Key Parameters Strip */}
                <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] space-y-1.5 text-xs mb-6">
                  <div className="flex justify-between gap-2">
                    <span className="text-[#64748B]">Scope:</span>
                    <span className="font-semibold text-[#14243A] text-right">{pkg.pageLimit}</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-[#64748B]">Revisions:</span>
                    <span className="font-semibold text-[#14243A] text-right">{pkg.revisions}</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-[#64748B]">Est. Delivery:</span>
                    <span className="font-semibold text-blue-600 text-right">{pkg.delivery}</span>
                  </div>
                </div>

                {/* Deliverables */}
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#14243A] mb-3">
                  Included Deliverables
                </div>
                <ul className="space-y-2.5 mb-6">
                  {pkg.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569] leading-snug"
                    >
                      <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 border-t border-[#E2E8F0] space-y-3.5">
                <p className="text-[11px] text-[#64748B] leading-relaxed">
                  {pkg.exclusions}
                </p>

                <button
                  type="button"
                  onClick={() => handleSelectPackage(pkg.serviceRequired, pkg.budget)}
                  className={`w-full py-3.5 px-4 rounded-lg text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors ${
                    pkg.featured
                      ? "bg-blue-600 hover:bg-[#14243A] text-white"
                      : "bg-[#14243A] hover:bg-blue-600 text-white"
                  }`}
                >
                  <span>Get a Website Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-between px-1 text-xs">
                  <Link
                    href="/pricing"
                    className="text-[#475569] hover:text-blue-600 font-medium transition-colors"
                  >
                    Full comparison
                  </Link>
                  <a
                    href={SITE_CONFIG.getWhatsAppLink(pkg.whatsappContext)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:text-emerald-800 font-semibold transition-colors"
                  >
                    WhatsApp &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Exclusions & Custom Quote Bar */}
        <div className="rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-start gap-3.5 max-w-3xl">
            <div className="w-9 h-9 rounded-lg bg-white border border-[#E2E8F0] text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Info className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm sm:text-base font-bold text-[#14243A]">
                Need something more advanced? Request a custom quote.
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Package prices are starting build fees for the stated page and revision limits. Domain registration, recurring hosting, ongoing maintenance and third-party services are quoted separately so you always have full control and transparency.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0 w-full lg:w-auto">
            <Link
              href="/pricing"
              className="px-5 py-3 rounded-lg bg-white hover:bg-slate-50 text-[#14243A] border border-slate-300 text-xs font-semibold text-center transition-colors"
            >
              Compare Full Pricing
            </Link>
            <button
              type="button"
              onClick={() => handleSelectPackage("Custom Website / Redesign", "Not sure / Please advise")}
              className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-[#14243A] text-white text-xs font-semibold text-center transition-colors"
            >
              Request a Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
