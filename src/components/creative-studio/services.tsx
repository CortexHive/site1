"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Video, Megaphone, Film, Wrench, ArrowRight, X, Check } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const services = [
  {
    icon: Video,
    title: "Viral Reels Production",
    desc: "Retention-optimized vertical videos, customized typography, sound design, and hooks engineered to go viral.",
    color: "from-purple-500 to-indigo-500",
    details: {
      included: [
        "Dynamic fast-paced captioning & brand typography alignment.",
        "Precision sound design (SFX) matched to retention hooks.",
        "Advanced retention-driven editing (zooms, pans, visual B-rolls).",
        "Strategic 3-second hook variations to target platform algorithms."
      ],
      delivery: "24 - 48 Hours turnaround per asset",
      formats: "9:16 Vertical MP4 (Optimized for IG, TikTok, Shorts)",
      strategy: "We map your industry niche to high-retention frameworks, maintaining average watch times above 70%."
    }
  },
  {
    icon: Megaphone,
    title: "Ad Creative & Campaign Design",
    desc: "High-impact visual frameworks, creative ad tests, and copy designs that lower acquisition costs.",
    color: "from-cyan-500 to-blue-500",
    details: {
      included: [
        "High-CTR thumbnail graphics & ad display banners.",
        "A/B testing copy iterations & scroll-stopping hook scripts.",
        "Custom branding overlays & custom vector visual borders.",
        "Historical ad copy performance audit & competitor layout matching."
      ],
      delivery: "48 Hours turnaround",
      formats: "1:1 Square, 4:5 Portrait, 16:9 Landscape PNG/MP4",
      strategy: "Designed to optimize user flow and visual cues, lowering click acquisition costs by up to 35%."
    }
  },
  {
    icon: Film,
    title: "Short Films & Animations",
    desc: "High-end 2D/3D motion graphics, kinetic typography, and character animations that deliver stories.",
    color: "from-purple-600 to-pink-500",
    details: {
      included: [
        "Creative vector storyboard layout & concept review.",
        "Bespoke 2D character movement & 3D object rendering.",
        "Voiceover synchronization & cinema color correction.",
        "Brand logo intros/outros & custom motion title presets."
      ],
      delivery: "3 - 5 Business Days",
      formats: "Full HD/4K Landscape or Vertical MP4/MOV",
      strategy: "Deliver premium cinematic transitions that establish brand authority and narrate complex processes cleanly."
    }
  },
  {
    icon: Wrench,
    title: "Social Media Design Tools",
    desc: "Bespoke design kits, brand templates, asset libraries, and digital tools tailored for creator workflow.",
    color: "from-pink-500 to-orange-500",
    details: {
      included: [
        "Tailored Canva & Figma style layout assets.",
        "Curated brand overlays, icons, and asset folders.",
        "Social media carousel templates & cover graphic systems.",
        "Interactive web components & custom landing page code."
      ],
      delivery: "Instant access setup",
      formats: "Figma Link, Canva Template, HTML/CSS component folders",
      strategy: "Empower your in-house marketing team to produce assets independently, maintaining absolute brand consistency."
    }
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<typeof services[number] | null>(null);
  const router = useRouter();

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
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
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
                    <button
                      onClick={() => setActiveService(item)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-600 group-hover:text-purple-800 transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-slate-200 rounded-[2rem] w-full max-w-2xl overflow-hidden shadow-2xl relative"
            >
              {/* Modal Header */}
              <div className="p-8 border-b border-slate-100 flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-purple-600">Service Scope</span>
                  <h3 className="text-2xl font-bold text-slate-950 font-outfit">{activeService.title}</h3>
                </div>
                <button
                  onClick={() => setActiveService(null)}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8 space-y-6 max-h-[50vh] overflow-y-auto">
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">What We Deliver</h4>
                  <ul className="space-y-3">
                    {activeService.details.included.map((item, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-slate-700 text-sm font-medium">
                        <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Estimated Turnaround</h4>
                    <p className="text-slate-800 text-sm font-semibold">{activeService.details.delivery}</p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Delivery Formats</h4>
                    <p className="text-slate-800 text-sm font-semibold">{activeService.details.formats}</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100/50 space-y-1.5">
                  <h4 className="text-xs font-bold uppercase text-purple-700 tracking-wider">Strategic Objective</h4>
                  <p className="text-purple-950 text-xs sm:text-sm font-medium leading-relaxed">{activeService.details.strategy}</p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-8 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <p className="text-xs text-slate-500 font-semibold text-center sm:text-left">
                  Ready to build custom assets for your brand?
                </p>
                <Link
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveService(null);
                    const element = document.querySelector("#contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    } else {
                      router.push("/#contact");
                    }
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-sm transition-all"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
