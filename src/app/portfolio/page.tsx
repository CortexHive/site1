import { Metadata } from "next";
import Portfolio from "@/components/portfolio";
import LeadForm from "@/components/lead-form";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies — Verified Projects | CortexHive",
  description:
    "Explore CortexHive's portfolio of real digital products, client platforms, AI utilities, and software systems including Rydigoo, MarkScheme, Skyview, EVTradeShow, and AuraPDF.",
  keywords: [
    "CortexHive portfolio",
    "Digital agency case studies UK",
    "Next.js web development portfolio",
    "SaaS product case studies",
    "Real software projects UK",
  ],
};

export default function PortfolioPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold text-purple-700 uppercase tracking-widest">
            Case Studies &amp; Product Proof
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 font-outfit tracking-tight">
            Built, Not Just Promised.
          </h1>
          <p className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed">
            Explore 10 verified software products, client platforms, and digital applications engineered by CortexHive. We solve real operational challenges through clean code and modern design.
          </p>
          <div className="pt-2 flex items-center justify-center gap-4">
            <a
              href="#project-enquiry"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md transition-all"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={SITE_CONFIG.getWhatsAppLink("quote")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-bold text-xs transition-all"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Existing Interactive Real Portfolio Component */}
        <Portfolio />

        {/* Enquiry Form */}
        <div id="project-enquiry" className="pt-8">
          <LeadForm />
        </div>
      </div>
    </div>
  );
}
