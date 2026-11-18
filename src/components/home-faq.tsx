"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const HOMEPAGE_FAQS = [
  {
    q: "How much does a website cost?",
    a: "Our small business website packages start from £99 for a 1-page Starter Website, £349 for a Business Website (up to 5 pages), and £699 for a Growth Website (up to 10 pages). These are one-off build starting prices. Domain registration, recurring hosting and custom functionality outside the package scope are quoted transparently before work begins.",
  },
  {
    q: "Can you build websites for small businesses?",
    a: "Yes. We build mobile-friendly, enquiry-focused websites for builders, electricians, plumbers, cleaning companies, handymen, local service providers, startups and small-to-medium businesses across the UK.",
  },
  {
    q: "Do you provide AI receptionists?",
    a: "Yes. We configure AI-powered phone receptionists that answer incoming business calls 24/7, speak naturally, collect caller details, qualify enquiries and send call summaries to your phone or email.",
  },
  {
    q: "Can your AI receptionist book appointments?",
    a: "Where integrated with a compatible digital calendar or booking workflow, the AI receptionist can help check availability, collect preferred appointment times or send callers your direct booking link.",
  },
  {
    q: "Can you build custom SaaS applications?",
    a: "Yes. We design and develop custom SaaS platforms, multi-user web applications, customer portals and management dashboards — and we also build and operate our own SaaS products such as MarkScheme, AuraPDF and Rydigo.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes. Once your website or software is launched, you own your custom project assets. We offer optional managed hosting, security updates, content updates and ongoing technical support plans if you prefer hands-off management.",
  },
  {
    q: "How long does a website take?",
    a: "Turnaround depends on the size of the project and how quickly content is provided. Starter 1-page websites are typically ready within a few working days of receiving your business details, while multi-page Business and Growth websites generally take 1 to 3 weeks.",
  },
  {
    q: "Do you work with businesses throughout the UK?",
    a: "Yes. We work with sole traders, small businesses, startups and established companies throughout England, Scotland, Wales and Northern Ireland via phone, WhatsApp, video calls and email.",
  },
  {
    q: "Can you integrate with existing business systems?",
    a: "Yes. We can connect your website, AI workflows or custom software with popular CRM platforms, email services, calendars, payment gateways (such as Stripe) and internal databases where APIs or webhooks are supported.",
  },
  {
    q: "Do you provide custom quotations?",
    a: "Yes. If your project requires extra pages, bespoke design features, AI workflow automation or custom software development, we provide a free consultation and a clear written quotation tailored to your requirements.",
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
          {/* Left 4 Columns: Header */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-xs font-bold uppercase tracking-wider text-blue-600">
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14243A] tracking-tight leading-[1.12]">
              Clear Answers Before You Start.
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Have a question about website packages, AI receptionists, custom software or how we work? Find straightforward answers here.
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

          {/* Right 8 Columns: 10 FAQs Accordion */}
          <div className="lg:col-span-8 space-y-3">
            {HOMEPAGE_FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={faq.q}
                  className="rounded-xl border border-[#E2E8F0] bg-white overflow-hidden shadow-2xs transition-all"
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
