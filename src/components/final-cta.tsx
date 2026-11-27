"use client";

import Link from "next/link";
import { ArrowRight, MessageSquare, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import { openConsultationModal } from "./consultation-modal";

export default function FinalCta() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#DCE6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-[#08182E] via-[#0F2D56] to-[#051122] border border-[#C69B3A]/25 p-7 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-editorial">
          <div className="lg:col-span-7 space-y-4">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#D4AF37] block">
              Start a Conversation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-[-0.03em] leading-[1.08]">
              Have an Idea? Let&apos;s Build{" "}
              <span className="text-[#D4AF37]">Something That Works.</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-[17px] text-blue-100/80 leading-relaxed max-w-2xl">
              Whether you want a small business website, an AI receptionist to handle incoming calls or a custom software platform, let&apos;s discuss your requirements.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => openConsultationModal()}
              className="w-full px-6 py-4 rounded-xl bg-[#C69B3A] hover:bg-[#B5892E] text-white font-bold text-xs sm:text-sm inline-flex items-center justify-between transition-colors cursor-pointer shadow-subtle"
            >
              <span>Request a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/pricing"
              className="w-full px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-between transition-colors"
            >
              <span>Explore Packages</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </Link>

            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <a
                href={SITE_CONFIG.getWhatsAppLink("consultation")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-[#3B82F6]/20 hover:bg-[#3B82F6]/30 border border-[#3B82F6]/35 text-[#BFDBFE] font-semibold text-xs inline-flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-xs inline-flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
