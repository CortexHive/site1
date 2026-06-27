"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Globe,
  Monitor,
  Megaphone,
  Video,
  Cpu,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import confetti from "canvas-confetti";

type FormData = {
  projectType: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
  brief: string;
};

const INITIAL_DATA: FormData = {
  projectType: "",
  budget: "",
  timeline: "",
  name: "",
  email: "",
  brief: "",
};

const PROJECT_TYPES = [
  { id: "SaaS Development", label: "SaaS Product", icon: Layers },
  { id: "Web App Development", label: "Custom Web App", icon: Globe },
  { id: "Website Design", label: "Marketing Website", icon: Monitor },
  { id: "Custom AI Tools", label: "AI Tools / Agents", icon: Cpu },
  { id: "Marketing & Ads", label: "Marketing Campaigns", icon: Megaphone },
  { id: "Video & UGC Content", label: "Video & UGC Content", icon: Video },
];

const BUDGET_RANGES = [
  { id: "Under $10k", label: "Under $10k", desc: "For simple web builds or discovery phases" },
  { id: "$10k - $30k", label: "$10k - $30k", desc: "For typical MVP builds and API integrations" },
  { id: "$30k - $50k", label: "$30k - $50k", desc: "For full SaaS systems or custom AI tooling" },
  { id: "$50k+", label: "$50k+", desc: "For enterprise-grade products and multi-platform solutions" },
];

const TIMELINES = [
  { id: "Under 1 month", label: "Under 1 month", desc: "Urgent MVP or immediate iteration need" },
  { id: "1 - 3 months", label: "1 - 3 months", desc: "Standard healthy development timeline" },
  { id: "3+ months", label: "3+ months", desc: "Large-scale strategic initiatives" },
];

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelect = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const nextStep = () => {
    // Validate current step before moving forward
    if (step === 1 && !formData.projectType) {
      setError("Please select a project type to continue.");
      return;
    }
    if (step === 2 && !formData.budget) {
      setError("Please select a budget range to continue.");
      return;
    }
    if (step === 3 && !formData.timeline) {
      setError("Please select a timeline to continue.");
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
      setError("Name is required.");
      return;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setError("A valid email address is required.");
      return;
    }
    if (!formData.brief.trim() || formData.brief.trim().length < 10) {
      setError("Please provide a brief project description (at least 10 characters).");
      return;
    }

    setError(null);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setIsSubmitted(true);
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.5 },
        colors: ["#06b6d4", "#3b82f6", "#a855f7"],
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
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative blurred backdrop glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-hive-purple/5 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-hive-cyan/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-[0.25em] text-hive-purple font-bold mb-3">
            Build With Us
          </h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-5">
            Start Your Innovation Partnership
          </h3>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Tell us about your project requirements and receive a detailed strategy blueprint and estimate within 24 hours.
          </p>
        </div>

        {/* Form Container */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border-slate-200 bg-white glow-purple max-w-3xl mx-auto">
          {isSubmitted ? (
            /* Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-hive-cyan/10 border border-hive-cyan/20 flex items-center justify-center mb-8">
                <CheckCircle className="w-10 h-10 text-hive-cyan" />
              </div>
              <h4 className="text-3xl font-bold text-slate-900 mb-4">Inquiry Received!</h4>
              <p className="text-slate-700 max-w-lg mb-8 leading-relaxed font-medium">
                Thank you, <strong className="text-hive-cyan">{formData.name}</strong>. We&apos;ve logged your request for a{" "}
                <strong className="text-hive-purple">{formData.projectType}</strong>. A strategist will email you at{" "}
                <strong>{formData.email}</strong> to set up a scoping call.
              </p>
              <button
                onClick={() => {
                  setFormData(INITIAL_DATA);
                  setStep(1);
                  setIsSubmitted(false);
                }}
                className="px-6 py-2.5 rounded-full bg-slate-50 border border-slate-250 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors"
              >
                Submit another request
              </button>
            </motion.div>
          ) : (
            /* Form Wizard */
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs text-slate-400 font-bold">
                  <span>STEP {step} OF 4</span>
                  <span className="text-slate-750">
                    {step === 1 && "Project Type"}
                    {step === 2 && "Estimated Budget"}
                    {step === 3 && "Desired Timeline"}
                    {step === 4 && "Contact Details"}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-hive-solid"
                    initial={{ width: "25%" }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Error Banner */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-xs text-red-500 font-medium"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{error}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Steps Animation wrapper */}
              <div className="min-h-[260px] flex flex-col justify-center">
                {step === 1 && (
                  /* Step 1: Project Type */
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <label className="text-lg font-bold text-slate-900 block">
                      What can we help you build?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {PROJECT_TYPES.map((type) => {
                        const Icon = type.icon;
                        const isSelected = formData.projectType === type.id;
                        return (
                          <button
                            type="button"
                            key={type.id}
                            onClick={() => handleSelect("projectType", type.id)}
                            className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${
                              isSelected
                                ? "bg-hive-cyan/10 border-hive-cyan text-slate-900"
                                : "bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-350 hover:text-slate-900"
                            }`}
                          >
                            <Icon className={`w-6 h-6 ${isSelected ? "text-hive-cyan" : ""}`} />
                            <span className="text-xs font-bold text-center leading-snug">
                              {type.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  /* Step 2: Budget Range */
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <label className="text-lg font-bold text-slate-900 block">
                      What is your estimated budget?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {BUDGET_RANGES.map((range) => {
                        const isSelected = formData.budget === range.id;
                        return (
                          <button
                            type="button"
                            key={range.id}
                            onClick={() => handleSelect("budget", range.id)}
                            className={`p-5 rounded-xl border text-left transition-all ${
                              isSelected
                                ? "bg-hive-purple/10 border-hive-purple text-slate-900"
                                : "bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-350"
                            }`}
                          >
                            <span className={`block font-bold text-sm ${isSelected ? "text-hive-purple" : "text-slate-800"}`}>
                              {range.label}
                            </span>
                            <span className="block text-xs text-slate-500 mt-1 leading-normal font-semibold">
                              {range.desc}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  /* Step 3: Timeline */
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <label className="text-lg font-bold text-slate-900 block">
                      What is your target timeline?
                    </label>
                    <div className="grid grid-cols-1 gap-3">
                      {TIMELINES.map((tl) => {
                        const isSelected = formData.timeline === tl.id;
                        return (
                          <button
                            type="button"
                            key={tl.id}
                            onClick={() => handleSelect("timeline", tl.id)}
                            className={`p-5 rounded-xl border text-left transition-all flex items-center justify-between ${
                              isSelected
                                ? "bg-hive-blue/10 border-hive-blue text-slate-900"
                                : "bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-350"
                            }`}
                          >
                            <div>
                              <span className={`block font-bold text-sm ${isSelected ? "text-hive-blue" : "text-slate-800"}`}>
                                {tl.label}
                              </span>
                              <span className="block text-xs text-slate-505 mt-1 font-semibold">
                                {tl.desc}
                              </span>
                            </div>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? "border-hive-blue" : "border-slate-400"}`}>
                              {isSelected && <div className="w-2 h-2 rounded-full bg-hive-blue" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  /* Step 4: Contact details */
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <label className="text-lg font-bold text-slate-900 block">
                      Almost there! How should we reach you?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 block">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full bg-slate-50 border border-slate-200 focus:border-hive-purple/55 focus:ring-1 focus:ring-hive-purple/55 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 block">Business Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full bg-slate-50 border border-slate-200 focus:border-hive-purple/55 focus:ring-1 focus:ring-hive-purple/55 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 block">Project Description</label>
                      <textarea
                        name="brief"
                        value={formData.brief}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us what you're building. E.g. 'I want to build a real estate investment SaaS with an automated property valuation AI engine...'"
                        className="w-full bg-slate-50 border border-slate-200 focus:border-hive-purple/55 focus:ring-1 focus:ring-hive-purple/55 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none transition-all resize-none"
                      />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-250 hover:border-slate-350 hover:bg-slate-50 text-xs font-bold text-slate-700 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-hive-solid hover:shadow-lg hover:shadow-hive-blue/20 text-xs font-bold text-white transition-all transform hover:-translate-y-0.5"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-hive-solid hover:shadow-lg hover:shadow-hive-cyan/25 text-xs font-bold text-white transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:shadow-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Strategy Inquiry</span>
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
