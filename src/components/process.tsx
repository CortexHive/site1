"use client";

import { motion } from "framer-motion";
import { Search, Compass, Cpu, Rocket, LineChart } from "lucide-react";

interface Step {
  number: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  desc: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: Search,
    title: "Discover & Scope",
    subtitle: "AI Audits & Feasibility",
    desc: "We analyze your business operations, audit system bottlenecks, and explore custom AI implementation opportunities. We compile this into a detailed product requirements specification and scoping document.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Design & Architect",
    subtitle: "UI/UX & Data Pipelines",
    desc: "We design high-fidelity interactive wireframes in Figma and construct database architectures, LLM pipelines, and system API layouts before writing a single line of production code.",
  },
  {
    number: "03",
    icon: Cpu,
    title: "Build & Train",
    subtitle: "Agile Production Engineering",
    desc: "We construct the codebase using Next.js 14 and TypeScript, integrating our SQLite/Postgres databases, configuring vector databases, tuning LLM model behaviors, and establishing test-driven deployments.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Scrutinize",
    subtitle: "Optimized Vercel Deployments",
    desc: "We deploy to Vercel/AWS with global CDN coverage. We monitor load times, test mobile responsiveness, audit accessibility compliance (WCAG AA), and configure analytics metrics trackers.",
  },
  {
    number: "05",
    icon: LineChart,
    title: "Scale & Augment",
    subtitle: "Continuous Performance Tuning",
    desc: "Post-launch, we review usage logs, fine-tune chatbot performance, test conversion funnels, execute speed audits, and expand your digital platform to handle high user volume.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm uppercase tracking-[0.25em] text-hive-purple font-bold mb-3">
            Our Playbook
          </h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6">
            The Hive Innovation Blueprint
          </h3>
          <p className="text-slate-600 text-sm sm:text-base font-semibold">
            From raw concept to cloud execution, we employ an agile, AI-augmented workflow designed to build fast, pivot intelligently, and deploy reliably.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-hive-cyan via-hive-blue to-hive-purple opacity-40 md:-translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`flex flex-col md:flex-row relative items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Icon Node (Floats on the center line) */}
                  <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-white border-2 border-hive-cyan flex items-center justify-center -translate-x-1/2 z-20 shadow-md glow-cyan">
                    <Icon className="w-4 h-4 text-hive-cyan" />
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8"
                  >
                    <div className="glass-panel p-6 rounded-2xl border-slate-200 bg-white hover:border-slate-350 transition-colors relative">
                      {/* Step Number overlay */}
                      <span className="absolute top-4 right-6 text-3xl font-black text-slate-100 tracking-wider font-mono">
                        {step.number}
                      </span>
                      
                      <span className="text-[10px] uppercase font-bold text-hive-cyan tracking-widest block mb-1">
                        {step.subtitle}
                      </span>
                      
                      <h4 className="text-xl font-bold text-slate-900 mb-3">
                        {step.title}
                      </h4>
                      
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
