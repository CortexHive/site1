"use client";

import Link from "next/link";
import { ArrowRight, MessageSquare, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import { openConsultationModal } from "./consultation-modal";

export default function FinalCta() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] p-7 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-600 block">
              Start a Conversation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#14243A] tracking-tight leading-[1.1]">
              Have an Idea? Let&apos;s Build Something That Works.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#475569] leading-relaxed max-w-2xl">
              Whether you want a small business website, an AI receptionist to handle incoming calls or a custom software platform, let&apos;s discuss your requirements.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => openConsultationModal()}
              className="w-full px-6 py-4 rounded-lg bg-[#14243A] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-between transition-colors cursor-pointer"
            >
              <span>Request a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/pricing"
              className="w-full px-6 py-3.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-[#14243A] font-semibold text-xs sm:text-sm inline-flex items-center justify-between transition-colors"
            >
              <span>Explore Packages</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>

            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <a
                href={SITE_CONFIG.getWhatsAppLink("consultation")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-semibold text-xs inline-flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="px-4 py-3 rounded-lg bg-white hover:bg-slate-50 border border-[#E2E8F0] text-[#14243A] font-semibold text-xs inline-flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
