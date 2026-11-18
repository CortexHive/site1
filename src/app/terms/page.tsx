import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | CortexHive UK",
  description:
    "Terms and Conditions governing website packages, AI automation and custom software services provided by CortexHive.",
  alternates: {
    canonical: "https://cortexhive.co.uk/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFD] text-[#475569] pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-10 shadow-subtle space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-[#14243A] text-xs uppercase tracking-wider font-bold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-2 border-b border-[#E2E8F0] pb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F5F8FC] text-blue-700 border border-[#E2E8F0]">
            <FileText className="w-3.5 h-3.5" />
            <span>Commercial Terms</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#14243A] tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-[#64748B] text-xs">Last updated: November 2026</p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-[#475569] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#14243A]">1. Overview &amp; Application</h2>
            <p>
              These Terms &amp; Conditions govern your use of the website (<span className="text-[#14243A] font-semibold">cortexhive.co.uk</span>) and the digital services provided by <span className="text-[#14243A] font-semibold">CortexHive</span> in the United Kingdom.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#14243A]">2. Website Packages &amp; Custom Quotations</h2>
            <p>
              Published website package prices (Starter from £99, Business from £349, Growth from £699) are starting one-off build fees covering the stated page limits, standard features and revision allowances. Domain registration, recurring website hosting, ongoing maintenance plans, third-party telephony/AI API usage costs and custom requirements outside the package specification are separate and confirmed in writing prior to work commencing.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#14243A]">3. Revisions &amp; Client Content</h2>
            <p>
              Project turnaround expectations depend on timely provision of business details, text, logos and feedback by the client. Each website package includes a specified number of revision rounds prior to launch; additional revisions or scope additions requested after sign-off are quoted transparently.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#14243A]">4. Intellectual Property Rights</h2>
            <p>
              Upon receipt of full payment for the agreed project scope or milestone, ownership of client-specific custom website files, code and deliverables transfers to the client. CortexHive retains rights to its underlying developer frameworks, reusable libraries and proprietary products (including MarkScheme, AuraPDF and Rydigo).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#14243A]">5. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of England and Wales.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
