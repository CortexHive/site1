"use client";

import { motion } from "framer-motion";
import { Sparkles, Play, Award } from "lucide-react";

const steps = [
  {
    num: "01",
    label: "Brief",
    title: "Define Target & Hook",
    desc: "We analyze your audience demographic, dissect competitors, and map out structured retention hooks.",
    icon: Sparkles,
  },
  {
    num: "02",
    label: "Create",
    title: "Production & Motion Edit",
    desc: "Our design studio scripts, records, animates, and edits assets into highly polished digital deliverables.",
    icon: Play,
  },
  {
    num: "03",
    label: "Deliver",
    title: "Deploy & Maximize Reach",
    desc: "We launch, analyze watch-time metrics, optimize distributions, and scale winning creatives.",
    icon: Award,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white relative z-10" id="process">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-purple-600 block">
            Playbook Workflow
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight font-outfit">
            How We Get You Noticed
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our streamlined process ensures speed, transparency, and premium creative quality at every step.
          </p>
        </div>

        {/* Horizontal Timeline Steps */}
        <div className="relative mt-12">
          {/* Connecting Dotted Line (Desktop only) */}
          <div className="absolute top-[48px] left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-slate-200 z-0 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex flex-col items-center text-center space-y-6 group"
                >
                  {/* Step Number Circle */}
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-purple-600 font-black text-2xl font-outfit shadow-sm group-hover:border-purple-500 group-hover:shadow-md transition-all duration-300 relative z-10">
                      {item.num}
                    </div>
                    {/* Glowing ring badge */}
                    <div className="absolute -inset-1 rounded-full bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm z-0" />
                  </div>

                  {/* Step Metadata */}
                  <div className="space-y-3 max-w-sm">
                    <span className="text-xs font-bold uppercase tracking-widest text-hive-cyan">
                      {item.label}
                    </span>
                    <h3 className="text-lg font-bold text-slate-950 font-outfit flex items-center justify-center gap-2">
                      <IconComponent className="w-4.5 h-4.5 text-purple-600" />
                      <span>{item.title}</span>
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
