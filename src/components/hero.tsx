"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Bot,
  Layers,
  Sparkles,
  Workflow,
  Smartphone,
  Laptop,
  Database,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"website" | "dashboard" | "ai" | "systems">("website");

  const scrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-white pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-[#E2E8F0]">
      {/* Subtle light background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-50/70 via-sky-50/50 to-indigo-50/40 rounded-full filter blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F8FC] border border-[#E2E8F0] text-[11px] sm:text-xs font-bold text-blue-700 uppercase tracking-widest mb-6 shadow-2xs"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>AI, WEBSITES &amp; SOFTWARE DEVELOPMENT</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-[#14243A] tracking-tight leading-[1.12] sm:leading-[1.08] mb-6"
          >
            From Business Websites to{" "}
            <span className="text-gradient-blue">Intelligent Software Solutions.</span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-[#475569] max-w-3xl mx-auto leading-relaxed font-normal mb-8 px-2 sm:px-0"
          >
            We design professional websites, build custom AI agents and develop digital products that help businesses automate operations, work smarter and grow.
          </motion.p>

          {/* Introductory Message Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
            <span>Professional business websites starting from £99.</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 max-w-md mx-auto sm:max-w-none"
          >
            <button
              onClick={() => scrollTo("#services")}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all active:scale-98"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#F5F8FC] hover:bg-[#E2E8F0] border border-[#E2E8F0] text-[#14243A] font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>Start a Project</span>
            </Link>
          </motion.div>
        </div>

        {/* Hero Interactive Light Showcase (Laptop / Mobile / Dashboard / AI Workflow) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="max-w-5xl mx-auto"
        >
          {/* Browser / Device Shell - Pure Light Design */}
          <div className="bg-[#F8FAFD] rounded-2xl sm:rounded-3xl border border-[#E2E8F0] shadow-subtle overflow-hidden">
            {/* Top Toolbar */}
            <div className="px-4 sm:px-6 py-3.5 bg-white border-b border-[#E2E8F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="ml-2 text-xs font-mono text-[#64748B] hidden sm:inline">
                  https://cortexhive.co.uk/solutions/{activeTab}
                </span>
              </div>

              {/* View Selector Tabs */}
              <div className="flex items-center gap-1 bg-[#F5F8FC] p-1 rounded-xl border border-[#E2E8F0] overflow-x-auto max-w-full">
                <button
                  type="button"
                  onClick={() => setActiveTab("website")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                    activeTab === "website"
                      ? "bg-white text-blue-600 shadow-2xs"
                      : "text-[#64748B] hover:text-[#14243A]"
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Websites &amp; Mobile</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("dashboard")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                    activeTab === "dashboard"
                      ? "bg-white text-blue-600 shadow-2xs"
                      : "text-[#64748B] hover:text-[#14243A]"
                  }`}
                >
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>SaaS Dashboard</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("ai")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                    activeTab === "ai"
                      ? "bg-white text-blue-600 shadow-2xs"
                      : "text-[#64748B] hover:text-[#14243A]"
                  }`}
                >
                  <Bot className="w-3.5 h-3.5" />
                  <span>AI Agent Workflow</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("systems")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                    activeTab === "systems"
                      ? "bg-white text-blue-600 shadow-2xs"
                      : "text-[#64748B] hover:text-[#14243A]"
                  }`}
                >
                  <Workflow className="w-3.5 h-3.5" />
                  <span>Connected Systems</span>
                </button>
              </div>
            </div>

            {/* Viewport Content */}
            <div className="p-4 sm:p-8 bg-white min-h-[380px]">
              {/* TAB 1: WEBSITE & MOBILE PREVIEW */}
              {activeTab === "website" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-7 bg-[#F8FAFD] rounded-2xl p-5 sm:p-6 border border-[#E2E8F0] space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                      <div className="flex items-center gap-2">
                        <Laptop className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-bold text-[#14243A]">Desktop Responsive Website</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Live Preview
                      </span>
                    </div>

                    <div className="bg-white rounded-xl p-4 border border-[#E2E8F0] space-y-2">
                      <div className="h-3 w-1/3 bg-blue-600/20 rounded" />
                      <div className="h-6 w-3/4 bg-[#14243A] rounded font-bold" />
                      <div className="h-3 w-full bg-[#E2E8F0] rounded" />
                      <div className="h-3 w-4/5 bg-[#E2E8F0] rounded" />
                      <div className="pt-2 flex gap-2">
                        <div className="h-7 w-24 bg-blue-600 rounded-full" />
                        <div className="h-7 w-20 bg-[#F5F8FC] border border-[#E2E8F0] rounded-full" />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                      <div className="p-2.5 rounded-xl bg-white border border-[#E2E8F0]">
                        <span className="block text-[10px] text-[#64748B] font-bold">Speed Index</span>
                        <span className="text-xs font-extrabold text-emerald-600">0.8s (Fast)</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-[#E2E8F0]">
                        <span className="block text-[10px] text-[#64748B] font-bold">SEO Score</span>
                        <span className="text-xs font-extrabold text-blue-600">100 / 100</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-[#E2E8F0]">
                        <span className="block text-[10px] text-[#64748B] font-bold">Mobile First</span>
                        <span className="text-xs font-extrabold text-[#14243A]">100% Fluid</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex justify-center">
                    {/* Mobile Phone Mockup */}
                    <div className="w-56 bg-white rounded-3xl p-3 border-2 border-[#CBD5E1] shadow-md space-y-3">
                      <div className="flex items-center justify-between text-[10px] font-mono text-[#64748B] pb-1 border-b border-[#E2E8F0]">
                        <span className="flex items-center gap-1 font-bold">
                          <Smartphone className="w-3 h-3 text-blue-600" />
                          Mobile View
                        </span>
                        <span>09:41</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-4 w-16 bg-blue-600 rounded" />
                        <div className="h-5 w-full bg-[#14243A] rounded font-bold" />
                        <div className="p-2 bg-[#F8FAFD] rounded-lg border border-[#E2E8F0] space-y-1">
                          <span className="text-[10px] font-bold text-[#14243A] block">Enquiry Form</span>
                          <div className="h-4 bg-white rounded border border-[#CBD5E1]" />
                          <div className="h-5 bg-blue-600 rounded text-center text-[9px] text-white font-bold flex items-center justify-center">
                            Submit Request
                          </div>
                        </div>
                        <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center gap-1.5 text-[10px] font-bold text-emerald-800">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                          <span>WhatsApp Chat Ready</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: SAAS DASHBOARD */}
              {activeTab === "dashboard" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-bold text-[#14243A]">MarkScheme 11+ Examination Engine (Live SaaS)</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                      250+ Mock Exams
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0]">
                      <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">Active Students</span>
                      <div className="text-xl font-extrabold text-[#14243A] mt-0.5">Role-Based Portals</div>
                      <span className="text-[11px] text-emerald-600 font-semibold">Student, Parent, Moderator</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0]">
                      <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">Mock Papers</span>
                      <div className="text-xl font-extrabold text-[#14243A] mt-0.5">250+ Papers</div>
                      <span className="text-[11px] text-blue-600 font-semibold">Maths, Verbal, Non-Verbal</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0]">
                      <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">Evaluation</span>
                      <div className="text-xl font-extrabold text-[#14243A] mt-0.5">Instant Scoring</div>
                      <span className="text-[11px] text-purple-600 font-semibold">Automated Rubrics</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0] space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#14243A]">Architecture Stack</span>
                      <span className="text-emerald-700 font-mono text-[11px]">Production Stable</span>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="px-2.5 py-1 rounded-md bg-white border border-[#CBD5E1] text-[#475569] font-medium">Next.js 14</span>
                      <span className="px-2.5 py-1 rounded-md bg-white border border-[#CBD5E1] text-[#475569] font-medium">TypeScript</span>
                      <span className="px-2.5 py-1 rounded-md bg-white border border-[#CBD5E1] text-[#475569] font-medium">PostgreSQL</span>
                      <span className="px-2.5 py-1 rounded-md bg-white border border-[#CBD5E1] text-[#475569] font-medium">Automated Engagement Triggers</span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: AI AGENT WORKFLOW */}
              {activeTab === "ai" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-bold text-[#14243A]">Rydigo AI Letter Generator &amp; Community Triage</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Autonomous Flow
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="p-3 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0] flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[11px]">01</span>
                        <span className="font-semibold text-[#14243A]">Driver Inquiry / Dispute Intake</span>
                      </div>
                      <span className="text-[10px] font-bold text-[#64748B]">Payload Validated</span>
                    </div>

                    <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-[11px]">02</span>
                        <span className="font-bold text-[#14243A]">AI Regulatory Context Matching</span>
                      </div>
                      <span className="text-[10px] font-bold text-blue-700 bg-white px-2 py-0.5 rounded">TfL / Local Council Rules</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0] flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[11px]">03</span>
                        <span className="font-semibold text-[#14243A]">Formal Legal Representation Drafted</span>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded">Export Ready</span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: CONNECTED DIGITAL SYSTEMS */}
              {activeTab === "systems" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                    <div className="flex items-center gap-2">
                      <Workflow className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-bold text-[#14243A]">AuraPDF Offline-First Architecture &amp; Client Sync</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                      Zero-Server Privacy
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0] space-y-1">
                      <div className="flex items-center gap-2 font-bold text-[#14243A]">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>Client-Side Document Pipeline</span>
                      </div>
                      <p className="text-[11px] text-[#64748B]">
                        Zero document data touches external servers. Digital signatures &amp; form filling rendered directly in browser memory.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0] space-y-1">
                      <div className="flex items-center gap-2 font-bold text-[#14243A]">
                        <Database className="w-4 h-4 text-blue-600" />
                        <span>Connected Web APIs</span>
                      </div>
                      <p className="text-[11px] text-[#64748B]">
                        Seamless integration with Stripe billing, Supabase real-time auth, and PostgreSQL enterprise schemas.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* SECTION 5.2 — TRUST AND CAPABILITIES STRIP */}
        <div className="mt-14 pt-10 border-t border-[#E2E8F0]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
            <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xs sm:text-sm font-bold text-[#14243A] leading-tight">Website Design &amp; Development</h2>
                <p className="text-[11px] text-[#64748B] mt-0.5 font-medium">Starting from £99</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                <Workflow className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xs sm:text-sm font-bold text-[#14243A] leading-tight">AI &amp; Workflow Automation</h2>
                <p className="text-[11px] text-[#64748B] mt-0.5 font-medium">Streamlined Ops</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xs sm:text-sm font-bold text-[#14243A] leading-tight">Custom AI &amp; Voice Agents</h2>
                <p className="text-[11px] text-[#64748B] mt-0.5 font-medium">24/7 Operations</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xs sm:text-sm font-bold text-[#14243A] leading-tight">SaaS &amp; Software Development</h2>
                <p className="text-[11px] text-[#64748B] mt-0.5 font-medium">Full-Stack Digital Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}