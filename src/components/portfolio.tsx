"use client";

import { useState } from "react";
import Image from "next/image";
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
  Calendar,
} from "lucide-react";

export type ProjectClassification =
  | "OWNED PRODUCT"
  | "CLIENT PROJECT"
  | "DIGITAL PLATFORM";

export interface PortfolioProject {
  id: string;
  index: string;
  title: string;
  classification: ProjectClassification;
  categories: string[];
  tagline: string;
  summary: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  url?: string;
  statusText: string;
  icon: React.ComponentType<{ className?: string }>;
  interfacePreview: {
    headerTitle: string;
    badge: string;
    metrics: { label: string; value: string }[];
    uiLines: string[];
  };
}

const CATEGORIES = [
  "All Work",
  "Owned Products",
  "Client Projects",
  "Digital Platforms",
];

export const REAL_PROJECTS: PortfolioProject[] = [
  {
    id: "markscheme",
    index: "01",
    title: "MarkScheme",
    classification: "OWNED PRODUCT",
    categories: ["Owned Products"],
    tagline: "11+ Examination Preparation Platform (250+ Practice & Mock Papers)",
    url: "https://www.markscheme.co.uk/",
    summary:
      "An 11+ examination preparation platform featuring 250+ practice and mock examination papers across Mathematics, Verbal Reasoning, and Non-Verbal Reasoning categories.",
    challenge:
      "Families and students preparing for 11+ entrance examinations needed structured online access to realistic mock examination papers with clear topic categorisation and instant progress visibility.",
    solution:
      "CortexHive designed and built MarkScheme as an educational technology platform offering structured examination resources, timed online mock examinations, and a dedicated student-facing learning interface.",
    keyFeatures: [
      "Examination Resources: 250+ practice and mock examination papers across reasoning and mathematics categories.",
      "Student-Facing Platform: Clean, distraction-free online testing interface designed for 11+ students.",
      "Online Mock Examinations: Structured practice modules with immediate scoring and question review.",
      "Educational Technology: Role-based portals supporting students, parents and moderators.",
    ],
    techStack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    statusText: "CortexHive Owned Product • Live at markscheme.co.uk",
    icon: GraduationCap,
    interfacePreview: {
      headerTitle: "markscheme.co.uk — 11+ Exam Portal",
      badge: "EdTech SaaS",
      metrics: [
        { label: "Exam Papers", value: "250+ Papers" },
        { label: "Categories", value: "Maths & Reasoning" },
      ],
      uiLines: [
        "✓ Timed Online Mock Examinations & Practice Sets",
        "✓ Student, Parent & Moderator Portal Views",
      ],
    },
  },
  {
    id: "aurapdf",
    index: "02",
    title: "AuraPDF",
    classification: "OWNED PRODUCT",
    categories: ["Owned Products"],
    tagline: "PDF & Document Productivity Software Product",
    summary:
      "A privacy-focused PDF and document software product built by CortexHive for browser-based PDF viewing, digital signatures, redactions and document workflows.",
    challenge:
      "Businesses and individuals frequently need to sign, redact and organise PDF documents quickly without uploading confidential files to third-party storage servers.",
    solution:
      "Developed AuraPDF with client-side document processing capabilities so users can work with PDF files, apply digital signatures and redact sensitive sections directly in their browser.",
    keyFeatures: [
      "Client-Side Document Processing: Work with PDF files locally in the browser for enhanced privacy.",
      "Digital Signatures: Draw and embed clean signatures onto contracts and forms.",
      "Document Redaction: Permanently mask sensitive text and sections before sharing.",
      "Document Utilities: Streamlined workspace for everyday business PDF tasks.",
    ],
    techStack: ["Next.js", "TypeScript", "PDF.js / WebAssembly", "Tailwind CSS"],
    statusText: "CortexHive Owned Product",
    icon: Layers,
    interfacePreview: {
      headerTitle: "AuraPDF — Document Workspace",
      badge: "Document Software",
      metrics: [
        { label: "Processing", value: "Client-Side" },
        { label: "Tools", value: "Sign & Redact" },
      ],
      uiLines: [
        "✓ Browser-Based PDF Viewing & Manipulation",
        "✓ Digital Signature & Redaction Toolkit",
      ],
    },
  },
  {
    id: "rydigo",
    index: "03",
    title: "Rydigo",
    classification: "OWNED PRODUCT",
    categories: ["Owned Products"],
    tagline: "Digital Platform & Toolkit for Private Hire Drivers",
    summary:
      "A digital platform developed by CortexHive for private hire drivers, combining community discussion features with practical everyday driver tools.",
    challenge:
      "Private hire and licensed transport drivers lacked a dedicated digital hub to connect with fellow drivers, navigate licensing correspondence and access practical operational tools.",
    solution:
      "Built Rydigo as a mobile-ready web platform featuring driver community channels, verification workflows and helpful AI-assisted drafting utilities for formal driver correspondence.",
    keyFeatures: [
      "Driver Community Features: Dedicated channels for private hire drivers to share updates and regional information.",
      "Practical Driver Tools: Utilities designed around day-to-day private hire and licensing workflows.",
      "AI-Assisted Correspondence: Structured drafting support for formal letters and representations.",
      "Mobile-Ready Interface: Built for fast, reliable use on smartphones between shifts.",
    ],
    techStack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "OpenAI API"],
    statusText: "CortexHive Owned Product",
    icon: Laptop,
    interfacePreview: {
      headerTitle: "Rydigo — Driver Community & Tools",
      badge: "Driver Platform",
      metrics: [
        { label: "Audience", value: "Private Hire" },
        { label: "Capabilities", value: "Community + Tools" },
      ],
      uiLines: [
        "✓ Regional Driver Community & Updates",
        "✓ Practical Driver Utilities & AI Letter Assistant",
      ],
    },
  },
  {
    id: "skyview",
    index: "04",
    title: "Skyview",
    classification: "CLIENT PROJECT",
    categories: ["Client Projects"],
    tagline: "Client Website & Course Enquiry Platform",
    url: "https://skyview.org.uk/",
    summary:
      "A client project delivered for Skyview, providing a clean, structured web platform for showcasing programmes, capturing enquiries and guiding prospective applicants.",
    challenge:
      "Skyview needed a professional, easy-to-navigate website that clearly presented its offerings and made it simple for prospective students and clients to submit structured enquiries.",
    solution:
      "CortexHive designed and delivered a fast, mobile-optimised website for Skyview with clear programme breakdowns, structured enquiry forms and intuitive navigation.",
    keyFeatures: [
      "Client Web Platform: Custom website designed and developed specifically for Skyview.",
      "Structured Programme Pages: Clear presentation of courses, entry information and services.",
      "Enquiry Capture Workflows: Accessible contact and consultation forms for prospective applicants.",
      "Mobile-First Responsive Design: Optimised for visitors browsing on phones, tablets and desktops.",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
    statusText: "Client Project • Live at skyview.org.uk",
    icon: Globe,
    interfacePreview: {
      headerTitle: "skyview.org.uk — Client Web Platform",
      badge: "Client Work",
      metrics: [
        { label: "Project Type", value: "Client Website" },
        { label: "Focus", value: "Enquiry Generation" },
      ],
      uiLines: [
        "✓ Programme Discovery & Information Architecture",
        "✓ Structured Applicant & Client Enquiry Forms",
      ],
    },
  },
  {
    id: "evtradeshow",
    index: "05",
    title: "EV Trade Show",
    classification: "DIGITAL PLATFORM",
    categories: ["Digital Platforms"],
    tagline: "International Electric Vehicle Events & Exhibition Directory",
    url: "https://evtradeshow.com/",
    summary:
      "A digital directory and industry platform cataloguing electric vehicle trade shows, conferences, exhibitions and automotive summits worldwide.",
    challenge:
      "Professionals and exhibitors in the electric vehicle sector needed a central online directory to discover upcoming EV exhibitions and conferences by region and date.",
    solution:
      "Built a fast, searchable digital directory platform with event categorisation, regional filtering, event detail pages and organiser submission workflows.",
    keyFeatures: [
      "Global Event Directory: Searchable listings of electric vehicle trade shows, expos and conferences.",
      "Regional & Date Filtering: Browse upcoming industry events across the UK, Europe, North America and Asia.",
      "Organiser Submissions: Structured forms allowing event organisers to submit exhibition listings.",
      "Search-Optimised Architecture: Clean URLs and structured metadata for organic discovery.",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Schema.org"],
    statusText: "Digital Directory Platform • Live at evtradeshow.com",
    icon: Calendar,
    interfacePreview: {
      headerTitle: "evtradeshow.com — Global Event Directory",
      badge: "Digital Directory",
      metrics: [
        { label: "Architecture", value: "Searchable Directory" },
        { label: "Coverage", value: "Global EV Events" },
      ],
      uiLines: [
        "✓ Region, Category & Date Event Filtering",
        "✓ Event Detail Pages & Organiser Submissions",
      ],
    },
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All Work");
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  const filteredProjects =
    selectedCategory === "All Work"
      ? REAL_PROJECTS
      : REAL_PROJECTS.filter((p) => p.categories.includes(selectedCategory));

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-white border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-10 mb-10 border-b border-[#E2E8F0]">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F8FC] border border-[#E2E8F0] text-xs font-bold uppercase tracking-wider text-blue-600">
              Our Products &amp; Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#14243A] tracking-tight leading-[1.12]">
              Real Software Products &amp; Client Projects.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Alongside our client websites and software engagements, CortexHive builds and operates its own digital products — demonstrating genuine end-to-end design and development capability.
            </p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-2xs"
                    : "bg-[#F5F8FC] text-[#475569] hover:text-[#14243A] border border-[#E2E8F0]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const isOwned = project.classification === "OWNED PRODUCT";
            const isClient = project.classification === "CLIENT PROJECT";

            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden flex flex-col justify-between hover:border-blue-300 shadow-subtle hover:shadow-hover transition-all duration-200 group"
              >
                <div>
                  {/* Application Interface Visual Preview Header */}
                  <div className="bg-[#F8FAFD] border-b border-[#E2E8F0] p-3 sm:p-4">
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-slate-200/90 bg-white shadow-2xs">
                      <Image
                        src={`/projects/${project.id}.webp`}
                        alt={`${project.title} — ${project.tagline}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {project.interfacePreview.metrics.map((m) => (
                        <div key={m.label} className="px-2.5 py-2 rounded-lg bg-white border border-slate-200/80 flex items-center justify-between gap-2">
                          <span className="text-[10px] font-semibold uppercase text-[#64748B] truncate">
                            {m.label}
                          </span>
                          <span className="text-[11px] font-bold text-[#14243A] whitespace-nowrap">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                          isOwned
                            ? "bg-blue-50 text-blue-700 border border-blue-200"
                            : isClient
                            ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                            : "bg-slate-100 text-slate-700 border border-slate-200"
                        }`}
                      >
                        {project.classification}
                      </span>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-[#14243A] transition-colors"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    <h3 className="text-xl font-extrabold text-[#14243A] tracking-tight mb-1 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                      {project.summary}
                    </p>

                    <div className="space-y-1.5 mb-4">
                      {project.keyFeatures.slice(0, 2).map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#475569]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 pb-6 pt-3 border-t border-slate-100 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-[#F5F8FC] border border-[#E2E8F0] text-[10px] font-semibold text-[#475569]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-[#14243A] hover:bg-blue-600 text-white text-xs font-semibold transition-colors flex items-center justify-between"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl border border-[#E2E8F0] hover:border-blue-300 text-[#475569] hover:text-blue-600 transition-colors bg-white"
                        title={`Visit ${project.title}`}
                        aria-label={`Visit ${project.title} live website`}
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/45 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              className="bg-white rounded-2xl border border-[#E2E8F0] max-w-2xl w-full max-h-[86vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8"
            >
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-[#14243A] hover:bg-slate-100 transition-colors"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6 pr-8 pb-5 border-b border-[#E2E8F0]">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 mb-2.5">
                  {activeProject.classification}
                </span>

                <h3 className="text-2xl font-extrabold text-[#14243A] tracking-tight mb-1">
                  {activeProject.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-blue-600">
                  {activeProject.tagline}
                </p>
              </div>

              <div className="space-y-5 text-sm">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1.5">
                    Overview
                  </h4>
                  <p className="text-[#475569] leading-relaxed text-xs sm:text-sm">
                    {activeProject.summary}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1.5">
                    The Challenge
                  </h4>
                  <p className="text-[#475569] leading-relaxed text-xs sm:text-sm">
                    {activeProject.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1.5">
                    How CortexHive Built It
                  </h4>
                  <p className="text-[#475569] leading-relaxed text-xs sm:text-sm">
                    {activeProject.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2.5">
                    Key Capabilities
                  </h4>
                  <ul className="space-y-2">
                    {activeProject.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569]">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-[#F5F8FC] border border-[#E2E8F0] text-xs font-semibold text-[#14243A]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-medium text-[#64748B]">
                  {activeProject.statusText}
                </span>

                <div className="flex items-center gap-2.5 ml-auto">
                  {activeProject.url && (
                    <a
                      href={activeProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-[#14243A] text-white font-semibold text-xs transition-colors"
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
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F5F8FC] hover:bg-slate-200 text-[#14243A] font-semibold text-xs transition-colors"
                  >
                    <span>Discuss a Similar Project</span>
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
