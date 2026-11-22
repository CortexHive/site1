import {
  Target,
  Code2,
  Smartphone,
  Bot,
  FileCheck2,
  Wrench,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const REASONS = [
  {
    icon: Target,
    title: "Solutions Tailored to Business Requirements",
    desc: "We listen to how your business works first and recommend practical technology that supports enquiries, efficiency and growth.",
  },
  {
    icon: Code2,
    title: "Modern Development",
    desc: "Built on reliable modern frameworks (Next.js, React, TypeScript and PostgreSQL) designed for speed, security and long-term dependability.",
  },
  {
    icon: Smartphone,
    title: "Responsive User Experiences",
    desc: "Every website, dashboard and application is intentionally designed for mobile phones, tablets and desktop monitors.",
  },
  {
    icon: Bot,
    title: "Practical AI Integration",
    desc: "We apply AI where it delivers tangible value — answering calls, qualifying leads, processing documents and reducing manual admin.",
  },
  {
    icon: FileCheck2,
    title: "Clear Project Scope",
    desc: "Transparent starting prices for website packages and written milestone specifications for custom software before work begins.",
  },
  {
    icon: Wrench,
    title: "Maintainable Software",
    desc: "Clean, structured codebases with clear handover so your digital products can evolve as your business grows.",
  },
  {
    icon: ShieldCheck,
    title: "Agreed Support Options",
    desc: "Choose optional hosting, updates and ongoing technical support plans that match your needs without rigid lock-in contracts.",
  },
];

export default function About() {
  return (
    <section id="why-cortexhive" className="py-20 sm:py-28 bg-[#F8FAFD] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-10 mb-12 border-b border-[#E2E8F0]">
          <div className="lg:col-span-7 space-y-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-600 block">
              Why CortexHive
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#14243A] tracking-tight leading-[1.1]">
              Practical Technology Built for Real Operations.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              We combine accessible website packages for small businesses with full-stack AI and software development capability — backed by real products we build and maintain.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {REASONS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-7 hover:border-slate-300 transition-colors ${
                  idx === 6 ? "md:col-span-2 lg:col-span-3" : ""
                }`}
              >
                <div className={idx === 6 ? "flex flex-col sm:flex-row sm:items-center gap-4" : "space-y-3"}>
                  <div className="w-9 h-9 rounded-lg bg-[#F5F8FC] border border-[#E2E8F0] text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#14243A]">
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

        {/* Client Delivery Guarantees */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Written Scope First", value: "Fixed Quotes, No Surprises" },
            { label: "Full Ownership", value: "You Own Your Domain & Code" },
            { label: "UK Communication", value: "Direct WhatsApp, Phone & Email" },
            { label: "Fast Response", value: "Replies Within 24 Hours" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-[#E2E8F0] rounded-xl px-5 py-4"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block">
                {stat.label}
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#14243A] mt-0.5 block">
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#475569] max-w-2xl">
            Want to learn more about how CortexHive operates, or read our practical guides for UK small businesses?
          </p>
          <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
            <Link
              href="/guides"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#14243A] hover:text-blue-600 transition-colors"
            >
              <span>UK Business Guides</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-[#14243A] transition-colors"
            >
              <span>About CortexHive</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
