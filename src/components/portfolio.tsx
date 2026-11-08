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
  "All",
  "AI & Automation",
  "Internal Products",
  "Client Projects",
  "SaaS & Software",
  "EdTech",
];

const REAL_PROJECTS: PortfolioProject[] = [
  {
    id: "aurapdf",
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
      "Form Filling & Annotation: Highlighting, notes, and interactive form-filling.",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "WebAssembly (PDF.js)", "OpenAI Embeddings"],
    statusText: "Live Internal Product • Active Development",
    icon: Layers,
  },
  {
    id: "markscheme",
    title: "MarkScheme — 11+ Assessment SaaS",
    classification: "INTERNAL PRODUCT",
    categories: ["Internal Products", "SaaS & Software", "EdTech"],
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
      "Automated Encouragement System: Proactive transactional reminders to keep students consistent.",
    ],
    techStack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Node.js", "Tailwind CSS", "Email Automation"],
    statusText: "Live Digital SaaS Platform",
    icon: GraduationCap,
  },
  {
    id: "rydigoo",
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
      "Notification Engine: Instant alerts on regulatory updates and council rule changes.",
      "Scalable Cloud Backend: Real-time Supabase database, authentication, and event webhooks.",
    ],
    techStack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "OpenAI API"],
    statusText: "Internal Platform • Commercial Roadmap",
    icon: Laptop,
  },
  {
    id: "skyview",
    title: "Skyview — Commercial Platform",
    classification: "CLIENT PROJECT",
    categories: ["Client Projects", "SaaS & Software"],
    tagline: "Commercial survey & consultancy web platform developed for Skyview.",
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
    title: "EVTradeShow — Global Industry Directory",
    classification: "DIGITAL PLATFORM",
    categories: ["Digital Platforms", "SaaS & Software"],
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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? REAL_PROJECTS
      : REAL_PROJECTS.filter((p) => p.categories.includes(selectedCategory));

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F8FC] border border-[#E2E8F0] text-xs font-bold text-blue-700 uppercase tracking-widest mb-4">
            Proof of Delivery
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#14243A] tracking-tight mb-4">
            Our Products &amp; Client Projects
          </h2>
          <p className="text-[#475569] text-base sm:text-lg leading-relaxed font-normal">
            We don&apos;t just build client solutions; we design, engineer, and operate our own proprietary software products. Explore our live platforms and proven delivery record.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-[#F5F8FC] text-[#475569] hover:bg-[#E2E8F0] border border-[#E2E8F0]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            const isClient = project.classification === "CLIENT PROJECT";

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-[#FFFFFF] rounded-2xl border border-[#E2E8F0] p-6 sm:p-7 flex flex-col justify-between hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  {/* Top Bar: Classification Badge & Icon */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                        isClient
                          ? "bg-sky-50 text-sky-800 border-sky-200"
                          : "bg-blue-50 text-blue-800 border-blue-200"
                      }`}
                    >
                      {project.classification}
                    </span>

                    <div className="w-8 h-8 rounded-lg bg-[#F5F8FC] flex items-center justify-center text-blue-600 group-hover:bg-blue-50 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#14243A] tracking-tight mb-1.5 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-700 mb-2.5">
                    {project.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5">
                    {project.summary}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 mb-6">
                    {project.keyFeatures.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#475569]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tech & Action */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-4 border-t border-[#E2E8F0]">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-[#F8FAFD] border border-[#E2E8F0] text-[10px] font-mono text-[#475569]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-[#64748B]">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-[#F5F8FC] hover:bg-blue-600 hover:text-white text-[#14243A] text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-[#E2E8F0]"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl border border-[#E2E8F0] hover:border-blue-300 text-[#475569] hover:text-blue-600 transition-colors"
                        title="Visit Live URL"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#14243A]/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl border border-[#E2E8F0] max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full text-[#64748B] hover:text-[#14243A] hover:bg-[#F5F8FC] transition-colors"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-6 pr-8">
                <span
                  className={`inline-block text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md border mb-3 ${
                    activeProject.classification === "CLIENT PROJECT"
                      ? "bg-sky-50 text-sky-800 border-sky-200"
                      : "bg-blue-50 text-blue-800 border-blue-200"
                  }`}
                >
                  {activeProject.classification}
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] tracking-tight mb-1">
                  {activeProject.title}
                </h3>
                <p className="text-sm font-semibold text-blue-600">
                  {activeProject.tagline}
                </p>
              </div>

              {/* Modal Body */}
              <div className="space-y-6 text-sm">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2">
                    Executive Summary
                  </h4>
                  <p className="text-[#475569] leading-relaxed">
                    {activeProject.summary}
                  </p>
                </div>

                {activeProject.challenge && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2">
                      The Challenge
                    </h4>
                    <p className="text-[#475569] leading-relaxed">
                      {activeProject.challenge}
                    </p>
                  </div>
                )}

                {activeProject.solution && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2">
                      The Solution
                    </h4>
                    <p className="text-[#475569] leading-relaxed">
                      {activeProject.solution}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2">
                    What Was Built
                  </h4>
                  <p className="text-[#475569] leading-relaxed">
                    {activeProject.whatWasBuilt}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-3">
                    Key Functionality &amp; Architecture
                  </h4>
                  <ul className="space-y-2">
                    {activeProject.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#475569]">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2">
                    Technologies Implemented
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-[#F8FAFD] border border-[#E2E8F0] text-xs font-mono font-medium text-[#14243A]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4">
                {activeProject.statusText && (
                  <span className="text-xs text-[#64748B] font-semibold">
                    {activeProject.statusText}
                  </span>
                )}

                <div className="flex items-center gap-3 ml-auto">
                  {activeProject.url && (
                    <a
                      href={activeProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition-all"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      setActiveProject(null);
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F5F8FC] hover:bg-[#E2E8F0] text-[#14243A] font-bold text-xs transition-colors border border-[#E2E8F0]"
                  >
                    <span>Discuss Similar Project</span>
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
