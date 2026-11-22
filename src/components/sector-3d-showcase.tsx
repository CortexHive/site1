"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  Monitor,
  Smartphone,
  PhoneCall,
  MessageSquare,
  Search,
  Zap,
  Globe,
  CheckCircle2,
  ArrowRight,
  Box,
  ExternalLink,
  Copy,
  Check,
  MapPin,
} from "lucide-react";
import {
  SectorDemoConfig,
  HighlightFeatureId,
  SECTOR_DEMOS,
} from "@/lib/sector-demos";
import { openConsultationModal } from "./consultation-modal";

interface Sector3dShowcaseProps {
  initialSlug?: string;
  showSectorSwitcher?: boolean;
  isModal?: boolean;
  onCloseModal?: () => void;
}

const FEATURE_ICONS: Record<
  HighlightFeatureId,
  React.ComponentType<{ className?: string }>
> = {
  website: Globe,
  "ai-receptionist": PhoneCall,
  whatsapp: MessageSquare,
  "local-seo": Search,
  automation: Zap,
};

export default function Sector3dShowcase({
  initialSlug = "builders-trades",
  showSectorSwitcher = true,
  isModal = false,
  onCloseModal,
}: Sector3dShowcaseProps) {
  const [activeSlug, setActiveSlug] = useState<string>(initialSlug);
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [enable3d, setEnable3d] = useState<boolean>(true);
  const [activeFeature, setActiveFeature] =
    useState<HighlightFeatureId>("website");
  const [tilt, setTilt] = useState<{ rx: number; ry: number }>({
    rx: 4,
    ry: -6,
  });
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const stageRef = useRef<HTMLDivElement>(null);

  const sector: SectorDemoConfig =
    SECTOR_DEMOS.find((s) => s.slug === activeSlug) || SECTOR_DEMOS[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enable3d || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const ry = (x - 0.5) * 14; // -7deg to +7deg
    const rx = (0.5 - y) * 10; // -5deg to +5deg
    setTilt({ rx, ry });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 4, ry: -6 });
  };

  const handleCopyShareLink = async () => {
    try {
      const url = `https://cortexhive.co.uk/demos/${sector.slug}`;
      await navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2200);
    } catch {
      // ignore clipboard errors
    }
  };

  const highlightRing = (id: HighlightFeatureId) =>
    activeFeature === id
      ? "ring-2 ring-blue-500 ring-offset-2 shadow-md border-blue-400"
      : "border-slate-200/90 opacity-95";

  return (
    <div className="space-y-6">
      {/* Sector Switcher Pills */}
      {showSectorSwitcher && (
        <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-[#E2E8F0]">
          {SECTOR_DEMOS.map((item) => {
            const isSelected = item.slug === sector.slug;
            return (
              <button
                key={item.slug}
                type="button"
                onClick={() => {
                  setActiveSlug(item.slug);
                  setActiveFeature("website");
                }}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#14243A] text-white shadow-2xs"
                    : "bg-[#F8FAFD] text-[#475569] hover:text-[#14243A] border border-[#E2E8F0]"
                }`}
              >
                {item.sectorName}
              </button>
            );
          })}
        </div>
      )}

      {/* Main Grid: 7-col 3D Interactive Device + 5-col All Services Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* LEFT: 3D Sample Webpage Stage */}
        <div className="lg:col-span-7 space-y-3">
          {/* Controls Strip */}
          <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F8FAFD] border border-[#E2E8F0] rounded-xl px-3.5 py-2.5">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setDevice("desktop")}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer ${
                  device === "desktop"
                    ? "bg-white text-[#14243A] shadow-2xs border border-slate-200"
                    : "text-[#64748B] hover:text-[#14243A]"
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Desktop</span>
              </button>
              <button
                type="button"
                onClick={() => setDevice("mobile")}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer ${
                  device === "mobile"
                    ? "bg-white text-[#14243A] shadow-2xs border border-slate-200"
                    : "text-[#64748B] hover:text-[#14243A]"
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile</span>
              </button>
              <button
                type="button"
                onClick={() => setEnable3d((prev) => !prev)}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer ${
                  enable3d
                    ? "bg-blue-50 text-blue-700 border border-blue-200"
                    : "text-[#64748B] hover:text-[#14243A]"
                }`}
                title="Toggle 3D perspective tilt"
              >
                <Box className="w-3.5 h-3.5" />
                <span>3D {enable3d ? "On" : "Flat"}</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyShareLink}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#475569] hover:text-blue-600 transition-colors cursor-pointer"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
              {isModal && (
                <Link
                  href={`/demos/${sector.slug}`}
                  onClick={onCloseModal}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:text-[#14243A]"
                >
                  <span>Full Page</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              )}
            </div>
          </div>

          {/* 3D Perspective Container */}
          <div
            ref={stageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: "1200px" }}
            className="bg-gradient-to-br from-[#F1F5F9] via-[#F8FAFD] to-blue-50/60 border border-[#E2E8F0] rounded-2xl p-4 sm:p-7 flex items-center justify-center overflow-hidden min-h-[470px]"
          >
            <div
              style={{
                transform: enable3d
                  ? `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`
                  : "rotateX(0deg) rotateY(0deg)",
                transformStyle: "preserve-3d",
                transition: "transform 180ms ease-out",
              }}
              className={`bg-white border border-slate-200 shadow-[0_24px_60px_-15px_rgba(15,23,42,0.2)] overflow-hidden transition-all duration-300 ${
                device === "mobile"
                  ? "w-[310px] rounded-[28px] border-[6px] border-[#14243A]"
                  : "w-full rounded-2xl"
              }`}
            >
              {/* Browser / Mobile Top Chrome */}
              {device === "desktop" ? (
                <div className="px-4 py-2.5 bg-slate-100 border-b border-slate-200 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex-1 max-w-xs mx-auto bg-white border border-slate-200 rounded-md px-2.5 py-0.5 text-[10px] text-slate-500 text-center truncate">
                    https://{sector.sampleDomain}
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                    3D Sample
                  </span>
                </div>
              ) : (
                <div className="bg-[#14243A] text-white px-4 py-2 flex items-center justify-between text-[10px] font-semibold">
                  <span>09:41</span>
                  <span className="w-16 h-3 rounded-full bg-slate-800 inline-block" />
                  <span>5G</span>
                </div>
              )}

              {/* Sample Website Content */}
              <div className="p-4 sm:p-5 space-y-3.5 text-left">
                {/* 1. Local Google SEO Strip */}
                <div
                  onClick={() => setActiveFeature("local-seo")}
                  className={`p-2.5 rounded-xl bg-[#F8FAFD] border transition-all cursor-pointer ${highlightRing(
                    "local-seo"
                  )}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-500 truncate">
                      <Search className="w-3 h-3 text-blue-600 flex-shrink-0" />
                      <span className="truncate">
                        Google: &ldquo;{sector.seoPreviewQuery}&rdquo;
                      </span>
                    </div>
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 whitespace-nowrap">
                      SEO Ready
                    </span>
                  </div>
                  <div className="text-[11px] font-bold text-blue-700 mt-1 truncate">
                    {sector.seoPreviewTitle}
                  </div>
                </div>

                {/* 2. Website Hero & Services Block */}
                <div
                  onClick={() => setActiveFeature("website")}
                  className={`p-3.5 sm:p-4 rounded-xl bg-white border transition-all cursor-pointer space-y-3 ${highlightRing(
                    "website"
                  )}`}
                >
                  <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-100">
                    <div>
                      <div className="text-xs font-extrabold text-[#14243A] leading-tight">
                        {sector.sampleBrand}
                      </div>
                      <div className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-2.5 h-2.5 text-blue-600" />
                        <span>{sector.sampleLocation}</span>
                      </div>
                    </div>
                    <span
                      className={`text-[9px] font-bold text-white px-2 py-1 rounded-md ${sector.accentBgClass} whitespace-nowrap`}
                    >
                      {sector.samplePhone}
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-blue-600">
                      {sector.heroBadge}
                    </span>
                    <h4
                      className={`font-extrabold text-[#14243A] leading-snug mt-0.5 ${
                        device === "mobile" ? "text-sm" : "text-base sm:text-lg"
                      }`}
                    >
                      {sector.heroTitle}
                    </h4>
                    <p className="text-[11px] text-[#475569] mt-1 leading-relaxed">
                      {sector.heroSubtitle}
                    </p>
                  </div>

                  {/* Sample Services Grid */}
                  <div
                    className={`grid gap-2 ${
                      device === "mobile" ? "grid-cols-1" : "grid-cols-2"
                    }`}
                  >
                    {sector.sampleServices.map((srv) => (
                      <div
                        key={srv.name}
                        className="p-2 rounded-lg bg-[#F8FAFD] border border-slate-200/70"
                      >
                        <div className="text-[11px] font-bold text-[#14243A]">
                          {srv.name}
                        </div>
                        <div className="text-[10px] text-slate-500 leading-snug">
                          {srv.desc}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Trust Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {sector.trustPoints.map((tp) => (
                      <span
                        key={tp}
                        className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-[#14243A]"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 text-blue-600" />
                        {tp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3. 24/7 AI Receptionist Live Banner */}
                <div
                  onClick={() => setActiveFeature("ai-receptionist")}
                  className={`p-3 rounded-xl bg-[#14243A] text-white border transition-all cursor-pointer flex items-start gap-2.5 ${highlightRing(
                    "ai-receptionist"
                  )}`}
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-600/30 border border-blue-400/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <PhoneCall className="w-3.5 h-3.5 text-blue-300" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200">
                        24/7 AI Receptionist Connected
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-200 mt-0.5 leading-snug">
                      {sector.aiCallPreview}
                    </p>
                  </div>
                </div>

                {/* 4. WhatsApp & Instant Quote CTA Strip */}
                <div
                  onClick={() => setActiveFeature("whatsapp")}
                  className={`p-3 rounded-xl bg-emerald-50 border transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 ${highlightRing(
                    "whatsapp"
                  )}`}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-emerald-950">
                        {sector.whatsappGreeting}
                      </div>
                      <div className="text-[10px] text-emerald-800">
                        Pre-filled customer enquiry sent directly to your phone
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-[#25D366] text-white whitespace-nowrap">
                    WhatsApp CTA
                  </span>
                </div>

                {/* 5. Automated Follow-up Footer Strip */}
                <div
                  onClick={() => setActiveFeature("automation")}
                  className={`p-2.5 rounded-xl bg-blue-50/70 border transition-all cursor-pointer flex items-center gap-2 ${highlightRing(
                    "automation"
                  )}`}
                >
                  <Zap className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                  <span className="text-[10px] font-medium text-[#14243A]">
                    <strong>Automation:</strong> {sector.automationPreview}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-[#64748B] text-center">
            Move your cursor over the 3D preview or click any service on the right to inspect how CortexHive builds it for{" "}
            <strong className="text-[#14243A]">{sector.sectorName}</strong>.
          </p>
        </div>

        {/* RIGHT: All Services Provided Explorer */}
        <div className="lg:col-span-5 space-y-4">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
              All Services Provided for {sector.sectorName}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#14243A] tracking-tight">
              Click a Service to Highlight It on the 3D Demo.
            </h3>
          </div>

          <div className="space-y-2.5">
            {sector.servicesProvided.map((srv) => {
              const Icon = FEATURE_ICONS[srv.id];
              const isSelected = activeFeature === srv.id;

              return (
                <button
                  key={srv.id}
                  type="button"
                  onClick={() => setActiveFeature(srv.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                    isSelected
                      ? "bg-blue-50/70 border-blue-500 shadow-2xs"
                      : "bg-white border-[#E2E8F0] hover:border-slate-300 hover:bg-[#F8FAFD]"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                      isSelected
                        ? "bg-blue-600 text-white"
                        : "bg-[#F5F8FC] text-blue-600 border border-[#E2E8F0]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs sm:text-sm font-bold text-[#14243A]">
                        {srv.title}
                      </span>
                      <span
                        className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap ${
                          isSelected
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {srv.includedTag}
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-[#475569] mt-1 leading-relaxed">
                      {srv.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Primary Conversion Action */}
          <div className="pt-2 space-y-2.5">
            <button
              type="button"
              onClick={() => {
                if (onCloseModal) onCloseModal();
                openConsultationModal(sector.defaultConsultationService);
              }}
              className="w-full px-6 py-3.5 rounded-xl bg-[#14243A] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors shadow-xs cursor-pointer"
            >
              <span>Get a Setup Like This (Free Consultation)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/pricing"
              onClick={onCloseModal}
              className="w-full px-6 py-3 rounded-xl bg-white hover:bg-[#F8FAFD] border border-slate-300 text-[#14243A] font-semibold text-xs inline-flex items-center justify-center gap-2 transition-colors"
            >
              <span>View Website Packages (£99 / £349 / £699)</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
