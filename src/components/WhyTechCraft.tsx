"use client";

import { motion } from "framer-motion";
import { Compass, Layers, Users, Sparkles } from "lucide-react";

const cards = [
  {
    number: "01",
    title: "Strategy First",
    description:
      "We understand the core business problem before writing a single line of code.",
    icon: Compass,
    accent: "from-sky-500/15 via-transparent to-transparent",
    border: "hover:border-sky-500/40 dark:hover:border-sky-500/40",
    badge: "text-sky-400 bg-sky-400/10 border-sky-400/20",
    glow: "bg-sky-500/10",
  },
  {
    number: "02",
    title: "Built to Scale",
    description:
      "Modern cloud architecture designed to effortlessly scale with your user and data growth.",
    icon: Layers,
    accent: "from-violet-500/15 via-transparent to-transparent",
    border: "hover:border-violet-500/40 dark:hover:border-violet-500/40",
    badge: "text-violet-400 bg-violet-400/10 border-violet-400/20",
    glow: "bg-violet-500/10",
  },
  {
    number: "03",
    title: "User Focused",
    description:
      "Every user experience is crafted to feel natural, intuitive, and delightful to interact with.",
    icon: Users,
    accent: "from-blue-500/15 via-transparent to-transparent",
    border: "hover:border-blue-500/40 dark:hover:border-blue-500/40",
    badge: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    glow: "bg-blue-500/10",
  },
  {
    number: "04",
    title: "Long-Term Thinking",
    description:
      "We engineer sustainable technology that stays maintainable, secure, and valuable for years.",
    icon: Sparkles,
    accent: "from-emerald-500/15 via-transparent to-transparent",
    border: "hover:border-emerald-500/40 dark:hover:border-emerald-500/40",
    badge: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    glow: "bg-emerald-500/10",
  },
];

export default function WhyTechCraft() {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-background transition-colors duration-300">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-primary/5 dark:bg-primary/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-violet/5 dark:bg-violet/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Content Left (5 Cols) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-[11px] sm:text-xs font-semibold tracking-wider text-zinc-600 dark:text-zinc-400 uppercase mb-4 sm:mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-light animate-pulse" />
                Engineering Philosophy
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight sm:leading-[1.14] mb-4 sm:mb-6">
                We don't just build software. <br />
                <span className="text-gradient">We build outcomes.</span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light mb-6 sm:mb-8">
                Code is the tool; business transformation is the result. We partner with ambitious teams to engineer digital platforms designed for tangible, real-world impact.
              </p>

              {/* Quality Standards Bar */}
              <div className="pt-5 sm:pt-6 border-t border-zinc-200 dark:border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="font-medium text-foreground">Zero Legacy Debt</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-light" />
                  <span className="font-medium text-foreground">Production-Ready Architecture</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Cards Grid Right (7 Cols - Replaces the Mockup) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {cards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`group relative p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-zinc-50/80 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/10 ${card.border} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden flex flex-col justify-between`}
                  >
                    {/* Subtle ambient hover glow */}
                    <div
                      className={`absolute -top-12 -right-12 w-32 h-32 ${card.glow} blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                    />

                    <div>
                      {/* Top Row: Icon + Step Counter */}
                      <div className="flex items-center justify-between mb-4 sm:mb-5">
                        <div
                          className={`p-2 sm:p-2.5 rounded-xl sm:rounded-2xl border ${card.badge} transition-transform duration-300 group-hover:scale-110`}
                        >
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <span className="font-mono text-[11px] sm:text-xs font-semibold text-zinc-400 dark:text-zinc-500">
                          {card.number}
                        </span>
                      </div>

                      {/* Card Title */}
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 sm:mb-2.5 tracking-tight group-hover:text-primary-light transition-colors">
                        {card.title}
                      </h3>

                      {/* Card Description */}
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
