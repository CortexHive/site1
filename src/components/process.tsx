"use client";

import {
  Compass,
  FileCode2,
  Cpu,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const PROCESS_STAGES = [
  {
    step: "STAGE 01",
    name: "Discovery & Scoping",
    summary:
      "We analyse your operational challenge, commercial objectives, and user workflows. You receive a clear technical recommendation and fixed milestone roadmap.",
    clientProvides: "Business objectives, domain context, or existing workflow bottlenecks.",
    weDeliver: "Written architecture specification, scope of work & fixed milestone schedule.",
    icon: Compass,
  },
  {
    step: "STAGE 02",
    name: "Architecture & UI Design",
    summary:
      "We map out the user interface layouts, relational database schemas, API contracts, and AI pipeline guardrails before full-scale engineering begins.",
    clientProvides: "Brand assets and sign-off on wireframes and system flows.",
    weDeliver: "Responsive UI architecture, database schema & integration blueprint.",
    icon: FileCode2,
  },
  {
    step: "STAGE 03",
    name: "Full-Stack Engineering",
    summary:
      "We build your system using Next.js, TypeScript, PostgreSQL, and production AI APIs. You review live staging deployments throughout the build.",
    clientProvides: "Feedback on staging releases and workflow validation.",
    weDeliver: "Production-grade codebase, automated workflows & quality assurance.",
    icon: Cpu,
  },
  {
    step: "STAGE 04",
    name: "Deployment & Handover",
    summary:
      "We configure cloud infrastructure, SSL, custom domains, analytics, and search indexing, handing over a complete production system with optional care.",
    clientProvides: "Domain DNS delegation or cloud environment access.",
    weDeliver: "Live production launch, full source code ownership & team handover.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-12 mb-12 border-b border-slate-200">
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-blue-600 font-semibold">
              05 // DELIVERY METHODOLOGY
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#090D16] tracking-[-0.025em] leading-[1.1]">
              From Initial Brief to Production System.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              A disciplined four-stage engineering protocol designed to ship rapidly, eliminate technical debt, and give you complete visibility at every milestone.
            </p>
          </div>
        </div>

        {/* 4 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
          {PROCESS_STAGES.map((stage) => {
            const Icon = stage.icon;

            return (
              <div
                key={stage.step}
                className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                    <span className="text-xs font-mono font-bold text-blue-600 tracking-wider">
                      {stage.step}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0F172A]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#090D16] tracking-tight mb-2.5">
                    {stage.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {stage.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3 text-xs">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                      Client Input
                    </span>
                    <p className="text-slate-600 leading-relaxed">{stage.clientProvides}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 font-semibold block mb-0.5">
                      Studio Deliverable
                    </span>
                    <p className="text-[#0F172A] font-medium leading-relaxed">{stage.weDeliver}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* IP Ownership Bar */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#0F172A] flex items-center justify-center flex-shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#090D16]">
                100% Intellectual Property &amp; Source Code Ownership
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Upon project completion, full ownership of custom source code, repositories, and domain configurations transfers directly to your organisation. Zero vendor lock-in.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 rounded-lg bg-[#0F172A] hover:bg-blue-600 text-white text-xs font-semibold transition-colors whitespace-nowrap"
          >
            Initiate Discovery
          </button>
        </div>
      </div>
    </section>
  );
}
