"use client";

import Link from "next/link";
import {
  PhoneCall,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export default function HomeAiReceptionistSpotlight() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left 7 Columns: Editorial Specification */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-blue-600 font-semibold">
              04 // AUTONOMOUS TELEPHONY &amp; VOICE AI
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#090D16] tracking-[-0.025em] leading-[1.1]">
              Never Miss Another Inbound Client Call.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Every unanswered call is a high-intent customer dialling the next competitor on Google. CortexHive engineers conversational AI voice receptionists that pick up within two rings, speak natural British English, qualify job requirements, and dispatch structured lead summaries straight to your phone.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                {
                  title: "24/7 Instant Response",
                  desc: "Answers calls immediately while you are in meetings, on site, or closed for the evening.",
                },
                {
                  title: "Natural British Voice",
                  desc: "Low-latency conversational voice engine tuned to your exact business terminology.",
                },
                {
                  title: "Structured Lead Triage",
                  desc: "Captures caller name, telephone, postcode, service requirement, and urgency.",
                },
                {
                  title: "WhatsApp & CRM Dispatch",
                  desc: "Sends real-time call transcripts and structured summaries to your team immediately.",
                },
              ].map((feat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#090D16]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span>{feat.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-5">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/ai-receptionist"
                className="px-6 py-3.5 rounded-lg bg-[#0F172A] hover:bg-blue-600 text-white font-semibold text-xs inline-flex items-center gap-2 transition-colors"
              >
                <span>Explore Voice AI Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={SITE_CONFIG.getWhatsAppLink("ai-receptionist")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-[#0F172A] font-semibold text-xs inline-flex items-center gap-2 transition-colors"
              >
                <span>Request Live Voice Demo</span>
              </a>
            </div>
          </div>

          {/* Right 5 Columns: Telemetry Transcript Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-7 shadow-[0_12px_32px_-12px_rgba(15,23,42,0.08)]">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0F172A] text-white flex items-center justify-center">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#090D16] uppercase tracking-wider font-mono">
                      VOICE AGENT TELEMETRY
                    </h3>
                    <span className="text-[11px] text-emerald-700 font-mono flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      ACTIVE CALL // 00:42
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600">
                  UK PSTN / SIP
                </span>
              </div>

              <div className="space-y-3 text-xs mb-6">
                <div className="p-3.5 rounded-lg bg-white border border-slate-200 text-slate-700">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                    INBOUND CALLER
                  </span>
                  &quot;Hi, we need a commercial electrical survey and rewiring quote for an office unit in Birmingham.&quot;
                </div>
                <div className="p-3.5 rounded-lg bg-white border-l-2 border-l-blue-600 border border-slate-200 text-[#0F172A]">
                  <span className="text-[10px] font-mono uppercase text-blue-600 font-semibold block mb-1">
                    CORTEXHIVE VOICE AI
                  </span>
                  &quot;Certainly. We cover commercial electrical installations across Birmingham. Could I take your name, postcode, and best contact number so our lead engineer can call you back today?&quot;
                </div>
                <div className="p-3.5 rounded-lg bg-emerald-50/70 border border-emerald-200 text-emerald-950 font-mono text-[11px]">
                  <span className="font-bold text-emerald-800 block mb-0.5">
                    [WEBHOOK DISPATCHED]
                  </span>
                  Lead qualified: David M. (B2) — Commercial Rewire. Sent to WhatsApp &amp; CRM.
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>EXISTING UK NUMBER COMPATIBLE</span>
                <span className="text-[#0F172A] font-semibold">CALL FORWARDING</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
