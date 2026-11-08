"use client";

import { motion } from "framer-motion";
import {
  Compass,
  FileCode2,
  Cpu,
  Rocket,
  Clock,
  ShieldCheck,
} from "lucide-react";

const PROCESS_STAGES = [
  {
    step: "01",
    name: "Discover",
    headline: "Understand the Problem",
    turnaround: "Day 1 – 2",
    summary:
      "We understand your business problem, target audience, and commercial goals. No confusing jargon — just clear conversations about what you need to achieve.",
    clientProvides: "Your vision, requirements, content, or current pain points.",
    weDeliver: "Defined project brief, technical recommendation & fixed price proposal.",
    icon: Compass,
  },
  {
    step: "02",
    name: "Plan",
    headline: "Architecture & Scope",
    turnaround: "Day 2 – 3",
    summary:
      "We map out the user flows, responsive UI layouts, system architecture, and technical deliverables. You get a clear roadmap with zero hidden costs.",
    clientProvides: "Branding assets, feedback on wireframes & approval to build.",
    weDeliver: "Interactive wireframes, data structure, API specifications & milestones.",
    icon: FileCode2,
  },
  {
    step: "03",
    name: "Build",
    headline: "Engineering & AI Integration",
    turnaround: "Day 3 – 5 (Websites) / Weeks (Software)",
    summary:
      "We design and code with clean modern frameworks (Next.js, TypeScript, AI APIs). You see live staging progress as it develops, not months later.",
    clientProvides: "Feedback on staging previews & verification of workflows.",
    weDeliver: "Production-ready codebase, responsive design, AI pipelines & test coverage.",
    icon: Cpu,
  },
  {
    step: "04",
    name: "Launch",
    headline: "Deployment & Growth",
    turnaround: "Launch Day & Beyond",
    summary:
      "We test, configure domains, set up SSL, connect analytics, submit sitemaps to Google, and hand over a working product with optional monthly care.",
    clientProvides: "Domain registrar access or DNS delegation.",
    weDeliver: "Live production deployment, full source code ownership & handover training.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-[#F8FAFD] border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-xs font-bold text-blue-700 uppercase tracking-widest mb-4 shadow-2xs">
            Simple 4-Stage Method
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#14243A] tracking-tight mb-4">
            How We Work: From Brief to Live Product
          </h2>
          <p className="text-[#475569] text-base sm:text-lg leading-relaxed font-normal">
            A structured, transparent delivery framework designed to ship fast, eliminate guesswork, and ensure you always have complete visibility.
          </p>
        </div>

        {/* 4 Stages Horizontal / Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-16">
          {PROCESS_STAGES.map((stage, idx) => {
            const Icon = stage.icon;

            return (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-7 flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all relative"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-blue-600 font-mono tracking-tighter">
                      {stage.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#F5F8FC] border border-[#E2E8F0] flex items-center justify-center text-blue-600">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Timeline */}
                  <h3 className="text-xl font-bold text-[#14243A] tracking-tight">
                    {stage.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-700 mt-1 mb-3">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{stage.turnaround}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6 font-normal">
                    {stage.summary}
                  </p>
                </div>

                {/* Handover & Delivery Details */}
                <div className="pt-4 border-t border-[#E2E8F0] space-y-3 text-xs">
                  <div>
                    <span className="font-bold text-[#14243A] block mb-1">What you provide:</span>
                    <p className="text-[#64748B] leading-relaxed">{stage.clientProvides}</p>
                  </div>
                  <div>
                    <span className="font-bold text-emerald-700 block mb-1">What we deliver:</span>
                    <p className="text-[#475569] leading-relaxed">{stage.weDeliver}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Reassurance banner */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#14243A]">No Trapped Code. You Own 100% of Everything.</h4>
              <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">
                Full intellectual property, domain registration, and source code ownership transferred on completion. No proprietary lock-in.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm"
            >
              Start Stage 01 Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
