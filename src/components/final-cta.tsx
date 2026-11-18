"use client";

import Link from "next/link";
import { ArrowRight, MessageSquare, Phone, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export default function FinalCta() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-[#F5F8FC] via-white to-[#EFF6FF] border-2 border-blue-200/80 p-7 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-subtle">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700">
              Ready to Get Started?
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#14243A] tracking-tight leading-[1.12]">
              Let&apos;s Build Something That Makes a Difference.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#475569] leading-relaxed max-w-2xl">
              Whether you need a website, an AI receptionist or a completely custom digital solution, let&apos;s discuss how we can help.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs font-medium text-[#64748B]">
              <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>Free initial consultation • Clear pricing • UK support</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
            <button
              type="button"
              onClick={scrollToContact}
              className="w-full px-6 py-4 rounded-xl bg-blue-600 hover:bg-[#14243A] text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-between transition-colors shadow-xs"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/contact"
              className="w-full px-6 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-[#14243A] font-semibold text-xs sm:text-sm inline-flex items-center justify-between transition-colors"
            >
              <span>Contact CortexHive</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>

            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <a
                href={SITE_CONFIG.getWhatsAppLink("consultation")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-semibold text-xs inline-flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="px-4 py-3 rounded-xl bg-white hover:bg-slate-50 border border-[#E2E8F0] text-[#14243A] font-semibold text-xs inline-flex items-center justify-center gap-1.5 transition-colors"
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
