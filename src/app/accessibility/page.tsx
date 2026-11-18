import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Accessibility Statement | CortexHive UK",
  description:
    "Accessibility statement and WCAG 2.1 Level AA commitment for CortexHive (cortexhive.co.uk).",
  alternates: {
    canonical: "https://cortexhive.co.uk/accessibility",
  },
};

export default function AccessibilityPage() {
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Digital Inclusion</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#14243A] tracking-tight">
            Accessibility Statement
          </h1>
          <p className="text-[#64748B] text-xs">Last updated: November 2026</p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-[#475569] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#14243A]">Our Commitment</h2>
            <p>
              CortexHive is committed to ensuring digital accessibility for people of all abilities. We continually improve the user experience for everyone and apply relevant accessibility standards across our website and digital products.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#14243A]">Conformance Standard</h2>
            <p>
              We aim to adhere to the Web Content Accessibility Guidelines (WCAG 2.1) Level AA:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>High-contrast light-theme visual design meeting AA text contrast ratios.</li>
              <li>Keyboard-navigable interactive components, forms and navigation menus.</li>
              <li>Semantic HTML5 landmark structure with explicit form labels and ARIA attributes.</li>
              <li>Responsive mobile-first layouts supporting browser zoom and screen readers.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#14243A]">Feedback &amp; Contact</h2>
            <p>
              If you experience any difficulty accessing content or functionality on cortexhive.co.uk, please contact us:
            </p>
            <p className="font-semibold text-[#14243A]">
              Email:{" "}
              <a href="mailto:info@cortexhive.co.uk" className="text-blue-600 hover:underline">
                info@cortexhive.co.uk
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
