"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Layers,
  Bot,
  GraduationCap,
  Globe,
  Terminal,
  ChevronRight,
  Sparkles,
  PhoneCall,
  Zap,
  CheckCircle2,
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
    tag: "DIGITAL PRODUCT",
    role: "EV Events Directory",
    stat: "Global Directory",
    detail: "Searchable international EV summits, calendar filters & organizer portal.",
    icon: Layers,
    color: "from-emerald-500/20 to-teal-500/20",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    id: "aurapdf",
    name: "AuraPDF",
    tag: "CORTEXHIVE PRODUCT",
    role: "Offline-First PDF Software",
    stat: "Client-Side Processing",
    detail: "Zero-server document manipulation, digital signatures, redactions and local export.",
    icon: Layers,
    color: "from-amber-500/20 to-orange-500/20",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
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
            Digital Solutions That Move{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
              Your Business Forward.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium mb-10"
          >
            From professional websites to intelligent AI solutions, we help businesses build their digital presence, streamline operations and grow with confidence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5"
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo("#services")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-bold text-sm transition-all"
            >
              <span>Explore Our Services</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>

            <a
              href="https://wa.me/447950501323?text=Hi%20CortexHive%2C%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-bold text-sm transition-all"
            >
              <svg className="w-4 h-4 fill-current text-emerald-600" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.531 1.93.814 2.79.815 3.183 0 5.77-2.586 5.77-5.766.002-3.181-2.583-5.766-5.769-5.766zm3.385 8.163c-.144.407-.837.774-1.171.823-.335.05-.776.082-2.222-.516-1.745-.722-2.871-2.493-2.958-2.609-.087-.116-.708-.941-.708-1.793 0-.852.449-1.272.608-1.446.16-.175.348-.218.464-.218.116 0 .232.001.333.006.106.005.249-.04.39.299.144.348.492 1.201.536 1.289.043.087.072.19.014.305-.058.116-.087.189-.174.29-.087.102-.183.228-.261.306-.088.087-.179.182-.077.357.101.174.45 1.743 1.968 2.392.203.087.324.076.445-.062.12-.138.514-.6.652-.804.137-.204.275-.171.464-.101.189.07 1.201.566 1.408.669.207.102.345.153.395.239.05.087.05.503-.094.91zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.981-1.396A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.638 0-3.167-.487-4.448-1.326l-.319-.21-2.955.775.789-2.883-.231-.367C3.937 14.887 3.4 13.487 3.4 12c0-4.742 3.858-8.6 8.6-8.6s8.6 3.858 8.6 8.6-3.858 8.6-8.6 8.6z"/>
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </motion.div>

          {/* Fast-Track Client Acquisition Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-4xl mx-auto"
          >
            <Link
              href="/small-business-websites"
              className="group p-4 rounded-2xl bg-slate-50/90 hover:bg-emerald-50/70 border border-slate-200 hover:border-emerald-300 transition-all flex items-start gap-3.5 shadow-2xs"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700">
                    Get Online Fast
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
                </div>
                <p className="text-sm font-bold text-slate-900 mt-0.5">
                  £50 Starter Websites
                </p>
                <p className="text-[11px] text-slate-500 font-medium leading-snug mt-0.5">
                  For trades, builders, plumbers &amp; small businesses. Ready in 3–5 days.
                </p>
              </div>
            </Link>

            <Link
              href="/ai-receptionist"
              className="group p-4 rounded-2xl bg-slate-50/90 hover:bg-cyan-50/70 border border-slate-200 hover:border-cyan-300 transition-all flex items-start gap-3.5 shadow-2xs"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-700">
                    Never Miss a Call
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-600 group-hover:translate-x-0.5 transition-all" />
                </div>
                <p className="text-sm font-bold text-slate-900 mt-0.5">
                  24/7 AI Receptionist
                </p>
                <p className="text-[11px] text-slate-500 font-medium leading-snug mt-0.5">
                  Answers calls, qualifies leads &amp; texts you instant summaries.
                </p>
              </div>
            </Link>

            <Link
              href="/software-development"
              className="group p-4 rounded-2xl bg-slate-50/90 hover:bg-purple-50/70 border border-slate-200 hover:border-purple-300 transition-all flex items-start gap-3.5 shadow-2xs"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Zap className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-purple-700">
                    Work Smarter
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all" />
                </div>
                <p className="text-sm font-bold text-slate-900 mt-0.5">
                  AI &amp; Custom Software
                </p>
                <p className="text-[11px] text-slate-500 font-medium leading-snug mt-0.5">
                  Automated workflows, client portals &amp; full-stack SaaS MVPs.
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Trust & Guarantee Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 font-semibold">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Transparent Fixed Pricing
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Direct UK Engineering Support
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Fast Turnaround &amp; Full Code Ownership
            </span>
          </div>
        </div>

        {/* Built, Not Just Promised Section */}
        <div className="mt-14 mb-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
            Real Proof of Delivery
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-outfit tracking-tight mb-3">
            Built, Not Just Promised.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            From driver platforms and education systems to AI applications and digital products, CortexHive builds working technology around real-world requirements.
          </p>
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
            <div className="px-4 sm:px-6 py-3.5 bg-slate-950/80 border-b border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
                  cortexhive://products/{REAL_SHOWCASE[activeTab].id}
                </span>
              </div>

              {/* Product Switcher Pills */}
              <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 overflow-x-auto max-w-full">
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

                    {activeTab === 4 && (
                      <div className="space-y-3">
                        <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                          <span className="text-xs text-slate-300 font-medium">Client-Side PDF Engine</span>
                          <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Zero-Server</span>
                        </div>
                        <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                          <span className="text-xs text-slate-300 font-medium">Cryptographic Digital Signatures</span>
                          <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">Canvas Active</span>
                        </div>
                        <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                          <span className="text-xs text-slate-300 font-medium">Document Redaction & Form Filling</span>
                          <span className="text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">Privacy-First</span>
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
