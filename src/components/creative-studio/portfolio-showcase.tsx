"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const capabilities = [
  {
    title: "Viral Reels & Shorts",
    desc: "Bespoke short-form scripting, retention hook engineering, sync sound design, and kinetic typography tailored for TikTok, Instagram Reels, and YouTube Shorts.",
  },
  {
    title: "Campaign Ad Creatives",
    desc: "High-performance marketing banners, visual framework assets, and split-test ad variations built to reduce customer acquisition costs.",
  },
  {
    title: "Cinema & Motion Graphics",
    desc: "Premium 2D/3D animations, abstract visual transitions, logo motion loops, and custom video templates designed to command digital presence.",
  },
  {
    title: "Asset Creator Kits",
    desc: "Curated design templates, custom overlay graphics, brand asset guidelines, and social media layout kits optimized for in-house production.",
  },
];

export default function PortfolioShowcase() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200 relative z-10" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-purple-600 block">
            Creative Showcase
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight font-outfit">
            Our Studio Capabilities
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We deliver state-of-the-art visual assets and social toolkits that stop the scroll and drive conversion.
          </p>
        </div>

        {/* Infographic & Text Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Beautiful Marketing Image Banner */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative aspect-square md:aspect-[4/3] lg:aspect-square w-full rounded-[2rem] overflow-hidden border border-slate-200 shadow-lg group bg-white p-4"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src="/creative-showcase.png"
                alt="Cortex Hive Creative Capabilities Showcase"
                fill
                className="object-cover group-hover:scale-103 transition-transform duration-500"
                sizes="(max-w-7xl) 100vw, 50vw"
              />
            </div>
            {/* Soft decorative glow */}
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none -z-10" />
          </motion.div>

          {/* Right: Detailed Explanations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-6">
              {capabilities.map((cap) => (
                <div key={cap.title} className="flex gap-4 items-start group">
                  <div className="mt-1 p-0.5 rounded-full bg-purple-50 text-purple-600 border border-purple-100 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                    <CheckCircle2 className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-slate-950 font-outfit">
                      {cap.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200">
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 hover:text-purple-800 transition-colors"
              >
                <span>Let&apos;s Build Your Brand Assets</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
