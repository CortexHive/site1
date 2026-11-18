import { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Bot,
  MessageSquare,
} from "lucide-react";
import LeadForm from "@/components/lead-form";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact CortexHive — Free Consultation & Website Quotes UK",
  description:
    "Contact CortexHive via phone, WhatsApp or email to request a free consultation for website design, 24/7 AI receptionists, business automation or custom software.",
  keywords: [
    "Contact CortexHive",
    "Request website quote UK",
    "AI receptionist enquiry",
    "Software development consultation UK",
  ],
  alternates: {
    canonical: "https://cortexhive.co.uk/contact",
  },
  openGraph: {
    title: "Contact CortexHive — Free Consultation & Quotes UK",
    description:
      "Speak with CortexHive via WhatsApp, phone or email about your website, AI or custom software project.",
    url: "https://cortexhive.co.uk/contact",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://cortexhive.co.uk" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://cortexhive.co.uk/contact" },
  ],
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen text-[#475569] pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs text-[#64748B]">
            <Link href="/" className="hover:text-[#14243A] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#14243A] font-semibold">Contact</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F8FC] border border-[#E2E8F0] text-xs font-bold text-blue-600 uppercase tracking-wider">
            <span>Get in Touch</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#14243A] tracking-tight leading-[1.1]">
            Contact CortexHive.
          </h1>

          <p className="text-sm sm:text-lg text-[#475569] leading-relaxed">
            Whether you want to get started with a website package, ask about an AI receptionist or discuss a custom software project, reach out via WhatsApp, phone, email or our enquiry form below.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* WhatsApp Direct */}
          <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-2xs">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-[#14243A]">
                Chat on WhatsApp
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Ideal for quick questions, website package enquiries and arranging a consultation.
              </p>
            </div>
            <a
              href={SITE_CONFIG.getWhatsAppLink("consultation")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-900 pt-3"
            >
              <span>Message {SITE_CONFIG.phoneDisplay}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Direct Telephone */}
          <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-2xs">
                <Phone className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-[#14243A]">
                Telephone
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Call our UK business line directly to discuss your website, AI or software requirements.
              </p>
            </div>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-[#14243A] pt-3"
            >
              <span>Call {SITE_CONFIG.phoneDisplay}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Email Support */}
          <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#14243A] text-white flex items-center justify-center shadow-2xs">
                <Mail className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-[#14243A]">
                Direct Email
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Send project briefs, specifications or general enquiries. We reply within 24 hours.
              </p>
            </div>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-[#14243A] pt-3"
            >
              <span>{SITE_CONFIG.email}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Location & Hours */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#F5F8FC] border border-[#E2E8F0] grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#475569]">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#14243A] block mb-0.5">Coverage</span>
              <span>Supporting businesses across the United Kingdom</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#14243A] block mb-0.5">Consultation Hours</span>
              <span>Monday – Friday: 08:30 – 18:00 (UK Time)</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Bot className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#14243A] block mb-0.5">Online Enquiries</span>
              <span>Enquiry forms &amp; WhatsApp messages accepted 24/7</span>
            </div>
          </div>
        </div>
      </div>

      <div id="enquiry-form" className="mt-12">
        <LeadForm />
      </div>
    </div>
  );
}
