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
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Services & Digital Solutions UK | CortexHive",
  description:
    "Explore CortexHive services: professional website design, £99 small business starter sites, 24/7 AI receptionist, AI business automation and custom software development.",
  keywords: [
    "Digital solutions agency UK",
    "Website design UK",
    "AI receptionist UK",
    "AI automation UK",
    "Custom software development",
    "Small business web design",
  ],
};

const ALL_SERVICES = [
  {
    id: "website-design",
    number: "01",
    icon: Globe,
    title: "Professional Website Design",
    badge: "Most Requested",
    tagline: "Websites built to turn visitors into paying customers.",
    desc: "Bespoke company websites, conversion landing pages, and full website redesigns optimized for Google search and mobile devices.",
    startingAt: "From £500 (or £99 Starter)",
    href: "/website-design",
    highlights: [
      "Mobile-first responsive design",
      "Sub-second loading speeds (Next.js)",
      "UK SEO structure & meta architecture",
      "WhatsApp & Netlify form lead capture",
    ],
  },
  {
    id: "small-business-websites",
    number: "02",
    icon: Wrench,
    title: "Small Business & Trades Starter Websites",
    badge: "£99 Special Offer",
    tagline: "Your business deserves to be online without high agency fees.",
    desc: "A dedicated 1-page professional website for builders, plumbers, electricians, handymen, and local tradespeople with WhatsApp and direct call buttons.",
    startingAt: "£99 one-off build fee",
    href: "/small-business-websites",
    highlights: [
      "Engineered for your specific trade",
      "One-click WhatsApp & phone buttons",
      "Customer enquiry form",
      "Live in 3–5 business days",
    ],
  },
  {
    id: "ai-receptionist",
    number: "03",
    icon: PhoneCall,
    title: "AI Receptionist & Virtual Call Answering",
    badge: "High ROI",
    tagline: "Never miss another customer enquiry or emergency call.",
    desc: "An intelligent conversational voice assistant that answers incoming calls 24/7, answers business FAQs, qualifies customer enquiries, and texts you the lead.",
    startingAt: "Tailored monthly plans",
    href: "/ai-receptionist",
    highlights: [
      "Natural British English conversational voice",
      "24/7 availability for emergency calls",
      "Instant SMS & email call summaries",
      "Twilio & ElevenLabs integration-ready",
    ],
  },
  {
    id: "ai-automation",
    number: "04",
    icon: Bot,
    title: "AI & Business Automation",
    badge: "Efficiency",
    tagline: "Turn repetitive business processes into intelligent workflows.",
    desc: "Automate manual customer triage, email follow-ups, document extraction, invoice parsing, and CRM updates across your existing business software.",
    startingAt: "From £500 fixed scope",
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
    title: "Custom Software & SaaS MVP Development",
    badge: "Full-Stack",
    tagline: "Turn your software idea into a working digital product.",
    desc: "Full-stack web applications, SaaS platforms, internal management systems, and client portals built for real-world reliability and scalability.",
    startingAt: "From £1,500 – £5,000+",
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
    title: "Digital Product Design & Brand Assets",
    badge: "Creative",
    tagline: "Cohesive visual identity and user interface design.",
    desc: "Complete visual design systems, user experience wireframes, high-converting ad assets, and modern interface design for tech and service companies.",
    startingAt: "From £250",
    href: "/creative-studio",
    highlights: [
      "Modern UI/UX interface systems",
      "Brand identity & logo assets",
      "Marketing banners & social assets",
      "High-converting landing page layouts",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold text-purple-700 uppercase tracking-widest shadow-xs">
            <span>Our Service Portfolio</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-950 font-outfit tracking-tight leading-[1.08]">
            Digital Solutions That Move{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
              Your Business Forward.
            </span>
          </h1>

          <p className="text-lg sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            From affordable starter websites to intelligent voice assistants and custom software, we help UK businesses build their digital presence, streamline operations and grow with confidence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#service-enquiry"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-md hover:shadow-xl transition-all"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={SITE_CONFIG.getWhatsAppLink("quote")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-bold text-sm transition-all"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ALL_SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.id}
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-purple-600 flex items-center justify-center shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 font-bold text-[10px] uppercase tracking-wider">
                        {s.badge}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-mono font-bold text-slate-400 block mb-1">
                        {s.number}
                      </span>
                      <h3 className="text-xl font-extrabold text-slate-950 font-outfit">
                        {s.title}
                      </h3>
                      <p className="text-xs font-semibold text-purple-700 mt-0.5">
                        {s.tagline}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {s.desc}
                    </p>

                    <div className="pt-2 border-t border-slate-200/60">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                        Key Inclusions:
                      </span>
                      <ul className="space-y-1.5">
                        {s.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 flex-shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800">
                      {s.startingAt}
                    </span>
                    <Link
                      href={s.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 hover:text-purple-700 group"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enquiry Form */}
        <div id="service-enquiry" className="pt-6">
          <LeadForm />
        </div>
      </div>
    </div>
  );
}
