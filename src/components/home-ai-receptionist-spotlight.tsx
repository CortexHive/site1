"use client";

import { useState } from "react";
import Link from "next/link";
import {
  PhoneCall,
  ArrowRight,
  Check,
  MessageSquare,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

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

const EXAMPLE_SCENARIOS = [
  {
    id: "trades",
    label: "Trades & Heating",
    business: "Example Heating & Plumbing",
    callerMsg:
      "Hi, our boiler has lost pressure and we need an engineer in Manchester as soon as possible.",
    aiResponse:
      "Thank you for calling. I can log this enquiry for our engineer right away. Could I take your full name, postcode, and best callback number?",
    summaryDispatch:
      "Call summary generated and sent to supported email/WhatsApp: Boiler pressure fault — M20 postcode — Caller contact details recorded.",
  },
  {
    id: "cleaning",
    label: "Cleaning & Window",
    business: "Example Window & Cleaning Services",
    callerMsg:
      "Hello, do you cover regular window and gutter cleaning for 3-bedroom homes in Leeds?",
    aiResponse:
      "Yes, we cover residential window and gutter cleaning across Leeds. May I take your name, postcode and mobile number so we can send you a quote?",
    summaryDispatch:
      "Call summary generated: Residential window & gutter clean enquiry (Leeds) — Contact details captured for quotation.",
  },
  {
    id: "appointments",
    label: "Appointment Businesses",
    business: "Example Clinic & Salon",
    callerMsg:
      "Good afternoon, I'd like to enquire about booking an appointment next Thursday.",
    aiResponse:
      "Good afternoon. I'd be happy to help log your appointment request. Could I take your name, preferred time on Thursday, and mobile number?",
    summaryDispatch:
      "Call summary generated: Thursday appointment request logged and routed to business team.",
  },
];

export default function HomeAiReceptionistSpotlight() {
  const [activeId, setActiveId] = useState("trades");
  const scenario =
    EXAMPLE_SCENARIOS.find((s) => s.id === activeId) || EXAMPLE_SCENARIOS[0];

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

          {/* Right 5 Columns: Illustrative Call Scenario Panel */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-[#E2E8F0] bg-white overflow-hidden shadow-subtle">
              <div className="px-5 py-4 border-b border-[#E2E8F0] flex items-center justify-between gap-2 bg-[#F8FAFD]">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#14243A]">
                    Example Call Handling Scenarios
                  </h3>
                  <span className="text-[11px] text-[#64748B] block">
                    Illustrative conversation walkthrough
                  </span>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-white border border-[#E2E8F0] text-[#475569]">
                  Example Only
                </span>
              </div>

              {/* Scenario Selector Tabs */}
              <div className="grid grid-cols-3 border-b border-[#E2E8F0] bg-white">
                {EXAMPLE_SCENARIOS.map((scen) => {
                  const isActive = activeId === scen.id;
                  return (
                    <button
                      key={scen.id}
                      type="button"
                      onClick={() => setActiveId(scen.id)}
                      className={`py-3 px-2 text-[11px] font-semibold text-center transition-colors relative border-r last:border-r-0 border-[#E2E8F0] ${
                        isActive
                          ? "bg-[#F8FAFD] text-blue-600"
                          : "text-[#64748B] hover:text-[#14243A]"
                      }`}
                    >
                      {scen.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Conversation Transcript */}
              <div className="p-5 sm:p-6 space-y-4 text-xs">
                <div className="p-3.5 rounded-lg bg-[#F8FAFD] border border-[#E2E8F0] text-[#475569]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] block mb-1">
                    Incoming Caller
                  </span>
                  &ldquo;{scenario.callerMsg}&rdquo;
                </div>

                <div className="p-3.5 rounded-lg bg-white border-l-2 border-l-blue-600 border border-[#E2E8F0] text-[#14243A]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block mb-1">
                    AI Receptionist ({scenario.business})
                  </span>
                  &ldquo;{scenario.aiResponse}&rdquo;
                </div>

                <div className="p-3.5 rounded-lg bg-[#F5F8FC] border border-[#E2E8F0] text-[#14243A] text-[11px] leading-relaxed">
                  <span className="font-bold text-blue-700 block mb-0.5">
                    Post-Call Summary &amp; Routing
                  </span>
                  {scenario.summaryDispatch}
                </div>

                <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] text-[#64748B]">
                  <span>Tailored to your business script</span>
                  <Link
                    href="/ai-receptionist#demo-form"
                    className="font-semibold text-blue-600 hover:text-[#14243A]"
                  >
                    Request Implementation Info &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
