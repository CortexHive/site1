import { Metadata } from "next";
import Link from "next/link";
import {
  PhoneCall,
  Bot,
  ArrowRight,
  ShieldCheck,
  Clock,
  Mic,
  Calendar,
  MessageSquare,
  Zap,
  Layers,
  AlertCircle,
} from "lucide-react";
import AiReceptionistForm from "@/components/ai-receptionist-form";
import AiReceptionistDemo from "@/components/ai-receptionist-demo";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "24/7 AI Receptionist & Call Answering UK | CortexHive",
  description:
    "Never miss another business opportunity. Our AI receptionist answers incoming UK business calls 24/7, understands customer enquiries, collects contact details and sends call summaries.",
  keywords: [
    "AI receptionist UK",
    "AI phone answering for small businesses",
    "Automated call answering UK",
    "AI phone answering for trades",
    "Virtual receptionist UK",
  ],
  alternates: {
    canonical: "https://cortexhive.co.uk/ai-receptionist",
  },
  openGraph: {
    title: "24/7 AI Receptionist & Call Answering UK | CortexHive",
    description:
      "Your AI receptionist answers incoming calls, collects customer details and helps manage bookings while you work.",
    url: "https://cortexhive.co.uk/ai-receptionist",
  },
};

const PROBLEMS = [
  {
    title: "Missing Calls While Working",
    desc: "When you are on a job site, in a meeting or driving, unanswered calls often result in customers calling the next business on Google.",
  },
  {
    title: "Evening & Weekend Enquiries",
    desc: "Many customers call outside normal working hours. Voicemail rarely captures leads because most callers hang up without leaving a message.",
  },
  {
    title: "Constant Interruptions",
    desc: "Stopping work repeatedly to answer routine questions about pricing, service areas or availability slows down your day.",
  },
];

const FEATURES = [
  {
    icon: Clock,
    title: "1. 24/7 AI Call Answering",
    desc: "Answers incoming calls whenever you are busy, on site or closed for the evening so customers always speak to a polite assistant.",
  },
  {
    icon: Mic,
    title: "2. Natural Voice Conversations",
    desc: "Speaks naturally and politely in clear British English, greeting callers with your exact business name.",
  },
  {
    icon: ShieldCheck,
    title: "3. Customer Information Collection",
    desc: "Collects the caller's full name, telephone number, postcode and enquiry details accurately.",
  },
  {
    icon: Layers,
    title: "4. Lead Qualification",
    desc: "Asks the key questions your business needs — such as job type, location or urgency — to help you prioritise callbacks.",
  },
  {
    icon: Calendar,
    title: "5. Appointment Booking Where Integrated",
    desc: "Can log preferred callback times or connect with compatible digital calendars and booking links where configured.",
  },
  {
    icon: Zap,
    title: "6. Call Summaries",
    desc: "Prepares a clear written summary of every conversation so you can see who called and what they need at a glance.",
  },
  {
    icon: MessageSquare,
    title: "7. WhatsApp Notifications Where Configured",
    desc: "Sends lead notifications and call summaries to your email, SMS or WhatsApp where configured.",
  },
  {
    icon: Bot,
    title: "8. Business-Specific Conversation Handling",
    desc: "Trained on your services, coverage areas, opening hours and frequently asked questions.",
  },
];

const INDUSTRIES = [
  { name: "Builders & Contractors", desc: "Capture extension, renovation and quote enquiries while working on site." },
  { name: "Plumbers & Heating Engineers", desc: "Take boiler breakdown and repair enquiries 24 hours a day." },
  { name: "Electricians", desc: "Log domestic and commercial electrical enquiries without stopping work." },
  { name: "Window & Commercial Cleaning", desc: "Collect property details, postcodes and cleaning frequency requests automatically." },
  { name: "Handymen & Property Maintenance", desc: "Record repair details and tenant requests around the clock." },
  { name: "Salons, Clinics & Aesthetics", desc: "Answer treatment questions and appointment enquiries while with clients." },
  { name: "Professional Services", desc: "Provide a polite, structured call intake experience for new client enquiries." },
  { name: "Small & Medium UK Businesses", desc: "Ensure every caller is looked after during peak periods or out of hours." },
];

const FAQS = [
  {
    q: "Do I need a new phone number to use the AI Receptionist?",
    a: "No. You can keep your existing UK mobile or landline number and use standard conditional call forwarding when you are busy or unavailable, or we can set up a dedicated UK virtual number.",
  },
  {
    q: "Can the AI receptionist book appointments?",
    a: "Where integrated with a compatible digital calendar or booking workflow, the AI receptionist can collect preferred appointment times, check availability or send callers your booking link.",
  },
  {
    q: "How are setup and ongoing usage priced?",
    a: "Each AI receptionist is scoped and quoted based on your business call workflows and required integrations. Third-party calendar integrations, telephony call minutes and ongoing AI service usage costs may be charged separately.",
  },
  {
    q: "Can I combine the AI Receptionist with a new business website?",
    a: "Yes. Many UK businesses pair our website packages (starting from £99) with an AI Receptionist so both online visitors and phone callers are captured.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://cortexhive.co.uk" },
        { "@type": "ListItem", position: 2, name: "AI Receptionist", item: "https://cortexhive.co.uk/ai-receptionist" },
      ],
    },
    {
      "@type": "Service",
      name: "AI Receptionist & 24/7 Business Call Answering",
      provider: { "@id": "https://cortexhive.co.uk/#organization" },
      areaServed: "United Kingdom",
      description:
        "AI-powered phone answering service that answers incoming UK business calls, collects customer details, qualifies leads and sends call summaries.",
    },
  ],
};

export default function AiReceptionistPage() {
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
            <span className="text-[#14243A] font-semibold">AI Receptionist</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F8FC] border border-[#E2E8F0] text-xs font-bold text-blue-600 uppercase tracking-wider">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>24/7 AI Call Answering UK</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#14243A] tracking-tight leading-[1.1]">
            Never Miss Another Business Opportunity.
          </h1>

          <p className="text-base sm:text-xl text-[#475569] max-w-3xl mx-auto leading-relaxed">
            Your AI receptionist can answer incoming calls, understand customer enquiries, collect information and help manage bookings, even when you&apos;re busy.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-2">
            <a
              href="#demo-form"
              className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-[#14243A] text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors shadow-xs"
            >
              <span>Request an AI Receptionist Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.getWhatsAppLink("ai-receptionist")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl bg-white hover:bg-[#F5F8FC] border border-slate-300 text-[#14243A] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors"
            >
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Interactive Live Audio Demo */}
        <section className="max-w-3xl mx-auto space-y-4">
          <div className="text-center space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Hear It In Action
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A]">
              Play an Interactive UK Call Handling Demo
            </h2>
            <p className="text-xs sm:text-sm text-[#475569]">
              Choose a business type and press play to hear how our AI receptionist answers, qualifies leads, and sends an instant summary.
            </p>
          </div>
          <AiReceptionistDemo />
        </section>

        {/* Problem Statement */}
        <section className="bg-[#F8FAFD] rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">The Problem</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] mt-1">
              Every Unanswered Call Can Be a Lost Customer
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

        {/* 8 Practical Capabilities */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Practical Capabilities</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#14243A] mt-1">
              What Your AI Receptionist Can Do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] hover:border-blue-300 transition-all space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] text-blue-600 flex items-center justify-center shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#14243A]">{f.title}</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="p-5 rounded-2xl bg-[#F5F8FC] border border-[#E2E8F0] text-xs sm:text-sm text-[#475569] leading-relaxed">
            <strong className="text-[#14243A]">Important Information on Integrations &amp; Usage Costs:</strong> AI receptionist setups are tailored to your business workflow. External calendar integrations, telephony call minutes and ongoing AI voice usage costs may be charged separately depending on your configuration and monthly call volume.
          </div>
        </section>

        {/* Who It Helps */}
        <section className="bg-[#F8FAFD] rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Use Cases</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] mt-1">
              Who Benefits From an AI Receptionist?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDUSTRIES.map((ind) => (
              <div key={ind.name} className="p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-1.5">
                <h3 className="text-sm font-bold text-[#14243A]">{ind.name}</h3>
                <p className="text-xs text-[#475569] leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] text-center">
            How Setup Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { step: "1. Discover", desc: "We learn your business services, greeting style, common caller questions and coverage areas." },
              { step: "2. Plan", desc: "We design your call script, qualification questions and notification preferences." },
              { step: "3. Build", desc: "We configure your AI voice assistant and test call flows thoroughly." },
              { step: "4. Launch", desc: "Connect your existing phone line via call forwarding or use a dedicated number." },
            ].map((s) => (
              <div key={s.step} className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] space-y-2">
                <div className="text-sm font-extrabold text-blue-600">{s.step}</div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] text-center">
            AI Receptionist FAQs
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

        {/* Enquiry Form */}
        <div id="demo-form" className="pt-4">
          <AiReceptionistForm />
        </div>
      </div>
    </div>
  );
}
