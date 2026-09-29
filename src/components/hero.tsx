"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Layers,
  Bot,
  GraduationCap,
  Globe,
  Terminal,
  ChevronRight,
} from "lucide-react";

const REAL_SHOWCASE = [
  {
    id: "rydigoo",
    name: "Rydigoo",
    tag: "CORTEXHIVE PRODUCT",
    role: "Driver Community & AI Letters",
    stat: "Multi-city Network",
    detail: "AI-assisted dispute letter drafting, live driver chat & credential verification.",
    icon: Bot,
    color: "from-purple-500/20 to-indigo-500/20",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    id: "markscheme",
    name: "MarkScheme",
    tag: "DIGITAL PRODUCT",
    role: "11+ Assessment SaaS",
    stat: "250+ Mock Exams",
    detail: "Timed mock exams, automated scoring rubrics & parent engagement monitoring.",
    icon: GraduationCap,
    color: "from-blue-500/20 to-cyan-500/20",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    id: "skyview",
    name: "Skyview",
    tag: "CLIENT PROJECT",
    role: "Education Consultancy",
    stat: "Global Admissions",
    detail: "Course directory, inquiry qualification engine & digital document intake.",
    icon: Globe,
    color: "from-cyan-500/20 to-emerald-500/20",
    badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
  },
  {
    id: "evtradeshow",
    name: "EVTradeShow",
    tag: "DIGITAL PLATFORM",
    role: "EV Events Directory",
    stat: "Global Directory",
    detail: "Searchable international EV summits, calendar filters & organizer portal.",
    icon: Layers,
    color: "from-emerald-500/20 to-teal-500/20",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
];

const LIFECYCLE_STEPS = [
  "IDEA",
  "DISCOVERY",
  "PRODUCT DESIGN",
  "PROTOTYPE",
  "DEVELOPMENT",
  "AI INTEGRATION",
  "TESTING",
  "DEPLOYMENT",
  "ONGOING IMPROVEMENT",
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);

  const scrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-white pt-28 pb-16 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-purple-100/60 via-cyan-50/40 to-transparent rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Company Stance Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[11px] font-bold text-purple-700 uppercase tracking-widest mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            <span>We Don&apos;t Just Talk About AI. We Build It.</span>
          </motion.div>

          {/* Core Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-950 font-outfit tracking-tight leading-[1.08] mb-6"
          >
            From Business Problem to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
              Working Product.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium mb-10"
          >
            CortexHive builds AI-powered applications, intelligent automation and custom software for businesses and ambitious founders.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo("#portfolio")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-bold text-sm transition-all"
            >
              <span>Explore Our Work</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
          </motion.div>
        </div>

        {/* Real Product Interface Showcase (No Generic AI Brain Imagery) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          {/* Product Interface Window Frame */}
          <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
            {/* Top Browser Bar */}
            <div className="px-6 py-4 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-xs font-mono text-slate-400 hidden sm:inline">
                  cortexhive://products/{REAL_SHOWCASE[activeTab].id}
                </span>
              </div>

              {/* Product Switcher Pills */}
              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
                {REAL_SHOWCASE.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(idx)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      activeTab === idx
                        ? "bg-purple-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Product UI Viewport */}
            <div className="p-6 sm:p-10 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Product Meta & Status */}
                <div className="lg:col-span-5 space-y-4">
                  <span
                    className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border ${REAL_SHOWCASE[activeTab].badgeColor}`}
                  >
                    {REAL_SHOWCASE[activeTab].tag}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-extrabold font-outfit text-white">
                    {REAL_SHOWCASE[activeTab].name}
                  </h3>
                  <p className="text-sm font-semibold text-purple-400">
                    {REAL_SHOWCASE[activeTab].role}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                    {REAL_SHOWCASE[activeTab].detail}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Status: Verified Production Architecture</span>
                  </div>
                </div>

                {/* Right: Live Interactive Mockup Card */}
                <div className="lg:col-span-7">
                  <div className="bg-slate-800/90 rounded-2xl border border-slate-700/80 p-5 sm:p-6 shadow-inner space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-purple-400" />
                        <span className="text-xs font-mono text-slate-300">
                          {REAL_SHOWCASE[activeTab].name.toLowerCase()}.app
                        </span>
                      </div>
                      <span className="text-[10px] font-mono bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">
                        {REAL_SHOWCASE[activeTab].stat}
                      </span>
                    </div>

                    {/* Simulated Functional Modules */}
                    {activeTab === 0 && (
                      <div className="space-y-3">
                        <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                          <span className="text-xs text-slate-300 font-medium">Driver AI Letter Generator</span>
                          <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Ready</span>
                        </div>
                        <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                          <span className="text-xs text-slate-300 font-medium">Community Regional Dispatch</span>
                          <span className="text-[10px] text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">Real-time</span>
                        </div>
                        <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                          <span className="text-xs text-slate-300 font-medium">Planned Driver Marketplace</span>
                          <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">Phase 5</span>
                        </div>
                      </div>
                    )}

                    {activeTab === 1 && (
                      <div className="space-y-3">
                        <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                          <span className="text-xs text-slate-300 font-medium">11+ Mock Exam Engine (250+ Papers)</span>
                          <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Active</span>
                        </div>
                        <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                          <span className="text-xs text-slate-300 font-medium">Student Performance & Automated Grading</span>
                          <span className="text-[10px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">Scored</span>
                        </div>
                        <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                          <span className="text-xs text-slate-300 font-medium">Engagement & Inactivity Alerts</span>
                          <span className="text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">Automated</span>
                        </div>
                      </div>
                    )}

                    {activeTab === 2 && (
                      <div className="space-y-3">
                        <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                          <span className="text-xs text-slate-300 font-medium">Education Course Directory</span>
                          <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Searchable</span>
                        </div>
                        <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                          <span className="text-xs text-slate-300 font-medium">International Student Consultation Intake</span>
                          <span className="text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">Validated</span>
                        </div>
                        <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                          <span className="text-xs text-slate-300 font-medium">Secure Document Submission Pipeline</span>
                          <span className="text-[10px] text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">Encrypted</span>
                        </div>
                      </div>
                    )}

                    {activeTab === 3 && (
                      <div className="space-y-3">
                        <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                          <span className="text-xs text-slate-300 font-medium">Global EV Expos & Summits Index</span>
                          <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Indexed</span>
                        </div>
                        <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                          <span className="text-xs text-slate-300 font-medium">Date & Regional Continent Filters</span>
                          <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Active</span>
                        </div>
                        <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                          <span className="text-xs text-slate-300 font-medium">Conference Organizer Submissions</span>
                          <span className="text-[10px] text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded">Portal Live</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section: We Build Digital Products That Do Something */}
        <div className="mt-28 border-t border-slate-200 pt-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-purple-700 block mb-3">
              Product Engineering Philosophy
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-outfit tracking-tight mb-5">
              We Build Digital Products That Do Something.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              From the first idea to a working product, CortexHive combines AI, software development, automation and product thinking to turn complex requirements into practical digital solutions.
            </p>
          </div>

          {/* Value Proposition Framework Flow */}
          <div className="max-w-5xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 text-center mb-6">
              Our End-to-End Product Lifecycle
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {LIFECYCLE_STEPS.map((step, idx) => (
                <div key={step} className="flex items-center gap-2 sm:gap-3">
                  <span className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-mono font-bold text-slate-800 shadow-xs">
                    {step}
                  </span>
                  {idx < LIFECYCLE_STEPS.length - 1 && (
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
