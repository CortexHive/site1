import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, CheckCircle2 } from "lucide-react";
import { BUSINESS_GUIDES } from "@/lib/guides";
import LeadForm from "@/components/lead-form";

export const metadata: Metadata = {
  title: "UK Small Business Website & AI Automation Guides | CortexHive",
  description:
    "Practical, jargon-free guides for UK small businesses, tradespeople and founders covering website costs, 24/7 AI receptionists, local SEO and workflow automation.",
  alternates: {
    canonical: "https://cortexhive.co.uk/guides",
  },
  openGraph: {
    title: "UK Small Business Website & AI Automation Guides | CortexHive",
    description:
      "Practical UK guides on website costs, AI receptionists, local Google visibility and business automation.",
    url: "https://cortexhive.co.uk/guides",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://cortexhive.co.uk" },
    { "@type": "ListItem", position: 2, name: "UK Business Guides", item: "https://cortexhive.co.uk/guides" },
  ],
};

export default function GuidesIndexPage() {
  return (
    <div className="bg-white min-h-screen text-[#475569] pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs text-[#64748B]">
            <Link href="/" className="hover:text-[#14243A] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#14243A] font-semibold">UK Business Guides</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F8FC] border border-[#E2E8F0] text-xs font-bold text-blue-600 uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Practical UK Insights</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#14243A] tracking-tight leading-[1.1]">
            Practical Guides for UK Small Businesses.
          </h1>

          <p className="text-sm sm:text-lg text-[#475569] leading-relaxed">
            Straightforward, jargon-free advice on website pricing, winning local Google enquiries, AI call handling and business automation across the UK.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {BUSINESS_GUIDES.map((guide) => (
            <article
              key={guide.slug}
              className="bg-white rounded-2xl border border-[#E2E8F0] hover:border-blue-300 shadow-subtle hover:shadow-hover transition-all p-6 sm:p-8 flex flex-col justify-between gap-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-bold text-[10px] uppercase tracking-wider">
                    {guide.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[#64748B] font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    {guide.readTime}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-[#14243A] tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                  <Link href={`/guides/${guide.slug}`}>{guide.title}</Link>
                </h2>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {guide.excerpt}
                </p>

                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  {guide.takeaways.slice(0, 2).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#475569]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <Link
                  href={`/guides/${guide.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-[#14243A] transition-colors"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <LeadForm />
      </div>
    </div>
  );
}
