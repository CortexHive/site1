"use client";

import { motion } from "framer-motion";
import { Star, MessageSquareQuote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatarChar: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Cortex Hive delivered our medical transcription system in under 4 weeks. The transcription accuracy matches custom Whisper models we tested, and our intake clinicians save hours daily. Absolutely game-changing velocity.",
    author: "Dr. Sarah Lin",
    role: "Chief Medical Officer",
    company: "AuraHealth",
    rating: 5,
    avatarChar: "S",
  },
  {
    quote: "We were quoted 6 months and $120k by a traditional agency to build our sales scoping SaaS. Cortex Hive mapped out the DB architecture, generated our Stripe endpoints, and launched it in 20 days. Outstanding execution.",
    author: "Marc Andreessen Jr.",
    role: "Founder & CEO",
    company: "Synthesia CRM",
    rating: 5,
    avatarChar: "M",
  },
  {
    quote: "Our marketing funnel conversions skyrocketed by 180% after Cortex Hive overhauled our landing pages and ad copy generation. Their AI-driven approach to testing variants at scale is the future of performance marketing.",
    author: "David Goggins II",
    role: "Growth Director",
    company: "NeuroCopy",
    rating: 5,
    avatarChar: "D",
  },
];

const companies = [
  "Apex AI",
  "Scribe Data",
  "Vortex",
  "Pinnacle Web",
  "OmniSaaS",
  "TensorLabs",
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Glow dot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-hive-cyan/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Trusted By logo band */}
        <div className="border-y border-slate-200 py-10 mb-24 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
              TRUSTED BY INNOVATION PARTNERS WORLDWIDE
            </p>
            <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16 opacity-75">
              {companies.map((company) => (
                <span
                  key={company}
                  className="text-base sm:text-lg font-black tracking-wider text-slate-700 hover:text-hive-cyan transition-colors select-none font-mono"
                >
                  {company.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm uppercase tracking-[0.25em] text-hive-cyan font-bold mb-3">
            Social Proof
          </h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6">
            Loved by Builders and Scale Operators
          </h3>
          <p className="text-slate-600 text-sm sm:text-base font-semibold">
            Don&apos;t take our word for it. Read how scaling SaaS platforms and AI tools leverage our speed and digital engineering standard.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-6 rounded-2xl border-slate-200 bg-white flex flex-col justify-between hover:border-hive-cyan/35 transition-all duration-300 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-slate-200 group-hover:text-hive-cyan/10 transition-colors">
                <MessageSquareQuote className="w-12 h-12" />
              </div>

              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-hive-cyan text-hive-cyan" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-sm leading-relaxed mb-8 italic font-medium">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 border-t border-slate-100 pt-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gradient-hive flex items-center justify-center font-extrabold text-hive-cyan text-sm shadow-md border border-slate-200">
                  {t.avatarChar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">
                    {t.author}
                  </h4>
                  <span className="text-[11px] text-slate-400 font-bold block mt-0.5">
                    {t.role}, <span className="text-hive-cyan">{t.company}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
