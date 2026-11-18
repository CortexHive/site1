import {
  TrendingUp,
  Layers,
  Cpu,
  Sliders,
  PoundSterling,
  Wrench,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const REASONS = [
  {
    icon: TrendingUp,
    title: "Practical Business-Focused Solutions",
    desc: "We focus on commercial outcomes — helping you attract customers, answer enquiries and reduce manual admin rather than adding unnecessary complexity.",
  },
  {
    icon: Layers,
    title: "Websites and Software Under One Roof",
    desc: "Start with a professional website today and add AI call answering, workflow automation or custom software whenever your business is ready.",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    desc: "We build with reliable, modern web and AI technologies (Next.js, React, TypeScript, PostgreSQL) so your digital systems stay fast, secure and maintainable.",
  },
  {
    icon: Sliders,
    title: "Flexible Project Engagement",
    desc: "Choose from structured website packages for quick turnaround or individually scoped milestones for custom AI and software development.",
  },
  {
    icon: PoundSterling,
    title: "Transparent Pricing",
    desc: "Clear website package starting prices and upfront custom project quotations with defined deliverables, revision allowances and no hidden fees.",
  },
  {
    icon: Wrench,
    title: "Tailored Development",
    desc: "Every website, AI assistant and software application is shaped around your specific industry, customers and day-to-day workflow.",
  },
  {
    icon: ShieldCheck,
    title: "Ongoing Support Options",
    desc: "You own your custom code upon completion, with optional hosting, maintenance and ongoing technical support available whenever you need it.",
  },
];

export default function About() {
  return (
    <section id="why-cortexhive" className="py-20 sm:py-28 bg-[#F8FAFD] border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-10 mb-12 border-b border-[#E2E8F0]">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-xs font-bold uppercase tracking-wider text-blue-600">
              Why Choose CortexHive
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#14243A] tracking-tight leading-[1.12]">
              Built Around Real Business Needs.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              We combine accessible website packages for small businesses with full-scale AI automation and custom software capability — giving you a reliable UK technology partner at every stage of growth.
            </p>
          </div>
        </div>

        {/* 7 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {REASONS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-7 hover:border-blue-300 shadow-subtle transition-all ${
                  idx === 6 ? "md:col-span-2 lg:col-span-3" : ""
                }`}
              >
                <div className={idx === 6 ? "flex flex-col sm:flex-row sm:items-center gap-4" : "space-y-3.5"}>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#14243A]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Honest Delivery Model Callout */}
        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Our Delivery Model
            </span>
            <h3 className="text-base sm:text-lg font-bold text-[#14243A]">
              Direct Collaboration Without Agency Bloat
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              CortexHive operates a lean, modern UK delivery model. You communicate directly with the specialists designing and building your project — avoiding slow account management layers and unnecessary agency overheads.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F5F8FC] hover:bg-blue-50 text-[#14243A] hover:text-blue-600 border border-[#E2E8F0] text-xs font-semibold transition-colors flex-shrink-0"
          >
            <span>More About CortexHive</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
