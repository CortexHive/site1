import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Phone,
  Wrench,
  Hammer,
  Paintbrush,
  Building,
  Sparkles,
} from "lucide-react";
import PricingPackages from "@/components/pricing-packages";
import LeadForm from "@/components/lead-form";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Affordable Small Business & Trades Websites (From £99) | CortexHive UK",
  description:
    "Affordable website design for UK small businesses, builders, plumbers, electricians, window cleaners, handymen and local service providers. Packages starting from £99.",
  keywords: [
    "Affordable website design for small businesses",
    "Website designers for builders",
    "Website design for electricians",
    "Website design for plumbers",
    "Small business website UK",
    "£99 website UK",
  ],
  alternates: {
    canonical: "https://cortexhive.co.uk/small-business-websites",
  },
  openGraph: {
    title: "Affordable Small Business & Trades Websites (From £99) | CortexHive UK",
    description:
      "Get a professional, mobile-friendly website without the expensive agency price tag. Packages from £99.",
    url: "https://cortexhive.co.uk/small-business-websites",
  },
};

const TRADES = [
  { name: "Builders & Construction", icon: Building },
  { name: "Plumbers & Heating", icon: Wrench },
  { name: "Electricians", icon: Zap },
  { name: "Window & Commercial Cleaning", icon: Sparkles },
  { name: "Handymen & Maintenance", icon: Hammer },
  { name: "Painters, Decorators & Roofers", icon: Paintbrush },
];

const FAQS = [
  {
    q: "What is included in the £99 Starter Website?",
    a: "The £99 Starter Website includes a professional 1-page mobile-friendly website with your business introduction, services section, contact details, enquiry form, WhatsApp integration, social media links, basic on-page SEO and 1 round of design revisions.",
  },
  {
    q: "Are domain names and hosting included in the £99 price?",
    a: "No. The £99, £349 and £699 prices are one-off build starting prices. Domain registration (e.g. .co.uk) and recurring website hosting are separate costs that are explained clearly before we start.",
  },
  {
    q: "What if I need more than 1 page?",
    a: "You can choose our Business Website package (£349 for up to 5 pages) or Growth Website package (£699 for up to 8 pages), or request a custom quotation for specific requirements.",
  },
  {
    q: "Can I add an AI Receptionist to answer my calls while I'm working?",
    a: "Yes. Many tradespeople pair their website with our 24/7 AI Receptionist so incoming customer calls are answered and qualified even when you are on a job site.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://cortexhive.co.uk" },
    { "@type": "ListItem", position: 2, name: "Small Business Websites", item: "https://cortexhive.co.uk/small-business-websites" },
  ],
};

export default function SmallBusinessWebsitesPage() {
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
            <span className="text-[#14243A] font-semibold">Small Business Websites</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold uppercase tracking-wider text-emerald-800">
            Professional Starter Website — From £99
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#14243A] tracking-tight leading-[1.1]">
            Your Business Deserves to Be Online.
          </h1>

          <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
            Get a professional, mobile-friendly online presence without the expensive agency price tag. Designed for UK builders, plumbers, electricians, cleaning companies, handymen and local businesses.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-2">
            <a
              href="#order-form"
              className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-[#14243A] text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors shadow-xs"
            >
              <span>Request Your Website</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.getWhatsAppLink("starter-99")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl bg-white hover:bg-[#F5F8FC] border border-slate-300 text-[#14243A] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Us ({SITE_CONFIG.phoneDisplay})</span>
            </a>
          </div>
        </div>

        {/* Who We Help */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#14243A]">
              Built for UK Tradespeople &amp; Small Businesses
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1">
              Customers check online before booking a tradesperson or local service. Make sure your business looks credible on every phone and computer.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {TRADES.map((trade) => {
              const Icon = trade.icon;
              return (
                <div
                  key={trade.name}
                  className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] text-center flex flex-col items-center justify-center gap-2.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] text-blue-600 flex items-center justify-center shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#14243A] leading-tight">
                    {trade.name}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Pricing Cards Section (£99 / £349 / £699) */}
      <div className="mt-12">
        <PricingPackages />
      </div>

      {/* FAQs & Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pt-16">
        <section className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] text-center">
            Small Business Website FAQs
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

        <div id="order-form">
          <LeadForm defaultService="Starter Website (£99)" />
        </div>
      </div>
    </div>
  );
}
