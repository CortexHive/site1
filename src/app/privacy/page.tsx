import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | CortexHive UK",
  description:
    "Privacy Policy and UK GDPR data protection information for CortexHive (cortexhive.co.uk).",
  alternates: {
    canonical: "https://cortexhive.co.uk/privacy",
  },
};

export default function PrivacyPage() {
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>UK GDPR &amp; Data Protection</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#14243A] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-[#64748B] text-xs">Last updated: November 2026</p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-[#475569] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#14243A]">1. Business Identity &amp; Data Controller</h2>
            <p>
              CortexHive operates in the United Kingdom and acts as the data controller for personal information collected through this website (<span className="text-[#14243A] font-semibold">cortexhive.co.uk</span>) and our direct client communications.
            </p>
            <p>
              For enquiries regarding personal data or privacy matters, contact:{" "}
              <a href="mailto:info@cortexhive.co.uk" className="text-blue-600 font-semibold hover:underline">
                info@cortexhive.co.uk
              </a>
              .
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#14243A]">2. Information We Collect</h2>
            <p>
              We collect details submitted voluntarily through our enquiry forms, AI assistant or direct email/telephone correspondence:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Your name, business name, email address and optional telephone number</li>
              <li>Service required, project description and optional budget range</li>
              <li>Standard technical server logs (IP address, browser type) strictly for security, reliability and spam prevention</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#14243A]">3. How We Use Information</h2>
            <p>We use your information strictly to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Respond to your enquiry, prepare project proposals and deliver requested services</li>
              <li>Communicate with you regarding project milestones and support</li>
              <li>Maintain security and prevent automated spam or abuse</li>
            </ul>
            <p className="font-semibold text-[#14243A]">
              We never sell, rent or trade your personal contact details to third-party marketing lists.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#14243A]">4. Data Storage &amp; Sub-Processors</h2>
            <p>
              We use reputable cloud hosting, form delivery services (such as Netlify Forms and transactional email providers) and database systems with TLS encryption in transit to process enquiries securely.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#14243A]">5. Cookies &amp; Analytics</h2>
            <p>
              Our website uses essential functional storage to operate interactive forms and layout preferences. We do not use intrusive cross-site advertising trackers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#14243A]">6. Your Rights Under UK GDPR</h2>
            <p>
              Under UK data protection law, you have the right to request access to, correction of, or deletion of your personal data held by CortexHive. To exercise these rights, please email{" "}
              <a href="mailto:info@cortexhive.co.uk" className="text-blue-600 font-semibold hover:underline">
                info@cortexhive.co.uk
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
