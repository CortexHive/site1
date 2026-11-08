import { Metadata } from "next";
import PricingPackages from "@/components/pricing-packages";
import LeadForm from "@/components/lead-form";
import HomeFaq from "@/components/home-faq";
import FinalCta from "@/components/final-cta";
import { Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Engagement Models & Delivery Scope | CortexHive",
  description:
    "Explore how CortexHive structures web platform, AI automation, and custom software engagements with fixed milestone scopes and transparent deliverables.",
  keywords: [
    "CortexHive engagement models",
    "software scoping UK",
    "web development delivery scope",
    "custom AI engineering UK",
  ],
};

const COMPARISON = [
  { feature: "Responsive Mobile & Desktop Architecture", tier1: true, tier2: true, tier3: true },
  { feature: "Enquiry & Lead Qualification Pipelines", tier1: true, tier2: true, tier3: true },
  { feature: "Direct WhatsApp & Communication Channels", tier1: true, tier2: true, tier3: true },
  { feature: "Production Cloud Hosting & SSL Setup", tier1: true, tier2: true, tier3: true },
  { feature: "Technical On-Page & Schema.org SEO", tier1: true, tier2: true, tier3: true },
  { feature: "Scope & Architecture", tier1: "Single-Page Platform", tier2: "Multi-Page Web Platform", tier3: "Comprehensive Silo Architecture" },
  { feature: "Bespoke Brand & UI/UX Tailoring", tier1: "Standard", tier2: true, tier3: true },
  { feature: "Google Search Console & XML Sitemaps", tier1: true, tier2: true, tier3: true },
  { feature: "Dedicated Practice Silo Pages", tier1: false, tier2: true, tier3: true },
  { feature: "Resources / Case Studies Architecture", tier1: false, tier2: false, tier3: true },
  { feature: "Advanced Entity & Local Schema Graphs", tier1: false, tier2: true, tier3: true },
  { feature: "Analytics & Conversion Event Tracking", tier1: "Basic", tier2: "Standard", tier3: "Advanced" },
  { feature: "Delivery Turnaround", tier1: "3–5 Days", tier2: "1–2 Weeks", tier3: "2–3 Weeks" },
  { feature: "100% Source Code & Asset Ownership", tier1: true, tier2: true, tier3: true },
];

export default function PricingPage() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen pt-28 pb-16">
      {/* Top Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-50 border border-slate-200 text-xs font-mono uppercase tracking-[0.16em] text-blue-600 font-semibold mb-4">
          STRUCTURED COMMERCIAL ENGAGEMENTS
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#090D16] tracking-[-0.03em] mb-4">
          Predictable Delivery. Transparent Scopes.
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal">
          We structure our client engagements with clear milestone specifications, defined deliverables, and guaranteed intellectual property handover.
        </p>
      </div>

      {/* Main Packages */}
      <PricingPackages />

      {/* Detailed Comparison Table */}
      <section className="py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.16em] text-blue-600 font-semibold block mb-2">
              DELIVERABLE BREAKDOWN
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#090D16] tracking-tight">
              Web Platform Scope Comparison
            </h2>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="p-4 sm:p-5 font-bold text-[#090D16] w-2/5">Feature / Specification</th>
                    <th className="p-4 sm:p-5 font-bold text-[#090D16] text-center w-1/5">
                      Launch Platform<br />
                      <span className="text-slate-500 font-mono text-xs font-normal">Focused Web Presence</span>
                    </th>
                    <th className="p-4 sm:p-5 font-bold text-[#090D16] text-center w-1/5 bg-blue-50/40 border-x border-slate-200">
                      Commercial Platform<br />
                      <span className="text-blue-700 font-mono text-xs font-normal">Most Requested</span>
                    </th>
                    <th className="p-4 sm:p-5 font-bold text-[#090D16] text-center w-1/5">
                      Enterprise Growth<br />
                      <span className="text-slate-500 font-mono text-xs font-normal">Comprehensive Silos</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {COMPARISON.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 sm:p-5 text-[#090D16] font-medium">{row.feature}</td>
                      <td className="p-4 sm:p-5 text-center text-slate-600">
                        {typeof row.tier1 === "boolean" ? (
                          row.tier1 ? (
                            <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-slate-300 mx-auto" />
                          )
                        ) : (
                          <span className="font-semibold text-[#090D16]">{row.tier1}</span>
                        )}
                      </td>
                      <td className="p-4 sm:p-5 text-center text-slate-600 bg-blue-50/20 border-x border-slate-200">
                        {typeof row.tier2 === "boolean" ? (
                          row.tier2 ? (
                            <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-slate-300 mx-auto" />
                          )
                        ) : (
                          <span className="font-semibold text-blue-700">{row.tier2}</span>
                        )}
                      </td>
                      <td className="p-4 sm:p-5 text-center text-slate-600">
                        {typeof row.tier3 === "boolean" ? (
                          row.tier3 ? (
                            <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-slate-300 mx-auto" />
                          )
                        ) : (
                          <span className="font-semibold text-[#090D16]">{row.tier3}</span>
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

      {/* FAQs */}
      <HomeFaq />

      {/* Final CTA */}
      <FinalCta />

      {/* Contact Form */}
      <LeadForm />
    </div>
  );
}
