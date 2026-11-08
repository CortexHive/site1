import {
  TrendingUp,
  Cpu,
  ShieldCheck,
  Zap,
  MessageSquare,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const PILLARS = [
  {
    index: "01",
    icon: TrendingUp,
    title: "Commercial Engineering",
    desc: "We build software and digital platforms designed to generate measurable commercial outcomes, not superficial technical novelty.",
  },
  {
    index: "02",
    icon: Cpu,
    title: "Production-Grade Stack",
    desc: "Engineered with Next.js, React, TypeScript, PostgreSQL, and vetted AI APIs for sub-second latency, security, and maintainability.",
  },
  {
    index: "03",
    icon: ShieldCheck,
    title: "Predictable Milestone Scopes",
    desc: "Clear written specifications and structured milestones. You know exact deliverables and timelines before engineering begins.",
  },
  {
    index: "04",
    icon: Zap,
    title: "High-Velocity Execution",
    desc: "Focused engineering sprints that take concepts from initial brief to live production software in weeks rather than quarters.",
  },
  {
    index: "05",
    icon: MessageSquare,
    title: "Direct Engineer Access",
    desc: "You collaborate directly with the architects and engineers building your system — no account management layers or lost context.",
  },
  {
    index: "06",
    icon: MapPin,
    title: "UK Commercial Alignment",
    desc: "Operating from the United Kingdom with deep understanding of UK business operations, compliance, and customer expectations.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-12 mb-12 border-b border-slate-200">
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-blue-600 font-semibold">
              06 // STUDIO PRINCIPLES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#090D16] tracking-[-0.025em] leading-[1.1]">
              Technology Should Solve Problems. Not Create More.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              CortexHive brings together full-stack software engineering, applied AI automation, and commercial product design to turn operational challenges into dependable digital assets.
            </p>
          </div>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.index}
                className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 sm:p-7 hover:bg-white hover:border-slate-300 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {pillar.index}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-[#0F172A] flex items-center justify-center">
                    <Icon className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#090D16] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Studio Link Bar */}
        <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm font-medium text-slate-700">
            Learn more about our engineering discipline, proprietary software platforms, and delivery standards.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#0F172A] hover:text-blue-600 transition-colors flex-shrink-0"
          >
            <span>Read Studio Profile</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
