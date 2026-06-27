"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowRight, Award, TrendingUp, Cpu } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: "saas" | "ai" | "webapps";
  metric: string;
  metricLabel: string;
  image: string;
  shortDesc: string;
  challenge: string;
  solution: string;
  results: string[];
  tech: string[];
}

const projects: Project[] = [
  {
    id: "project-1",
    title: "AuraHealth — AI Medical Intake",
    category: "ai",
    metric: "+150%",
    metricLabel: "Intake Efficiency Boost",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    shortDesc: "HIPAA-compliant voice synthesis and transcription bot that automatically structures patient histories for medical charts.",
    challenge: "Medical staff spent upwards of 3 hours per day manually typing patient intake histories, leading to burnout and clerical errors.",
    solution: "We engineered a voice intake chatbot powered by a fine-tuned Whisper API and a customized clinical NLP parser that automatically converts dialogue into formatted HL7 standard medical intake charts.",
    results: [
      "Reduced average intake documentation time from 18 minutes to 4.5 minutes",
      "Achieved 99.4% translation accuracy on complex medical terminology",
      "Integrated directly with EHR systems via secure webhooks",
    ],
    tech: ["Whisper API", "Next.js", "FastAPI", "MongoDB"],
  },
  {
    id: "project-2",
    title: "Synthesia CRM — SaaS Platform",
    category: "saas",
    metric: "10x",
    metricLabel: "Faster Sales Scopes",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&auto=format&fit=crop&q=80",
    shortDesc: "Multi-tenant CRM SaaS platform featuring automated lead scoring, dynamic proposal builders, and user billing.",
    challenge: "B2B sales teams were losing leads due to slow customized scoping processes that took days to compile.",
    solution: "A modern multi-tenant SaaS application that leverages AI to instantly analyze user inputs and auto-generate detailed project scoping briefs and legal contracts in PDF format.",
    results: [
      "Sales scoping cycles reduced from 48 hours to under 3 minutes",
      "Stripe integration enabled immediate token package purchasing",
      "Client conversion rates grew by 38% due to instant quotes",
    ],
    tech: ["Next.js 14", "Tailwind CSS", "Prisma", "Stripe API"],
  },
  {
    id: "project-3",
    title: "Predictive Commerce Hub",
    category: "webapps",
    metric: "+82%",
    metricLabel: "Inventory Accuracy",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=80",
    shortDesc: "Real-time retail inventory optimizer utilizing deep-learning demand analysis forecasting to prevent overstocking capital loss.",
    challenge: "A scaling e-commerce brand struggled with overstocking capital loss and understocking outages during peak seasons.",
    solution: "An interactive dashboard syncing live with Shopify, utilizing deep-learning time-series forecasting to predict stock demands 30 days in advance.",
    results: [
      "Prevented over $120,000 in capital overstocking in the first quarter",
      "Real-time websocket dashboards synced alerts to local warehouse hubs",
      "Optimized shipping supply chain delivery paths",
    ],
    tech: ["React", "Go", "Python (TensorFlow)", "Redis"],
  },
  {
    id: "project-4",
    title: "NeuroCopy — AI Marketing Suite",
    category: "ai",
    metric: "+180%",
    metricLabel: "Ad CTR Increase",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&auto=format&fit=crop&q=80",
    shortDesc: "Specialized copywriting suite analyzing consumer profiles to generate highly personalized, high-converting social ad creatives.",
    challenge: "Generic ad creatives led to high customer acquisition costs and low engagement ratings across social media platforms.",
    solution: "An automated ad copy generation workspace that analyzes brand voice rules and structures high-frequency copywriting permutations targeted at distinct user avatars.",
    results: [
      "Meta Ads click-through-rates increased by 180% on average",
      "Generated over 5,000 ad copy variations optimized for conversions",
      "Reduced monthly copywriting spend by 75%",
    ],
    tech: ["DeepSeek API", "Next.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: "project-5",
    title: "Stellar LMS — Education SaaS",
    category: "saas",
    metric: "240k+",
    metricLabel: "Active Students",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    shortDesc: "Collaborative learning management platform equipped with automated coding grading rubrics and customized course structuring.",
    challenge: "Online educators were overwhelmed by grading thousands of open-ended coding and writing submissions.",
    solution: "We built an educational platform with a containerized auto-grader and LLM-assisted rubrics evaluator that returns detailed grading feedback.",
    results: [
      "94% of student assignments auto-graded with comprehensive feedback",
      "Course creation time reduced from 2 weeks to 1 hour using AI templates",
      "Scalable multi-tenant infrastructure support for high peak loads",
    ],
    tech: ["Node.js", "Docker", "React", "AWS ECS"],
  },
  {
    id: "project-6",
    title: "Rydigoo — Connect with Drivers",
    category: "webapps",
    metric: "45k+",
    metricLabel: "Active UK Drivers",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80",
    shortDesc: "The UK's premier driver community connecting taxi and private hire drivers across every UK city.",
    challenge: "Private hire and taxi drivers in the UK lacked a cohesive, high-performance platform to share real-time city knowledge, track driving expenses, and network securely.",
    solution: "We built a mobile-first PWA driver community platform complete with regional chat hubs, campaigns, offline expense ledgers, city rate trackers, and secure driver verification.",
    results: [
      "Onboarded thousands of UK private hire and taxi drivers into city-level communities",
      "Delivered features for real-time chat, local marketplace deals, and campaign structures",
      "Integrated an offline-first expense management tool and secure driver updates dashboard",
    ],
    tech: ["Next.js 14", "Tailwind CSS", "PostgreSQL", "PWA (Progressive Web App)"],
  },
  {
    id: "project-7",
    title: "EV Trade Show — Booking & Expo",
    category: "saas",
    metric: "+340%",
    metricLabel: "Booth Lead Increase",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&auto=format&fit=crop&q=80",
    shortDesc: "Event management SaaS connecting EV manufacturers and buyers with interactive bookings and floor map routing.",
    challenge: "Physical trade show exhibitors struggled to capture, qualify, and direct high-value dealer leads during peak hours using legacy scanning devices.",
    solution: "We built a centralized event-management SaaS featuring automated QR booth check-ins, interactive 3D floor map routing, and instant vendor match algorithms.",
    results: [
      "Automated booth lead generation increased by 340% compared to legacy paper scan systems",
      "Handled 12,000 concurrent interactive floor plan interactions during prime hours",
      "Generated over $4.2M in direct dealer pipeline value within the show portal",
    ],
    tech: ["Next.js 14", "Tailwind CSS", "Prisma", "Three.js", "WebSockets"],
  },
  {
    id: "project-8",
    title: "Run the UK — Cabinet Simulator Game",
    category: "webapps",
    metric: "1.5M+",
    metricLabel: "Simulations Run",
    image: "/run-the-uk.png",
    shortDesc: "Immersive political simulation game challenging players to govern the UK through cabinet briefings and crises.",
    challenge: "Developing a decisions-driven simulation logic that dynamically recalculates treasury budget, party loyalty, and public popularity metrics.",
    solution: "We built a serverless event-driven architecture using state machines to render high-fidelity dashboards containing real-time branching crisis options.",
    results: [
      "Facilitated over 1.5 million interactive Prime Minister crisis simulation sessions",
      "Achieved a 45-minute average session duration with high viral replayability",
      "Scaled server infrastructure to handle rapid social media referral traffic spikes",
    ],
    tech: ["Next.js 14", "Tailwind CSS", "Prisma", "Serverless Functions", "PostgreSQL"],
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState<"all" | "saas" | "ai" | "webapps">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <section id="portfolio" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-hive-cyan/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-[0.25em] text-hive-cyan font-bold mb-3">
            Case Studies
          </h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6">
            Proven Outcomes, Engineered Intelligently
          </h3>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Explore our portfolio of scalable SaaS platforms, custom AI systems, and high-performance applications built for digital disruptors.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {(["all", "saas", "ai", "webapps"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                filter === cat
                  ? "bg-gradient-hive-solid text-white shadow-md shadow-hive-blue/20"
                  : "bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-350"
              }`}
            >
              {cat === "all" ? "All Projects" : cat === "saas" ? "SaaS Platforms" : cat === "ai" ? "AI Tools" : "Web Apps"}
            </button>
          ))}
        </div>

        {/* Grid List */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className="glass-panel rounded-2xl overflow-hidden cursor-pointer group hover:border-hive-cyan/35 transition-all duration-300 bg-white flex flex-col h-full justify-between"
              >
                <div>
                  {/* Thumbnail Container */}
                  <div className="relative h-52 w-full overflow-hidden bg-gray-900">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    
                    {/* Floating Metric Badge */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-2xl font-black text-hive-cyan drop-shadow-md">
                        {project.metric}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-white bg-white/10 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-full">
                        {project.metricLabel}
                      </span>
                    </div>
                  </div>

                  {/* Info Content */}
                  <div className="p-6 pb-0">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-hive-purple mb-2 block">
                      {project.category === "saas" ? "SaaS Development" : project.category === "ai" ? "Custom AI Tool" : "Web Application"}
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-hive-cyan transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 font-medium">
                      {project.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-auto">
                  <div className="flex items-center gap-1.5 text-xs text-hive-cyan font-bold group-hover:underline">
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-y-auto">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[85vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/80 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors z-20 shadow-sm"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable Content Container */}
              <div className="overflow-y-auto flex-1">
                {/* Hero Banner */}
                <div className="relative h-64 sm:h-80 w-full bg-gray-900">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-xs uppercase font-extrabold tracking-widest text-white bg-hive-cyan border border-hive-cyan/50 px-3 py-1 rounded-full mb-3 inline-block">
                      {selectedProject.category === "saas" ? "SaaS Development" : selectedProject.category === "ai" ? "Custom AI Tool" : "Web Application"}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Details Content */}
                <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column (Main Story) */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-2">
                        <Award className="w-4 h-4 text-hive-purple" />
                        <span>The Challenge</span>
                      </h4>
                      <p className="text-slate-700 text-sm leading-relaxed font-medium">
                        {selectedProject.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-hive-cyan" />
                        <span>Our Solution</span>
                      </h4>
                      <p className="text-slate-700 text-sm leading-relaxed font-medium">
                        {selectedProject.solution}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-hive-blue" />
                        <span>Key Outcomes & Metrics</span>
                      </h4>
                      <ul className="space-y-2.5">
                        {selectedProject.results.map((res, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-normal font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-hive-cyan mt-2 flex-shrink-0" />
                            <span>{res}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column (Sidebar Specifications) */}
                  <div className="glass-panel p-6 rounded-2xl border-slate-200 bg-slate-50 space-y-6 h-fit">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-2">
                        Primary Impact
                      </span>
                      <span className="text-4xl font-black text-hive-cyan block">
                        {selectedProject.metric}
                      </span>
                      <span className="text-xs text-slate-700 font-semibold block mt-1">
                        {selectedProject.metricLabel}
                      </span>
                    </div>

                    <hr className="border-slate-200" />

                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-2">
                        Tech Stack Used
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-bold text-slate-800 bg-white border border-slate-200 rounded px-2 py-1"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedProject(null);
                        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="w-full py-3 rounded-full bg-gradient-hive-solid hover:shadow-lg hover:shadow-hive-blue/20 text-xs font-bold text-white transition-all text-center flex items-center justify-center gap-1.5"
                    >
                      <span>Inquire about similar builds</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
