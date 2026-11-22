"use client";

import Link from "next/link";
import {
  PhoneCall,
  ArrowRight,
  Check,
  MessageSquare,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import AiReceptionistDemo from "./ai-receptionist-demo";

const CAPABILITIES = [
  "AI answers incoming calls when you are busy or unavailable",
  "Calls can be handled outside normal business hours",
  "Customers can ask questions about your services and areas covered",
  "Caller details can be collected accurately (name, phone, postcode)",
  "Potential leads can be qualified with business-specific questions",
  "Clear call summaries can be generated after each conversation",
  "Information can be sent to supported business systems, email or WhatsApp",
];

const TARGET_SECTORS = [
  "Builders",
  "Plumbers",
  "Electricians",
  "Window Cleaners",
  "Cleaning Companies",
  "Appointment-Based Businesses",
];

export default function HomeAiReceptionistSpotlight() {
  return (
    <section
      id="ai-receptionist"
      className="py-20 sm:py-28 bg-[#F8FAFD] border-b border-[#E2E8F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left 7 Columns: Copy, Capabilities & Target Sectors */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#E2E8F0]">
              <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#14243A]">
                AI Receptionist Service
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#14243A] tracking-tight leading-[1.1]">
                Never Miss Another Customer Call.
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-[#475569] leading-relaxed max-w-2xl">
                When you are on site, driving or with a client, an unanswered phone call often goes straight to a competitor. Our AI receptionist handles incoming calls politely and captures the information you need to follow up.
              </p>
            </div>

            {/* Capabilities List */}
            <ul className="space-y-2.5 pt-1">
              {CAPABILITIES.map((cap) => (
                <li
                  key={cap}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-[#14243A]"
                >
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>

            {/* Target Business Examples */}
            <div className="pt-2 space-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#64748B] block">
                Ideal For:
              </span>
              <div className="flex flex-wrap gap-2">
                {TARGET_SECTORS.map((sector) => (
                  <span
                    key={sector}
                    className="px-3 py-1.5 rounded-md bg-white border border-[#E2E8F0] text-xs font-semibold text-[#14243A]"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>

            {/* Ongoing Usage Costs Disclosure */}
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs text-[#475569] leading-relaxed">
              <strong className="text-[#14243A]">Setup &amp; Usage Transparency:</strong>{" "}
              Implementation and business-specific configuration are quoted based on your call handling requirements. Ongoing AI voice processing and telephone network usage charges apply separately according to call volume and are explained clearly before setup.
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <Link
                href="/ai-receptionist"
                className="px-6 py-3.5 rounded-lg bg-[#14243A] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors"
              >
                <span>Enquire About AI Receptionist</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={SITE_CONFIG.getWhatsAppLink("ai-receptionist")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-[#14243A] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Discuss on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right 5 Columns: Interactive Playable AI Receptionist Call Demo */}
          <div className="lg:col-span-5">
            <AiReceptionistDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
