import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Box } from "lucide-react";
import { SECTOR_DEMOS, getSectorDemo } from "@/lib/sector-demos";
import Sector3dShowcase from "@/components/sector-3d-showcase";
import LeadForm from "@/components/lead-form";

export function generateStaticParams() {
  return SECTOR_DEMOS.map((s) => ({ sector: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { sector: string };
}): Metadata {
  const demo = getSectorDemo(params.sector);
  if (!demo) return {};

  const url = `https://cortexhive.co.uk/demos/${demo.slug}`;

  return {
    title: `${demo.sectorName} — Interactive 3D Sample Website & AI Demo | CortexHive`,
    description: `Explore an interactive 3D sample website for UK ${demo.sectorName.toLowerCase()} showing CortexHive mobile-first design, 24/7 AI call answering, WhatsApp quote capture and local Google SEO.`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${demo.sectorName} — 3D Sample Website & AI Demo | CortexHive`,
      description: `See how a CortexHive website, 24/7 AI receptionist and WhatsApp lead capture work together for UK ${demo.sectorName.toLowerCase()}.`,
      url,
    },
  };
}

export default function SectorDemoPage({
  params,
}: {
  params: { sector: string };
}) {
  const demo = getSectorDemo(params.sector);
  if (!demo) {
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
        name: `${demo.sectorName} 3D Demo`,
        item: `https://cortexhive.co.uk/demos/${demo.slug}`,
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
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-[#14243A] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to CortexHive Home</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F8FC] border border-[#E2E8F0] text-xs font-bold text-blue-600 uppercase tracking-wider ml-3">
            <Box className="w-3.5 h-3.5" />
            <span>Interactive 3D Sector Demo</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#14243A] tracking-tight leading-[1.1]">
            {demo.sectorName}: Live 3D Sample Website &amp; AI Setup.
          </h1>

          <p className="text-sm sm:text-lg text-[#475569] leading-relaxed">
            Inspect how CortexHive combines a mobile-first website, 24/7 AI receptionist, instant WhatsApp quote capture, and local UK Google SEO for{" "}
            <strong className="text-[#14243A]">{demo.sectorName.toLowerCase()}</strong>.
          </p>
        </div>

        {/* Interactive 3D Showcase */}
        <div className="bg-white rounded-3xl border border-[#E2E8F0] p-5 sm:p-8 shadow-subtle">
          <Sector3dShowcase initialSlug={demo.slug} showSectorSwitcher />
        </div>
      </div>

      <div className="mt-16">
        <LeadForm defaultService={demo.defaultConsultationService} />
      </div>
    </div>
  );
}
