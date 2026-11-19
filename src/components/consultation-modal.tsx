"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ConsultationBookingCard from "./consultation-booking-card";

export function openConsultationModal(service?: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("cortexhive:open-consultation", {
        detail: { service },
      })
    );
  }
}

export default function ConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultService, setDefaultService] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ service?: string }>;
      if (customEvent.detail?.service) {
        setDefaultService(customEvent.detail.service);
      }
      setIsOpen(true);
    };

    window.addEventListener("cortexhive:open-consultation", handleOpen);
    return () => window.removeEventListener("cortexhive:open-consultation", handleOpen);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Book a Free Consultation"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl z-10 my-auto max-h-[92vh] overflow-y-auto border border-slate-200"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-[#14243A] transition-colors z-20"
              aria-label="Close consultation modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-5 sm:p-8">
              <ConsultationBookingCard
                defaultService={defaultService}
                embedded
                onSuccess={() => {
                  // Keep open so the user can click Send WhatsApp button
                }}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
