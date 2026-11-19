import { Metadata } from "next";
import Link from "next/link";
import {
  Layers,
  ArrowRight,
  Palette,
  ShieldCheck,
  Code2,
  Users,
  Workflow,
  FileText,
  AlertCircle,
} from "lucide-react";
import LeadForm from "@/components/lead-form";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "White-Label Software Solutions UK — Rebrandable Digital Platforms | CortexHive",
  description:
    "Commission rebrandable white-label software, browser-based utilities, client portals and document processing platforms built for UK agencies, consultancies and partner businesses.",
  keywords: [
    "White-label software solutions UK",
    "White-label SaaS development",
    "Browser-based tools development UK",
    "Custom digital solutions UK",
    "Document processing software UK",
  ],
  alternates: {
    canonical: "https://cortexhive.co.uk/white-label-software",
  },
  openGraph: {
    title: "White-Label Software Solutions UK | CortexHive",
    description:
      "Launch branded digital products, portals and browser-based software faster with white-label engineering.",
    url: "https://cortexhive.co.uk/white-label-software",
  },
};

const USE_CASES = [
  {
    title: "Digital & Marketing Agencies",
    desc: "Offer your clients branded reporting portals, AI tools or document utilities under your own agency name without maintaining a large in-house dev team.",
  },
  {
    title: "Consultancies & Training Providers",
    desc: "Deliver client portals, online assessment systems or structured onboarding platforms styled completely in your brand identity.",
  },
  {
    title: "B2B Partners & Service Networks",
    desc: "Provide franchisees, partners or regional operators with dedicated branded software dashboards and everyday operational tools.",
  },
];

const FEATURES = [
  {
    icon: Palette,
    title: "Complete Brand Customisation",
    desc: "Your logo, domain name, colour system, emails and interface copy — built to present seamlessly as your own product.",
  },
  {
    icon: Users,
    title: "Multi-Tenant & Role-Based Access",
    desc: "Isolate data cleanly per client or organisation with dedicated admin, partner and end-user permission tiers.",
  },
  {
    icon: FileText,
    title: "Browser-Based & Document Utilities",
    desc: "Build privacy-conscious client-side tools and PDF/document processing workflows that run smoothly in modern browsers.",
  },
  {
    icon: Workflow,
    title: "API & Webhook Connectivity",
    desc: "Integrate directly with your existing CRM, billing provider (Stripe), email relay or internal databases.",
  },
  {
    icon: Code2,
    title: "Maintainable Modern Architecture",
    desc: "Engineered with Next.js, React, TypeScript and PostgreSQL so your white-label product stays fast and extensible.",
  },
  {
    icon: ShieldCheck,
    title: "Clear Licensing or Full Handover",
    desc: "Agree transparent commercial terms upfront — whether commissioning a bespoke owned platform or tailored white-label deployment.",
  },
];

const FAQS = [
  {
    q: "How are white-label software projects priced?",
    a: "White-label and bespoke digital solutions are scoped and quoted individually based on the features, branding requirements, multi-tenant architecture and integrations needed.",
  },
  {
    q: "Can you adapt your existing product architecture for a white-label use case?",
    a: "Where appropriate, we can draw on proven patterns from our own platforms — such as online assessment portals, document utilities and community/driver tools — to accelerate delivery while tailoring the software to your brand.",
  },
  {
    q: "Do you provide ongoing technical maintenance for white-label platforms?",
    a: "Yes. We offer agreed ongoing maintenance, hosting oversight and feature iteration options so your branded platform stays reliable as your client base grows.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://cortexhive.co.uk" },
        { "@type": "ListItem", position: 2, name: "White-Label Software Solutions", item: "https://cortexhive.co.uk/white-label-software" },
      ],
    },
    {
      "@type": "Service",
      name: "White-Label Software Solutions",
      provider: { "@id": "https://cortexhive.co.uk/#organization" },
      areaServed: "United Kingdom",
      description:
        "White-label software platforms, browser-based tools, client portals and document processing solutions tailored for UK businesses and partner organisations.",
    },
  ],
};

export default function WhiteLabelSoftwarePage() {
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
            <span className="text-[#14243A] font-semibold">White-Label Software Solutions</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F8FAFD] border border-[#E2E8F0] text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-600">
            <Layers className="w-3.5 h-3.5" />
            <span>Custom Digital &amp; White-Label Solutions</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#14243A] tracking-tight leading-[1.1]">
            Launch Branded Digital Software Under Your Own Identity.
          </h1>

          <p className="text-base sm:text-xl text-[#475569] max-w-3xl mx-auto leading-relaxed">
            We develop white-label software, browser-based tools, client portals and document processing solutions tailored for UK agencies, consultancies and partner organisations.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-2">
            <a
              href="#quote-form"
              className="px-7 py-3.5 rounded-lg bg-[#14243A] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors"
            >
              <span>Request a Custom Solution</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.getWhatsAppLink("software")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-lg bg-white hover:bg-[#F8FAFD] border border-slate-300 text-[#14243A] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors"
            >
              <span>Discuss via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Who It Is For */}
        <section className="bg-[#F8FAFD] rounded-2xl p-6 sm:p-10 border border-[#E2E8F0] space-y-8">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-600">Use Cases</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] mt-1">
              Who Commissions White-Label Software?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {USE_CASES.map((uc) => (
              <div key={uc.title} className="bg-white rounded-xl p-6 border border-[#E2E8F0] space-y-2">
                <AlertCircle className="w-5 h-5 text-blue-600" />
                <h3 className="text-base font-bold text-[#14243A]">{uc.title}</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Main Features */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-600">Capabilities</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#14243A] mt-1">
              Built for Brand Consistency &amp; Reliability
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="p-6 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0] space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#E2E8F0] text-blue-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#14243A]">{f.title}</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] text-center">
            White-Label Software FAQs
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <div key={faq.q} className="p-5 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0]">
                <h3 className="text-sm sm:text-base font-bold text-[#14243A] mb-1.5">{faq.q}</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Lead Form */}
        <div id="quote-form">
          <LeadForm defaultService="Custom Software Development" />
        </div>
      </div>
    </div>
  );
}
