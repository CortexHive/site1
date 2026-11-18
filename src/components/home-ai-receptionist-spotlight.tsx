"use client";

import { useState } from "react";
import Link from "next/link";
import {
  PhoneCall,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

const CAPABILITIES = [
  "24/7 AI call answering",
  "Natural voice conversations",
  "Customer information collection",
  "Lead qualification",
  "Appointment booking where integrated",
  "Call summaries",
  "WhatsApp notifications where configured",
  "Business-specific conversation handling",
];

const CALL_SCENARIOS = [
  {
    id: "trades",
    label: "Plumbing & Trades",
    business: "Apex Heating & Plumbing",
    callerMsg:
      "Hi, our boiler has lost pressure and we need an engineer in Manchester as soon as possible.",
    aiResponse:
      "Thank you for calling Apex Heating & Plumbing. I can certainly log this for our engineer. Could I take your full name, postcode, and best callback number?",
    summaryDispatch:
      "Call Summary Sent via WhatsApp & Email: Boiler pressure fault — M20 postcode — Customer contact details captured.",
  },
  {
    id: "clinic",
    label: "Salon & Clinic",
    business: "Aura Aesthetics Clinic",
    callerMsg:
      "Hello, I'd like to enquire about booking a skin consultation next Thursday afternoon.",
    aiResponse:
      "Hello! We offer skin consultations on Thursday afternoons. May I take your name and mobile number to check calendar availability or send you our direct booking link?",
    summaryDispatch:
      "Call Summary Sent: Consultation enquiry for Thursday PM — Contact details & booking link dispatched.",
  },
  {
    id: "services",
    label: "Commercial Services",
    business: "Metro Commercial Electrical",
    callerMsg:
      "Good morning, we're looking for a quotation on an office lighting upgrade in Birmingham.",
    aiResponse:
      "Good morning! We cover commercial electrical projects across Birmingham. Could I collect your company name, site postcode, and email address so our team can arrange a site survey?",
    summaryDispatch:
      "Call Summary Sent: Commercial office lighting quote (Birmingham) — Company & contact details recorded.",
  },
];

export default function HomeAiReceptionistSpotlight() {
  const [activeScenarioId, setActiveScenarioId] = useState("trades");
  const activeScenario =
    CALL_SCENARIOS.find((s) => s.id === activeScenarioId) || CALL_SCENARIOS[0];

  return (
    <section id="ai-receptionist" className="py-20 sm:py-28 bg-[#F8FAFD] border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left 7 Columns: Copy & 8 Capabilities */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-xs font-bold uppercase tracking-wider text-blue-600">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>AI Receptionist &amp; Call Answering</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#14243A] tracking-tight leading-[1.12]">
              Never Miss Another Business Opportunity.
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[#475569] leading-relaxed max-w-2xl">
              Your AI receptionist can answer incoming calls, understand customer enquiries, collect information and help manage bookings, even when you&apos;re busy.
            </p>

            {/* 8 Practical Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {CAPABILITIES.map((cap) => (
                <div
                  key={cap}
                  className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] flex items-center gap-2.5 shadow-2xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-[#14243A]">
                    {cap}
                  </span>
                </div>
              ))}
            </div>

            {/* Transparent Cost & Integration Note */}
            <p className="text-xs text-[#64748B] leading-relaxed bg-white/80 p-3.5 rounded-xl border border-[#E2E8F0]">
              <strong className="text-[#14243A]">Transparent Setup &amp; Usage Terms:</strong> Each AI receptionist is configured around your specific business greetings, FAQs and call routing preferences. Third-party calendar integrations, telephony call minutes and ongoing AI voice usage costs may be charged separately according to your call volume.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <Link
                href="/ai-receptionist"
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-[#14243A] text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <span>Explore AI Receptionist</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={SITE_CONFIG.getWhatsAppLink("ai-receptionist")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-[#14243A] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Ask About AI Call Answering</span>
              </a>
            </div>
          </div>

          {/* Right 5 Columns: Interactive Visual Demonstration of an AI Phone Conversation */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-7 shadow-subtle">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#14243A]">
                      Example AI Call Walkthrough
                    </h3>
                    <span className="text-[11px] text-[#64748B] block">
                      Select an industry scenario below
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  Interactive Preview
                </span>
              </div>

              {/* Scenario Switcher */}
              <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-[#F5F8FC] border border-[#E2E8F0] mb-5">
                {CALL_SCENARIOS.map((scen) => (
                  <button
                    key={scen.id}
                    type="button"
                    onClick={() => setActiveScenarioId(scen.id)}
                    className={`py-2 px-2 rounded-lg text-[11px] font-semibold transition-all text-center ${
                      activeScenarioId === scen.id
                        ? "bg-white text-blue-600 shadow-2xs border border-slate-200/80"
                        : "text-slate-600 hover:text-[#14243A]"
                    }`}
                  >
                    {scen.label}
                  </button>
                ))}
              </div>

              {/* Conversation Flow */}
              <div className="space-y-3.5 text-xs">
                <div className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0] text-[#475569]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Incoming Customer Call
                  </span>
                  &ldquo;{activeScenario.callerMsg}&rdquo;
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50/50 border-l-4 border-l-blue-600 border border-blue-200/80 text-[#14243A]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 block mb-1">
                    AI Receptionist ({activeScenario.business})
                  </span>
                  &ldquo;{activeScenario.aiResponse}&rdquo;
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-emerald-950 text-[11px] leading-relaxed">
                  <span className="font-bold text-emerald-800 block mb-0.5">
                    ✓ Instant Notification &amp; Call Summary
                  </span>
                  {activeScenario.summaryDispatch}
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] text-[#64748B]">
                <span>Works with UK mobile &amp; landline numbers</span>
                <Link
                  href="/ai-receptionist#demo-form"
                  className="font-semibold text-blue-600 hover:text-[#14243A]"
                >
                  Request Custom Demo &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
