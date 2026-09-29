import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Layers,
  Workflow,
  Target,
  ShieldCheck,
  Zap,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About CortexHive — AI & Digital Product Studio",
  description:
    "CortexHive is an AI and digital product studio focused on building practical software, automation and intelligent applications for businesses and ambitious founders.",
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6 space-y-16">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-purple-600 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Hero Introduction */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold text-purple-700 uppercase tracking-widest">
            Company Profile
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 font-outfit tracking-tight leading-[1.1]">
            About CortexHive
          </h1>

          <p className="text-xl sm:text-2xl text-slate-700 font-semibold leading-relaxed">
            CortexHive was built around a simple principle: modern businesses don&apos;t need another abstract AI presentation or superficial technology demo. They need working software that solves real problems.
          </p>

          <p className="text-slate-600 text-base leading-relaxed font-medium">
            CortexHive brings together AI, software development, automation and product thinking to turn business problems and product ideas into practical digital solutions.
          </p>
        </div>

        {/* Section 1: Why CortexHive Exists */}
        <div className="border-t border-slate-200 pt-12 space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-950 font-outfit">
            Why CortexHive Exists
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Most businesses face two extremes when seeking technical capability: traditional IT agencies that move slowly with inflated management layers, or generic AI consultancies that offer high-level theory without shipping working code.
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            CortexHive was formed to provide a credible, product-minded alternative. We don&apos;t just consult on AI or build static brochure sites; we architect and engineer working digital platforms, bespoke software systems, and automated operational pipelines that perform under real business conditions.
          </p>
        </div>

        {/* Section 2: What We Build */}
        <div className="border-t border-slate-200 pt-12 space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-950 font-outfit">
            What We Build
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-outfit">
                AI Automation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Turning repetitive operations into intelligent workflows — from inquiry triage and document parsing to CRM automation and follow-ups.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-outfit">
                Custom AI Applications
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Autonomous agent workflows, enterprise RAG knowledge bases, document intelligence, and customer-facing AI products.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-outfit">
                Software & MVPs
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Complete SaaS platforms, client portals, educational technology systems, and minimum viable products delivered for market validation.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: The Distributed Delivery Model */}
        <div className="border-t border-slate-200 pt-12 space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-950 font-outfit">
            Our Distributed Delivery Model
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            CortexHive uses a flexible distributed delivery model, bringing together specialist capabilities across design, development, AI, automation and product engineering according to project requirements.
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Every engagement is guided by experienced technical product leadership. When a project requires specialized capabilities — such as complex mathematical modeling, high-throughput cloud database tuning, or specialized UI motion design — we assemble vetted, domain-specific engineering contractors and technology partners to execute precisely to specification.
          </p>
          <div className="p-6 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-2 text-xs text-purple-950 font-medium">
            <p className="font-bold text-purple-900">
              Why this benefits our clients:
            </p>
            <ul className="space-y-1.5 list-disc list-inside">
              <li>You work directly with engineers and product architects, not account managers.</li>
              <li>Resources scale flexibly to match your product milestones.</li>
              <li>Zero expenditure on legacy agency overheads or unused bench staff.</li>
            </ul>
          </div>
        </div>

        {/* Section 4: Technology Approach */}
        <div className="border-t border-slate-200 pt-12 space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-950 font-outfit">
            Our Technology Approach
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            We hold a disciplined architectural standard:
          </p>
          <ul className="space-y-3 text-sm text-slate-700 font-medium">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
              <span>
                <strong>Type-Safe & Scalable:</strong> Built on modern TypeScript, Next.js, and relational SQL architectures (PostgreSQL, Supabase, Prisma) for durability.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
              <span>
                <strong>Pragmatic AI Integration:</strong> We utilize leading foundational models (OpenAI, Anthropic Claude, DeepSeek) through strict schemas, vector embeddings, and deterministic guardrails.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
              <span>
                <strong>Ownership & Zero Lock-In:</strong> All source code, data architectures, and deployed assets are delivered cleanly to the client upon milestone completion.
              </span>
            </li>
          </ul>
        </div>

        {/* Section 5: Core Values */}
        <div className="border-t border-slate-200 pt-12 space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-950 font-outfit">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-base font-bold text-slate-900 font-outfit flex items-center gap-2">
                <Target className="w-4 h-4 text-purple-600" />
                <span>Build What Works</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                We measure success by software adoption, user engagement, and operational efficiency, never by hype or empty metrics.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-slate-900 font-outfit flex items-center gap-2">
                <Zap className="w-4 h-4 text-purple-600" />
                <span>High Velocity</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                We compress standard multi-month development timelines into focused weekly deliverables using modern tools.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-slate-900 font-outfit flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-purple-600" />
                <span>Factual Integrity</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                We maintain absolute transparency regarding what is built, what is planned, and what is technologically feasible.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-slate-900 font-outfit flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-600" />
                <span>Long-Term Product Partnership</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                We don&apos;t abandon codebases after launch. We work with our partners to monitor and evolve their products over time.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA Card */}
        <div className="border-t border-slate-200 pt-12">
          <div className="bg-purple-600 rounded-3xl p-8 sm:p-12 text-white text-center space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-outfit">
              Ready to Build Your Product?
            </h2>
            <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto font-medium">
              Tell us what you are trying to build, automate, or improve. We will review your technical requirements and respond with a practical project scope.
            </p>
            <div>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-purple-700 hover:bg-slate-50 font-bold text-sm shadow-md transition-all hover:scale-102"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
