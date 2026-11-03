"use client";

import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Phone,
  Building,
  Wrench,
  Zap,
  Paintbrush,
  Hammer,
  Truck,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

const TRADES = [
  { name: "Builders & Construction", icon: Building },
  { name: "Plumbers & Gas Engineers", icon: Wrench },
  { name: "Electricians", icon: Zap },
  { name: "Painters & Decorators", icon: Paintbrush },
  { name: "Handymen & Maintenance", icon: Hammer },
  { name: "Cleaning & Removals", icon: Truck },
];

export default function HomeTradesSpotlight() {
  return (
    <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Offer Details */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-300 text-[11px] sm:text-xs font-bold text-emerald-900 uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Small Business &amp; Trades Offer</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-outfit tracking-tight leading-tight">
              Your Business Deserves to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
                Be Online.
              </span>
            </h2>

            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed font-medium">
              Get a professional online presence without the expensive agency price tag. Designed specifically for UK tradespeople, sole traders, and local service providers.
            </p>

            {/* Price Badge */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-emerald-200 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block">
                  Professional Starter Website
                </span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-3xl sm:text-4xl font-black font-outfit text-slate-950">£99</span>
                  <span className="text-xs text-slate-500 font-semibold">one-off build fee</span>
                </div>
              </div>
              <Link
                href="/small-business-websites"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all whitespace-nowrap active:scale-98"
              >
                <span>View Full £99 Package</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Inclusions list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {[
                "100% Mobile & Tablet Responsive",
                "Direct WhatsApp Chat & Click-to-Call",
                "Clear Services Breakdown",
                "Interactive Customer Enquiry Form",
                "Basic On-Page Local SEO Setup",
                "Delivered in 3 to 5 Business Days",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={SITE_CONFIG.getWhatsAppLink("small-business-99")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Questions? Chat with us on WhatsApp &rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Column: Targeted Trades Grid */}
          <div className="lg:col-span-5 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-md space-y-5 sm:space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Industry Specific Solutions
              </span>
              <h3 className="text-xl font-bold text-slate-900 font-outfit mt-1">
                Built Around Your Trade
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                We design sites that make it simple for local homeowners and commercial clients to reach you.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {TRADES.map((trade) => {
                const Icon = trade.icon;
                return (
                  <div
                    key={trade.name}
                    className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center gap-2 hover:border-emerald-300 hover:bg-emerald-50/20 transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-emerald-600 flex items-center justify-center shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-800 leading-tight">
                      {trade.name}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-600 leading-relaxed">
              <strong className="text-slate-900 block mb-0.5">Transparent Running Costs:</strong>
              Domain registration and cloud hosting are standard external costs (from £5/mo). No hidden fees, no fake promises.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
