"use client";

import { useState, useEffect, useRef } from "react";
import {
  PhoneCall,
  Play,
  Square,
  Volume2,
  VolumeX,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { openConsultationModal } from "./consultation-modal";

interface CallLine {
  speaker: "ai" | "caller";
  text: string;
  audioSrc: string;
}

interface DemoScenario {
  id: string;
  label: string;
  businessName: string;
  callerLabel: string;
  duration: string;
  lines: CallLine[];
  summary: {
    caller: string;
    postcode: string;
    service: string;
    urgency: string;
    action: string;
  };
}

const DEMO_SCENARIOS: DemoScenario[] = [
  {
    id: "trades",
    label: "Plumbing & Heating",
    businessName: "Example Heating & Plumbing",
    callerLabel: "Incoming UK Mobile • 07xxx xxx412",
    duration: "0:42",
    lines: [
      {
        speaker: "ai",
        text: "Good afternoon, thanks for calling Example Heating and Plumbing. Our engineers are currently on site — I'm the AI receptionist and can log your job right away. How can I help?",
        audioSrc: "/audio/ai-demo/trades-0.mp3",
      },
      {
        speaker: "caller",
        text: "Hi, our combi boiler has lost pressure and we have no hot water in Didsbury, Manchester. Can someone come out today?",
        audioSrc: "/audio/ai-demo/trades-1.mp3",
      },
      {
        speaker: "ai",
        text: "I can flag that as an urgent boiler callout for our engineer straight away. Could I take your name, postcode, and the best number to reach you on?",
        audioSrc: "/audio/ai-demo/trades-2.mp3",
      },
      {
        speaker: "caller",
        text: "Sure, it's David Patel, postcode M20 2RN, and you can call me back on this mobile number.",
        audioSrc: "/audio/ai-demo/trades-3.mp3",
      },
      {
        speaker: "ai",
        text: "Thank you David. I've sent your details to our engineer now and they will call you back shortly with today's earliest slot.",
        audioSrc: "/audio/ai-demo/trades-4.mp3",
      },
    ],
    summary: {
      caller: "David Patel",
      postcode: "M20 2RN (Didsbury)",
      service: "Combi boiler pressure loss — no hot water",
      urgency: "Same-day urgent callout",
      action: "Dispatched to WhatsApp & Email in 3 seconds",
    },
  },
  {
    id: "cleaning",
    label: "Window & Cleaning",
    businessName: "Example Exterior Cleaning",
    callerLabel: "Incoming UK Landline • 0113 xxx 890",
    duration: "0:38",
    lines: [
      {
        speaker: "ai",
        text: "Hello, thank you for calling Example Exterior Cleaning. Our team is out on a round at the moment, how can I assist you today?",
        audioSrc: "/audio/ai-demo/cleaning-0.mp3",
      },
      {
        speaker: "caller",
        text: "Hi, do you cover regular window and gutter cleaning for a 3-bedroom semi in Headingley, Leeds?",
        audioSrc: "/audio/ai-demo/cleaning-1.mp3",
      },
      {
        speaker: "ai",
        text: "Yes, we cover Headingley every fortnight. If you share your name, postcode, and mobile number, I'll pass this over for a quick written quote today.",
        audioSrc: "/audio/ai-demo/cleaning-2.mp3",
      },
      {
        speaker: "caller",
        text: "Great, I'm Claire Davies, postcode LS6 3AA, and my mobile is 07700 900123.",
        audioSrc: "/audio/ai-demo/cleaning-3.mp3",
      },
      {
        speaker: "ai",
        text: "Lovely, thanks Claire. Your quote request is logged and the team will message you on WhatsApp later today.",
        audioSrc: "/audio/ai-demo/cleaning-4.mp3",
      },
    ],
    summary: {
      caller: "Claire Davies",
      postcode: "LS6 3AA (Leeds)",
      service: "3-bed semi — regular window & gutter clean",
      urgency: "Standard quote request",
      action: "Dispatched to WhatsApp & CRM in 3 seconds",
    },
  },
  {
    id: "appointments",
    label: "Clinic & Salon",
    businessName: "Example Dental & Aesthetics",
    callerLabel: "Incoming UK Mobile • 07xxx xxx904",
    duration: "0:34",
    lines: [
      {
        speaker: "ai",
        text: "Good afternoon, Example Clinic. Our reception desk is assisting another patient — I can take your booking request right now. What would you like to arrange?",
        audioSrc: "/audio/ai-demo/appointments-0.mp3",
      },
      {
        speaker: "caller",
        text: "Hi, I'd like to book an initial consultation next Thursday afternoon if you have any availability.",
        audioSrc: "/audio/ai-demo/appointments-1.mp3",
      },
      {
        speaker: "ai",
        text: "Of course. We have afternoon slots available next Thursday. May I take your full name and mobile number so we can confirm your appointment?",
        audioSrc: "/audio/ai-demo/appointments-2.mp3",
      },
      {
        speaker: "caller",
        text: "It's Hannah Brooks, and this number is best for a confirmation text.",
        audioSrc: "/audio/ai-demo/appointments-3.mp3",
      },
      {
        speaker: "ai",
        text: "Thanks Hannah. I've logged your Thursday afternoon request and our team will text your confirmation shortly.",
        audioSrc: "/audio/ai-demo/appointments-4.mp3",
      },
    ],
    summary: {
      caller: "Hannah Brooks",
      postcode: "Thursday PM Slot",
      service: "Initial consultation booking request",
      urgency: "Appointment scheduling",
      action: "Logged to booking calendar & SMS queue",
    },
  },
];

export default function AiReceptionistDemo() {
  const [activeId, setActiveId] = useState<string>("trades");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [activeLineIdx, setActiveLineIdx] = useState<number>(-1);
  const [completed, setCompleted] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const playingRef = useRef<boolean>(false);
  const mutedRef = useRef<boolean>(false);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scenario =
    DEMO_SCENARIOS.find((s) => s.id === activeId) || DEMO_SCENARIOS[0];

  const stopPlayback = () => {
    playingRef.current = false;
    setIsPlaying(false);
    setActiveLineIdx(-1);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (audioRef.current) {
      audioRef.current.onended = null;
      audioRef.current.onerror = null;
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    return () => {
      stopPlayback();
    };
  }, []);

  useEffect(() => {
    mutedRef.current = isMuted;
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    if (activeLineIdx >= 0 && lineRefs.current[activeLineIdx]) {
      lineRefs.current[activeLineIdx]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [activeLineIdx]);

  const handleSelectScenario = (id: string) => {
    stopPlayback();
    setCompleted(false);
    setActiveId(id);
  };

  const playLine = (index: number, currentScenario: DemoScenario) => {
    if (!playingRef.current) return;

    if (index >= currentScenario.lines.length) {
      playingRef.current = false;
      setIsPlaying(false);
      setActiveLineIdx(-1);
      setCompleted(true);
      return;
    }

    setActiveLineIdx(index);
    const line = currentScenario.lines[index];

    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.preload = "auto";
    }

    const audio = audioRef.current;
    audio.muted = mutedRef.current;
    audio.src = line.audioSrc;

    const advance = () => {
      if (!playingRef.current) return;
      timerRef.current = setTimeout(() => {
        playLine(index + 1, currentScenario);
      }, 320);
    };

    audio.onended = advance;
    audio.onerror = () => {
      if (!playingRef.current) return;
      const fallbackMs = Math.max(2200, Math.min(4500, line.text.length * 38));
      timerRef.current = setTimeout(() => {
        playLine(index + 1, currentScenario);
      }, fallbackMs);
    };

    const playPromise = audio.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        if (!playingRef.current) return;
        const fallbackMs = Math.max(2200, Math.min(4500, line.text.length * 38));
        timerRef.current = setTimeout(() => {
          playLine(index + 1, currentScenario);
        }, fallbackMs);
      });
    }
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      stopPlayback();
      return;
    }
    setCompleted(false);
    setIsPlaying(true);
    playingRef.current = true;
    playLine(0, scenario);
  };

  return (
    <div className="rounded-2xl bg-white border border-[#E2E8F0] overflow-hidden shadow-subtle">
      {/* Top Bar */}
      <div className="px-5 py-4 border-b border-[#E2E8F0] bg-[#14243A] text-white flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-blue-600/25 border border-blue-400/40 flex items-center justify-center flex-shrink-0">
            <PhoneCall className="w-4 h-4 text-blue-300" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-tight truncate">
                Realistic UK AI Call Demo
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 whitespace-nowrap">
                Studio Voice
              </span>
            </div>
            <div className="text-[10px] text-slate-300 truncate">
              {scenario.businessName} • {scenario.callerLabel}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsMuted((prev) => !prev)}
          aria-label={isMuted ? "Unmute audio demo" : "Mute audio demo"}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex-shrink-0 cursor-pointer"
          title={isMuted ? "Unmute voice audio" : "Mute voice audio"}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-slate-300" />
          ) : (
            <Volume2 className="w-4 h-4 text-emerald-300" />
          )}
        </button>
      </div>

      {/* Scenario Tabs */}
      <div className="grid grid-cols-3 border-b border-[#E2E8F0] bg-[#F8FAFD]">
        {DEMO_SCENARIOS.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleSelectScenario(item.id)}
              className={`py-2.5 px-2 text-[11px] font-semibold transition-colors border-r last:border-r-0 border-[#E2E8F0] cursor-pointer ${
                isActive
                  ? "bg-white text-blue-600 border-b-2 border-b-blue-600"
                  : "text-[#64748B] hover:text-[#14243A]"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Audio Control Bar */}
      <div className="px-5 py-3.5 bg-blue-50/60 border-b border-[#E2E8F0] flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={handleTogglePlay}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
            isPlaying
              ? "bg-red-600 hover:bg-red-700 text-white"
              : "bg-blue-600 hover:bg-[#14243A] text-white"
          }`}
        >
          {isPlaying ? (
            <>
              <Square className="w-3.5 h-3.5 fill-current" />
              <span>Stop Call Demo</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Play Realistic Call Demo</span>
            </>
          )}
        </button>

        {/* Animated Waveform */}
        <div className="flex items-center gap-2">
          <div className="flex items-end gap-1 h-5" aria-hidden="true">
            {[10, 18, 12, 20, 14, 17, 9, 16].map((h, i) => (
              <span
                key={i}
                style={{
                  height: isPlaying ? `${h}px` : "4px",
                  transitionDelay: `${i * 40}ms`,
                }}
                className={`w-1 rounded-full transition-all duration-300 ${
                  isPlaying
                    ? "bg-blue-600 animate-pulse"
                    : "bg-slate-300"
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] font-semibold text-[#64748B]">
            {isPlaying ? "Playing..." : scenario.duration}
          </span>
        </div>
      </div>

      {/* Live Call Transcript */}
      <div className="p-5 space-y-2.5 max-h-[290px] overflow-y-auto bg-white">
        {scenario.lines.map((line, idx) => {
          const isCurrent = idx === activeLineIdx;
          const isPast = activeLineIdx > idx || completed;
          const isAi = line.speaker === "ai";

          return (
            <div
              key={idx}
              ref={(el) => {
                lineRefs.current[idx] = el;
              }}
              className={`p-3 rounded-xl border text-xs leading-relaxed transition-all duration-200 ${
                isCurrent
                  ? isAi
                    ? "bg-blue-50 border-blue-400 ring-2 ring-blue-100"
                    : "bg-slate-100 border-slate-400 ring-2 ring-slate-200"
                  : isPast
                  ? isAi
                    ? "bg-blue-50/40 border-blue-100"
                    : "bg-[#F8FAFD] border-[#E2E8F0]"
                  : "bg-[#F8FAFD]/70 border-slate-200/70 opacity-85"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider ${
                    isAi ? "text-blue-600" : "text-[#64748B]"
                  }`}
                >
                  {isAi ? "CortexHive AI Receptionist" : "Caller"}
                </span>
                {isCurrent && (
                  <span className="text-[10px] font-bold text-blue-600 animate-pulse">
                    Speaking...
                  </span>
                )}
              </div>
              <p className="text-[#14243A]">&ldquo;{line.text}&rdquo;</p>
            </div>
          );
        })}
      </div>

      {/* Instant Lead Summary Card */}
      <div className="px-5 py-4 bg-emerald-50/70 border-t border-emerald-200 space-y-2.5">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Instant Lead Summary Sent to Owner</span>
          </span>
          {completed && (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">
              <Sparkles className="w-3 h-3" />
              Captured
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2 text-[11px]">
          <div className="bg-white/90 rounded-lg px-2.5 py-1.5 border border-emerald-200/70">
            <span className="text-slate-500 block text-[10px]">Caller</span>
            <strong className="text-[#14243A]">{scenario.summary.caller}</strong>
          </div>
          <div className="bg-white/90 rounded-lg px-2.5 py-1.5 border border-emerald-200/70">
            <span className="text-slate-500 block text-[10px]">Location / Slot</span>
            <strong className="text-[#14243A]">{scenario.summary.postcode}</strong>
          </div>
          <div className="col-span-2 bg-white/90 rounded-lg px-2.5 py-1.5 border border-emerald-200/70">
            <span className="text-slate-500 block text-[10px]">Enquiry Captured</span>
            <strong className="text-[#14243A]">{scenario.summary.service}</strong>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 pt-1">
          <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-900 font-medium">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            {scenario.summary.action}
          </span>
          <button
            type="button"
            onClick={() => openConsultationModal("AI Receptionist")}
            className="text-[11px] font-bold text-blue-700 hover:text-[#14243A] inline-flex items-center gap-1 whitespace-nowrap cursor-pointer"
          >
            <span>Book Demo</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
