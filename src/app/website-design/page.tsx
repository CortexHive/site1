import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Gauge,
  Search,
  Code2,
  ShieldCheck,
  Palette,
} from "lucide-react";
import LeadForm from "@/components/lead-form";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Bespoke Web Platform Design & Development UK | CortexHive",
  description:
    "High-performance website engineering and digital platforms for UK companies, contractors, startups, and SMEs. Built for search visibility and client conversion.",
  keywords: [
    "Website design UK",
    "Web development agency UK",
    "Bespoke business websites",
    "Next.js website development",
    "Conversion rate optimization UK",
  ],
};

const PILLARS = [
  {
    icon: Smartphone,
    title: "100% Mobile & Tablet Responsive",
    desc: "Over 68% of commercial searches happen on smartphones. Every layout is crafted to load smoothly on iOS and Android devices.",
  },
  {
    icon: Gauge,
    title: "High Performance & Fast Loading",
    desc: "Built with modern Next.js and Tailwind CSS with sub-second page loads that keep bounce rates low and Google Core Web Vitals green.",
  },
  {
    icon: Search,
    title: "UK Search Engine Optimisation (SEO)",
    desc: "Clean semantic HTML, structured metadata, local schema, fast sitemaps, and optimized copy to help your business rank on Google Search.",
  },
  {
    icon: Code2,
    title: "Multi-Channel Lead Capture",
    desc: "Native Netlify Forms, direct WhatsApp chat pills, click-to-call buttons, and automated email lead alerts delivered straight to your inbox.",
  },
  {
    icon: Palette,
    title: "Clear Conversion Hierarchy",
    desc: "Thoughtful visual design that guides visitors from their immediate problem to your proof of capability and straightforward call to action.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Clean Code Discipline",
    desc: "Type-safe TypeScript, strict validation, SSL encryption, spam honeypots, and clean architecture without bloated third-party plugin vulnerabilities.",
  },
];

const PACKAGES = [
  {
    name: "Focused Web Platform",
    scope: "Scoped Fixed Milestone",
    tagline: "Ideal for trades, local services, and standalone product launches.",
    popular: false,
    features: [
      "Responsive conversion-focused layout",
      "Executive business overview & services breakdown",
      "Direct WhatsApp and click-to-call integration",
      "Interactive enquiry and lead capture form",
      "Technical on-page SEO & Schema.org tags",
      "Fast milestone delivery in 3–5 business days",
      "100% source code and asset ownership",
    ],
    ctaText: "Scope Focused Platform",
    href: "#quote-form",
  },
  {
    name: "Commercial Web Platform",
    scope: "Milestone Scoped Build",
    tagline: "For established businesses needing dedicated service silos and case studies.",
    popular: true,
    features: [
      "4–8 custom designed responsive pages",
      "Dedicated service & practice area landing architectures",
      "Client case studies & verified work gallery",
      "Comprehensive Google Search Console & XML sitemap",
      "Advanced enquiry capture with lead notification routing",
      "Sub-second edge caching on Cloudflare/Vercel",
      "Analytics & conversion tracking integration",
    ],
    ctaText: "Scope Commercial Platform",
    href: "#quote-form",
  },
  {
    name: "Custom Web Application & Portal",
    scope: "Full-Stack Engineering",
    tagline: "For startups, platforms, member portals, and database-driven web software.",
    popular: false,
    features: [
      "Full-stack Next.js, TypeScript & PostgreSQL",
      "Secure user authentication & client portals",
      "Admin management dashboards & analytics",
      "AI API and third-party webhook integrations",
      "Stripe / GoCardless subscription billing rails",
      "Automated CI/CD deployment & testing pipelines",
      "Ongoing engineering care & SLA support",
    ],
    ctaText: "Discuss Web Application",
    href: "/software-development",
  },
];

export default function WebsiteDesignPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 pt-24 sm:pt-28 pb-16 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-20">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-mono uppercase tracking-[0.16em] text-blue-600 font-semibold">
            WEB ARCHITECTURE &amp; DESIGN
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#090D16] tracking-tight leading-[1.12]">
            Web Platforms Built to Turn Visitors into Clients.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From focused commercial platforms for UK contractors to high-performance web systems for established companies, we engineer web experiences that command authority and generate qualified enquiries.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-2">
            <a
              href="#quote-form"
              className="px-8 py-3.5 rounded-lg bg-[#0F172A] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors shadow-2xs"
            >
              <span>Discuss a Web Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/small-business-websites"
              className="px-8 py-3.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-[#0F172A] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors"
            >
              <span>Commercial &amp; Trade Systems</span>
            </Link>

            <a
              href={SITE_CONFIG.getWhatsAppLink("website")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-[#0F172A] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors"
            >
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>

        {/* 6 Value Pillars Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#090D16]">
              Engineered for Speed, Authority &amp; Conversion
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Every platform is custom-built on modern frameworks with zero bloated page builders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-slate-300 transition-colors space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-[#0F172A] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-base font-bold text-[#090D16]">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scopes Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#090D16]">
              Structured Web Practice Scopes
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Predictable fixed-scope delivery tailored to your commercial stage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {PACKAGES.map((pkg, i) => (
              <div
                key={i}
                className={`rounded-xl p-7 flex flex-col justify-between transition-all ${
                  pkg.popular
                    ? "bg-[#F8FAFC] border-2 border-[#0F172A] shadow-md"
                    : "bg-white border border-slate-200 hover:border-slate-300"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-[#090D16]">
                      {pkg.name}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">
                      {pkg.scope}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                    {pkg.tagline}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={pkg.href}
                  className={`w-full py-3 px-4 rounded-lg text-xs font-semibold text-center transition-colors ${
                    pkg.popular
                      ? "bg-blue-600 hover:bg-[#0F172A] text-white"
                      : "bg-[#0F172A] hover:bg-blue-600 text-white"
                  }`}
                >
                  {pkg.ctaText}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Form */}
        <div id="quote-form" className="pt-6">
          <LeadForm defaultService="Web Platform & Design" />
        </div>
      </div>
    </div>
  );
}
