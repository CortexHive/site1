"use client";

import { motion } from "framer-motion";
import {
  Search,
  Compass,
  Code2,
  CheckCircle2,
  Rocket,
  RefreshCw,
  Cpu,
  Layers,
  Database,
  Cloud,
  LineChart,
  Workflow,
} from "lucide-react";

const LIFECYCLE_STAGES = [
  {
    stage: "01",
    name: "DISCOVER",
    subtitle: "Problem Analysis & Scoping",
    desc: "We analyze the business problem, assess technical feasibility, and define functional requirements before selecting the architecture.",
    icon: Search,
  },
  {
    stage: "02",
    name: "DESIGN",
    subtitle: "Architecture & UX Design",
    desc: "We design clean, intuitive user interfaces in Figma and architect database schemas, API contracts, and data pipelines.",
    icon: Compass,
  },
  {
    stage: "03",
    name: "BUILD",
    subtitle: "Full-Stack Development",
    desc: "We write clean, type-safe code using Next.js and TypeScript, building the database, authentication, backend logic, and user interfaces.",
    icon: Code2,
  },
  {
    stage: "04",
    name: "TEST",
    subtitle: "Rigorous QA & Security",
    desc: "We test user workflows, validate API edge cases, review mobile responsiveness, and ensure data isolation and security.",
    icon: CheckCircle2,
  },
  {
    stage: "05",
    name: "LAUNCH",
    subtitle: "Production Deployment",
    desc: "We deploy the application to optimized cloud environments with automated CI/CD pipelines, SSL encryption, and domain routing.",
    icon: Rocket,
  },
  {
    stage: "06",
    name: "EVOLVE",
    subtitle: "Ongoing Improvement",
    desc: "We review operational performance, monitor real-world user activity, and iterate functionality based on measurable feedback.",
    icon: RefreshCw,
  },
];

const TECH_CATEGORIES = [
  {
    title: "AI & LLM",
    icon: Cpu,
    techs: ["OpenAI API", "Anthropic Claude", "DeepSeek", "LangChain", "Vector Embeddings", "RAG Pipelines"],
  },
  {
    title: "Automation",
    icon: Workflow,
    techs: ["Automated Webhooks", "Cron Jobs", "Email Automation", "Custom NLP Extraction", "Workflow Pipelines"],
  },
  {
    title: "Frontend",
    icon: Layers,
    techs: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: Code2,
    techs: ["Node.js", "Python", "Next.js Server Actions", "FastAPI", "REST APIs"],
  },
  {
    title: "Databases",
    icon: Database,
    techs: ["Supabase", "PostgreSQL", "SQLite", "Prisma ORM", "Firebase Firestore"],
  },
  {
    title: "APIs & Integration",
    icon: Workflow,
    techs: ["Stripe API", "Mailjet / Resend", "Third-Party Webhooks", "REST Endpoints"],
  },
  {
    title: "Cloud & Hosting",
    icon: Cloud,
    techs: ["Vercel", "Netlify", "Cloudflare DNS", "AWS S3"],
  },
  {
    title: "Analytics & Monitoring",
    icon: LineChart,
    techs: ["Custom Event Tracking", "Google Analytics", "Performance Logging", "Error Monitoring"],
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-50/60 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-28">
        {/* PART 1: HOW WE WORK (6 Stages) */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold text-purple-700 uppercase tracking-widest mb-4">
              Development Lifecycle
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-outfit tracking-tight mb-5">
              How We Work
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              We operate an agile, disciplined product delivery process designed to take a software requirement from initial discovery to stable production deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LIFECYCLE_STAGES.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.stage}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-purple-300 shadow-xs hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-widest text-slate-400">
                      {s.stage}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-950 font-outfit mb-1">
                    {s.name}
                  </h3>
                  <div className="text-xs font-bold uppercase tracking-wider text-purple-600 mb-3">
                    {s.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {s.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* PART 2: TECHNOLOGY STACK (Categorised) */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-bold text-cyan-800 uppercase tracking-widest mb-4">
              Proven Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-outfit tracking-tight mb-5">
              Technologies We Actually Use
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              We avoid unnecessary bloat and hype. We build on modern, robust technologies that deliver production stability, security, and developer velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECH_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-slate-300 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-extrabold text-slate-950 font-outfit mb-4">
                      {cat.title}
                    </h3>
                    <ul className="space-y-2">
                      {cat.techs.map((tech) => (
                        <li key={tech} className="text-xs text-slate-600 font-medium flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PART 3: DISTRIBUTED DELIVERY MODEL */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/60 border border-purple-500/30 text-xs font-bold text-purple-300 uppercase tracking-widest mb-4">
              Flexible Resourcing
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-outfit tracking-tight text-white mb-4">
              Our Distributed Delivery Model
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium mb-6">
              CortexHive uses a flexible distributed delivery model, bringing together specialist capabilities across design, development, AI, automation and product engineering according to project requirements.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium mb-8">
              Rather than maintaining bloated agency overheads or pushing junior generalists onto complex technical problems, CortexHive combines hands-on technical product leadership with a trusted network of vetted specialist contractors and engineering resources. Each project receives the exact architectural focus it demands.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-800">
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  Product Leadership
                </div>
                <div className="text-xs text-slate-300 font-medium">
                  Direct engagement with technical engineering leads.
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Targeted Capabilities
                </div>
                <div className="text-xs text-slate-300 font-medium">
                  Specialists assembled specifically for your stack and requirements.
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Zero Agency Bloat
                </div>
                <div className="text-xs text-slate-300 font-medium">
                  100% of your budget goes towards building working product.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
