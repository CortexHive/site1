"use client";

import { ArrowRight, MessageSquare, Phone, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export default function FinalCta() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-blue-600 font-semibold">
              08 // PROJECT INITIATION
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#090D16] tracking-[-0.025em] leading-[1.1]">
              Have a Technical Problem or Product Idea? Let&apos;s Scope It.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Whether you need a high-converting web platform, a 24/7 autonomous AI voice receptionist, or a full-scale software system, our engineering team is ready to map out a clear roadmap.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs font-medium text-slate-500">
              <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>No aggressive sales calls. Direct technical scoping with UK specialists.</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
            <button
              type="button"
              onClick={scrollToContact}
              className="w-full px-6 py-4 rounded-lg bg-[#0F172A] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-between transition-colors"
            >
              <span>Complete Project Brief Below</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={SITE_CONFIG.getWhatsAppLink("quote")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-4 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-[#0F172A] font-semibold text-xs sm:text-sm inline-flex items-center justify-between transition-colors"
            >
              <span className="inline-flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Direct WhatsApp Consultation</span>
              </span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="w-full px-6 py-3.5 rounded-lg bg-slate-100/80 hover:bg-slate-200/70 text-slate-700 font-mono text-xs inline-flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-slate-500" />
              <span>UK Studio Line: {SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
