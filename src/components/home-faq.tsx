"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const HOMEPAGE_FAQS = [
  {
    q: "How much do your website packages cost and what is included?",
    a: "We offer three clear starting packages: Starter (£99) for a 1-page landing page with up to 5 sections, responsive design, contact details, social links and basic on-page SEO; Business (£349) for up to 5 custom pages with an enquiry form and mobile/tablet optimisation; and Growth (£699) for up to 8 pages with advanced custom design, one agreed advanced feature or integration and deployment assistance.",
  },
  {
    q: "Are domain names and website hosting included in the package prices?",
    a: "No. Website package prices are one-off build fees. Domain registration (such as .co.uk or .com) and recurring cloud hosting are separate so you retain direct ownership of your domain and hosting choices. We can assist with setup or provide optional managed hosting.",
  },
  {
    q: "Do you offer ongoing website maintenance and support?",
    a: "Yes. After launch, you can manage the site yourself or choose an agreed ongoing maintenance and support option covering updates, security checks, backups and content changes.",
  },
  {
    q: "How is the AI Receptionist priced, and are there ongoing AI or phone usage charges?",
    a: "AI Receptionist implementation is quoted based on your business call script, routing rules and any calendar or system integrations. Ongoing AI voice processing and telephone network usage charges apply separately based on actual call minutes and are explained transparently before setup.",
  },
  {
    q: "How is custom software, SaaS or AI automation priced?",
    a: "Custom software, SaaS platforms, white-label solutions and workflow automations are scoped and quoted individually following a free consultation. You receive a written breakdown of deliverables and milestones before development starts.",
  },
  {
    q: "What are the typical project timelines?",
    a: "Once we receive your business details and content, Starter websites are typically ready in 3 to 5 working days, Business websites in 1 to 2 weeks, and Growth websites in 2 to 3 weeks. Custom software and AI projects are scheduled around agreed milestone dates.",
  },
  {
    q: "Who owns the source code upon completion?",
    a: "For custom client websites and software builds, ownership of your client-specific custom code and project deliverables transfers to your business upon receipt of full payment for the agreed scope.",
  },
  {
    q: "Can you integrate with existing business systems and tools?",
    a: "Yes. Where your existing CRM, email service, booking calendar, payment provider (such as Stripe) or internal software provides APIs or webhooks, we can integrate them cleanly into your website or custom application.",
  },
  {
    q: "How many revisions are included with website packages?",
    a: "To keep pricing fair and transparent, the Starter package includes 1 revision round, the Business package includes up to 2 revision rounds, and the Growth package includes up to 3 revision rounds prior to launch. Additional revisions are quoted upfront.",
  },
  {
    q: "Do you work with businesses across the entire UK?",
    a: "Yes. CortexHive supports small businesses, tradespeople, startups and established companies throughout the United Kingdom via video calls, telephone, email and WhatsApp.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOMEPAGE_FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#F5F8FC] border-b border-[#E2E8F0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left 4 Columns */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-600 block">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14243A] tracking-tight leading-[1.12]">
              Straightforward Answers Before You Begin.
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Clear information on website packages, hosting, domains, AI receptionist usage charges, custom software timelines and ongoing support.
            </p>
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href={SITE_CONFIG.getWhatsAppLink("consultation")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-[#14243A] transition-colors"
              >
                <span>Ask on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-slate-300">|</span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#14243A] hover:text-blue-600 transition-colors"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right 8 Columns */}
          <div className="lg:col-span-8 space-y-3">
            {HOMEPAGE_FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={faq.q}
                  className="rounded-xl border border-[#E2E8F0] bg-white overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#14243A]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-slate-100 pt-3.5">
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
