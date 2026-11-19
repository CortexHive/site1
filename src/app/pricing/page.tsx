import { Metadata } from "next";
import Link from "next/link";
import PricingPackages from "@/components/pricing-packages";
import LeadForm from "@/components/lead-form";
import HomeFaq from "@/components/home-faq";
import FinalCta from "@/components/final-cta";
import {
  Check,
  ArrowRight,
  PhoneCall,
  Bot,
  Cpu,
  Layers,
  Code2,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing & Website Packages (£99 / £349 / £699) | CortexHive UK",
  description:
    "Transparent pricing for UK businesses. Compare our Starter (£99), Business (£349) and Growth (£699) website packages alongside custom pricing for AI Receptionists, AI Automation, SaaS and Custom Software.",
  alternates: {
    canonical: "https://cortexhive.co.uk/pricing",
  },
  openGraph: {
    title: "Pricing & Website Packages | CortexHive UK",
    description:
      "Compare Starter (£99), Business (£349) and Growth (£699) website packages and request tailored quotes for AI and custom software.",
    url: "https://cortexhive.co.uk/pricing",
  },
};

const COMPARISON_ROWS = [
  {
    feature: "Starting Build Price (One-Off)",
    starter: "£99",
    business: "£349",
    growth: "£699",
  },
  {
    feature: "Number of Pages",
    starter: "1 Page (Up to 5 Sections)",
    business: "Up to 5 Pages",
    growth: "Up to 8 Pages",
  },
  {
    feature: "Design Approach",
    starter: "Responsive Landing Page",
    business: "Professional Custom Design",
    growth: "Advanced Custom Design",
  },
  {
    feature: "Mobile Optimisation",
    starter: true,
    business: true,
    growth: true,
  },
  {
    feature: "Contact & Key Functionality",
    starter: "Contact Info & Social Links",
    business: "Contact / Enquiry Form & Social Media Integration",
    growth: "Enquiry Forms + One Agreed Advanced Feature or Integration",
  },
  {
    feature: "Basic On-Page SEO",
    starter: "Basic On-Page SEO Structure",
    business: "Basic On-Page SEO",
    growth: "Basic On-Page SEO & Deployment Assistance",
  },
  {
    feature: "Revision Allowance",
    starter: "1 Revision Round",
    business: "Up to 2 Revision Rounds",
    growth: "Up to 3 Revision Rounds",
  },
  {
    feature: "Delivery Expectations (After Content Provided)",
    starter: "Typically a few working days",
    business: "Typically 1 – 2 weeks",
    growth: "Typically 2 – 3 weeks",
  },
  {
    feature: "Hosting & Domain Exclusions",
    starter: "Domain & recurring hosting separate",
    business: "Domain & recurring hosting separate",
    growth: "Domain & recurring hosting separate",
  },
  {
    feature: "Additional Costs (If Requested)",
    starter: "Extra pages, logo design or ongoing care quoted upfront",
    business: "Extra pages, copywriting or ongoing care quoted upfront",
    growth: "Custom integrations or ongoing care quoted upfront",
  },
];

const CUSTOM_SERVICES = [
  {
    title: "AI Receptionist",
    pricing: "Custom pricing",
    icon: PhoneCall,
    href: "/ai-receptionist",
    desc: "24/7 AI call answering, customer information capture, lead qualification and call summaries tailored to your call volume and phone setup.",
  },
  {
    title: "AI Automation",
    pricing: "Custom pricing",
    icon: Bot,
    href: "/ai-automation",
    desc: "Automated enquiry processing, document generation, CRM connections and workflow automation scoped around your existing business tools.",
  },
  {
    title: "Custom AI Agents",
    pricing: "Custom pricing",
    icon: Cpu,
    href: "/ai-agents",
    desc: "Domain-specific AI assistants, customer support bots and intelligent document processing systems trained on your business knowledge.",
  },
  {
    title: "Custom SaaS Development",
    pricing: "Custom pricing",
    icon: Layers,
    href: "/saas-development",
    desc: "Multi-tenant web platforms, user authentication, subscription billing and scalable cloud architecture for new software products.",
  },
  {
    title: "Custom Software Development",
    pricing: "Custom pricing",
    icon: Code2,
    href: "/software-development",
    desc: "Bespoke web applications, customer portals, management dashboards and internal business systems built to your exact specification.",
  },
  {
    title: "White-Label Software Solutions",
    pricing: "Custom pricing",
    icon: Layers,
    href: "/white-label-software",
    desc: "Rebrandable digital platforms, browser-based tools and document processing solutions built for UK agencies and partner businesses.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://cortexhive.co.uk",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Pricing",
      item: "https://cortexhive.co.uk/pricing",
    },
  ],
};

export default function PricingPage() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb & Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 text-center">
        <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs text-[#64748B] mb-5">
          <Link href="/" className="hover:text-[#14243A] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#14243A] font-semibold">Pricing</span>
        </nav>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F8FC] border border-[#E2E8F0] text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
          Transparent Hybrid Pricing
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#14243A] tracking-tight mb-4">
          Simple Website Packages &amp; Custom Project Quotes.
        </h1>
        <p className="text-[#475569] text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Clear starting prices for small business websites alongside individually scoped quotations for AI receptionists, workflow automation and custom software.
        </p>
      </div>

      {/* Website Packages Cards */}
      <PricingPackages />

      {/* Detailed Comparison Table */}
      <section className="py-16 sm:py-24 bg-[#F8FAFD] border-b border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Side-by-Side Comparison
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#14243A] tracking-tight">
              Website Package Specifications
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Compare page allowances, deliverables, revision limits and exclusions across our three website packages.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-subtle">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[640px]">
                <thead>
                  <tr className="border-b border-[#E2E8F0] bg-[#F5F8FC]">
                    <th className="p-4 sm:p-5 font-bold text-[#14243A] w-1/4">
                      Feature / Deliverable
                    </th>
                    <th className="p-4 sm:p-5 font-bold text-[#14243A] text-center w-1/4">
                      Starter Website
                      <span className="block text-blue-600 font-extrabold text-base mt-0.5">
                        From £99
                      </span>
                    </th>
                    <th className="p-4 sm:p-5 font-bold text-[#14243A] text-center w-1/4 bg-blue-50/40 border-x border-[#E2E8F0]">
                      Business Website
                      <span className="block text-blue-600 font-extrabold text-base mt-0.5">
                        From £349
                      </span>
                    </th>
                    <th className="p-4 sm:p-5 font-bold text-[#14243A] text-center w-1/4">
                      Growth Website
                      <span className="block text-blue-600 font-extrabold text-base mt-0.5">
                        From £699
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0]">
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.feature} className="hover:bg-slate-50/70 transition-colors">
                      <td className="p-4 sm:p-5 text-[#14243A] font-semibold">
                        {row.feature}
                      </td>
                      <td className="p-4 sm:p-5 text-center text-[#475569]">
                        {typeof row.starter === "boolean" ? (
                          <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                        ) : (
                          <span>{row.starter}</span>
                        )}
                      </td>
                      <td className="p-4 sm:p-5 text-center text-[#14243A] font-medium bg-blue-50/20 border-x border-[#E2E8F0]">
                        {typeof row.business === "boolean" ? (
                          <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                        ) : (
                          <span>{row.business}</span>
                        )}
                      </td>
                      <td className="p-4 sm:p-5 text-center text-[#475569]">
                        {typeof row.growth === "boolean" ? (
                          <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                        ) : (
                          <span>{row.growth}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Pricing Services (AI & Software) */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Tailored Digital Solutions
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#14243A] tracking-tight">
              AI, Automation &amp; Custom Software Pricing
            </h2>
            <p className="text-xs sm:text-base text-[#475569] mt-2 leading-relaxed">
              Because AI integrations, SaaS products and custom software vary by workflow and technical scope, we provide a free consultation and a clear written quotation before work begins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {CUSTOM_SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] p-6 sm:p-7 flex flex-col justify-between hover:border-blue-300 shadow-subtle transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] text-blue-600 flex items-center justify-center shadow-2xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        {svc.pricing}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#14243A] mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                      {svc.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between gap-2">
                    <Link
                      href={svc.href}
                      className="text-xs font-semibold text-slate-600 hover:text-[#14243A] transition-colors"
                    >
                      Service details
                    </Link>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-[#14243A] transition-colors"
                    >
                      <span>Request Quotation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Required Guidance Callout */}
          <div className="rounded-2xl bg-[#F5F8FC] border-2 border-blue-200 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-[#14243A]">
                  Not sure which package is right for you?
                </h3>
                <p className="text-xs sm:text-base text-[#475569] mt-1">
                  Tell us what you need and we&apos;ll recommend the most suitable solution.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-[#14243A] text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-colors whitespace-nowrap shadow-xs"
            >
              <span>Tell Us What You Need</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <HomeFaq />

      {/* Final CTA */}
      <FinalCta />

      {/* Contact Form */}
      <LeadForm />
    </div>
  );
}
