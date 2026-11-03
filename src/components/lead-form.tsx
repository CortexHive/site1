"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Globe,
  Bot,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Loader2,
  Calendar,
  PoundSterling,
  Mail,
  Phone,
  Sparkles,
  Zap,
  SlidersHorizontal,
} from "lucide-react";
import confetti from "canvas-confetti";
import { SITE_CONFIG } from "@/lib/config";

export type ProjectEnquiryData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  serviceRequired: string;
  problem: string;
  brief: string;
  budget: string;
  timeline: string;
  preferredContact: string;
};

const INITIAL_DATA: ProjectEnquiryData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  website: "",
  serviceRequired: "Website Design",
  problem: "",
  brief: "",
  budget: "Under £500",
  timeline: "Within 1 Month",
  preferredContact: "WhatsApp",
};

export const SERVICES = [
  {
    id: "Website Design",
    label: "Website Design & Development",
    desc: "Bespoke company websites, conversion landing pages, and web redesigns.",
    icon: Globe,
  },
  {
    id: "£99 Small Business Website",
    label: "£99 Small Business Starter Website",
    desc: "Professional 1-page site for tradespeople, builders, plumbers, cleaners, and local services.",
    icon: Sparkles,
  },
  {
    id: "AI Receptionist",
    label: "AI Receptionist & Call Answering",
    desc: "24/7 AI answering service that picks up calls, answers FAQs, and captures customer leads.",
    icon: Phone,
  },
  {
    id: "AI Automation",
    label: "AI & Business Automation",
    desc: "Intelligent workflows, CRM sync, enquiry triage, and document extraction pipelines.",
    icon: Bot,
  },
  {
    id: "Software Development",
    label: "Custom Software Development",
    desc: "Full-stack SaaS MVPs, client portals, internal dashboards, and database systems.",
    icon: Layers,
  },
  {
    id: "Other",
    label: "Other / Technical Discovery",
    desc: "Architecture audit, technology consulting, or bespoke digital transformation.",
    icon: HelpCircle,
  },
];

const BUDGET_RANGES = [
  { id: "£99 Starter Package", label: "£99 Starter Package", desc: "For trades & small business 1-page websites" },
  { id: "Under £500", label: "Under £500", desc: "Small automation task or prototype scope" },
  { id: "£500–£1,000", label: "£500 – £1,000", desc: "Targeted workflow automation or standard web development" },
  { id: "£1,000–£2,500", label: "£1,000 – £2,500", desc: "Custom AI tool, focused MVP, or multi-page business platform" },
  { id: "£2,500–£5,000", label: "£2,500 – £5,000", desc: "Comprehensive software product or multi-agent system" },
  { id: "£5,000+", label: "£5,000+", desc: "Full-scale platform development and complex architecture" },
];

const TIMELINES = [
  { id: "ASAP", label: "ASAP (Within 7 days)", desc: "Immediate start required" },
  { id: "Within 1 Month", label: "Within 1 Month", desc: "Active scoping in progress" },
  { id: "1–3 Months", label: "1 – 3 Months", desc: "Planned product milestone" },
  { id: "Flexible", label: "Flexible", desc: "Exploring options and architecture" },
];

export default function LeadForm({ defaultService }: { defaultService?: string }) {
  const [mode, setMode] = useState<"fast" | "wizard">("fast");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<ProjectEnquiryData>({
    ...INITIAL_DATA,
    serviceRequired: defaultService || INITIAL_DATA.serviceRequired,
    budget: defaultService === "£99 Small Business Website" ? "£99 Starter Package" : INITIAL_DATA.budget,
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handlePackageSelect = (e: Event) => {
      const customEvent = e as CustomEvent<{ serviceRequired: string; budget: string }>;
      if (customEvent.detail) {
        setFormData((prev) => ({
          ...prev,
          serviceRequired: customEvent.detail.serviceRequired || prev.serviceRequired,
          budget: customEvent.detail.budget || prev.budget,
        }));
        setError(null);
      }
    };
    window.addEventListener("cortexhive:select-package", handlePackageSelect);
    return () => window.removeEventListener("cortexhive:select-package", handlePackageSelect);
  }, []);

  const handleSelect = (field: keyof ProjectEnquiryData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const nextStep = () => {
    if (step === 1 && !formData.serviceRequired) {
      setError("Please select the primary service required.");
      return;
    }
    if (step === 2 && !formData.budget) {
      setError("Please select an estimated budget range.");
      return;
    }
    if (step === 3 && !formData.timeline) {
      setError("Please select your target timeline.");
      return;
    }
    setError(null);
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setError(null);
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please provide a valid business email address.");
      return;
    }
    if (!formData.brief.trim() || formData.brief.trim().length < 8) {
      setError("Please describe what you are looking to build or achieve (at least 8 characters).");
      return;
    }

    setError(null);
    setIsSubmitting(true);

    try {
      // 1. Submit to internal API endpoint (Prisma SQLite, Slack, Resend, Mailjet)
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          website: formData.website,
          projectType: formData.serviceRequired,
          problem: formData.problem,
          brief: formData.brief,
          budget: formData.budget,
          timeline: formData.timeline,
          preferredContact: formData.preferredContact,
        }),
      });

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
            website: formData.website,
            serviceRequired: formData.serviceRequired,
            budget: formData.budget,
            timeline: formData.timeline,
            preferredContact: formData.preferredContact,
            problem: formData.problem,
            brief: formData.brief,
          }).toString(),
        });
      } catch (netlifyErr) {
        console.warn("Netlify form capture notice:", netlifyErr);
      }

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit enquiry.");
      }

      setIsSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#7c3aed", "#06b6d4", "#25D366"],
      });
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : "Failed to submit. Please try again.";
      setError(errMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold text-purple-700 uppercase tracking-widest mb-3">
            Start a Project
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 font-outfit tracking-tight mb-3 sm:mb-4">
            Get a Free Quote or Scoping Call.
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-medium px-2 sm:px-0">
            Tell us about your business goals. We review requirements within 24 hours and provide transparent scope, timeline, and fixed pricing options.
          </p>
        </div>

        {/* Quick Connect Options (WhatsApp & Email Direct) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto mb-6 sm:mb-8">
          {/* WhatsApp Direct Chat Card */}
          <a
            href={SITE_CONFIG.getWhatsAppLink("quote")}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-emerald-50/80 hover:bg-emerald-100/80 border border-emerald-200/80 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10 transition-all flex items-center justify-between active:scale-98"
          >
            <div className="flex items-center gap-3 sm:gap-3.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.531 1.93.814 2.79.815 3.183 0 5.77-2.586 5.77-5.766.002-3.181-2.583-5.766-5.769-5.766zm3.385 8.163c-.144.407-.837.774-1.171.823-.335.05-.776.082-2.222-.516-1.745-.722-2.871-2.493-2.958-2.609-.087-.116-.708-.941-.708-1.793 0-.852.449-1.272.608-1.446.16-.175.348-.218.464-.218.116 0 .232.001.333.006.106.005.249-.04.39.299.144.348.492 1.201.536 1.289.043.087.072.19.014.305-.058.116-.087.189-.174.29-.087.102-.183.228-.261.306-.088.087-.179.182-.077.357.101.174.45 1.743 1.968 2.392.203.087.324.076.445-.062.12-.138.514-.6.652-.804.137-.204.275-.171.464-.101.189.07 1.201.566 1.408.669.207.102.345.153.395.239.05.087.05.503-.094.91zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.981-1.396A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.638 0-3.167-.487-4.448-1.326l-.319-.21-2.955.775.789-2.883-.231-.367C3.937 14.887 3.4 13.487 3.4 12c0-4.742 3.858-8.6 8.6-8.6s8.6 3.858 8.6 8.6-3.858 8.6-8.6 8.6z"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-bold text-slate-900">Chat on WhatsApp</span>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-200/70 text-emerald-900">
                    Fastest
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 font-medium mt-0.5">
                  {SITE_CONFIG.phoneDisplay} • Direct Reply
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2" />
          </a>

          {/* Direct Email Card */}
          <a
            href="mailto:info@cortexhive.co.uk?subject=Project%20Enquiry%20-%20CortexHive"
            className="group relative p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-purple-50/80 hover:bg-purple-100/80 border border-purple-200/80 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/10 transition-all flex items-center justify-between active:scale-98"
          >
            <div className="flex items-center gap-3 sm:gap-3.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-bold text-slate-900">Connect via Email</span>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-200/70 text-purple-900">
                    Inbox
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 font-medium mt-0.5">
                  {SITE_CONFIG.email} • 24hr Reply
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2" />
          </a>
        </div>

        {/* Form Separator */}
        <div className="flex items-center justify-center gap-3 max-w-md mx-auto mb-6 sm:mb-8">
          <div className="h-px bg-slate-200 flex-1" />
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap">
            Or Complete The Scoping Form Below
          </span>
          <div className="h-px bg-slate-200 flex-1" />
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 border border-slate-200 shadow-xl max-w-3xl mx-auto">
          {isSubmitted ? (
            /* Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-outfit mb-3">
                Project Enquiry Received
              </h3>
              <p className="text-slate-600 text-sm sm:text-base max-w-lg mb-8 leading-relaxed font-medium">
                Thank you, <strong className="text-slate-900">{formData.name}</strong>. We have received your enquiry regarding{" "}
                <strong className="text-purple-600">{formData.serviceRequired}</strong>. Our team will review your requirements and reach out to{" "}
                <strong className="text-slate-900">{formData.email}</strong> within 24 hours.
              </p>

              {/* Optional Instant WhatsApp follow up */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 max-w-md w-full mb-6">
                <p className="text-xs text-emerald-900 font-semibold mb-3">
                  Want an immediate update or have urgent questions?
                </p>
                <a
                  href={SITE_CONFIG.getWhatsAppLink("quote")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition-all shadow-sm"
                >
                  <span>Follow Up on WhatsApp Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <button
                onClick={() => {
                  setFormData(INITIAL_DATA);
                  setStep(1);
                  setIsSubmitted(false);
                }}
                className="px-6 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors"
              >
                Submit Another Enquiry
              </button>
            </motion.div>
          ) : (
            /* Form Container (Fast 30s Mode or 4-Step Wizard) */
            <form
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="space-y-7"
            >
              {/* Hidden Netlify Inputs */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              {/* Mode Switcher: Quick 30-Second Quote vs 4-Step Guided Wizard */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
                <div className="inline-flex p-1 rounded-2xl bg-slate-100 border border-slate-200/80 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => {
                      setMode("fast");
                      setError(null);
                    }}
                    className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2.5 sm:py-2 rounded-xl text-xs font-bold transition-all ${
                      mode === "fast"
                        ? "bg-white text-purple-700 shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5 text-purple-600" />
                    <span>Quick Quote (30s)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMode("wizard");
                      setError(null);
                    }}
                    className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2.5 sm:py-2 rounded-xl text-xs font-bold transition-all ${
                      mode === "wizard"
                        ? "bg-white text-purple-700 shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
                    <span>4-Step Scoping</span>
                  </button>
                </div>

                <div className="text-[11px] font-semibold text-slate-500 text-center sm:text-right truncate">
                  Selected:{" "}
                  <span className="text-purple-700 font-bold">{formData.serviceRequired}</span>
                </div>
              </div>

              {mode === "fast" ? (
                /* FAST 30-SECOND SINGLE-SCREEN QUOTE FORM */
                <div className="space-y-4 sm:space-y-5">
                  {/* Quick Service Pill Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-800 block">
                      1. Select Service Needed <span className="text-purple-600">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5">
                      {SERVICES.map((s) => {
                        const Icon = s.icon;
                        const isSelected = formData.serviceRequired === s.id;
                        return (
                          <button
                            type="button"
                            key={s.id}
                            onClick={() => {
                              handleSelect("serviceRequired", s.id);
                              if (s.id === "£99 Small Business Website") {
                                handleSelect("budget", "£99 Starter Package");
                              }
                            }}
                            className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all active:scale-98 min-h-[46px] ${
                              isSelected
                                ? "border-purple-600 bg-purple-50/70 text-purple-950 shadow-sm"
                                : "border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 text-slate-700"
                            }`}
                          >
                            <div
                              className={`p-1.5 rounded-lg flex-shrink-0 ${
                                isSelected ? "bg-purple-600 text-white" : "bg-white text-slate-600 border border-slate-200"
                              }`}
                            >
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-xs font-bold leading-tight">{s.id}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800">
                        Your Name <span className="text-purple-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-purple-600 text-base sm:text-sm text-slate-900 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800">
                        Telephone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 07950 501323"
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-purple-600 text-base sm:text-sm text-slate-900 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800">
                        Email Address <span className="text-purple-600">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@example.co.uk"
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-purple-600 text-base sm:text-sm text-slate-900 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800">
                        Preferred Reply Method
                      </label>
                      <select
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleChange}
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-purple-600 text-base sm:text-sm text-slate-900 focus:outline-none transition-colors"
                      >
                        <option value="WhatsApp">WhatsApp (Fastest Reply)</option>
                        <option value="Phone">Phone Call</option>
                        <option value="Email">Email</option>
                      </select>
                    </div>
                  </div>

                  {/* Brief */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800">
                      How can we help your business? <span className="text-purple-600">*</span>
                    </label>
                    <textarea
                      name="brief"
                      rows={3}
                      required
                      value={formData.brief}
                      onChange={handleChange}
                      placeholder="Briefly describe your business and what you need (e.g., £99 starter website for our plumbing business, AI receptionist for missed calls, or custom web app)..."
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-purple-600 text-base sm:text-sm text-slate-900 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Error Alert */}
                  {error && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2.5 text-xs text-red-700">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Privacy & Submit */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <p className="text-[11px] text-slate-500 leading-relaxed text-center sm:text-left">
                      Protected by our{" "}
                      <a href="/privacy" className="underline hover:text-slate-800">
                        Privacy Policy
                      </a>
                      . No obligation &amp; zero spam.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-purple-600 hover:bg-purple-700 text-xs font-bold text-white transition-all shadow-lg shadow-purple-600/20 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Get My Free Quote</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                /* 4-STEP SCOPING WIZARD */
                <>
                  {/* Progress Bar / Steps Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                    {[
                      { num: 1, label: "Service" },
                      { num: 2, label: "Budget" },
                      { num: 3, label: "Timeline" },
                      { num: 4, label: "Details" },
                    ].map((s) => (
                      <div key={s.num} className="flex items-center gap-2">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                            step === s.num
                              ? "bg-purple-600 text-white"
                              : step > s.num
                              ? "bg-emerald-500 text-white"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {step > s.num ? "✓" : s.num}
                        </div>
                        <span
                          className={`text-xs font-semibold hidden sm:inline ${
                            step === s.num ? "text-slate-900" : "text-slate-400"
                          }`}
                        >
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>

              {/* STEP CONTENT */}
              <AnimatePresence mode="wait">
                {/* STEP 1: SERVICE */}
                {step === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-slate-950 font-outfit mb-1">
                        What service are you looking for?
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        Select the primary solution that matches your current business requirements.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {SERVICES.map((s) => {
                        const Icon = s.icon;
                        const isSelected = formData.serviceRequired === s.id;
                        return (
                          <button
                            type="button"
                            key={s.id}
                            onClick={() => handleSelect("serviceRequired", s.id)}
                            className={`p-4 rounded-2xl border text-left flex items-start gap-3.5 transition-all ${
                              isSelected
                                ? "border-purple-600 bg-purple-50/50 shadow-sm"
                                : "border-slate-200 bg-white hover:border-slate-300"
                            }`}
                          >
                            <div
                              className={`p-2 rounded-xl flex-shrink-0 ${
                                isSelected ? "bg-purple-600 text-white" : "bg-slate-100 text-slate-600"
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-slate-900 mb-0.5">
                                {s.label}
                              </div>
                              <div className="text-[11px] text-slate-500 leading-relaxed font-medium">
                                {s.desc}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: BUDGET */}
                {step === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-slate-950 font-outfit mb-1">
                        What is your estimated budget?
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        This helps us recommend the most appropriate scope and architecture without surprise costs.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {BUDGET_RANGES.map((b) => {
                        const isSelected = formData.budget === b.id;
                        return (
                          <button
                            type="button"
                            key={b.id}
                            onClick={() => handleSelect("budget", b.id)}
                            className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                              isSelected
                                ? "border-purple-600 bg-purple-50/50 shadow-sm"
                                : "border-slate-200 bg-white hover:border-slate-300"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                                  isSelected ? "bg-purple-600 text-white" : "bg-slate-100 text-slate-600"
                                }`}
                              >
                                <PoundSterling className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-sm font-bold text-slate-900">{b.label}</div>
                                <div className="text-xs text-slate-500 font-medium">{b.desc}</div>
                              </div>
                            </div>
                            <div
                              className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                isSelected ? "border-purple-600 bg-purple-600" : "border-slate-300"
                              }`}
                            >
                              {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: TIMELINE */}
                {step === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-slate-950 font-outfit mb-1">
                        When do you need this delivered?
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        Select your target launch date or operational deadline.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {TIMELINES.map((t) => {
                        const isSelected = formData.timeline === t.id;
                        return (
                          <button
                            type="button"
                            key={t.id}
                            onClick={() => handleSelect("timeline", t.id)}
                            className={`p-4 rounded-2xl border text-left flex items-start gap-3.5 transition-all ${
                              isSelected
                                ? "border-purple-600 bg-purple-50/50 shadow-sm"
                                : "border-slate-200 bg-white hover:border-slate-300"
                            }`}
                          >
                            <div
                              className={`p-2 rounded-xl flex-shrink-0 ${
                                isSelected ? "bg-purple-600 text-white" : "bg-slate-100 text-slate-600"
                              }`}
                            >
                              <Calendar className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-slate-900 mb-0.5">
                                {t.label}
                              </div>
                              <div className="text-[11px] text-slate-500 leading-relaxed font-medium">
                                {t.desc}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: CONTACT & DETAILS */}
                {step === 4 && (
                  <motion.div
                    key="step-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-5"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-slate-950 font-outfit mb-1">
                        Your Contact & Project Details
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        Provide your contact information and requirements so our specialists can prepare your proposal.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800">
                          Full Name <span className="text-purple-600">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Alex Morgan"
                          className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-purple-600 text-base sm:text-sm text-slate-900 focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800">
                          Business / Trading Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. Morgan Electricals"
                          className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-purple-600 text-base sm:text-sm text-slate-900 focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800">
                          Email Address <span className="text-purple-600">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="alex@example.co.uk"
                          className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-purple-600 text-base sm:text-sm text-slate-900 focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800">
                          Telephone / Mobile Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 07950 501323"
                          className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-purple-600 text-base sm:text-sm text-slate-900 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800">
                          Preferred Contact Method
                        </label>
                        <select
                          name="preferredContact"
                          value={formData.preferredContact}
                          onChange={handleChange}
                          className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-purple-600 text-base sm:text-sm text-slate-900 focus:outline-none transition-colors"
                        >
                          <option value="WhatsApp">WhatsApp (Fastest)</option>
                          <option value="Email">Email</option>
                          <option value="Phone">Phone Call</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800">
                          Existing Website (if any)
                        </label>
                        <input
                          type="text"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          placeholder="https://example.co.uk"
                          className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-purple-600 text-base sm:text-sm text-slate-900 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800">
                        Project Description &amp; Requirements <span className="text-purple-600">*</span>
                      </label>
                      <textarea
                        name="brief"
                        rows={3}
                        required
                        value={formData.brief}
                        onChange={handleChange}
                        placeholder="Tell us what you need built, any key features, or what business challenge you want solved..."
                        className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-purple-600 text-base sm:text-sm text-slate-900 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Privacy & Consent Notice */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 leading-relaxed">
                      By submitting, you consent to CortexHive processing your details in accordance with our{" "}
                      <a href="/privacy" className="underline hover:text-slate-800">Privacy Policy</a>{" "}
                      to respond to your enquiry. We never share your data with third parties.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error Alert */}
              {error && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2.5 text-xs text-red-700">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-purple-600 hover:bg-purple-700 text-xs font-bold text-white transition-all shadow-md hover:shadow-lg"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-xs font-bold text-white transition-all shadow-md hover:shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Enquiry</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                  )}
                </div>
              </>
            )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
