"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

const FAQS = [
  {
    q: "What types of organisations does CortexHive partner with?",
    a: "We work with established UK small and medium-sized businesses, independent trades and service providers, professional practices, and technology founders looking to build high-converting web platforms, automate operations with AI, or ship custom software and SaaS products.",
  },
  {
    q: "How are projects scoped and structured?",
    a: "Every engagement begins with a technical discovery and scoping phase. Once we understand your operational goals and functional requirements, we provide a clear written specification with fixed milestones and transparent deliverables before work commences.",
  },
  {
    q: "How does the AI Voice Receptionist integrate with our existing phone lines?",
    a: "You keep your existing UK landline or mobile number. We configure standard conditional call forwarding to your dedicated virtual voice agent (powered by Twilio and ElevenLabs). When your team is busy, on site, or out of hours, the AI answers within two rings, conducts a natural British English conversation, qualifies the enquiry, and immediately dispatches a structured summary via WhatsApp, SMS, or email.",
  },
  {
    q: "What is the typical delivery timeline for a project?",
    a: "Commercial web platforms are typically engineered and deployed within 1 to 3 weeks. Targeted AI workflow and voice integrations take 1 to 4 weeks, while bespoke full-stack web applications and SaaS MVPs are delivered in 4 to 8 weeks depending on scope.",
  },
  {
    q: "Who owns the source code and intellectual property?",
    a: "You do. Upon final milestone completion, 100% of your custom codebase, design assets, domain configurations, and intellectual property belong to your business. We do not trap clients in proprietary CMS lock-ins.",
  },
  {
    q: "Do you provide ongoing hosting, security, and post-launch support?",
    a: "Yes. Following launch, we offer optional managed cloud infrastructure, automated daily backups, SSL and security monitoring, and ongoing engineering support for teams that prefer a hands-off technical partner.",
  },
];

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left 5 Columns: Editorial Header */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-blue-600 font-semibold">
              07 // TECHNICAL &amp; COMMERCIAL FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#090D16] tracking-[-0.025em] leading-[1.1]">
              Common Questions on Scoping &amp; Delivery.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Clear answers on how we architect software, integrate AI into existing business workflows, and manage post-launch infrastructure.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={SITE_CONFIG.getWhatsAppLink("quote")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-[#0F172A] transition-colors"
              >
                <span>Ask via WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-slate-300">|</span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F172A] hover:text-blue-600 transition-colors"
              >
                <span>Contact Engineering</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right 7 Columns: Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#090D16]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3.5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
