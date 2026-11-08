import { Metadata } from "next";
import PricingPackages from "@/components/pricing-packages";
import LeadForm from "@/components/lead-form";
import HomeFaq from "@/components/home-faq";
import FinalCta from "@/components/final-cta";
import { Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing & Packages — Websites, AI & Software | CortexHive",
  description:
    "Transparent pricing for websites and software in the UK. Launch Website £99, Business Website £349 (Most Popular), Business Growth £699. No hidden retainers.",
  keywords: [
    "CortexHive pricing",
    "£99 website UK",
    "small business website cost UK",
    "affordable web design UK",
    "AI software pricing UK",
  ],
};

const COMPARISON = [
  { feature: "Responsive Mobile & Desktop Design", launch: true, business: true, growth: true },
  { feature: "Contact & Enquiry Capture Form", launch: true, business: true, growth: true },
  { feature: "Direct WhatsApp & Call Buttons", launch: true, business: true, growth: true },
  { feature: "Fast Cloud Hosting Setup", launch: true, business: true, growth: true },
  { feature: "Standard On-Page SEO", launch: true, business: true, growth: true },
  { feature: "Number of Pages", launch: "1 Page", business: "Up to 5 Pages", growth: "Up to 8–10 Pages" },
  { feature: "Custom Brand Design Tailoring", launch: false, business: true, growth: true },
  { feature: "Google Search Console & Sitemap", launch: false, business: true, growth: true },
  { feature: "Dedicated Service Silo Pages", launch: false, business: false, growth: true },
  { feature: "Blog / News / Resource Section", launch: false, business: false, growth: true },
  { feature: "Advanced Schema.org Structured Data", launch: false, business: false, growth: true },
  { feature: "Analytics & Conversion Tracking", launch: false, business: "Basic", growth: "Advanced" },
  { feature: "Turnaround Time", launch: "3–5 Days", business: "1–2 Weeks", growth: "2–3 Weeks" },
  { feature: "Ownership of All Files & Code", launch: true, business: true, growth: true },
];

export default function PricingPage() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen pt-28 pb-16">
      {/* Top Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F8FC] border border-[#E2E8F0] text-xs font-bold text-blue-700 uppercase tracking-widest mb-4">
          Upfront Commercial Packages
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#14243A] tracking-tight mb-4">
          Clear, Transparent Pricing. No Surprises.
        </h1>
        <p className="text-[#475569] text-base sm:text-lg max-w-2xl mx-auto font-normal">
          Whether you need a fast £99 starter site or a comprehensive bespoke software platform, we outline exact costs and deliverables upfront.
        </p>
      </div>

      {/* Main Packages */}
      <PricingPackages />

      {/* Detailed Comparison Table */}
      <section className="py-20 bg-[#F8FAFD] border-b border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-2">
              Package Breakdown
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#14243A] tracking-tight">
              Compare Website Packages
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[#E2E8F0] bg-[#F5F8FC]">
                    <th className="p-4 sm:p-5 font-bold text-[#14243A] w-2/5">Feature / Inclusion</th>
                    <th className="p-4 sm:p-5 font-bold text-[#14243A] text-center w-1/5">
                      Launch<br />
                      <span className="text-blue-600 font-extrabold text-sm sm:text-base">£99</span>
                    </th>
                    <th className="p-4 sm:p-5 font-bold text-[#14243A] text-center w-1/5 bg-blue-50/50 border-x border-[#E2E8F0]">
                      Business (Popular)<br />
                      <span className="text-blue-600 font-extrabold text-sm sm:text-base">£349</span>
                    </th>
                    <th className="p-4 sm:p-5 font-bold text-[#14243A] text-center w-1/5">
                      Growth<br />
                      <span className="text-blue-600 font-extrabold text-sm sm:text-base">£699</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0]">
                  {COMPARISON.map((row, i) => (
                    <tr key={i} className="hover:bg-[#F8FAFD] transition-colors">
                      <td className="p-4 sm:p-5 text-[#14243A] font-medium">{row.feature}</td>
                      <td className="p-4 sm:p-5 text-center text-[#475569]">
                        {typeof row.launch === "boolean" ? (
                          row.launch ? (
                            <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-[#64748B]/40 mx-auto" />
                          )
                        ) : (
                          <span className="font-semibold text-[#14243A]">{row.launch}</span>
                        )}
                      </td>
                      <td className="p-4 sm:p-5 text-center text-[#475569] bg-blue-50/20 border-x border-[#E2E8F0]">
                        {typeof row.business === "boolean" ? (
                          row.business ? (
                            <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-[#64748B]/40 mx-auto" />
                          )
                        ) : (
                          <span className="font-semibold text-blue-700">{row.business}</span>
                        )}
                      </td>
                      <td className="p-4 sm:p-5 text-center text-[#475569]">
                        {typeof row.growth === "boolean" ? (
                          row.growth ? (
                            <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-[#64748B]/40 mx-auto" />
                          )
                        ) : (
                          <span className="font-semibold text-[#14243A]">{row.growth}</span>
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
