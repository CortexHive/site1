"use client";

import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Bot, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { SITE_CONFIG } from "@/lib/config";
import { openConsultationModal } from "./consultation-modal";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const PRESETS = [
  "Website packages (£99 / £349 / £699)",
  "How does the AI Receptionist work?",
  "Custom software & SaaS development",
  "Get a free consultation",
];

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hello and welcome to **CortexHive**!\n\nI can answer questions about our website packages, 24/7 AI Receptionist, business automation, or custom software development.\n\nHow can we help your business today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim() || isLoading) return;

    if (!textToSend) setInput("");

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const history = [...messages, userMsg].map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });

      if (!res.ok) throw new Error("Network response error");

      const data = await res.json();

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.message || "I'm having trouble processing that. Please try again.",
      };

      setMessages((prev) => [...prev, assistantMsg]);

      if (data.leadSaved) {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#2563EB", "#38BDF8", "#16A34A"],
        });
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content:
            "Sorry, I encountered a connection issue. Please use our enquiry form on the page or message us directly on WhatsApp.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content:
          "Hello and welcome to **CortexHive**!\n\nI can answer questions about our website packages, 24/7 AI Receptionist, business automation, or custom software development.\n\nHow can we help your business today?",
      },
    ]);
  };

  const renderMessageContent = (content: string, isUser: boolean) => {
    const cleaned = content.replace(/```json[\s\S]*?```/g, "").trim();
    const lines = cleaned
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    return (
      <div className="space-y-2">
        {lines.map((line, lIdx) => {
          const isNumbered = /^\d+[\.\)]\s/.test(line);
          const isBullet = line.startsWith("- ") || line.startsWith("• ") || line.startsWith("* ");
          const isItem = isNumbered || isBullet;

          return (
            <div
              key={lIdx}
              className={
                isItem
                  ? isUser
                    ? "pl-2 border-l border-white/40 my-1"
                    : "pl-2.5 py-1 px-2.5 my-1.5 rounded-lg bg-white border border-slate-200/80"
                  : ""
              }
            >
              <p className="leading-relaxed text-xs sm:text-sm">
                {line.split("**").map((chunk, i) =>
                  i % 2 === 1 ? (
                    <strong
                      key={i}
                      className={isUser ? "text-white font-bold" : "text-[#14243A] font-bold"}
                    >
                      {chunk}
                    </strong>
                  ) : (
                    chunk
                  )
                )}
              </p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.18 }}
            className="mb-3 w-[340px] sm:w-[390px] h-[520px] max-h-[calc(100vh-7rem)] max-w-[calc(100vw-2.5rem)] rounded-2xl bg-white flex flex-col shadow-2xl overflow-hidden border border-slate-200"
          >
            {/* Header */}
            <div className="p-4 bg-[#14243A] flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    CortexHive Assistant
                  </h4>
                  <span className="text-[11px] text-slate-300">
                    Websites, AI &amp; Software Support
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handleReset}
                  className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                  title="Reset conversation"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close Chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick WhatsApp connect bar */}
            <div className="bg-emerald-50 border-b border-emerald-200/80 px-4 py-2 flex items-center justify-between text-xs">
              <span className="text-emerald-800 font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Prefer human chat?
              </span>
              <a
                href={SITE_CONFIG.getWhatsAppLink("consultation")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 hover:text-emerald-900 font-bold hover:underline"
              >
                WhatsApp Us &rarr;
              </a>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#F8FAFD]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm ${
                      msg.role === "user"
                        ? "bg-blue-600 text-white rounded-br-xs font-medium shadow-2xs"
                        : "bg-white text-slate-700 border border-slate-200 rounded-bl-xs shadow-2xs"
                    }`}
                  >
                    {renderMessageContent(msg.content, msg.role === "user")}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-xs px-4 py-3 text-sm text-slate-500 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Preset prompts */}
            {messages.length < 5 && !isLoading && (
              <div className="px-3.5 py-2.5 flex flex-wrap gap-1.5 border-t border-slate-200 bg-white">
                {PRESETS.map((preset, i) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => {
                      if (preset === "Get a free consultation") {
                        setIsOpen(false);
                        openConsultationModal();
                      } else {
                        handleSend(preset);
                      }
                    }}
                    className="text-[11px] text-slate-700 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-lg px-2.5 py-1 transition-colors font-medium cursor-pointer"
                  >
                    {preset}
                  </button>
                ))}
              </div>
            )}

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 border-t border-slate-200 bg-white flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                disabled={isLoading}
                className="flex-1 bg-slate-50 focus:bg-white border border-slate-200 focus:border-blue-600 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-40 transition-colors flex items-center justify-center"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Bubble Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#14243A] hover:bg-blue-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 border border-slate-700"
        aria-label="Toggle CortexHive Assistant"
      >
        {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />}
      </button>
    </div>
  );
}
