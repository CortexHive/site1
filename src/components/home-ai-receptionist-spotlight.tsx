"use client";

import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import AiReceptionistDemo from "./ai-receptionist-demo";

const CAPABILITIES = [
  "Answers calls on your existing UK number when busy or after hours",
  "Collects caller name, postcode, callback number & job urgency",
  "Trained specifically on your services, areas covered & pricing rules",
  "Sends a structured summary to your WhatsApp or email within seconds",
];

export default function HomeAiReceptionistSpotlight() {
  return (
    <section
      id="ai-receptionist"
      className="py-20 sm:py-28 bg-[#F4F7FB] border-b border-[#DCE6F2]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left 5 Columns: Calm Grounded British Copy & Numbered List */}
          <div className="lg:col-span-5 space-y-7">
            <div className="inline-flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[#143A6B]">
              <span className="w-6 h-[1px] bg-[#143A6B]" />
              <span>AI Receptionist Service</span>
            </div>

            <div className="space-y-4">
              <h2 className="font-extrabold tracking-[-0.03em] text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#0A1628] leading-[1.08]">
                Never miss another{" "}
                <em className="italic text-[#143A6B]">customer</em> call.
              </h2>
              <p className="text-sm sm:text-base text-[#33475F] leading-[1.65]">
                When you are on site, driving, or with a client, an unanswered phone call usually goes straight to the next company on Google. Our AI receptionist answers politely in clear British English and logs the enquiry for you.
              </p>
            </div>

            {/* Hairline Numbered Capabilities List */}
            <ul className="border-t border-[#DCE6F2] divide-y divide-[#DCE6F2]">
              {CAPABILITIES.map((cap, idx) => (
                <li
                  key={cap}
                  className="py-3 flex items-baseline gap-3 text-xs sm:text-sm text-[#0A1628]"
                >
                  <span className="font-mono text-[11px] text-[#C69B3A] font-medium flex-shrink-0">
                    0{idx + 1}
                  </span>
                  <span>{cap}</span>
                </li>
              ))}
            </ul>

            {/* Ongoing Usage Costs Disclosure */}
            <div className="p-4 bg-[#EDF3FA] border-l-2 border-[#143A6B] text-xs text-[#33475F] leading-relaxed">
              <strong className="text-[#0A1628]">Transparent Setup &amp; Usage:</strong>{" "}
              Configuration is quoted upfront around your call workflow. Ongoing telephony and AI voice usage charges apply separately by volume and are agreed clearly before setup.
            </div>

            {/* Tactile CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <Link
                href="/ai-receptionist"
                className="px-6 py-3.5 rounded bg-[#08182E] hover:bg-[#143A6B] text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors"
              >
                <span>Enquire About AI Receptionist</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={SITE_CONFIG.getWhatsAppLink("ai-receptionist")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded bg-white hover:bg-[#EDF3FA]/70 border border-[#C5D6EA] text-[#0A1628] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#143A6B]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right 7 Columns: Grounded UK Call Handling Desk (ElevenLabs Studio Voices Preserved) */}
          <div className="lg:col-span-7">
            <AiReceptionistDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
