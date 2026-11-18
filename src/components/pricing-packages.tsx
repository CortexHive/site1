"use client";

import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Smartphone,
  Layout,
  Mail,
  MessageSquare,
  Search,
  Zap,
  MousePointerClick,
  Info,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export const WEBSITE_PACKAGES = [
  {
    id: "starter",
    name: "Starter Website",
    price: "£99",
    priceNote: "Starting price (one-off build)",
    badge: "Small Business & Trades",
    tagline:
      "A clean, professional one-page website designed to get your business online quickly and start generating enquiries.",
    featured: false,
    serviceRequired: "Starter Website (£99)",
    budget: "£99 Starter Website",
    whatsappContext: "starter-99",
    deliverables: [
      "1-page structured business website (Hero, Services, About, Contact)",
      "Mobile-first responsive design for phones, tablets and desktops",
      "Customer enquiry form connected to your email",
      "Click-to-call and WhatsApp chat integration",
      "Basic on-page SEO (page titles, meta descriptions & headings)",
      "Fast-loading modern build with social media links",
      "Includes 1 round of revisions before launch",
    ],
    exclusions: "Excludes domain registration, recurring hosting & multi-page content.",
  },
  {
    id: "business",
    name: "Business Website",
    price: "£349",
    priceNote: "Starting price (one-off build)",
    badge: "Most Popular",
    tagline:
      "A complete multi-page website for established small businesses that want to showcase multiple services and build strong local credibility.",
    featured: true,
    serviceRequired: "Business Website (£349)",
    budget: "£349 Business Website",
    whatsappContext: "business-349",
    deliverables: [
      "Up to 5 custom-designed pages (e.g. Home, About, Services, Work, Contact)",
      "Tailored layout aligned with your brand colours and identity",
      "Mobile-optimised design with clear calls to action on every page",
      "Enquiry forms, click-to-call and WhatsApp integration",
      "On-page SEO setup, XML sitemap & Google Search Console readiness",
      "Photo gallery or recent work showcase section",
      "Includes up to 2 rounds of revisions before launch",
    ],
    exclusions: "Excludes domain registration, recurring hosting & custom database features.",
  },
  {
    id: "growth",
    name: "Growth Website",
    price: "£699",
    priceNote: "Starting price (one-off build)",
    badge: "Expanding Companies",
    tagline:
      "A comprehensive multi-page digital presence for businesses targeting multiple services, locations or higher-value commercial contracts.",
    featured: false,
    serviceRequired: "Growth Website (£699)",
    budget: "£699 Growth Website",
    whatsappContext: "growth-699",
    deliverables: [
      "Up to 10 custom-designed pages including dedicated service pages",
      "Case studies or portfolio layout to showcase completed projects",
      "Multi-step quote or consultation request form",
      "External booking or calendar link integration where required",
      "Enhanced technical SEO, structured schema markup & speed optimisation",
      "Full mobile, tablet and desktop responsiveness",
      "Includes up to 3 rounds of revisions before launch",
    ],
    exclusions: "Excludes domain registration, recurring hosting & bespoke web app software.",
  },
];

const CORE_FEATURES = [
  { icon: Smartphone, label: "Mobile-First Design" },
  { icon: Layout, label: "Professional Layouts" },
  { icon: Mail, label: "Contact Forms" },
  { icon: MessageSquare, label: "WhatsApp Integration" },
  { icon: Search, label: "Basic On-Page SEO" },
  { icon: Zap, label: "Fast-Loading Pages" },
  { icon: MousePointerClick, label: "Clear Calls to Action" },
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
    <section id="website-packages" className="py-20 sm:py-28 bg-white border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F8FC] border border-[#E2E8F0] text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
            Website Design for Small Businesses
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#14243A] tracking-tight leading-[1.12]">
            Your Business Deserves a Better Website.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#475569] mt-3 leading-relaxed">
            Get a professional, mobile-friendly website without the agency-sized price tag. We build modern websites designed to showcase your services and turn visitors into enquiries.
          </p>
        </div>

        {/* Feature Pills Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {CORE_FEATURES.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.label}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F5F8FC] border border-[#E2E8F0] text-xs font-semibold text-[#14243A]"
              >
                <Icon className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                <span>{feat.label}</span>
              </div>
            );
          })}
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-10">
          {WEBSITE_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              id={pkg.id}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 relative ${
                pkg.featured
                  ? "bg-[#F8FAFD] border-2 border-blue-600 shadow-hover"
                  : "bg-white border border-[#E2E8F0] hover:border-slate-300 shadow-subtle"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-200/80">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {pkg.name}
                  </span>
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      pkg.featured
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {pkg.badge}
                  </span>
                </div>

                {/* Price Display */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-semibold uppercase text-slate-500">From</span>
                    <span className="text-4xl sm:text-5xl font-extrabold text-[#14243A] tracking-tight">
                      {pkg.price}
                    </span>
                  </div>
                  <span className="text-xs text-[#64748B] font-medium block mt-1">
                    {pkg.priceNote}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                  {pkg.tagline}
                </p>

                <div className="text-xs font-bold uppercase tracking-wider text-[#14243A] mb-3">
                  What&apos;s Included:
                </div>
                <ul className="space-y-2.5 mb-6">
                  {pkg.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569] leading-snug">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 border-t border-slate-200/80 space-y-3.5">
                <p className="text-[11px] text-[#64748B] leading-relaxed">
                  {pkg.exclusions}
                </p>

                <button
                  type="button"
                  onClick={() => handleSelectPackage(pkg.serviceRequired, pkg.budget)}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors ${
                    pkg.featured
                      ? "bg-blue-600 hover:bg-[#14243A] text-white shadow-xs"
                      : "bg-[#14243A] hover:bg-blue-600 text-white"
                  }`}
                >
                  <span>Choose Your Website Package</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-between px-1 text-xs">
                  <Link
                    href="/pricing"
                    className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
                  >
                    Compare full specs
                  </Link>
                  <a
                    href={SITE_CONFIG.getWhatsAppLink(pkg.whatsappContext)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:text-emerald-800 font-semibold transition-colors"
                  >
                    Enquire on WhatsApp &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Terms & Custom Quote Callout */}
        <div className="rounded-2xl bg-[#F5F8FC] border border-[#E2E8F0] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Info className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-sm sm:text-base font-bold text-[#14243A]">
                Clear, Honest Package Terms &amp; Custom Quotes
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Package prices above are starting one-off build costs for the specified page limits and revision allowances. Domain registration (e.g. <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-slate-200">.co.uk</code>), recurring website hosting, ongoing maintenance plans and third-party paid subscriptions are separate and explained upfront before work begins. Need extra pages, e-commerce or custom functionality? We provide tailored fixed quotes.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center justify-end gap-3">
            <Link
              href="/pricing"
              className="px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-[#14243A] border border-slate-300 text-xs font-semibold text-center transition-colors"
            >
              View Detailed Pricing Page
            </Link>
            <button
              type="button"
              onClick={() => handleSelectPackage("Custom Website Quote", "Custom Quote")}
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-[#14243A] text-white text-xs font-semibold text-center transition-colors"
            >
              Request a Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
