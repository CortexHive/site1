import { Metadata } from "next";
import {
  CheckCircle2,
  ArrowRight,
  Zap,
  Phone,
  Wrench,
  Hammer,
  Paintbrush,
  Truck,
  Building,
} from "lucide-react";
import LeadForm from "@/components/lead-form";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Commercial & Trade Web Platforms | CortexHive",
  description:
    "Turnkey digital presence and conversion platforms engineered for UK builders, plumbers, electricians, contractors, and local service providers.",
  keywords: [
    "commercial website design UK",
    "trade business websites",
    "contractor web platform UK",
    "website design for builders",
    "website design for plumbers",
    "website design for electricians",
  ],
};

const TRADES = [
  { name: "Builders & Construction", icon: Building },
  { name: "Plumbers & Gas Engineers", icon: Wrench },
  { name: "Electricians", icon: Zap },
  { name: "Painters & Decorators", icon: Paintbrush },
  { name: "Handymen & Maintenance", icon: Hammer },
  { name: "Cleaning & Removals", icon: Truck },
];

const INCLUSIONS = [
  "Custom responsive web platform tailored to your exact sector",
  "100% mobile-friendly responsive layout optimized for smartphone users",
  "Clear service breakdown, verified credentials, and project highlights",
  "One-click WhatsApp chat button and direct phone click-to-call",
  "Interactive quote & customer enquiry intake form",
  "Technical on-page SEO setup (meta tags, local schemas, and headings)",
  "Social proof, trade accreditation links, and Google Business integration",
  "Fast milestone delivery in 3 to 5 business days once content is confirmed",
];

const TRANSPARENCY_NOTES = [
  {
    title: "Domain Name & Brand Identity",
    desc: "Domain names (e.g. yourbusiness.co.uk) remain 100% in your ownership with full administrative DNS control.",
  },
  {
    title: "High-Performance Cloud Hosting",
    desc: "Modern edge deployment with enterprise SSL security, sub-second latency, and 99.9% uptime monitoring.",
  },
  {
    title: "System Expansions & Multi-Page Silos",
    desc: "Easily scale your platform into dedicated service silos, project case study galleries, or automated booking systems.",
  },
  {
    title: "Ongoing Engineering Care",
    desc: "Optional ongoing maintenance and proactive technical updates to keep your system fast and secure.",
  },
];

const FAQS = [
  {
    q: "How does the commercial web development process work?",
    a: "We conduct a rapid technical scoping of your trade, services, and local operating areas. Once we gather your requirements and logo assets, we design, build, and deploy a bespoke, high-converting web platform ready to capture local enquiries.",
  },
  {
    q: "Who owns the website and source files?",
    a: "You own 100% of your website, design assets, and source files upon completion. We do not use restrictive proprietary locks or prevent you from migrating.",
  },
  {
    q: "How long does it take to deploy our platform?",
    a: "Once you provide your business details, contact information, and list of services, we typically have your production staging environment ready in 3 to 5 business days.",
  },
  {
    q: "Can we integrate an AI Voice Receptionist or booking system?",
    a: "Yes. All CortexHive platforms are engineered modularly, meaning you can easily connect our 24/7 AI Voice Receptionist or custom appointment booking pipelines at any time.",
  },
];

export default function SmallBusinessWebsitesPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 pt-24 sm:pt-28 pb-16 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-20">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-mono uppercase tracking-[0.16em] text-blue-600 font-semibold">
            COMMERCIAL &amp; TRADE WEB PLATFORMS
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#090D16] tracking-tight leading-[1.12]">
            Authoritative Web Platforms for UK Trades &amp; Local Businesses.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            High-converting digital presence and enquiry systems engineered specifically for UK builders, plumbers, electricians, contractors, and commercial services.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-2">
            <a
              href="#order-form"
              className="px-8 py-3.5 rounded-lg bg-[#0F172A] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors shadow-2xs"
            >
              <span>Scope Your Web Platform</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={SITE_CONFIG.getWhatsAppLink("website")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-[#0F172A] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Discuss via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Suitable Trades & Small Businesses */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-[#090D16]">
              Engineered for Busy Contractors &amp; Independent Operators
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              High-value residential and commercial clients verify contractors online before awarding work. Stand out with an authentic, responsive platform.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {TRADES.map((trade) => {
              const Icon = trade.icon;
              return (
                <div
                  key={trade.name}
                  className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 text-center flex flex-col items-center justify-center gap-2.5 hover:border-slate-300 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-[#0F172A] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-[#090D16] leading-tight">
                    {trade.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Inclusions & Technical Standards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-[#F8FAFC] rounded-xl p-6 sm:p-8 border border-slate-200 space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-blue-600 font-semibold block mb-1">
                ENGINEERING DELIVERABLES
              </span>
              <h3 className="text-xl font-bold text-[#090D16]">
                What Every Platform Includes
              </h3>
            </div>

            <ul className="space-y-3">
              {INCLUSIONS.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 bg-white rounded-xl p-6 sm:p-8 border border-slate-200 space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-slate-400 font-semibold block mb-1">
                STANDARDS &amp; GOVERNANCE
              </span>
              <h3 className="text-xl font-bold text-[#090D16]">
                Transparent Architecture
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Predictable engineering, clean handover, and zero proprietary lock-ins.
              </p>
            </div>

            <div className="space-y-4">
              {TRANSPARENCY_NOTES.map((note, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-xs font-bold text-[#090D16]">
                    {note.title}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {note.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#090D16]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Common questions on timelines, integrations, and deployment.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                <h4 className="text-sm font-bold text-[#090D16] mb-1.5">{faq.q}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enquiry Form */}
        <div id="order-form" className="pt-6">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-mono uppercase tracking-[0.16em] text-blue-600 font-semibold block mb-1">
              PROJECT INITIATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#090D16]">
              Scope Your Commercial Platform
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Fill in your business details below or reach out directly on WhatsApp to get started.
            </p>
          </div>

          <LeadForm defaultService="Business & Trade Website" />
        </div>
      </div>
    </div>
  );
}
