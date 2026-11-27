"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import { openConsultationModal } from "./consultation-modal";
import { PROCESS_EXPLAINER_STEPS } from "./process-3d-explainer";

const Process3DExplainer = dynamic(() => import("./process-3d-explainer"), {
  ssr: false,
  loading: () => (
    <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#07162B] via-[#0E2A4F] to-[#040D1B] border border-[#143A6B]/30 shadow-editorial h-[480px] flex flex-col items-center justify-center gap-3 text-blue-100/80">
      <div className="w-9 h-9 rounded-full border-2 border-[#C69B3A]/40 border-t-[#C69B3A] animate-spin" />
      <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[#F4E3B2]">
        Loading 3D Process Explainer...
      </span>
    </div>
  ),
});

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="how-it-works"
      className="py-20 sm:py-28 bg-white border-b border-[#DCE6F2]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-10 mb-12 border-b border-[#DCE6F2]">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#143A6B]">
              <span className="w-6 h-[2px] bg-[#C69B3A]" />
              <span>How We Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0A1628] tracking-[-0.03em] leading-[1.08]">
              Four deliberate steps from{" "}
              <span className="text-[#143A6B]">brief to launch.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-[15px] text-[#33475F] leading-relaxed">
              From your initial consultation to going live, every milestone is clear, documented, and communicated directly with our UK team.
            </p>
          </div>
        </div>

        {/* Interactive 3D Explainer + Synced 4-Step Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-7">
            <Process3DExplainer
              activeStep={activeStep}
              onStepChange={setActiveStep}
            />
          </div>

          <div className="lg:col-span-5 space-y-3">
            {PROCESS_EXPLAINER_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left rounded-2xl p-5 border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#F4F7FB] border-[#143A6B]/40 shadow-subtle"
                      : "bg-white border-[#DCE6F2] hover:border-[#143A6B]/25 hover:bg-[#F4F7FB]/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`w-10 h-10 rounded-xl font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 transition-colors ${
                        isSelected
                          ? "bg-[#143A6B] text-white"
                          : "bg-[#EDF3FA] text-[#143A6B]"
                      }`}
                    >
                      {step.number}
                    </span>
                    <div className="min-w-0 space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-[#0A1628]">
                          {step.title}
                        </h3>
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C69B3A]" />
                        )}
                      </div>
                      <p className="font-mono text-[11px] font-semibold text-[#C69B3A]">
                        {step.subtitle}
                      </p>
                      <p className="text-xs sm:text-[13.5px] text-[#33475F] leading-relaxed pt-0.5">
                        {step.details}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[#DCE6F2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#33475F]">
            Ready to start Step 01 with a free, no-obligation 15-minute consultation?
          </p>
          <button
            type="button"
            onClick={() => openConsultationModal()}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#143A6B] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-semibold shadow-subtle transition-colors cursor-pointer"
          >
            <span>Book a Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
