"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lightbulb,
  Compass,
  Palette,
  Cpu,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const commitments = [
  {
    icon: Sparkles,
    title: "Clarity Over Complexity",
    description: "Eliminating bloat to deliver intuitive workflows teams actually enjoy using.",
  },
  {
    icon: ShieldCheck,
    title: "Engineered for Resilience",
    description: "Airtight security, sub-second latency, and stability under real-world scale.",
  },
  {
    icon: TrendingUp,
    title: "Tied to Business Outcomes",
    description: "Every architectural choice is focused on reducing overhead and boosting ROI.",
  },
];

const pipelineSteps = [
  {
    id: "idea",
    step: "01",
    name: "Idea",
    tagline: "Vision & Opportunity Mapping",
    description:
      "We dissect the business challenge, challenge assumptions, and define high-impact product requirements before writing a single line of code.",
    icon: Lightbulb,
    deliverables: [
      "User problem definition",
      "Competitive gap analysis",
      "Feature prioritization & MVP scope",
    ],
    metric: "100% Scope Clarity",
    badgeColor: "text-blue-500 dark:text-blue-400 bg-blue-500/10 border-blue-500/20",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "strategy",
    step: "02",
    name: "Strategy",
    tagline: "System & Architecture Blueprint",
    description:
      "Translating your business objectives into scalable system architecture, high-concurrency database models, and phased execution roadmaps.",
    icon: Compass,
    deliverables: [
      "Cloud architecture blueprint",
      "API & data schema design",
      "Security & compliance framework",
    ],
    metric: "De-Risked Execution",
    badgeColor: "text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    gradient: "from-cyan-500 to-primary",
  },
  {
    id: "design",
    step: "03",
    name: "Design",
    tagline: "High-Fidelity Interface & UX",
    description:
      "Crafting bespoke design systems, micro-interactions, and frictionless user flows that make complex business workflows feel effortless.",
    icon: Palette,
    deliverables: [
      "Comprehensive design tokens",
      "Fluid, responsive UI systems",
      "Interactive high-fidelity prototypes",
    ],
    metric: "Frictionless UX",
    badgeColor: "text-primary dark:text-primary-light bg-primary/10 border-primary/20",
    gradient: "from-primary to-violet",
  },
  {
    id: "technology",
    step: "04",
    name: "Technology",
    tagline: "Modern Full-Stack Engineering",
    description:
      "Building resilient web apps and platforms using modern cloud-native architectures with sub-second response times and airtight reliability.",
    icon: Cpu,
    deliverables: [
      "Next.js & TypeScript core",
      "Edge caching & distributed state",
      "Automated CI/CD deployment pipelines",
    ],
    metric: "Sub-Second Latency",
    badgeColor: "text-violet bg-violet/10 border-violet/20",
    gradient: "from-violet to-fuchsia-500",
  },
  {
    id: "growth",
    step: "05",
    name: "Growth",
    tagline: "Telemetry, Scale & Compound Impact",
    description:
      "Launch is just day one. We embed real-time telemetry, error monitoring, and iterative feature velocity to compound your business growth.",
    icon: TrendingUp,
    deliverables: [
      "Real-time analytics telemetry",
      "Performance optimization loops",
      "Elastic infrastructure scaling",
    ],
    metric: "Measurable Growth",
    badgeColor: "text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    gradient: "from-fuchsia-500 to-emerald-500",
  },
];

export default function About() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance the interactive delivery pipeline every 4.5s (pauses on user interaction)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % pipelineSteps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const current = pipelineSteps[activeStep];
  const StepIcon = current.icon;

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-zinc-50/70 dark:bg-neutral-950 border-t border-zinc-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300"
    >
      {/* Decorative Ambient Radial Background Glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-violet/5 dark:bg-violet/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px", amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 w-fit mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-light animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-zinc-600 dark:text-zinc-300 uppercase">
                Our Purpose & Craft
              </span>
            </div>

            {/* Core Headline */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-foreground mb-4 sm:mb-6 leading-tight sm:leading-[1.12]">
              Technology should make business feel{" "}
              <span className="text-gradient">simpler.</span>
            </h2>

            {/* Narrative Body Copy */}
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal mb-6 sm:mb-8">
              <p>
                TechCraft Technologies exists to help businesses turn ambitious ideas into useful,
                reliable digital experiences.
              </p>
              <p className="text-zinc-500 dark:text-zinc-400">
                We combine strategy, design, and engineering to create technology that solves real
                problems and drives measurable growth.
              </p>
            </div>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 sm:pt-6 border-t border-zinc-200 dark:border-white/10">
              {commitments.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex flex-col gap-1.5 sm:gap-2 group">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-primary/10 dark:bg-white/5 border border-primary/20 dark:border-white/10 flex items-center justify-center text-primary-light group-hover:scale-105 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-foreground tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Interactive 5-Stage "Idea to Growth" Delivery Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px", amount: 0.15 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative rounded-2xl sm:rounded-3xl bg-white dark:bg-[#0c0e17]/90 border border-zinc-200/90 dark:border-white/10 p-5 sm:p-8 shadow-xl dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-md overflow-hidden gpu-accelerated">
              {/* Background Ambient Grid Accent */}
              <div className="absolute inset-0 bg-radial from-primary/5 dark:from-primary/10 via-transparent to-transparent pointer-events-none" />

              {/* Card Header: Title + Live Indicator */}
              <div className="flex items-center justify-between pb-5 sm:pb-6 border-b border-zinc-100 dark:border-white/10 relative z-10">
                <div>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-zinc-400 uppercase tracking-widest block mb-0.5">
                    The Delivery Lifecycle
                  </span>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground tracking-tight">
                    From Concept to Continuous Scale
                  </h3>
                </div>
              </div>

              {/* Interactive Step Navigator Strip */}
              <div className="relative py-4 sm:py-6 z-10">
                <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                  {pipelineSteps.map((step, idx) => {
                    const isActive = idx === activeStep;
                    const isPast = idx < activeStep;
                    return (
                      <button
                        key={step.id}
                        type="button"
                        onClick={() => {
                          setActiveStep(idx);
                          setIsPaused(true);
                        }}
                        className={`group relative flex flex-col items-center py-2 px-1 rounded-xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] text-center ${
                          isActive
                            ? "bg-primary/10 dark:bg-white/10 ring-1 ring-primary/40 dark:ring-white/20 shadow-sm"
                            : "hover:bg-zinc-100 dark:hover:bg-white/5 opacity-70 hover:opacity-100"
                        }`}
                        aria-label={`View phase ${step.step}: ${step.name}`}
                      >
                        <span
                          className={`text-[10px] font-mono font-bold tracking-tight mb-0.5 ${
                            isActive
                              ? "text-primary-light font-extrabold"
                              : isPast
                              ? "text-emerald-500 dark:text-emerald-400"
                              : "text-zinc-400"
                          }`}
                        >
                          {step.step}
                        </span>
                        <span
                          className={`text-[11px] sm:text-xs font-semibold tracking-tight truncate w-full ${
                            isActive
                              ? "text-zinc-950 dark:text-white"
                              : "text-zinc-600 dark:text-zinc-400"
                          }`}
                        >
                          {step.name}
                        </span>

                        {/* Active Step Indicator Pill */}
                        {isActive && (
                          <motion.div
                            layoutId="pipelineIndicator"
                            transition={{ type: "spring", stiffness: 450, damping: 35 }}
                            className="absolute -bottom-1 w-6 h-0.5 rounded-full bg-gradient-to-r from-primary to-violet"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Step Detailed Card Content */}
              <div className="relative min-h-[260px] sm:min-h-[240px] z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    className="p-4 sm:p-6 rounded-2xl bg-zinc-50 dark:bg-neutral-900/60 border border-zinc-200/80 dark:border-white/10 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Row: Icon + Phase Title + Metric Pill */}
                      <div className="flex items-start justify-between gap-3 sm:gap-4 mb-3.5 sm:mb-4">
                        <div className="flex items-center gap-2.5 sm:gap-3">
                          <div
                            className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${current.gradient} flex items-center justify-center text-white shadow-md shadow-primary/20 shrink-0`}
                          >
                            <StepIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-semibold text-zinc-400 tracking-wider uppercase block">
                              Phase {current.step}
                            </span>
                            <h4 className="text-base sm:text-lg md:text-xl font-bold text-zinc-950 dark:text-white tracking-tight">
                              {current.tagline}
                            </h4>
                          </div>
                        </div>

                        <span
                          className={`hidden sm:inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold border ${current.badgeColor} shrink-0`}
                        >
                          {current.metric}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-3 sm:mb-4">
                        {current.description}
                      </p>

                      {/* Deliverables Checklist */}
                      <div className="space-y-1.5 pt-3 border-t border-zinc-200/60 dark:border-white/5">
                        {current.deliverables.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-[11px] sm:text-xs text-zinc-700 dark:text-zinc-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Controller: Controls & Progress Indicator */}
              <div className="flex items-center justify-between pt-5 mt-4 border-t border-zinc-100 dark:border-white/10 relative z-10">
                <div className="flex items-center gap-1.5">
                  {pipelineSteps.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        setActiveStep(i);
                        setIsPaused(true);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeStep
                          ? "w-6 bg-gradient-to-r from-primary to-violet"
                          : "w-1.5 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400"
                      }`}
                      aria-label={`Go to step ${i + 1}`}
                    />
                  ))}
                  <span className="text-[11px] text-zinc-400 ml-2 font-mono">
                    {activeStep + 1} of {pipelineSteps.length}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveStep((prev) =>
                        prev === 0 ? pipelineSteps.length - 1 : prev - 1
                      );
                      setIsPaused(true);
                    }}
                    className="p-1.5 rounded-lg border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors"
                    aria-label="Previous phase"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveStep((prev) => (prev + 1) % pipelineSteps.length);
                      setIsPaused(true);
                    }}
                    className="p-1.5 rounded-lg border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors"
                    aria-label="Next phase"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

