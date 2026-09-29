import {
  Target,
  ShieldCheck,
  Zap,
  Users,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const VALUES = [
  {
    icon: Target,
    title: "Practicality Over Hype",
    desc: "We focus on software that solves measurable business problems rather than chasing superficial AI novelty.",
  },
  {
    icon: Zap,
    title: "Velocity Through Modern Stacks",
    desc: "By combining type-safe TypeScript, Next.js, and automated pipelines, we deliver working product in weeks, not quarters.",
  },
  {
    icon: ShieldCheck,
    title: "Engineering Discipline",
    desc: "We write clean, documented, and maintainable codebases with secure authentication, strict schemas, and automated testing.",
  },
  {
    icon: Users,
    title: "Distributed Specialist Resourcing",
    desc: "We assemble targeted specialists around each project's exact domain, avoiding bloated overhead and generic staffing.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Who We Are & Mission */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold text-purple-700 uppercase tracking-widest">
              About CortexHive
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-outfit tracking-tight leading-tight">
              An AI & Digital Product Studio.
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-semibold">
              CortexHive was built around a simple principle: modern businesses don&apos;t need another abstract AI presentation or superficial technology demo. They need working software that solves real problems.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              CortexHive brings together AI, software development, automation and product thinking to turn business problems and product ideas into practical digital solutions.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              From automated workflow triage to full-stack platforms like MarkScheme and driver community platforms like Rydigoo, our team partners with founders and business operators to take concepts through complete architecture, engineering, and deployment.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 hover:text-purple-800 transition-colors"
              >
                <span>Read Full Company Profile & Delivery Model</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Values & Core Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950 font-outfit">
                How We Operate
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {VALUES.map((val) => {
                  const Icon = val.icon;
                  return (
                    <div key={val.title} className="space-y-2">
                      <div className="w-9 h-9 rounded-xl bg-purple-100/70 text-purple-700 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 font-outfit">
                        {val.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {val.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Location: London, United Kingdom</span>
                <span>Model: Distributed Product Studio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
