"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Box } from "lucide-react";
import Sector3dShowcase from "./sector-3d-showcase";

interface SectorDemoModalProps {
  sectorSlug: string | null;
  onClose: () => void;
}

export default function SectorDemoModal({
  sectorSlug,
  onClose,
}: SectorDemoModalProps) {
  useEffect(() => {
    if (sectorSlug) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [sectorSlug]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (sectorSlug) {
      window.addEventListener("keydown", handleKey);
    }
    return () => window.removeEventListener("keydown", handleKey);
  }, [sectorSlug, onClose]);

  return (
    <AnimatePresence>
      {sectorSlug && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Interactive 3D Sector Sample Webpage"
          className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-5 overflow-y-auto"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/65 backdrop-blur-xs"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-6xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl z-10 my-auto max-h-[94vh] overflow-y-auto border border-slate-200"
          >
            {/* Header Strip */}
            <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] px-5 sm:px-8 py-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#14243A] text-white flex items-center justify-center flex-shrink-0">
                  <Box className="w-4 h-4 text-blue-300" />
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-extrabold text-[#14243A] leading-tight">
                    Interactive 3D Sector Sample Webpage
                  </h2>
                  <p className="text-[11px] text-[#64748B]">
                    Preview how CortexHive websites, AI receptionists &amp; WhatsApp automation work together
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close 3D sample preview"
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-[#14243A] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 sm:p-8">
              <Sector3dShowcase
                key={sectorSlug}
                initialSlug={sectorSlug}
                showSectorSwitcher
                isModal
                onCloseModal={onClose}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
