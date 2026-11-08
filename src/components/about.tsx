import {
  TrendingUp,
  Cpu,
  Receipt,
  Zap,
  MessageSquare,
  MapPin,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const PILLARS = [
  {
    icon: TrendingUp,
    title: "Commercial Focus",
    desc: "We build websites and software designed to generate measurable business results, not just look nice. Every project starts with your business objective.",
  },
  {
    icon: Cpu,
    title: "Modern Technology Stack",
    desc: "Built with Next.js, React, TypeScript, and production AI frameworks for sub-second speeds, enterprise security, and long-term maintainability.",
  },
  {
    icon: Receipt,
    title: "Transparent Pricing",
    desc: "Clear packages with no surprise costs, hidden retainers, or unnecessary upsells. You know exactly what you are paying before work starts.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Most websites live in 3–7 business days. Software MVPs delivered in weeks, not quarters. We move fast without cutting corners.",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    desc: "You talk directly with the people designing and engineering your product. No account manager layers, no phone tag, no lost instructions.",
  },
  {
    icon: MapPin,
    title: "UK-Based Perspective",
    desc: "Operating in the UK, understanding the UK market, UK trading environments, and local consumer expectations.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F8FC] border border-[#E2E8F0] text-xs font-bold text-blue-700 uppercase tracking-widest mb-4">
            Why CortexHive
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#14243A] tracking-tight mb-4">
            Technology Should Solve Problems. Not Create More.
          </h2>
          <p className="text-[#475569] text-base sm:text-lg leading-relaxed font-normal">
            Modern businesses don&apos;t need another abstract presentation or superficial demo. They need working software, fast websites, and practical automation that drives real revenue.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8FAFD] border border-[#E2E8F0] rounded-2xl p-6 sm:p-7 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#14243A] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#F5F8FC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <p className="text-xs sm:text-sm font-semibold text-[#14243A]">
              CortexHive is a UK digital agency committed to transparent delivery, honest advice, and commercial results.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 transition-colors flex-shrink-0"
          >
            <span>Read full company profile</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
