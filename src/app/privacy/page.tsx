"use client";

import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function PrivacyPage() {
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>GDPR &amp; UK Data Protection</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-950 font-outfit tracking-tight">Privacy Policy</h1>
          <p className="text-slate-500 text-xs">Last updated: September 2026</p>
        </div>

        <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wide">1. Business Identity &amp; Data Controller</h2>
            <p>
              CortexHive is a trading name operated as a self-employed business in the United Kingdom. We act as the data controller for personal information collected through this website (<span className="text-slate-900 font-mono text-xs">cortexhive.co.uk</span>) and our direct client project communications.
            </p>
            <p>
              For inquiries regarding personal data or privacy matters, contact: <a href="mailto:info@cortexhive.co.uk" className="text-hive-blue font-semibold hover:underline">info@cortexhive.co.uk</a>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wide">2. Information We Collect</h2>
            <p>
              We collect details submitted voluntarily through our project inquiry wizard, contact form, or direct email correspondence:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600">
              <li>Full Name and business email address</li>
              <li>Company / organization name and website URL</li>
              <li>Project scope, technical requirements, timeline, and budget parameters</li>
              <li>Technical usage logs (IP address, browser user-agent) via secure hosting for reliability and abuse prevention</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wide">3. How We Use Information</h2>
            <p>
              We use information strictly for:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600">
              <li>Assessing project feasibility, scoping technical architecture, and preparing commercial proposals</li>
              <li>Direct client correspondence regarding project deliverables and milestones</li>
              <li>Preventing automated spam, security exploits, or API misuse</li>
            </ul>
            <p className="font-semibold text-slate-800">
              We never sell, rent, or trade your contact details or project briefs to third-party brokers or advertisers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wide">4. Data Storage &amp; Sub-processors</h2>
            <p>
              We utilize trusted cloud infrastructure to securely process information, including UK/EU-compliant hosting providers, transactional email relays (Resend / Mailjet), and transactional database systems. Data is encrypted in transit using standard TLS.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wide">5. Your Rights Under UK GDPR</h2>
            <p>
              Under UK Data Protection legislation and GDPR, you have the right to request access to, rectification of, or erasure of your personal data held by CortexHive. To exercise these rights, email us at <a href="mailto:info@cortexhive.co.uk" className="text-hive-blue font-semibold hover:underline">info@cortexhive.co.uk</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
