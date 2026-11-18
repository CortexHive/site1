import { Metadata } from "next";
import Link from "next/link";
import {
  Layers,
  ArrowRight,
  Users,
  CreditCard,
  Database,
  Lock,
  LayoutDashboard,
  Rocket,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import LeadForm from "@/components/lead-form";

export const metadata: Metadata = {
  title: "SaaS Development Company UK — MVP & Platform Engineering | CortexHive",
  description:
    "Turn your SaaS idea into a working subscription software product. We build multi-user SaaS platforms, MVPs, user dashboards and billing integrations in the UK.",
  keywords: [
    "SaaS development company",
    "SaaS MVP development UK",
    "Custom web application development",
    "Subscription software development UK",
  ],
  alternates: {
    canonical: "https://cortexhive.co.uk/saas-development",
  },
  openGraph: {
    title: "SaaS Development Company UK | CortexHive",
    description:
      "End-to-end SaaS development from initial MVP to scalable subscription platform.",
    url: "https://cortexhive.co.uk/saas-development",
  },
};

const PROBLEMS = [
  {
    title: "Difficulty Turning an Idea Into a Working MVP",
    desc: "Founders and businesses often have deep industry insight but need a reliable development partner to architect and build the actual software product.",
  },
  {
    title: "Complex User Roles & Billing",
    desc: "SaaS platforms require secure user sign-ups, role-based access, subscription management and reliable databases from day one.",
  },
  {
    title: "Unclear Scopes & Runaway Costs",
    desc: "Open-ended development retainers without clear milestone deliverables make budgeting unpredictable for startups and growing businesses.",
  },
];

const FEATURES = [
  {
    icon: Rocket,
    title: "SaaS MVP Design & Development",
    desc: "Focus on the core features needed to validate your product, onboard early customers and launch quickly.",
  },
  {
    icon: Users,
    title: "Multi-User Accounts & Role Portals",
    desc: "Separate views and permissions for customers, team members, administrators and moderators.",
  },
  {
    icon: CreditCard,
    title: "Subscription & Payment Integration",
    desc: "Connect Stripe or payment providers for recurring monthly/annual plans, one-off purchases and automated receipts.",
  },
  {
    icon: LayoutDashboard,
    title: "Interactive User & Admin Dashboards",
    desc: "Clean, responsive interfaces that make complex data and workflows intuitive for your subscribers.",
  },
  {
    icon: Database,
    title: "Scalable Database Architecture",
    desc: "Built on structured relational databases (PostgreSQL / Supabase) designed for data integrity and growth.",
  },
  {
    icon: Lock,
    title: "Full Source Code Ownership",
    desc: "Projects are scoped and quoted individually with full intellectual property handover upon milestone completion.",
  },
];

const FAQS = [
  {
    q: "Have you built and launched your own SaaS products?",
    a: "Yes. CortexHive has developed and operates its own digital products including MarkScheme (an 11+ exam platform with 250+ practice and mock papers), AuraPDF and Rydigo.",
  },
  {
    q: "How much does SaaS development cost?",
    a: "Every SaaS product is scoped and quoted individually based on user roles, core features and third-party integrations. We provide a free consultation and written milestone specification.",
  },
  {
    q: "Who owns the intellectual property and code?",
    a: "You do. Upon final milestone completion and payment, full ownership of your custom application code transfers to you.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://cortexhive.co.uk" },
        { "@type": "ListItem", position: 2, name: "SaaS Development", item: "https://cortexhive.co.uk/saas-development" },
      ],
    },
    {
      "@type": "Service",
      name: "SaaS Development",
      provider: { "@id": "https://cortexhive.co.uk/#organization" },
      areaServed: "United Kingdom",
      description:
        "Custom SaaS application development, MVP engineering, user portals and subscription software for founders and UK businesses.",
    },
  ],
};

export default function SaasDevelopmentPage() {
  return (
    <div className="bg-white min-h-screen text-[#475569] pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs text-[#64748B]">
            <Link href="/" className="hover:text-[#14243A] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#14243A] font-semibold">SaaS Development</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F8FC] border border-[#E2E8F0] text-xs font-bold text-blue-600 uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>SaaS &amp; Digital Product Development UK</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#14243A] tracking-tight leading-[1.1]">
            From SaaS Concept to Working Digital Product.
          </h1>

          <p className="text-base sm:text-xl text-[#475569] max-w-3xl mx-auto leading-relaxed">
            We design, build and launch custom SaaS platforms and MVPs — complete with user authentication, role-based dashboards, databases and subscription billing.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-2">
            <a
              href="#quote-form"
              className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-[#14243A] text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors shadow-xs"
            >
              <span>Scope Your SaaS Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/our-products"
              className="px-7 py-3.5 rounded-xl bg-white hover:bg-[#F5F8FC] border border-slate-300 text-[#14243A] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors"
            >
              <span>View Our Own SaaS Products</span>
            </Link>
          </div>
        </div>

        {/* Problem Statement */}
        <section className="bg-[#F8FAFD] rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">The Challenge</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] mt-1">
              Building a Reliable SaaS Platform Takes More Than a Template
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROBLEMS.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0] space-y-2">
                <AlertCircle className="w-5 h-5 text-blue-600" />
                <h3 className="text-base font-bold text-[#14243A]">{p.title}</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">What We Deliver</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#14243A] mt-1">
              End-to-End SaaS Architecture
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] text-blue-600 flex items-center justify-center shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#14243A]">{f.title}</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Proof of Capability: MarkScheme, AuraPDF, Rydigo */}
        <section className="bg-[#F5F8FC] rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Real SaaS Proof</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] mt-1">
              SaaS Products Developed by CortexHive
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-[#14243A]">MarkScheme</h3>
                <a href="https://www.markscheme.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-[#14243A]">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                11+ examination preparation platform featuring 250+ practice and mock examination papers across reasoning and mathematics categories.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] space-y-2">
              <h3 className="text-base font-bold text-[#14243A]">AuraPDF</h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                PDF and document productivity software product with client-side viewing, digital signatures and redaction tools.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] space-y-2">
              <h3 className="text-base font-bold text-[#14243A]">Rydigo</h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Digital platform for private hire drivers combining community channels and practical driver tools.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] text-center">
            SaaS Development FAQs
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <div key={faq.q} className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0]">
                <h3 className="text-sm sm:text-base font-bold text-[#14243A] mb-1.5">{faq.q}</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div id="quote-form">
          <LeadForm defaultService="SaaS Development" />
        </div>
      </div>
    </div>
  );
}
