"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export const PACKAGES = [
  {
    id: "launch-99",
    badge: "Fastest Online",
    name: "Launch Website",
    price: "£99",
    period: "one-off fixed fee",
    tagline: "For sole traders, trades & new services needing a professional start.",
    popular: false,
    serviceRequired: "Launch Website (£99)",
    budget: "£99",
    whatsappContext: "small-business-99",
    features: [
      "Single-page responsive website",
      "Clean, modern mobile-first design",
      "Lead enquiry & quote capture form",
      "Direct Click-to-call & WhatsApp buttons",
      "Basic on-page Google SEO setup",
      "Fast cloud hosting configuration",
      "Live in 3 to 5 business days",
    ],
    ctaLabel: "Choose Launch (£99)",
  },
  {
    id: "business-349",
    badge: "Most Popular",
    name: "Business Website",
    price: "£349",
    period: "one-off fixed fee",
    tagline: "For established small businesses & professional services.",
    popular: true,
    serviceRequired: "Business Website (£349)",
    budget: "£349",
    whatsappContext: "quote",
    features: [
      "Up to 5 custom pages (Home, About, Services, Work, Contact)",
      "Bespoke layout tailored to your brand identity",
      "Conversion & lead generation optimisation",
      "Google Search Console & XML sitemap setup",
      "Interactive enquiry capture & notifications",
      "Sub-second loading speed optimisation",
      "Full domain & SSL connection",
    ],
    ctaLabel: "Choose Business (£349)",
  },
  {
    id: "growth-699",
    badge: "Comprehensive",
    name: "Business Growth",
    price: "£699",
    period: "one-off fixed fee",
    tagline: "For growing companies wanting a complete digital platform.",
    popular: false,
    serviceRequired: "Business Growth Website (£699)",
    budget: "£699",
    whatsappContext: "quote",
    features: [
      "Up to 8–10 dedicated service & location pages",
      "Detailed service silos & case study showcases",
      "Blog / articles / resources architecture",
      "Advanced structured data & local SEO hierarchy",
      "Automated customer lead routing flows",
      "Integrated analytics & conversion event tracking",
      "Optional CMS capability for easy editing",
    ],
    ctaLabel: "Choose Growth (£699)",
  },
  {
    id: "custom-software",
    badge: "Bespoke Solutions",
    name: "Custom AI & Software",
    price: "Contact for Pricing",
    period: "scoped milestone delivery",
    tagline: "For businesses needing intelligent automation, custom AI or SaaS.",
    popular: false,
    serviceRequired: "Custom AI & Software",
    budget: "Contact for Pricing",
    whatsappContext: "software",
    features: [
      "Custom AI agents & autonomous workflow pipelines",
      "AI voice receptionist & automated call handling",
      "Internal productivity dashboards & employee tools",
      "SaaS MVP architecture & full-stack development",
      "Secure client portals & role-based authentication",
      "Third-party API, CRM & database integrations",
      "100% intellectual property & code ownership",
    ],
    ctaLabel: "Discuss Custom Scope",
  },
];

export const MONTHLY_SERVICES = [
  {
    name: "Website Hosting & Security",
    price: "£15",
    period: "per month",
    desc: "Essential high-speed UK cloud hosting and enterprise security monitoring.",
    features: [
      "High-speed UK-based cloud hosting",
      "Enterprise SSL encryption certificate",
      "Daily automated backups",
      "99.9% uptime & health monitoring",
      "DNS configuration & renewal guidance",
    ],
  },
  {
    name: "Website Care & Updates",
    price: "£29",
    period: "per month",
    popular: true,
    desc: "Hosting plus monthly hands-on maintenance, edits, and technical upkeep.",
    features: [
      "Everything in Hosting & Security included",
      "Up to 1 hour of content & image updates each month",
      "Technical framework & security patch updates",
      "Form delivery testing & spam protection",
      "Priority email & ticket support",
    ],
  },
  {
    name: "Growth Care",
    price: "£59",
    period: "per month",
    desc: "Proactive monthly technical care, SEO checks, and regular continuous improvements.",
    features: [
      "Everything in Website Care included",
      "Up to 3 hours of updates and design tweaks/month",
      "Monthly SEO rankings & search index audit",
      "Quarterly site speed & conversion review",
      "Direct priority WhatsApp support channel",
    ],
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
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F8FC] border border-[#E2E8F0] text-xs font-bold text-blue-700 uppercase tracking-widest mb-4">
            Transparent Pricing
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#14243A] tracking-tight mb-4">
            Transparent Packages. Zero Hidden Fees.
          </h2>
          <p className="text-[#475569] text-base sm:text-lg leading-relaxed font-normal">
            Whether you need an accessible website to establish your business online or an intelligent custom AI product, we provide clear fixed pricing with upfront deliverables.
          </p>
        </div>

        {/* 4 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-20">
          {PACKAGES.map((pkg) => {
            return (
              <div
                key={pkg.id}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  pkg.popular
                    ? "bg-[#FFFFFF] border-2 border-blue-600 shadow-xl ring-4 ring-blue-600/10"
                    : "bg-[#FFFFFF] border border-[#E2E8F0] hover:border-blue-300 hover:shadow-lg"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-blue-600 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                        pkg.popular
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "bg-[#F5F8FC] text-[#475569] border border-[#E2E8F0]"
                      }`}
                    >
                      {pkg.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#14243A]">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed min-h-[36px]">
                    {pkg.tagline}
                  </p>

                  <div className="my-5 py-4 border-y border-[#E2E8F0]">
                    <div className="text-3xl font-extrabold text-[#14243A]">
                      {pkg.price}
                    </div>
                    <div className="text-xs text-[#64748B] mt-1 font-medium">
                      {pkg.period}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#475569] leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    type="button"
                    onClick={() => handleSelectPackage(pkg.serviceRequired, pkg.budget)}
                    className={`w-full min-h-[46px] py-3 px-4 rounded-xl text-xs font-bold inline-flex items-center justify-center gap-2 transition-all ${
                      pkg.popular
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20"
                        : "bg-[#14243A] hover:bg-blue-600 text-white"
                    }`}
                  >
                    <span>{pkg.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-between px-1 text-[11px] font-semibold">
                    <a
                      href={SITE_CONFIG.getWhatsAppLink(pkg.whatsappContext)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:text-emerald-800 transition-colors"
                    >
                      WhatsApp questions &rarr;
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section 7: Optional Monthly Services Strip */}
        <div className="bg-[#F8FAFD] border border-[#E2E8F0] rounded-3xl p-6 sm:p-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-2">
              Optional Ongoing Support
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#14243A]">
              Monthly Website Care &amp; Hosting Plans
            </h3>
            <p className="text-sm text-[#64748B] mt-2">
              Completely optional. You own 100% of your website. Choose a care plan if you want us to handle hosting, updates, and ongoing technical maintenance. No long-term contracts. Cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MONTHLY_SERVICES.map((plan, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-6 border flex flex-col justify-between ${
                  plan.popular ? "border-2 border-blue-600 shadow-md" : "border-[#E2E8F0]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-base font-bold text-[#14243A]">{plan.name}</h4>
                    {plan.popular && (
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                        Recommended
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-3xl font-extrabold text-[#14243A]">{plan.price}</span>
                    <span className="text-xs text-[#64748B]">/{plan.period}</span>
                  </div>
                  <p className="text-xs text-[#64748B] mb-5 leading-relaxed">{plan.desc}</p>
                  <ul className="space-y-2.5 mb-6">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#475569]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => handleSelectPackage(`Monthly Plan: ${plan.name}`, plan.price)}
                  className="w-full py-2.5 px-3 rounded-lg border border-[#E2E8F0] hover:border-blue-600 hover:text-blue-600 text-xs font-bold text-[#14243A] transition-colors"
                >
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
