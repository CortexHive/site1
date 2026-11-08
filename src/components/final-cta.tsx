"use client";

import { ArrowRight, MessageSquare, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export default function FinalCta() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E2E8F0] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-blue-50 to-sky-50 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F8FC] border border-[#E2E8F0] text-xs font-bold text-blue-700 uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>Ready When You Are</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#14243A] tracking-tight leading-tight mb-5">
          Have an Idea? Let&apos;s Make It Work.
        </h2>

        <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal">
          Whether you need an accessible £99 website to establish your business online or a custom AI system to automate repetitive operations, we&apos;re ready to build.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <button
            type="button"
            onClick={scrollToContact}
            className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/20 inline-flex items-center gap-2 transition-all"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={SITE_CONFIG.getWhatsAppLink("general")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md inline-flex items-center gap-2 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href="tel:07950501323"
            className="px-6 py-4 rounded-xl bg-white hover:bg-[#F5F8FC] border border-[#E2E8F0] text-[#14243A] font-bold text-sm inline-flex items-center gap-2 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#64748B]" />
            <span>07950 501323</span>
          </a>
        </div>

        {/* Reassurance text */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#64748B]">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>No obligation. No aggressive sales. Just honest technical advice from UK specialists.</span>
        </div>
      </div>
    </section>
  );
}
