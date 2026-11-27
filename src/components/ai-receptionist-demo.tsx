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
    <div className="rounded-md bg-white border border-[#C5D6EA] overflow-hidden shadow-editorial">
      {/* Grounded Reception Desk Header */}
      <div className="px-5 sm:px-6 py-4 border-b border-[#DCE6F2] bg-[#08182E] text-white flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded bg-[#143A6B] border border-[#FCFBF8]/15 flex items-center justify-center flex-shrink-0">
            <PhoneCall className="w-4 h-4 text-white" />
          </div>
          <div className="min-w-0">
            <div className="text-sm font-semibold tracking-tight truncate">
              UK Call Handling Desk
            </div>
            <div className="font-mono text-[11px] text-white/65 truncate mt-0.5">
              {scenario.businessName} • {scenario.callerLabel}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="hidden sm:inline-block font-mono text-[10px] font-medium uppercase tracking-[0.1em] px-2.5 py-1 rounded-sm border border-[#FCFBF8]/25 text-[#DCE7F0] whitespace-nowrap">
            Simulated Demo • Studio UK Voice
          </span>
          <button
            type="button"
            onClick={() => setIsMuted((prev) => !prev)}
            aria-label={isMuted ? "Unmute audio demo" : "Mute audio demo"}
            className="p-2 rounded bg-white/10 hover:bg-white/20 text-white transition-colors flex-shrink-0 cursor-pointer"
            title={isMuted ? "Unmute voice audio" : "Mute voice audio"}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-slate-300" />
            ) : (
              <Volume2 className="w-4 h-4 text-emerald-300" />
            )}
          </button>
        </div>
      </div>

      {/* Scenario Tabs */}
      <div className="grid grid-cols-3 border-b border-[#DCE6F2] bg-[#F4F7FB]">
        {DEMO_SCENARIOS.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleSelectScenario(item.id)}
              className={`py-3 px-2 text-xs transition-all border-r last:border-r-0 border-[#DCE6F2] cursor-pointer ${
                isActive
                  ? "bg-white text-[#0A1628] font-semibold border-b-2 border-b-[#1B3B53]"
                  : "text-[#33475F] font-medium hover:text-[#0A1628]"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Call Recording Playback Strip */}
      <div className="px-5 sm:px-6 py-4 bg-[#F9F7F2] border-b border-[#DCE6F2] flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={handleTogglePlay}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded text-xs font-semibold transition-colors cursor-pointer ${
            isPlaying
              ? "bg-[#991B1B] hover:bg-[#7F1D1D] text-white"
              : "bg-[#143A6B] hover:bg-[#08182E] text-white"
          }`}
        >
          {isPlaying ? (
            <>
              <Square className="w-3.5 h-3.5 fill-current" />
              <span>Stop Recording</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Play Call Recording</span>
            </>
          )}
        </button>

        {/* Grounded Acoustic Bars */}
        <div className="flex items-center gap-3 flex-1 justify-end">
          <div className="flex items-center gap-1 h-7" aria-hidden="true">
            {[8, 16, 12, 24, 18, 10, 26, 20, 14, 24, 20, 12, 22, 16, 10, 18, 12, 8].map(
              (h, i) => (
                <span
                  key={i}
                  style={{
                    height: isPlaying ? `${h}px` : `${Math.max(4, Math.round(h * 0.42))}px`,
                    transitionDelay: `${(i % 6) * 45}ms`,
                  }}
                  className={`w-[3px] rounded-sm transition-all duration-300 ${
                    isPlaying
                      ? "bg-[#143A6B] animate-pulse"
                      : i < 7
                      ? "bg-[#143A6B]/75"
                      : "bg-[#143A6B]/30"
                  }`}
                />
              )
            )}
          </div>
          <span className="font-mono text-[11px] font-medium text-[#61758F] tabular-nums">
            {isPlaying ? "Live" : scenario.duration}
          </span>
        </div>
      </div>

      {/* Live Call Transcript */}
      <div className="p-5 sm:p-6 space-y-3 max-h-[300px] overflow-y-auto bg-white">
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
              className={`p-3.5 rounded border text-[13px] leading-relaxed transition-all duration-200 ${
                isCurrent
                  ? isAi
                    ? "bg-white border-[#143A6B] border-l-[3px] shadow-subtle"
                    : "bg-[#EDF3FA] border-[#143A6B]/35"
                  : isPast
                  ? isAi
                    ? "bg-white border-[#DCE6F2] border-l-[3px] border-l-[#1B3B53]"
                    : "bg-[#F4F7FB] border-[#DCE6F2]"
                  : isAi
                  ? "bg-white border-[#DCE6F2] border-l-[3px] border-l-[#1B3B53]/60"
                  : "bg-[#F4F7FB]/80 border-[#143A6B]/10"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span
                  className={`font-mono text-[10px] font-medium uppercase tracking-[0.1em] ${
                    isAi ? "text-[#143A6B]" : "text-[#61758F]"
                  }`}
                >
                  {isAi ? "CortexHive AI Receptionist" : "Caller"}
                </span>
                {isCurrent && (
                  <span className="font-mono text-[10px] font-semibold text-[#143A6B] animate-pulse">
                    Speaking...
                  </span>
                )}
              </div>
              <p className="text-[#0A1628]">&ldquo;{line.text}&rdquo;</p>
            </div>
          );
        })}
      </div>

      {/* Simulated Lead Summary Output (Forest Sage Accent) */}
      <div className="px-5 sm:px-6 py-4 bg-[#EDF3FA] border-t border-[#143A6B]/20 space-y-3">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#143A6B]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#143A6B]" />
            <span>Simulated Lead Summary Output</span>
          </span>
          <span className="font-mono text-[10.5px] font-medium text-[#143A6B]">
            {completed ? "✓ Captured & Dispatched" : scenario.summary.action}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
          <div className="bg-white rounded px-3 py-2 border border-[#143A6B]/15">
            <span className="font-mono text-[#61758F] uppercase block text-[9.5px]">Caller</span>
            <strong className="text-[#0A1628] font-semibold">{scenario.summary.caller}</strong>
          </div>
          <div className="bg-white rounded px-3 py-2 border border-[#143A6B]/15">
            <span className="font-mono text-[#61758F] uppercase block text-[9.5px]">Location / Slot</span>
            <strong className="text-[#0A1628] font-semibold">{scenario.summary.postcode}</strong>
          </div>
          <div className="bg-white rounded px-3 py-2 border border-[#143A6B]/15">
            <span className="font-mono text-[#61758F] uppercase block text-[9.5px]">Enquiry</span>
            <strong className="text-[#0A1628] font-semibold">{scenario.summary.service}</strong>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 pt-0.5">
          <span className="inline-flex items-center gap-1.5 text-[11px] text-[#143A6B] font-medium">
            <MessageSquare className="w-3.5 h-3.5 text-[#143A6B]" />
            <span>Tailored to your business script &amp; routing</span>
          </span>
          <button
            type="button"
            onClick={() => openConsultationModal("AI Receptionist")}
            className="text-xs font-semibold text-[#0A1628] hover:text-[#143A6B] border-b border-[#143A6B] inline-flex items-center gap-1 whitespace-nowrap cursor-pointer"
          >
            <span>Book Demo</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
