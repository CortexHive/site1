import { Metadata } from "next";
import Link from "next/link";
import Portfolio from "@/components/portfolio";
import LeadForm from "@/components/lead-form";
import FinalCta from "@/components/final-cta";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Products & Portfolio — MarkScheme, AuraPDF, Rydigo & Client Work | CortexHive",
  description:
    "Explore CortexHive's own digital products (MarkScheme, AuraPDF, Rydigo) alongside verified client and platform projects (Skyview, EV Trade Show).",
  keywords: [
    "CortexHive portfolio",
    "MarkScheme 11+ platform",
    "AuraPDF",
    "Rydigo",
    "Skyview client project",
    "EV Trade Show directory",
  ],
  alternates: {
    canonical: "https://cortexhive.co.uk/our-products",
  },
  openGraph: {
    title: "Our Products & Portfolio | CortexHive UK",
    description:
      "Discover real software products and client websites developed by CortexHive.",
    url: "https://cortexhive.co.uk/our-products",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://cortexhive.co.uk" },
    { "@type": "ListItem", position: 2, name: "Our Products & Portfolio", item: "https://cortexhive.co.uk/our-products" },
  ],
};

export default function OurProductsPage() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10 text-center">
        <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs text-[#64748B] mb-5">
          <Link href="/" className="hover:text-[#14243A] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#14243A] font-semibold">Our Products &amp; Portfolio</span>
        </nav>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F8FC] border border-[#E2E8F0] text-xs font-bold text-blue-600 uppercase tracking-wider mb-4">
          Verified Development Proof
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#14243A] tracking-tight mb-4">
          Our Digital Products &amp; Client Portfolio
        </h1>
        <p className="text-[#475569] text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Explore the software platforms owned and operated by CortexHive alongside client websites and digital directories we have built.
        </p>
      </div>

      {/* Main Portfolio Grid with Filter & Modals */}
      <Portfolio />

      {/* Philosophy Callout */}
      <section className="py-16 bg-[#F8FAFD] border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl border border-[#E2E8F0] p-8 sm:p-10 shadow-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Why Product Experience Matters
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#14243A]">
                Work With a Team That Builds Real Digital Products
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-xl">
                Because we design, build and maintain our own software products (MarkScheme, AuraPDF and Rydigo) alongside client projects like Skyview, we understand usability, performance and practical business requirements first-hand.
              </p>
            </div>
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-[#14243A] text-white font-semibold text-xs sm:text-sm inline-flex items-center gap-2 transition-colors flex-shrink-0 shadow-xs"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <FinalCta />
      <LeadForm />
    </div>
  );
}
