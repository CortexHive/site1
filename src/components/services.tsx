"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Cpu,
  Layers,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface ServicePillar {
  id: string;
  number: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tagline: string;
  ctaText: string;
  serviceCategory: string;
  overview: string;
  useCases: string[];
  deliverables: string[];
  techStack: string[];
}

const PRIMARY_SERVICES: ServicePillar[] = [
  {
    id: "ai-automation",
    number: "01",
    icon: Bot,
    title: "AI Automation",
    tagline: "Turn repetitive processes into intelligent workflows.",
    ctaText: "Start a Project",
    serviceCategory: "AI Automation",
    overview:
      "We help businesses automate manual, repetitive operational processes by integrating specialized AI models, webhooks, and autonomous processing pipelines directly into their existing software stack.",
    useCases: [
      "AI enquiry handling & lead triage",
      "Automated customer support routing",
      "Email & communication automation",
      "Intelligent document processing & data extraction",
      "CRM pipeline updates & automated follow-ups",
      "Internal business knowledge assistants",
      "Automated reporting & operational analytics",
      "Cross-platform workflow synchronization",
    ],
    deliverables: [
      "Custom webhook & API automation pipeline",
      "Fine-tuned data extraction prompts & schemas",
      "CRM & database sync integrations",
      "Error handling, logging, & human-in-the-loop review",
    ],
    techStack: ["Node.js", "Python", "OpenAI / Claude API", "Webhooks", "PostgreSQL"],
  },
  {
    id: "custom-ai-apps",
    number: "02",
    icon: Cpu,
    title: "Custom AI Applications",
    tagline: "Put AI to work inside your business.",
    ctaText: "Start a Project",
    serviceCategory: "AI Application",
    overview:
      "We build practical, high-utility AI applications engineered around real business problems. From document intelligence and vector knowledge bases to multi-agent reasoning systems, we make AI genuinely useful.",
    useCases: [
      "Custom business AI assistants & copilot interfaces",
      "Autonomous multi-agent task execution workflows",
      "Vector search (RAG) over company documentation",
      "Document intelligence & legal/technical analysis",
      "Intelligent recommendation engines",
      "Customer-facing conversational AI portals",
      "Internal operational decision-support dashboards",
      "AI-assisted structured content generation",
    ],
    deliverables: [
      "Vector database embeddings & indexing pipeline",
      "Custom multi-agent orchestration architecture",
      "Deployment-ready web UI & API endpoints",
      "Strict data privacy & security isolation",
    ],
    techStack: ["LangChain", "VectorDB / pgvector", "Next.js", "FastAPI", "TypeScript"],
  },
  {
    id: "software-mvp",
    number: "03",
    icon: Layers,
    title: "Software & MVP Development",
    tagline: "Turn your idea into a working product.",
    ctaText: "Start a Project",
    serviceCategory: "Software / MVP",
    overview:
      "We take software ideas from concept to deployment-ready digital products built for real-world use. We engineer scalable web applications, SaaS platforms, internal business portals, and validated MVPs designed for real user adoption.",
    useCases: [
      "Full-stack SaaS platforms with subscription billing",
      "High-performance responsive web applications",
      "Online marketplaces & directory platforms",
      "Custom client portals & administration dashboards",
      "EdTech & structured assessment platforms",
      "Internal bespoke business management systems",
      "Rapid prototypes & minimum viable products (MVPs)",
      "API architectures & third-party integrations",
    ],
    deliverables: [
      "Clean, scalable TypeScript & Next.js codebase",
      "Relational database design & secure authentication",
      "Responsive, mobile-optimised user interface",
      "Cloud deployment & automated CI/CD pipeline",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma / Supabase"],
  },
];

export default function Services() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 bg-slate-50/50 border-t border-slate-200 relative overflow-hidden">
      {/* Background grid accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold text-purple-700 uppercase tracking-widest mb-4">
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-outfit tracking-tight mb-5">
            What We Build
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            We don&apos;t just talk about AI. We build it. CortexHive specializes in three practical disciplines to turn business challenges into working software.
          </p>
        </div>

        {/* 3 Core Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRIMARY_SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl ${
                  isExpanded ? "border-purple-600 ring-1 ring-purple-600/20" : "border-slate-200 hover:border-slate-350"
                }`}
              >
                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-widest text-slate-400">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-extrabold text-slate-950 font-outfit tracking-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm font-semibold text-purple-600 mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-6">
                    {service.overview}
                  </p>

                  {/* Use Cases List */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Key Applications:
                    </span>
                    <ul className="space-y-2">
                      {service.useCases.slice(0, 4).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expandable Technical Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-slate-100 pt-4 mt-4 space-y-4"
                      >
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                            Additional Applications:
                          </span>
                          <ul className="space-y-1.5">
                            {service.useCases.slice(4).map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                            Production Deliverables:
                          </span>
                          <ul className="space-y-1">
                            {service.deliverables.map((d, idx) => (
                              <li key={idx} className="text-[11px] text-slate-600 font-medium list-disc list-inside">
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                            Core Technologies:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {service.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-mono text-slate-700 font-semibold"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card Actions */}
                <div className="pt-6 border-t border-slate-100 mt-6 space-y-3">
                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="w-full text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center justify-center gap-1.5 py-1.5 transition-colors"
                  >
                    <span>{isExpanded ? "Show Less" : "View Full Scope & Stack"}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={scrollToContact}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold shadow-sm hover:shadow transition-all"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
