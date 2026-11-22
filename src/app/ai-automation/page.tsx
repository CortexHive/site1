import { Metadata } from "next";
import Link from "next/link";
import {
  Bot,
  ArrowRight,
  Workflow,
  MailCheck,
  FileText,
  Bell,
  HelpCircle,
  ClipboardCheck,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
import LeadForm from "@/components/lead-form";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "AI Business Automation Agency UK | CortexHive",
  description:
    "Make your business work smarter with practical AI automation. Automate enquiry processing, customer replies, document generation and repetitive admin across your UK business.",
  keywords: [
    "AI automation agency UK",
    "Business process automation",
    "AI enquiry handling",
    "Workflow automation UK",
    "Automated business workflows",
  ],
  alternates: {
    canonical: "https://cortexhive.co.uk/ai-automation",
  },
  openGraph: {
    title: "AI Business Automation Agency UK | CortexHive",
    description:
      "Automate enquiry processing, repetitive administration, document generation and business notifications.",
    url: "https://cortexhive.co.uk/ai-automation",
  },
};

const PROBLEMS = [
  {
    title: "Hours Lost to Manual Data Entry",
    desc: "Copying customer details between emails, spreadsheets, quotes and job sheets wastes valuable working time every week.",
  },
  {
    title: "Slow Enquiry Follow-Ups",
    desc: "When new enquiries sit unread in an inbox for hours, prospective customers often move on to a faster competitor.",
  },
  {
    title: "Disconnected Business Tools",
    desc: "Using separate tools for website forms, emails, bookings and invoicing without automation creates errors and missed tasks.",
  },
];

const AUTOMATION_CAPABILITIES = [
  {
    icon: MailCheck,
    title: "Automatically Processing Enquiries",
    desc: "Capture incoming enquiries from your website and email, extract customer requirements and log them into your system automatically.",
  },
  {
    icon: HelpCircle,
    title: "Responding to Customer Questions",
    desc: "Send immediate, helpful responses to routine customer questions about services, coverage areas and next steps.",
  },
  {
    icon: FileText,
    title: "Generating Documents",
    desc: "Prepare standard quotes, job sheets, onboarding packs and structured business documents automatically from simple form inputs.",
  },
  {
    icon: ClipboardCheck,
    title: "Managing Repetitive Administration",
    desc: "Automate recurring back-office tasks such as data entry, record updates, status checklists and weekly summaries.",
  },
  {
    icon: Workflow,
    title: "Connecting Different Business Applications",
    desc: "Integrate your website, CRM, calendar, email and accounting tools so information updates across your systems automatically.",
  },
  {
    icon: Bell,
    title: "Automated Notifications & Follow-Ups",
    desc: "Trigger timely SMS, WhatsApp or email reminders for quotes, appointments and customer follow-ups where configured.",
  },
  {
    icon: MessageSquare,
    title: "AI-Powered Customer Support",
    desc: "Deploy helpful website and messaging assistants trained on your business information to support customers 24/7.",
  },
];

const FAQS = [
  {
    q: "Do we need to replace our existing software to use AI automation?",
    a: "No. In most cases we connect the tools you already use — such as your website forms, email, Google Workspace, Microsoft 365, CRM or accounting software.",
  },
  {
    q: "Is AI automation suitable for small businesses?",
    a: "Yes. Even simple automations — such as instant enquiry acknowledgements, quote follow-ups and automated lead logging — save small business owners several hours every week.",
  },
  {
    q: "How much does an AI automation project cost?",
    a: "Automation projects are scoped and quoted individually based on the workflows and applications involved. We provide a free consultation and fixed written quotation before starting.",
  },
  {
    q: "What is the difference between AI Automation and Custom AI Agents?",
    a: "AI Automation focuses on streamlining step-by-step business workflows and connecting applications, while Custom AI Agents act as intelligent assistants that can converse with customers or analyse complex documents.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://cortexhive.co.uk" },
        { "@type": "ListItem", position: 2, name: "AI Automation", item: "https://cortexhive.co.uk/ai-automation" },
      ],
    },
    {
      "@type": "Service",
      name: "AI Business Process Automation",
      provider: { "@id": "https://cortexhive.co.uk/#organization" },
      areaServed: "United Kingdom",
      description:
        "Business process automation and AI workflows for enquiry handling, document generation, application integration and customer follow-ups.",
    },
  ],
};

export default function AiAutomationPage() {
  return (
    <div className="bg-white min-h-screen text-[#475569] pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs text-[#64748B]">
            <Link href="/" className="hover:text-[#14243A] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#14243A] font-semibold">AI Automation</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F8FC] border border-[#E2E8F0] text-xs font-bold text-blue-600 uppercase tracking-wider">
            <Bot className="w-3.5 h-3.5" />
            <span>Business Process Automation UK</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#14243A] tracking-tight leading-[1.1]">
            Make Your Business Work Smarter.
          </h1>

          <p className="text-base sm:text-xl text-[#475569] max-w-3xl mx-auto leading-relaxed">
            Reduce repetitive admin, speed up customer responses and connect your everyday business tools with practical AI workflow automation.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-2">
            <a
              href="#quote-form"
              className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-[#14243A] text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors shadow-xs"
            >
              <span>Discuss Your Automation Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.getWhatsAppLink("ai-automation")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl bg-white hover:bg-[#F5F8FC] border border-slate-300 text-[#14243A] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Problem Statement */}
        <section className="bg-[#F8FAFD] rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">The Problem</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] mt-1">
              Repetitive Admin Slows Down Growing Businesses
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROBLEMS.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0] space-y-2">
                <AlertCircle className="w-5 h-5 text-blue-600" />
                <h3 className="text-base font-bold text-[#14243A]">{p.title}</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Automation Examples */}
        <section id="document-processing" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">What We Automate</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#14243A] mt-1">
              Practical Automation Examples
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AUTOMATION_CAPABILITIES.map((sol, idx) => {
              const Icon = sol.icon;
              return (
                <div
                  key={sol.title}
                  className={`p-6 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] hover:border-blue-300 transition-all space-y-3 ${
                    idx === 6 ? "md:col-span-2 lg:col-span-3" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] text-blue-600 flex items-center justify-center shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#14243A]">{sol.title}</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{sol.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Related AI Services */}
        <section className="bg-[#F5F8FC] rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Related AI Solutions</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#14243A]">
              Looking for 24/7 Phone Answering or Custom AI Agents?
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Explore our dedicated pages for AI voice receptionists and custom AI assistants trained on your business knowledge.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/ai-receptionist"
              className="px-5 py-3 rounded-xl bg-white hover:bg-blue-50 text-[#14243A] border border-[#E2E8F0] text-xs font-semibold transition-colors"
            >
              Explore AI Receptionist &rarr;
            </Link>
            <Link
              href="/ai-agents"
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-[#14243A] text-white text-xs font-semibold transition-colors"
            >
              Explore Custom AI Agents &rarr;
            </Link>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] text-center">
            AI Automation FAQs
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <div key={faq.q} className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0]">
                <h3 className="text-sm sm:text-base font-bold text-[#14243A] mb-1.5">{faq.q}</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Lead Form */}
        <div id="quote-form">
          <LeadForm defaultService="AI Business Automation" />
        </div>
      </div>
    </div>
  );
}
