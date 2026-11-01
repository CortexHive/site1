"use client";

import { useState } from "react";
import Link from "next/link";
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
  pageUrl: string;
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
    pageUrl: "/ai-automation",
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
    title: "AI Receptionist & Custom AI",
    tagline: "Never miss a call & put AI to work in your business.",
    ctaText: "Start a Project",
    serviceCategory: "AI Application",
    pageUrl: "/ai-receptionist",
    overview:
      "We build practical AI systems, from 24/7 conversational voice receptionists that pick up customer calls to document intelligence and vector knowledge bases engineered around real business problems.",
    useCases: [
      "24/7 AI Receptionist & incoming call answering",
      "Custom business AI assistants & copilot interfaces",
      "Vector search (RAG) over company documentation",
      "Document intelligence & technical analysis",
      "Customer-facing conversational AI portals",
      "Lead qualification & instant SMS alerts",
      "Internal operational decision-support dashboards",
      "Autonomous multi-agent task execution",
    ],
    deliverables: [
      "Twilio / ElevenLabs telephony integration",
      "Custom conversational voice workflows",
      "Vector database embeddings & indexing pipeline",
      "Deployment-ready web UI & API endpoints",
    ],
    techStack: ["Twilio", "ElevenLabs", "LangChain", "Next.js", "TypeScript"],
  },
  {
    id: "software-mvp",
    number: "03",
    icon: Layers,
    title: "Websites & Software Development",
    tagline: "From £50 starter sites to bespoke web software.",
    ctaText: "Start a Project",
    serviceCategory: "Software / MVP",
    pageUrl: "/software-development",
    overview:
      "We take software ideas and business websites from concept to deployment-ready digital products. From affordable starter websites for trades to full-stack SaaS platforms and internal portals.",
    useCases: [
      "£50 small business & trades starter websites",
      "High-performance responsive company websites",
      "Full-stack SaaS platforms with subscription billing",
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
                  <div className="flex items-center justify-between text-xs font-bold">
                    <button
                      onClick={() => toggleExpand(service.id)}
                      className="text-slate-600 hover:text-slate-900 flex items-center gap-1 py-1 transition-colors"
                    >
                      <span>{isExpanded ? "Less Details" : "Technical Stack"}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                    <Link
                      href={service.pageUrl}
                      className="text-purple-600 hover:text-purple-700 flex items-center gap-1 group py-1"
                    >
                      <span>Dedicated Page</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>

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

        {/* Quick Links to All Specialized Service Pages */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs font-semibold text-slate-700">
          <span className="text-slate-400 font-bold uppercase tracking-wider text-[11px]">Explore All Services:</span>
          <Link href="/website-design" className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 hover:border-purple-300 hover:text-purple-600 transition-colors shadow-2xs">
            Website Design
          </Link>
          <Link href="/small-business-websites" className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 transition-colors shadow-2xs">
            £50 Trades Websites
          </Link>
          <Link href="/ai-receptionist" className="px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 hover:bg-cyan-100 transition-colors shadow-2xs">
            AI Receptionist
          </Link>
          <Link href="/ai-automation" className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 hover:border-purple-300 hover:text-purple-600 transition-colors shadow-2xs">
            AI Automation
          </Link>
          <Link href="/software-development" className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 hover:border-purple-300 hover:text-purple-600 transition-colors shadow-2xs">
            Software Development
          </Link>
        </div>
      </div>
    </section>
  );
}
