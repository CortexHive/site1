"use client";

import { motion } from "framer-motion";
import { Video, Megaphone, Film, Wrench, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Video,
    title: "Viral Reels Production",
    desc: "Retention-optimized vertical videos, customized typography, sound design, and hooks engineered to go viral.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Megaphone,
    title: "Ad Creative & Campaign Design",
    desc: "High-impact visual frameworks, creative ad tests, and copy designs that lower acquisition costs.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Film,
    title: "Short Films & Animations",
    desc: "High-end 2D/3D motion graphics, kinetic typography, and character animations that deliver stories.",
    color: "from-purple-600 to-pink-500",
  },
  {
    icon: Wrench,
    title: "Social Media Design Tools",
    desc: "Bespoke design kits, brand templates, asset libraries, and digital tools tailored for creator workflow.",
    color: "from-pink-500 to-orange-500",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200 relative z-10" id="services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-purple-600 block">
            Agency Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight font-outfit">
            Services Built to Stop the Scroll
          </h2>
          <p className="text-slate-655 text-slate-600 text-sm sm:text-base leading-relaxed">
            We deliver state-of-the-art media assets and social tools that maximize reach and command authority.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-transparent hover:border-l-purple-600"
              >
                <div className="flex flex-col h-full justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Icon Container */}
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.color} p-0.5 flex items-center justify-center text-white shadow-md`}>
                      <IconComponent className="w-5.5 h-5.5" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-950 font-outfit">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>

                  <div>
                    <Link
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-600 group-hover:text-purple-800 transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
