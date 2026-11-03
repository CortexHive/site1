"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

const FAQS = [
  {
    q: "What types of businesses does CortexHive work with?",
    a: "We work with UK small businesses, tradespeople (builders, plumbers, electricians, handymen, cleaning services), professional practices, startups, and established companies looking to improve their digital presence and streamline operations with modern software and AI.",
  },
  {
    q: "How does the £99 Small Business Starter Website offer work?",
    a: "Our £99 starter website gives UK trades and local businesses a professional, mobile-friendly one-page website with their services, contact details, click-to-call buttons, and WhatsApp integration. It's a genuine acquisition package designed to make entering the digital space affordable. Standard running costs like domain names (~£10/yr) and hosting (from £5/mo) are transparently kept separate.",
  },
  {
    q: "How does the AI Receptionist work with my existing phone number?",
    a: "You can keep your current UK mobile or landline number. We simply set up standard call forwarding to your dedicated virtual line (powered by Twilio and ElevenLabs). When you are busy, driving, or closed, the AI picks up after 2 rings, conducts a natural conversational greeting, answers questions, logs the customer's job requirements, and instantly texts or emails you the full summary.",
  },
  {
    q: "How long does it take to deliver a website or software project?",
    a: "Starter one-page websites are typically live in 3 to 5 business days once your information is provided. Bespoke multi-page business websites take 2 to 3 weeks, and custom web applications or SaaS MVPs take 4 to 8 weeks depending on technical complexity.",
  },
  {
    q: "What technology stack do you use?",
    a: "We engineer using modern industry standards: Next.js 14, React 18, TypeScript, Tailwind CSS, Node.js, Python, PostgreSQL, and Prisma ORM. For AI voice and workflow automations, we leverage ElevenLabs, Twilio, OpenAI/Claude APIs, and webhook automation frameworks.",
  },
  {
    q: "Can I speak directly with a specialist before committing?",
    a: "Absolutely. You can reach us directly on WhatsApp, request a free scoping call, or submit an enquiry through our contact form. We provide honest feedback on scope, feasibility, and transparent fixed pricing.",
  },
];

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold text-purple-700 uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Answers to Common Questions</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 font-outfit tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-base text-slate-600 font-medium max-w-2xl mx-auto px-2 sm:px-0">
            Everything you need to know about our web design, AI receptionists, and software development workflows.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 font-outfit">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-purple-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="p-6 rounded-3xl bg-purple-50 border border-purple-200/80 text-center space-y-2">
          <h4 className="text-sm font-bold text-slate-900">Have a question not listed here?</h4>
          <p className="text-xs text-slate-600">
            Our team is happy to discuss your specific requirements directly.
          </p>
          <div className="pt-2 flex items-center justify-center gap-4">
            <a
              href={SITE_CONFIG.getWhatsAppLink("quote")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
            >
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <span className="text-slate-300">•</span>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-800"
            >
              <span>Contact Studio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
