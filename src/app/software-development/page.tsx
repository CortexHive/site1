import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Database,
  Lock,
  LayoutDashboard,
  Users,
  Repeat,
  AlertCircle,
} from "lucide-react";
import LeadForm from "@/components/lead-form";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Custom Software Development UK — Web Apps & Portals | CortexHive",
  description:
    "Have an idea? Let's build it. Custom software development, web applications, customer portals, management dashboards and internal business systems in the UK.",
  keywords: [
    "Custom software development UK",
    "Custom web application development",
    "AI software development",
    "Customer portal development UK",
    "Management dashboard software",
  ],
  alternates: {
    canonical: "https://cortexhive.co.uk/software-development",
  },
  openGraph: {
    title: "Custom Software Development UK | CortexHive",
    description:
      "Bespoke web applications, customer portals, management dashboards and internal business systems.",
    url: "https://cortexhive.co.uk/software-development",
  },
};

const PROBLEMS = [
  {
    title: "Outgrowing Spreadsheets & Manual Trackers",
    desc: "Running complex operations across disconnected spreadsheets leads to version conflicts, manual errors and poor visibility.",
  },
  {
    title: "Rigid Off-the-Shelf Software",
    desc: "Generic subscription tools often force you to change how your business works while charging per-seat fees for features you don't use.",
  },
  {
    title: "Need for a Customer or Staff Portal",
    desc: "Clients and staff expect a clean online portal where they can log in, view updates, upload documents and manage requests.",
  },
];

const CAPABILITIES = [
  {
    icon: Code2,
    title: "Custom Web Applications",
    desc: "Tailored browser-based software accessible securely from any desktop, tablet or smartphone without installing desktop programs.",
  },
  {
    icon: Users,
    title: "Customer & Client Portals",
    desc: "Secure login areas where customers can submit enquiries, track orders or project milestones, and download documents.",
  },
  {
    icon: LayoutDashboard,
    title: "Management Dashboards",
    desc: "Centralised operational dashboards giving business owners clear visibility over jobs, enquiries, staff tasks and reporting.",
  },
  {
    icon: Database,
    title: "Internal Business Systems",
    desc: "Custom databases and workflow tools built to replace fragile spreadsheets and streamline daily operations.",
  },
  {
    icon: Repeat,
    title: "API & System Integrations",
    desc: "Connect your custom software with payment systems (Stripe), accounting software, email platforms, CRMs and AI services.",
  },
  {
    icon: Lock,
    title: "AI-Powered Applications",
    desc: "Embed practical AI capabilities — such as document parsing, automated summaries and intelligent search — directly into your software.",
  },
];

const FAQS = [
  {
    q: "How are custom software projects priced?",
    a: "Every custom software project is scoped and quoted individually. After a free discovery consultation, we prepare a clear written specification with fixed milestone deliverables and pricing.",
  },
  {
    q: "Can you integrate our custom software with existing tools?",
    a: "Yes. Where your existing tools provide APIs or webhook connections, we can integrate them directly into your custom application.",
  },
  {
    q: "Do you provide ongoing maintenance after launch?",
    a: "Yes. You own your custom application upon completion, and we offer optional ongoing hosting, security monitoring and feature development support.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://cortexhive.co.uk" },
        { "@type": "ListItem", position: 2, name: "Custom Software Development", item: "https://cortexhive.co.uk/software-development" },
      ],
    },
    {
      "@type": "Service",
      name: "Custom Software Development",
      provider: { "@id": "https://cortexhive.co.uk/#organization" },
      areaServed: "United Kingdom",
      description:
        "Bespoke web applications, customer portals, management dashboards, internal business systems and API integrations.",
    },
  ],
};

export default function SoftwareDevelopmentPage() {
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
            <span className="text-[#14243A] font-semibold">Custom Software Development</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F8FC] border border-[#E2E8F0] text-xs font-bold text-blue-600 uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" />
            <span>Custom Software Development UK</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#14243A] tracking-tight leading-[1.1]">
            Have an Idea? Let&apos;s Build It.
          </h1>

          <p className="text-base sm:text-xl text-[#475569] max-w-3xl mx-auto leading-relaxed">
            We design and develop custom web applications, customer portals, management dashboards and internal business systems tailored to how your organisation works.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-2">
            <a
              href="#project-form"
              className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-[#14243A] text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors shadow-xs"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.getWhatsAppLink("software")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl bg-white hover:bg-[#F5F8FC] border border-slate-300 text-[#14243A] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Problem Statement */}
        <section className="bg-[#F8FAFD] rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">The Problem</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] mt-1">
              When Off-the-Shelf Tools Hold Your Business Back
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
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">What We Build</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#14243A] mt-1">
              Custom Software Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Every project is scoped and quoted individually around your functional requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] hover:border-blue-300 transition-all space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] text-blue-600 flex items-center justify-center shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#14243A]">{cap.title}</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Internal Links to Portfolio & SaaS */}
        <section className="bg-[#F5F8FC] rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Proven Development</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#14243A]">
              Explore Our Live Products &amp; SaaS Development
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              See real software built by CortexHive — including MarkScheme, AuraPDF, Rydigo, Skyview and EV Trade Show.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/our-products"
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-[#14243A] text-white text-xs font-semibold transition-colors"
            >
              View Products &amp; Portfolio &rarr;
            </Link>
            <Link
              href="/saas-development"
              className="px-5 py-3 rounded-xl bg-white hover:bg-blue-50 text-[#14243A] border border-[#E2E8F0] text-xs font-semibold transition-colors"
            >
              SaaS Development &rarr;
            </Link>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] text-center">
            Custom Software FAQs
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

        {/* Lead Form */}
        <div id="project-form">
          <LeadForm defaultService="Custom Software Development" />
        </div>
      </div>
    </div>
  );
}
