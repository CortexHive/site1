"use client";

import Link from "next/link";
import {
  Globe,
  Bot,
  Layers,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const DIVISIONS = [
  {
    index: "DIVISION 01",
    tag: "WEB ARCHITECTURE",
    title: "Web Platforms & Digital Presence",
    summary:
      "High-performance websites and institutional web platforms engineered for brand authority, search visibility, and measurable client acquisition.",
    icon: Globe,
    href: "/website-design",
    ctaLabel: "Explore Web Platforms",
    capabilities: [
      "Bespoke corporate & commercial websites",
      "Conversion-engineered landing architectures",
      "Sector-specific platforms for trades & clinics",
      "Interactive enquiry & appointment intake funnels",
      "Technical SEO & Schema.org structured graphs",
      "Sub-second Next.js edge performance",
    ],
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Cloudflare Edge"],
  },
  {
    index: "DIVISION 02",
    tag: "APPLIED AI & VOICE",
    title: "AI Systems & Workflow Automation",
    summary:
      "Production AI agents, conversational voice receptionists, and automated pipelines that eliminate manual administrative bottlenecks.",
    icon: Bot,
    href: "/ai-automation",
    ctaLabel: "Explore AI & Automation",
    capabilities: [
      "24/7 autonomous British voice AI receptionists",
      "Inbound call qualification & instant SMS/CRM dispatch",
      "Document intelligence & automated PDF extraction",
      "Private company knowledge bases (RAG pipelines)",
      "Multi-step CRM, email & webhook orchestration",
      "Custom LLM evaluation & guardrails",
    ],
    stack: ["OpenAI / Claude", "ElevenLabs Voice", "Twilio", "Vector RAG"],
  },
  {
    index: "DIVISION 03",
    tag: "PRODUCT ENGINEERING",
    title: "Custom Software & SaaS Platforms",
    summary:
      "End-to-end architecture, database design, and full-stack engineering for proprietary software products, SaaS MVPs, and internal tools.",
    icon: Layers,
    href: "/software-development",
    ctaLabel: "Explore Software Engineering",
    capabilities: [
      "Full-stack SaaS MVP architecture & delivery",
      "Multi-role client, student & admin portals",
      "Internal operations & dispatch dashboards",
      "Relational database & REST/GraphQL API systems",
      "Stripe subscription & usage-based billing rails",
      "Complete source code & IP ownership handover",
    ],
    stack: ["React / Next.js", "PostgreSQL", "Supabase", "Stripe API"],
  },
];

export default function ServiceDivisions() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-12 mb-12 border-b border-slate-200">
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-blue-600 font-semibold">
              01 // CORE PRACTICE AREAS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#090D16] tracking-[-0.025em] leading-[1.1]">
              Three Specialized Engineering Divisions.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every engagement is structured around practical commercial outcomes — whether establishing a commanding web presence, automating customer operations with AI, or shipping a full-scale software platform.
            </p>
          </div>
        </div>

        {/* 3-Column Architectural Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {DIVISIONS.map((div) => {
            const Icon = div.icon;
            return (
              <div
                key={div.index}
                className="bg-white rounded-xl border border-slate-200 p-7 sm:p-8 flex flex-col justify-between hover:border-slate-300 hover:shadow-[0_12px_32px_-12px_rgba(15,23,42,0.08)] transition-all duration-200"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-100">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-slate-400 block">
                        {div.index}
                      </span>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 mt-0.5 block">
                        {div.tag}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#0F172A] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-xl font-bold text-[#090D16] tracking-tight mb-3">
                    {div.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {div.summary}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2.5 mb-7">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Key Deliverables
                    </div>
                    {div.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stack & Action */}
                <div className="pt-5 border-t border-slate-100 space-y-5">
                  <div className="flex flex-wrap gap-1.5">
                    {div.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-[10px] font-mono text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={div.href}
                    className="w-full py-3 px-4 rounded-lg bg-[#0F172A] hover:bg-blue-600 text-white text-xs font-semibold inline-flex items-center justify-between transition-colors"
                  >
                    <span>{div.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
