"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Layers,
  Workflow,
  PhoneCall,
  CheckCircle2,
  ExternalLink,
  Cpu,
} from "lucide-react";

type SystemView = "ai" | "platforms" | "products";

export default function Hero() {
  const [activeView, setActiveView] = useState<SystemView>("ai");

  const scrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-white pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-slate-200 overflow-hidden">
      {/* Subtle architectural dot matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:28px_28px] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 12-Column Asymmetric Architectural Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left 7 Columns: Editorial Authority */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 pt-2">
            {/* Technical Index Line */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-slate-50 border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-slate-700 font-semibold">
                UK Software, AI &amp; Digital Product Studio
              </span>
            </div>

            {/* Commanding Editorial Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#090D16] tracking-[-0.03em] leading-[1.06]">
                From Business Problem to{" "}
                <span className="text-blue-600">Working Product.</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-800 leading-snug max-w-2xl">
                We architect bespoke web platforms, engineer autonomous AI systems, and build full-stack software for ambitious organisations.
              </p>
            </div>

            {/* Executive Thesis */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Modern businesses don&apos;t need abstract technology presentations or generic templates. CortexHive combines full-stack software engineering, applied AI automation, and commercial product design to ship production-grade digital systems that streamline operations and drive revenue.
            </p>

            {/* Executive Action Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <button
                type="button"
                onClick={() => scrollTo("#contact")}
                className="px-6 py-3.5 rounded-lg bg-[#0F172A] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2.5 transition-colors shadow-2xs"
              >
                <span>Discuss a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/our-products"
                className="px-6 py-3.5 rounded-lg bg-white hover:bg-slate-50 text-[#0F172A] border border-slate-300 font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors"
              >
                <span>View Engineered Products</span>
              </Link>
            </div>

            {/* Architectural Proof Ledger */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                  01 / Delivery Proof
                </div>
                <div className="text-sm sm:text-base font-bold text-[#0F172A]">
                  Proprietary SaaS
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  AuraPDF, MarkScheme &amp; Rydigo
                </p>
              </div>

              <div className="border-l border-slate-200 pl-4 sm:pl-6">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                  02 / Core Stack
                </div>
                <div className="text-sm sm:text-base font-bold text-[#0F172A]">
                  Next.js &amp; Applied AI
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  TypeScript, PostgreSQL &amp; LLMs
                </p>
              </div>

              <div className="border-l border-slate-200 pl-4 sm:pl-6">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                  03 / Governance
                </div>
                <div className="text-sm sm:text-base font-bold text-[#0F172A]">
                  100% IP Handover
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Full source code ownership
                </p>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Architectural System Blueprint (Zero Scrollbars, Zero Cliché Browser Dots) */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] shadow-[0_12px_36px_-12px_rgba(15,23,42,0.08)] overflow-hidden">
              {/* Blueprint Header Bar */}
              <div className="px-4 py-3 bg-white border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-600" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0F172A]">
                    System Architecture Spec
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  PRODUCTION READY
                </span>
              </div>

              {/* Clean 3-Segment Selector (No horizontal scrollbar) */}
              <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-100/70 p-1 gap-1">
                <button
                  type="button"
                  onClick={() => setActiveView("ai")}
                  className={`py-2 px-2 rounded-md text-[11px] font-semibold transition-all text-center ${
                    activeView === "ai"
                      ? "bg-white text-[#0F172A] shadow-2xs border border-slate-200/80"
                      : "text-slate-600 hover:text-[#0F172A]"
                  }`}
                >
                  AI &amp; Voice Agents
                </button>
                <button
                  type="button"
                  onClick={() => setActiveView("platforms")}
                  className={`py-2 px-2 rounded-md text-[11px] font-semibold transition-all text-center ${
                    activeView === "platforms"
                      ? "bg-white text-[#0F172A] shadow-2xs border border-slate-200/80"
                      : "text-slate-600 hover:text-[#0F172A]"
                  }`}
                >
                  SaaS &amp; Software
                </button>
                <button
                  type="button"
                  onClick={() => setActiveView("products")}
                  className={`py-2 px-2 rounded-md text-[11px] font-semibold transition-all text-center ${
                    activeView === "products"
                      ? "bg-white text-[#0F172A] shadow-2xs border border-slate-200/80"
                      : "text-slate-600 hover:text-[#0F172A]"
                  }`}
                >
                  Live Products
                </button>
              </div>

              {/* Blueprint Content Area */}
              <div className="p-5 space-y-4">
                {activeView === "ai" && (
                  <div className="space-y-3.5">
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 font-semibold">
                          PIPELINE 01 // VOICE &amp; TRIAGE
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">Latency &lt; 400ms</span>
                      </div>
                      <h3 className="text-sm font-bold text-[#0F172A]">
                        Autonomous Call Answering &amp; Lead Qualification
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Natural British conversational voice agents that answer inbound business calls 24/7, qualify client requirements, and dispatch structured summaries to WhatsApp and CRM.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 font-semibold">
                          PIPELINE 02 // DOCUMENT &amp; WORKFLOW RAG
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">Zero-Leakage</span>
                      </div>
                      <h3 className="text-sm font-bold text-[#0F172A]">
                        Automated Document Parsing &amp; Operations Sync
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Custom extraction pipelines connecting emails, PDFs, and customer intake forms directly into PostgreSQL, Supabase, and internal operations dashboards.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 pt-1">
                      <div className="p-3 rounded-lg bg-white border border-slate-200">
                        <div className="text-[10px] font-mono text-slate-400 uppercase">Integrations</div>
                        <div className="text-xs font-bold text-[#0F172A] mt-0.5">OpenAI, Claude, Twilio</div>
                      </div>
                      <div className="p-3 rounded-lg bg-white border border-slate-200">
                        <div className="text-[10px] font-mono text-slate-400 uppercase">Availability</div>
                        <div className="text-xs font-bold text-emerald-700 mt-0.5">24/7 Autonomous</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeView === "platforms" && (
                  <div className="space-y-3.5">
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 font-semibold">
                          ARCHITECTURE // FULL-STACK WEB &amp; SAAS
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">Type-Safe</span>
                      </div>
                      <h3 className="text-sm font-bold text-[#0F172A]">
                        Multi-Role Portals, Dashboards &amp; Web Platforms
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        From high-converting commercial web platforms to complex multi-tenant SaaS applications with role-based access control, billing, and real-time analytics.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-2.5">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                        Standard Engineering Deliverables
                      </div>
                      {[
                        "Next.js 14 App Router & React Server Components",
                        "Relational PostgreSQL / Supabase schema architecture",
                        "Role-based authentication & Stripe subscription rails",
                        "Technical SEO, Schema.org graph & Core Web Vitals",
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeView === "products" && (
                  <div className="space-y-2.5">
                    {[
                      {
                        name: "MarkScheme",
                        type: "EdTech SaaS Platform",
                        desc: "250+ automated 11+ exams with Student, Parent & Moderator portals.",
                        url: "https://markscheme.co.uk",
                      },
                      {
                        name: "AuraPDF",
                        type: "Document Intelligence",
                        desc: "Client-side PDF redaction, cryptographic signing & AI querying.",
                      },
                      {
                        name: "Rydigo",
                        type: "Transport Operations",
                        desc: "Driver network & AI-assisted formal representation drafting.",
                      },
                      {
                        name: "Skyview",
                        type: "Client Platform",
                        desc: "Institutional course discovery & admissions intake platform.",
                        url: "https://skyview.org.uk",
                      },
                    ].map((prod) => (
                      <div
                        key={prod.name}
                        className="p-3 rounded-lg bg-white border border-slate-200 flex items-start justify-between gap-3"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#0F172A]">{prod.name}</span>
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                              {prod.type}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-600 mt-0.5">{prod.desc}</p>
                        </div>
                        {prod.url && (
                          <a
                            href={prod.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-blue-600 p-1"
                            title={`Visit ${prod.name}`}
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Panel Footer */}
                <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-[11px]">
                  <span className="font-mono text-slate-500">STATUS: ACCEPTING NEW PROJECTS</span>
                  <button
                    type="button"
                    onClick={() => scrollTo("#contact")}
                    className="font-semibold text-blue-600 hover:text-[#0F172A] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Request Technical Scope</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 4-Column Practice Matrix (No Pricing Tags) */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Link
              href="/website-design"
              className="group p-5 rounded-xl bg-[#F8FAFC] hover:bg-white border border-slate-200 hover:border-slate-300 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  01 / WEB PLATFORMS
                </span>
                <Globe className="w-4 h-4 text-slate-700 group-hover:text-blue-600 transition-colors" />
              </div>
              <h2 className="text-sm font-bold text-[#0F172A] group-hover:text-blue-600 transition-colors">
                Web Design &amp; Architecture
              </h2>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                High-converting Next.js websites and digital platforms built for speed and search authority.
              </p>
            </Link>

            <Link
              href="/ai-automation"
              className="group p-5 rounded-xl bg-[#F8FAFC] hover:bg-white border border-slate-200 hover:border-slate-300 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  02 / AUTOMATION
                </span>
                <Workflow className="w-4 h-4 text-slate-700 group-hover:text-blue-600 transition-colors" />
              </div>
              <h2 className="text-sm font-bold text-[#0F172A] group-hover:text-blue-600 transition-colors">
                AI &amp; Workflow Systems
              </h2>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Intelligent document pipelines, CRM automation, and bespoke internal AI assistants.
              </p>
            </Link>

            <Link
              href="/ai-receptionist"
              className="group p-5 rounded-xl bg-[#F8FAFC] hover:bg-white border border-slate-200 hover:border-slate-300 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  03 / VOICE AI
                </span>
                <PhoneCall className="w-4 h-4 text-slate-700 group-hover:text-blue-600 transition-colors" />
              </div>
              <h2 className="text-sm font-bold text-[#0F172A] group-hover:text-blue-600 transition-colors">
                Autonomous Voice Agents
              </h2>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                24/7 conversational AI receptionists that answer calls, qualify leads, and dispatch alerts.
              </p>
            </Link>

            <Link
              href="/software-development"
              className="group p-5 rounded-xl bg-[#F8FAFC] hover:bg-white border border-slate-200 hover:border-slate-300 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  04 / SOFTWARE &amp; SAAS
                </span>
                <Layers className="w-4 h-4 text-slate-700 group-hover:text-blue-600 transition-colors" />
              </div>
              <h2 className="text-sm font-bold text-[#0F172A] group-hover:text-blue-600 transition-colors">
                Custom Software &amp; MVPs
              </h2>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                End-to-end engineering for web applications, client portals, and scalable SaaS products.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
