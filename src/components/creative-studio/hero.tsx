"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Play, Heart, MessageCircle, Share2, Sparkles } from "lucide-react";

export default function Hero() {
  const router = useRouter();

  const handleStartProjectClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#contact");
    }
  };

  const handleViewWorkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative z-10 bg-white pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      {/* Dynamic Background Blobs */}
      <div className="absolute top-1/3 left-1/10 w-[300px] h-[300px] bg-hive-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[350px] h-[350px] bg-hive-purple/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side Copy */}
        <div className="lg:col-span-7 text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-bold tracking-widest text-hive-purple uppercase shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-hive-cyan" />
            <span>Creative Studio Launch</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.05] font-outfit"
          >
            We Make Content <br />
            <span className="text-gradient bg-gradient-to-r from-purple-600 to-hive-cyan">That Stops the Scroll</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed font-medium"
          >
            Viral reels, cinematic ads, motion animations and social design tools — engineered for maximum reach.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Link
              href="#contact"
              onClick={handleStartProjectClick}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold text-sm shadow-lg shadow-purple-600/20 hover:shadow-purple-600/30 hover:scale-102 transition-all"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#portfolio"
              onClick={handleViewWorkClick}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-slate-300 hover:border-slate-800 text-slate-700 hover:text-slate-950 font-bold text-sm bg-white transition-all"
            >
              <span>View Our Work</span>
            </Link>
          </motion.div>
        </div>

        {/* Right Side Mockup */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Background glowing rings */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-[3.5rem] filter blur-xl opacity-70 animate-pulse-slow pointer-events-none" />

            {/* Smartphone Case Mockup */}
            <div className="relative w-[280px] h-[560px] bg-slate-950 rounded-[3.2rem] p-3 shadow-2xl border-[6px] border-slate-800 flex flex-col justify-between overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-950 rounded-b-2.5xl z-30 flex items-center justify-center">
                <div className="w-12 h-1.5 bg-slate-850 rounded-full" />
              </div>

              {/* Screen Body Container */}
              <div className="relative w-full h-full rounded-[2.5rem] bg-gradient-to-b from-indigo-50 to-purple-100 overflow-hidden flex flex-col justify-between p-4 z-10">
                {/* Simulated Video Frame content */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-transparent to-cyan-900/20 z-0" />

                {/* Looping Content Items (Animated with Framer Motion) */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 space-y-4 z-10">
                  {/* Floating Like alert banner */}
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                      y: [10, 0, 0, -10],
                      scale: [0.95, 1, 1, 0.95],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                    className="absolute top-16 left-4 right-4 bg-white/90 backdrop-blur-md border border-white/20 p-3 rounded-2xl flex items-center gap-3 shadow-lg"
                  >
                    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold font-outfit shadow-sm">
                      CH
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-bold text-slate-800 leading-tight">Cortex Hive Studio</p>
                      <p className="text-[9.5px] text-slate-500 truncate leading-tight">Going viral... +14.2k likes</p>
                    </div>
                    <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-bounce" />
                  </motion.div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white"
                    >
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </motion.div>
                  </div>

                  {/* Comments/Shares bar right side */}
                  <div className="absolute right-4 bottom-24 flex flex-col gap-4 text-white items-center">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-black/60 transition-colors">
                        <Heart className="w-5 h-5 fill-white" />
                      </div>
                      <span className="text-[10px] font-bold">12.5k</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-black/60 transition-colors">
                        <MessageCircle className="w-5 h-5 fill-white" />
                      </div>
                      <span className="text-[10px] font-bold">342</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-black/60 transition-colors">
                        <Share2 className="w-5 h-5 fill-white" />
                      </div>
                      <span className="text-[10px] font-bold">8.9k</span>
                    </div>
                  </div>

                  {/* Bottom Text Details */}
                  <div className="space-y-2 text-slate-900 w-[78%]">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-0.5">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[9px] font-black">
                          CH
                        </div>
                      </div>
                      <span className="text-xs font-bold text-white drop-shadow-md">@cortexhive</span>
                    </div>
                    <p className="text-[11px] text-white font-medium leading-relaxed drop-shadow-md">
                      Stop scroll issues. Launch high-fidelity animations that convert. 🚀 #viral #motion
                    </p>
                  </div>

                  {/* Progress indicator */}
                  <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      animate={{ width: ["0%", "100%"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="h-full bg-gradient-to-r from-purple-500 to-cyan-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
