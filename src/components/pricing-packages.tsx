"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight, Sparkles, PhoneCall, Globe, Layers } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

const PACKAGES = [
  {
    id: "starter-99",
    badge: "Most Popular for Trades",
    name: "Starter Business Website",
    price: "£99",
    period: "one-off build fee",
    desc: "Get a professional online presence for your trade or local business without agency markups.",
    icon: Sparkles,
    accent: "emerald",
    serviceRequired: "£99 Small Business Website",
    budget: "£99 Starter Package",
    whatsappContext: "small-business-99",
    learnMoreHref: "/small-business-websites",
    features: [
      "Professional 1-page responsive website",
      "Tailored for builders, plumbers, electricians & trades",
      "Direct WhatsApp chat & click-to-call buttons",
      "Customer quote & enquiry form",
      "Basic on-page Google SEO setup",
      "Ready in 3 to 5 business days",
    ],
    ctaLabel: "Claim £99 Website",
  },
  {
    id: "ai-receptionist",
    badge: "24/7 Call Capture",
    name: "AI Receptionist & Call Triage",
    price: "Custom Plan",
    period: "tailored to call volume",
    desc: "Never lose a customer call while on the tools, in a meeting, or closed for the evening.",
    icon: PhoneCall,
    accent: "cyan",
    serviceRequired: "AI Receptionist",
    budget: "Under £500",
    whatsappContext: "ai-receptionist",
    learnMoreHref: "/ai-receptionist",
    features: [
      "Answers incoming calls 24/7 within 2 rings",
      "Natural British English conversational voice",
      "Answers FAQs, opening hours & service areas",
      "Captures caller name, phone, postcode & job need",
      "Sends instant SMS & email lead summaries",
      "Works with your existing UK mobile or landline",
    ],
    ctaLabel: "Request Voice Demo",
  },
  {
    id: "growth-web-ai",
    badge: "Growing Businesses",
    name: "Multi-Page Site or AI Workflow",
    price: "£500 – £1,500",
    period: "fixed price scope",
    desc: "For established companies needing a multi-page web platform or automated business workflows.",
    icon: Globe,
    accent: "purple",
    serviceRequired: "Website Design",
    budget: "£500–£1,000",
    whatsappContext: "quote",
    learnMoreHref: "/website-design",
    features: [
      "4–8 custom-designed responsive pages",
      "Dedicated service & local area landing pages",
      "Or custom AI email/document automation pipeline",
      "CRM & database lead synchronization",
      "Full UK technical SEO & Google indexing",
      "Sub-second Next.js loading performance",
    ],
    ctaLabel: "Get Fixed Quote",
  },
  {
    id: "custom-software",
    badge: "Full-Stack Product",
    name: "Custom Software & SaaS MVP",
    price: "£2,500+",
    period: "milestone-based delivery",
    desc: "End-to-end engineering for web applications, customer portals, and scalable SaaS products.",
    icon: Layers,
    accent: "slate",
    serviceRequired: "Software Development",
    budget: "£2,500–£5,000",
    whatsappContext: "software",
    learnMoreHref: "/software-development",
    features: [
      "Full-stack Next.js, TypeScript & PostgreSQL",
      "Secure user authentication & client portals",
      "Custom admin & management dashboards",
      "Stripe / subscription billing integration",
      "AI agent & third-party API integrations",
      "100% source code & IP ownership",
    ],
    ctaLabel: "Scope Your Project",
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
    <section id="pricing" className="py-16 sm:py-24 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold text-purple-700 uppercase tracking-widest mb-4">
            Transparent Investment
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 font-outfit tracking-tight mb-3 sm:mb-4">
            Clear Packages. No Agency Guesswork.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-medium px-2 sm:px-0">
            Whether you need an affordable £99 starter website to get your trade online this week or a full-scale software platform, choose a package below for an instant quote.
          </p>
        </div>

        {/* 4-Column Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
          {PACKAGES.map((pkg) => {
            const Icon = pkg.icon;
            const isEmerald = pkg.accent === "emerald";
            const isCyan = pkg.accent === "cyan";

            return (
              <div
                key={pkg.id}
                className={`rounded-2xl sm:rounded-3xl p-5 sm:p-7 border flex flex-col justify-between transition-all duration-300 ${
                  isEmerald
                    ? "border-2 border-emerald-500 bg-emerald-50/20 shadow-xl relative"
                    : isCyan
                    ? "border-2 border-cyan-500/60 bg-cyan-50/15 shadow-lg relative"
                    : "border-slate-200 bg-slate-50/60 hover:border-purple-300 hover:bg-white hover:shadow-lg"
                }`}
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4 sm:mb-5">
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border ${
                        isEmerald
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : isCyan
                          ? "bg-cyan-600 text-white border-cyan-600"
                          : "bg-white text-purple-600 border-slate-200"
                      }`}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                        isEmerald
                          ? "bg-emerald-100 text-emerald-800"
                          : isCyan
                          ? "bg-cyan-100 text-cyan-800"
                          : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {pkg.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-950 font-outfit">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium mt-1 leading-relaxed">
                    {pkg.desc}
                  </p>

                  {/* Price */}
                  <div className="my-4 sm:my-5 py-3 sm:py-4 border-y border-slate-200/80">
                    <div className="text-2xl sm:text-3xl font-black text-slate-950 font-outfit">
                      {pkg.price}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-500 mt-0.5">
                      {pkg.period}
                    </div>
                  </div>

                  {/* Feature List */}
                  <ul className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6">
                    {pkg.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs text-slate-700 font-medium leading-snug"
                      >
                        <CheckCircle2
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            isEmerald
                              ? "text-emerald-600"
                              : isCyan
                              ? "text-cyan-600"
                              : "text-purple-600"
                          }`}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="space-y-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => handleSelectPackage(pkg.serviceRequired, pkg.budget)}
                    className={`w-full min-h-[44px] py-3 px-4 rounded-xl text-xs font-bold inline-flex items-center justify-center gap-2 transition-all shadow-sm active:scale-98 ${
                      isEmerald
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                        : isCyan
                        ? "bg-cyan-600 hover:bg-cyan-700 text-white"
                        : "bg-slate-950 hover:bg-purple-600 text-white"
                    }`}
                  >
                    <span>{pkg.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center justify-between px-1 pt-1 text-[11px] font-bold">
                    <Link
                      href={pkg.learnMoreHref}
                      className="text-slate-500 hover:text-slate-900 transition-colors py-1"
                    >
                      Full details &rarr;
                    </Link>
                    <a
                      href={SITE_CONFIG.getWhatsAppLink(pkg.whatsappContext)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:text-emerald-800 transition-colors py-1"
                    >
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
