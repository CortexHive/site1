"use client";

import Link from "next/link";
import {
  Globe,
  Bot,
  Layers,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function ServiceDivisions() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F8FAFD] border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 uppercase tracking-widest mb-4">
            Commercial Divisions
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#14243A] tracking-tight mb-4">
            Digital Solutions for Modern Businesses.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
            We operate three specialized divisions designed to solve practical business challenges — from getting online affordably to deploying autonomous AI agents and building complete software products.
          </p>
        </div>

        {/* 3 Main Commercial Division Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* DIVISION A: WEBSITES & DIGITAL PRESENCE */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-blue-600/20 hover:border-blue-600 shadow-subtle hover:shadow-hover transition-all duration-300 flex flex-col justify-between relative group">
            <div>
              {/* Header & Badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Starting from £99
                </span>
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
                Division 01
              </div>
              <h3 className="text-2xl font-extrabold text-[#14243A] mb-3">
                Websites &amp; Digital Presence
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6 font-normal">
                Professional websites that help small businesses establish their online presence and attract customers.
              </p>

              <div className="border-t border-[#E2E8F0] pt-5 mb-8">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block mb-3">
                  Services Provided:
                </span>
                <ul className="space-y-2.5">
                  {[
                    "Affordable business websites",
                    "One-page websites (from £99)",
                    "Multi-page websites (from £349)",
                    "High-converting landing pages",
                    "E-commerce websites",
                    "Website redesigns",
                    "Booking and enquiry websites",
                    "Website maintenance & care plans",
                  ].map((service, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#334155] font-medium leading-snug">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/pricing"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
              >
                <span>Explore Website Packages</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* DIVISION B: AI, AUTOMATION & INTELLIGENT AGENTS */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] hover:border-sky-500 shadow-subtle hover:shadow-hover transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Header & Badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-slate-100 text-[#475569] border border-[#CBD5E1]">
                  Contact for Pricing
                </span>
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-1">
                Division 02
              </div>
              <h3 className="text-2xl font-extrabold text-[#14243A] mb-3">
                AI, Automation &amp; Intelligent Agents
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6 font-normal">
                Build intelligent AI solutions that automate repetitive work, improve customer experiences and streamline business operations.
              </p>

              <div className="border-t border-[#E2E8F0] pt-5 mb-8">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block mb-3">
                  Services Provided:
                </span>
                <ul className="space-y-2.5">
                  {[
                    "Custom AI agents",
                    "AI customer support assistants",
                    "AI voice agents",
                    "AI receptionists",
                    "Automated enquiry handling",
                    "Business process automation",
                    "Document intelligence",
                    "AI-powered knowledge assistants",
                    "Custom AI integrations",
                    "AI API development",
                  ].map((service, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#334155] font-medium leading-snug">
                      <CheckCircle2 className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/ai-automation"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-[#14243A] hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
              >
                <span>Explore AI Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* DIVISION C: SOFTWARE, SAAS & DIGITAL PLATFORMS */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] hover:border-indigo-500 shadow-subtle hover:shadow-hover transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Header & Badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-slate-100 text-[#475569] border border-[#CBD5E1]">
                  Contact for Pricing
                </span>
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">
                Division 03
              </div>
              <h3 className="text-2xl font-extrabold text-[#14243A] mb-3">
                Software, SaaS &amp; Digital Platforms
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6 font-normal">
                Turn business ideas into functional digital products, custom applications and scalable software platforms.
              </p>

              <div className="border-t border-[#E2E8F0] pt-5 mb-8">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block mb-3">
                  Services Provided:
                </span>
                <ul className="space-y-2.5">
                  {[
                    "SaaS development",
                    "Custom business software",
                    "Web applications",
                    "Subscription platforms",
                    "Customer portals",
                    "Admin dashboards",
                    "Education technology (EdTech)",
                    "Marketplace development",
                    "Booking systems",
                    "API & database integrations",
                    "MVP development",
                  ].map((service, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#334155] font-medium leading-snug">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/software-development"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-[#14243A] hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
              >
                <span>Explore Software Development</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}