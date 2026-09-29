"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-32 px-6">
      <div className="max-w-3xl mx-auto bg-white border border-slate-200/80 rounded-2xl p-8 sm:p-12 shadow-sm space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-hive-cyan hover:text-hive-blue text-xs uppercase tracking-wider font-bold mb-2 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-2 border-b border-slate-200 pb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Digital Inclusion</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-950 font-outfit tracking-tight">Accessibility Statement</h1>
          <p className="text-slate-500 text-xs">Last updated: September 2026</p>
        </div>

        <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wide">Our Commitment</h2>
            <p>
              CortexHive is committed to ensuring digital accessibility for people of all abilities. We continually improve the user experience for everyone and apply relevant accessibility standards across our digital products and website.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wide">Conformance Standard</h2>
            <p>
              We aim to adhere as closely as possible to the Web Content Accessibility Guidelines (WCAG 2.1) Level AA. These guidelines explain how to make web content more accessible to people with a wide range of disabilities.
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600">
              <li>High-contrast visual design conforming to AA contrast ratios across light-theme interfaces.</li>
              <li>Keyboard-navigable interactive components, forms, and drawer menus.</li>
              <li>Semantic HTML5 landmark hierarchy with descriptive labeling on inputs and actions.</li>
              <li>Screen-reader friendly error messaging and form feedback.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wide">Feedback &amp; Contact</h2>
            <p>
              We welcome feedback on the accessibility of CortexHive. If you experience any difficulty accessing content or functionality, please let us know at:
            </p>
            <p className="font-semibold text-slate-800">
              Email: <a href="mailto:info@cortexhive.co.uk" className="text-hive-blue hover:underline">info@cortexhive.co.uk</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
