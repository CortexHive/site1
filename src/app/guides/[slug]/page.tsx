import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, CheckCircle2, BookOpen } from "lucide-react";
import { BUSINESS_GUIDES, getGuideBySlug } from "@/lib/guides";
import LeadForm from "@/components/lead-form";

export function generateStaticParams() {
  return BUSINESS_GUIDES.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return {};

  const url = `https://cortexhive.co.uk/guides/${guide.slug}`;

  return {
    title: `${guide.title} | CortexHive`,
    description: guide.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: guide.title,
      description: guide.metaDescription,
      url,
      type: "article",
      publishedTime: guide.publishedDate,
    },
  };
}

export default function GuideDetailPage({ params }: { params: { slug: string } }) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) {
    notFound();
  }

  const relatedGuides = BUSINESS_GUIDES.filter((g) => g.slug !== guide.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: guide.title,
        description: guide.metaDescription,
        datePublished: guide.publishedDate,
        dateModified: guide.publishedDate,
        author: {
          "@type": "Organization",
          name: "CortexHive",
          url: "https://cortexhive.co.uk",
        },
        publisher: {
          "@type": "Organization",
          name: "CortexHive",
          logo: {
            "@type": "ImageObject",
            url: "https://cortexhive.co.uk/logo.png",
          },
        },
        mainEntityOfPage: `https://cortexhive.co.uk/guides/${guide.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://cortexhive.co.uk" },
          { "@type": "ListItem", position: 2, name: "UK Business Guides", item: "https://cortexhive.co.uk/guides" },
          { "@type": "ListItem", position: 3, name: guide.title, item: `https://cortexhive.co.uk/guides/${guide.slug}` },
        ],
      },
    ],
  };

  return (
    <div className="bg-white min-h-screen text-[#475569] pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb & Back */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <Link
            href="/guides"
            className="inline-flex items-center gap-1.5 font-semibold text-blue-600 hover:text-[#14243A] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All UK Business Guides</span>
          </Link>
          <span className="inline-flex items-center gap-1.5 text-[#64748B]">
            <Clock className="w-3.5 h-3.5" />
            <span>{guide.readTime}</span>
          </span>
        </div>

        {/* Title Header */}
        <header className="space-y-4 border-b border-[#E2E8F0] pb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[11px] font-bold text-blue-700 uppercase tracking-wider">
            <BookOpen className="w-3 h-3" />
            {guide.category}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#14243A] tracking-tight leading-[1.12]">
            {guide.title}
          </h1>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            {guide.excerpt}
          </p>
        </header>

        {/* Key Takeaways Box */}
        <section className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Key Takeaways
          </h2>
          <ul className="space-y-2.5">
            {guide.takeaways.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-[#14243A] font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Article Sections */}
        <div className="space-y-8">
          {guide.sections.map((sec, idx) => (
            <section key={idx} className="space-y-3.5">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#14243A] tracking-tight">
                {sec.heading}
              </h2>
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-[#475569] leading-relaxed">
                  {p}
                </p>
              ))}
              {sec.bullets && (
                <ul className="space-y-2.5 pt-1">
                  {sec.bullets.map((b, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-2.5 text-sm sm:text-base text-[#475569] leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Related Service CTA */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#14243A] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-300">
              Recommended Next Step
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold">
              Ready to put this into practice for your business?
            </h3>
          </div>
          <Link
            href={guide.relatedService.href}
            className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm inline-flex items-center gap-2 transition-colors flex-shrink-0"
          >
            <span>{guide.relatedService.label}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Related Guides */}
        <section className="pt-6 border-t border-[#E2E8F0] space-y-4">
          <h2 className="text-lg font-extrabold text-[#14243A]">
            More Practical UK Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedGuides.map((rel) => (
              <Link
                key={rel.slug}
                href={`/guides/${rel.slug}`}
                className="p-5 rounded-xl bg-[#F8FAFD] hover:bg-white border border-[#E2E8F0] hover:border-blue-300 transition-all space-y-2 block"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                  {rel.category} • {rel.readTime}
                </span>
                <h3 className="text-sm font-bold text-[#14243A] leading-snug">
                  {rel.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </article>

      <div className="mt-16">
        <LeadForm defaultService={guide.relatedService.defaultFormService} />
      </div>
    </div>
  );
}
