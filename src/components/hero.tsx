"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { openConsultationModal } from "./consultation-modal";
import SectorDemoModal from "./sector-demo-modal";
import Pathway2SolutionModal from "./pathway2-solution-modal";
import { HERO_EXPLAINER_CHAPTERS } from "./hero-3d-explainer";

const Hero3DExplainer = dynamic(() => import("./hero-3d-explainer"), {
  ssr: false,
  loading: () => (
    <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#07162B] via-[#0E2A4F] to-[#040D1B] border border-[#0A1628]/15 shadow-editorial h-[520px] sm:h-[560px] flex flex-col items-center justify-center text-blue-100/80 gap-3">
      <div className="w-10 h-10 rounded-full border-2 border-[#C69B3A]/40 border-t-[#C69B3A] animate-spin" />
      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#F4E3B2]">
        Loading 3D Studio Explainer...
      </span>
    </div>
  ),
});

export default function Hero() {
  const [activeChapter, setActiveChapter] = useState<number>(0);
  const [activeSectorDemo, setActiveSectorDemo] = useState<string | null>(null);
  const [activePathway2Demo, setActivePathway2Demo] = useState<string | null>(null);

  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* SECTION 1 — CINEMATIC PURE WHITE + EMERALD & GOLD HERO */}
      <section className="relative bg-white pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-[#DCE6F2] overflow-hidden">
        {/* Whisper-light studio radial aura (keeps background luminous pure white) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 w-[680px] h-[680px] rounded-full bg-[radial-gradient(circle,rgba(20,58,107,0.07)_0%,rgba(198,155,58,0.05)_45%,transparent_72%)]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left 6 Columns: Bold Modern Display Sans & Interactive 3-Discipline Bar */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="lg:col-span-6"
            >
              {/* Prestige British Studio Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EDF3FA] border border-[#143A6B]/15 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#143A6B] mb-6">
                <span className="w-2 h-2 rounded-full bg-[#C69B3A]" />
                <span>UK Digital Product &amp; AI Studio</span>
              </div>

              {/* Confident Modern Display Headline */}
              <h1 className="text-[42px] sm:text-[54px] lg:text-[62px] font-extrabold text-[#0A1628] tracking-[-0.035em] leading-[1.04] mb-6">
                Technology that moves your{" "}
                <span className="text-[#C69B3A]">business</span> forward.
              </h1>

              {/* Grounded Studio Copy */}
              <p className="text-base sm:text-[17.5px] text-[#33475F] leading-[1.65] max-w-[520px] mb-8">
                We design dependable websites, build practical AI voice receptionists, and engineer custom software for UK trades, growing SMEs, and ambitious founders.
              </p>

              {/* High-Contrast Emerald & Crisp White Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
                <button
                  type="button"
                  onClick={() => openConsultationModal()}
                  className="px-6 py-3.5 rounded-full bg-[#143A6B] hover:bg-[#1D4ED8] text-white font-semibold text-sm inline-flex items-center justify-center gap-2.5 shadow-subtle transition-all cursor-pointer"
                >
                  <span>Book a Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollTo("#portfolio")}
                  className="px-6 py-3.5 rounded-full bg-white hover:bg-[#F4F7FB] text-[#0A1628] border border-[#0A1628]/15 hover:border-[#143A6B]/40 font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Explore Our Work</span>
                </button>
              </div>

              {/* 3 Interactive Capability Pillars Synced with the 3D Explainer */}
              <div className="pt-6 border-t border-[#DCE6F2] grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {HERO_EXPLAINER_CHAPTERS.map((chapter, idx) => {
                  const isSelected = activeChapter === idx;
                  return (
                    <button
                      key={chapter.id}
                      type="button"
                      onClick={() => setActiveChapter(idx)}
                      className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#F4F7FB] border-[#143A6B]/35 shadow-2xs"
                          : "bg-white border-transparent hover:border-[#DCE6F2] hover:bg-[#F4F7FB]/50"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span
                          className={`font-mono text-[10px] font-semibold tracking-[0.12em] uppercase ${
                            isSelected ? "text-[#143A6B]" : "text-[#C69B3A]"
                          }`}
                        >
                          {chapter.tag}
                        </span>
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isSelected ? "bg-[#143A6B]" : "bg-[#B9CDE3]"
                          }`}
                        />
                      </div>
                      <div className="text-[13.5px] font-bold text-[#0A1628] mb-1">
                        {chapter.title}
                      </div>
                      <p className="text-[11.5px] text-[#3F5570] leading-relaxed">
                        {chapter.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Right 6 Columns: Real-Time Interactive 3D Explainer Reel */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
              className="lg:col-span-6"
            >
              <Hero3DExplainer
                activeChapter={activeChapter}
                onChapterChange={setActiveChapter}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — TWO CLEAR PATHWAYS (GALLERY PEARL BAND + CRISP WHITE CARDS) */}
      <section className="bg-[#F4F7FB] border-b border-[#DCE6F2] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pathway 01 — Small Businesses & Trades */}
            <div className="bg-white rounded-2xl border border-[#DCE6F2] shadow-subtle p-7 sm:p-10 flex flex-col justify-between gap-8">
              <div>
                <div className="flex items-baseline justify-between gap-4 mb-4">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#143A6B]">
                    Pathway 01 — Small Businesses &amp; Trades
                  </span>
                  <span className="text-[36px] font-extrabold text-[#C69B3A]/30 leading-none select-none">
                    01
                  </span>
                </div>

                <h2 className="text-2xl sm:text-[32px] font-extrabold text-[#0A1628] tracking-[-0.025em] leading-[1.14] mb-3.5">
                  Get online credibly, answer every call, and win more local work.
                </h2>

                <p className="text-[15px] text-[#33475F] leading-relaxed max-w-[470px] mb-7">
                  Built for UK builders, plumbers, electricians, cleaners, and local service businesses that want reliable technology without agency jargon.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#61758F]">
                      Built for Practical Businesses
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveSectorDemo("builders-trades")}
                      className="font-mono text-[11px] font-semibold text-[#143A6B] hover:text-[#C69B3A] inline-flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Click to view 3D demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { slug: "builders-trades", label: "Builders & Trades" },
                      { slug: "plumbers-electricians", label: "Plumbing & Electrical" },
                      { slug: "window-cleaners", label: "Window Cleaning" },
                      { slug: "local-services", label: "Local Services" },
                    ].map((sector) => (
                      <button
                        key={sector.slug}
                        type="button"
                        onClick={() => setActiveSectorDemo(sector.slug)}
                        className="group bg-[#F4F7FB] hover:bg-[#143A6B] border border-[#DCE6F2] hover:border-[#143A6B] rounded-xl px-4 py-3 flex items-center justify-between text-[13.5px] font-semibold text-[#0A1628] hover:text-white transition-colors cursor-pointer"
                      >
                        <span className="whitespace-nowrap">{sector.label}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#C69B3A] group-hover:text-white transition-colors flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#DCE6F2] flex flex-wrap items-center gap-7">
                <Link
                  href="/pricing"
                  className="text-[13.5px] font-bold text-[#143A6B] hover:text-[#C69B3A] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Explore Website Packages</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/ai-receptionist"
                  className="text-[13.5px] font-semibold text-[#33475F] hover:text-[#0A1628] transition-colors"
                >
                  AI Receptionist Service
                </Link>
              </div>
            </div>

            {/* Pathway 02 — Custom AI & Software Clients */}
            <div className="bg-white rounded-2xl border border-[#DCE6F2] shadow-subtle p-7 sm:p-10 flex flex-col justify-between gap-8">
              <div>
                <div className="flex items-baseline justify-between gap-4 mb-4">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C69B3A]">
                    Pathway 02 — Custom AI &amp; Software Clients
                  </span>
                  <span className="text-[36px] font-extrabold text-[#143A6B]/20 leading-none select-none">
                    02
                  </span>
                </div>

                <h2 className="text-2xl sm:text-[32px] font-extrabold text-[#0A1628] tracking-[-0.025em] leading-[1.14] mb-3.5">
                  Turn operational bottlenecks or product ideas into working software.
                </h2>

                <p className="text-[15px] text-[#33475F] leading-relaxed max-w-[470px] mb-7">
                  Full-stack SaaS platforms, intelligent agents, client portals, and document systems engineered around your exact business rules.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#61758F]">
                      Tailored Engineering Scope
                    </span>
                    <button
                      type="button"
                      onClick={() => setActivePathway2Demo("custom-saas")}
                      className="font-mono text-[11px] font-semibold text-[#143A6B] hover:text-[#C69B3A] inline-flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Click to view 3D demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { slug: "custom-saas", label: "Custom SaaS" },
                      { slug: "ai-agents", label: "AI Agents" },
                      { slug: "dashboards-portals", label: "Dashboards" },
                      { slug: "api-document-systems", label: "API Integrations" },
                    ].map((sol) => (
                      <button
                        key={sol.slug}
                        type="button"
                        onClick={() => setActivePathway2Demo(sol.slug)}
                        className="group bg-[#F4F7FB] hover:bg-[#08182E] border border-[#DCE6F2] hover:border-[#08182E] rounded-xl px-4 py-3 flex items-center justify-between text-[13.5px] font-semibold text-[#0A1628] hover:text-white transition-colors cursor-pointer"
                      >
                        <span className="whitespace-nowrap">{sol.label}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#C69B3A] group-hover:text-white transition-colors flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#DCE6F2] flex flex-wrap items-center gap-7">
                <button
                  type="button"
                  onClick={() => openConsultationModal("Custom Software / SaaS")}
                  className="text-[13.5px] font-bold text-[#143A6B] hover:text-[#C69B3A] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <Link
                  href="/our-products"
                  className="text-[13.5px] font-semibold text-[#33475F] hover:text-[#0A1628] transition-colors"
                >
                  View Owned Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 3D Sector Sample Webpage Modal */}
      <SectorDemoModal
        sectorSlug={activeSectorDemo}
        onClose={() => setActiveSectorDemo(null)}
      />

      {/* Interactive 3D Custom AI & Software Workflow Modal */}
      <Pathway2SolutionModal
        solutionSlug={activePathway2Demo}
        onClose={() => setActivePathway2Demo(null)}
      />
    </>
  );
}
