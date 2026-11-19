"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  PhoneCall,
  Layers,
  Check,
  Building2,
  Cpu,
} from "lucide-react";

type ServiceCategory = "websites" | "ai" | "software";

const SERVICE_SELECTOR_CONTENT: Record<
  ServiceCategory,
  {
    index: string;
    label: string;
    eyebrow: string;
    title: string;
    description: string;
    highlights: string[];
    metaLabel: string;
    metaValue: string;
    href: string;
    linkLabel: string;
  }
> = {
  websites: {
    index: "01",
    label: "Websites",
    eyebrow: "Website Development",
    title: "Modern websites designed to win local & commercial enquiries.",
    description:
      "Fast, mobile-optimised websites built for UK small businesses, tradespeople and established companies — with clear enquiry pathways and on-page SEO.",
    highlights: [
      "Starter (1-page) from £99, Business (up to 5 pages) from £349",
      "Growth (up to 8 pages) from £699 & custom web builds",
      "Mobile-first layouts, enquiry forms & WhatsApp integration",
    ],
    metaLabel: "Starting Packages",
    metaValue: "£99 / £349 / £699",
    href: "/website-design",
    linkLabel: "Explore Website Packages",
  },
  ai: {
    index: "02",
    label: "AI & Voice",
    eyebrow: "AI Systems & Automation",
    title: "AI receptionists and workflow automation that work around the clock.",
    description:
      "Answer incoming calls outside working hours, qualify leads, automate repetitive administration and connect your everyday business tools.",
    highlights: [
      "AI receptionists that answer calls & capture customer details",
      "Automated enquiry handling, follow-ups & document workflows",
      "Custom AI agents tailored to your services and business rules",
    ],
    metaLabel: "Engagement",
    metaValue: "Tailored Setup & Scope",
    href: "/ai-receptionist",
    linkLabel: "Explore AI Receptionist",
  },
  software: {
    index: "03",
    label: "Software & SaaS",
    eyebrow: "Custom Product Engineering",
    title: "Bespoke web applications, portals and SaaS platforms built to last.",
    description:
      "Turn operational requirements or new product ideas into maintainable, full-stack software — backed by our experience building MarkScheme, AuraPDF and Rydigo.",
    highlights: [
      "Custom SaaS platforms, MVPs & subscription billing",
      "Customer portals, management dashboards & API integrations",
      "White-label & browser-based digital tools",
    ],
    metaLabel: "Delivery",
    metaValue: "Individually Scoped",
    href: "/software-development",
    linkLabel: "Explore Software Development",
  },
};

export default function Hero() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("websites");
  const current = SERVICE_SELECTOR_CONTENT[activeCategory];

  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative bg-white pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
            {/* Left 7 Columns: Editorial Headline & Primary Actions */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 pt-1">
              {/* Understated Studio Badge */}
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-[#F8FAFD] border border-[#E2E8F0]">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#14243A]">
                  UK-Based Digital Solutions Studio
                </span>
              </div>

              {/* Commanding Headline */}
              <div className="space-y-5">
                <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#14243A] tracking-[-0.03em] leading-[1.06]">
                  Technology That Moves{" "}
                  <span className="block sm:inline text-blue-600">
                    Your Business Forward.
                  </span>
                </h1>
                <p className="text-base sm:text-lg lg:text-[19px] text-[#475569] leading-[1.65] max-w-2xl font-normal">
                  From professional websites to intelligent AI automation and custom software, CortexHive helps businesses simplify operations, attract customers and turn ideas into working digital products.
                </p>
              </div>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
                <button
                  type="button"
                  onClick={() => scrollTo("#contact")}
                  className="px-6 py-3.5 rounded-lg bg-[#14243A] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2.5 transition-colors"
                >
                  <span>Get a Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollTo("#services")}
                  className="px-6 py-3.5 rounded-lg bg-white hover:bg-[#F8FAFD] text-[#14243A] border border-slate-300 font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Explore Our Services</span>
                </button>
              </div>

              {/* Subtle 3-Column Capability Summary */}
              <div className="pt-6 border-t border-[#E2E8F0] grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 block mb-1">
                    01 / Websites
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#14243A] leading-snug">
                    Built for enquiries and clear business credibility.
                  </p>
                </div>
                <div className="sm:border-l sm:border-[#E2E8F0] sm:pl-5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 block mb-1">
                    02 / AI &amp; Voice
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#14243A] leading-snug">
                    Call answering and practical workflow automation.
                  </p>
                </div>
                <div className="sm:border-l sm:border-[#E2E8F0] sm:pl-5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 block mb-1">
                    03 / Software
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#14243A] leading-snug">
                    Custom applications, portals and SaaS platforms.
                  </p>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Bespoke Agency Service Selector (Non-Dashboard Editorial Style) */}
            <div className="lg:col-span-5 w-full">
              <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFD] overflow-hidden">
                {/* Editorial Selector Tabs */}
                <div
                  role="tablist"
                  aria-label="CortexHive Service Categories"
                  className="grid grid-cols-3 bg-white border-b border-[#E2E8F0]"
                >
                  {(["websites", "ai", "software"] as ServiceCategory[]).map((key) => {
                    const item = SERVICE_SELECTOR_CONTENT[key];
                    const isActive = activeCategory === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveCategory(key)}
                        className={`py-4 px-3 text-left transition-colors relative border-r last:border-r-0 border-[#E2E8F0] ${
                          isActive
                            ? "bg-[#F8FAFD] text-[#14243A]"
                            : "bg-white text-[#64748B] hover:text-[#14243A] hover:bg-slate-50/70"
                        }`}
                      >
                        <span
                          className={`block text-[10px] font-semibold tracking-wider mb-0.5 ${
                            isActive ? "text-blue-600" : "text-slate-400"
                          }`}
                        >
                          {item.index}
                        </span>
                        <span className="block text-xs font-bold tracking-tight">
                          {item.label}
                        </span>
                        {isActive && (
                          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Selected Capability Editorial Content */}
                <div className="p-6 sm:p-7 space-y-6">
                  <div className="space-y-2.5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-600 block">
                      {current.eyebrow}
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-[#14243A] leading-snug tracking-tight">
                      {current.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {current.description}
                    </p>
                  </div>

                  {/* Clean Highlights List */}
                  <ul className="space-y-2.5 pt-1 border-t border-[#E2E8F0]">
                    {current.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#14243A] pt-2 first:pt-3"
                      >
                        <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer Meta & Link */}
                  <div className="pt-5 border-t border-[#E2E8F0] flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#64748B] block">
                        {current.metaLabel}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[#14243A]">
                        {current.metaValue}
                      </span>
                    </div>

                    <Link
                      href={current.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-[#14243A] transition-colors"
                    >
                      <span>{current.linkLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — TWO DISTINCT CUSTOMER PATHWAYS */}
      <section id="pathways" className="py-16 sm:py-24 bg-[#F5F8FC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 sm:mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-600 block mb-2">
              How We Help
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#14243A] tracking-tight leading-[1.12]">
              Two Focused Pathways for UK Businesses.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Pathway A — Small Businesses */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-7 sm:p-9 flex flex-col justify-between shadow-subtle">
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-600">
                    Pathway 01 — Small Businesses &amp; Trades
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-[#F5F8FC] border border-[#E2E8F0] text-[#14243A] flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-blue-600" />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-[26px] font-extrabold text-[#14243A] tracking-tight leading-snug">
                    Helping UK Businesses Get Online, Win Customers and Work Smarter.
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    Professional business websites and intelligent AI receptionists designed to help you capture more enquiries and simplify everyday operations.
                  </p>
                </div>

                {/* Clean Sector Matrix */}
                <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0] space-y-2.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#64748B] block">
                    Built for Practical Businesses
                  </span>
                  <div className="grid grid-cols-2 gap-y-1.5 gap-x-3 text-xs font-medium text-[#14243A]">
                    <span className="flex items-center gap-2"><Globe className="w-3.5 h-3.5 text-blue-600" /> Builders &amp; Trades</span>
                    <span className="flex items-center gap-2"><PhoneCall className="w-3.5 h-3.5 text-blue-600" /> Plumbers &amp; Electricians</span>
                    <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-600" /> Window &amp; Commercial Cleaners</span>
                    <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-600" /> Local Service Providers</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/pricing"
                  className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-[#14243A] text-white text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Explore Website Packages</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/ai-receptionist"
                  className="px-5 py-3 rounded-lg bg-white hover:bg-[#F5F8FC] text-[#14243A] border border-slate-300 text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Explore AI Receptionists</span>
                </Link>
              </div>
            </div>

            {/* Pathway B — Software and AI Clients */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-7 sm:p-9 flex flex-col justify-between shadow-subtle">
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#14243A]">
                    Pathway 02 — Custom AI &amp; Software Clients
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-[#F5F8FC] border border-[#E2E8F0] text-[#14243A] flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-blue-600" />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-[26px] font-extrabold text-[#14243A] tracking-tight leading-snug">
                    Turn Your Ideas Into Powerful Digital Products.
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    From intelligent AI systems to complete SaaS platforms, we design and develop technology around your business requirements.
                  </p>
                </div>

                {/* Clean Product Capability Matrix */}
                <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0] space-y-2.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#64748B] block">
                    Tailored Engineering Scope
                  </span>
                  <div className="grid grid-cols-2 gap-y-1.5 gap-x-3 text-xs font-medium text-[#14243A]">
                    <span className="flex items-center gap-2"><Layers className="w-3.5 h-3.5 text-blue-600" /> Custom SaaS Platforms</span>
                    <span className="flex items-center gap-2"><Cpu className="w-3.5 h-3.5 text-blue-600" /> AI Agents &amp; Automation</span>
                    <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-600" /> Dashboards &amp; Portals</span>
                    <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-600" /> API &amp; Document Systems</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={() => scrollTo("#contact")}
                  className="px-5 py-3 rounded-lg bg-[#14243A] hover:bg-blue-600 text-white text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/our-products"
                  className="px-5 py-3 rounded-lg bg-white hover:bg-[#F5F8FC] text-[#14243A] border border-slate-300 text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <span>View Our Products</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
