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
  ExternalLink,
  Check,
} from "lucide-react";
import PricingPackages from "@/components/pricing-packages";
import LeadForm from "@/components/lead-form";

export const metadata: Metadata = {
  title: "UK Website Design & Development (From £99) | CortexHive",
  description:
    "Affordable, professional website design and development for UK small businesses, tradespeople and growing companies. Starter (£99), Business (£349) and Growth (£699) packages.",
  keywords: [
    "Website design UK",
    "Small business website design UK",
    "Affordable business website design",
    "Website design for tradespeople",
    "Business website development",
  ],
  alternates: {
    canonical: "https://cortexhive.co.uk/website-design",
  },
  openGraph: {
    title: "UK Website Design & Development (From £99) | CortexHive",
    description:
      "Compare Starter (£99), Business (£349) and Growth (£699) website packages built for UK businesses.",
    url: "https://cortexhive.co.uk/website-design",
  },
};

const TARGET_CUSTOMERS = [
  "Builders & Construction Companies",
  "Electricians & Plumbers",
  "Window Cleaners & Cleaning Businesses",
  "Independent Tradespeople & Local Services",
  "Startups & New UK Businesses",
  "Established SMEs & Consultancies",
];

const WEBSITE_SERVICES = [
  {
    icon: Globe,
    title: "Business Websites",
    desc: "Structured multi-page websites that showcase your services clearly and establish credibility with UK customers.",
  },
  {
    icon: Smartphone,
    title: "Landing Pages",
    desc: "Focused, fast-loading one-page websites designed to get small businesses and trades online quickly from £99.",
  },
  {
    icon: Palette,
    title: "Website Redesigns",
    desc: "Modernise slow or outdated sites into clean, mobile-friendly platforms that convert visitors into enquiries.",
  },
  {
    icon: Code2,
    title: "E-Commerce & Custom Web Apps",
    desc: "Online storefronts, interactive quote tools and custom browser-based applications scoped to your requirements.",
  },
  {
    icon: Search,
    title: "On-Page SEO Foundations",
    desc: "Clean headings, unique titles, meta descriptions, XML sitemaps and structured data to support Google Search.",
  },
  {
    icon: Gauge,
    title: "Mobile & Speed Optimisation",
    desc: "Deliberately designed for phones, tablets and desktops so visitors can read, call or message you effortlessly.",
  },
];

const PORTFOLIO_HIGHLIGHTS = [
  {
    name: "Skyview",
    type: "Client Website",
    url: "https://skyview.org.uk/",
    desc: "Structured client web platform designed for programme discovery and applicant enquiry capture.",
  },
  {
    name: "MarkScheme",
    type: "Owned EdTech Platform",
    url: "https://www.markscheme.co.uk/",
    desc: "11+ examination preparation platform delivering 250+ practice and mock examination papers.",
  },
  {
    name: "EV Trade Show",
    type: "Digital Directory Platform",
    url: "https://evtradeshow.com/",
    desc: "Searchable international directory of electric vehicle exhibitions, conferences and industry events.",
  },
];

const PROCESS_STEPS = [
  { step: "1. Discover", desc: "We understand your business, services, target customers and goals." },
  { step: "2. Plan", desc: "We agree the right package (£99, £349, £699 or custom scope), page list and deliverables." },
  { step: "3. Build", desc: "We design, develop and test your website across mobile, tablet and desktop." },
  { step: "4. Launch", desc: "We assist with deployment, verify all contact links and provide agreed support." },
];

const FAQS = [
  {
    q: "What are the starting prices for your website packages?",
    a: "Our Starter one-page landing page starts at £99 (up to 5 content sections), our Business website starts at £349 (up to 5 pages), and our Growth website starts at £699 (up to 8 pages with one agreed advanced feature or integration).",
  },
  {
    q: "What is excluded from the starting package prices?",
    a: "Domain name registration (e.g. .co.uk), recurring cloud hosting, ongoing maintenance plans, paid third-party subscriptions and additional pages or revisions beyond the agreed allowance are quoted separately.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Once we receive your business information and content, Starter websites typically take 3–5 working days, Business websites 1–2 weeks, and Growth websites 2–3 weeks.",
  },
  {
    q: "Can you build a more advanced or custom website?",
    a: "Yes. If you need e-commerce, more than 8 pages, custom integrations or a bespoke web application, request a custom quote and we will prepare a clear written proposal.",
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
      name: "Website Design and Development UK",
      provider: { "@id": "https://cortexhive.co.uk/#organization" },
      areaServed: "United Kingdom",
      description:
        "Website design and development packages for UK small businesses, tradespeople and growing companies starting from £99.",
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#64748B]">
              <Link href="/" className="hover:text-[#14243A] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#14243A] font-semibold">Website Development</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F8FAFD] border border-[#E2E8F0] text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-600">
              <Globe className="w-3.5 h-3.5" />
              <span>Website Design &amp; Development UK</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#14243A] tracking-tight leading-[1.08]">
              Professional Websites Designed to Win Customers Online.
            </h1>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              We build fast, mobile-friendly websites in plain English with transparent pricing — helping UK tradespeople, small businesses and growing companies present their services professionally and generate more enquiries.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <a
                href="#website-packages"
                className="px-6 py-3.5 rounded-lg bg-[#14243A] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors"
              >
                <span>Explore Packages (£99 / £349 / £699)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#quote-form"
                className="px-6 py-3.5 rounded-lg bg-white hover:bg-[#F8FAFD] border border-slate-300 text-[#14243A] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors"
              >
                <span>Get a Website Quote</span>
              </a>
            </div>
          </div>

          {/* Target Customers Panel */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-[#F8FAFD] border border-[#E2E8F0] p-6 sm:p-7 space-y-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-600 block">
                Who We Build Websites For
              </span>
              <h2 className="text-lg font-bold text-[#14243A]">
                Tailored for UK Businesses of Every Size
              </h2>
              <ul className="space-y-2.5 pt-1">
                {TARGET_CUSTOMERS.map((cust) => (
                  <li key={cust} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#14243A] font-medium">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>{cust}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-[#E2E8F0] flex items-center gap-2 text-xs text-[#64748B]">
                <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Clear deliverables • Honest timelines • UK support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Website Services Grid */}
        <section className="space-y-8">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-600">Services</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] mt-1">
              Everything You Need for a Dependable Online Presence
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WEBSITE_SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.title} className="p-6 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0] space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#E2E8F0] text-blue-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#14243A]">{svc.title}</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{svc.desc}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Three Pricing Packages (£99 / £349 / £699) */}
      <div className="mt-16">
        <PricingPackages />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pt-16">
        {/* Development Process */}
        <section className="bg-[#F5F8FC] rounded-2xl p-6 sm:p-10 border border-[#E2E8F0] space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] text-center">
            Our 4-Stage Website Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS_STEPS.map((p) => (
              <div key={p.step} className="bg-white rounded-xl p-5 border border-[#E2E8F0] space-y-2">
                <div className="text-sm font-extrabold text-blue-600">{p.step}</div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Genuine Portfolio Examples */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-600">Genuine Examples</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] mt-1">
                Live Websites &amp; Digital Platforms Built by CortexHive
              </h2>
            </div>
            <Link href="/our-products" className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-[#14243A] inline-flex items-center gap-1.5">
              <span>View Full Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PORTFOLIO_HIGHLIGHTS.map((item) => (
              <div key={item.name} className="p-6 rounded-xl bg-white border border-[#E2E8F0] flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#F5F8FC] text-[#475569] border border-[#E2E8F0]">
                      {item.type}
                    </span>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-[#14243A]" aria-label={`Visit ${item.name}`}>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <h3 className="text-lg font-bold text-[#14243A]">{item.name}</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{item.desc}</p>
                </div>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-blue-600 hover:text-[#14243A] inline-flex items-center gap-1">
                  <span>Visit Live Site</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] text-center">
            Website Development FAQs
          </h2>
          <div className="space-y-3">
            {FAQS.map((f) => (
              <div key={f.q} className="p-5 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0]">
                <h3 className="text-sm sm:text-base font-bold text-[#14243A] mb-1.5">{f.q}</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Enquiry Form */}
        <div id="quote-form">
          <LeadForm defaultService="Business Website (£349)" />
        </div>
      </div>
    </div>
  );
}
