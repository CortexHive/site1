import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Workflow,
  Target,
  ShieldCheck,
  Zap,
  Users,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About CortexHive — UK Websites, AI & Software Studio",
  description:
    "CortexHive is a UK digital technology agency helping small businesses, tradespeople, startups and growing companies with professional websites, AI automation and custom software.",
  alternates: {
    canonical: "https://cortexhive.co.uk/about",
  },
  openGraph: {
    title: "About CortexHive — UK Websites, AI & Software Agency",
    description:
      "Practical digital solutions under one roof: websites, AI receptionists, workflow automation and custom software.",
    url: "https://cortexhive.co.uk/about",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://cortexhive.co.uk" },
    { "@type": "ListItem", position: 2, name: "About CortexHive", item: "https://cortexhive.co.uk/about" },
  ],
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen text-[#475569] pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#64748B]">
          <Link href="/" className="hover:text-[#14243A] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#14243A] font-semibold">About CortexHive</span>
        </nav>

        {/* Hero Introduction */}
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F8FC] border border-[#E2E8F0] text-xs font-bold text-blue-600 uppercase tracking-wider">
            About CortexHive
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#14243A] tracking-tight leading-[1.1]">
            Technology That Solves Real Business Problems.
          </h1>

          <p className="text-lg sm:text-xl text-[#14243A] font-semibold leading-relaxed">
            CortexHive was founded around a clear purpose: to make modern websites, practical AI automation and custom software accessible to UK businesses of every size.
          </p>

          <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
            From a local tradesperson who needs an affordable website and an AI receptionist to answer calls on site, to an entrepreneur or company building a custom SaaS platform, we deliver reliable digital solutions focused on commercial outcomes.
          </p>
        </div>

        {/* Section 1: Two Customer Groups, One Trusted Partner */}
        <div className="border-t border-[#E2E8F0] pt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              For Small Businesses &amp; Local Services
            </span>
            <h2 className="text-xl font-bold text-[#14243A]">
              Accessible Websites &amp; 24/7 Call Answering
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              We help builders, electricians, plumbers, cleaning companies, handymen and local UK businesses get online professionally — with website packages starting from £99, enquiry forms, WhatsApp integration and AI phone answering.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              For Startups &amp; Growing Organisations
            </span>
            <h2 className="text-xl font-bold text-[#14243A]">
              Custom Software, SaaS &amp; AI Automation
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              We partner with founders and established companies to build custom web applications, SaaS platforms, customer portals, API integrations and intelligent workflow automations tailored to their operations.
            </p>
          </div>
        </div>

        {/* Section 2: What We Deliver */}
        <div className="border-t border-[#E2E8F0] pt-12 space-y-6">
          <h2 className="text-2xl font-extrabold text-[#14243A]">
            Our Core Capabilities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Link href="/website-design" className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] hover:border-blue-300 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] text-blue-600 flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#14243A]">Website Design</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Mobile-friendly websites designed to showcase your services and generate enquiries.
              </p>
            </Link>

            <Link href="/ai-receptionist" className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] hover:border-blue-300 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] text-blue-600 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#14243A]">AI Receptionist</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                24/7 AI call answering that collects caller details and sends instant call summaries.
              </p>
            </Link>

            <Link href="/ai-automation" className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] hover:border-blue-300 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] text-blue-600 flex items-center justify-center">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#14243A]">AI Automation</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Automating enquiry processing, document generation and repetitive admin tasks.
              </p>
            </Link>

            <Link href="/software-development" className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] hover:border-blue-300 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] text-blue-600 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#14243A]">Software &amp; SaaS</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Custom web applications, customer portals, dashboards and SaaS platforms.
              </p>
            </Link>
          </div>
        </div>

        {/* Section 3: Our Delivery Model */}
        <div className="border-t border-[#E2E8F0] pt-12 space-y-4">
          <h2 className="text-2xl font-extrabold text-[#14243A]">
            How We Work
          </h2>
          <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
            CortexHive operates a modern, focused UK delivery model. Rather than layering projects with unnecessary account managers and bloated overheads, you communicate directly with the specialists designing and building your solution.
          </p>
          <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
            Alongside our client work, we develop and operate our own digital products — including{" "}
            <strong className="text-[#14243A]">MarkScheme</strong>,{" "}
            <strong className="text-[#14243A]">AuraPDF</strong> and{" "}
            <strong className="text-[#14243A]">Rydigo</strong> — ensuring that our recommendations are grounded in real software development experience.
          </p>

          <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-[#475569]">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <span><strong className="text-[#14243A]">Clear Scopes &amp; Pricing:</strong> Fixed package starting prices for websites and clear written quotations for custom projects.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <span><strong className="text-[#14243A]">Modern Technology Stack:</strong> Built with Next.js, React, TypeScript, Tailwind CSS and PostgreSQL for speed and reliability.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <span><strong className="text-[#14243A]">Full Handover &amp; Optional Support:</strong> You own your custom project assets upon completion, with optional ongoing hosting and maintenance plans available.</span>
            </li>
          </ul>
        </div>

        {/* Section 4: Core Principles */}
        <div className="border-t border-[#E2E8F0] pt-12 space-y-6">
          <h2 className="text-2xl font-extrabold text-[#14243A]">
            Our Principles
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] space-y-2">
              <h3 className="text-base font-bold text-[#14243A] flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-600" />
                <span>Business Outcomes First</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Technology is only valuable when it helps you attract customers, save time or run your business more effectively.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] space-y-2">
              <h3 className="text-base font-bold text-[#14243A] flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-600" />
                <span>Practical Execution</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                We focus on clean, working digital solutions delivered on clear milestones without unnecessary jargon.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] space-y-2">
              <h3 className="text-base font-bold text-[#14243A] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Honesty &amp; Transparency</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                We explain deliverables, exclusions, hosting arrangements and third-party service costs clearly upfront.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] space-y-2">
              <h3 className="text-base font-bold text-[#14243A] flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" />
                <span>Long-Term Partnership</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                As your business grows, we are here to help you expand your website, automate new workflows or build custom software.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA Card */}
        <div className="border-t border-[#E2E8F0] pt-12">
          <div className="bg-[#F5F8FC] border-2 border-blue-200 rounded-3xl p-8 sm:p-12 text-center space-y-5">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#14243A]">
              Let&apos;s Discuss Your Project
            </h2>
            <p className="text-[#475569] text-sm sm:text-base max-w-xl mx-auto">
              Whether you need a small business website, an AI receptionist or custom software, get in touch for a free consultation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3.5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-[#14243A] text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/our-products"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-[#14243A] font-semibold text-xs sm:text-sm transition-colors"
              >
                <span>View Our Portfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
