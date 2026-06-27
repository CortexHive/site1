"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Flame, Compass } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50/50 relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Decorative Blob */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[350px] h-[350px] bg-hive-purple/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column (Introduction) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-sm uppercase tracking-[0.25em] text-hive-purple font-bold block">
              Who We Are
            </span>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Pairing Human Ingenuity with AI Velocity
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Cortex Hive is a high-speed digital innovation studio. We are a collection of product designers, software engineers, and growth marketers who believe standard agency cycles are outdated.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              By augmenting our workflows with customized large language models, automated code generation systems, and dynamic asset generation tools, we cut development overhead by 60%+ while maintaining codebases that conform to strict enterprise quality guidelines.
            </p>

            {/* Core Values / Pillar grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-hive-cyan/10 border border-hive-cyan/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-hive-cyan" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Peak Velocity</h4>
                  <p className="text-slate-500 text-xs leading-normal font-semibold">
                    We deliver production-ready MVPs in weeks, not quarters.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-hive-purple/10 border border-hive-purple/20 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-hive-purple" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Production Quality</h4>
                  <p className="text-slate-500 text-xs leading-normal font-semibold">
                    Clean, TypeScript-strict systems with full responsive design.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-hive-blue/10 border border-hive-blue/20 flex items-center justify-center flex-shrink-0">
                  <Flame className="w-5 h-5 text-hive-blue" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">AI-Forward</h4>
                  <p className="text-slate-500 text-xs leading-normal font-semibold">
                    Custom agent architectures and vector integrations standard.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center flex-shrink-0">
                  <Compass className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Continuous Scoping</h4>
                  <p className="text-slate-500 text-xs leading-normal font-semibold">
                    Iterate directly with engineering leads in dedicated channels.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Comparison Matrix Visual) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-6 sm:p-8 rounded-3xl border-slate-250 bg-white glow-purple space-y-6"
          >
            <h4 className="text-lg font-bold text-slate-900 mb-4">
              Traditional Agency vs. Cortex Hive
            </h4>

            <div className="space-y-4 text-xs sm:text-sm">
              {/* Row 1 */}
              <div className="grid grid-cols-3 gap-4 pb-4 border-b border-slate-100 font-bold text-slate-400">
                <span>Metric</span>
                <span>Traditional Agency</span>
                <span className="text-hive-cyan">Cortex Hive</span>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-3 gap-4 pb-4 border-b border-slate-100 items-center font-medium">
                <span className="font-bold text-slate-900">MVP Build Time</span>
                <span className="text-slate-500">3 - 6 Months</span>
                <span className="text-hive-cyan font-black">2 - 4 Weeks</span>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-3 gap-4 pb-4 border-b border-slate-100 items-center font-medium">
                <span className="font-bold text-slate-900">Scoping Cycle</span>
                <span className="text-slate-500">Days of meetings</span>
                <span className="text-hive-purple font-black">Instant AI estimate</span>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-3 gap-4 pb-4 border-b border-slate-100 items-center font-medium">
                <span className="font-bold text-slate-900">Database Setups</span>
                <span className="text-slate-500">Manual setup</span>
                <span className="text-hive-cyan font-black">Autogenerated ORMs</span>
              </div>

              {/* Row 5 */}
              <div className="grid grid-cols-3 gap-4 pb-4 border-b border-slate-100 items-center font-medium">
                <span className="font-bold text-slate-900">Tech Stack</span>
                <span className="text-slate-500">Outdated CMS/WP</span>
                <span className="text-slate-800 font-black">Next.js 14 / Prisma</span>
              </div>

              {/* Row 6 */}
              <div className="grid grid-cols-3 gap-4 items-center font-medium">
                <span className="font-bold text-slate-900">Cost Overhead</span>
                <span className="text-slate-500">High ($50k+)</span>
                <span className="text-hive-cyan font-black">Optimized ($15k)</span>
              </div>
            </div>

            {/* Performance quote badge */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-6">
              <p className="text-xs text-slate-600 italic leading-relaxed font-medium">
                {"\"By automating standard boilerplate configurations and utilizing specialized LLM coding assistants, our engineers focus 100% of their energy on bespoke business logic, product design, and client goals.\""}
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-hive-purple flex items-center justify-center font-extrabold text-[10px] text-white">
                  CH
                </div>
                <span className="text-[10px] uppercase font-bold text-slate-800">
                  Cortex Hive engineering directive
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
