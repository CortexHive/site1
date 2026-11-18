import { Metadata } from "next";
import Link from "next/link";
import {
  Cpu,
  ArrowRight,
  MessageSquare,
  FileSearch,
  ShieldCheck,
  Workflow,
  Users,
  Bot,
  AlertCircle,
} from "lucide-react";
import LeadForm from "@/components/lead-form";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Custom AI Agents for Businesses UK | CortexHive",
  description:
    "Custom AI agents and intelligent assistants for UK businesses. Deploy AI customer support agents, internal knowledge assistants and document analysis tools.",
  keywords: [
    "AI agents for businesses",
    "Custom AI agents UK",
    "AI customer support agent",
    "Intelligent document processing UK",
    "AI software development",
  ],
  alternates: {
    canonical: "https://cortexhive.co.uk/ai-agents",
  },
  openGraph: {
    title: "Custom AI Agents for Businesses UK | CortexHive",
    description:
      "Tailored AI assistants trained on your business information to support customers and staff 24/7.",
    url: "https://cortexhive.co.uk/ai-agents",
  },
};

const PROBLEMS = [
  {
    title: "Generic Chatbots Frustrate Customers",
    desc: "Basic scripted bots fail when customers ask specific questions about your services, policies or project requirements.",
  },
  {
    title: "Information Buried in Documents",
    desc: "Staff waste time searching across lengthy PDFs, policy handbooks, price lists and past correspondence for answers.",
  },
  {
    title: "Slow Enquiry Qualification",
    desc: "Capturing structured project details from website visitors manually slows down quotation turnaround.",
  },
];

const FEATURES = [
  {
    icon: MessageSquare,
    title: "Customer Support & Enquiry Agents",
    desc: "Website and messaging AI agents trained on your services and FAQs to answer visitor questions and capture qualified leads 24/7.",
  },
  {
    icon: FileSearch,
    title: "Intelligent Document Processing Agents",
    desc: "AI assistants that read, summarise and extract key information from PDFs, contracts, forms and business documents.",
  },
  {
    icon: Users,
    title: "Internal Team Knowledge Assistants",
    desc: "Private AI assistants that help your staff find accurate answers across company guides, operating procedures and documentation.",
  },
  {
    icon: Workflow,
    title: "Action-Taking Workflow Agents",
    desc: "Agents connected to your forms, CRM or database that can log enquiries, draft responses and trigger team notifications.",
  },
  {
    icon: ShieldCheck,
    title: "Controlled Guardrails & Privacy",
    desc: "Configured with strict boundaries so the agent stays on topic, uses only approved company knowledge and hands over to humans when needed.",
  },
  {
    icon: Bot,
    title: "Multi-Channel Deployment",
    desc: "Deploy your custom AI agent directly on your website, inside your customer portal or alongside your internal dashboard.",
  },
];

const FAQS = [
  {
    q: "How is a Custom AI Agent different from a standard chatbot?",
    a: "Standard chatbots follow rigid button trees. A Custom AI Agent understands natural language questions and answers using your approved business documentation, services and rules.",
  },
  {
    q: "Will our business data be kept private?",
    a: "Yes. We configure AI agents using commercial APIs and private knowledge retrieval so your confidential company documents are not shared publicly.",
  },
  {
    q: "How are Custom AI Agents priced?",
    a: "Custom AI Agents are scoped and quoted individually based on the knowledge sources, channels and integrations required. API usage costs are explained transparently during scoping.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://cortexhive.co.uk" },
        { "@type": "ListItem", position: 2, name: "Custom AI Agents", item: "https://cortexhive.co.uk/ai-agents" },
      ],
    },
    {
      "@type": "Service",
      name: "Custom AI Agents Development",
      provider: { "@id": "https://cortexhive.co.uk/#organization" },
      areaServed: "United Kingdom",
      description:
        "Custom AI agents for customer support, lead qualification, internal knowledge bases and intelligent document processing.",
    },
  ],
};

export default function AiAgentsPage() {
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
            <span className="text-[#14243A] font-semibold">Custom AI Agents</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F8FC] border border-[#E2E8F0] text-xs font-bold text-blue-600 uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Custom AI Agents UK</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#14243A] tracking-tight leading-[1.1]">
            Intelligent AI Assistants Trained Around Your Business.
          </h1>

          <p className="text-base sm:text-xl text-[#475569] max-w-3xl mx-auto leading-relaxed">
            We build custom AI agents that answer customer questions, qualify incoming leads, process documents and help your team find information faster.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-2">
            <a
              href="#quote-form"
              className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-[#14243A] text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors shadow-xs"
            >
              <span>Discuss Your Custom AI Agent</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.getWhatsAppLink("ai-agents")}
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
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">The Challenge</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] mt-1">
              Why Off-the-Shelf Bots Fall Short
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

        {/* Capabilities */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Capabilities</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#14243A] mt-1">
              What Custom AI Agents Can Do
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] text-blue-600 flex items-center justify-center shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#14243A]">{f.title}</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] text-center">
            Custom AI Agents FAQs
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

        <div id="quote-form">
          <LeadForm defaultService="Custom AI Agents" />
        </div>
      </div>
    </div>
  );
}
