"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  TrendingUp,
  Zap,
  Activity,
  ArrowUpRight,
  Shield,
  Layers,
  BarChart3,
  LayoutDashboard,
  Settings,
  Lock,
  Search,
  CheckCircle2,
  RefreshCw,
  Sparkles,
} from "lucide-react";

// Animated counter helper
function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }

    let startTime: number | null = null;
    const duration = 1600; // ms

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutCubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = easeProgress * value;

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, value, shouldReduceMotion]);

  const formatted =
    decimals > 0
      ? displayValue.toFixed(decimals)
      : Math.floor(displayValue).toLocaleString();

  return (
    <span ref={ref} className="font-bold tabular-nums">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export default function HeroDashboard() {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState("overview");
  const [hoveredDataPoint, setHoveredDataPoint] = useState<number | null>(4);

  // Chart data points (X: 0 to 500, Y: 140 to 20 where lower Y is higher metric)
  const chartPoints = [
    { x: 30, y: 110, value: "$84.2K", label: "Mon" },
    { x: 100, y: 85, value: "$102.5K", label: "Tue" },
    { x: 170, y: 95, value: "$96.8K", label: "Wed" },
    { x: 240, y: 60, value: "$124.0K", label: "Thu" },
    { x: 310, y: 40, value: "$148.6K", label: "Fri (Peak)" },
    { x: 380, y: 55, value: "$136.2K", label: "Sat" },
    { x: 450, y: 30, value: "$152.4K", label: "Sun" },
  ];

  // SVG smooth Bezier curve path definition
  const linePath =
    "M 30 110 C 65 110, 65 85, 100 85 C 135 85, 135 95, 170 95 C 205 95, 205 60, 240 60 C 275 60, 275 40, 310 40 C 345 40, 345 55, 380 55 C 415 55, 415 30, 450 30";
  const areaPath = `${linePath} L 450 150 L 30 150 Z`;

  return (
    <div className="relative w-full max-w-2xl mx-auto lg:max-w-none">
      {/* Continuous Smooth Float Wrapper: gentle 7px floating cycle over 6s ease-in-out */}
      <div className="hero-dashboard-floating w-full">
        {/* Reversed 3D Trapezoid Perspective Wrapper */}
        <div className="hero-dashboard-perspective relative w-full transform-gpu">
          {/* Outer Glow Halo matching brand palette */}
          <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 via-violet/25 to-primary-light/30 rounded-[30px] blur-2xl opacity-75 dark:opacity-60 -z-10 pointer-events-none" />


          {/* Main Window Wrapper */}
          <div className="w-full rounded-2xl md:rounded-[22px] bg-[#0c0e17] text-white border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.08)] overflow-hidden">
        {/* Browser Chrome Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#111422] border-b border-white/5 select-none">
          {/* Traffic Light Buttons */}
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 shadow-inner" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 shadow-inner" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 shadow-inner" />
          </div>

          {/* Browser URL bar / App Identity */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#08090f] border border-white/5 text-[11px] text-zinc-400 font-mono tracking-tight max-w-[260px] sm:max-w-xs w-full justify-center">
            <Lock className="w-3 h-3 text-emerald-400" />
            <span className="text-zinc-500">https://</span>
            <span className="text-zinc-200 font-medium">techcrafttechnologies.tech</span>
            <span className="text-zinc-600">/overview</span>
          </div>

          {/* Search Trigger */}
          <div className="hidden sm:flex items-center gap-1 text-[11px] text-zinc-400 font-medium px-2 py-0.5 rounded border border-white/5 bg-white/[0.02]">
            <Search className="w-3 h-3 text-zinc-500" />
            <span className="text-[10px] text-zinc-500">⌘K</span>
          </div>
        </div>

        {/* Dashboard Body (Sidebar + Content) */}
        <div className="flex min-h-[380px] sm:min-h-[440px]">
          {/* Left Mini Sidebar */}
          <div className="w-12 sm:w-14 bg-[#090b12] border-r border-white/5 flex flex-col items-center justify-between py-4 shrink-0">
            {/* Top Brand Mark */}
            <div className="flex flex-col items-center gap-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-violet flex items-center justify-center shadow-md shadow-primary/20">
                <Sparkles className="w-4 h-4 text-white" />
              </div>

              {/* Navigation Items */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setActiveTab("overview")}
                  aria-label="Overview"
                  className={`p-2 rounded-lg transition-all relative ${
                    activeTab === "overview"
                      ? "text-primary-light bg-primary/10"
                      : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  {activeTab === "overview" && (
                    <motion.span
                      layoutId="sidebarActivePill"
                      className="absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-full bg-primary-light"
                    />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("analytics")}
                  aria-label="Analytics"
                  className={`p-2 rounded-lg transition-all relative ${
                    activeTab === "analytics"
                      ? "text-primary-light bg-primary/10"
                      : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                  }`}
                >
                  <BarChart3 className="w-4 h-4" />
                  {activeTab === "analytics" && (
                    <motion.span
                      layoutId="sidebarActivePill"
                      className="absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-full bg-primary-light"
                    />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("projects")}
                  aria-label="Projects"
                  className={`p-2 rounded-lg transition-all relative ${
                    activeTab === "projects"
                      ? "text-primary-light bg-primary/10"
                      : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  {activeTab === "projects" && (
                    <motion.span
                      layoutId="sidebarActivePill"
                      className="absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-full bg-primary-light"
                    />
                  )}
                </button>
              </div>
            </div>

            {/* Bottom Settings & Avatar */}
            <div className="flex flex-col items-center gap-3">
              <button
                aria-label="Settings"
                className="p-2 text-zinc-500 hover:text-zinc-300 rounded-lg hover:bg-white/5 transition-colors"
              >
                <Settings className="w-4 h-4" />
              </button>
              <div className="relative">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-violet to-primary text-[10px] font-bold flex items-center justify-center text-white ring-1 ring-white/20">
                  TC
                </div>
                <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-[#090b12]" />
              </div>
            </div>
          </div>

          {/* Main Dashboard Canvas */}
          <div className="flex-1 p-4 sm:p-5 flex flex-col gap-4 overflow-hidden">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-semibold text-white tracking-tight flex items-center gap-2">
                  System Overview
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                    Live
                  </span>
                </h4>
                <p className="text-[11px] text-zinc-400">
                  Real-time infrastructure & telemetry
                </p>
              </div>

              {/* Time Range Pills */}
              <div className="flex items-center gap-1 bg-[#121624] p-1 rounded-lg border border-white/5 text-[10px] font-medium text-zinc-400">
                <span className="px-2 py-0.5 rounded bg-primary/20 text-primary-light font-semibold shadow-sm">
                  7D
                </span>
                <span className="px-2 py-0.5 hover:text-zinc-200 cursor-pointer transition-colors">
                  30D
                </span>
                <span className="px-2 py-0.5 hover:text-zinc-200 cursor-pointer transition-colors hidden sm:inline">
                  ALL
                </span>
              </div>
            </div>

            {/* 3 Metric Cards Row */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              {/* Card 1: Revenue / Volume */}
              <div className="p-3 rounded-xl bg-[#131626]/80 border border-white/5 flex flex-col justify-between hover:border-primary/30 transition-all group">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-zinc-400 font-medium">
                    Throughput
                  </span>
                  <div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center text-primary-light">
                    <TrendingUp className="w-3 h-3" />
                  </div>
                </div>
                <div className="text-base sm:text-lg font-bold text-white tracking-tight">
                  <AnimatedNumber value={148.6} prefix="$" suffix="k" decimals={1} />
                </div>
                <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-medium mt-1">
                  <ArrowUpRight className="w-3 h-3" />
                  <span>+24.8%</span>
                </div>
              </div>

              {/* Card 2: Active Deployments */}
              <div className="p-3 rounded-xl bg-[#131626]/80 border border-white/5 flex flex-col justify-between hover:border-primary/30 transition-all group">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-zinc-400 font-medium">
                    Requests
                  </span>
                  <div className="w-5 h-5 rounded-md bg-violet/10 flex items-center justify-center text-violet">
                    <Zap className="w-3 h-3" />
                  </div>
                </div>
                <div className="text-base sm:text-lg font-bold text-white tracking-tight">
                  <AnimatedNumber value={1.42} suffix="M" decimals={2} />
                </div>
                <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-medium mt-1">
                  <ArrowUpRight className="w-3 h-3" />
                  <span>+18.4%</span>
                </div>
              </div>

              {/* Card 3: System Uptime */}
              <div className="p-3 rounded-xl bg-[#131626]/80 border border-white/5 flex flex-col justify-between hover:border-primary/30 transition-all group">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-zinc-400 font-medium">
                    Avg Latency
                  </span>
                  <div className="w-5 h-5 rounded-md bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <Activity className="w-3 h-3" />
                  </div>
                </div>
                <div className="text-base sm:text-lg font-bold text-white tracking-tight">
                  <AnimatedNumber value={24} suffix="ms" decimals={0} />
                </div>
                <div className="flex items-center gap-1 text-[10px] text-cyan-400 font-medium mt-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Optimal</span>
                </div>
              </div>
            </div>

            {/* Interactive SVG Line Chart */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-[#131626]/70 border border-white/5 flex flex-col relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-zinc-200">
                    Traffic & API Performance
                  </span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-zinc-400">
                    Peak: $152.4K
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[10px] text-zinc-400">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-primary-light" />
                    Actual
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-0.5 rounded-full bg-zinc-600" />
                    Target
                  </span>
                </div>
              </div>

              {/* SVG Canvas */}
              <div className="relative w-full h-28 sm:h-32">
                <svg
                  viewBox="0 0 480 150"
                  preserveAspectRatio="none"
                  className="w-full h-full overflow-visible"
                >
                  <defs>
                    {/* Linear Gradient for area fill */}
                    <linearGradient
                      id="heroDashboardArea"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#3291ff" stopOpacity="0.35" />
                      <stop offset="50%" stopColor="#7928ca" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="#7928ca" stopOpacity="0.0" />
                    </linearGradient>

                    {/* Gradient for the animated stroke line */}
                    <linearGradient
                      id="heroDashboardStroke"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#3291ff" />
                      <stop offset="60%" stopColor="#0070f3" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Guideline Grids */}
                  <line
                    x1="20"
                    y1="35"
                    x2="460"
                    y2="35"
                    stroke="rgba(255,255,255,0.06)"
                    strokeDasharray="4 4"
                    strokeWidth="1"
                  />
                  <line
                    x1="20"
                    y1="80"
                    x2="460"
                    y2="80"
                    stroke="rgba(255,255,255,0.06)"
                    strokeDasharray="4 4"
                    strokeWidth="1"
                  />
                  <line
                    x1="20"
                    y1="125"
                    x2="460"
                    y2="125"
                    stroke="rgba(255,255,255,0.06)"
                    strokeDasharray="4 4"
                    strokeWidth="1"
                  />

                  {/* Area Fill */}
                  <motion.path
                    d={areaPath}
                    fill="url(#heroDashboardArea)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />

                  {/* Animated Stroke Path */}
                  <motion.path
                    d={linePath}
                    fill="none"
                    stroke="url(#heroDashboardStroke)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 1.6,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Datapoints */}
                  {chartPoints.map((pt, i) => {
                    const isHovered = hoveredDataPoint === i;
                    return (
                      <g
                        key={i}
                        className="cursor-pointer"
                        onMouseEnter={() => setHoveredDataPoint(i)}
                      >
                        {/* Outer pulsing ring on active */}
                        {isHovered && (
                          <motion.circle
                            cx={pt.x}
                            cy={pt.y}
                            r="9"
                            fill="none"
                            stroke="#3291ff"
                            strokeWidth="1.5"
                            initial={{ scale: 0.5, opacity: 1 }}
                            animate={{ scale: 1.4, opacity: 0 }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeOut",
                            }}
                          />
                        )}

                        {/* Interactive Dot */}
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r={isHovered ? "5" : "3.5"}
                          fill={isHovered ? "#3291ff" : "#0c0e17"}
                          stroke={isHovered ? "#ffffff" : "#3291ff"}
                          strokeWidth="2"
                          className="transition-all duration-200"
                        />
                      </g>
                    );
                  })}
                </svg>

                {/* Floating Interactive Tooltip */}
                {hoveredDataPoint !== null && (
                  <motion.div
                    key={hoveredDataPoint}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      left: `${Math.min(
                        Math.max(
                          (chartPoints[hoveredDataPoint].x / 480) * 100,
                          12
                        ),
                        88
                      )}%`,
                      top: `${Math.max(
                        (chartPoints[hoveredDataPoint].y / 150) * 100 - 35,
                        0
                      )}%`,
                    }}
                    className="absolute -translate-x-1/2 -translate-y-full px-2.5 py-1 rounded-md bg-[#090b12] text-white border border-primary/40 shadow-xl pointer-events-none z-20 text-center whitespace-nowrap"
                  >
                    <div className="text-[9px] text-zinc-400 font-medium">
                      {chartPoints[hoveredDataPoint].label}
                    </div>
                    <div className="text-xs font-bold text-primary-light">
                      {chartPoints[hoveredDataPoint].value}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Recent Deployments / Project Status List */}
            <div className="p-3 rounded-xl bg-[#131626]/60 border border-white/5 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-zinc-300">
                  Recent Deployments
                </span>
                <span className="text-[10px] text-primary-light hover:underline cursor-pointer">
                  View All
                </span>
              </div>

              <div className="space-y-1.5">
                {/* Row 1 */}
                <div className="flex items-center justify-between p-2 rounded-lg bg-[#0c0e17]/60 border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <div>
                      <div className="text-xs font-medium text-white leading-tight">
                        Atlas Cloud Operations
                      </div>
                      <div className="text-[10px] text-zinc-400">
                        Production • v2.4.1
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-zinc-400 hidden sm:inline">
                      99.98%
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Live
                    </span>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex items-center justify-between p-2 rounded-lg bg-[#0c0e17]/60 border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-primary-light" />
                    <div>
                      <div className="text-xs font-medium text-white leading-tight">
                        Pulse Real-Time Telemetry
                      </div>
                      <div className="text-[10px] text-zinc-400">
                        Edge Cluster • v3.0.4
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-zinc-400 hidden sm:inline">
                      32ms
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-primary/10 text-primary-light border border-primary/20">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
