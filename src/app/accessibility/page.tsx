"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AccessibilityPage() {
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
        <h1 className="text-4xl font-extrabold text-white">Accessibility Statement</h1>
        <p className="text-gray-400 text-sm">Last updated: June 14, 2026</p>
        <hr className="border-white/10" />

        <div className="space-y-6 text-sm leading-relaxed">
          <p>
            Cortex Hive is committed to providing a digitally accessible experience for all visitors, aligning with WCAG
            accessibility standards.
          </p>
          <h2 className="text-xl font-bold text-white mt-8">Conformance Status</h2>
          <p>
            We actively design and test our web resources to achieve Web Content Accessibility Guidelines (WCAG) 2.1
            Level AA compliance. This includes testing for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-400 pl-4">
            <li>Sufficient color contrast levels across all interactive text elements.</li>
            <li>Accessible keyboard navigation controls for the Chatbot widget and lead wizard.</li>
            <li>Semantic HTML landmarks and descriptive alt text attributes.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
