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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold text-purple-700 uppercase tracking-widest mb-4">
            Project Scoping
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-outfit tracking-tight mb-4">
            Have a Problem Worth Solving?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Tell us what you&apos;re trying to build, automate or improve. We&apos;ll review your requirements and provide practical feedback within 24 hours.
          </p>
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
            <form onSubmit={handleSubmit} className="space-y-8">
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
