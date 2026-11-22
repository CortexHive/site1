import { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Bot,
  Layers,
  PhoneCall,
  Cpu,
  Code2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import LeadForm from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Websites, AI & Custom Software Services | CortexHive UK",
  description:
    "Explore CortexHive digital services: Website Design & Development (from £99), 24/7 AI Receptionist, AI Business Automation, Custom AI Agents, SaaS Development and Custom Software.",
  alternates: {
    canonical: "https://cortexhive.co.uk/services",
  },
  openGraph: {
    title: "Websites, AI & Custom Software Services | CortexHive UK",
    description:
      "Website packages from £99, 24/7 AI phone answering, business automation and custom software development.",
    url: "https://cortexhive.co.uk/services",
  },
};

const ALL_SERVICES = [
  {
    id: "website-design",
    number: "01",
    icon: Globe,
    title: "Website Design & Development",
    badge: "From £99",
    tagline: "Professional, mobile-friendly websites built to generate customer enquiries.",
    desc: "Choose from our Starter (£99), Business (£349) and Growth (£699) website packages or request a custom quotation for larger company sites.",
    pricingText: "Packages from £99",
    href: "/website-design",
    highlights: [
      "Mobile-first responsive design",
      "Enquiry forms & WhatsApp integration",
      "Basic on-page SEO setup",
      "Fast-loading modern pages",
    ],
  },
  {
    id: "ai-receptionist",
    number: "02",
    icon: PhoneCall,
    title: "AI Receptionist",
    badge: "24/7 Voice AI",
    tagline: "Never miss another business opportunity while you're busy.",
    desc: "An AI receptionist that answers incoming calls 24/7, speaks naturally, collects customer information, qualifies leads and sends call summaries.",
    pricingText: "Custom pricing",
    href: "/ai-receptionist",
    highlights: [
      "24/7 AI call answering",
      "Natural British English voice",
      "Customer details & lead qualification",
      "Call summaries & notifications",
    ],
  },
  {
    id: "ai-automation",
    number: "03",
    icon: Bot,
    title: "AI Business Automation",
    badge: "Workflows",
    tagline: "Make your business work smarter and reduce repetitive admin.",
    desc: "Automate incoming enquiry processing, customer replies, document generation, application integrations and routine follow-ups.",
    pricingText: "Custom pricing",
    href: "/ai-automation",
    highlights: [
      "Automated enquiry processing",
      "Document generation & data extraction",
      "Connecting business applications",
      "Automated notifications & follow-ups",
    ],
  },
  {
    id: "ai-agents",
    number: "04",
    icon: Cpu,
    title: "Custom AI Agents",
    badge: "Custom AI",
    tagline: "Intelligent AI assistants trained on your business information.",
    desc: "Deploy custom AI agents for 24/7 customer support, lead qualification, intelligent document processing and internal staff knowledge assistance.",
    pricingText: "Custom pricing",
    href: "/ai-agents",
    highlights: [
      "AI-powered customer support",
      "Intelligent document processing",
      "Private company knowledge assistants",
      "Strict business guardrails",
    ],
  },
  {
    id: "saas-development",
    number: "05",
    icon: Layers,
    title: "SaaS Development",
    badge: "SaaS & MVPs",
    tagline: "Turn your software product idea into a working subscription platform.",
    desc: "End-to-end SaaS MVP and platform development with multi-user accounts, role-based dashboards, relational databases and Stripe subscription billing.",
    pricingText: "Custom pricing",
    href: "/saas-development",
    highlights: [
      "SaaS MVP & platform engineering",
      "Multi-role user authentication",
      "Subscription & billing integration",
      "Scalable cloud database design",
    ],
  },
  {
    id: "software-development",
    number: "06",
    icon: Code2,
    title: "Custom Software Development",
    badge: "Bespoke",
    tagline: "Bespoke web applications and portals built around your workflow.",
    desc: "Custom web applications, customer portals, management dashboards, internal business systems and API integrations scoped to your exact needs.",
    pricingText: "Custom pricing",
    href: "/software-development",
    highlights: [
      "Custom web applications",
      "Customer & staff portals",
      "Management dashboards",
      "API & system integrations",
    ],
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://cortexhive.co.uk" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://cortexhive.co.uk/services" },
  ],
};

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen text-[#475569] pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs text-[#64748B]">
            <Link href="/" className="hover:text-[#14243A] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#14243A] font-semibold">Services</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F8FC] border border-[#E2E8F0] text-xs font-bold uppercase tracking-wider text-blue-600">
            Our Services
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#14243A] tracking-tight leading-[1.1]">
            Websites, AI &amp; Custom Software Built for Your Business.
          </h1>

          <p className="text-base sm:text-xl text-[#475569] max-w-3xl mx-auto leading-relaxed">
            Explore our six core services below — from affordable small business website packages to 24/7 AI call answering, workflow automation and custom software development.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ALL_SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="p-6 sm:p-8 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] flex flex-col justify-between hover:border-blue-300 shadow-subtle transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-white border border-[#E2E8F0] text-blue-600 flex items-center justify-center shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white border border-[#E2E8F0] text-[#14243A]">
                      {s.badge}
                    </span>
                  </div>

                  <h2 className="text-xl font-extrabold text-[#14243A]">
                    {s.title}
                  </h2>

                  <p className="text-xs font-semibold text-blue-600">
                    {s.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {s.desc}
                  </p>

                  <div className="pt-3 space-y-2 border-t border-slate-200/80">
                    {s.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-[#475569]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-200/80 mt-6 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#14243A]">{s.pricingText}</span>
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-[#14243A] transition-colors"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lead Form */}
        <div id="contact" className="pt-4">
          <LeadForm />
        </div>
      </div>
    </div>
  );
}
