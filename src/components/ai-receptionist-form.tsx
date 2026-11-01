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
  businessType: "Trades & Construction",
  callVolume: "50–150 calls / month",
  currentPhoneSystem: "Mobile / WhatsApp Only",
  aiFeatures: ["24/7 Call Answering", "Lead Capture & Qualification", "SMS / Email Instant Summary"],
  notes: "",
};

const BUSINESS_TYPES = [
  "Trades & Construction (Builders, Plumbers, Electricians)",
  "Home Services & Maintenance (Cleaning, Roofing, Handymen)",
  "Professional Services & Legal / Accounting",
  "Health, Wellness & Beauty / Salons",
  "Automotive, Transport & Logistics",
  "E-commerce, Retail & Tech Startups",
  "Other Local Business",
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
  "Currently not set up",
];

const AVAILABLE_FEATURES = [
  "24/7 Call Answering",
  "Natural Conversational Voice",
  "Custom Business Greeting",
  "Business FAQs & Pricing Answers",
  "Lead Capture & Qualification",
  "SMS / Email Instant Summary",
  "Callback Scheduling & Routing",
  "Appointment Booking Integration",
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
      setError("Please provide your name, business email, and telephone number.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please provide a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // 1. Internal API route
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
          brief: `AI Receptionist Setup Request.\nIndustry: ${formData.businessType}\nCall Volume: ${formData.callVolume}\nCurrent System: ${formData.currentPhoneSystem}\nFeatures: ${formData.aiFeatures.join(", ")}\nNotes: ${formData.notes || "None"}`,
          preferredContact: "Phone",
          source: "ai-receptionist-form",
        }),
      });

      // 2. Netlify Forms Dual Submission
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

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setIsSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#06b6d4", "#7c3aed", "#25D366"],
      });
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(errMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="receptionist-enquiry" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl max-w-3xl mx-auto">
      {isSubmitted ? (
        <div className="text-center py-10 flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 mb-6">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-outfit mb-3">
            AI Receptionist Demo Request Received
          </h3>
          <p className="text-slate-600 text-sm sm:text-base max-w-lg mb-8 leading-relaxed font-medium">
            Thank you, <strong className="text-slate-900">{formData.contactPerson}</strong>. We have received your requirements for{" "}
            <strong className="text-cyan-600">{formData.businessName || "your business"}</strong>. Our telephony and AI engineers will configure a tailored voice demonstration and contact you at{" "}
            <strong className="text-slate-900">{formData.phone}</strong> or <strong className="text-slate-900">{formData.email}</strong> within 24 hours.
          </p>

          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 max-w-md w-full mb-6">
            <p className="text-xs text-emerald-900 font-semibold mb-2">
              Want to test a live call flow or fast-track setup?
            </p>
            <a
              href={SITE_CONFIG.getWhatsAppLink("ai-receptionist")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition-all shadow-sm"
            >
              <span>Connect on WhatsApp Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            onClick={() => {
              setFormData(INITIAL_FORM);
              setIsSubmitted(false);
            }}
            className="px-6 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors"
          >
            Submit Another Request
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
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[11px] font-bold text-cyan-800 uppercase tracking-wider mb-2">
              <Bot className="w-3.5 h-3.5 text-cyan-600" />
              <span>Tailored Setup &amp; Live Demo</span>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-950 font-outfit">
              Request Your AI Receptionist Demo
            </h3>
            <p className="text-xs text-slate-600 font-medium mt-1">
              Configure your business details below to see how our AI receptionist answers your specific customer inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800">
                Business Name <span className="text-cyan-600">*</span>
              </label>
              <input
                type="text"
                name="businessName"
                required
                value={formData.businessName}
                onChange={handleChange}
                placeholder="e.g. Apex Plumbing & Heating"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-cyan-500 text-sm text-slate-900 focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800">
                Contact Person <span className="text-cyan-600">*</span>
              </label>
              <input
                type="text"
                name="contactPerson"
                required
                value={formData.contactPerson}
                onChange={handleChange}
                placeholder="e.g. David Miller"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-cyan-500 text-sm text-slate-900 focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800">
                Business Email <span className="text-cyan-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="david@apexplumbing.co.uk"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-cyan-500 text-sm text-slate-900 focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800">
                Telephone / Mobile Number <span className="text-cyan-600">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 07950 501323"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-cyan-500 text-sm text-slate-900 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800">Industry / Business Type</label>
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-cyan-500 text-xs text-slate-900 focus:outline-none transition-colors"
              >
                {BUSINESS_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800">Monthly Call Volume</label>
              <select
                name="callVolume"
                value={formData.callVolume}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-cyan-500 text-xs text-slate-900 focus:outline-none transition-colors"
              >
                {CALL_VOLUMES.map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800">Current Phone Setup</label>
              <select
                name="currentPhoneSystem"
                value={formData.currentPhoneSystem}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-cyan-500 text-xs text-slate-900 focus:outline-none transition-colors"
              >
                {PHONE_SYSTEMS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          {/* AI Features Checklist */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-800 block">
              Required AI Receptionist Features
            </label>
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
                        ? "border-cyan-500 bg-cyan-50/60 font-semibold text-cyan-950"
                        : "border-slate-200 bg-slate-50/50 text-slate-700 hover:bg-slate-100/60"
                    }`}
                  >
                    <span>{feat}</span>
                    <span className={`w-4 h-4 rounded-md border flex items-center justify-center text-[10px] ${
                      checked ? "border-cyan-600 bg-cyan-600 text-white font-bold" : "border-slate-300"
                    }`}>
                      {checked ? "✓" : ""}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-800">
              Specific FAQs or Greeting Instructions (Optional)
            </label>
            <textarea
              name="notes"
              rows={2}
              value={formData.notes}
              onChange={handleChange}
              placeholder="e.g. We want the receptionist to check if it's an emergency leak in London postcodes and take contact info..."
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-cyan-500 text-sm text-slate-900 focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Privacy Note */}
          <div className="text-[11px] text-slate-500">
            By requesting a demo, you agree to our <a href="/privacy" className="underline hover:text-slate-800">Privacy Policy</a>. We configure telephone and AI agents under strict data privacy protocols.
          </div>

          {error && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2.5 text-xs text-red-700">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-100">
            <a
              href={SITE_CONFIG.getWhatsAppLink("ai-receptionist")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800"
            >
              <span>Questions first? Chat on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-cyan-600 hover:bg-cyan-700 text-xs font-bold text-white transition-all shadow-md hover:shadow-lg disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Configuring Demo...</span>
                </>
              ) : (
                <>
                  <span>Request AI Receptionist Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
