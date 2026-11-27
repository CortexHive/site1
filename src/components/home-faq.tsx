"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight, MessageSquare, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { openConsultationModal } from "./consultation-modal";

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
    <section
      id="faq"
      className="py-20 sm:py-28 bg-[#F4F7FB] border-b border-[#DCE6F2] relative overflow-hidden"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Subtle architectural metallic ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(20,58,107,0.06)_0%,rgba(198,155,58,0.04)_45%,transparent_72%)]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left 5 Columns: Sticky Editorial Header + Metallic Blue Concierge Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="space-y-3.5">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#DCE6F2] font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#143A6B] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#C69B3A]" />
                <span>Frequently Asked Questions</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A1628] tracking-[-0.03em] leading-[1.08]">
                Straightforward answers before you{" "}
                <span className="text-[#143A6B]">begin.</span>
              </h2>

              <p className="text-sm sm:text-[15.5px] text-[#33475F] leading-relaxed">
                Clear, transparent details on website packages, domains, AI receptionist usage, custom software timelines, and code ownership.
              </p>
            </div>

            {/* Luxury Metallic Blue Studio Concierge Card */}
            <div className="rounded-2xl bg-gradient-to-br from-[#08182E] via-[#0F2D56] to-[#051122] border border-[#C69B3A]/30 p-6 sm:p-7 text-white shadow-editorial space-y-5">
              <div className="flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#F4E3B2]">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>Direct UK Engineering Team</span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-blue-200/80 bg-white/10 px-2.5 py-1 rounded-full">
                  24h Reply
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2.5 pt-1">
                <div className="rounded-xl bg-white/[0.06] border border-white/10 p-3">
                  <div className="text-base font-extrabold text-[#D4AF37]">£99</div>
                  <div className="font-mono text-[9.5px] uppercase tracking-wider text-blue-100/70 mt-0.5">
                    Starting Site
                  </div>
                </div>
                <div className="rounded-xl bg-white/[0.06] border border-white/10 p-3">
                  <div className="text-base font-extrabold text-white">100%</div>
                  <div className="font-mono text-[9.5px] uppercase tracking-wider text-blue-100/70 mt-0.5">
                    Client Owned
                  </div>
                </div>
                <div className="rounded-xl bg-white/[0.06] border border-white/10 p-3">
                  <div className="text-base font-extrabold text-[#60A5FA]">UK</div>
                  <div className="font-mono text-[9.5px] uppercase tracking-wider text-blue-100/70 mt-0.5">
                    Nationwide
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-[13px] text-blue-100/80 leading-relaxed">
                Have a specific requirement or want a fixed quote for your project? Speak directly with us — zero sales pressure.
              </p>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={() => openConsultationModal()}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#C69B3A] hover:bg-[#B5892E] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={SITE_CONFIG.getWhatsAppLink("consultation")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-semibold transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="pt-1 border-t border-white/10 flex items-center justify-between text-[11px] text-blue-200/75">
                <span>Prefer email or a detailed brief?</span>
                <Link
                  href="/contact"
                  className="font-semibold text-[#F4E3B2] hover:text-white inline-flex items-center gap-1 transition-colors"
                >
                  <span>Contact Page</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right 7 Columns: Elevated Luxury Accordion Cards */}
          <div className="lg:col-span-7 space-y-3">
            {HOMEPAGE_FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              const num = String(i + 1).padStart(2, "0");
              return (
                <div
                  key={faq.q}
                  className={`rounded-2xl border transition-all duration-200 ${
                    isOpen
                      ? "bg-white border-[#143A6B]/35 shadow-subtle"
                      : "bg-white/90 border-[#DCE6F2] hover:border-[#143A6B]/25 hover:bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer group"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span
                        className={`font-mono text-[11px] font-bold px-2.5 py-1 rounded-lg flex-shrink-0 transition-colors ${
                          isOpen
                            ? "bg-[#143A6B] text-white"
                            : "bg-[#EDF3FA] text-[#143A6B] group-hover:bg-[#143A6B]/15"
                        }`}
                      >
                        {num}
                      </span>
                      <span
                        className={`text-sm sm:text-[15.5px] font-bold leading-snug transition-colors ${
                          isOpen
                            ? "text-[#143A6B]"
                            : "text-[#0A1628] group-hover:text-[#143A6B]"
                        }`}
                      >
                        {faq.q}
                      </span>
                    </div>

                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border transition-all ${
                        isOpen
                          ? "bg-[#C69B3A] border-[#C69B3A] text-white"
                          : "bg-[#F4F7FB] border-[#DCE6F2] text-[#143A6B] group-hover:border-[#C69B3A]/60"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pl-[62px] sm:pl-[74px] text-xs sm:text-[14.5px] text-[#33475F] leading-relaxed border-t border-[#DCE6F2]/70 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
