"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Loader2,
  Mail,
  Phone,
  MessageSquare,
  Calendar,
} from "lucide-react";
import confetti from "canvas-confetti";
import { SITE_CONFIG } from "@/lib/config";
import ConsultationBookingCard from "./consultation-booking-card";

export type ProjectEnquiryData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  serviceRequired: string;
  budget: string;
  brief: string;
  preferredContact: string;
};

const INITIAL_DATA: ProjectEnquiryData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  serviceRequired: "Starter Website (£99)",
  budget: "Not sure / Please advise",
  brief: "",
  preferredContact: "Email or Phone",
};

export const SERVICE_OPTIONS = [
  "Starter Website (£99)",
  "Business Website (£349)",
  "Growth Website (£699)",
  "Custom Website / Redesign",
  "AI Receptionist (24/7 Call Answering)",
  "AI Business Automation",
  "Custom AI Agents",
  "SaaS Development",
  "Custom Software Development",
  "General Consultation / Not Sure Yet",
];

export const BUDGET_OPTIONS = [
  "Not sure / Please advise",
  "£99 (Starter Website)",
  "£349 (Business Website)",
  "£699 (Growth Website)",
  "£700 – £2,000",
  "£2,000 – £5,000",
  "£5,000+",
];

export default function LeadForm({ defaultService }: { defaultService?: string }) {
  const [activeTab, setActiveTab] = useState<"consultation" | "brief">("consultation");
  const [formData, setFormData] = useState<ProjectEnquiryData>({
    ...INITIAL_DATA,
    serviceRequired: defaultService || INITIAL_DATA.serviceRequired,
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handlePackageSelect = (e: Event) => {
      const customEvent = e as CustomEvent<{ serviceRequired?: string; budget?: string }>;
      if (customEvent.detail) {
        setFormData((prev) => ({
          ...prev,
          serviceRequired: customEvent.detail.serviceRequired || prev.serviceRequired,
          budget: customEvent.detail.budget || prev.budget,
        }));
        setActiveTab("brief");
        setError(null);
      }
    };
    window.addEventListener("cortexhive:select-package", handlePackageSelect);
    return () => window.removeEventListener("cortexhive:select-package", handlePackageSelect);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!formData.serviceRequired) {
      setError("Please select the service you require.");
      return;
    }
    if (!formData.brief.trim() || formData.brief.trim().length < 8) {
      setError("Please provide a short project description (at least 8 characters).");
      return;
    }

    setError(null);
    setIsSubmitting(true);

    try {
      // 1. Submit to internal API endpoint (Prisma SQLite, Firebase, Slack, Resend, Mailjet)
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.serviceRequired,
          budget: formData.budget,
          brief: formData.brief,
          preferredContact: formData.preferredContact,
          source: "form",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Unable to submit your enquiry right now. Please try again.");
      }

      // 2. Dual submit to Netlify Forms (native Netlify dashboard capture)
      try {
        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            "form-name": "contact",
            name: formData.name,
            company: formData.company,
            email: formData.email,
            phone: formData.phone,
            serviceRequired: formData.serviceRequired,
            budget: formData.budget,
            preferredContact: formData.preferredContact,
            brief: formData.brief,
          }).toString(),
        });
      } catch (netlifyErr) {
        console.warn("Netlify form capture notice:", netlifyErr);
      }

      setIsSubmitted(true);
      confetti({
        particleCount: 90,
        spread: 65,
        origin: { y: 0.6 },
        colors: ["#2563EB", "#38BDF8", "#16A34A"],
      });
    } catch (err) {
      const errMsg =
        err instanceof Error
          ? err.message
          : "Something went wrong while sending your enquiry. Please try again or contact us via WhatsApp.";
      setError(errMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F4F7FB] border-t border-[#DCE6F2] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="font-mono text-[11px] font-medium text-[#143A6B] uppercase tracking-[0.14em] mb-3 block">
            Start Your Project
          </span>
          <h2 className="font-extrabold tracking-[-0.03em] text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#0A1628] tracking-[-0.02em] leading-[1.08] mb-3">
            Request a Free{" "}
            <span className="italic text-[#143A6B]">Consultation or Quote.</span>
          </h2>
          <p className="text-[#33475F] text-xs sm:text-base leading-relaxed">
            Tell us a little about your business and what you need. We review every enquiry and reply within 24 hours with clear next steps.
          </p>
        </div>

        {/* Direct Contact Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-3xl mx-auto mb-8">
          <a
            href={SITE_CONFIG.getWhatsAppLink("consultation")}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-md bg-white hover:bg-[#EDF3FA]/70 border border-[#DCE6F2] hover:border-[#143A6B]/40 transition-all flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-md bg-[#143A6B] text-white flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-semibold text-[#0A1628]">WhatsApp Us</div>
              <div className="font-mono text-[11px] text-[#61758F] truncate">{SITE_CONFIG.phoneDisplay}</div>
            </div>
          </a>

          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="p-4 rounded-md bg-white hover:bg-[#EDF3FA]/70 border border-[#DCE6F2] hover:border-[#143A6B]/40 transition-all flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-md bg-[#143A6B] text-white flex items-center justify-center flex-shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-semibold text-[#0A1628]">Call Us</div>
              <div className="font-mono text-[11px] text-[#61758F] truncate">{SITE_CONFIG.phoneDisplay}</div>
            </div>
          </a>

          <a
            href={`mailto:${SITE_CONFIG.email}?subject=Project%20Enquiry%20-%20CortexHive`}
            className="p-4 rounded-md bg-white hover:bg-[#EDF3FA]/70 border border-[#DCE6F2] hover:border-[#143A6B]/35 transition-all flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-md bg-[#08182E] text-white flex items-center justify-center flex-shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-semibold text-[#0A1628]">Email Us</div>
              <div className="font-mono text-[11px] text-[#61758F] truncate">{SITE_CONFIG.email}</div>
            </div>
          </a>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-md p-5 sm:p-8 md:p-10 border border-[#DCE6F2] shadow-subtle max-w-3xl mx-auto">
          {/* Tab Selector */}
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <div className="inline-flex p-1 rounded-md bg-[#EDF3FA] border border-[#DCE6F2] w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setActiveTab("consultation")}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm text-xs font-medium transition-all cursor-pointer ${
                  activeTab === "consultation"
                    ? "bg-white text-[#0A1628] shadow-2xs"
                    : "text-[#33475F] hover:text-[#0A1628]"
                }`}
              >
                <Calendar className="w-3.5 h-3.5 text-[#143A6B]" />
                <span>Book Free Consultation</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("brief")}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm text-xs font-medium transition-all cursor-pointer ${
                  activeTab === "brief"
                    ? "bg-white text-[#0A1628] shadow-2xs"
                    : "text-[#33475F] hover:text-[#0A1628]"
                }`}
              >
                <Mail className="w-3.5 h-3.5 text-[#143A6B]" />
                <span>Send Written Enquiry</span>
              </button>
            </div>
          </div>

          {activeTab === "consultation" ? (
            <ConsultationBookingCard
              defaultService={defaultService || formData.serviceRequired}
              embedded
            />
          ) : isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-5">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] mb-2">
                Enquiry Submitted Successfully
              </h3>
              <p className="text-[#475569] text-sm sm:text-base max-w-lg mb-6 leading-relaxed">
                Thank you, <strong className="text-[#14243A]">{formData.name}</strong>. We have received your enquiry regarding{" "}
                <strong className="text-blue-600">{formData.serviceRequired}</strong> and will reply to{" "}
                <strong className="text-[#14243A]">{formData.email}</strong> within 24 hours.
              </p>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 max-w-md w-full mb-6">
                <p className="text-xs text-emerald-900 font-semibold mb-2.5">
                  Need a quicker response? Message us directly on WhatsApp:
                </p>
                <a
                  href={SITE_CONFIG.getWhatsAppLink("consultation")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all"
                >
                  <span>Chat on WhatsApp Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <button
                type="button"
                onClick={() => {
                  setFormData(INITIAL_DATA);
                  setIsSubmitted(false);
                }}
                className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-[#14243A] transition-colors"
              >
                Send Another Enquiry
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="space-y-5"
            >
              {/* Hidden Netlify Inputs */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 1. Name */}
                <div className="space-y-1.5">
                  <label htmlFor="lead-name" className="text-xs font-bold text-[#14243A] block">
                    Your Name <span className="text-blue-600">*</span>
                  </label>
                  <input
                    id="lead-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-[#F8FAFD] focus:bg-white focus:border-blue-600 text-sm text-[#14243A] focus:outline-none transition-colors"
                  />
                </div>

                {/* 2. Business Name */}
                <div className="space-y-1.5">
                  <label htmlFor="lead-company" className="text-xs font-bold text-[#14243A] block">
                    Business Name <span className="text-[#64748B] font-normal">(Optional)</span>
                  </label>
                  <input
                    id="lead-company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Morgan Electrical Services"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-[#F8FAFD] focus:bg-white focus:border-blue-600 text-sm text-[#14243A] focus:outline-none transition-colors"
                  />
                </div>

                {/* 3. Email */}
                <div className="space-y-1.5">
                  <label htmlFor="lead-email" className="text-xs font-bold text-[#14243A] block">
                    Email Address <span className="text-blue-600">*</span>
                  </label>
                  <input
                    id="lead-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@example.co.uk"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-[#F8FAFD] focus:bg-white focus:border-blue-600 text-sm text-[#14243A] focus:outline-none transition-colors"
                  />
                </div>

                {/* 4. Telephone (Optional) */}
                <div className="space-y-1.5">
                  <label htmlFor="lead-phone" className="text-xs font-bold text-[#14243A] block">
                    Telephone / WhatsApp <span className="text-[#64748B] font-normal">(Optional)</span>
                  </label>
                  <input
                    id="lead-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 07950 501323"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-[#F8FAFD] focus:bg-white focus:border-blue-600 text-sm text-[#14243A] focus:outline-none transition-colors"
                  />
                </div>

                {/* 5. Service Required */}
                <div className="space-y-1.5">
                  <label htmlFor="lead-service" className="text-xs font-bold text-[#14243A] block">
                    Service Required <span className="text-blue-600">*</span>
                  </label>
                  <select
                    id="lead-service"
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-[#F8FAFD] focus:bg-white focus:border-blue-600 text-sm text-[#14243A] focus:outline-none transition-colors"
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 6. Budget Range (Optional) */}
                <div className="space-y-1.5">
                  <label htmlFor="lead-budget" className="text-xs font-bold text-[#14243A] block">
                    Budget Range <span className="text-[#64748B] font-normal">(Optional)</span>
                  </label>
                  <select
                    id="lead-budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-[#F8FAFD] focus:bg-white focus:border-blue-600 text-sm text-[#14243A] focus:outline-none transition-colors"
                  >
                    {BUDGET_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 7. Project Description */}
              <div className="space-y-1.5">
                <label htmlFor="lead-brief" className="text-xs font-bold text-[#14243A] block">
                  Project Description <span className="text-blue-600">*</span>
                </label>
                <textarea
                  id="lead-brief"
                  name="brief"
                  rows={4}
                  required
                  value={formData.brief}
                  onChange={handleChange}
                  placeholder="Tell us about your business and what you would like to build or improve..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-[#F8FAFD] focus:bg-white focus:border-blue-600 text-sm text-[#14243A] focus:outline-none transition-colors resize-none"
                />
              </div>

              {error && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2.5 text-xs text-red-700">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-100">
                <p className="text-xs text-[#64748B] leading-relaxed text-center sm:text-left">
                  Protected by our{" "}
                  <a href="/privacy" className="underline hover:text-[#14243A]">
                    Privacy Policy
                  </a>
                  . No obligation &amp; zero spam.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-[#14243A] text-xs sm:text-sm font-semibold text-white transition-colors shadow-xs disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Enquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
