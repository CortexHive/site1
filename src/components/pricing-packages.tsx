"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
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
    <section id="website-packages" className="py-20 sm:py-28 bg-white border-b border-[#DCE6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-10 mb-12 border-b border-[#DCE6F2]">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[#143A6B]">
              <span className="w-6 h-[1px] bg-[#143A6B]" />
              <span>Website Packages</span>
            </div>
            <h2 className="font-extrabold tracking-[-0.03em] text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#0A1628] leading-[1.08]">
              Transparent starting prices.{" "}
              <em className="italic text-[#143A6B]">No retainers.</em>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-[15px] text-[#33475F] leading-relaxed">
              Clear one-off build fees with defined page limits, revision rounds, and delivery estimates. Custom AI, SaaS, and software builds are quoted separately on a written specification.
            </p>
          </div>
        </div>

        {/* Restrained Architectural 3-Column Studio Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border border-[#143A6B]/22 rounded-md overflow-hidden bg-white mb-12 divide-y lg:divide-y-0 lg:divide-x divide-[#DCE6F2]">
          {WEBSITE_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              id={pkg.id}
              className={`p-8 sm:p-10 flex flex-col justify-between relative transition-colors ${
                pkg.featured
                  ? "bg-[#F4F7FB] shadow-[inset_0_3px_0_#1B3B53]"
                  : "bg-white"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-4 mb-6 border-b border-[#DCE6F2]">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#0A1628]">
                    {pkg.name}
                  </h3>
                  <span
                    className={`font-mono text-[10px] font-medium px-2 py-1 rounded-sm ${
                      pkg.featured
                        ? "bg-[#143A6B] text-white"
                        : "bg-[#EDF3FA] text-[#33475F]"
                    }`}
                  >
                    {pkg.badge}
                  </span>
                </div>

                {/* Price */}
                <div className="mb-2">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-[#61758F]">
                      From
                    </span>
                    <span className="font-extrabold tracking-[-0.03em] text-5xl sm:text-[56px] font-normal text-[#0A1628] leading-none">
                      {pkg.price}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-[#61758F] block mt-2">
                    {pkg.priceNote}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#33475F] leading-relaxed my-5">
                  {pkg.tagline}
                </p>

                {/* Key Parameters — Hairline Ledger Rows */}
                <div className="border-y border-[#DCE6F2] py-3 space-y-1.5 text-xs mb-6">
                  <div className="flex justify-between gap-2">
                    <span className="text-[#61758F]">Scope</span>
                    <span className="font-semibold text-[#0A1628] text-right">
                      {pkg.pageLimit}
                    </span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-[#61758F]">Revisions</span>
                    <span className="font-semibold text-[#0A1628] text-right">
                      {pkg.revisions}
                    </span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-[#61758F]">Delivery</span>
                    <span className="font-semibold text-[#143A6B] text-right">
                      {pkg.delivery}
                    </span>
                  </div>
                </div>

                {/* Deliverables */}
                <div className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#61758F] mb-3">
                  Included Deliverables
                </div>
                <ul className="space-y-2.5 mb-7">
                  {pkg.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-2.5 text-xs sm:text-[13.5px] text-[#33475F] leading-snug"
                    >
                      <span className="text-[#143A6B] font-semibold select-none">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 border-t border-[#DCE6F2] space-y-3.5">
                <p className="text-[11px] text-[#61758F] leading-relaxed">
                  {pkg.exclusions}
                </p>

                <button
                  type="button"
                  onClick={() => handleSelectPackage(pkg.serviceRequired, pkg.budget)}
                  className={`w-full py-3.5 px-4 rounded text-xs sm:text-[13.5px] font-semibold inline-flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                    pkg.featured
                      ? "bg-[#143A6B] hover:bg-[#08182E] text-white"
                      : "bg-[#08182E] hover:bg-[#143A6B] text-white"
                  }`}
                >
                  <span>Get a Website Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-between px-0.5 text-xs">
                  <Link
                    href="/pricing"
                    className="text-[#33475F] hover:text-[#0A1628] font-medium transition-colors"
                  >
                    Full comparison
                  </Link>
                  <a
                    href={SITE_CONFIG.getWhatsAppLink(pkg.whatsappContext)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#143A6B] hover:underline font-semibold transition-colors"
                  >
                    WhatsApp &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Luxury Bespoke Software & AI Commission Banner */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#08182E] via-[#0F2D56] to-[#051122] border border-[#C69B3A]/30 shadow-editorial">
          {/* Top Brushed Gold Accent Hairline */}
          <div
            aria-hidden="true"
            className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80"
          />

          {/* Subtle Studio Ambient Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.22)_0%,rgba(212,175,55,0.12)_45%,transparent_72%)]"
          />

          <div className="relative z-10 p-7 sm:p-9 lg:p-11 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.07] border border-[#C69B3A]/35 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[#F4E3B2]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Bespoke Engineering &amp; Enterprise Commissions</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-white tracking-[-0.025em] leading-[1.18]">
                Commissioning custom software, AI agents or a{" "}
                <span className="text-[#D4AF37]">SaaS platform?</span>
              </h3>

              <p className="text-xs sm:text-[14.5px] text-blue-100/80 leading-relaxed max-w-2xl">
                Package prices cover the stated website scopes. Domain registration, recurring hosting, ongoing support and custom AI or SaaS builds are quoted transparently on a written specification before work begins.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                {[
                  "Written Specification",
                  "Fixed Milestone Quotes",
                  "100% Client-Owned Code",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 font-mono text-[10.5px] font-medium text-blue-100/85"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => handleSelectPackage("Custom Website / Redesign", "Not sure / Please advise")}
                className="w-full px-6 py-3.5 rounded-xl bg-[#C69B3A] hover:bg-[#B5892E] text-white text-xs sm:text-[13.5px] font-bold inline-flex items-center justify-between shadow-subtle transition-colors cursor-pointer"
              >
                <span>Request a Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/pricing"
                className="w-full px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs sm:text-[13px] font-semibold inline-flex items-center justify-between transition-colors"
              >
                <span>Compare Full Pricing</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
