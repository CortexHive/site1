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
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-bold text-cyan-300 uppercase tracking-widest">
              <Bot className="w-4 h-4 text-cyan-400" />
              <span>Voice AI &amp; Telephony Solutions</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit tracking-tight leading-tight text-white">
              Never Miss Another{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Business Enquiry.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              An AI-powered receptionist that answers your business calls, captures leads and helps you stay connected with customers – even when you&apos;re busy on a job site, driving, or closed for the evening.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                { title: "24/7 Call Answering", desc: "Zero busy signals; picks up after 2 rings day or night." },
                { title: "Natural Conversational Voice", desc: "Speaks naturally in professional British English." },
                { title: "Lead & Postcode Qualification", desc: "Logs caller name, telephone, address, and job urgency." },
                { title: "Instant SMS & Email Alerts", desc: "Receive structured lead summaries straight to your smartphone." },
              ].map((feat, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{feat.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed pl-6">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/ai-receptionist"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold text-xs shadow-md transition-all"
              >
                <span>Learn About AI Receptionist</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={SITE_CONFIG.getWhatsAppLink("ai-receptionist")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-xs transition-all"
              >
                <span>WhatsApp Telephony Team</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-slate-700 hover:border-cyan-400/50 text-slate-300 hover:text-white text-xs font-semibold transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
                <span>Call: {SITE_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Simulated Call Card */}
          <div className="lg:col-span-5 bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-700/80 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                  <PhoneCall className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Live Inbound Call Triage</h4>
                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Incoming Call Connected
                  </span>
                </div>
              </div>
              <span className="text-[11px] font-mono text-slate-400">00:42</span>
            </div>

            {/* Simulated transcript snippet */}
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/60 text-slate-300">
                <strong className="text-cyan-400 block mb-0.5">AI Receptionist:</strong>
                &ldquo;Good afternoon, thank you for calling Apex Electricals. I can assist with emergency callouts or booking an inspection. May I take your name and postcode?&rdquo;
              </div>

              <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-800/40 text-slate-200">
                <strong className="text-slate-400 block mb-0.5">Caller (Homeowner):</strong>
                &ldquo;Hi, my consumer unit tripped and won&apos;t reset. I&apos;m in SE15 Peckham, can someone come out today?&rdquo;
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/60 text-slate-300">
                <strong className="text-cyan-400 block mb-0.5">AI Receptionist:</strong>
                &ldquo;Understood, that sounds urgent. I&apos;ve flagged this as high priority for Peckham postcodes and texted your details to David, the senior engineer on duty. He will call back within 15 minutes.&rdquo;
              </div>
            </div>

            {/* Instant SMS Alert simulation */}
            <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-[11px] text-emerald-300 space-y-1">
              <div className="flex items-center justify-between font-bold text-emerald-400">
                <span>📱 Instant SMS Alert to Your Phone</span>
                <span>Just Now</span>
              </div>
              <p className="text-slate-300">
                <strong>New Lead:</strong> Mrs. Henderson • 07912 345678 • SE15 • Tripped fusebox emergency • Callback requested.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
