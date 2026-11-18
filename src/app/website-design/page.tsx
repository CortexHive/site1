import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Smartphone,
  Gauge,
  Search,
  Code2,
  ShieldCheck,
  Palette,
  Globe,
  AlertCircle,
} from "lucide-react";
import LeadForm from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Website Design & Development Agency UK | CortexHive",
  description:
    "Professional website design and development for UK small businesses, tradespeople, startups and established companies. Mobile-first websites starting from £99.",
  keywords: [
    "Website design UK",
    "Business website development",
    "Affordable website design for small businesses",
    "Website designers for builders",
    "Website design for electricians",
    "Website design for plumbers",
  ],
  alternates: {
    canonical: "https://cortexhive.co.uk/website-design",
  },
  openGraph: {
    title: "Website Design & Development Agency UK | CortexHive",
    description:
      "Mobile-first, fast-loading business websites designed to attract customers and generate enquiries across the UK.",
    url: "https://cortexhive.co.uk/website-design",
  },
};

const PROBLEMS = [
  {
    title: "Outdated or Non-Existent Website",
    desc: "Potential customers search online before calling. Without a credible website, enquiries go straight to competitors.",
  },
  {
    title: "Poor Mobile Experience",
    desc: "Most local searches happen on smartphones. Slow, clunky pages with tiny text cause visitors to leave within seconds.",
  },
  {
    title: "No Clear Path to Enquire",
    desc: "Websites that hide contact details or lack simple enquiry forms and WhatsApp links fail to turn visitors into paying customers.",
  },
];

const BENEFITS_AND_FEATURES = [
  {
    icon: Smartphone,
    title: "Mobile-First Responsive Layouts",
    desc: "Every page is designed to look sharp and work effortlessly across mobile phones, tablets and desktop computers.",
  },
  {
    icon: Gauge,
    title: "Fast-Loading Performance",
    desc: "Built using clean, modern web technology for quick page loads and smooth browsing on mobile connections.",
  },
  {
    icon: Search,
    title: "UK On-Page SEO Foundations",
    desc: "Structured headings, page titles, meta descriptions, clean URLs and XML sitemaps to support Google Search visibility.",
  },
  {
    icon: Code2,
    title: "Enquiry Forms & WhatsApp Integration",
    desc: "Direct enquiry forms, click-to-call phone links and optional WhatsApp chat buttons so customers can reach you easily.",
  },
  {
    icon: Palette,
    title: "Professional Brand Presentation",
    desc: "Clean typography, structured service descriptions and modern layouts that establish immediate trust.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Ownership & Support",
    desc: "Clear package scopes, upfront revision allowances and optional ongoing hosting and maintenance plans.",
  },
];

const USE_CASES = [
  {
    group: "Trades & Home Services",
    examples: "Builders, electricians, plumbers, window cleaners, handymen, roofers and cleaning companies needing local enquiries.",
    link: "/small-business-websites",
    linkLabel: "Explore Small Business Websites",
  },
  {
    group: "Local & Professional Businesses",
    examples: "Salons, clinics, restaurants, consultants and service companies needing multi-page service showcases and booking links.",
    link: "/pricing",
    linkLabel: "Compare £99 / £349 / £699 Packages",
  },
  {
    group: "Startups & Growing Companies",
    examples: "Organisations launching new products or requiring custom web platforms integrated with AI or software portals.",
    link: "/software-development",
    linkLabel: "Explore Custom Web Applications",
  },
];

const PROCESS_STEPS = [
  { step: "1. Discover", desc: "We review your business services, target customers and branding requirements." },
  { step: "2. Plan", desc: "We confirm the right website package (£99, £349, £699 or custom scope) and page structure." },
  { step: "3. Build", desc: "We design and build your mobile-friendly website and share a preview for your feedback." },
  { step: "4. Launch", desc: "We connect your domain, test all enquiry forms and publish your new website live." },
];

const FAQS = [
  {
    q: "How much does a business website cost?",
    a: "Our Starter Website is £99 (1 page), our Business Website is £349 (up to 5 pages), and our Growth Website is £699 (up to 10 pages). These are starting build prices. Domain registration and recurring hosting are separate.",
  },
  {
    q: "Will my website work properly on mobile phones?",
    a: "Yes. Every website we build is mobile-first and tested across smartphone, tablet and desktop screen sizes.",
  },
  {
    q: "How many revisions are included?",
    a: "The Starter Website includes 1 revision round, the Business Website includes up to 2 revision rounds, and the Growth Website includes up to 3 revision rounds before launch.",
  },
  {
    q: "Can I add an AI Receptionist or automation later?",
    a: "Yes. You can start with a website and add 24/7 AI call answering or workflow automation whenever your business is ready.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://cortexhive.co.uk" },
        { "@type": "ListItem", position: 2, name: "Website Design & Development", item: "https://cortexhive.co.uk/website-design" },
      ],
    },
    {
      "@type": "Service",
      name: "Website Design and Development",
      provider: { "@id": "https://cortexhive.co.uk/#organization" },
      areaServed: "United Kingdom",
      description:
        "Professional mobile-friendly website design and development for UK small businesses, tradespeople and growing companies.",
    },
  ],
};

export default function WebsiteDesignPage() {
  return (
    <div className="bg-white min-h-screen text-[#475569] pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Breadcrumb & Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#64748B]">
              <Link href="/" className="hover:text-[#14243A] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#14243A] font-semibold">Website Design &amp; Development</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F8FC] border border-[#E2E8F0] text-xs font-bold uppercase tracking-wider text-blue-600">
              <Globe className="w-3.5 h-3.5" />
              <span>Website Design &amp; Development UK</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#14243A] tracking-tight leading-[1.1]">
              Professional Websites Built to Turn Visitors Into Enquiries.
            </h1>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Whether you need an affordable £99 starter website for your trade business or a multi-page company platform, we design fast, mobile-friendly websites that present your services clearly and make it easy for customers to contact you.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#quote-form"
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-[#14243A] text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <span>Get a Free Website Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/pricing"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-[#F5F8FC] border border-slate-300 text-[#14243A] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors"
              >
                <span>Compare Packages (£99 / £349 / £699)</span>
              </Link>
            </div>
          </div>

          {/* Visual Website Architecture Preview */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] p-5 sm:p-6 shadow-subtle space-y-4">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
                <span className="text-xs font-bold text-[#14243A]">Website Conversion Blueprint</span>
                <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Mobile-First
                </span>
              </div>
              <div className="space-y-2.5">
                {[
                  { title: "Clear Value Proposition Hero", desc: "Immediately shows what you do, where you work & how to enquire" },
                  { title: "Structured Services Breakdown", desc: "Dedicated sections or pages for each service you offer" },
                  { title: "Instant Contact & WhatsApp", desc: "Click-to-call, WhatsApp chat & direct email enquiry forms" },
                  { title: "On-Page SEO Structure", desc: "Clean headings, meta tags & sitemap ready for Google Search" },
                ].map((block) => (
                  <div key={block.title} className="p-3.5 rounded-xl bg-white border border-[#E2E8F0]">
                    <div className="text-xs font-bold text-[#14243A]">{block.title}</div>
                    <div className="text-[11px] text-[#64748B] mt-0.5">{block.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Problem Statement */}
        <section className="bg-[#F8FAFD] rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">The Problem</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] mt-1">
              Why Many Small Business Websites Fail to Generate Enquiries
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROBLEMS.map((prob) => (
              <div key={prob.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0] space-y-2">
                <AlertCircle className="w-5 h-5 text-blue-600" />
                <h3 className="text-base font-bold text-[#14243A]">{prob.title}</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{prob.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits & Features */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Benefits &amp; Features</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#14243A] mt-1">
              Everything Your Business Website Needs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS_AND_FEATURES.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] text-blue-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#14243A]">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Realistic Use Cases & Internal Links */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Who We Help</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] mt-1">
              Website Solutions for Every Stage of Business
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {USE_CASES.map((uc) => (
              <div key={uc.group} className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-subtle flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#14243A] mb-2">{uc.group}</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{uc.examples}</p>
                </div>
                <Link href={uc.link} className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-[#14243A]">
                  <span>{uc.linkLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* 4-Step Process */}
        <section className="bg-[#F5F8FC] rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] text-center">
            How We Build Your Website
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS_STEPS.map((p) => (
              <div key={p.step} className="bg-white rounded-2xl p-5 border border-[#E2E8F0] space-y-2">
                <div className="text-sm font-extrabold text-blue-600">{p.step}</div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] text-center">
            Website Design FAQs
          </h2>
          <div className="space-y-3">
            {FAQS.map((f) => (
              <div key={f.q} className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0]">
                <h3 className="text-sm sm:text-base font-bold text-[#14243A] mb-1.5">{f.q}</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Form */}
        <div id="quote-form">
          <LeadForm defaultService="Business Website (£349)" />
        </div>
      </div>
    </div>
  );
}
