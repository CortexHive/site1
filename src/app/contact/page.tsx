import { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Bot,
} from "lucide-react";
import LeadForm from "@/components/lead-form";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact Us & Request a Free Quote | CortexHive UK",
  description:
    "Get in touch with CortexHive. Speak directly with our digital specialists via phone, WhatsApp, or email to discuss your website design, AI receptionist, or software project.",
  keywords: [
    "Contact CortexHive",
    "Request website quote UK",
    "AI receptionist enquiry",
    "Digital agency London contact",
    "WhatsApp digital agency UK",
  ],
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold text-purple-700 uppercase tracking-widest shadow-xs">
            <span>Direct Client Support</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 font-outfit tracking-tight leading-[1.1]">
            Contact CortexHive.
          </h1>

          <p className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed">
            Ready to establish your digital presence or streamline operations with AI? Speak directly with our team via WhatsApp, telephone, or our project scoping form.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* WhatsApp Direct */}
          <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200/80 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.531 1.93.814 2.79.815 3.183 0 5.77-2.586 5.77-5.766.002-3.181-2.583-5.766-5.769-5.766zm3.385 8.163c-.144.407-.837.774-1.171.823-.335.05-.776.082-2.222-.516-1.745-.722-2.871-2.493-2.958-2.609-.087-.116-.708-.941-.708-1.793 0-.852.449-1.272.608-1.446.16-.175.348-.218.464-.218.116 0 .232.001.333.006.106.005.249-.04.39.299.144.348.492 1.201.536 1.289.043.087.072.19.014.305-.058.116-.087.189-.174.29-.087.102-.183.228-.261.306-.088.087-.179.182-.077.357.101.174.45 1.743 1.968 2.392.203.087.324.076.445-.062.12-.138.514-.6.652-.804.137-.204.275-.171.464-.101.189.07 1.201.566 1.408.669.207.102.345.153.395.239.05.087.05.503-.094.91zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.981-1.396A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.638 0-3.167-.487-4.448-1.326l-.319-.21-2.955.775.789-2.883-.231-.367C3.937 14.887 3.4 13.487 3.4 12c0-4.742 3.858-8.6 8.6-8.6s8.6 3.858 8.6 8.6-3.858 8.6-8.6 8.6z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-950 font-outfit">
                Chat on WhatsApp
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Fastest way to reach our specialists. Ideal for rapid scoping, quote requests, and quick questions.
              </p>
            </div>
            <a
              href={SITE_CONFIG.getWhatsAppLink("quote")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 hover:text-emerald-950 pt-3"
            >
              <span>{SITE_CONFIG.phoneDisplay} (Chat Now)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Direct Telephone */}
          <div className="p-6 rounded-3xl bg-cyan-50/70 border border-cyan-200/80 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-600 text-white flex items-center justify-center shadow-md">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-950 font-outfit">
                Telephone &amp; AI Reception
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Direct UK business line. Experience our AI-assisted call handling and leave a project briefing 24/7.
              </p>
            </div>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-cyan-800 hover:text-cyan-950 pt-3"
            >
              <span>{SITE_CONFIG.phoneDisplay} (Click to Call)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Email Support */}
          <div className="p-6 rounded-3xl bg-purple-50/70 border border-purple-200/80 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-md">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-950 font-outfit">
                Direct Email
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Send RFP briefs, detailed specifications, or general inquiries. We reply within 24 business hours.
              </p>
            </div>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-purple-800 hover:text-purple-950 pt-3"
            >
              <span>{SITE_CONFIG.email}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Location & Operating Hours */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-700">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block mb-0.5">Location</span>
              <span>{SITE_CONFIG.location}</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block mb-0.5">Studio Operating Hours</span>
              <span>Monday – Friday: 08:30 – 18:00 GMT</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Bot className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block mb-0.5">AI Reception &amp; Forms</span>
              <span>Online intake &amp; call answering available 24/7</span>
            </div>
          </div>
        </div>

        {/* Lead Form */}
        <div id="enquiry-form">
          <LeadForm />
        </div>
      </div>
    </div>
  );
}
