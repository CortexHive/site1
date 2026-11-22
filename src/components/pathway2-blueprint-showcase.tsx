"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Play,
  Square,
  ArrowRight,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Layers,
  Sparkles,
  Box,
} from "lucide-react";
import {
  PATHWAY2_SOLUTIONS,
  Pathway2Solution,
} from "@/lib/pathway2-solutions";
import { openConsultationModal } from "./consultation-modal";

interface Pathway2BlueprintShowcaseProps {
  initialSlug?: string;
  showSwitcher?: boolean;
  isModal?: boolean;
  onCloseModal?: () => void;
}

export default function Pathway2BlueprintShowcase({
  initialSlug = "custom-saas",
  showSwitcher = true,
  isModal = false,
  onCloseModal,
}: Pathway2BlueprintShowcaseProps) {
  const [activeSlug, setActiveSlug] = useState<string>(initialSlug);
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [tilt, setTilt] = useState<{ rx: number; ry: number }>({
    rx: 2,
    ry: -3,
  });

  const stageRef = useRef<HTMLDivElement>(null);

  const solution: Pathway2Solution =
    PATHWAY2_SOLUTIONS.find((s) => s.slug === activeSlug) ||
    PATHWAY2_SOLUTIONS[0];

  const currentStage =
    solution.workflowStages[activeStageIdx] || solution.workflowStages[0];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStageIdx((prev) => {
        const next = prev + 1;
        if (next >= solution.workflowStages.length) {
          setIsPlaying(false);
          return 0;
        }
        return next;
      });
    }, 2400);
    return () => clearInterval(interval);
  }, [isPlaying, solution.workflowStages.length]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      rx: (0.5 - y) * 7,
      ry: (x - 0.5) * 9,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 2, ry: -3 });
  };

  const handleCopyShareLink = async () => {
    try {
      await navigator.clipboard.writeText(
        `https://cortexhive.co.uk/solutions/${solution.slug}`
      );
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2200);
    } catch {
      // ignore
    }
  };

  return (
    <div className="space-y-6">
      {/* Solution Category Switcher */}
      {showSwitcher && (
        <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-[#E2E8F0]">
          {PATHWAY2_SOLUTIONS.map((item) => {
            const isSelected = item.slug === solution.slug;
            return (
              <button
                key={item.slug}
                type="button"
                onClick={() => {
                  setIsPlaying(false);
                  setActiveSlug(item.slug);
                  setActiveStageIdx(0);
                }}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#14243A] text-white shadow-2xs"
                    : "bg-[#F8FAFD] text-[#475569] hover:text-[#14243A] border border-[#E2E8F0]"
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>
      )}

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* LEFT 7 COLS: 3D Isometric Explainer Graphic + Animated 4-Step Workflow */}
        <div className="lg:col-span-7 space-y-4">
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F8FAFD] border border-[#E2E8F0] rounded-xl px-4 py-2.5">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  if (!isPlaying) setActiveStageIdx(0);
                  setIsPlaying((prev) => !prev);
                }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold transition-colors cursor-pointer ${
                  isPlaying
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "bg-blue-600 hover:bg-[#14243A] text-white"
                }`}
              >
                {isPlaying ? (
                  <>
                    <Square className="w-3 h-3 fill-current" />
                    <span>Stop Walkthrough</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 fill-current" />
                    <span>Play 4-Step Workflow</span>
                  </>
                )}
              </button>
              <span className="text-[11px] font-semibold text-[#64748B] hidden sm:inline">
                3D Architecture Explainer
              </span>
            </div>

            <div className="flex items-center gap-2.5">
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
                  href={`/solutions/${solution.slug}`}
                  onClick={onCloseModal}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:text-[#14243A]"
                >
                  <span>Full Page</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              )}
            </div>
          </div>

          {/* 3D Isometric Graphic Frame */}
          <div
            ref={stageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: "1200px" }}
            className="rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] p-3 sm:p-4 overflow-hidden"
          >
            <div
              style={{
                transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
                transition: "transform 180ms ease-out",
              }}
              className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-white border border-slate-200/80 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.16)]"
            >
              <Image
                src={solution.imagePath}
                alt={solution.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />

              {/* Subtle Floating Active Step Pill Overlay */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-xl px-3.5 py-2.5 shadow-md flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="w-7 h-7 rounded-lg bg-[#14243A] text-white text-[11px] font-extrabold flex items-center justify-center flex-shrink-0">
                    {currentStage.step}
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-extrabold text-[#14243A] truncate">
                      {currentStage.title} — {currentStage.subtitle}
                    </div>
                    <div className="text-[11px] text-[#475569] truncate">
                      {currentStage.detail}
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200 whitespace-nowrap flex-shrink-0 hidden sm:inline-block">
                  {currentStage.outputBadge}
                </span>
              </div>
            </div>
          </div>

          {/* Interactive 4-Step Animated Workflow Pipeline */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {solution.workflowStages.map((stage, idx) => {
              const isActive = idx === activeStageIdx;
              const isCompleted = idx < activeStageIdx;

              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => {
                    setIsPlaying(false);
                    setActiveStageIdx(idx);
                  }}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer relative ${
                    isActive
                      ? "bg-[#14243A] text-white border-[#14243A] shadow-sm"
                      : isCompleted
                      ? "bg-blue-50/60 border-blue-200 text-[#14243A]"
                      : "bg-white border-[#E2E8F0] hover:border-slate-300 text-[#14243A]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span
                      className={`text-[10px] font-extrabold tracking-wider ${
                        isActive ? "text-blue-300" : "text-blue-600"
                      }`}
                    >
                      STEP {stage.step}
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    )}
                  </div>
                  <div className="text-xs font-bold leading-snug">
                    {stage.title}
                  </div>
                  <div
                    className={`text-[10px] mt-0.5 leading-snug ${
                      isActive ? "text-slate-300" : "text-[#64748B]"
                    }`}
                  >
                    {stage.subtitle}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Full Explanation */}
          <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200/80 flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <div className="text-xs font-bold text-[#14243A]">
                Step {currentStage.step}: {currentStage.title} ({currentStage.outputBadge})
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                {currentStage.detail}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT 5 COLS: Deliverables, Real Proof & Consultation CTA */}
        <div className="lg:col-span-5 space-y-5">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-600">
              <Box className="w-3.5 h-3.5" />
              {solution.eyebrow}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#14243A] tracking-tight leading-snug">
              {solution.headline}
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              {solution.summary}
            </p>
          </div>

          {/* Deliverables */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block">
              What CortexHive Delivers
            </span>
            <ul className="space-y-2">
              {solution.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-xs text-[#14243A] leading-relaxed"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2 border-t border-slate-200/80 flex flex-wrap gap-1.5">
              {solution.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-semibold text-[#475569]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Live CortexHive Proof Card */}
          <Link
            href={solution.liveProof.href}
            onClick={onCloseModal}
            className="block p-4 rounded-xl bg-white hover:bg-[#F5F8FC] border border-[#E2E8F0] hover:border-blue-300 transition-all group"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                <Layers className="w-3 h-3 text-emerald-600" />
                Live CortexHive Proof
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-600 group-hover:translate-x-0.5 transition-transform" />
            </div>
            <div className="text-xs font-extrabold text-[#14243A] mt-1">
              {solution.liveProof.name}
            </div>
            <p className="text-[11px] text-[#475569] mt-0.5">
              {solution.liveProof.desc}
            </p>
          </Link>

          {/* Primary Conversion Action */}
          <button
            type="button"
            onClick={() => {
              if (onCloseModal) onCloseModal();
              openConsultationModal(solution.defaultConsultationService);
            }}
            className="w-full px-6 py-3.5 rounded-xl bg-[#14243A] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors shadow-xs cursor-pointer"
          >
            <span>Scope Your Project (Free Consultation)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
