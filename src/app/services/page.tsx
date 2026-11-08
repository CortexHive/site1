import { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Bot,
  Layers,
  PhoneCall,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Wrench,
} from "lucide-react";
import LeadForm from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Engineering Services & Practice Areas | CortexHive",
  description:
    "Explore CortexHive practice areas: bespoke web platforms, autonomous AI voice receptionists, workflow automation, and custom software engineering.",
  keywords: [
    "software engineering studio UK",
    "web platform development UK",
    "AI receptionist UK",
    "AI automation UK",
    "custom software development",
  ],
};

const ALL_SERVICES = [
  {
    id: "website-design",
    number: "01",
    icon: Globe,
    title: "Bespoke Web Platforms",
    badge: "Architecture",
    tagline: "Web platforms engineered for authority and measurable client acquisition.",
    desc: "Bespoke corporate websites, high-converting landing architectures, and platform redesigns optimized for Google search and mobile devices.",
    scope: "Fixed Milestone Scope",
    href: "/website-design",
    highlights: [
      "Mobile-first responsive architecture",
      "Sub-second loading speeds (Next.js 14)",
      "UK SEO structure & Schema.org graph",
      "WhatsApp & Netlify form lead capture",
    ],
  },
  {
    id: "small-business-websites",
    number: "02",
    icon: Wrench,
    title: "Commercial & Trade Web Systems",
    badge: "Turnkey",
    tagline: "Establish an authentic digital presence without slow agency bureaucracy.",
    desc: "A dedicated professional web platform for builders, plumbers, electricians, handymen, and commercial service contractors with direct communication integrations.",
    scope: "Rapid 3-5 Day Delivery",
    href: "/small-business-websites",
    highlights: [
      "Engineered for your specific trade",
      "One-click WhatsApp & phone buttons",
      "Interactive customer enquiry form",
      "Local Google Search optimization",
    ],
  },
  {
    id: "ai-receptionist",
    number: "03",
    icon: PhoneCall,
    title: "Autonomous Voice Receptionists",
    badge: "24/7 Voice AI",
    tagline: "Never miss another customer enquiry or urgent business call.",
    desc: "An intelligent conversational voice assistant that answers incoming calls 24/7, answers business FAQs, qualifies customer enquiries, and texts you the lead.",
    scope: "Tailored Telephony Integration",
    href: "/ai-receptionist",
    highlights: [
      "Natural British English conversational voice",
      "24/7 availability for emergency calls",
      "Instant SMS, WhatsApp & CRM summaries",
      "Seamless call forwarding on existing UK lines",
    ],
  },
  {
    id: "ai-automation",
    number: "04",
    icon: Bot,
    title: "AI & Workflow Automation",
    badge: "Operations",
    tagline: "Turn repetitive business processes into intelligent workflows.",
    desc: "Automate manual customer triage, email follow-ups, document extraction, invoice parsing, and CRM updates across your existing business software.",
    scope: "Workflow Engineering",
    href: "/ai-automation",
    highlights: [
      "Inbound enquiry auto-triage",
      "Document data extraction (PDF / Invoices)",
      "CRM & spreadsheet synchronization",
      "Private internal knowledge bases (RAG)",
    ],
  },
  {
    id: "software-development",
    number: "05",
    icon: Layers,
    title: "Custom Software & SaaS MVPs",
    badge: "Full-Stack",
    tagline: "Turn your software requirements into a working digital product.",
    desc: "Full-stack web applications, SaaS platforms, internal management systems, and client portals built for real-world reliability and scalability.",
    scope: "Milestone Engineering",
    href: "/software-development",
    highlights: [
      "TypeScript, Next.js, & PostgreSQL",
      "Client portals & admin dashboards",
      "Stripe / payment gateway integration",
      "Strict data privacy & clean code",
    ],
  },
  {
    id: "creative-studio",
    number: "06",
    icon: Sparkles,
    title: "UI/UX & Interface Design Systems",
    badge: "Design",
    tagline: "Cohesive visual identity and user interface architecture.",
    desc: "Complete visual design systems, user experience wireframes, high-converting digital assets, and modern interface design for tech and service companies.",
    scope: "Design System Delivery",
    href: "/creative-studio",
    highlights: [
      "Modern UI/UX interface systems",
      "Brand identity & logo assets",
      "High-converting landing page layouts",
      "Responsive interactive prototypes",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-mono uppercase tracking-[0.16em] text-blue-600 font-semibold">
            ENGINEERING CAPABILITIES
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#090D16] tracking-tight leading-[1.1]">
            Digital Solutions That Solve Real Business Problems.
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From establishing a commanding web platform to automating manual operations with AI voice agents and building custom SaaS software, explore our practice areas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALL_SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="p-8 rounded-xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400 font-semibold">
                      {s.number}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                      {s.badge}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-[#0F172A] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>

                  <h3 className="text-xl font-bold text-[#090D16]">
                    {s.title}
                  </h3>

                  <p className="text-xs font-semibold text-blue-600">
                    {s.tagline}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>

                  <div className="pt-2 space-y-2 border-t border-slate-200/80">
                    {s.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200/80 mt-6 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500 font-medium">{s.scope}</span>
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F172A] hover:text-blue-600 transition-colors"
                  >
                    <span>View details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lead Form */}
        <div id="contact" className="pt-6">
          <LeadForm />
        </div>
      </div>
    </div>
  );
}
