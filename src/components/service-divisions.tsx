"use client";

import Link from "next/link";
import {
  Globe,
  Bot,
  Layers,
  Wrench,
  ArrowRight,
  Check,
} from "lucide-react";

const SERVICE_CATEGORIES = [
  {
    code: "01",
    title: "Website Development",
    benefit:
      "Establish a credible online presence that loads fast on every device and turns local or commercial visitors into direct enquiries.",
    icon: Globe,
    href: "/website-design",
    ctaLabel: "Explore Website Development",
    items: [
      { name: "Business websites", desc: "Structured multi-page websites built around your services and brand." },
      { name: "Landing pages", desc: "Focused conversion pages designed for campaigns or starter presence." },
      { name: "E-commerce", desc: "Clean online storefronts with secure checkout and product management." },
      { name: "Custom web applications", desc: "Interactive browser-based tools tailored to specific customer workflows." },
      { name: "Website redesigns", desc: "Modernise outdated websites for better speed, mobile usability and trust." },
    ],
  },
  {
    code: "02",
    title: "AI and Automation",
    benefit:
      "Capture calls after hours, eliminate repetitive administrative tasks and connect your everyday tools so your team works smarter.",
    icon: Bot,
    href: "/ai-automation",
    ctaLabel: "Explore AI & Automation",
    items: [
      { name: "AI receptionists", desc: "Handle incoming calls, answer questions and capture caller details." },
      { name: "Custom AI agents", desc: "Assistants trained on your business information for support and triage." },
      { name: "Workflow automation", desc: "Automate lead routing, notifications and routine follow-ups." },
      { name: "Document automation", desc: "Extract information from documents and generate standard paperwork faster." },
      { name: "AI integrations", desc: "Embed practical AI features directly into your existing tools and apps." },
      { name: "Business process automation", desc: "Connect forms, email, CRMs and spreadsheets without manual re-typing." },
    ],
  },
  {
    code: "03",
    title: "Software and SaaS",
    benefit:
      "Turn operational requirements or new product ideas into maintainable, scalable software built around your exact user roles.",
    icon: Layers,
    href: "/saas-development",
    ctaLabel: "Explore Software & SaaS",
    items: [
      { name: "SaaS development", desc: "Subscription-ready digital products from initial MVP to full platform." },
      { name: "Custom dashboards", desc: "Clear management visibility over jobs, enquiries, users and reporting." },
      { name: "Membership platforms", desc: "Gated content, subscriber accounts and recurring billing workflows." },
      { name: "Customer portals", desc: "Self-service portals for clients to view progress, upload files and manage requests." },
      { name: "Education platforms", desc: "Online assessment, learning and exam preparation systems (like MarkScheme)." },
      { name: "API integrations", desc: "Reliable data connections with Stripe, calendars, CRMs and third-party services." },
    ],
  },
  {
    code: "04",
    title: "Custom Digital Solutions",
    benefit:
      "Commission bespoke, privacy-conscious software and white-label digital tools when off-the-shelf products don't fit your model.",
    icon: Wrench,
    href: "/white-label-software",
    ctaLabel: "Explore White-Label & Custom Solutions",
    items: [
      { name: "White-label software", desc: "Rebrandable digital platforms and tools tailored for agencies and partners." },
      { name: "Browser-based tools", desc: "Fast client-side utilities that run directly in the browser without installs." },
      { name: "Business management systems", desc: "Replace fragile spreadsheets with reliable internal operations software." },
      { name: "Bespoke applications", desc: "Purpose-built digital products scoped and quoted around your requirements." },
      { name: "Document processing solutions", desc: "Secure PDF and document utilities built for everyday business workflows." },
    ],
  },
];

export default function ServiceDivisions() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-10 mb-12 border-b border-[#E2E8F0]">
          <div className="lg:col-span-7 space-y-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-600 block">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#14243A] tracking-tight leading-[1.1]">
              Four Practical Digital Capabilities Under One Roof.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Every service is designed around clear business outcomes — helping you win customers, save administrative time and launch dependable digital products.
            </p>
          </div>
        </div>

        {/* 2x2 Editorial Grid for the 4 Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {SERVICE_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.code}
                className="rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] p-7 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-5 mb-5 border-b border-[#E2E8F0]">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-blue-600">{cat.code}</span>
                      <h3 className="text-xl font-extrabold text-[#14243A] tracking-tight">
                        {cat.title}
                      </h3>
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-white border border-[#E2E8F0] text-[#14243A] flex items-center justify-center">
                      <Icon className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                    {cat.benefit}
                  </p>

                  <ul className="space-y-3 mb-7">
                    {cat.items.map((item) => (
                      <li key={item.name} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div className="text-xs sm:text-sm leading-snug">
                          <span className="font-bold text-[#14243A]">{item.name}: </span>
                          <span className="text-[#475569]">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 border-t border-[#E2E8F0]">
                  <Link
                    href={cat.href}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 hover:text-[#14243A] transition-colors"
                  >
                    <span>{cat.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
