"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ShieldCheck, TrendingUp, ChevronDown } from "lucide-react";

const commitments = [
  {
    id: "clarity",
    icon: Sparkles,
    title: "Clarity Over Complexity",
    description: "Eliminating bloat to deliver intuitive workflows teams actually enjoy using.",
  },
  {
    id: "resilience",
    icon: ShieldCheck,
    title: "Engineered for Resilience",
    description: "Airtight security, sub-second latency, and rock-solid stability under real-world scale.",
  },
  {
    id: "outcomes",
    icon: TrendingUp,
    title: "Tied to Business Outcomes",
    description: "Every architectural choice is focused on reducing overhead, saving hours, and boosting ROI.",
  },
];

export default function About() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="about"
      className="py-20 sm:py-24 md:py-32 bg-background border-t border-zinc-200/80 dark:border-white/10 relative overflow-hidden transition-colors duration-300"
    >
      {/* Decorative Ambient Background Glows */}
      <div className="absolute top-1/3 left-10 w-[550px] h-[550px] bg-primary/5 dark:bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-violet/5 dark:bg-violet/10 blur-[140px] rounded-full pointer-events-none -z-0" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Side-by-Side 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ======================================================== */}
          {/* LEFT SIDE: Purpose, Headline & Narrative Copy            */}
          {/* ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-start lg:sticky lg:top-28"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 mb-5 sm:mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-light animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-zinc-600 dark:text-zinc-300 uppercase font-mono">
                Our Purpose & Craft
              </span>
            </div>

            {/* Core Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-5 sm:mb-6 leading-[1.14]">
              Technology should make business feel{" "}
              <span className="text-gradient">simpler.</span>
            </h2>

            {/* Narrative Body Copy */}
            <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
              TechCraft Technologies exists to help businesses turn ambitious ideas into useful,
              reliable digital products. We combine commercial strategy, human-centered design, and
              modern full-stack engineering to build software that solves real problems and drives
              measurable growth.
            </p>
          </motion.div>

          {/* ======================================================== */}
          {/* RIGHT SIDE: Minimalist Divider-Based Accordion (Not Card) */}
          {/* ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col divide-y divide-zinc-200/80 dark:divide-white/10 border-y border-zinc-200/80 dark:border-white/10 w-full"
          >
            {commitments.map((item) => {
              const IconComponent = item.icon;
              const isExpanded = expandedId === item.id;

              return (
                <div
                  key={item.id}
                  className="transition-colors duration-200"
                >
                  {/* 1-Line Header Row: Icon + Title + Expand Button */}
                  <button
                    type="button"
                    onClick={() => toggleExpand(item.id)}
                    aria-expanded={isExpanded}
                    className="w-full flex items-center justify-between gap-3 py-5 sm:py-6 text-left cursor-pointer select-none group transition-colors duration-200"
                  >
                    {/* Left side: Icon + Title on 1 Line */}
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                      <div
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isExpanded
                            ? "bg-primary text-white shadow-md shadow-primary/25 scale-105"
                            : "bg-primary/10 dark:bg-white/5 border border-primary/20 dark:border-white/10 text-primary-light group-hover:scale-105 group-hover:border-primary/40"
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3
                        className={`text-base sm:text-lg md:text-xl font-bold tracking-tight whitespace-nowrap overflow-hidden text-ellipsis transition-colors duration-200 ${
                          isExpanded
                            ? "text-primary dark:text-primary-light"
                            : "text-foreground group-hover:text-primary dark:group-hover:text-primary-light"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    {/* Right side: Animated Expand Icon */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                        isExpanded
                          ? "bg-primary text-white border-primary shadow-sm shadow-primary/25 rotate-180"
                          : "bg-zinc-100 dark:bg-white/5 border-zinc-200 dark:border-white/10 text-zinc-500 dark:text-zinc-400 group-hover:bg-zinc-200/80 dark:group-hover:bg-white/10 group-hover:text-foreground group-hover:border-zinc-300 dark:group-hover:border-white/20"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Expandable Description Area */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-5 sm:pb-6 pl-1 sm:pl-[56px] pr-2 sm:pr-8">
                          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
