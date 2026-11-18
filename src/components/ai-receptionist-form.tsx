"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle, Loader2, ArrowRight, Bot } from "lucide-react";
import confetti from "canvas-confetti";
import { SITE_CONFIG } from "@/lib/config";

interface ReceptionistFormData {
  businessName: string;
  contactPerson: string;
  email: string;
  phone: string;
  businessType: string;
  callVolume: string;
  currentPhoneSystem: string;
  aiFeatures: string[];
  notes: string;
}

const INITIAL_FORM: ReceptionistFormData = {
  businessName: "",
  contactPerson: "",
  email: "",
  phone: "",
  businessType: "Trades & Construction (Builders, Plumbers, Electricians)",
  callVolume: "50–150 calls / month",
  currentPhoneSystem: "Mobile Phone / WhatsApp only",
  aiFeatures: [
    "24/7 Call Answering",
    "Customer Information Collection",
    "Call Summaries",
  ],
  notes: "",
};

const BUSINESS_TYPES = [
  "Trades & Construction (Builders, Plumbers, Electricians)",
  "Home Services & Maintenance (Cleaning, Window Cleaning, Handymen)",
  "Professional Services & Consultants",
  "Health, Wellness, Salons & Clinics",
  "Automotive, Transport & Logistics",
  "Startups, Retail & E-Commerce",
  "Other Business",
];

const CALL_VOLUMES = [
  "Under 50 calls / month",
  "50–150 calls / month",
  "150–500 calls / month",
  "500+ calls / month",
];

const PHONE_SYSTEMS = [
  "Mobile Phone / WhatsApp only",
  "Landline / Standard Office Line",
  "VoIP / Cloud Phone System",
  "Need a new business number",
];

const AVAILABLE_FEATURES = [
  "24/7 Call Answering",
  "Natural Voice Conversations",
  "Customer Information Collection",
  "Lead Qualification",
  "Appointment Booking Where Integrated",
  "Call Summaries",
  "WhatsApp Notifications Where Configured",
  "Business-Specific Conversation Handling",
];

export default function AiReceptionistForm() {
  const [formData, setFormData] = useState<ReceptionistFormData>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleFeature = (feature: string) => {
    setFormData((prev) => ({
      ...prev,
      aiFeatures: prev.aiFeatures.includes(feature)
        ? prev.aiFeatures.filter((f) => f !== feature)
        : [...prev.aiFeatures, feature],
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.contactPerson.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError("Please provide your name, email address, and telephone number.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please provide a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.contactPerson,
          company: formData.businessName,
          email: formData.email,
          phone: formData.phone,
          projectType: "AI Receptionist",
          businessType: formData.businessType,
          callVolume: formData.callVolume,
          currentPhoneSystem: formData.currentPhoneSystem,
          aiFeatures: formData.aiFeatures.join(", "),
          brief: `AI Receptionist Consultation Request.\nIndustry: ${formData.businessType}\nCall Volume: ${formData.callVolume}\nCurrent System: ${formData.currentPhoneSystem}\nFeatures: ${formData.aiFeatures.join(", ")}\nNotes: ${formData.notes || "None"}`,
          preferredContact: "Phone",
          source: "ai-receptionist-form",
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Unable to submit request. Please try again.");
      }

      try {
        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            "form-name": "ai-receptionist",
            contactPerson: formData.contactPerson,
            businessName: formData.businessName,
            email: formData.email,
            phone: formData.phone,
            businessType: formData.businessType,
            callVolume: formData.callVolume,
            currentPhoneSystem: formData.currentPhoneSystem,
            aiFeatures: formData.aiFeatures.join(", "),
            notes: formData.notes,
          }).toString(),
        });
      } catch (netlifyErr) {
        console.warn("Netlify AI Receptionist form notice:", netlifyErr);
      }

      setIsSubmitted(true);
      confetti({
        particleCount: 90,
        spread: 65,
        origin: { y: 0.6 },
        colors: ["#2563EB", "#38BDF8", "#16A34A"],
      });
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(errMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="receptionist-enquiry" className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-subtle max-w-3xl mx-auto">
      {isSubmitted ? (
        <div className="text-center py-8 flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-5">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] mb-2">
            AI Receptionist Enquiry Received
          </h3>
          <p className="text-[#475569] text-sm sm:text-base max-w-lg mb-6 leading-relaxed">
            Thank you, <strong className="text-[#14243A]">{formData.contactPerson}</strong>. We have received your enquiry for{" "}
            <strong className="text-blue-600">{formData.businessName || "your business"}</strong> and will contact you at{" "}
            <strong className="text-[#14243A]">{formData.phone}</strong> or <strong className="text-[#14243A]">{formData.email}</strong> within 24 hours.
          </p>

          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 max-w-md w-full mb-6">
            <p className="text-xs text-emerald-900 font-semibold mb-2">
              Want to speak with us right away?
            </p>
            <a
              href={SITE_CONFIG.getWhatsAppLink("ai-receptionist")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all"
            >
              <span>Connect on WhatsApp Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => {
              setFormData(INITIAL_FORM);
              setIsSubmitted(false);
            }}
            className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-[#14243A] transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          name="ai-receptionist"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="ai-receptionist" />
          <input type="hidden" name="bot-field" />

          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[11px] font-bold text-blue-700 uppercase tracking-wider mb-2">
              <Bot className="w-3.5 h-3.5 text-blue-600" />
              <span>AI Receptionist Consultation</span>
            </div>
            <h2 className="text-2xl font-extrabold text-[#14243A]">
              Tell Us About Your Call Handling Needs
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1">
              Share your business details below and we will recommend a tailored AI receptionist setup and quotation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="ar-person" className="text-xs font-bold text-[#14243A]">
                Your Name <span className="text-blue-600">*</span>
              </label>
              <input
                id="ar-person"
                type="text"
                name="contactPerson"
                required
                value={formData.contactPerson}
                onChange={handleChange}
                placeholder="e.g. David Miller"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-[#F8FAFD] focus:bg-white focus:border-blue-600 text-sm text-[#14243A] focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="ar-business" className="text-xs font-bold text-[#14243A]">
                Business Name <span className="text-blue-600">*</span>
              </label>
              <input
                id="ar-business"
                type="text"
                name="businessName"
                required
                value={formData.businessName}
                onChange={handleChange}
                placeholder="e.g. Apex Plumbing & Heating"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-[#F8FAFD] focus:bg-white focus:border-blue-600 text-sm text-[#14243A] focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="ar-email" className="text-xs font-bold text-[#14243A]">
                Email Address <span className="text-blue-600">*</span>
              </label>
              <input
                id="ar-email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="david@apexplumbing.co.uk"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-[#F8FAFD] focus:bg-white focus:border-blue-600 text-sm text-[#14243A] focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="ar-phone" className="text-xs font-bold text-[#14243A]">
                Telephone / Mobile <span className="text-blue-600">*</span>
              </label>
              <input
                id="ar-phone"
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 07950 501323"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-[#F8FAFD] focus:bg-white focus:border-blue-600 text-sm text-[#14243A] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="ar-type" className="text-xs font-bold text-[#14243A]">
                Business Type
              </label>
              <select
                id="ar-type"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-[#F8FAFD] focus:bg-white focus:border-blue-600 text-xs text-[#14243A] focus:outline-none transition-colors"
              >
                {BUSINESS_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="ar-volume" className="text-xs font-bold text-[#14243A]">
                Estimated Call Volume
              </label>
              <select
                id="ar-volume"
                name="callVolume"
                value={formData.callVolume}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-[#F8FAFD] focus:bg-white focus:border-blue-600 text-xs text-[#14243A] focus:outline-none transition-colors"
              >
                {CALL_VOLUMES.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="ar-system" className="text-xs font-bold text-[#14243A]">
                Current Phone Setup
              </label>
              <select
                id="ar-system"
                name="currentPhoneSystem"
                value={formData.currentPhoneSystem}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-[#F8FAFD] focus:bg-white focus:border-blue-600 text-xs text-[#14243A] focus:outline-none transition-colors"
              >
                {PHONE_SYSTEMS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-[#14243A] block">
              Capabilities You Are Interested In
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {AVAILABLE_FEATURES.map((feat) => {
                const checked = formData.aiFeatures.includes(feat);
                return (
                  <button
                    type="button"
                    key={feat}
                    onClick={() => toggleFeature(feat)}
                    className={`p-2.5 rounded-xl border text-left flex items-center justify-between text-xs transition-all ${
                      checked
                        ? "border-blue-600 bg-blue-50/60 font-semibold text-[#14243A]"
                        : "border-slate-200 bg-[#F8FAFD] text-[#475569] hover:bg-slate-100/70"
                    }`}
                  >
                    <span>{feat}</span>
                    <span
                      className={`w-4 h-4 rounded-md border flex items-center justify-center text-[10px] ${
                        checked
                          ? "border-blue-600 bg-blue-600 text-white font-bold"
                          : "border-slate-300"
                      }`}
                    >
                      {checked ? "✓" : ""}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="ar-notes" className="text-xs font-bold text-[#14243A]">
              Additional Notes or Questions (Optional)
            </label>
            <textarea
              id="ar-notes"
              name="notes"
              rows={2}
              value={formData.notes}
              onChange={handleChange}
              placeholder="Tell us about the types of calls you receive..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-[#F8FAFD] focus:bg-white focus:border-blue-600 text-sm text-[#14243A] focus:outline-none transition-colors resize-none"
            />
          </div>

          {error && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2.5 text-xs text-red-700">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-100">
            <p className="text-xs text-[#64748B]">
              Protected by our <a href="/privacy" className="underline hover:text-[#14243A]">Privacy Policy</a>.
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-[#14243A] text-xs sm:text-sm font-semibold text-white transition-colors shadow-xs disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Request Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
