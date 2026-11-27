"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const DigitalExperiences3DVideo = dynamic(
  () => import("./digital-experiences-3d-video"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[340px] sm:min-h-[420px] bg-gradient-to-br from-[#07162B] via-[#0E2A4F] to-[#040D1B] flex flex-col items-center justify-center gap-3 text-blue-100/80">
        <div className="w-9 h-9 rounded-full border-2 border-[#C69B3A]/40 border-t-[#C69B3A] animate-spin" />
        <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[#F4E3B2]">
          Loading 3D Digital Experiences...
        </span>
      </div>
    ),
  }
);

const STAGE_DISCIPLINES = [
  {
    code: "01",
    shortLabel: "Digital Experiences",
    eyebrow: "Websites, Applications & Design Systems",
    title: "Websites & digital products crafted for clarity and genuine enquiries.",
    summary:
      "Fast, mobile-first business websites, landing pages, e-commerce storefronts, and redesigns designed with editorial restraint so local and commercial visitors turn into direct conversations.",
    image: "/luxury/service-digital.webp",
    imageAlt:
      "Interactive 3D showcase representing CortexHive digital experiences",
    use3DVideo: true,
    specs: [
      "Business Websites (From £99)",
      "Conversion Landing Pages",
      "E-Commerce & Web Apps",
      "Core Web Vitals & UK SEO",
    ],
    primaryCta: { label: "Explore Website Design", href: "/website-design" },
    secondaryCta: { label: "View Website Packages", href: "/pricing" },
  },
  {
    code: "02",
    shortLabel: "Artificial Intelligence",
    eyebrow: "Voice AI, Agents & Workflow Automation",
    title: "Practical AI systems that answer calls and cut out repetitive admin.",
    summary:
      "24/7 UK AI phone receptionists, custom business agents, document processing, and connected workflows that capture leads reliably without disrupting your team.",
    image: "/luxury/service-ai.webp",
    imageAlt:
      "3D visual representing CortexHive voice AI and business automation workflows",
    use3DVideo: false,
    specs: [
      "24/7 UK AI Phone Receptionist",
      "Custom Business AI Agents",
      "Document & Invoice Automation",
      "WhatsApp & CRM Lead Routing",
    ],
    primaryCta: { label: "Explore AI Receptionist", href: "/ai-receptionist" },
    secondaryCta: { label: "AI Automation Services", href: "/ai-automation" },
  },
  {
    code: "03",
    shortLabel: "Software Engineering",
    eyebrow: "Custom SaaS, Portals & API Architecture",
    title: "Scalable custom software & SaaS products engineered to last.",
    summary:
      "Multi-tenant SaaS platforms, client dashboards, white-label software, and full-stack integrations architected cleanly from MVP to enterprise scale.",
    image: "/luxury/service-software.webp",
    imageAlt:
      "3D visual representing CortexHive custom software and SaaS engineering",
    use3DVideo: false,
    specs: [
      "Custom SaaS & Startup MVPs",
      "Dashboards & Client Portals",
      "White-Label Digital Tools",
      "Stripe, Webhook & API Systems",
    ],
    primaryCta: { label: "Explore Software & SaaS", href: "/saas-development" },
    secondaryCta: { label: "White-Label Solutions", href: "/white-label-software" },
  },
];

export default function ServiceDivisions() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = STAGE_DISCIPLINES[activeIdx];

  return (
    <section
      id="services"
      className="py-20 sm:py-28 bg-white border-b border-[#DCE6F2]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Header + Emerald Discipline Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[#DCE6F2]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#143A6B]">
              <span className="w-6 h-[2px] bg-[#C69B3A]" />
              <span>Core Engineering Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0A1628] tracking-[-0.03em] leading-[1.08]">
              Three disciplines, engineered to{" "}
              <span className="text-[#143A6B]">work together.</span>
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="CortexHive Engineering Disciplines"
            className="inline-flex flex-wrap sm:flex-nowrap border border-[#DCE6F2] rounded-xl bg-[#F4F7FB] p-1.5"
          >
            {STAGE_DISCIPLINES.map((item, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={item.code}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIdx(idx)}
                  className={`px-4 py-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-[#143A6B] text-white shadow-2xs"
                      : "text-[#33475F] hover:text-[#0A1628]"
                  }`}
                >
                  <span
                    className={`font-mono mr-1.5 ${
                      isActive ? "text-[#F4E3B2]" : "text-[#C69B3A]"
                    }`}
                  >
                    {item.code}
                  </span>
                  {item.shortLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cinematic Discipline Showcase Frame */}
        <div className="rounded-2xl border border-[#DCE6F2] bg-white overflow-hidden shadow-editorial">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.code}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 items-stretch"
            >
              {/* Left 7 Columns: Real-Time 3D Stage for Digital Experiences, Visual for AI/Software */}
              <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[440px] lg:min-h-[480px] bg-[#07162B] border-b lg:border-b-0 lg:border-r border-[#DCE6F2] overflow-hidden p-3 sm:p-4 flex">
                {current.use3DVideo ? (
                  <DigitalExperiences3DVideo />
                ) : (
                  <div className="relative w-full h-full min-h-[320px] sm:min-h-[410px] rounded-xl overflow-hidden bg-white">
                    <Image
                      src={current.image}
                      alt={current.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 border border-[#DCE6F2] rounded-full px-3.5 py-1.5 inline-flex items-center gap-2 font-mono text-[10.5px] font-semibold text-[#0A1628] shadow-2xs">
                      <span className="text-[#C69B3A]">{current.code}</span>
                      <span className="text-[#0A1628]/25">/</span>
                      <span>{current.shortLabel}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Right 5 Columns: Crisp Spec Panel */}
              <div className="lg:col-span-5 p-7 sm:p-10 lg:p-11 flex flex-col justify-between bg-white space-y-8">
                <div className="space-y-4">
                  <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#C69B3A] block">
                    {current.eyebrow}
                  </span>

                  <h3 className="text-2xl sm:text-[28px] font-extrabold text-[#0A1628] tracking-[-0.025em] leading-[1.16]">
                    {current.title}
                  </h3>

                  <p className="text-sm text-[#33475F] leading-relaxed">
                    {current.summary}
                  </p>

                  {/* Hairline Spec Index */}
                  <div className="pt-2 border-t border-[#DCE6F2] divide-y divide-[#DCE6F2]">
                    {current.specs.map((spec, sIdx) => (
                      <div
                        key={spec}
                        className="py-2.5 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#0A1628]"
                      >
                        <span>{spec}</span>
                        <span className="font-mono text-[10.5px] text-[#C69B3A]">
                          0{sIdx + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3">
                  <Link
                    href={current.primaryCta.href}
                    className="px-5 py-3 rounded-full bg-[#143A6B] hover:bg-[#1D4ED8] text-white text-xs sm:text-[13px] font-semibold inline-flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>{current.primaryCta.label}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href={current.secondaryCta.href}
                    className="px-5 py-3 rounded-full bg-[#F4F7FB] hover:bg-[#EDF3FA] border border-[#DCE6F2] text-[#0A1628] text-xs sm:text-[13px] font-semibold inline-flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>{current.secondaryCta.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#143A6B]" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Directory Link */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
          <p className="text-xs sm:text-sm text-[#33475F]">
            Explore dedicated pages for Website Design, AI Receptionists, AI Agents, SaaS, and White-Label Engineering.
          </p>
          <Link
            href="/services"
            className="text-xs sm:text-sm font-bold text-[#143A6B] hover:text-[#C69B3A] inline-flex items-center gap-1.5 transition-colors flex-shrink-0"
          >
            <span>Full Services Directory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
