"use client";

import Link from "next/link";
import {
  Bot,
  Layers,
  ArrowRight,
  CheckCircle2,
  MailCheck,
  FileText,
  Workflow,
  Bell,
  MessageSquare,
  HelpCircle,
  ClipboardCheck,
  LayoutDashboard,
  Users,
  Database,
  Code2,
  Cpu,
} from "lucide-react";

const AUTOMATION_EXAMPLES = [
  {
    icon: MailCheck,
    title: "Automatically Processing Enquiries",
    desc: "Capture new website and email enquiries, organise customer details, and route urgent leads to the right team member automatically.",
  },
  {
    icon: HelpCircle,
    title: "Responding to Customer Questions",
    desc: "Provide instant, accurate answers to common customer questions about your services, opening hours, availability and pricing.",
  },
  {
    icon: FileText,
    title: "Generating Documents",
    desc: "Automatically prepare quotes, proposals, job sheets, onboarding packs and standard business correspondence from simple inputs.",
  },
  {
    icon: ClipboardCheck,
    title: "Managing Repetitive Administration",
    desc: "Eliminate manual copy-pasting between spreadsheets, emails, forms and accounting tools so your team can focus on customers.",
  },
  {
    icon: Workflow,
    title: "Connecting Business Applications",
    desc: "Link your website, CRM, booking calendar, email and internal tools so information flows smoothly without duplicate data entry.",
  },
  {
    icon: Bell,
    title: "Automated Notifications & Follow-Ups",
    desc: "Send timely appointment reminders, quote follow-ups and status updates via email, SMS or WhatsApp where configured.",
  },
  {
    icon: MessageSquare,
    title: "AI-Powered Customer Support",
    desc: "Help customers find answers, submit support requests and track enquiries 24/7 with assistants trained on your business information.",
  },
];

const SOFTWARE_HIGHLIGHTS = [
  { icon: Code2, label: "Custom web applications" },
  { icon: Layers, label: "SaaS platforms" },
  { icon: Users, label: "Customer portals" },
  { icon: LayoutDashboard, label: "Management dashboards" },
  { icon: Database, label: "Internal business systems" },
  { icon: Workflow, label: "API integrations" },
  { icon: Cpu, label: "AI-powered applications" },
];

export default function ServiceDivisions() {
  const scrollToContact = (service: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("cortexhive:select-package", {
          detail: { serviceRequired: service },
        })
      );
      const el = document.querySelector("#contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* SECTION 5 — AI AUTOMATION */}
      <section id="ai-automation" className="py-20 sm:py-28 bg-white border-b border-[#E2E8F0] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-10 mb-12 border-b border-[#E2E8F0]">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F8FC] border border-[#E2E8F0] text-xs font-bold uppercase tracking-wider text-blue-600">
                <Bot className="w-3.5 h-3.5" />
                <span>AI Business Automation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#14243A] tracking-tight leading-[1.12]">
                Make Your Business Work Smarter.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                Stop losing valuable hours to repetitive administrative tasks. We design practical AI automations that connect your everyday tools, handle routine enquiries and keep your operations moving smoothly.
              </p>
            </div>
          </div>

          {/* 7 Practical Automation Examples Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {AUTOMATION_EXAMPLES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`p-6 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] hover:border-blue-300 transition-all flex flex-col justify-between ${
                    idx === 6 ? "md:col-span-2 lg:col-span-3" : ""
                  }`}
                >
                  <div className={idx === 6 ? "flex flex-col sm:flex-row sm:items-center gap-4" : "space-y-3"}>
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] text-blue-600 flex items-center justify-center flex-shrink-0 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#14243A]">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section CTA */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-6 rounded-2xl bg-[#F5F8FC] border border-[#E2E8F0]">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[#14243A]">
                Want to reduce manual admin in your business?
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] mt-0.5">
                Tell us which repetitive tasks take up your time and we will recommend a practical automation solution.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0">
              <button
                type="button"
                onClick={() => scrollToContact("AI & Workflow Automation")}
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-[#14243A] text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <span>Discuss Your Automation Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/ai-automation"
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#14243A] border border-slate-300 font-semibold text-xs sm:text-sm inline-flex items-center justify-center transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — CUSTOM SOFTWARE AND SAAS DEVELOPMENT */}
      <section id="custom-software" className="py-20 sm:py-28 bg-[#F5F8FC] border-b border-[#E2E8F0] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 6 Columns: Content & Highlights */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-xs font-bold uppercase tracking-wider text-blue-600">
                <Layers className="w-3.5 h-3.5" />
                <span>Custom Software &amp; SaaS Development</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#14243A] tracking-tight leading-[1.12]">
                Have an Idea? Let&apos;s Build It.
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-[#475569] leading-relaxed">
                When off-the-shelf tools don&apos;t fit how your business works — or when you want to launch a new digital product — we design and develop custom software built around your exact requirements.
              </p>

              {/* 7 Software Capabilities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {SOFTWARE_HIGHLIGHTS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] flex items-center gap-3 shadow-2xs"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-[#14243A]">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#475569] leading-relaxed">
                <strong className="text-[#14243A]">Individual Scoping &amp; Quotations:</strong> Every custom software and SaaS project is scoped and quoted individually based on your features, user roles, integrations and delivery milestones.
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
                <button
                  type="button"
                  onClick={() => scrollToContact("Custom Software & SaaS")}
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-[#14243A] text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/software-development"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-[#14243A] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Explore Software Development</span>
                </Link>
              </div>
            </div>

            {/* Right 6 Columns: Attractive Software Dashboard Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-white border border-[#E2E8F0] shadow-subtle overflow-hidden">
                {/* Dashboard Top Bar */}
                <div className="px-5 py-3.5 bg-[#14243A] text-white flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <LayoutDashboard className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-bold tracking-wide">
                      Custom Operations &amp; SaaS Portal Preview
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-sky-300">
                    Role-Based Access
                  </span>
                </div>

                {/* Dashboard Body */}
                <div className="p-5 sm:p-6 space-y-5 bg-[#F8FAFD]">
                  {/* Top Metric Summary Cards */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0]">
                      <span className="text-[10px] font-semibold text-[#64748B] uppercase block">
                        User Portals
                      </span>
                      <span className="text-sm sm:text-base font-extrabold text-[#14243A] mt-1 block">
                        Client &amp; Admin
                      </span>
                      <span className="text-[10px] text-emerald-600 font-semibold mt-0.5 block">
                        Secure Login
                      </span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0]">
                      <span className="text-[10px] font-semibold text-[#64748B] uppercase block">
                        Data &amp; APIs
                      </span>
                      <span className="text-sm sm:text-base font-extrabold text-[#14243A] mt-1 block">
                        Cloud Sync
                      </span>
                      <span className="text-[10px] text-blue-600 font-semibold mt-0.5 block">
                        Real-Time
                      </span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0]">
                      <span className="text-[10px] font-semibold text-[#64748B] uppercase block">
                        Ownership
                      </span>
                      <span className="text-sm sm:text-base font-extrabold text-[#14243A] mt-1 block">
                        100% Yours
                      </span>
                      <span className="text-[10px] text-[#64748B] font-semibold mt-0.5 block">
                        Full Handover
                      </span>
                    </div>
                  </div>

                  {/* Interactive Modules List */}
                  <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                      <span className="text-xs font-bold text-[#14243A]">
                        Example Custom Software Modules
                      </span>
                      <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                        Tailored to Your Workflow
                      </span>
                    </div>

                    {[
                      {
                        module: "Customer & Staff Portals",
                        detail: "Secure accounts, role permissions, document uploads & status tracking",
                        status: "Custom Built",
                      },
                      {
                        module: "Management & Reporting Dashboards",
                        detail: "Live operational visibility, KPIs, scheduling & automated exports",
                        status: "Real-Time",
                      },
                      {
                        module: "Payments, Subscriptions & Invoicing",
                        detail: "Stripe billing, tiered SaaS plans & automated receipt workflows",
                        status: "Integrated",
                      },
                      {
                        module: "AI & Third-Party API Connections",
                        detail: "Connect OpenAI, CRM systems, accounting software & custom databases",
                        status: "Connected",
                      },
                    ].map((row) => (
                      <div
                        key={row.module}
                        className="flex items-start justify-between gap-3 py-2 border-b border-slate-100 last:border-0 last:pb-0"
                      >
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="text-xs font-bold text-[#14243A]">{row.module}</div>
                            <div className="text-[11px] text-[#64748B]">{row.detail}</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 whitespace-nowrap">
                          {row.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
