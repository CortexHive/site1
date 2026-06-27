"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-extrabold text-white">Privacy Policy</h1>
        <p className="text-gray-400 text-sm">Last updated: June 14, 2026</p>
        <hr className="border-white/10" />

        <div className="space-y-6 text-sm leading-relaxed">
          <p>
            At Cortex Hive, we prioritize your privacy. This policy outlines how we handle data captured through our
            digital scoping wizard and AI chatbot concierge.
          </p>
          <h2 className="text-xl font-bold text-white mt-8">1. Information We Collect</h2>
          <p>
            We collect details you voluntarily provide in scoping inquiries, including your name, business email,
            project specifications, budget ranges, and timeline parameters.
          </p>
          <h2 className="text-xl font-bold text-white mt-8">2. How We Use Your Data</h2>
          <p>
            We use this information solely to draft scoping blueprints, verify project compatibility, and coordinate
            strategic outreach calls. We do not sell or lease your business details to third parties.
          </p>
          <h2 className="text-xl font-bold text-white mt-8">3. Cookie Policy</h2>
          <p>
            Our website utilizes local storage and analytics cookies to optimize layout rendering and cache chat states
            for the concierge widget.
          </p>
        </div>
      </div>
    </div>
  );
}
