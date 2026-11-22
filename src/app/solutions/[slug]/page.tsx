import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Cpu } from "lucide-react";
import {
  PATHWAY2_SOLUTIONS,
  getPathway2Solution,
} from "@/lib/pathway2-solutions";
import Pathway2BlueprintShowcase from "@/components/pathway2-blueprint-showcase";
import LeadForm from "@/components/lead-form";

export function generateStaticParams() {
  return PATHWAY2_SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const solution = getPathway2Solution(params.slug);
  if (!solution) return {};

  const url = `https://cortexhive.co.uk/solutions/${solution.slug}`;

  return {
    title: `${solution.title} — 3D Architecture & Workflow Explainer | CortexHive UK`,
    description: solution.summary,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${solution.title} — 3D Workflow Explainer | CortexHive UK`,
      description: solution.summary,
      url,
    },
  };
}

export default function SolutionExplainerPage({
  params,
}: {
  params: { slug: string };
}) {
  const solution = getPathway2Solution(params.slug);
  if (!solution) {
    notFound();
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://cortexhive.co.uk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `${solution.title} Workflow`,
        item: `https://cortexhive.co.uk/solutions/${solution.slug}`,
      },
    ],
  };

  return (
    <div className="bg-white min-h-screen text-[#475569] pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-[#14243A] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to CortexHive Home</span>
            </Link>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F8FC] border border-[#E2E8F0] text-xs font-bold text-blue-600 uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" />
              <span>3D Architecture Explainer</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#14243A] tracking-tight leading-[1.1]">
            {solution.title}: Interactive 3D Workflow Blueprint.
          </h1>

          <p className="text-sm sm:text-lg text-[#475569] leading-relaxed">
            {solution.summary}
          </p>
        </div>

        {/* Interactive 3D Blueprint Showcase */}
        <div className="bg-white rounded-3xl border border-[#E2E8F0] p-5 sm:p-8 shadow-subtle">
          <Pathway2BlueprintShowcase initialSlug={solution.slug} showSwitcher />
        </div>
      </div>

      <div className="mt-16">
        <LeadForm defaultService={solution.defaultConsultationService} />
      </div>
    </div>
  );
}
