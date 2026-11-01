import { Metadata } from "next";
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
} from "lucide-react";
import AiReceptionistForm from "@/components/ai-receptionist-form";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "AI Receptionist & 24/7 Business Call Answering — UK | CortexHive",
  description:
    "Never miss another business enquiry. Our conversational AI receptionist answers your business calls, qualifies leads, takes messages, and sends instant summaries to your phone.",
  keywords: [
    "AI receptionist UK",
    "AI virtual receptionist",
    "Automated call answering UK",
    "AI phone answering for trades",
    "Virtual call assistant for plumbers",
    "AI phone agent small business",
    "Twilio ElevenLabs receptionist UK",
  ],
};

const FEATURES = [
  {
    icon: PhoneCall,
    title: "AI-Powered Incoming Call Answering",
    desc: "Answers incoming calls within 2 rings with zero busy signals, handling multiple customer callers simultaneously.",
  },
  {
    icon: Mic,
    title: "Natural Conversational Voice",
    desc: "Built with cutting-edge natural neural speech synthesis (ElevenLabs integration-ready), speaking naturally and professionally in clean British English accents.",
  },
  {
    icon: Clock,
    title: "24/7 Availability Where Configured",
    desc: "Capture evening, weekend, and holiday emergency calls when you are on a job site, driving, or closed for the day.",
  },
  {
    icon: MessageSquare,
    title: "Custom Business Greetings & FAQs",
    desc: "Greets callers with your exact trading name, answers opening hours, service areas, and pricing questions accurately.",
  },
  {
    icon: ShieldCheck,
    title: "Lead Qualification & Contact Capture",
    desc: "Collects the caller's name, telephone number, job location, and specific service requirement before qualifying intent.",
  },
  {
    icon: Zap,
    title: "Instant SMS & Email Notifications",
    desc: "Sends full call transcripts, lead summaries, and callback alerts straight to your smartphone via SMS or email immediately after the call finishes.",
  },
  {
    icon: Calendar,
    title: "Callback Requests & Appointment Scheduling",
    desc: "Logs preferred callback times or books appointment slots directly into your digital calendar where configured.",
  },
  {
    icon: Layers,
    title: "Seamless Phone System Integration",
    desc: "Works alongside your existing UK mobile, landline, or VoIP numbers using simple call-forwarding or dedicated virtual lines (Twilio integration-ready).",
  },
];

const INDUSTRIES = [
  { name: "Builders & Contractors", desc: "Never lose a lucrative extension quote while working on scaffold or operating machinery." },
  { name: "Plumbers & Heating Engineers", desc: "Instantly capture emergency boiler breakdowns and water leaks 24 hours a day." },
  { name: "Electricians", desc: "Answer customer inquiries and schedule inspection visits while on site." },
  { name: "Cleaning Companies", desc: "Triage domestic and commercial cleaning quotes and collect customer property sizes." },
  { name: "Property Maintenance", desc: "Log tenant repair requests and dispatch contractor alerts effortlessly." },
  { name: "Salons & Aesthetics", desc: "Take appointment requests and treatment queries without interrupting client sessions." },
  { name: "Consultants & Agencies", desc: "Professional corporate greetings and structured client inquiry intake." },
  { name: "Local Independent Businesses", desc: "Compete with larger firms by having an articulate voice assistant on duty around the clock." },
];

export default function AiReceptionistPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-bold text-cyan-800 uppercase tracking-widest shadow-xs">
            <Bot className="w-4 h-4 text-cyan-600" />
            <span>AI Voice &amp; Telephony Solutions for UK Business</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-950 font-outfit tracking-tight leading-[1.08]">
            Never Miss Another{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600">
              Business Enquiry.
            </span>
          </h1>

          <p className="text-lg sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            An AI-powered receptionist that answers your business calls, captures leads and helps you stay connected with customers – even when you&apos;re busy.
          </p>

          {/* Integration Status Pill */}
          <div className="pt-2">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Twilio Telephony &amp; ElevenLabs Integration-Ready</span>
              </span>
              <span className="text-slate-300">•</span>
              <span>Works with any UK Mobile or Landline Number</span>
            </div>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#demo-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm shadow-md hover:shadow-xl transition-all"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={SITE_CONFIG.getWhatsAppLink("ai-receptionist")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-bold text-sm transition-all"
            >
              <span>Talk to Us on WhatsApp</span>
            </a>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-slate-300 hover:border-slate-400 text-slate-800 font-bold text-sm transition-all"
            >
              <PhoneCall className="w-4 h-4 text-cyan-600" />
              <span>Call Us: {SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-600">
              Complete Call Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-outfit mt-1">
              Engineered For Practical Business Operations
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              Features and availability are configured precisely to your business workflow and operating hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-cyan-400 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-cyan-600 flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-slate-950 font-outfit">
                      {f.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {f.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Suitable Industries */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Industry Focus
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-outfit">
              Who Benefits Most from an AI Receptionist?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Every missed call is a missed customer who dials the next competitor on Google. Keep your business responsive 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDUSTRIES.map((ind, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2"
              >
                <h4 className="text-sm font-bold text-white font-outfit flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>{ind.name}</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Step-by-Step */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-600">
              Simple 3-Step Setup
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-outfit mt-1">
              How the AI Receptionist Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-2xl font-black text-cyan-600 font-outfit">01</span>
              <h3 className="text-lg font-bold text-slate-950">Customer Dials Your Line</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Calls to your existing UK business number or dedicated line route instantly to the AI agent whenever you are busy or closed.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-2xl font-black text-cyan-600 font-outfit">02</span>
              <h3 className="text-lg font-bold text-slate-950">Natural Voice Conversation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The receptionist speaks politely with your business greeting, answers questions, checks postcode availability, and logs the caller&apos;s details.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-2xl font-black text-cyan-600 font-outfit">03</span>
              <h3 className="text-lg font-bold text-slate-950">Instant Notification to You</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You receive a summary text or email within 30 seconds with caller name, number, problem summary, and callback urgency.
              </p>
            </div>
          </div>
        </div>

        {/* Demo Request Form Section */}
        <div id="demo-form" className="pt-6">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-600">
              Interactive Scoping
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-outfit mt-1">
              Configure Your AI Receptionist
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              Tell us your business type and call needs. We will configure a live voice preview for your company.
            </p>
          </div>

          <AiReceptionistForm />
        </div>
      </div>
    </div>
  );
}
