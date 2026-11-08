"use client";

import Link from "next/link";
import {
  PhoneCall,
  Bot,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export default function HomeAiReceptionistSpotlight() {
  return (
    <section className="py-20 sm:py-24 bg-[#F8FAFD] border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 uppercase tracking-widest">
              <Bot className="w-4 h-4 text-blue-600" />
              <span>Voice AI &amp; Telephony Solutions</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#14243A] tracking-tight leading-tight">
              Never Miss Another High-Value Client Call.
            </h2>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
              An intelligent, conversational AI receptionist that answers inbound calls, qualifies client requirements, books appointments, and captures lead data 24/7 — even when you are on site, driving, or closed for the evening.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                { title: "24/7 Call Answering", desc: "Zero missed enquiries; answers instantly day or night." },
                { title: "Natural British Voice", desc: "Speaks naturally in clear, professional British English." },
                { title: "Requirement Qualification", desc: "Captures caller name, phone number, location, and job urgency." },
                { title: "Instant Notification Alerts", desc: "Sends structured summaries straight to WhatsApp and email." },
              ].map((feat, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1 shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#14243A]">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>{feat.title}</span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed pl-6">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/ai-receptionist"
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs inline-flex items-center gap-2 transition-all shadow-sm"
              >
                <span>Learn More About AI Receptionist</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={SITE_CONFIG.getWhatsAppLink("ai-receptionist")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-[#F5F8FC] border border-[#E2E8F0] text-[#14243A] font-bold text-xs inline-flex items-center gap-2 transition-colors"
              >
                <span>Ask via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Call Simulation Card (Light Theme) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-xl relative">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                    <PhoneCall className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#14243A]">AI Receptionist Active</h4>
                    <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                      Live Inbound Call (00:42)
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#F5F8FC] border border-[#E2E8F0] text-[#64748B]">
                  UK Landline / Mobile
                </span>
              </div>

              {/* Simulated Dialogue */}
              <div className="space-y-3 font-sans text-xs mb-6">
                <div className="p-3 rounded-2xl bg-[#F5F8FC] border border-[#E2E8F0] text-[#475569]">
                  <span className="font-bold text-[#14243A] block mb-0.5">Caller:</span>
                  &quot;Hi, I need an urgent quote for electrical rewiring for a commercial property in Birmingham.&quot;
                </div>
                <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200 text-blue-900">
                  <span className="font-bold text-blue-700 block mb-0.5">CortexHive AI Receptionist:</span>
                  &quot;Understood. We handle commercial rewiring projects across the West Midlands. May I take your name and preferred contact number so an engineer can call you back with details?&quot;
                </div>
                <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                  <span className="font-bold text-emerald-800 block mb-0.5">Automated Action:</span>
                  &quot;Lead logged: David M., Birmingham B2. Commercial rewiring urgent. Dispatched to team WhatsApp.&quot;
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0] flex items-center justify-between text-xs font-semibold text-[#14243A]">
                <span>Ready to deploy for your business</span>
                <span className="text-blue-600 font-bold">From 48hr setup</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
