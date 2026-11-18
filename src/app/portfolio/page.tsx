import { Metadata } from "next";
import Link from "next/link";
import Portfolio from "@/components/portfolio";
import LeadForm from "@/components/lead-form";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies — Real Products & Client Work | CortexHive",
  description:
    "Explore CortexHive's portfolio of digital products and client projects including MarkScheme, AuraPDF, Rydigo, Skyview and EV Trade Show.",
  alternates: {
    canonical: "https://cortexhive.co.uk/portfolio",
  },
  openGraph: {
    title: "Portfolio & Case Studies | CortexHive UK",
    description:
      "Real digital products and client websites developed by CortexHive.",
    url: "https://cortexhive.co.uk/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="bg-white min-h-screen text-[#475569] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs text-[#64748B]">
            <Link href="/" className="hover:text-[#14243A] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#14243A] font-semibold">Portfolio</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F8FC] border border-[#E2E8F0] text-xs font-bold text-blue-600 uppercase tracking-wider">
            Case Studies &amp; Product Proof
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#14243A] tracking-tight">
            Built, Not Just Promised.
          </h1>
          <p className="text-sm sm:text-lg text-[#475569] leading-relaxed">
            Explore our owned digital products (MarkScheme, AuraPDF and Rydigo) alongside client and platform work (Skyview and EV Trade Show).
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-[#14243A] text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={SITE_CONFIG.getWhatsAppLink("consultation")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-[#F5F8FC] border border-slate-300 text-[#14243A] font-semibold text-xs sm:text-sm transition-colors"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Portfolio />
      </div>

      <LeadForm />
    </div>
  );
}
