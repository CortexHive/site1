"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function BottomCTA() {
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

  return (
    <section className="py-20 bg-white relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 px-8 py-16 sm:py-20 text-center shadow-xl flex flex-col items-center justify-center space-y-8"
        >
          {/* Decorative design vector in background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent)] pointer-events-none" />

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-2xl font-outfit">
            Ready to Go Viral?
          </h2>
          <p className="text-white/80 max-w-xl text-sm sm:text-base font-medium">
            Partner with Cortex Hive to craft scroll-stopping motion assets, reels, and high-performance ads.
          </p>

          <div>
            <Link
              href="#contact"
              onClick={handleStartProjectClick}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-purple-700 hover:text-purple-800 hover:bg-slate-50 font-bold text-sm shadow-md hover:scale-102 hover:shadow-lg transition-all"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 text-purple-600" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
