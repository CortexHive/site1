import { Metadata } from "next";
import {
  Bot,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Workflow,
  MailCheck,
  FileSpreadsheet,
  Layers,
} from "lucide-react";
import LeadForm from "@/components/lead-form";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "AI Business Automation & Intelligent Workflows UK | CortexHive",
  description:
    "Practical AI business automation for UK companies. Automate customer enquiry handling, document processing, email workflows, CRM pipelines and business tasks with custom AI pipelines.",
  keywords: [
    "AI automation UK",
    "Business process automation",
    "AI enquiry handling",
    "Automated customer support UK",
    "Document processing AI",
    "Intelligent workflow automation",
    "CRM automation UK",
  ],
};

const AUTOMATION_SOLUTIONS = [
  {
    icon: Bot,
    title: "Automated Customer Enquiry Handling & Triage",
    desc: "Automatically categorize inbound business leads from your website, WhatsApp, and emails, routing high-urgency enquiries to the right person with pre-extracted customer details.",
  },
  {
    icon: MailCheck,
    title: "Automated Email & Communication Workflows",
    desc: "Draft context-aware follow-up emails, quote confirmations, status notifications, and customer onboarding communications without manual copy-pasting.",
  },
  {
    icon: FileSpreadsheet,
    title: "Document Intelligence & OCR Data Extraction",
    desc: "Extract structured data from supplier invoices, receipts, engineering certificates, survey reports, and PDF contracts straight into your database or accounting software.",
  },
  {
    icon: Workflow,
    title: "Cross-Platform CRM & Pipeline Synchronization",
    desc: "Connect your website forms, calendar bookings, WhatsApp chats, and internal tools into unified pipelines across HubSpot, Pipedrive, Airtable, or custom PostgreSQL databases.",
  },
  {
    icon: Cpu,
    title: "Custom Internal Business Knowledge Assistants",
    desc: "Empower your staff to query company handbooks, pricing sheets, technical regulations, and past job documentation in natural language using private vector search (RAG).",
  },
  {
    icon: Layers,
    title: "Automated Operational Reporting",
    desc: "Consolidate weekly numbers, sales updates, job completions, and field reports into concise executive summaries sent directly to Slack, Teams, or your email.",
  },
];

const PRINCIPLES = [
  "Measurable ROI over superficial novelty: We only build automations that measurably save hours or generate revenue.",
  "Human-in-the-loop safeguards: Crucial business decisions and high-value customer communications include approval gates where needed.",
  "Security & strict data isolation: Your proprietary company data is never exposed to public training pools.",
  "Seamless integration with existing tools: No need to replace your existing software—we connect what you already use via APIs and webhooks.",
];

export default function AiAutomationPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold text-purple-700 uppercase tracking-widest shadow-xs">
            <Bot className="w-4 h-4 text-purple-600" />
            <span>Intelligent Operations • United Kingdom</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-950 font-outfit tracking-tight leading-[1.08]">
            Turn Repetitive Tasks into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
              Intelligent Workflows.
            </span>
          </h1>

          <p className="text-lg sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            We build practical AI automations that handle customer enquiries, process documents, sync databases, and streamline operations so your team can focus on growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#quote-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-md hover:shadow-xl transition-all"
            >
              <span>Automate Your Business</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={SITE_CONFIG.getWhatsAppLink("ai-automation")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-bold text-sm transition-all"
            >
              <span>Discuss via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Practical Solutions */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-outfit mt-1">
              Practical AI Workflows for Real Business Challenges
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              Zero generic gimmicks. Every system is built around operational bottlenecks that cost your business time and money.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AUTOMATION_SOLUTIONS.map((sol, i) => {
              const Icon = sol.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-purple-600 flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-slate-950 font-outfit">
                      {sol.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {sol.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Business Discipline & Principles */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Our AI Engineering Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-outfit">
              We Don&apos;t Just Talk About AI. We Build Working Pipelines.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {PRINCIPLES.map((pr, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-800/70 border border-slate-700/60">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                  {pr}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Form */}
        <div id="quote-form" className="pt-6">
          <LeadForm defaultService="AI Automation" />
        </div>
      </div>
    </div>
  );
}
