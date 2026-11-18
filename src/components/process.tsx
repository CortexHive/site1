"use client";

import {
  Compass,
  ClipboardList,
  Code2,
  Rocket,
  ArrowRight,
} from "lucide-react";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "DISCOVER",
    subtitle: "Understand your goals",
    desc: "Understand the business, requirements and challenges.",
    details:
      "We listen to how your business operates, what your customers need and what you want to achieve — whether that is a new website, an AI receptionist or custom software.",
    icon: Compass,
  },
  {
    number: "02",
    title: "PLAN",
    subtitle: "Clear scope & pricing",
    desc: "Recommend the right solution, scope and pricing.",
    details:
      "We outline the most suitable package or custom project specification with clear deliverables, revision allowances and upfront pricing before any work starts.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "BUILD",
    subtitle: "Design, develop & test",
    desc: "Design, develop and test the solution.",
    details:
      "We design the interface, build the functionality, test across mobile and desktop devices, and share progress with you for review and refinement.",
    icon: Code2,
  },
  {
    number: "04",
    title: "LAUNCH",
    subtitle: "Deploy & support",
    desc: "Deploy, hand over and provide agreed support.",
    details:
      "We launch your website or software live, verify forms and integrations, hand over your project assets and provide any agreed ongoing hosting or support.",
    icon: Rocket,
  },
];

export default function Process() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F8FC] border border-[#E2E8F0] text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
            How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#14243A] tracking-tight leading-[1.12]">
            Simple, Transparent Four-Step Process.
          </h2>
          <p className="text-sm sm:text-base text-[#475569] mt-3 leading-relaxed">
            From your initial enquiry to going live, we keep every step straightforward and well-communicated.
          </p>
        </div>

        {/* Connected 4-Step Timeline Grid */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-14 left-12 right-12 h-0.5 bg-[#E2E8F0] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="bg-[#F8FAFD] rounded-2xl border border-[#E2E8F0] p-6 sm:p-7 flex flex-col justify-between hover:border-blue-300 shadow-subtle transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-extrabold tracking-wider">
                        STEP {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-blue-600 shadow-2xs">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg font-extrabold text-[#14243A] tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 mt-0.5 mb-2.5">
                      {step.desc}
                    </p>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {step.details}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-[#14243A] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
          >
            <span>Start Step 1: Book a Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
