import { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  ArrowRight,
  CheckCircle2,
  Sparkles,
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
  title: "Professional Website Design & Web Development UK | CortexHive",
  description:
    "Bespoke website design and development for UK businesses, tradespeople, startups and SMEs. High speed, responsive, SEO-ready websites built to turn visitors into paying customers.",
  keywords: [
    "Website design UK",
    "Web development agency UK",
    "Bespoke business websites",
    "Affordable website design UK",
    "Next.js website development",
    "Conversion rate optimization UK",
    "Small business website designer",
  ],
};

const PILLARS = [
  {
    icon: Smartphone,
    title: "100% Mobile & Tablet Responsive",
    desc: "Over 68% of local UK service searches happen on smartphones. Every layout is crafted to load smoothly on iOS and Android devices.",
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
    name: "Starter One-Page",
    price: "£99",
    period: "one-off build fee",
    tagline: "Ideal for tradespeople, sole traders, and local services.",
    popular: true,
    features: [
      "1-page responsive layout",
      "Business overview & services list",
      "WhatsApp chat integration",
      "Interactive enquiry form",
      "Click-to-call mobile buttons",
      "Basic on-page SEO setup",
      "Delivered in 3–5 days",
    ],
    ctaText: "Explore £99 Package",
    href: "/small-business-websites",
  },
  {
    name: "Professional Multi-Page",
    price: "£500 – £1,500",
    period: "fixed price project",
    tagline: "For established businesses needing detailed service pages and case studies.",
    popular: false,
    features: [
      "4–8 custom designed pages",
      "Dedicated service & location landing pages",
      "Case studies & portfolio gallery",
      "Comprehensive on-page & technical SEO",
      "Advanced Netlify lead forms with file uploads",
      "Blog / insights publishing engine",
      "Analytics & conversion tracking",
    ],
    ctaText: "Request Multi-Page Quote",
    href: "#quote-form",
  },
  {
    name: "Custom Web Application",
    price: "£2,500+",
    period: "custom scope",
    tagline: "For startups, SaaS platforms, portals, and database-driven web software.",
    popular: false,
    features: [
      "Full-stack Next.js, Node & PostgreSQL",
      "User authentication & client portals",
      "Admin management dashboards",
      "AI API and third-party webhook integrations",
      "Stripe / GoCardless subscription billing",
      "Complete deployment pipeline & testing",
      "Ongoing engineering support",
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
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[11px] sm:text-xs font-bold text-purple-700 uppercase tracking-widest shadow-xs">
            <Globe className="w-4 h-4 text-purple-600" />
            <span>Digital Solutions Agency • United Kingdom</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-slate-950 font-outfit tracking-tight leading-[1.12] sm:leading-[1.08]">
            Websites Built to Turn{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
              Visitors into Customers.
            </span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium px-2 sm:px-0">
            From affordable starter websites for tradespeople to high-performance platforms for established UK businesses, we engineer web presences that inspire trust and generate leads.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
            <a
              href="#quote-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-xl active:scale-98 transition-all"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/small-business-websites"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-bold text-xs sm:text-sm transition-all"
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>See £99 Trades Website Offer</span>
            </Link>

            <a
              href={SITE_CONFIG.getWhatsAppLink("quote")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-all"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
              Our Web Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-outfit mt-1">
              Why Our Websites Perform Better
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all space-y-3"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-purple-600 flex items-center justify-center shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-950 font-outfit">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Transparent Options Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
              Clear Options
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-outfit mt-1">
              Transparent Website Packages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {PACKAGES.map((pkg, i) => (
              <div
                key={i}
                className={`p-8 rounded-3xl border flex flex-col justify-between transition-all ${
                  pkg.popular
                    ? "border-2 border-emerald-500 bg-emerald-50/20 shadow-xl relative"
                    : "border-slate-200 bg-white"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-600 text-white font-bold text-[10px] uppercase tracking-wider">
                    Most Popular for Trades
                  </span>
                )}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-950 font-outfit">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">{pkg.tagline}</p>
                  </div>

                  <div className="pt-2 pb-1 border-b border-slate-100">
                    <span className="text-3xl sm:text-4xl font-black font-outfit text-slate-950">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-slate-400 block mt-0.5">{pkg.period}</span>
                  </div>

                  <ul className="space-y-2.5 pt-2">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <Link
                    href={pkg.href}
                    className={`w-full py-3 rounded-full text-xs font-bold inline-flex items-center justify-center gap-2 transition-all ${
                      pkg.popular
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-md"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200"
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Form Section */}
        <div id="quote-form" className="pt-6">
          <LeadForm defaultService="Website Design" />
        </div>
      </div>
    </div>
  );
}
