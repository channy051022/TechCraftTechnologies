"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Brain,
  TrendingUp,
  Target,
  Rocket,
  Handshake,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface MindsetCard {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Cpu;
  accent: string;
  borderHover: string;
  iconBg: string;
  iconColor: string;
  glow: string;
}

const mindsetCards: MindsetCard[] = [
  {
    number: "01",
    title: "Custom-Built From Scratch",
    subtitle: "No off-the-shelf systems",
    description:
      "Every architecture is engineered to match your unique operational requirements — zero bloated templates or restrictive platform limits.",
    icon: Cpu,
    accent: "from-sky-500/15 via-transparent to-transparent",
    borderHover: "hover:border-sky-500/40 dark:hover:border-sky-500/40",
    iconBg: "bg-sky-500/10 dark:bg-sky-500/15 border-sky-500/20",
    iconColor: "text-sky-500 dark:text-sky-400",
    glow: "bg-sky-500/10",
  },
  {
    number: "02",
    title: "Business-First Thinking",
    subtitle: "We design logic before code",
    description:
      "We dissect core bottlenecks, cost structures, and user journeys first. Technology only delivers value when it solves real business problems.",
    icon: Brain,
    accent: "from-blue-500/15 via-transparent to-transparent",
    borderHover: "hover:border-blue-500/40 dark:hover:border-blue-500/40",
    iconBg: "bg-blue-500/10 dark:bg-blue-500/15 border-blue-500/20",
    iconColor: "text-blue-500 dark:text-blue-400",
    glow: "bg-blue-500/10",
  },
  {
    number: "03",
    title: "Scalable Architecture",
    subtitle: "Built to grow with you",
    description:
      "Cloud-native, modular systems designed to handle 10x traffic surges, expanding team roles, and rapid feature additions with ease.",
    icon: TrendingUp,
    accent: "from-violet-500/15 via-transparent to-transparent",
    borderHover: "hover:border-violet-500/40 dark:hover:border-violet-500/40",
    iconBg: "bg-violet-500/10 dark:bg-violet-500/15 border-violet-500/20",
    iconColor: "text-violet-500 dark:text-violet-400",
    glow: "bg-violet-500/10",
  },
  {
    number: "04",
    title: "Results-Focused Execution",
    subtitle: "Solve real operational problems",
    description:
      "We measure progress in tangible business outcomes: manual hours saved, latency eliminated, and seamless automated workflows.",
    icon: Target,
    accent: "from-emerald-500/15 via-transparent to-transparent",
    borderHover: "hover:border-emerald-500/40 dark:hover:border-emerald-500/40",
    iconBg: "bg-emerald-500/10 dark:bg-emerald-500/15 border-emerald-500/20",
    iconColor: "text-emerald-500 dark:text-emerald-400",
    glow: "bg-emerald-500/10",
  },
  {
    number: "05",
    title: "End-to-End Ownership",
    subtitle: "From idea to deployment",
    description:
      "No handoffs or fragmented accountability. We guide your solution across discovery, UI/UX, robust development, and cloud launch.",
    icon: Rocket,
    accent: "from-amber-500/15 via-transparent to-transparent",
    borderHover: "hover:border-amber-500/40 dark:hover:border-amber-500/40",
    iconBg: "bg-amber-500/10 dark:bg-amber-500/15 border-amber-500/20",
    iconColor: "text-amber-500 dark:text-amber-400",
    glow: "bg-amber-500/10",
  },
  {
    number: "06",
    title: "Long-Term Partner Mindset",
    subtitle: "Not a one-off dev shop",
    description:
      "We don't ship code and disappear. We stand behind our engineering with ongoing strategic advisory, monitoring, and proactive enhancements.",
    icon: Handshake,
    accent: "from-rose-500/15 via-transparent to-transparent",
    borderHover: "hover:border-rose-500/40 dark:hover:border-rose-500/40",
    iconBg: "bg-rose-500/10 dark:bg-rose-500/15 border-rose-500/20",
    iconColor: "text-rose-500 dark:text-rose-400",
    glow: "bg-rose-500/10",
  },
];

export default function BusinessMindset() {
  return (
    <section
      id="business-mindset"
      className="py-16 sm:py-20 md:py-24 relative bg-background border-t border-zinc-200 dark:border-white/5 transition-colors duration-300 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-primary/5 dark:bg-primary/10 blur-[130px] rounded-full pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-violet/5 dark:bg-violet/10 blur-[140px] rounded-full pointer-events-none translate-x-1/2" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-[11px] sm:text-xs font-semibold tracking-wider text-zinc-600 dark:text-zinc-400 uppercase mb-4 sm:mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-light animate-pulse" />
            Our Mindset & Approach
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.15] mb-4 sm:mb-6">
            Not just developers. <br />
            <span className="text-gradient">We think like business owners.</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light max-w-2xl mx-auto">
            We design the logic before the code — so every system we build solves a real business problem.
          </p>
        </motion.div>

        {/* 6 Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {mindsetCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative p-5 sm:p-6 md:p-7 rounded-2xl sm:rounded-[22px] bg-zinc-50/80 dark:bg-neutral-900/60 backdrop-blur-sm border border-zinc-200/80 dark:border-white/5 ${card.borderHover} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:hover:shadow-2xl overflow-hidden flex flex-col justify-between`}
              >
                {/* Subtle Inner Glow on Hover */}
                <div
                  className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${card.accent} rounded-bl-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div>
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 dark:text-zinc-500">
                      {card.number}
                    </span>

                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl border flex items-center justify-center ${card.iconBg} ${card.iconColor} group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1.5 tracking-tight group-hover:text-primary-light transition-colors">
                    {card.title}
                  </h3>

                  {/* Subtitle / Core Highlight */}
                  <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary-light mb-3">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                    <span>{card.subtitle}</span>
                  </div>

                  {/* Detailed Description */}
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom decorative bar */}
                <div className="mt-5 pt-3 border-t border-zinc-200/60 dark:border-white/5 flex items-center justify-between text-[11px] sm:text-xs text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                  <span className="font-mono uppercase tracking-wider text-[10px]">Production Standard</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary-light" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
