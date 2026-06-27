"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Globe,
  Monitor,
  Megaphone,
  Video,
  Cpu,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
} from "lucide-react";

interface ServiceItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  techStack: string[];
  timeline: string;
}

const services: ServiceItem[] = [
  {
    id: "ai",
    icon: Cpu,
    title: "Custom AI Tools & Agents",
    shortDesc: "Bespoke Large Language Model integrations, cognitive search, and autonomous multi-agent systems designed to automate workflows.",
    longDesc: "We design, fine-tune, and integrate specialized machine learning engines and multi-agent frameworks into your existing workspace, increasing productivity and turning data into automated actions.",
    features: [
      "OpenAI, Anthropic & DeepSeek integrations",
      "Vector search (RAG) & knowledge bases",
      "Autonomous AI agent workflows",
      "Custom NLP & transcription engines",
    ],
    techStack: ["LangChain", "LlamaIndex", "VectorDBs", "Python"],
    timeline: "4 - 8 weeks",
  },
  {
    id: "saas",
    icon: Layers,
    title: "SaaS Product Development",
    shortDesc: "End-to-end engineering of scalable software-as-a-service platforms, from multi-tenant database architectures to automated billing.",
    longDesc: "We build modern software-as-a-service products with robust multi-tenant architectures, secure data isolation, complex authorization, subscription billing, and rich interactive dashboards.",
    features: [
      "Multi-tenant database structures",
      "Stripe subscription integrations",
      "Interactive data charts & usage metrics",
      "Scalable API server architectures",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
    timeline: "6 - 12 weeks",
  },
  {
    id: "webapps",
    icon: Globe,
    title: "High-Fidelity Web Apps",
    shortDesc: "Interactive, high-performance web applications built for speed, real-time sync, and outstanding user engagement.",
    longDesc: "We build robust, full-stack web applications prioritizing lightning-fast rendering speed, serverless architectures, real-time sync, and fluid animations that feel native.",
    features: [
      "Real-time websockets synchronization",
      "State-of-the-art state management",
      "Offline capabilities & caching",
      "Complex interactive dashboard UI",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    timeline: "4 - 8 weeks",
  },
  {
    id: "websites",
    icon: Monitor,
    title: "Premium Website Design",
    shortDesc: "SEO-optimized, mobile-responsive marketing websites designed to build brand authority and convert visitors into leads.",
    longDesc: "We design websites that stand out. With custom illustrations, smooth page transitions, structured layouts, and integrated lead capture, we ensure your agency or company commands authority.",
    features: [
      "Stunning custom Webflow/Next.js design",
      "Perfect mobile responsiveness",
      "SEO best practices & quick load speeds",
      "Lead generation & analytics hooks",
    ],
    techStack: ["Next.js 14", "Framer Motion", "Vercel Analytics"],
    timeline: "2 - 4 weeks",
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Marketing & Ad Creatives",
    shortDesc: "Data-driven performance advertising campaigns and high-converting creative brand designs optimized for scalable growth.",
    longDesc: "We execute performance marketing campaigns powered by data. We create highly engaging ad graphics, copy, and structural funnel landing pages that lower acquisition costs.",
    features: [
      "High-converting landing page setups",
      "Ad creative design (graphics & copy)",
      "A/B testing & analytics optimization",
      "Pixel tracking & campaign structuring",
    ],
    techStack: ["Google Analytics", "Meta Ads", "TikTok Ads", "Figma"],
    timeline: "Ongoing / Retainer",
  },
  {
    id: "ugc",
    icon: Video,
    title: "Video & UGC Content",
    shortDesc: "Engaging user-generated video content and professional editing designed to drive virality across social platforms.",
    longDesc: "We match your brand with creator networks and script, shoot, and edit vertical-format social media content that stops the scroll and boosts viral product growth.",
    features: [
      "Scriptwriting & hooks engineering",
      "Creator matching & coordination",
      "Vertical video editing & typography",
      "High-frequency distribution strategies",
    ],
    techStack: ["Premiere Pro", "CapCut", "TikTok Studio", "Frame.io"],
    timeline: "Monthly batches",
  },
];

export default function Services() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="py-24 bg-slate-50/50 relative overflow-hidden">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      
      {/* Glow dot in the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hive-cyan/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm uppercase tracking-[0.25em] text-hive-cyan font-bold mb-3">
            What We Build
          </h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6">
            Bespoke Services Engineered for Hyper-Growth
          </h3>
          <p className="text-slate-600 text-lg font-medium">
            We leverage artificial intelligence and modern development paradigms to design, 
            develop, and market digital products in fractions of standard agency time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            const isExpanded = expandedId === service.id;

            return (
              <motion.div
                key={service.id}
                layout
                className={`glass-panel rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between h-full ${
                  isExpanded ? "border-hive-cyan/40 shadow-md shadow-hive-cyan/5" : "hover:border-slate-350"
                }`}
              >
                <div className="flex-1 flex flex-col">
                  {/* Header Icon + Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-hive flex items-center justify-center border border-slate-200">
                      <Icon className="w-6 h-6 text-hive-cyan" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 tracking-tight">
                      {service.title}
                    </h4>
                  </div>

                  {/* Short Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                    {service.shortDesc}
                  </p>

                  {/* Expandable Panel */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-slate-200 pt-4 mt-2 flex flex-col gap-4">
                          <p className="text-xs text-slate-700 leading-relaxed font-medium">
                            {service.longDesc}
                          </p>

                          <div>
                            <span className="text-xs font-bold text-hive-cyan uppercase tracking-wider">
                              Key Deliverables:
                            </span>
                            <ul className="mt-2 space-y-1.5">
                              {service.features.map((feat, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-hive-cyan flex-shrink-0" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-wrap gap-2 items-center justify-between text-xs pt-2 border-t border-slate-100">
                            <div>
                              <span className="text-slate-400 font-semibold">Stack: </span>
                              <span className="text-slate-700 font-bold">{service.techStack.join(" • ")}</span>
                            </div>
                            <div>
                              <span className="text-slate-400 font-semibold">Timeline: </span>
                              <span className="text-hive-purple font-bold">{service.timeline}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Action button */}
                <button
                  onClick={() => toggleExpand(service.id)}
                  className="w-full mt-4 py-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-350 text-xs font-bold text-slate-700 flex items-center justify-center gap-2 transition-all"
                >
                  <span>{isExpanded ? "Show Less" : "Learn More"}</span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-slate-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500" />
                  )}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
