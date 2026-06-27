"use client";

import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Bot, RefreshCw, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const PRESETS = [
  "What services do you offer?",
  "How do we get started?",
  "How fast can you build a SaaS?",
  "I'd like to build custom AI tools",
];

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hello! Welcome to **Cortex Hive** 🐝. I am your AI concierge. I can answer questions about our digital building services, how we work, or help you start a project inquiry. May I have your name and the type of project you are working on?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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

      // Trigger celebration if a lead has been successfully registered
      if (data.leadSaved) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#06b6d4", "#3b82f6", "#a855f7"],
        });
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Sorry, I encountered an error connecting to my database. Please try again or fill out our contact form below.",
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
        content: "Hello! Welcome to **Cortex Hive** 🐝. I am your AI concierge. I can answer questions about our digital building services, how we work, or help you start a project inquiry. May I have your name and the type of project you are working on?",
      },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {/* Chat window */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="w-[360px] sm:w-[400px] h-[550px] rounded-2xl glass-panel flex flex-col shadow-2xl overflow-hidden border-hive-cyan/20 glow-cyan"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-hive-solid flex items-center justify-between border-b border-white/10 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    Hive Concierge <Sparkles className="w-3.5 h-3.5 text-white fill-white animate-pulse" />
                  </h4>
                  <span className="text-[10px] text-white/80">AI Innovation Partner</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleReset}
                  className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  title="Reset conversation"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close Chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gradient-hive-solid text-white rounded-br-none font-medium shadow-sm"
                        : "bg-slate-100/90 text-slate-800 border border-slate-200/50 rounded-bl-none"
                    }`}
                  >
                    {/* Parse simple markdown tags for bold */}
                    {msg.content.split("**").map((chunk, i) =>
                      i % 2 === 1 ? (
                        <strong key={i} className={msg.role === "user" ? "text-white font-bold" : "text-hive-purple font-bold"}>
                          {chunk}
                        </strong>
                      ) : (
                        chunk
                      )
                    )}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-100/90 border border-slate-200/50 rounded-2xl rounded-bl-none px-4 py-3 text-sm text-slate-500 flex items-center gap-2 animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-hive-blue animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-hive-blue animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-hive-blue animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Preset prompts (only show when conversation is in early stage and not loading) */}
            {messages.length < 5 && !isLoading && (
              <div className="px-4 py-2 flex flex-wrap gap-1.5 border-t border-slate-100 bg-slate-50/50">
                {PRESETS.map((preset, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(preset)}
                    className="text-[11px] text-slate-600 hover:text-hive-purple bg-slate-100/80 hover:bg-slate-200/80 border border-slate-200/50 rounded-full px-2.5 py-1 transition-all"
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
              className="p-3 border-t border-slate-200 bg-white/80 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our services or start a lead..."
                disabled={isLoading}
                className="flex-1 bg-slate-50 hover:bg-slate-100 focus:bg-white border border-slate-200 focus:border-hive-cyan/50 focus:ring-1 focus:ring-hive-cyan/50 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-all"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-2.5 rounded-xl bg-gradient-hive-solid hover:shadow-lg hover:shadow-hive-blue/20 text-white disabled:opacity-50 disabled:shadow-none transition-all flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Bubble Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-hive-solid text-white flex items-center justify-center shadow-xl hover:shadow-hive-cyan/30 transform hover:scale-105 active:scale-95 transition-all duration-200 border border-white/10"
        aria-label="Toggle chat concierage"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
}
