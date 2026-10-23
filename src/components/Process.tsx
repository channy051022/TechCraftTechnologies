"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  Search,
  Target,
  Palette,
  Code2,
  Rocket,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    num: "01",
    phase: "Phase 01",
    title: "Discover",
    subtitle: "Research & Feasibility",
    description:
      "We dissect your business goals, interview target users, analyze technical constraints, and define high-leverage product opportunities.",
    deliverables: [
      "Product Opportunity Map",
      "Technical Feasibility Audit",
      "MVP Scope Definition",
    ],
    metric: "100% Scope Clarity",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
    badgeColor: "text-blue-500 dark:text-blue-400 bg-blue-500/10 border-blue-500/20",
    glow: "shadow-cyan-500/20",
  },
  {
    num: "02",
    phase: "Phase 02",
    title: "Strategy",
    subtitle: "Architecture & Roadmap",
    description:
      "We architect a resilient system blueprint, choose optimal cloud infrastructure, and outline a risk-free development schedule.",
    deliverables: [
      "System Architecture Blueprint",
      "Database Schema Design",
      "Phased Milestone Roadmap",
    ],
    metric: "Zero Technical Debt",
    icon: Target,
    color: "from-cyan-500 to-primary",
    badgeColor: "text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    glow: "shadow-primary/20",
  },
  {
    num: "03",
    phase: "Phase 03",
    title: "Design",
    subtitle: "UI/UX & Design Systems",
    description:
      "We craft high-fidelity, accessible interfaces and bespoke design systems that make complex business workflows feel fluid and effortless.",
    deliverables: [
      "Comprehensive Design Tokens",
      "Interactive High-Fidelity Prototypes",
      "WCAG Accessibility Compliance",
    ],
    metric: "Frictionless UX",
    icon: Palette,
    color: "from-primary to-violet",
    badgeColor: "text-primary dark:text-primary-light bg-primary/10 border-primary/20",
    glow: "shadow-violet/20",
  },
  {
    num: "04",
    phase: "Phase 04",
    title: "Build",
    subtitle: "Full-Stack Engineering",
    description:
      "We write clean, modular, sub-second codebases using Next.js and modern cloud-native edge services, backed by automated end-to-end testing.",
    deliverables: [
      "Clean Next.js & React Core",
      "Serverless Edge Caching",
      "Automated CI/CD Pipelines",
    ],
    metric: "Sub-Second Latency",
    icon: Code2,
    color: "from-violet to-fuchsia-500",
    badgeColor: "text-violet bg-violet/10 border-violet/20",
    glow: "shadow-fuchsia-500/20",
  },
  {
    num: "05",
    phase: "Phase 05",
    title: "Launch",
    subtitle: "Deployment & Scaling",
    description:
      "We orchestrate production rollout with zero downtime, real-time observability, and continuous telemetry to compound your business growth.",
    deliverables: [
      "Zero-Downtime Rollout",
      "Real-Time Telemetry & APM",
      "Continuous Growth Loops",
    ],
    metric: "99.98% SLA Uptime",
    icon: Rocket,
    color: "from-fuchsia-500 to-emerald-500",
    badgeColor: "text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    glow: "shadow-emerald-500/20",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 75%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="process"
      className="py-16 md:py-24 bg-background relative transition-colors duration-300 overflow-hidden"
      ref={containerRef}
    >
      {/* Decorative Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 blur-[140px] rounded-full pointer-events-none -translate-x-1/2 -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet/5 dark:bg-violet/10 blur-[140px] rounded-full pointer-events-none translate-x-1/2 -z-10" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Section Header with Badge and Gradient Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 mb-4 sm:mb-5">
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-zinc-600 dark:text-zinc-300 uppercase">
              Proven Methodology
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
            From idea to <span className="text-gradient">impact.</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
            A disciplined, high-velocity engineering process built to turn ambitious concepts
            into reliable market leaders.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Static Track Guide Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-200 dark:bg-white/10 -translate-x-1/2" />

          {/* Dynamic Scroll Progress Fill Line */}
          <motion.div
            className="absolute left-[27px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-primary via-violet to-primary-light -translate-x-1/2 shadow-[0_0_12px_rgba(50,145,255,0.6)]"
            style={{ height: lineHeight }}
          />

          {/* Animated Continuous Travelling Light Beam */}
          <motion.div
            className="absolute left-[27px] md:left-1/2 w-1.5 h-36 bg-gradient-to-b from-transparent via-cyan-400 to-transparent -translate-x-1/2 blur-[2px] pointer-events-none z-10 opacity-80"
            animate={{
              top: ["-5%", "105%"],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Timeline Steps List */}
          <div className="space-y-12 md:space-y-20">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const isHovered = hoveredIndex === index;
              const StepIcon = step.icon;

              return (
                <div
                  key={step.num}
                  className="relative flex items-center md:justify-between flex-col md:flex-row group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Timeline Node Badge (Center Dot) */}
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="absolute left-[27px] md:left-1/2 -translate-x-1/2 z-20"
                  >
                    <div
                      className={`relative w-14 h-14 rounded-2xl bg-white dark:bg-[#0c0e17] border transition-all duration-300 flex items-center justify-center shadow-lg ${
                        isHovered
                          ? "border-primary dark:border-primary-light scale-110 shadow-primary/30"
                          : "border-zinc-200 dark:border-white/15"
                      }`}
                    >
                      {/* Active breathing pulse ring */}
                      <span
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                      />

                      {/* Number or Icon */}
                      <div className="relative flex items-center justify-center">
                        <span className="text-sm font-bold font-mono text-zinc-900 dark:text-white group-hover:hidden">
                          {step.num}
                        </span>
                        <StepIcon className="w-5 h-5 text-primary-light hidden group-hover:block transition-all duration-200 transform group-hover:scale-110" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Horizontal Connector Line on Desktop */}
                  <div
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] transition-all duration-300 pointer-events-none ${
                      isEven
                        ? "right-1/2 w-16 bg-gradient-to-l"
                        : "left-1/2 w-16 bg-gradient-to-r"
                    } ${
                      isHovered
                        ? "from-primary/60 to-transparent"
                        : "from-zinc-200 dark:from-white/10 to-transparent"
                    }`}
                  />

                  {/* Step Content Card */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isEven ? -40 : 40,
                      y: 20,
                    }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`w-full md:w-5/12 pl-18 sm:pl-20 md:pl-0 ${
                      isEven ? "md:text-left md:mr-auto" : "md:text-left md:ml-auto"
                    }`}
                  >
                    <div
                      className={`relative p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#0c0e17]/85 border transition-all duration-300 backdrop-blur-md overflow-hidden ${
                        isHovered
                          ? "border-primary/50 dark:border-primary/40 -translate-y-1.5 shadow-xl dark:shadow-[0_15px_40px_-10px_rgba(0,112,243,0.25)]"
                          : "border-zinc-200/90 dark:border-white/10 shadow-sm hover:shadow-md"
                      }`}
                    >
                      {/* Corner Accent Light on Hover */}
                      <div
                        className={`absolute -top-16 -right-16 w-32 h-32 rounded-full bg-gradient-to-br ${step.color} blur-2xl opacity-0 group-hover:opacity-30 dark:group-hover:opacity-25 transition-opacity duration-500 pointer-events-none`}
                      />

                      {/* Header Row: Phase Tag + Metric Badge */}
                      <div className="flex items-center justify-between gap-3 mb-3.5 sm:mb-4">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-xs shadow-xs shrink-0`}
                          >
                            <StepIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          </span>
                          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono">
                            {step.phase}
                          </span>
                        </div>

                        <span
                          className={`inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-semibold border ${step.badgeColor} shrink-0`}
                        >
                          {step.metric}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight mb-1">
                        {step.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs font-semibold text-primary-light uppercase tracking-wider mb-2 sm:mb-3">
                        {step.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm md:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4 sm:mb-5 font-normal">
                        {step.description}
                      </p>

                      {/* Key Deliverables Checklist */}
                      <div className="pt-3.5 sm:pt-4 border-t border-zinc-100 dark:border-white/5 space-y-1.5 sm:space-y-2">
                        {step.deliverables.map((item, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-center gap-2 text-[11px] sm:text-xs text-zinc-600 dark:text-zinc-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

