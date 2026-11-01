import { Metadata } from "next";
import Link from "next/link";
import {
  Layers,
  ArrowRight,
  Code2,
  Database,
  Lock,
  LayoutDashboard,
  Users,
  Repeat,
} from "lucide-react";
import LeadForm from "@/components/lead-form";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Custom Software Development & SaaS MVP Engineering UK | CortexHive",
  description:
    "We build custom web applications, SaaS MVPs, client portals, admin dashboards and database-driven software for UK businesses and ambitious founders.",
  keywords: [
    "Custom software development UK",
    "SaaS MVP development",
    "Web application development agency",
    "Client portal software",
    "Admin dashboard development",
    "Database driven web applications",
    "Next.js full stack development",
  ],
};

const CAPABILITIES = [
  {
    icon: Layers,
    title: "Full-Stack SaaS Products & MVPs",
    desc: "From initial concept architecture to launch-ready SaaS applications with subscription billing, user management, and scalable cloud infrastructure.",
  },
  {
    icon: LayoutDashboard,
    title: "Internal Admin Dashboards & Ops Portals",
    desc: "Bespoke operational dashboards that give business owners and management real-time visibility and control over team operations, jobs, and financial metrics.",
  },
  {
    icon: Users,
    title: "Client & Customer Self-Service Portals",
    desc: "Secure web portals where your clients can submit requests, track project milestones, download invoices, and access reports 24/7.",
  },
  {
    icon: Database,
    title: "Database-Driven Business Systems",
    desc: "Engineered with PostgreSQL, Prisma ORM, and Supabase for high integrity, reliable backups, multi-tenant isolation, and lightning-fast queries.",
  },
  {
    icon: Repeat,
    title: "Third-Party API & Webhook Integrations",
    desc: "Seamless connectivity with Stripe, Xero, QuickBooks, Twilio, WhatsApp Cloud API, Slack, Google Workspace, and proprietary enterprise endpoints.",
  },
  {
    icon: Lock,
    title: "Security, Authentication & Role Access (RBAC)",
    desc: "Enterprise-grade authentication schemas, fine-grained role-based permissions, automated session management, and encrypted data storage.",
  },
];

const CASE_STUDIES = [
  {
    title: "Rydigoo — UK Driver Platform & AI Utility",
    tagline: "Social & Operational Toolkit for Private Hire Drivers",
    desc: "Full-stack web application featuring real-time community communication, automated dispute letter generation, and credential verification.",
  },
  {
    title: "MarkScheme — 11+ EdTech Assessment SaaS",
    tagline: "Automated Mock Examination & Scoring Engine",
    desc: "Scalable EdTech platform delivering 250+ timed examination papers, auto-marking algorithms, performance analytics, and parent dashboards.",
  },
  {
    title: "AuraPDF — Offline-First Document Software",
    tagline: "Private Client-Side PDF Productivity Utility",
    desc: "Zero-server document processing application allowing secure PDF manipulation, digital signatures, and redactions entirely within the browser.",
  },
];

export default function SoftwareDevelopmentPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold text-purple-700 uppercase tracking-widest shadow-xs">
            <Code2 className="w-4 h-4 text-purple-600" />
            <span>Product Engineering • United Kingdom</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-950 font-outfit tracking-tight leading-[1.08]">
            Software Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
              Real-World Use.
            </span>
          </h1>

          <p className="text-lg sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            We engineer custom web applications, SaaS platforms, internal business management systems and client portals that solve genuine business problems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#project-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-md hover:shadow-xl transition-all"
            >
              <span>Discuss Your Software Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={SITE_CONFIG.getWhatsAppLink("software")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-bold text-sm transition-all"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
              Engineering Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-outfit mt-1">
              What We Build
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              From lean initial MVPs to scalable production platforms, we architect software with modern, reliable stacks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-purple-600 flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-slate-950 font-outfit">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Real Proof of Delivery Teaser */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Proven Delivery
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-outfit">
              Real Software in Production
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              We don&apos;t just build prototypes; we ship production platforms with active users and rigorous engineering standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
                <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider block">
                  {cs.tagline}
                </span>
                <h4 className="text-lg font-bold text-white font-outfit">
                  {cs.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {cs.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300"
            >
              <span>Explore All 10 Verified Portfolio Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Tech Stack Banner */}
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Our Core Technology Stack
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              "Next.js 14",
              "React 18",
              "TypeScript",
              "Node.js",
              "Python",
              "PostgreSQL",
              "Prisma ORM",
              "Tailwind CSS",
              "Docker",
              "Netlify & AWS",
              "Stripe API",
              "Twilio",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Lead Form */}
        <div id="project-form" className="pt-6">
          <LeadForm defaultService="Software Development" />
        </div>
      </div>
    </div>
  );
}
