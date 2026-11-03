import { Metadata } from "next";
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Zap,
  Phone,
  Wrench,
  Hammer,
  Paintbrush,
  Truck,
  Building,
} from "lucide-react";
import LeadForm from "@/components/lead-form";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Professional Starter Websites for Trades & Small Businesses — £99 | CortexHive",
  description:
    "Your business deserves to be online. Get a professional one-page website for builders, plumbers, electricians, handymen and UK small businesses for just £99.",
  keywords: [
    "£99 website design UK",
    "Affordable website design UK",
    "Small business website design",
    "Website design for builders",
    "Website design for plumbers",
    "Website design for electricians",
    "Website design for tradespeople",
    "Tradesman website UK",
  ],
};

const TRADES = [
  { name: "Builders & Construction", icon: Building },
  { name: "Plumbers & Gas Engineers", icon: Wrench },
  { name: "Electricians", icon: Zap },
  { name: "Painters & Decorators", icon: Paintbrush },
  { name: "Handymen & Property Maintenance", icon: Hammer },
  { name: "Cleaning Services & Removals", icon: Truck },
];

const INCLUSIONS = [
  "Professional one-page website engineered for your exact trade",
  "100% mobile-friendly responsive layout on smartphones and tablets",
  "Clear business introduction and credibility highlights",
  "Dedicated services & specialisms breakdown section",
  "One-click WhatsApp chat button & direct phone click-to-call",
  "Interactive customer enquiry form",
  "Basic on-page SEO setup (meta title, description, and local headings)",
  "Social media links and Google Business profile linking",
  "Turnaround in 3 to 5 business days once content is provided",
];

const TRANSPARENCY_NOTES = [
  {
    title: "Domain Name Registration",
    desc: "Domain names (e.g. yourbusiness.co.uk) are registered in your name (approx. £8–£12/year paid directly to the registrar, or we can assist).",
  },
  {
    title: "Hosting & Deployment",
    desc: "High-speed cloud hosting is available starting from £5/month or you can host on your own provider.",
  },
  {
    title: "Additional Pages & Custom Features",
    desc: "Multi-page expansions, project galleries, blog sections, and booking integrations are available as simple fixed-cost add-ons.",
  },
  {
    title: "Ongoing Maintenance & Updates",
    desc: "We provide optional pay-as-you-go maintenance or monthly support packages when you need edits.",
  },
];

const FAQS = [
  {
    q: "Why is the starter website only £99?",
    a: "We believe every tradesperson and independent UK business deserves a credible digital footprint without paying £1,000+ agency markups. We use modern, high-speed templates tuned specifically for local service enquiries, keeping costs low while delivering high quality.",
  },
  {
    q: "Are there any hidden catches?",
    a: "No hidden catches. The £99 covers the complete design and build of your professional one-page website with contact form and WhatsApp integration. As with any website on the internet, domain registration and hosting are standard third-party running costs, which we keep 100% transparent.",
  },
  {
    q: "How long does it take to get my website live?",
    a: "Once you provide your business details, phone number, and list of services, we typically have your first review draft ready in 3 to 5 business days.",
  },
  {
    q: "Can I upgrade to multiple pages or an AI receptionist later?",
    a: "Yes! Your website is built on modern technology that can scale anytime into full multi-page platforms, AI call receptionists, or customer booking systems.",
  },
];

export default function SmallBusinessWebsitesPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 pt-24 sm:pt-28 pb-16 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-20">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] sm:text-xs font-bold text-emerald-800 uppercase tracking-widest shadow-xs">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Special Acquisition Offer for UK Businesses</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-slate-950 font-outfit tracking-tight leading-[1.12] sm:leading-[1.08]">
            Your Business Deserves to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
              Be Online.
            </span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium px-2 sm:px-0">
            Get a professional online presence without the expensive agency price tag.
          </p>

          {/* Pricing Highlight Pill */}
          <div className="pt-2 sm:pt-4 pb-2">
            <div className="inline-block p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-900 text-white shadow-2xl border border-slate-800 w-full sm:w-auto">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold block mb-1">
                Transparent UK Pricing
              </span>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl sm:text-6xl font-black font-outfit text-white">£99</span>
                <span className="text-slate-400 text-xs sm:text-sm font-semibold">one-off build fee</span>
              </div>
              <p className="text-xs text-slate-300 mt-2 max-w-md mx-auto">
                Complete, modern 1-page business website designed to convert local searchers into phone calls and WhatsApp enquiries.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2">
            <a
              href="#order-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-xl active:scale-98 transition-all"
            >
              <span>Request Your £99 Website</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={SITE_CONFIG.getWhatsAppLink("small-business-99")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>
        </div>

        {/* Suitable Trades & Small Businesses */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-outfit">
              Tailored for Busy Tradespeople &amp; Local Businesses
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              Customers search Google first before hiring a tradesperson. Show up with an authentic, professional presence.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {TRADES.map((trade) => {
              const Icon = trade.icon;
              return (
                <div
                  key={trade.name}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center flex flex-col items-center justify-center gap-2.5 hover:border-emerald-400 hover:bg-emerald-50/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-emerald-600 flex items-center justify-center shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    {trade.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Package Comparison: What is Included vs Transparent Separates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inclusions Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border-2 border-emerald-500/50 shadow-lg space-y-5 sm:space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Included in the £99 Package
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 font-outfit">
                  Everything You Need to Start Getting Leads
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs whitespace-nowrap">
                Guaranteed Quality
              </span>
            </div>

            <ul className="space-y-3 sm:space-y-3.5">
              {INCLUSIONS.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Transparent Add-ons / Exclusions Card */}
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200 space-y-5 sm:space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                100% Honesty &amp; Transparency
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-outfit">
                Separately Charged Running Costs
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                We never make unrealistic promises like &quot;free lifetime hosting&quot; or guaranteed sales. Here is how standard running costs work:
              </p>
            </div>

            <div className="space-y-3.5 sm:space-y-4">
              {TRANSPARENCY_NOTES.map((note, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>{note.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium pl-3">
                    {note.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-outfit">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-1">
              Common questions from builders, electricians, plumbers, and local business owners.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">{faq.q}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enquiry Form */}
        <div id="order-form" className="pt-4 sm:pt-6">
          <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              Get Started Today
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-outfit mt-1">
              Request Your £99 Website
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              Fill in your business details below or reach out on WhatsApp to get started immediately.
            </p>
          </div>

          <LeadForm defaultService="£99 Small Business Website" />
        </div>
      </div>
    </div>
  );
}
