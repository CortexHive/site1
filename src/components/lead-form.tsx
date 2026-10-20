"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Layers,
  Globe,
  Bot,
  Laptop,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Loader2,
  Calendar,
  PoundSterling,
  Mail,
} from "lucide-react";
import confetti from "canvas-confetti";

export type ProjectEnquiryData = {
  name: string;
  company: string;
  email: string;
  website: string;
  serviceRequired: string;
  problem: string;
  brief: string;
  budget: string;
  timeline: string;
};

const INITIAL_DATA: ProjectEnquiryData = {
  name: "",
  company: "",
  email: "",
  website: "",
  serviceRequired: "",
  problem: "",
  brief: "",
  budget: "",
  timeline: "",
};

const SERVICES = [
  {
    id: "AI Automation",
    label: "AI Automation",
    desc: "Intelligent workflows, enquiry routing, document & CRM automation",
    icon: Bot,
  },
  {
    id: "AI Application",
    label: "AI Application",
    desc: "Autonomous agents, knowledge bases, document intelligence, RAG",
    icon: Cpu,
  },
  {
    id: "Software / MVP",
    label: "Software / MVP",
    desc: "End-to-end software product, minimum viable product, full prototype",
    icon: Layers,
  },
  {
    id: "Web Application",
    label: "Web Application",
    desc: "High-performance web apps, dashboards, customer portals, SaaS",
    icon: Globe,
  },
  {
    id: "Digital Platform",
    label: "Digital Platform",
    desc: "Community platforms, directories, online marketplaces, tools",
    icon: Laptop,
  },
  {
    id: "Other",
    label: "Other / Consultation",
    desc: "Technical discovery, architecture audit, or bespoke requirement",
    icon: HelpCircle,
  },
];

const BUDGET_RANGES = [
  { id: "Under £500", label: "Under £500", desc: "Small automation task or prototype scope" },
  { id: "£500–£1,000", label: "£500 – £1,000", desc: "Targeted workflow automation or simple app feature" },
  { id: "£1,000–£2,500", label: "£1,000 – £2,500", desc: "Custom AI tool, focused MVP, or web application" },
  { id: "£2,500–£5,000", label: "£2,500 – £5,000", desc: "Comprehensive software product or multi-agent system" },
  { id: "£5,000+", label: "£5,000+", desc: "Full-scale platform development and complex architecture" },
];

const TIMELINES = [
  { id: "ASAP", label: "ASAP", desc: "Immediate start required" },
  { id: "Within 1 Month", label: "Within 1 Month", desc: "Active scoping in progress" },
  { id: "1–3 Months", label: "1 – 3 Months", desc: "Planned product milestone" },
  { id: "Flexible", label: "Flexible", desc: "Exploring options and architecture" },
];

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<ProjectEnquiryData>(INITIAL_DATA);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelect = (field: keyof ProjectEnquiryData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    if (!formData.brief.trim() || formData.brief.trim().length < 10) {
      setError("Please describe what you are trying to build (at least 10 characters).");
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
          website: formData.website,
          projectType: formData.serviceRequired,
          problem: formData.problem,
          brief: formData.brief,
          budget: formData.budget,
          timeline: formData.timeline,
        }),
      });

      // 2. Also submit to Netlify Forms (native Netlify form dashboard capture)
      try {
        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            "form-name": "contact",
            name: formData.name,
            company: formData.company,
            email: formData.email,
            website: formData.website,
            serviceRequired: formData.serviceRequired,
            problem: formData.problem,
            brief: formData.brief,
            budget: formData.budget,
            timeline: formData.timeline,
          }).toString(),
        });
      } catch (netlifyErr) {
        console.warn("Netlify form capture notice:", netlifyErr);
      }

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit project enquiry.");
      }

      setIsSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#7c3aed", "#06b6d4", "#3b82f6"],
      });
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : "Failed to submit. Please try again.";
      setError(errMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const progressPercent = (step / 4) * 100;

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative blurred backdrop glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/5 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold text-purple-700 uppercase tracking-widest mb-4">
            Project Scoping &amp; Contact
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-outfit tracking-tight mb-4">
            Have a Problem Worth Solving?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Reach out directly via WhatsApp or email, or complete our structured scoping form. We&apos;ll review your requirements and provide practical feedback within 24 hours.
          </p>
        </div>

        {/* Quick Connect Options: WhatsApp & Direct Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
          {/* WhatsApp Direct Connect Card */}
          <a
            href="https://wa.me/447950501323?text=Hi%20CortexHive%2C%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-5 rounded-3xl bg-emerald-50/80 hover:bg-emerald-100/80 border border-emerald-200/80 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10 transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.531 1.93.814 2.79.815 3.183 0 5.77-2.586 5.77-5.766.002-3.181-2.583-5.766-5.769-5.766zm3.385 8.163c-.144.407-.837.774-1.171.823-.335.05-.776.082-2.222-.516-1.745-.722-2.871-2.493-2.958-2.609-.087-.116-.708-.941-.708-1.793 0-.852.449-1.272.608-1.446.16-.175.348-.218.464-.218.116 0 .232.001.333.006.106.005.249-.04.39.299.144.348.492 1.201.536 1.289.043.087.072.19.014.305-.058.116-.087.189-.174.29-.087.102-.183.228-.261.306-.088.087-.179.182-.077.357.101.174.45 1.743 1.968 2.392.203.087.324.076.445-.062.12-.138.514-.6.652-.804.137-.204.275-.171.464-.101.189.07 1.201.566 1.408.669.207.102.345.153.395.239.05.087.05.503-.094.91zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.981-1.396A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.638 0-3.167-.487-4.448-1.326l-.319-.21-2.955.775.789-2.883-.231-.367C3.937 14.887 3.4 13.487 3.4 12c0-4.742 3.858-8.6 8.6-8.6s8.6 3.858 8.6 8.6-3.858 8.6-8.6 8.6z"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-slate-900">Connect on WhatsApp</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-200/70 text-emerald-900">
                    Fastest
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-medium mt-0.5">
                  +44 7950 501323 • Direct Chat
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2" />
          </a>

          {/* Direct Email Card */}
          <a
            href="mailto:info@cortexhive.co.uk?subject=Project%20Enquiry%20-%20CortexHive"
            className="group relative p-5 rounded-3xl bg-purple-50/80 hover:bg-purple-100/80 border border-purple-200/80 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/10 transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-slate-900">Connect via Email</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-200/70 text-purple-900">
                    Inbox
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-medium mt-0.5">
                  info@cortexhive.co.uk • 24hr Reply
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2" />
          </a>
        </div>

        {/* Form Separator */}
        <div className="flex items-center justify-center gap-3 max-w-md mx-auto mb-8">
          <div className="h-px bg-slate-200 flex-1" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap">
            Or Use The Scoping Wizard Below
          </span>
          <div className="h-px bg-slate-200 flex-1" />
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl max-w-3xl mx-auto">
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
                <strong className="text-purple-600">{formData.serviceRequired}</strong>. A product engineer will review your requirements and reach out to{" "}
                <strong className="text-slate-900">{formData.email}</strong> within 24 hours.
              </p>
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
            /* Form Wizard */
            <form
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="space-y-8"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you&apos;re human: <input name="bot-field" />
                </label>
              </p>
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs text-slate-500 font-bold uppercase tracking-wider">
                  <span>Step {step} of 4</span>
                  <span className="text-purple-600">
                    {step === 1 && "Service Required"}
                    {step === 2 && "Estimated Budget"}
                    {step === 3 && "Target Timeline"}
                    {step === 4 && "Project Details & Contact"}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-600 to-cyan-500"
                    initial={{ width: "25%" }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2 font-medium">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Wizard Steps */}
              <AnimatePresence mode="wait">
                {/* STEP 1: SERVICE REQUIRED */}
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
                        Select the primary area of focus for your project.
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
                        This helps us recommend the most appropriate architecture and scoping model.
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
                        Select your target delivery or launch timeline.
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
                        Tell us about your project & contact details
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        Give us the core details so we can understand the problem and architecture.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-purple-600 text-sm text-slate-900 focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800">
                          Company / Organisation
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. Acme Tech"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-purple-600 text-sm text-slate-900 focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800">
                          Business Email <span className="text-purple-600">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="alex@company.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-purple-600 text-sm text-slate-900 focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800">
                          Current Website (if applicable)
                        </label>
                        <input
                          type="text"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          placeholder="https://example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-purple-600 text-sm text-slate-900 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800">
                        What problem are you trying to solve?
                      </label>
                      <input
                        type="text"
                        name="problem"
                        value={formData.problem}
                        onChange={handleChange}
                        placeholder="e.g. Manual customer enquiry intake is consuming 15 hours a week..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-purple-600 text-sm text-slate-900 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800">
                        What are you trying to build? <span className="text-purple-600">*</span>
                      </label>
                      <textarea
                        name="brief"
                        rows={3}
                        required
                        value={formData.brief}
                        onChange={handleChange}
                        placeholder="Briefly describe the key functionality, users, and desired outcome..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-purple-600 text-sm text-slate-900 focus:outline-none transition-colors resize-none"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
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
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Request a Project Estimate</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
