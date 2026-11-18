"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Bot,
  Layers,
  Code2,
  PhoneCall,
  CheckCircle2,
  ExternalLink,
  Workflow,
  Sparkles,
} from "lucide-react";

type ShowcaseTab = "websites" | "ai" | "software";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<ShowcaseTab>("websites");

  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative bg-white pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-slate-200 overflow-hidden">
        {/* Subtle dot grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:28px_28px] opacity-45 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left 7 Columns: Core Messaging & CTAs */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5F8FC] border border-[#E2E8F0]">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="text-xs font-semibold text-[#14243A] tracking-wide">
                  UK Digital Technology, AI Automation &amp; Software Agency
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#14243A] tracking-[-0.03em] leading-[1.08]">
                  Technology That Moves Your{" "}
                  <span className="text-blue-600">Business Forward.</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-[#475569] leading-relaxed max-w-2xl font-normal">
                  From professional websites to intelligent AI automation and custom software, CortexHive helps businesses simplify operations, attract customers and turn ideas into working digital products.
                </p>
              </div>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
                <button
                  type="button"
                  onClick={() => scrollTo("#contact")}
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-[#14243A] text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2.5 transition-colors shadow-sm"
                >
                  <span>Get a Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollTo("#capabilities")}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-[#F5F8FC] text-[#14243A] border border-slate-300 font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Explore Our Services</span>
                </button>
              </div>

              {/* Three Short Supporting Statements */}
              <div className="pt-5 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 max-w-2xl">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-[#14243A] leading-snug">
                    Websites built for business growth.
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-[#14243A] leading-snug">
                    AI that works around the clock.
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-[#14243A] leading-snug">
                    Software designed around your needs.
                  </span>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Interactive Solution Showcase Visual */}
            <div className="lg:col-span-5 w-full">
              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFD] shadow-[0_14px_40px_-14px_rgba(20,36,58,0.08)] overflow-hidden">
                {/* Panel Header */}
                <div className="px-5 py-3.5 bg-white border-b border-[#E2E8F0] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-bold text-[#14243A]">
                      CortexHive Digital Solutions
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    UK Agency
                  </span>
                </div>

                {/* 3-Tab Switcher */}
                <div className="grid grid-cols-3 border-b border-[#E2E8F0] bg-slate-100/80 p-1 gap-1">
                  <button
                    type="button"
                    onClick={() => setActiveTab("websites")}
                    className={`py-2 px-2 rounded-lg text-[11px] sm:text-xs font-semibold transition-all text-center ${
                      activeTab === "websites"
                        ? "bg-white text-[#14243A] shadow-2xs border border-slate-200/80"
                        : "text-slate-600 hover:text-[#14243A]"
                    }`}
                  >
                    Websites
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("ai")}
                    className={`py-2 px-2 rounded-lg text-[11px] sm:text-xs font-semibold transition-all text-center ${
                      activeTab === "ai"
                        ? "bg-white text-[#14243A] shadow-2xs border border-slate-200/80"
                        : "text-slate-600 hover:text-[#14243A]"
                    }`}
                  >
                    AI &amp; Voice
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("software")}
                    className={`py-2 px-2 rounded-lg text-[11px] sm:text-xs font-semibold transition-all text-center ${
                      activeTab === "software"
                        ? "bg-white text-[#14243A] shadow-2xs border border-slate-200/80"
                        : "text-slate-600 hover:text-[#14243A]"
                    }`}
                  >
                    Software &amp; SaaS
                  </button>
                </div>

                {/* Tab Content */}
                <div className="p-5 space-y-4">
                  {activeTab === "websites" && (
                    <div className="space-y-3.5">
                      <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                            Small Business &amp; Commercial Websites
                          </span>
                          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                            From £99
                          </span>
                        </div>
                        <h2 className="text-sm font-bold text-[#14243A]">
                          Designed to Turn Visitors Into Customer Enquiries
                        </h2>
                        <p className="text-xs text-[#475569] leading-relaxed">
                          Mobile-friendly websites for tradespeople, local service providers, startups and growing UK companies — complete with enquiry forms, WhatsApp chat and on-page SEO.
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <Link
                          href="/pricing#starter"
                          className="p-3 rounded-xl bg-white border border-[#E2E8F0] hover:border-blue-300 transition-colors text-center"
                        >
                          <div className="text-[10px] font-semibold text-slate-500 uppercase">Starter</div>
                          <div className="text-sm font-extrabold text-[#14243A] mt-0.5">£99</div>
                          <div className="text-[10px] text-slate-500">1 Page</div>
                        </Link>
                        <Link
                          href="/pricing#business"
                          className="p-3 rounded-xl bg-blue-50/60 border border-blue-200 hover:border-blue-400 transition-colors text-center"
                        >
                          <div className="text-[10px] font-bold text-blue-700 uppercase">Business</div>
                          <div className="text-sm font-extrabold text-[#14243A] mt-0.5">£349</div>
                          <div className="text-[10px] text-blue-700">Up to 5 Pages</div>
                        </Link>
                        <Link
                          href="/pricing#growth"
                          className="p-3 rounded-xl bg-white border border-[#E2E8F0] hover:border-blue-300 transition-colors text-center"
                        >
                          <div className="text-[10px] font-semibold text-slate-500 uppercase">Growth</div>
                          <div className="text-sm font-extrabold text-[#14243A] mt-0.5">£699</div>
                          <div className="text-[10px] text-slate-500">Up to 10 Pages</div>
                        </Link>
                      </div>
                    </div>
                  )}

                  {activeTab === "ai" && (
                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded-xl border border-[#E2E8F0]">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 flex items-center gap-1.5">
                            <PhoneCall className="w-3.5 h-3.5" />
                            24/7 AI Receptionist
                          </span>
                          <span className="text-[10px] font-semibold text-slate-500">UK Phone Lines</span>
                        </div>
                        <h3 className="text-sm font-bold text-[#14243A]">
                          Answers Calls &amp; Captures Leads While You Work
                        </h3>
                        <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                          Handles incoming customer calls politely, collects contact details and job information, and sends instant call summaries to your phone.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-xl border border-[#E2E8F0]">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 flex items-center gap-1.5">
                            <Workflow className="w-3.5 h-3.5" />
                            Business Workflow Automation
                          </span>
                          <span className="text-[10px] font-semibold text-slate-500">Custom Scoped</span>
                        </div>
                        <h3 className="text-sm font-bold text-[#14243A]">
                          Eliminate Repetitive Admin Tasks
                        </h3>
                        <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                          Automate enquiry follow-ups, document generation, invoice data extraction and app integrations across your business.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === "software" && (
                    <div className="space-y-2.5">
                      <div className="text-xs font-semibold text-[#14243A] px-1">
                        Verified Products &amp; Platforms Built by CortexHive:
                      </div>
                      {[
                        {
                          name: "MarkScheme",
                          badge: "Owned Product",
                          desc: "11+ exam platform with 250+ practice & mock papers.",
                          url: "https://www.markscheme.co.uk/",
                        },
                        {
                          name: "AuraPDF",
                          badge: "Owned Product",
                          desc: "Privacy-first PDF & document software utility.",
                        },
                        {
                          name: "Rydigo",
                          badge: "Owned Product",
                          desc: "Digital community & tools platform for private hire drivers.",
                        },
                        {
                          name: "Skyview",
                          badge: "Client Project",
                          desc: "Course discovery & consultation platform for Skyview.",
                          url: "https://skyview.org.uk/",
                        },
                      ].map((prod) => (
                        <div
                          key={prod.name}
                          className="p-3 rounded-xl bg-white border border-[#E2E8F0] flex items-start justify-between gap-2"
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-[#14243A]">{prod.name}</span>
                              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                                {prod.badge}
                              </span>
                            </div>
                            <p className="text-[11px] text-[#475569] mt-0.5">{prod.desc}</p>
                          </div>
                          {prod.url && (
                            <a
                              href={prod.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 hover:text-blue-600 p-1"
                              title={`Visit ${prod.name}`}
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Showcase Footer */}
                  <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between text-xs">
                    <Link
                      href="/our-products"
                      className="font-semibold text-slate-600 hover:text-[#14243A] transition-colors"
                    >
                      View Portfolio &rarr;
                    </Link>
                    <button
                      type="button"
                      onClick={() => scrollTo("#contact")}
                      className="font-semibold text-blue-600 hover:text-[#14243A] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Request a Free Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — TRUST AND CAPABILITIES */}
      <section id="capabilities" className="py-14 sm:py-20 bg-[#F5F8FC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#14243A] tracking-tight">
              Practical Digital Solutions Under One Roof
            </h2>
            <p className="text-xs sm:text-base text-[#475569] mt-2 leading-relaxed">
              Whether you are a local business looking to win more enquiries or an organisation building custom software, we deliver solutions tailored to your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            <Link
              href="/website-design"
              className="group bg-white rounded-2xl p-6 border border-[#E2E8F0] hover:border-blue-300 shadow-subtle hover:shadow-hover transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#14243A] group-hover:text-blue-600 transition-colors">
                  Website Development
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
                  Fast, mobile-friendly websites for small businesses, tradespeople and established companies designed to generate customer enquiries.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                <span>Explore Websites</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>

            <Link
              href="/ai-automation"
              className="group bg-white rounded-2xl p-6 border border-[#E2E8F0] hover:border-blue-300 shadow-subtle hover:shadow-hover transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Bot className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#14243A] group-hover:text-blue-600 transition-colors">
                  AI Automation
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
                  24/7 AI phone answering, automated enquiry handling, document processing and connected workflows that save hours of manual admin.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                <span>Explore AI Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>

            <Link
              href="/software-development"
              className="group bg-white rounded-2xl p-6 border border-[#E2E8F0] hover:border-blue-300 shadow-subtle hover:shadow-hover transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#14243A] group-hover:text-blue-600 transition-colors">
                  Custom Software
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
                  Bespoke web applications, customer portals, management dashboards and internal systems built around your exact business workflow.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                <span>Explore Custom Software</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>

            <Link
              href="/saas-development"
              className="group bg-white rounded-2xl p-6 border border-[#E2E8F0] hover:border-blue-300 shadow-subtle hover:shadow-hover transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#14243A] group-hover:text-blue-600 transition-colors">
                  SaaS Development
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
                  End-to-end SaaS platforms, multi-user dashboards, subscription billing integrations and MVPs for founders and growing companies.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                <span>Explore SaaS Development</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
