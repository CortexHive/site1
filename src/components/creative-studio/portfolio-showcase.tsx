"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const projects = [
  {
    title: "Hyper-Growth Reel",
    category: "Reel",
    bg: "from-indigo-100 to-purple-100",
  },
  {
    title: "Next-Gen EV Campaign",
    category: "Ad",
    bg: "from-cyan-100 to-blue-100",
  },
  {
    title: "AI Copilot Showcase",
    category: "Animation",
    bg: "from-pink-100 to-rose-100",
  },
  {
    title: "Rydigoo Shift Swap",
    category: "Reel",
    bg: "from-purple-100 to-violet-100",
  },
  {
    title: "EV Expo 3D Map",
    category: "Animation",
    bg: "from-emerald-100 to-teal-100",
  },
  {
    title: "Run the UK Trailer",
    category: "Ad",
    bg: "from-amber-100 to-orange-100",
  },
];

export default function PortfolioShowcase() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200 relative z-10" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-purple-600 block">
            Featured Projects
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight font-outfit">
            Our Creative Showcase
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Take a look at some of the viral campaigns, motion assets, and ads we have crafted for client partners.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white border border-slate-200 rounded-3xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Thumbnail Placeholder */}
              <div className={`relative aspect-[16/10] w-full rounded-2xl bg-gradient-to-tr ${project.bg} overflow-hidden flex items-center justify-center`}>
                {/* Floating Play Button Overlay */}
                <div className="absolute inset-0 bg-purple-950/0 group-hover:bg-purple-950/20 transition-colors duration-300 z-10 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-purple-650 group-hover:bg-purple-600 group-hover:text-white flex items-center justify-center text-purple-600 shadow-md group-hover:scale-110 transition-all duration-300">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Title & Metadata */}
              <div className="pt-4 px-2 space-y-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest text-slate-500 bg-slate-100 border border-slate-200 uppercase">
                  {project.category}
                </span>
                <h3 className="text-base font-bold text-slate-900 font-outfit">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
