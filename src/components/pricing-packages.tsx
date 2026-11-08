"use client";

import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export const ENGAGEMENT_MODELS = [
  {
    id: "web-platforms",
    index: "MODEL 01",
    badge: "Fixed-Scope Delivery",
    name: "Web Platforms & Digital Presence",
    structure: "Scoped Fixed Proposal",
    timeline: "Typical delivery: 1 – 3 weeks",
    tagline:
      "For businesses, trades, clinics, and brands requiring an authoritative, high-converting digital footprint.",
    featured: false,
    serviceRequired: "Web Platform & Design",
    whatsappContext: "website",
    features: [
      "Bespoke responsive UI/UX tailored to your brand",
      "Multi-page or focused conversion architecture",
      "Interactive client enquiry & lead qualification flows",
      "Direct WhatsApp, click-to-call & booking integrations",
      "Complete UK technical SEO & Google Search Console setup",
      "Sub-second cloud hosting & SSL configuration",
      "Full ownership of design assets and source code",
    ],
    ctaLabel: "Request Web Scope",
  },
  {
    id: "ai-automation",
    index: "MODEL 02",
    badge: "High Operational ROI",
    name: "AI Voice & Workflow Automation",
    structure: "Tailored Implementation",
    timeline: "Typical delivery: 1 – 4 weeks",
    tagline:
      "For organisations looking to capture every inbound call and eliminate repetitive administrative workflows.",
    featured: true,
    serviceRequired: "AI & Workflow Automation",
    whatsappContext: "ai-automation",
    features: [
      "24/7 conversational British AI voice receptionist",
      "Automated caller qualification & SMS/email dispatch",
      "Custom document extraction & PDF intelligence pipelines",
      "CRM, calendar & database webhook synchronisation",
      "Private internal knowledge base (RAG) deployment",
      "Comprehensive testing, guardrails & latency tuning",
      "Works seamlessly with existing UK phone lines & tools",
    ],
    ctaLabel: "Scope AI Integration",
  },
  {
    id: "custom-software",
    index: "MODEL 03",
    badge: "Full-Stack Product",
    name: "Custom Software & SaaS MVPs",
    structure: "Milestone Engineering",
    timeline: "Typical delivery: 4 – 8 weeks",
    tagline:
      "For founders and established companies building proprietary software products, portals, and internal tools.",
    featured: false,
    serviceRequired: "Custom Software & SaaS",
    whatsappContext: "software",
    features: [
      "End-to-end system architecture & database schema design",
      "Full-stack Next.js, React, TypeScript & PostgreSQL build",
      "Multi-role authentication (Client, Staff, Admin portals)",
      "Custom analytics, reporting & operational dashboards",
      "Stripe subscription, invoicing & payment integration",
      "Automated CI/CD deployment & production cloud setup",
      "100% intellectual property & repository handover",
    ],
    ctaLabel: "Scope Software Build",
  },
];

export default function PricingPackages() {
  const handleSelectModel = (serviceRequired: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("cortexhive:select-package", {
          detail: { serviceRequired },
        })
      );
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="engagement" className="py-20 sm:py-28 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-12 mb-12 border-b border-slate-200">
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-blue-600 font-semibold">
              02 // ENGAGEMENT MODELS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#090D16] tracking-[-0.025em] leading-[1.1]">
              Structured for Predictable Delivery.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every project begins with a clear technical specification, defined deliverables, and a fixed milestone roadmap — eliminating agency ambiguity and open-ended hourly billing.
            </p>
          </div>
        </div>

        {/* 3-Column Engagement Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-12">
          {ENGAGEMENT_MODELS.map((model) => (
            <div
              key={model.id}
              className={`rounded-xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 relative ${
                model.featured
                  ? "bg-[#F8FAFC] border-2 border-[#0F172A] shadow-[0_16px_40px_-12px_rgba(15,23,42,0.1)]"
                  : "bg-white border border-slate-200 hover:border-slate-300"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-5 mb-6 border-b border-slate-200/80">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                    {model.index}
                  </span>
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded font-semibold ${
                      model.featured
                        ? "bg-[#0F172A] text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {model.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#090D16] tracking-tight">
                  {model.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {model.tagline}
                </p>

                <div className="my-6 p-3.5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono uppercase text-slate-400">
                      Commercial Structure
                    </div>
                    <div className="text-xs font-bold text-[#0F172A] mt-0.5">
                      {model.structure}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono uppercase text-slate-400">
                      Turnaround
                    </div>
                    <div className="text-xs font-semibold text-blue-600 mt-0.5">
                      {model.timeline.replace("Typical delivery: ", "")}
                    </div>
                  </div>
                </div>

                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Included In Scope
                </div>
                <ul className="space-y-2.5 mb-8">
                  {model.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-200/80">
                <button
                  type="button"
                  onClick={() => handleSelectModel(model.serviceRequired)}
                  className={`w-full py-3.5 px-4 rounded-lg text-xs font-semibold inline-flex items-center justify-between transition-colors ${
                    model.featured
                      ? "bg-blue-600 hover:bg-[#0F172A] text-white"
                      : "bg-[#0F172A] hover:bg-blue-600 text-white"
                  }`}
                >
                  <span>{model.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-between px-1 text-[11px]">
                  <span className="text-slate-400 font-mono">FIXED MILESTONES</span>
                  <a
                    href={SITE_CONFIG.getWhatsAppLink(model.whatsappContext)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-[#0F172A] font-semibold transition-colors"
                  >
                    Direct WhatsApp &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ongoing Technical Care & Infrastructure Bar */}
        <div className="rounded-xl bg-[#F8FAFC] border border-slate-200 p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-[#0F172A] flex items-center justify-center flex-shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-blue-600 font-semibold">
                POST-LAUNCH CONTINUITY
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#090D16] mt-0.5">
                Managed Cloud Hosting, Security &amp; Ongoing Engineering Support
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
                You own 100% of your platform upon completion. For teams wanting hands-off reliability, we provide optional managed hosting, daily backups, security patching, and continuous feature iteration without restrictive lock-in contracts.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleSelectModel("Managed Hosting & Technical Support")}
            className="px-5 py-3 rounded-lg bg-white hover:bg-slate-100 text-[#0F172A] border border-slate-300 text-xs font-semibold whitespace-nowrap transition-colors"
          >
            Enquire About Retainers
          </button>
        </div>
      </div>
    </section>
  );
}
