"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Calendar as CalendarIcon,
  Clock,
  CheckCircle,
  AlertCircle,
  Loader2,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  Send,
  Sparkles,
} from "lucide-react";
import confetti from "canvas-confetti";
import { SITE_CONFIG } from "@/lib/config";

const CONSULTATION_SERVICES = [
  "Website Design",
  "AI Receptionist",
  "Business Automation",
  "Custom Software / SaaS",
  "General Advice / Other",
];

const TIME_SLOTS = [
  "09:30 AM",
  "11:00 AM",
  "02:00 PM",
  "03:30 PM",
  "05:00 PM",
];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DAY_NAMES = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

function getNextAvailableDate(): Date {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  // If tomorrow is Sunday (0), move to Monday
  if (date.getDay() === 0) {
    date.setDate(date.getDate() + 1);
  }
  return date;
}

function formatDateString(d: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return d.toLocaleDateString("en-GB", options);
}

function isSameDay(d1: Date, d2: Date): boolean {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

interface ConsultationBookingCardProps {
  defaultService?: string;
  onSuccess?: () => void;
  className?: string;
  embedded?: boolean;
}

export default function ConsultationBookingCard({
  defaultService,
  onSuccess,
  className = "",
  embedded = false,
}: ConsultationBookingCardProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(defaultService || "Website Design");
  const [selectedDate, setSelectedDate] = useState<Date>(getNextAvailableDate);
  const [selectedTime, setSelectedTime] = useState<string>("11:00 AM");
  const [notes, setNotes] = useState("");

  const [viewDate, setViewDate] = useState<Date>(() => {
    const init = new Date();
    return new Date(init.getFullYear(), init.getMonth(), 1);
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [draftedMessage, setDraftedMessage] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const today = useMemo(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return t;
  }, []);

  // Calendar calculations
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const daysInMonth = useMemo(() => {
    return new Date(year, month + 1, 0).getDate();
  }, [year, month]);

  const startDayOffset = useMemo(() => {
    // 0 = Sun, 1 = Mon ... We want Monday as 0
    const raw = new Date(year, month, 1).getDay();
    return (raw + 6) % 7;
  }, [year, month]);

  const canGoPrev = useMemo(() => {
    const currentMonthFirst = new Date(today.getFullYear(), today.getMonth(), 1);
    return viewDate.getTime() > currentMonthFirst.getTime();
  }, [viewDate, today]);

  const handlePrevMonth = () => {
    if (!canGoPrev) return;
    setViewDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(year, month + 1, 1));
  };

  const handleSelectDay = (dayNum: number) => {
    const chosen = new Date(year, month, dayNum);
    chosen.setHours(0, 0, 0, 0);
    if (chosen < today) return;
    setSelectedDate(chosen);
    setError(null);
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(draftedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // ignore
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!phone.trim()) {
      setError("Please enter your telephone or WhatsApp number.");
      return;
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!selectedDate) {
      setError("Please select a preferred consultation date on the calendar.");
      return;
    }
    if (!selectedTime) {
      setError("Please select a preferred time slot.");
      return;
    }

    setError(null);
    setIsSubmitting(true);

    const formattedDate = formatDateString(selectedDate);

    // Build the WhatsApp message draft
    const lines = [
      "Hello CortexHive! I'd like to book a free consultation:",
      "",
      `• Name: ${name.trim()}`,
      `• Phone / WhatsApp: ${phone.trim()}`,
      `• Email: ${email.trim()}`,
      `• Service: ${service}`,
      `• Preferred Date: ${formattedDate}`,
      `• Preferred Time: ${selectedTime} (UK Time)`,
    ];

    if (notes.trim()) {
      lines.push(`• Notes: ${notes.trim()}`);
    }

    const messageText = lines.join("\n");
    const targetWhatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(messageText)}`;

    try {
      // 1. Submit to internal API endpoint
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          service,
          consultationDate: formattedDate,
          consultationTime: selectedTime,
          brief: notes.trim() || "Free Consultation Request via Booking Calendar",
          preferredContact: "WhatsApp",
          source: "consultation-booking-card",
        }),
      });

      // 2. Dual submit to Netlify forms
      try {
        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            "form-name": "free-consultation",
            name: name.trim(),
            phone: phone.trim(),
            email: email.trim(),
            service,
            consultationDate: formattedDate,
            consultationTime: selectedTime,
            notes: notes.trim(),
          }).toString(),
        });
      } catch (netlifyErr) {
        console.warn("Netlify consultation capture notice:", netlifyErr);
      }

      setDraftedMessage(messageText);
      setWhatsappUrl(targetWhatsappUrl);
      setIsSubmitted(true);

      // Trigger Confetti
      confetti({
        particleCount: 90,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#2563EB", "#22C55E", "#38BDF8"],
      });

      // Attempt opening WhatsApp in a new tab immediately
      try {
        window.open(targetWhatsappUrl, "_blank");
      } catch {
        // Popups might be blocked; the prominent UI button handles it
      }

      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      console.error("Consultation booking error:", err);
      // Even if network fails, we still draft the WhatsApp message so the user can send directly
      setDraftedMessage(messageText);
      setWhatsappUrl(targetWhatsappUrl);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setNotes("");
  };

  return (
    <div
      className={`bg-white rounded-2xl sm:rounded-3xl border border-[#E2E8F0] shadow-subtle overflow-hidden text-[#14243A] ${
        embedded ? "" : "p-5 sm:p-8 md:p-10"
      } ${className}`}
    >
      {isSubmitted ? (
        /* ================= SUBMISSION & WHATSAPP DRAFT STATE ================= */
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="space-y-6 text-center py-4 sm:py-6"
        >
          {/* Success Badge */}
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 mx-auto flex items-center justify-center">
            <CheckCircle className="w-8 h-8" />
          </div>

          <div className="space-y-2 max-w-lg mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Consultation Drafted</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] tracking-tight">
              Ready to Send on WhatsApp.
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              We have saved your details. Click below to submit your pre-filled WhatsApp message directly to our UK team for fast confirmation.
            </p>
          </div>

          {/* Drafted Message Preview Box (WhatsApp Chat Bubble style) */}
          <div className="max-w-md mx-auto bg-[#F8FAFD] border border-[#E2E8F0] rounded-2xl p-4 sm:p-5 text-left text-xs sm:text-[13px] leading-relaxed relative">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Pre-Filled WhatsApp Message
              </span>
              <button
                type="button"
                onClick={handleCopyMessage}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 hover:text-blue-800"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span className="text-emerald-600">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>
            </div>
            <pre className="whitespace-pre-wrap font-sans text-slate-700 bg-white p-3.5 rounded-xl border border-slate-200/80">
              {draftedMessage}
            </pre>
            <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-500">
              <span>Recipient: {SITE_CONFIG.phoneDisplay}</span>
              <span className="text-emerald-700 font-medium">✓ Ready to send</span>
            </div>
          </div>

          {/* Big Green Action Button to Submit to WhatsApp */}
          <div className="max-w-md mx-auto space-y-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 group"
            >
              <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              <span>Send Message on WhatsApp</span>
            </a>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="text-xs font-semibold text-slate-500 hover:text-[#14243A] underline py-1"
              >
                Edit Details or Change Time
              </button>
            </div>
          </div>

          {/* Quiet Reassurance */}
          <p className="text-[11px] text-slate-400 max-w-sm mx-auto pt-2 border-t border-slate-100">
            A copy has also been sent to our UK team ({SITE_CONFIG.email}). If you don&apos;t use WhatsApp, we will reach out via email or phone.
          </p>
        </motion.div>
      ) : (
        /* ================= INPUT FORM WITH CALENDAR & TIME SLOTS ================= */
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Header */}
          <div className="border-b border-[#E2E8F0] pb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>Free 15-Minute Consultation</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#14243A] tracking-tight">
              Select Your Preferred Date &amp; Time.
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
              Only important details required. We will draft your consultation booking on WhatsApp for instant confirmation.
            </p>
          </div>

          {/* Service Needed Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#14243A] block">
              What do you need help with? <span className="text-blue-600">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {CONSULTATION_SERVICES.map((item) => {
                const isActive = service === item;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setService(item)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      isActive
                        ? "bg-blue-600 text-white font-semibold shadow-2xs"
                        : "bg-[#F8FAFD] text-slate-700 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Important Info: 3 Inputs in responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {/* 1. Name */}
            <div className="space-y-1.5">
              <label htmlFor="consult-name" className="text-xs font-bold text-[#14243A] block">
                Your Name <span className="text-blue-600">*</span>
              </label>
              <input
                id="consult-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Morgan"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-[#F8FAFD] focus:bg-white focus:border-blue-600 text-sm text-[#14243A] focus:outline-none transition-colors"
              />
            </div>

            {/* 2. Phone / WhatsApp */}
            <div className="space-y-1.5">
              <label htmlFor="consult-phone" className="text-xs font-bold text-[#14243A] block">
                Phone / WhatsApp <span className="text-blue-600">*</span>
              </label>
              <input
                id="consult-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 07950 501323"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-[#F8FAFD] focus:bg-white focus:border-blue-600 text-sm text-[#14243A] focus:outline-none transition-colors"
              />
            </div>

            {/* 3. Email */}
            <div className="space-y-1.5">
              <label htmlFor="consult-email" className="text-xs font-bold text-[#14243A] block">
                Email Address <span className="text-blue-600">*</span>
              </label>
              <input
                id="consult-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@example.co.uk"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-[#F8FAFD] focus:bg-white focus:border-blue-600 text-sm text-[#14243A] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Interactive Calendar & Time Slots Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-2">
            {/* Calendar: 7 cols */}
            <div className="md:col-span-7 bg-[#F8FAFD] p-4 rounded-2xl border border-[#E2E8F0]">
              {/* Month Navigation */}
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-xs font-bold text-[#14243A]">
                  {MONTH_NAMES[month]} {year}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={handlePrevMonth}
                    disabled={!canGoPrev}
                    aria-label="Previous month"
                    className="p-1 rounded-md text-slate-600 hover:bg-slate-200 disabled:opacity-30 disabled:hover:bg-transparent"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextMonth}
                    aria-label="Next month"
                    className="p-1 rounded-md text-slate-600 hover:bg-slate-200"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Day Name Headers */}
              <div className="grid grid-cols-7 gap-1 text-center mb-1.5">
                {DAY_NAMES.map((d) => (
                  <span key={d} className="text-[10px] font-bold text-slate-500 uppercase">
                    {d}
                  </span>
                ))}
              </div>

              {/* Days Grid */}
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: startDayOffset }).map((_, i) => (
                  <div key={`offset-${i}`} className="h-8" />
                ))}

                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const dayNum = i + 1;
                  const dateObj = new Date(year, month, dayNum);
                  dateObj.setHours(0, 0, 0, 0);

                  const isPast = dateObj < today;
                  const isSelected = isSameDay(dateObj, selectedDate);
                  const isCurrentDay = isSameDay(dateObj, today);

                  return (
                    <button
                      key={dayNum}
                      type="button"
                      disabled={isPast}
                      onClick={() => handleSelectDay(dayNum)}
                      className={`h-8 rounded-lg text-xs font-semibold flex items-center justify-center transition-all ${
                        isSelected
                          ? "bg-blue-600 text-white shadow-2xs font-bold"
                          : isPast
                          ? "text-slate-300 cursor-not-allowed"
                          : isCurrentDay
                          ? "bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold border border-blue-300"
                          : "text-slate-700 hover:bg-white hover:shadow-2xs"
                      }`}
                    >
                      {dayNum}
                    </button>
                  );
                })}
              </div>

              {/* Selected Date Summary */}
              <div className="mt-3 pt-2.5 border-t border-slate-200 flex items-center justify-between text-[11px]">
                <span className="text-slate-500">Date selected:</span>
                <span className="font-bold text-blue-600">
                  {formatDateString(selectedDate)}
                </span>
              </div>
            </div>

            {/* Time Slot Picker: 5 cols */}
            <div className="md:col-span-5 flex flex-col justify-between bg-[#F8FAFD] p-4 rounded-2xl border border-[#E2E8F0]">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#14243A]">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>Available Time Slots (UK)</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  15-minute introductory video or telephone call.
                </p>

                <div className="grid grid-cols-1 gap-2 pt-1">
                  {TIME_SLOTS.map((slot) => {
                    const isSelected = selectedTime === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`w-full py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-between transition-all ${
                          isSelected
                            ? "bg-blue-600 text-white shadow-2xs font-bold"
                            : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                        }`}
                      >
                        <span>{slot}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-3 text-[11px] text-slate-500 border-t border-slate-200 mt-3">
                Selected: <strong className="text-[#14243A]">{selectedTime}</strong>
              </div>
            </div>
          </div>

          {/* Short Note (Optional) */}
          <div className="space-y-1.5">
            <label htmlFor="consult-notes" className="text-xs font-bold text-[#14243A] block">
              What would you like to discuss? <span className="text-slate-400 font-normal">(Optional brief note)</span>
            </label>
            <input
              id="consult-notes"
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Looking for a 1-page trades website, or want an AI receptionist to answer missed calls."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-[#F8FAFD] focus:bg-white focus:border-blue-600 text-sm text-[#14243A] focus:outline-none transition-colors"
            />
          </div>

          {error && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2.5 text-xs text-red-700">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-100">
            <p className="text-xs text-[#64748B] text-center sm:text-left">
              No pressure or sales obligation. Free advice &amp; fixed quotations.
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#14243A] hover:bg-blue-600 text-xs sm:text-sm font-semibold text-white transition-colors shadow-xs disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Reserving Slot &amp; Drafting Message...</span>
                </>
              ) : (
                <>
                  <span>Draft WhatsApp &amp; Book Consultation</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
