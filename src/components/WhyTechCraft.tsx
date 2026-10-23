"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Activity,
  Compass,
  Layers,
  Users,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: Compass,
    color: "text-sky-400 bg-sky-400/10 border-sky-400/20",
    title: "Strategy First",
    description: "We understand the core business problem before writing a single line of code.",
  },
  {
    icon: Layers,
    color: "text-violet-400 bg-violet-400/10 border-violet-400/20",
    title: "Built to Scale",
    description: "Modern cloud architecture designed to effortlessly scale with your user and data growth.",
  },
  {
    icon: Users,
    color: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    title: "User Focused",
    description: "Every user experience is crafted to feel natural, intuitive, and delightful to interact with.",
  },
  {
    icon: Sparkles,
    color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    title: "Long-Term Thinking",
    description: "We engineer sustainable technology that stays maintainable, secure, and valuable for years.",
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
              className="mb-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs font-semibold tracking-wider text-zinc-600 dark:text-zinc-400 uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-light animate-pulse" />
                Engineering Philosophy
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-5">
                We don't just build software. <br />
                <span className="text-gradient">We build outcomes.</span>
              </h2>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                Code is the tool; business transformation is the result. Here is how we ensure every product delivers measurable real-world return.
              </p>
            </motion.div>

            {/* Elevated Feature Cards */}
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group p-4 sm:p-5 rounded-2xl bg-zinc-50/60 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/5 hover:border-primary/40 dark:hover:border-primary/40 hover:bg-zinc-100/80 dark:hover:bg-white/[0.06] transition-all duration-300 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-2.5 rounded-xl border shrink-0 transition-transform duration-300 group-hover:scale-110 ${feature.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-foreground mb-1 group-hover:text-primary-light transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Visual Right: Live Outcomes Engine & Real-Time Performance Dashboard (7 Cols) */}
          <div className="lg:col-span-7 relative">
            {/* Ambient Background Light Orbs */}
            <div className="absolute -top-12 -right-12 w-80 h-80 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-violet/20 blur-[110px] rounded-full pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl bg-zinc-950 dark:bg-[#070913] border border-zinc-800 dark:border-white/10 p-5 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              {/* Subtle Noise Texture */}
              <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay" />

              {/* Window Header */}
              <div className="relative z-10 flex items-center justify-between pb-5 border-b border-zinc-800 dark:border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="ml-2 font-mono text-[11px] text-zinc-400 tracking-wider uppercase font-semibold">
                    TechCraft Engine • Outcomes Matrix
                  </span>
                </div>
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Metrics
                </div>
              </div>

              {/* KPI Metrics Highlight Grid */}
              <div className="relative z-10 grid grid-cols-2 gap-3.5 sm:gap-4 mb-6">
                {/* Metric 1 */}
                <div className="p-4 sm:p-4.5 rounded-2xl bg-zinc-900/80 dark:bg-white/[0.03] border border-zinc-800 dark:border-white/5 relative overflow-hidden group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-zinc-400">Revenue Velocity</span>
                    <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-mono">
                      +340%
                    </span>
                    <span className="text-xs font-semibold text-emerald-400 flex items-center">
                      ↑ 2.4x Target
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-500 mt-1">Growth output measured across deployments</p>
                  <div className="mt-3 h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: "88%" }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-sky-400 to-primary-light rounded-full"
                    />
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="p-4 sm:p-4.5 rounded-2xl bg-zinc-900/80 dark:bg-white/[0.03] border border-zinc-800 dark:border-white/5 relative overflow-hidden group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-zinc-400">Core Uptime SLA</span>
                    <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-mono">
                      99.98%
                    </span>
                    <span className="text-xs font-semibold text-sky-400">
                      &lt; 65ms
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-500 mt-1">Zero critical outage tolerance guaranteed</p>
                  <div className="mt-3 h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: "99.9%" }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Main Animated Analytics Graph Card */}
              <div className="relative z-10 p-5 rounded-2xl bg-zinc-900/90 dark:bg-white/[0.02] border border-zinc-800 dark:border-white/5 overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h5 className="text-sm font-semibold text-white">Cumulative Business Impact</h5>
                    <p className="text-xs text-zinc-400 mt-0.5">Real-time throughput & system capacity</p>
                  </div>
                  <div className="flex items-center gap-1.5 p-1 rounded-lg bg-zinc-800/80 dark:bg-white/5 text-[11px] text-zinc-400">
                    <span className="px-2 py-0.5 rounded bg-white/10 text-white font-medium">Live</span>
                    <span className="px-2 py-0.5 text-zinc-500">7D</span>
                    <span className="px-2 py-0.5 text-zinc-500">30D</span>
                  </div>
                </div>

                {/* SVG Spline Chart with Peak Hotspot Badge */}
                <div className="relative h-44 sm:h-48 w-full mt-2">
                  <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 150">
                    <defs>
                      <linearGradient id="outcomeGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
                        <stop offset="70%" stopColor="#818cf8" stopOpacity="0.08" />
                        <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="50%" stopColor="#60a5fa" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>

                    {/* Dotted Grid Lines */}
                    <line x1="0" y1="35" x2="400" y2="35" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                    <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                    <line x1="0" y1="125" x2="400" y2="125" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />

                    {/* Gradient Area Fill Under Line */}
                    <motion.path
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1.4, delay: 0.3 }}
                      d="M 0 130 Q 70 120 130 95 T 240 60 T 320 25 T 400 15 L 400 150 L 0 150 Z"
                      fill="url(#outcomeGradient)"
                    />

                    {/* Glowing Stroke Curve */}
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                      d="M 0 130 Q 70 120 130 95 T 240 60 T 320 25 T 400 15"
                      fill="none"
                      stroke="url(#strokeGradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    {/* Pulsing Coordinates Pin */}
                    <circle cx="320" cy="25" r="4.5" fill="#38bdf8" className="animate-pulse" />
                    <circle cx="320" cy="25" r="10" stroke="#38bdf8" strokeWidth="1" opacity="0.4" className="animate-ping" />
                  </svg>

                  {/* Floating Peak Tooltip Popover */}
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="absolute top-2 right-12 sm:right-16 px-3 py-1.5 rounded-xl bg-zinc-900/95 border border-sky-400/30 text-white shadow-xl backdrop-blur-md"
                  >
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-sky-400 font-semibold uppercase">
                      <Sparkles className="w-3 h-3 text-sky-400" />
                      Peak Velocity
                    </div>
                    <div className="text-xs font-bold font-mono text-white mt-0.5">
                      $412.8K Run-Rate
                    </div>
                  </motion.div>
                </div>

                {/* Bottom Stats Footer */}
                <div className="mt-4 pt-3.5 border-t border-zinc-800 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>0.00% Critical Defects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-sky-400" />
                    <span>Continuous Automated CI/CD</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-zinc-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>v3.8 Production Ready</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Overlapping Floating Micro-Badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:flex absolute -top-5 -right-5 z-30 items-center gap-3 p-3 rounded-2xl bg-zinc-900/90 dark:bg-[#0c0d18]/90 border border-emerald-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            >
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Sprint 14 Deployed</p>
                <p className="text-[10px] text-zinc-400">Zero-downtime roll-out</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:flex absolute -bottom-5 -left-5 z-30 items-center gap-3 p-3 rounded-2xl bg-zinc-900/90 dark:bg-[#0c0d18]/90 border border-sky-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            >
              <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Edge Scale Optimized</p>
                <p className="text-[10px] text-zinc-400">&lt;65ms worldwide delivery</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

