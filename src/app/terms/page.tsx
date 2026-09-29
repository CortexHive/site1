"use client";

import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsPage() {
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
            <FileText className="w-3.5 h-3.5" />
            <span>Commercial Terms</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-950 font-outfit tracking-tight">Terms of Service</h1>
          <p className="text-slate-500 text-xs">Last updated: September 2026</p>
        </div>

        <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wide">1. Business Entity &amp; Application</h2>
            <p>
              These Terms govern your use of the website and services provided under the trading name <span className="text-slate-950 font-semibold">CortexHive</span>, operated as a self-employed business in the United Kingdom. CortexHive is not a limited company.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wide">2. Scope of Services &amp; Proposals</h2>
            <p>
              CortexHive delivers custom AI applications, automation engineering, and full-stack software development. All estimates, proposals, or timeline targets provided through this website or exploratory calls are indicative until formalized in a mutually agreed statement of work (SOW) or written agreement.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wide">3. Intellectual Property Rights</h2>
            <p>
              For custom client builds, full ownership of client-specific custom code, configurations, and deliverables is transferred upon receipt of full payment according to the agreed milestones. CortexHive retains rights to pre-existing libraries, generalized boilerplates, and developer tooling.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wide">4. Fair Use &amp; Automated Systems</h2>
            <p>
              You agree not to use our interactive forms, API endpoints, or AI widgets for malicious activities, reverse engineering, unauthorized data harvesting, or denial-of-service attempts.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wide">5. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of England and Wales.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
