import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PRINCIPLES = [
  {
    num: "01",
    title: "Built Around Business Operations",
    desc: "We listen to how your business works first and recommend practical technology that supports enquiries, efficiency, and growth.",
  },
  {
    num: "02",
    title: "Modern Full-Stack Engineering",
    desc: "Engineered on dependable modern frameworks (Next.js, React, TypeScript, and PostgreSQL) designed for speed, security, and longevity.",
  },
  {
    num: "03",
    title: "Practical AI Integration",
    desc: "We apply AI where it delivers tangible value — answering calls, qualifying leads, processing documents, and reducing manual admin.",
  },
  {
    num: "04",
    title: "Written Scope & Full Ownership",
    desc: "Transparent starting prices for website packages and written milestone specifications for custom software — you own your domain and code.",
  },
  {
    num: "05",
    title: "Responsive Across Every Device",
    desc: "Every website, voice interface, dashboard, and application is intentionally crafted for phones, tablets, and desktop displays.",
  },
  {
    num: "06",
    title: "Direct UK Communication",
    desc: "Speak directly with our team via WhatsApp, telephone, or email with responses within 24 hours and optional support — zero lock-in.",
  },
];

export default function About() {
  return (
    <section
      id="why-cortexhive"
      className="py-20 sm:py-28 bg-[#F4F7FB] border-b border-[#DCE6F2]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-10 mb-14 border-b border-[#DCE6F2]">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[#143A6B]">
              <span className="w-6 h-[1px] bg-[#143A6B]" />
              <span>Why CortexHive</span>
            </div>
            <h2 className="font-extrabold tracking-[-0.03em] text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#0A1628] leading-[1.08]">
              Engineering precision.{" "}
              <em className="italic text-[#143A6B]">Commercial clarity.</em>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-[15px] text-[#33475F] leading-relaxed">
              We combine accessible website packages for UK small businesses with full-stack AI and software engineering — backed by real products we build and operate.
            </p>
          </div>
        </div>

        {/* Architectural 3x2 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 mb-14">
          {PRINCIPLES.map((item) => (
            <div
              key={item.num}
              className="pt-6 border-t border-[#DCE6F2] space-y-2.5"
            >
              <span className="font-mono text-[11px] font-medium tracking-[0.14em] text-[#C69B3A] block">
                {item.num}
              </span>
              <h3 className="text-lg font-semibold text-[#0A1628]">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#33475F] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Links Bar */}
        <div className="pt-8 border-t border-[#DCE6F2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#33475F] max-w-2xl">
            Want to learn more about how CortexHive operates, or read our practical guides for UK businesses?
          </p>
          <div className="flex flex-wrap items-center gap-7 flex-shrink-0">
            <Link
              href="/guides"
              className="text-xs sm:text-sm font-semibold text-[#0A1628] border-b border-[#143A6B] pb-0.5 hover:text-[#143A6B] hover:border-[#143A6B] inline-flex items-center gap-1.5 transition-colors"
            >
              <span>UK Business Guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#33475F] hover:text-[#0A1628] transition-colors"
            >
              <span>About CortexHive</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
