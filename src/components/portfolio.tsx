"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  X,
  Layers,
  Bot,
  Globe,
  GraduationCap,
  Laptop,
  ShoppingBag,
  CheckCircle2,
} from "lucide-react";

export type ProjectClassification =
  | "CLIENT PROJECT"
  | "CORTEXHIVE PRODUCT"
  | "DIGITAL PRODUCT";

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
  image?: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CATEGORIES = [
  "All",
  "AI & Automation",
  "Software Products",
  "Client Projects",
  "EdTech",
  "Digital Platforms",
  "Digital Products",
];

const REAL_PROJECTS: PortfolioProject[] = [
  {
    id: "rydigoo",
    title: "Rydigoo — Driver Community & Toolkit",
    classification: "CORTEXHIVE PRODUCT",
    categories: ["AI & Automation", "Software Products", "Digital Platforms"],
    tagline: "A digital community and toolkit for private hire, taxi and gig drivers.",
    summary:
      "A dedicated digital community and operational toolkit engineered for private hire, taxi, and gig drivers to connect, communicate, access bespoke productivity utilities, and resolve dispute workflows.",
    challenge:
      "Professional and gig drivers operate in isolation without unified digital channels to share local shift intelligence, resolve formal licensing/fine disputes, and access community tools.",
    solution:
      "CortexHive engineered Rydigoo as a community-first digital platform combining real-time driver networking, verified profiles, structured support tools, and AI-assisted correspondence.",
    whatWasBuilt:
      "A responsive web application featuring real-time driver channels, verified driver credentials, a library of dispute resolution utilities, and an AI-assisted letter generation engine.",
    keyFeatures: [
      "Driver Community: Regional and city channels for drivers to connect and share real-time updates.",
      "Social & Chat Functionality: Direct and topic-based group conversations structured around industry discussions.",
      "AI-Assisted Letters & Complaints: Automated drafting of formal representations, appeals, and council complaints.",
      "Driver Validation: Factual credential and identity verification workflows for safe peer interactions.",
      "Notifications: Real-time alerts on regulation changes, updates, and community topics.",
      "Supabase Backend: Fast, scalable relational database, authentication, and real-time pub/sub channels.",
      "Marketplace — Coming Soon: Phased commerce roadmap scheduled after community liquidity is established.",
    ],
    techStack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "OpenAI API", "Webhooks"],
    statusText: "Active Community Platform • Marketplace Coming Soon",
    icon: Laptop,
  },
  {
    id: "markscheme",
    title: "MarkScheme — 11+ Assessment Platform",
    classification: "DIGITAL PRODUCT",
    categories: ["EdTech", "Software Products"],
    tagline: "An end-to-end 11+ assessment and engagement platform.",
    url: "https://markscheme.co.uk/",
    summary:
      "A complete educational software platform delivering 250+ full-length mock examinations across Mathematics, Verbal, and Non-Verbal reasoning, paired with role-based portals and automated engagement tracking.",
    challenge:
      "Traditional 11+ prep relies on static PDFs without automated grading, structured role permissions, or tools to keep students actively engaged through targeted feedback.",
    solution:
      "Engineered an end-to-end software platform with timed test delivery, instant scoring, segregated Student, Parent, and Moderator panels, and proactive student retention workflows.",
    whatWasBuilt:
      "A full-stack EdTech software platform featuring role-based dashboards, automated evaluation rubrics, parent oversight, and automated reminder sequences.",
    keyFeatures: [
      "250+ Mock Examinations: Full curriculum coverage for Mathematics, Verbal Reasoning, and Non-Verbal Reasoning.",
      "Student & Parent Dashboards: Segregated portals for examination delivery, progress tracking, and parent oversight.",
      "Admin & Moderator Panels: Comprehensive review tools for educational staff to evaluate submissions and publish feedback.",
      "Instant Scoring & Feedback: Automatic calculation of results with itemized question breakdowns.",
      "Engagement & Inactivity Monitoring: Automated tracking of student participation with reminder triggers.",
      "Automated Encouragement Communication: Proactive transactional email reminders and notifications.",
    ],
    techStack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Node.js", "Tailwind CSS", "Email Automation"],
    icon: GraduationCap,
  },
  {
    id: "skyview",
    title: "Skyview — Education Consultancy Platform",
    classification: "CLIENT PROJECT",
    categories: ["Client Projects", "Digital Platforms"],
    tagline: "Digital platform for an education consultancy agency.",
    url: "https://skyview.org.uk/",
    summary:
      "A bespoke institutional web platform built for Skyview, streamlining international student course discovery, consultation booking, and admissions document intake.",
    challenge:
      "The consultancy was managing global student inquiries through fragmented channels, leading to delays in admissions processing and document tracking.",
    solution:
      "Designed and deployed a structured digital platform providing clear course exploration, structured enquiry funnels, and secure document submission workflows.",
    whatWasBuilt:
      "A modern, responsive agency platform with course directories, student consultation intake forms, and automated enquiry notification dispatch.",
    keyFeatures: [
      "Consultancy Inquiry Engine: Multi-stage intake capture qualifying academic interests and destination countries.",
      "Course & Institution Directory: Structured presentation of academic programs, entry requirements, and guidelines.",
      "Document Intake Workflows: Secure digital forms for applicant transcripts, statements, and identification.",
      "Mobile-Optimized User Experience: Fast, accessible interface for prospective international students.",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Form Pipelines", "Cloudflare DNS"],
    icon: Globe,
  },
  {
    id: "evtradeshow",
    title: "EVTradeShow — Digital EV Events Platform",
    classification: "DIGITAL PRODUCT",
    categories: ["Digital Platforms", "Software Products"],
    tagline: "Global directory and discovery platform for the electric vehicle industry.",
    url: "https://evtradeshow.com/",
    summary:
      "A centralized digital events platform cataloguing international electric vehicle trade shows, conferences, exhibitions, and supplier summits worldwide.",
    challenge:
      "The rapidly expanding EV industry lacked a centralized, regularly updated directory for professionals to discover, filter, and plan event attendance across continents.",
    solution:
      "Built a searchable digital directory architecture featuring regional filtering, event categorisation, exhibitor information, and organizer listing submissions.",
    whatWasBuilt:
      "Comprehensive web directory with fast search indexing, interactive event filters by date and geography, and event submission capabilities.",
    keyFeatures: [
      "Global Event Discovery: Searchable listings of EV summits, battery expos, and automotive technology conferences.",
      "Date & Regional Filtering: Filter by continent, country, event focus, and calendar quarters.",
      "Organizer Listing Submissions: Dedicated portal for conference organizers to submit and manage event details.",
      "Digital Platform Architecture: Built for high SEO visibility, fast indexing, and monetization opportunities.",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Structured Data (Schema.org)"],
    icon: Globe,
  },
  {
    id: "aurapdf",
    title: "AuraPDF — Offline-First PDF Productivity",
    classification: "CORTEXHIVE PRODUCT",
    categories: ["Software Products", "Digital Products"],
    tagline: "Offline-first desktop and browser PDF productivity software.",
    summary:
      "A privacy-centric PDF productivity tool designed to perform document manipulation, digital signatures, redactions, and form-filling entirely client-side without cloud transmission.",
    challenge:
      "Users handling sensitive legal, financial, or personal documents frequently risk data exposure when using cloud-based PDF conversion tools.",
    solution:
      "Architected an offline-first document manipulation engine that executes all PDF rendering, editing, and signature operations locally within the client environment.",
    whatWasBuilt:
      "Lightweight, zero-server document workspace featuring PDF page reordering, digital signature canvas, text redaction, and local export.",
    keyFeatures: [
      "Offline-First Architecture: 100% client-side document processing with zero server-side document storage.",
      "Digital Signatures: Draw, save, and embed cryptographic digital signatures directly onto PDF pages.",
      "Document Redaction: Clean irreversible black-box redaction tools to sanitize sensitive information.",
      "Form Filling & Annotation: Add text, checkboxes, notes, and highlights seamlessly.",
    ],
    techStack: ["TypeScript", "WebAssembly (PDF.js / pdf-lib)", "React", "Tailwind CSS", "Local Storage"],
    statusText: "Software Product • Client-Side Security",
    icon: Layers,
  },
  {
    id: "themusashiway",
    title: "The Musashi Way — Strategy Platform",
    classification: "DIGITAL PRODUCT",
    categories: ["Digital Products", "AI & Automation"],
    tagline: "Interactive strategy and decision-support platform.",
    url: "https://themusashiway.com/",
    summary:
      "An interactive strategy and decision-support simulator transforming classical strategic philosophies into actionable business and leadership decision frameworks.",
    challenge:
      "Strategic frameworks are often taught as static theory rather than interactive models that challenge decision-makers in simulated scenarios.",
    solution:
      "Built an engaging interactive web application that walks users through situational branching scenarios, tradeoff assessments, and strategic decision matrices.",
    whatWasBuilt:
      "Interactive strategy simulator featuring real-time feedback loops, scenario navigation, and local-first progress caching.",
    keyFeatures: [
      "Interactive Strategy Simulator: Branching decision trees modeling operational and competitive scenarios.",
      "Decision-Support Framework: Practical heuristics and tradeoff analysis for founders and executives.",
      "Responsive Interactive UX: Fluid visual animations and stateful decision persistence.",
      "Local-First Execution: Fast loading with client-side state preservation.",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    icon: Bot,
  },
  {
    id: "numixacademy",
    title: "Numix Academy — 11+ Mathematics",
    classification: "DIGITAL PRODUCT",
    categories: ["EdTech", "Digital Products"],
    tagline: "Online education and 11+ mathematics platform.",
    url: "https://numixacademy.com/",
    summary:
      "A structured online mathematics learning platform designed to help primary students master core 11+ curriculum concepts through clear pedagogical steps.",
    whatWasBuilt:
      "Curriculum-aligned educational platform featuring structured topic modules, interactive worksheets, and self-paced mathematics exercises.",
    keyFeatures: [
      "Structured Curriculum: Step-by-step modular lessons covering essential 11+ mathematics topics.",
      "Interactive Exercises: Dynamic practice questions with instant solution explanations.",
      "Progressive Learning Paths: Structured skill building from foundational arithmetic to multi-step reasoning.",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    icon: GraduationCap,
  },
  {
    id: "runtheuk",
    title: "Run The UK — Political Simulation Game",
    classification: "DIGITAL PRODUCT",
    categories: ["Digital Products", "Software Products"],
    tagline: "Interactive decisions-driven political simulation game.",
    url: "https://runtheuk.com/",
    image: "/run-the-uk.png",
    summary:
      "An interactive policy and political governance simulation challenging players to lead the UK government by resolving cabinet crises, parliamentary disputes, and national budgets.",
    whatWasBuilt:
      "State-driven web game application with dynamic policy impact algorithms, parliamentary whip calculations, and treasury budget metrics.",
    keyFeatures: [
      "Dynamic Simulation Engine: Mathematical state model recalculating popularity, budget, and party loyalty in real time.",
      "Cabinet Briefing System: Crisis decision cards with multifaceted long-term consequences.",
      "Data-Rich Dashboards: Interactive visualizations of national debt, inflation, and public approval.",
    ],
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    icon: Laptop,
  },
  {
    id: "alphaflex-designs",
    title: "AlphaFlex Designs — Digital Commerce",
    classification: "DIGITAL PRODUCT",
    categories: ["Digital Products"],
    tagline: "Commercial Etsy storefront for creative digital product assets.",
    summary:
      "A customer-facing digital product business demonstrating commercial product packaging, digital asset fulfillment, and international marketplace distribution.",
    whatWasBuilt:
      "Comprehensive catalog of digital design templates, vector graphics, and commercial digital assets distributed via e-commerce marketplace rails.",
    keyFeatures: [
      "Digital Product Packaging: Creation of production-ready digital downloads for retail consumers.",
      "Automated Fulfillment: Seamless instant download workflows via digital commerce platforms.",
      "Market Demand Validation: Direct real-world customer acquisition and feedback loops.",
    ],
    techStack: ["Digital Commerce", "Asset Production", "Etsy Platform", "Vector Design"],
    statusText: "Live Digital Commerce Business",
    icon: ShoppingBag,
  },
  {
    id: "alphatools4u",
    title: "AlphaTools4U — Developer Productivity",
    classification: "DIGITAL PRODUCT",
    categories: ["Digital Products"],
    tagline: "Developer productivity and digital tools storefront on Gumroad.",
    summary:
      "A digital tool and developer workflow business offering pre-built templates, automation scripts, and technical utility packages for engineers and creators.",
    whatWasBuilt:
      "Curated digital repository of developer toolkits, workflow automations, and architectural templates sold directly to technical practitioners.",
    keyFeatures: [
      "Developer Toolkits: Pre-configured starter kits and workflow automation scripts.",
      "Frictionless E-Commerce: Instant checkout, licensing, and update distribution via Gumroad.",
      "Practical Utility: Built to reduce initial project boilerplate and setup times.",
    ],
    techStack: ["Gumroad API", "Developer Tooling", "Automation Scripts", "Digital Distribution"],
    statusText: "Live Digital Commerce Storefront",
    icon: ShoppingBag,
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
    <section id="portfolio" className="py-24 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold text-purple-700 uppercase tracking-widest mb-4">
            Proven Track Record
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-outfit tracking-tight mb-5">
            Real Work. Real Software.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            We don&apos;t build vanity mockups or pitch decks. Explore our actual products, client systems, and live platforms.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  isSelected
                    ? "bg-purple-600 text-white shadow-md shadow-purple-600/20"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900 border border-slate-200/60"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-xl hover:border-purple-300 transition-all duration-300 group"
              >
                <div>
                  {/* Top Bar: Classification Badge & Icon */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                        project.classification === "CLIENT PROJECT"
                          ? "bg-cyan-50 text-cyan-700 border-cyan-200"
                          : project.classification === "CORTEXHIVE PRODUCT"
                          ? "bg-purple-50 text-purple-700 border-purple-200"
                          : "bg-slate-100 text-slate-700 border-slate-200"
                      }`}
                    >
                      {project.classification}
                    </span>

                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-extrabold text-slate-950 font-outfit tracking-tight mb-2 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-purple-700 mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-6">
                    {project.summary}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 mb-6">
                    {project.keyFeatures.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tech & Action */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-4 border-t border-slate-100">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-[10px] font-mono text-slate-600 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-400 font-medium">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-purple-600 hover:text-white text-slate-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-900 transition-colors"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl border border-slate-200 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-6 pr-8">
                <span
                  className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border mb-3 ${
                    activeProject.classification === "CLIENT PROJECT"
                      ? "bg-cyan-50 text-cyan-700 border-cyan-200"
                      : activeProject.classification === "CORTEXHIVE PRODUCT"
                      ? "bg-purple-50 text-purple-700 border-purple-200"
                      : "bg-slate-100 text-slate-700 border-slate-200"
                  }`}
                >
                  {activeProject.classification}
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-outfit tracking-tight mb-1">
                  {activeProject.title}
                </h3>
                <p className="text-sm font-semibold text-purple-600">
                  {activeProject.tagline}
                </p>
              </div>

              {/* Modal Body */}
              <div className="space-y-6 text-sm">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Executive Summary
                  </h4>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {activeProject.summary}
                  </p>
                </div>

                {activeProject.challenge && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      The Challenge
                    </h4>
                    <p className="text-slate-700 leading-relaxed font-medium">
                      {activeProject.challenge}
                    </p>
                  </div>
                )}

                {activeProject.solution && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      The Solution
                    </h4>
                    <p className="text-slate-700 leading-relaxed font-medium">
                      {activeProject.solution}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    What Was Built
                  </h4>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {activeProject.whatWasBuilt}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Key Functionality & Architecture
                  </h4>
                  <ul className="space-y-2">
                    {activeProject.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Technologies Implemented
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                {activeProject.statusText && (
                  <span className="text-xs text-slate-500 font-semibold">
                    {activeProject.statusText}
                  </span>
                )}

                <div className="flex items-center gap-3 ml-auto">
                  {activeProject.url && (
                    <a
                      href={activeProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-sm transition-all"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    onClick={() => {
                      setActiveProject(null);
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors"
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
