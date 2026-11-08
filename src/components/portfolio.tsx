"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  X,
  Layers,
  Globe,
  GraduationCap,
  Laptop,
  CheckCircle2,
} from "lucide-react";

export type ProjectClassification =
  | "CLIENT PROJECT"
  | "INTERNAL PRODUCT"
  | "DIGITAL PLATFORM";

export interface PortfolioProject {
  id: string;
  index: string;
  title: string;
  classification: ProjectClassification;
  categories: string[];
  tagline: string;
  summary: string;
  challenge?: string;
  solution?: string;
  whatWasBuilt: string;
  keyFeatures: string[];
  techStack: string[];
  url?: string;
  statusText?: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CATEGORIES = [
  "All Systems",
  "Internal Products",
  "Client Projects",
  "AI & Automation",
  "SaaS & Software",
];

const REAL_PROJECTS: PortfolioProject[] = [
  {
    id: "markscheme",
    index: "SYS-01",
    title: "MarkScheme — 11+ Assessment SaaS",
    classification: "INTERNAL PRODUCT",
    categories: ["Internal Products", "SaaS & Software"],
    tagline: "End-to-end 11+ examination delivery and engagement analytics platform.",
    url: "https://markscheme.co.uk/",
    summary:
      "A comprehensive educational SaaS platform delivering 250+ full-length mock examinations across Mathematics, Verbal, and Non-Verbal reasoning, paired with multi-role portals and automated student engagement tracking.",
    challenge:
      "Traditional 11+ preparation relies on static, disconnected paper tests without automated scoring, detailed performance analytics, or tools to keep students consistently engaged.",
    solution:
      "Engineered an automated digital testing platform with timed delivery, instant rubric calculation, segregated Student, Parent, and Moderator panels, and proactive student retention workflows.",
    whatWasBuilt:
      "A full-stack EdTech software platform featuring role-based dashboards, automated evaluation rubrics, parent oversight, and automated reminder sequences.",
    keyFeatures: [
      "250+ Mock Examinations: Full curriculum coverage for Mathematics, Verbal Reasoning, and Non-Verbal Reasoning.",
      "Student & Parent Dashboards: Segregated portals for examination delivery, progress tracking, and parent oversight.",
      "Admin & Moderator Panels: Comprehensive review tools for educational staff to evaluate submissions and publish feedback.",
      "Instant Scoring & Feedback: Automatic calculation of results with itemized question breakdowns.",
    ],
    techStack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Node.js", "Tailwind CSS"],
    statusText: "Live Digital SaaS Platform",
    icon: GraduationCap,
  },
  {
    id: "aurapdf",
    index: "SYS-02",
    title: "AuraPDF — Document Intelligence",
    classification: "INTERNAL PRODUCT",
    categories: ["AI & Automation", "Internal Products", "SaaS & Software"],
    tagline: "AI-powered document intelligence & client-side PDF utility platform.",
    summary:
      "A privacy-first AI document intelligence software platform designed for intelligent PDF querying, automatic summarisation, digital signatures, redactions, and local document manipulation without unwanted cloud storage.",
    challenge:
      "Users handling confidential contracts, legal records, and business documents need fast AI intelligence without uploading sensitive private data to unsecured public cloud servers.",
    solution:
      "Architected a hybrid client-side document engine paired with private AI vector embeddings, allowing instant document querying, signatures, and secure local redactions.",
    whatWasBuilt:
      "Full-featured document intelligence workspace featuring natural language PDF Q&A, instant executive summaries, digital signature canvas, irreversible redaction, and rapid local export.",
    keyFeatures: [
      "AI Document Q&A: Ask questions across lengthy contracts with cited page references.",
      "Offline-First Security: 100% client-side document processing with zero server-side storage.",
      "Digital Signatures: Draw, save, and cryptographically embed digital signatures onto PDF pages.",
      "Irreversible Redaction: Black-box redaction tools to sanitize sensitive financial and personal data.",
    ],
    techStack: ["Next.js", "TypeScript", "WebAssembly (PDF.js)", "OpenAI Embeddings"],
    statusText: "Proprietary Product • Active Deployment",
    icon: Layers,
  },
  {
    id: "rydigoo",
    index: "SYS-03",
    title: "Rydigo — Transport & Dispatch Toolkit",
    classification: "INTERNAL PRODUCT",
    categories: ["Internal Products", "AI & Automation", "SaaS & Software"],
    tagline: "Operational management toolkit and AI assistance for transport operators.",
    summary:
      "A dedicated digital community and operational toolkit engineered for private hire, transport operators, and gig drivers to streamline dispute workflows, resolve licensing inquiries with AI, and access productivity utilities.",
    challenge:
      "Drivers and operators spend hundreds of hours drafting formal representations, disputing council fines, and managing shifting local regulatory requirements in isolation.",
    solution:
      "CortexHive built Rydigo as a digital platform combining operational networking, verified driver credentials, dispute resolution workflows, and AI-assisted correspondence.",
    whatWasBuilt:
      "A responsive web application featuring driver network channels, dispute resolution utilities, and an AI-assisted letter generation engine for rapid representation drafting.",
    keyFeatures: [
      "AI-Assisted Formal Representations: Automated drafting of representations, appeals, and council correspondence.",
      "Operational Network: Regional channels for operators and drivers to share real-time road and shift updates.",
      "Driver Validation: Factual credential and identity verification workflows.",
      "Scalable Cloud Backend: Real-time Supabase database, authentication, and event webhooks.",
    ],
    techStack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "OpenAI API"],
    statusText: "Proprietary Platform • Commercial Rollout",
    icon: Laptop,
  },
  {
    id: "skyview",
    index: "SYS-04",
    title: "Skyview — Commercial Platform",
    classification: "CLIENT PROJECT",
    categories: ["Client Projects", "SaaS & Software"],
    tagline: "Institutional web platform developed for Skyview.",
    url: "https://skyview.org.uk/",
    summary:
      "A bespoke institutional web platform built for Skyview, streamlining course discovery, commercial inquiries, consultation scheduling, and admissions document intake.",
    challenge:
      "Managing inquiries through unstructured email and messaging threads resulted in dropped leads, missing documentation, and lost business opportunities.",
    solution:
      "Engineered and launched a structured digital platform providing clear service exploration, structured qualification funnels, and secure document upload workflows.",
    whatWasBuilt:
      "Modern, ultra-fast web platform with interactive qualification funnels, document upload pipelines, and automated lead routing.",
    keyFeatures: [
      "Inquiry Qualification Engine: Multi-stage intake capture qualifying service requirements and destination goals.",
      "Directory & Service Catalog: Clear presentation of programs, guidelines, and prerequisite requirements.",
      "Secure Document Intake: Digital forms allowing clients to upload necessary verification records safely.",
      "Sub-Second Performance: Mobile-first responsive UX optimized for high search visibility and fast conversions.",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Form Pipelines", "Cloudflare DNS"],
    statusText: "Client Project • Live in Production",
    icon: Globe,
  },
  {
    id: "evtradeshow",
    index: "SYS-05",
    title: "EVTradeShow — Global Industry Directory",
    classification: "DIGITAL PLATFORM",
    categories: ["SaaS & Software"],
    tagline: "Centralized international directory for the electric vehicle industry.",
    url: "https://evtradeshow.com/",
    summary:
      "A centralized digital events platform cataloguing international electric vehicle trade shows, conferences, exhibitions, and supplier summits worldwide.",
    challenge:
      "The rapidly expanding EV industry lacked a single authoritative directory for executives and suppliers to discover and plan event attendance across continents.",
    solution:
      "Built a searchable digital directory architecture featuring regional filtering, event categorisation, exhibitor information, and organizer listing submissions.",
    whatWasBuilt:
      "Searchable web directory with fast search indexing, interactive event filters by date and geography, and event submission capabilities.",
    keyFeatures: [
      "Global Event Discovery: Searchable listings of EV summits, battery expos, and automotive conferences.",
      "Regional & Date Filtering: Filter by continent, event type, and quarterly dates.",
      "Organizer Listing Submissions: Dedicated portal for conference organizers to submit and manage event details.",
      "SEO Architecture: Structured data schemas (Schema.org) for prominent Google Search visibility.",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Schema.org JSON-LD"],
    statusText: "Live Digital Directory",
    icon: Globe,
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All Systems");
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  const filteredProjects =
    selectedCategory === "All Systems"
      ? REAL_PROJECTS
      : REAL_PROJECTS.filter((p) => p.categories.includes(selectedCategory));

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-10 mb-10 border-b border-slate-200">
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-blue-600 font-semibold">
              03 // PROVEN ENGINEERING
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#090D16] tracking-[-0.025em] leading-[1.1]">
              Proprietary Products &amp; Client Systems.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We don&apos;t just build client software — we architect, ship, and operate our own proprietary SaaS platforms. Explore our live systems and verified production deployments.
            </p>
          </div>
        </div>

        {/* Clean Architectural Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                  isSelected
                    ? "bg-[#0F172A] text-white"
                    : "bg-white text-slate-600 hover:text-[#0F172A] border border-slate-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            const isClient = project.classification === "CLIENT PROJECT";

            return (
              <div
                key={project.id}
                className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-300 hover:shadow-[0_12px_32px_-12px_rgba(15,23,42,0.08)] transition-all duration-200 group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-400">
                        {project.index}
                      </span>
                      <span
                        className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                          isClient
                            ? "bg-blue-50 text-blue-700"
                            : "bg-slate-100 text-[#0F172A]"
                        }`}
                      >
                        {project.classification}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-md bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg font-bold text-[#090D16] tracking-tight mb-1.5 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {project.summary}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 mb-6">
                    {project.keyFeatures.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tech & Action */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-4 border-t border-slate-100">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-[10px] font-mono text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="flex-1 py-2.5 px-4 rounded-lg bg-[#0F172A] hover:bg-blue-600 text-white text-xs font-semibold transition-colors flex items-center justify-between"
                    >
                      <span>Technical Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-[#0F172A] transition-colors bg-white"
                        title="Visit Live Deployment"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              className="bg-white rounded-xl border border-slate-200 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8"
            >
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 p-2 rounded-lg text-slate-400 hover:text-[#0F172A] hover:bg-slate-100 transition-colors"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6 pr-8 pb-5 border-b border-slate-200">
                <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 text-[#0F172A] mb-2.5">
                  {activeProject.index} {" // "} {activeProject.classification}
                </span>

                <h3 className="text-2xl font-extrabold text-[#090D16] tracking-tight mb-1">
                  {activeProject.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-blue-600">
                  {activeProject.tagline}
                </p>
              </div>

              <div className="space-y-5 text-sm">
                <div>
                  <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Executive Summary
                  </h4>
                  <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                    {activeProject.summary}
                  </p>
                </div>

                {activeProject.challenge && (
                  <div>
                    <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Operational Challenge
                    </h4>
                    <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                      {activeProject.challenge}
                    </p>
                  </div>
                )}

                {activeProject.solution && (
                  <div>
                    <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Engineered Solution
                    </h4>
                    <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                      {activeProject.solution}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    Key Capabilities &amp; Architecture
                  </h4>
                  <ul className="space-y-2">
                    {activeProject.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs font-mono text-[#0F172A]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                {activeProject.statusText && (
                  <span className="text-xs font-mono text-slate-500">
                    {activeProject.statusText}
                  </span>
                )}

                <div className="flex items-center gap-2.5 ml-auto">
                  {activeProject.url && (
                    <a
                      href={activeProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-[#0F172A] text-white font-semibold text-xs transition-colors"
                    >
                      <span>Visit Live System</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      setActiveProject(null);
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#0F172A] font-semibold text-xs transition-colors"
                  >
                    <span>Discuss Similar Architecture</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
