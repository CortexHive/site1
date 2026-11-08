import { Metadata } from "next";
import Portfolio from "@/components/portfolio";
import LeadForm from "@/components/lead-form";
import FinalCta from "@/components/final-cta";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Products & Client Delivery | CortexHive",
  description:
    "Explore CortexHive's internal software products and client projects. We don't just talk about software; we build, deploy, and operate real digital products.",
  keywords: [
    "CortexHive products",
    "AuraPDF",
    "MarkScheme",
    "Rydigo",
    "Skyview",
    "UK software studio portfolio",
  ],
};

export default function OurProductsPage() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen pt-28 pb-16">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F8FC] border border-[#E2E8F0] text-xs font-bold text-blue-700 uppercase tracking-widest mb-4">
          Engineering Proof
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#14243A] tracking-tight mb-4">
          Software We Build &amp; Operate
        </h1>
        <p className="text-[#475569] text-base sm:text-lg max-w-2xl mx-auto font-normal">
          We are not a slide-deck consultancy. We design, code, and deploy our own commercial digital platforms alongside bespoke client software.
        </p>
      </div>

      {/* Main Portfolio Grid with Filter & Modals */}
      <Portfolio />

      {/* Philosophy Callout */}
      <section className="py-16 bg-[#F8FAFD] border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl border border-[#E2E8F0] p-8 sm:p-12 shadow-xs flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Product Studio DNA
              </span>
              <h3 className="text-2xl font-bold text-[#14243A]">
                The Advantage of Working With Product Builders
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-xl">
                Because we build and maintain our own proprietary SaaS platforms (AuraPDF, MarkScheme, Rydigo), we understand actual hosting costs, database scaling, API rate limits, user retention, and security first-hand. You get practical engineering without agency fluff.
              </p>
            </div>
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs inline-flex items-center gap-2 transition-all flex-shrink-0 shadow-sm"
            >
              <span>Build Your Product</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta />

      {/* Lead Form */}
      <LeadForm />
    </div>
  );
}
