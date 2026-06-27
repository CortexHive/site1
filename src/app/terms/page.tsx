"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-gray-300 py-28 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-hive-cyan hover:underline text-sm font-semibold mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-4xl font-extrabold text-white">Terms of Service</h1>
        <p className="text-gray-400 text-sm">Last updated: June 14, 2026</p>
        <hr className="border-white/10" />

        <div className="space-y-6 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-white">1. Scope of Work</h2>
          <p>
            Cortex Hive delivers digital engineering services (SaaS platforms, AI tools, and content creatives) as
            outlined in signed development scopes. All proposals provided via our online forms are non-binding estimates.
          </p>
          <h2 className="text-xl font-bold text-white mt-8">2. Intellectual Property</h2>
          <p>
            Unless agreed otherwise in writing, all source code and assets created for client deployments remain property
            of the client upon final invoice settlement.
          </p>
          <h2 className="text-xl font-bold text-white mt-8">3. API Usage Fair Use</h2>
          <p>
            Our chatbot concierge is provided for legitimate project scoping inquiries. Users engaging in programmatic
            extraction or spam attacks on our AI endpoints will be blocked.
          </p>
        </div>
      </div>
    </div>
  );
}
