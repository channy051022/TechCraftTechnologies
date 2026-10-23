"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
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
  Users,
  Globe,
  Terminal,
  Cpu,
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
    const duration = 1400; // ms

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

const tabs = ["overview", "analytics", "projects"] as const;
type Tab = (typeof tabs)[number];

export default function HeroDashboard() {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [hoveredDataPoint, setHoveredDataPoint] = useState<number | null>(4);

  // Auto-switch tabs every 6 seconds, and continue auto-cycling after clicking any nav item
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveTab((current) => {
        const nextIndex = (tabs.indexOf(current) + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 6000);

    return () => clearTimeout(timer);
  }, [activeTab]);

  // Moving line dot tracer and dynamic graph fill from left to right along the curve
  const pathRef = useRef<SVGPathElement>(null);
  const tracerDotRef = useRef<SVGGElement>(null);
  const clipRectRef = useRef<SVGRectElement>(null);
  const tracerBeamRef = useRef<SVGLineElement>(null);
  const tracerBaseDotRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (shouldReduceMotion) return;

    let animId: number;
    let startTime: number | null = null;
    const cycleDuration = 4200; // 4.2s per complete cycle
    const fillDuration = 3600; // 3.6s active fill time from left to right

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const cycleElapsed = elapsed % cycleDuration;
      // Progress from 0 to 1 during fillDuration, then holds at 1 until cycle completes
      const progress = Math.min(cycleElapsed / fillDuration, 1);

      const path = pathRef.current;
      if (path) {
        try {
          const total = path.getTotalLength();
          if (total > 0) {
            const pt = path.getPointAtLength(progress * total);

            // Update moving dot position along the curve
            if (tracerDotRef.current) {
              tracerDotRef.current.setAttribute("transform", `translate(${pt.x}, ${pt.y})`);
            }

            // Update fill clip rectangle so the whole graph fills as the dot moves
            if (clipRectRef.current) {
              clipRectRef.current.setAttribute("width", String(Math.max(pt.x + 2, 30)));
            }

            // Update vertical guide line to baseline (y = 138)
            if (tracerBeamRef.current) {
              tracerBeamRef.current.setAttribute("x1", String(pt.x));
              tracerBeamRef.current.setAttribute("y1", String(pt.y));
              tracerBeamRef.current.setAttribute("x2", String(pt.x));
              tracerBeamRef.current.setAttribute("y2", "138");
            }

            // Update baseline contact dot
            if (tracerBaseDotRef.current) {
              tracerBaseDotRef.current.setAttribute("cx", String(pt.x));
            }
          }
        } catch {
          // Fallback if SVG not yet attached
        }
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [shouldReduceMotion, activeTab]);

  // Stable telemetry data points (X: 30 to 450)
  const chartPoints = [
    { x: 30, y: 112, value: "$84.2K", label: "Mon" },
    { x: 100, y: 86, value: "$102.5K", label: "Tue" },
    { x: 170, y: 96, value: "$96.8K", label: "Wed" },
    { x: 240, y: 58, value: "$124.0K", label: "Thu" },
    { x: 310, y: 38, value: "$148.6K", label: "Fri (Peak)" },
    { x: 380, y: 52, value: "$136.2K", label: "Sat" },
    { x: 450, y: 28, value: "$154.8K", label: "Sun (Live)" },
  ];

  // Construct stable, ultra-smooth Bezier curve path
  const linePath =
    `M ${chartPoints[0].x} ${chartPoints[0].y} ` +
    chartPoints
      .slice(1)
      .map((pt, i) => {
        const prev = chartPoints[i];
        const cp1x = prev.x + (pt.x - prev.x) / 2;
        const cp2x = prev.x + (pt.x - prev.x) / 2;
        return `C ${cp1x} ${prev.y}, ${cp2x} ${pt.y}, ${pt.x} ${pt.y}`;
      })
      .join(" ");

  const areaPath = `${linePath} L 450 150 L 30 150 Z`;

  // Edge clusters for Analytics module
  const edgeNodes = [
    { code: "IAD", region: "US-East (N. Virginia)", latency: 16, health: "100%", color: "from-blue-500 to-cyan-400" },
    { code: "PDX", region: "US-West (Oregon)", latency: 21, health: "100%", color: "from-cyan-400 to-primary" },
    { code: "FRA", region: "EU-Central (Frankfurt)", latency: 25, health: "99.9%", color: "from-primary to-violet" },
    { code: "SIN", region: "AP-Southeast (Singapore)", latency: 32, health: "99.8%", color: "from-violet to-fuchsia-500" },
    { code: "NRT", region: "AP-East (Tokyo)", latency: 36, health: "100%", color: "from-fuchsia-500 to-emerald-400" },
    { code: "GRU", region: "SA-East (São Paulo)", latency: 44, health: "99.6%", color: "from-emerald-400 to-teal-400" },
  ];

  // Projects data for Projects module
  const clientProjects = [
    {
      name: "Atlas Cloud Operations",
      type: "Internal Business Platform",
      stack: "Next.js 16 • PostgreSQL • AWS",
      progress: 94,
      status: "Live v2.4",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      name: "Pulse Telemetry Platform",
      type: "Real-Time Telemetry Engine",
      stack: "Edge Cluster • Redis • WebSockets",
      progress: 88,
      status: "Active Sprint",
      badgeColor: "text-primary-light bg-primary/10 border-primary/20",
    },
    {
      name: "NexaCart High-Concurrency Cart",
      type: "E-Commerce Checkout Layer",
      stack: "TypeScript • Microservices • Stripe",
      progress: 96,
      status: "Verified",
      badgeColor: "text-violet bg-violet/10 border-violet/20",
    },
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto lg:max-w-none">
      {/* Continuous Smooth Float Wrapper: gentle floating cycle */}
      <div className="hero-dashboard-floating w-full">
        {/* Reversed 3D Trapezoid Perspective Wrapper */}
        <div className="hero-dashboard-perspective relative w-full transform-gpu">
          {/* Outer Glow Halo matching brand palette */}
          <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 via-violet/25 to-primary-light/30 rounded-[30px] blur-2xl opacity-75 dark:opacity-60 -z-10 pointer-events-none" />

          {/* Main Window Wrapper */}
          <div className="w-full rounded-2xl md:rounded-[22px] bg-[#0c0e17] text-white border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.08)] overflow-hidden">
            {/* Browser Chrome Header */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-[#111422] border-b border-white/5 select-none gap-2">
              {/* Traffic Light Buttons */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 shadow-inner" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 shadow-inner" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 shadow-inner" />
              </div>

              {/* Dynamic Browser URL bar */}
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 rounded-md bg-[#08090f] border border-white/5 text-[10px] sm:text-[11px] text-zinc-400 font-mono tracking-tight max-w-[200px] xs:max-w-[240px] sm:max-w-xs w-full justify-center overflow-hidden">
                <Lock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400 shrink-0" />
                <span className="text-zinc-500 hidden sm:inline">https://</span>
                <span className="text-zinc-200 font-medium truncate">techcrafttechnologies.tech</span>
                <span className="text-primary-light font-semibold shrink-0">/{activeTab}</span>
              </div>

              {/* Right Spacer (keeps URL bar centered) */}
              <div className="w-8 sm:w-16 hidden xs:block" />
            </div>

            {/* Dashboard Body (Sidebar + Dynamic Canvas) */}
            <div className="flex h-[450px] sm:h-[480px] md:h-[495px]">
              {/* Left Mini Sidebar */}
              <div className="w-10 sm:w-14 bg-[#090b12] border-r border-white/5 flex flex-col items-center justify-between py-3 sm:py-4 shrink-0 h-full">
                {/* Navigation Items (Interactive & Auto-changing) */}
                <div className="flex flex-col items-center gap-2 sm:gap-2.5 pt-1">
                    {/* Tab 1: Overview */}
                    <button
                      onClick={() => setActiveTab("overview")}
                      aria-label="Overview"
                      className={`p-1.5 sm:p-2 rounded-lg transition-all relative group ${
                        activeTab === "overview"
                          ? "text-primary-light bg-primary/10"
                          : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                      }`}
                    >
                      <LayoutDashboard className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      {activeTab === "overview" && (
                        <motion.span
                          layoutId="sidebarActivePill"
                          transition={{ type: "spring", stiffness: 450, damping: 35 }}
                          className="absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-full bg-primary-light"
                        />
                      )}
                    </button>

                    {/* Tab 2: Analytics */}
                    <button
                      onClick={() => setActiveTab("analytics")}
                      aria-label="Analytics"
                      className={`p-1.5 sm:p-2 rounded-lg transition-all relative group ${
                        activeTab === "analytics"
                          ? "text-primary-light bg-primary/10"
                          : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                      }`}
                    >
                      <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      {activeTab === "analytics" && (
                        <motion.span
                          layoutId="sidebarActivePill"
                          transition={{ type: "spring", stiffness: 450, damping: 35 }}
                          className="absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-full bg-primary-light"
                        />
                      )}
                    </button>

                    {/* Tab 3: Projects */}
                    <button
                      onClick={() => setActiveTab("projects")}
                      aria-label="Projects"
                      className={`p-1.5 sm:p-2 rounded-lg transition-all relative group ${
                        activeTab === "projects"
                          ? "text-primary-light bg-primary/10"
                          : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      {activeTab === "projects" && (
                        <motion.span
                          layoutId="sidebarActivePill"
                          transition={{ type: "spring", stiffness: 450, damping: 35 }}
                          className="absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-full bg-primary-light"
                        />
                      )}
                    </button>
                  </div>

                {/* Bottom Settings & Status */}
                <div className="flex flex-col items-center gap-2.5 sm:gap-3">
                  <button
                    aria-label="Settings"
                    className="p-1.5 sm:p-2 text-zinc-500 hover:text-zinc-300 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                  <div className="relative">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-violet to-primary text-[9px] sm:text-[10px] font-bold flex items-center justify-center text-white ring-1 ring-white/20">
                      TC
                    </div>
                    <span className="absolute bottom-0 right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 ring-2 ring-[#090b12]" />
                  </div>
                </div>
              </div>

              {/* Main Dashboard Canvas (Dynamic Content Based on activeTab) */}
              <div className="flex-1 p-2.5 sm:p-4 md:p-5 flex flex-col overflow-hidden h-full">
                <AnimatePresence mode="wait">
                  {/* MODULE 1: SYSTEM OVERVIEW */}
                  {activeTab === "overview" && (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col justify-between h-full overflow-hidden gap-2.5 sm:gap-3"
                    >
                      {/* Top Toolbar */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="overflow-hidden">
                          <h4 className="text-xs sm:text-sm font-semibold text-white tracking-tight flex items-center gap-1.5 sm:gap-2">
                            <span>System Overview</span>
                            <span className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium flex items-center gap-1 shrink-0">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Live Stream
                            </span>
                          </h4>
                          <p className="text-[10px] sm:text-[11px] text-zinc-400 truncate">
                            Real-time infrastructure & API telemetry
                          </p>
                        </div>

                        {/* Time Range Pills */}
                        <div className="flex items-center gap-0.5 sm:gap-1 bg-[#121624] p-0.5 sm:p-1 rounded-lg border border-white/5 text-[9px] sm:text-[10px] font-medium text-zinc-400 shrink-0">
                          <span className="px-1.5 sm:px-2 py-0.5 rounded bg-primary/20 text-primary-light font-semibold shadow-sm">
                            7D
                          </span>
                          <span className="px-1.5 sm:px-2 py-0.5 hover:text-zinc-200 cursor-pointer transition-colors">
                            30D
                          </span>
                          <span className="px-1.5 sm:px-2 py-0.5 hover:text-zinc-200 cursor-pointer transition-colors hidden sm:inline">
                            ALL
                          </span>
                        </div>
                      </div>

                      {/* 3 Metric Cards Row */}
                      <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 md:gap-3">
                        {/* Card 1: Revenue / Volume */}
                        <div className="p-1.5 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-[#131626]/80 border border-white/5 flex flex-col justify-between hover:border-primary/30 transition-all group overflow-hidden">
                          <div className="flex items-center justify-between mb-0.5 sm:mb-1">
                            <span className="text-[9px] sm:text-[10px] text-zinc-400 font-medium truncate">Throughput</span>
                            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-primary/10 flex items-center justify-center text-primary-light shrink-0">
                              <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            </div>
                          </div>
                          <div className="text-xs sm:text-base md:text-lg font-bold text-white tracking-tight">
                            <AnimatedNumber value={148.6} prefix="$" suffix="k" decimals={1} />
                          </div>
                          <div className="flex items-center gap-0.5 sm:gap-1 text-[8px] sm:text-[10px] text-emerald-400 font-medium mt-0.5">
                            <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
                            <span>+24.8%</span>
                          </div>
                        </div>

                        {/* Card 2: Active Deployments */}
                        <div className="p-1.5 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-[#131626]/80 border border-white/5 flex flex-col justify-between hover:border-primary/30 transition-all group overflow-hidden">
                          <div className="flex items-center justify-between mb-0.5 sm:mb-1">
                            <span className="text-[9px] sm:text-[10px] text-zinc-400 font-medium truncate">Requests</span>
                            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-violet/10 flex items-center justify-center text-violet shrink-0">
                              <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            </div>
                          </div>
                          <div className="text-xs sm:text-base md:text-lg font-bold text-white tracking-tight">
                            <AnimatedNumber value={1.42} suffix="M" decimals={2} />
                          </div>
                          <div className="flex items-center gap-0.5 sm:gap-1 text-[8px] sm:text-[10px] text-emerald-400 font-medium mt-0.5">
                            <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
                            <span>+18.4%</span>
                          </div>
                        </div>

                        {/* Card 3: System Uptime */}
                        <div className="p-1.5 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-[#131626]/80 border border-white/5 flex flex-col justify-between hover:border-primary/30 transition-all group overflow-hidden">
                          <div className="flex items-center justify-between mb-0.5 sm:mb-1">
                            <span className="text-[9px] sm:text-[10px] text-zinc-400 font-medium truncate">Latency</span>
                            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                              <Activity className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            </div>
                          </div>
                          <div className="text-xs sm:text-base md:text-lg font-bold text-white tracking-tight">
                            <AnimatedNumber value={24} suffix="ms" decimals={0} />
                          </div>
                          <div className="flex items-center gap-0.5 sm:gap-1 text-[8px] sm:text-[10px] text-cyan-400 font-medium mt-0.5">
                            <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
                            <span>Optimal</span>
                          </div>
                        </div>
                      </div>

                      {/* Interactive SVG Live Moving Line Chart */}
                      <div className="p-2 sm:p-3 sm:p-3.5 rounded-lg sm:rounded-xl bg-[#131626]/70 border border-white/5 flex flex-col relative overflow-hidden">
                        <div className="flex items-center justify-between mb-1.5 sm:mb-2 gap-1">
                          <div className="flex items-center gap-1.5 sm:gap-2 overflow-hidden">
                            <span className="text-[10px] sm:text-[11px] font-semibold text-zinc-200 truncate">
                              Traffic & API
                            </span>
                            <span className="text-[8px] sm:text-[9px] px-1 sm:px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono flex items-center gap-1 shrink-0">
                              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Peak $154.8K
                            </span>
                          </div>
                          <div className="flex items-center gap-2 sm:gap-3 text-[9px] sm:text-[10px] text-zinc-400 shrink-0">
                            <span className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary-light" />
                              Live Feed
                            </span>
                            <span className="flex items-center gap-1 hidden sm:flex">
                              <span className="w-2 h-0.5 rounded-full bg-zinc-600" />
                              Target
                            </span>
                          </div>
                        </div>

                        {/* SVG Canvas with Live Morphing Wave */}
                        <div className="relative w-full h-20 sm:h-24 md:h-28">
                          <svg
                            viewBox="0 0 480 150"
                            preserveAspectRatio="none"
                            className="w-full h-full overflow-visible"
                          >
                            <defs>
                              <linearGradient id="heroDashboardArea" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#3291ff" stopOpacity="0.45" />
                                <stop offset="60%" stopColor="#7928ca" stopOpacity="0.18" />
                                <stop offset="100%" stopColor="#7928ca" stopOpacity="0.0" />
                              </linearGradient>

                              <linearGradient id="heroDashboardStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3291ff" />
                                <stop offset="45%" stopColor="#00d8ff" />
                                <stop offset="75%" stopColor="#0070f3" />
                                <stop offset="100%" stopColor="#a855f7" />
                              </linearGradient>

                              {/* Dynamic clipPath: expands progressively from left to right with the moving dot */}
                              <clipPath id="graphFillClip">
                                <rect ref={clipRectRef} x="0" y="0" width="30" height="150" />
                              </clipPath>
                            </defs>

                            {/* Guideline Grids */}
                            <line x1="20" y1="35" x2="460" y2="35" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" strokeWidth="1" />
                            <line x1="20" y1="80" x2="460" y2="80" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" strokeWidth="1" />
                            <line x1="20" y1="125" x2="460" y2="125" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" strokeWidth="1" />

                            {/* Faint track showing upcoming path ahead of the filling graph */}
                            <path
                              d={linePath}
                              fill="none"
                              stroke="rgba(255, 255, 255, 0.08)"
                              strokeWidth="1.5"
                              strokeDasharray="3 3"
                            />

                            {/* Hidden measurement path for getPointAtLength */}
                            <path
                              ref={pathRef}
                              d={linePath}
                              fill="none"
                              stroke="transparent"
                              strokeWidth="1"
                            />

                            {/* Faint socket dots ahead of the moving dot */}
                            {chartPoints.map((pt, i) => (
                              <circle
                                key={`socket-${i}`}
                                cx={pt.x}
                                cy={pt.y}
                                r="2.5"
                                fill="none"
                                stroke="rgba(255, 255, 255, 0.12)"
                                strokeWidth="1"
                              />
                            ))}

                            {/* ========================================================== */}
                            {/* THE DYNAMICALLY FILLED GRAPH (Fills in as the dot moves)   */}
                            {/* ========================================================== */}
                            <g clipPath="url(#graphFillClip)">
                              {/* Vertical Stems from Bottom Baseline to Data Points */}
                              {chartPoints.map((pt, i) => (
                                <line
                                  key={`stem-${i}`}
                                  x1={pt.x}
                                  y1="138"
                                  x2={pt.x}
                                  y2={pt.y}
                                  stroke="rgba(50, 145, 255, 0.2)"
                                  strokeDasharray="2 3"
                                  strokeWidth="1"
                                />
                              ))}

                              {/* Gradient Area Fill (Fills dynamically with the dot) */}
                              <path
                                d={areaPath}
                                fill="url(#heroDashboardArea)"
                              />

                              {/* Vibrant Color Stroke Line */}
                              <path
                                d={linePath}
                                fill="none"
                                stroke="url(#heroDashboardStroke)"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />

                              {/* Glowing Cyan Highlight Line */}
                              <path
                                d={linePath}
                                fill="none"
                                stroke="#00d8ff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{
                                  filter: "drop-shadow(0 0 6px rgba(0, 216, 255, 0.9))",
                                }}
                              />

                              {/* Filled & Active Data Points on the Curve */}
                              {chartPoints.map((pt, i) => {
                                const isHovered = hoveredDataPoint === i;
                                return (
                                  <g
                                    key={i}
                                    className="cursor-pointer"
                                    onMouseEnter={() => setHoveredDataPoint(i)}
                                  >
                                    <circle
                                      cx={pt.x}
                                      cy={pt.y}
                                      r={isHovered ? "4.5" : "3"}
                                      fill={isHovered ? "#00d8ff" : "#0c0e17"}
                                      stroke={isHovered ? "#ffffff" : "#3291ff"}
                                      strokeWidth="1.5"
                                      className="transition-all duration-200"
                                    />
                                  </g>
                                );
                              })}
                            </g>

                            {/* Vertical guide beam from moving dot to baseline (moves with the dot) */}
                            <line
                              ref={tracerBeamRef}
                              x1="30"
                              y1="112"
                              x2="30"
                              y2="138"
                              stroke="rgba(0, 216, 255, 0.45)"
                              strokeDasharray="2 2"
                              strokeWidth="1"
                            />

                            {/* Baseline contact dot (moves with the dot) */}
                            <circle
                              ref={tracerBaseDotRef}
                              cx="30"
                              cy="138"
                              r="2.5"
                              fill="#00d8ff"
                              opacity="0.8"
                            />

                            {/* THE MOVING LINE DOT: Leads the graph fill from Left to Right */}
                            <g ref={tracerDotRef} transform={`translate(${chartPoints[0].x}, ${chartPoints[0].y})`}>
                              {/* Soft Radial Glow */}
                              <circle
                                r="5.5"
                                fill="#00d8ff"
                                opacity="0.35"
                              />

                              {/* Bright White/Cyan Core Dot */}
                              <circle
                                r="4"
                                fill="#ffffff"
                                stroke="#00d8ff"
                                strokeWidth="2"
                                style={{
                                  filter: "drop-shadow(0 0 5px #00d8ff)",
                                }}
                              />
                            </g>
                          </svg>

                          {/* Hover Tooltip */}
                          {hoveredDataPoint !== null && (
                            <div
                              style={{
                                left: `${Math.min(
                                  Math.max((chartPoints[hoveredDataPoint].x / 480) * 100, 12),
                                  88
                                )}%`,
                                top: `${Math.max(
                                  (chartPoints[hoveredDataPoint].y / 150) * 100 - 32,
                                  0
                                )}%`,
                              }}
                              className="absolute -translate-x-1/2 -translate-y-full px-2 py-0.5 rounded-md bg-[#090b12] text-white border border-primary/40 shadow-xl pointer-events-none z-20 text-center whitespace-nowrap text-[9px]"
                            >
                              <span className="text-zinc-400 font-medium mr-1.5">
                                {chartPoints[hoveredDataPoint].label}:
                              </span>
                              <span className="font-bold text-primary-light">
                                {chartPoints[hoveredDataPoint].value}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Recent Deployments List */}
                      <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-[#131626]/60 border border-white/5 flex flex-col gap-1.5 overflow-hidden">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="text-[10px] sm:text-[11px] font-semibold text-zinc-300">
                            Recent Deployments
                          </span>
                          <span className="text-[8px] sm:text-[9px] text-primary-light font-mono">
                            Auto-sync Active
                          </span>
                        </div>

                        <div className="space-y-1 sm:space-y-1.5">
                          <div className="flex items-center justify-between p-1.5 sm:p-2 rounded-lg bg-[#0c0e17]/60 border border-white/5">
                            <div className="flex items-center gap-1.5 sm:gap-2 overflow-hidden">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                              <div className="overflow-hidden">
                                <div className="text-[11px] sm:text-xs font-medium text-white leading-tight truncate">
                                  Atlas Cloud Operations
                                </div>
                                <div className="text-[8px] sm:text-[9px] text-zinc-400 truncate">
                                  Production • v2.4.1
                                </div>
                              </div>
                            </div>
                            <span className="text-[8px] sm:text-[9px] px-1.5 sm:px-2 py-0.5 rounded-full font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                              Live
                            </span>
                          </div>

                          <div className="flex items-center justify-between p-1.5 sm:p-2 rounded-lg bg-[#0c0e17]/60 border border-white/5">
                            <div className="flex items-center gap-1.5 sm:gap-2 overflow-hidden">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary-light shrink-0" />
                              <div className="overflow-hidden">
                                <div className="text-[11px] sm:text-xs font-medium text-white leading-tight truncate">
                                  Pulse Telemetry Engine
                                </div>
                                <div className="text-[8px] sm:text-[9px] text-zinc-400 truncate">
                                  Edge Cluster • 24ms
                                </div>
                              </div>
                            </div>
                            <span className="text-[8px] sm:text-[9px] px-1.5 sm:px-2 py-0.5 rounded-full font-medium bg-primary/10 text-primary-light border border-primary/20 shrink-0">
                              Active
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* MODULE 2: ANALYTICS & EDGE TELEMETRY */}
                  {activeTab === "analytics" && (
                    <motion.div
                      key="analytics"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col justify-between h-full overflow-hidden gap-2.5 sm:gap-3"
                    >
                      {/* Top Toolbar */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="overflow-hidden">
                          <h4 className="text-xs sm:text-sm font-semibold text-white tracking-tight flex items-center gap-1.5 sm:gap-2">
                            <span>Global Edge Telemetry</span>
                            <span className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium flex items-center gap-1 shrink-0">
                              <Globe className="w-2.5 h-2.5" />
                              6 Regions
                            </span>
                          </h4>
                          <p className="text-[10px] sm:text-[11px] text-zinc-400 truncate">
                            Distributed edge cluster response latency
                          </p>
                        </div>

                        <div className="flex items-center gap-0.5 sm:gap-1 bg-[#121624] p-0.5 sm:p-1 rounded-lg border border-white/5 text-[9px] sm:text-[10px] font-medium text-zinc-400 shrink-0">
                          <span className="px-1.5 sm:px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-semibold shadow-sm">
                            Realtime
                          </span>
                          <span className="px-1.5 sm:px-2 py-0.5 hover:text-zinc-200 cursor-pointer transition-colors">
                            24h
                          </span>
                        </div>
                      </div>

                      {/* 3 Analytics Metrics */}
                      <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 md:gap-3">
                        <div className="p-1.5 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-[#131626]/80 border border-white/5 flex flex-col justify-between overflow-hidden">
                          <span className="text-[9px] sm:text-[10px] text-zinc-400 font-medium truncate">Active Users</span>
                          <div className="text-xs sm:text-base md:text-lg font-bold text-white tracking-tight">
                            <AnimatedNumber value={8420} decimals={0} />
                          </div>
                          <div className="text-[8px] sm:text-[10px] text-emerald-400 font-medium flex items-center gap-0.5 sm:gap-1 mt-0.5 truncate">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                            <span>+312/min</span>
                          </div>
                        </div>

                        <div className="p-1.5 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-[#131626]/80 border border-white/5 flex flex-col justify-between overflow-hidden">
                          <span className="text-[9px] sm:text-[10px] text-zinc-400 font-medium truncate">Cache Hits</span>
                          <div className="text-xs sm:text-base md:text-lg font-bold text-white tracking-tight">
                            <AnimatedNumber value={99.4} suffix="%" decimals={1} />
                          </div>
                          <div className="text-[8px] sm:text-[10px] text-cyan-400 font-medium mt-0.5 truncate">
                            Edge Tier 1
                          </div>
                        </div>

                        <div className="p-1.5 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-[#131626]/80 border border-white/5 flex flex-col justify-between overflow-hidden">
                          <span className="text-[9px] sm:text-[10px] text-zinc-400 font-medium truncate">Error Rate</span>
                          <div className="text-xs sm:text-base md:text-lg font-bold text-white tracking-tight">
                            0.002%
                          </div>
                          <div className="text-[8px] sm:text-[10px] text-emerald-400 font-medium mt-0.5 truncate">
                            Zero Critical
                          </div>
                        </div>
                      </div>

                      {/* Regional Edge Latency Spectrum (Animated Live Bars) */}
                      <div className="p-2 sm:p-3 sm:p-3.5 rounded-lg sm:rounded-xl bg-[#131626]/70 border border-white/5 flex flex-col">
                        <div className="flex items-center justify-between mb-1.5 sm:mb-2.5">
                          <span className="text-[10px] sm:text-[11px] font-semibold text-zinc-200">
                            Cluster Latency
                          </span>
                          <span className="text-[8px] sm:text-[9px] font-mono text-zinc-400">
                            Avg 27ms
                          </span>
                        </div>

                        {/* Animated Region Bars Grid */}
                        <div className="grid grid-cols-6 gap-1 sm:gap-2 items-end h-20 sm:h-24 pt-1 sm:pt-2 border-b border-white/5 pb-1.5 sm:pb-2">
                          {edgeNodes.map((node, idx) => {
                            const barHeight = Math.max(30, Math.min(95, 100 - node.latency * 1.6));
                            return (
                              <div key={node.code} className="flex flex-col items-center gap-1 sm:gap-1.5 h-full justify-end group">
                                <span className="text-[8px] sm:text-[9px] font-mono text-zinc-400 group-hover:text-cyan-300 transition-colors">
                                  {node.latency}ms
                                </span>
                                <div className="w-full max-w-[24px] sm:max-w-[28px] bg-white/5 rounded-t-md overflow-hidden h-14 sm:h-16 flex items-end">
                                  <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: `${barHeight}%` }}
                                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                                    className={`w-full rounded-t-md bg-gradient-to-t ${node.color} opacity-85 group-hover:opacity-100 transition-opacity`}
                                  />
                                </div>
                                <span className="text-[8px] sm:text-[9px] font-bold font-mono text-zinc-300">
                                  {node.code}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Live Event Stream Log */}
                      <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-[#131626]/60 border border-white/5 flex flex-col gap-1 sm:gap-1.5 font-mono text-[9px] sm:text-[10px]">
                        <div className="flex items-center justify-between text-zinc-400 text-[8px] sm:text-[10px] font-medium pb-1 border-b border-white/5">
                          <span className="flex items-center gap-1 sm:gap-1.5">
                            <Terminal className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-cyan-400" />
                            Live Edge Event Stream
                          </span>
                          <span className="text-emerald-400">Connected</span>
                        </div>
                        <div className="space-y-0.5 sm:space-y-1 text-zinc-300">
                          <div className="flex items-center justify-between">
                            <span className="text-zinc-400 truncate">GET /api/v2/telemetry</span>
                            <span className="text-emerald-400 font-semibold shrink-0 ml-1">200 OK • 14ms</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-zinc-400 truncate">POST /checkout/session</span>
                            <span className="text-cyan-400 font-semibold shrink-0 ml-1">201 Created • 28ms</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* MODULE 3: CLIENT PROJECTS & SPRINT MATRIX */}
                  {activeTab === "projects" && (
                    <motion.div
                      key="projects"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col justify-between h-full overflow-hidden gap-2.5 sm:gap-3"
                    >
                      {/* Top Toolbar */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="overflow-hidden">
                          <h4 className="text-xs sm:text-sm font-semibold text-white tracking-tight flex items-center gap-1.5 sm:gap-2">
                            <span>Client Project Pipelines</span>
                            <span className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full bg-violet/10 text-violet border border-violet/20 font-medium flex items-center gap-1 shrink-0">
                              <Cpu className="w-2.5 h-2.5" />
                              Sprint 14
                            </span>
                          </h4>
                          <p className="text-[10px] sm:text-[11px] text-zinc-400 truncate">
                            Build pipelines, velocity & active deployments
                          </p>
                        </div>

                        <div className="flex items-center gap-0.5 sm:gap-1 bg-[#121624] p-0.5 sm:p-1 rounded-lg border border-white/5 text-[9px] sm:text-[10px] font-medium text-zinc-400 shrink-0">
                          <span className="px-1.5 sm:px-2 py-0.5 rounded bg-violet/20 text-violet font-semibold shadow-sm">
                            3 Active
                          </span>
                        </div>
                      </div>

                      {/* 3 Project Velocity Metrics */}
                      <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 md:gap-3">
                        <div className="p-1.5 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-[#131626]/80 border border-white/5 flex flex-col justify-between overflow-hidden">
                          <span className="text-[9px] sm:text-[10px] text-zinc-400 font-medium truncate">Velocity</span>
                          <div className="text-xs sm:text-base md:text-lg font-bold text-white tracking-tight">
                            <AnimatedNumber value={98.6} suffix="%" decimals={1} />
                          </div>
                          <div className="text-[8px] sm:text-[10px] text-emerald-400 font-medium mt-0.5 truncate">
                            On Schedule
                          </div>
                        </div>

                        <div className="p-1.5 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-[#131626]/80 border border-white/5 flex flex-col justify-between overflow-hidden">
                          <span className="text-[9px] sm:text-[10px] text-zinc-400 font-medium truncate">Coverage</span>
                          <div className="text-xs sm:text-base md:text-lg font-bold text-white tracking-tight">
                            <AnimatedNumber value={100} suffix="%" decimals={0} />
                          </div>
                          <div className="text-[8px] sm:text-[10px] text-primary-light font-medium mt-0.5 truncate">
                            2,410 Passed
                          </div>
                        </div>

                        <div className="p-1.5 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-[#131626]/80 border border-white/5 flex flex-col justify-between overflow-hidden">
                          <span className="text-[9px] sm:text-[10px] text-zinc-400 font-medium truncate">Deploys</span>
                          <div className="text-xs sm:text-base md:text-lg font-bold text-white tracking-tight">
                            28 / 28
                          </div>
                          <div className="text-[8px] sm:text-[10px] text-violet font-medium mt-0.5 truncate">
                            Zero Downtime
                          </div>
                        </div>
                      </div>

                      {/* Project Pipeline List with Progress Bars */}
                      <div className="space-y-1.5 flex-1 flex flex-col justify-center">
                        {clientProjects.map((project, idx) => (
                          <div
                            key={project.name}
                            className="p-1.5 sm:p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-[#131626]/70 border border-white/5 hover:border-white/10 transition-colors flex flex-col gap-1 sm:gap-1.5"
                          >
                            <div className="flex items-center justify-between gap-1">
                              <div className="overflow-hidden">
                                <div className="text-[11px] sm:text-xs font-semibold text-white tracking-tight truncate">
                                  {project.name}
                                </div>
                                <div className="text-[8px] sm:text-[9px] text-zinc-400 truncate max-w-[150px] xs:max-w-[200px] sm:max-w-none">
                                  {project.stack}
                                </div>
                              </div>
                              <span
                                className={`text-[8px] sm:text-[9px] px-1.5 sm:px-2 py-0.5 rounded-full font-medium border shrink-0 ${project.badgeColor}`}
                              >
                                {project.status}
                              </span>
                            </div>

                            {/* Animated Progress Bar */}
                            <div className="space-y-0.5 sm:space-y-1">
                              <div className="flex items-center justify-between text-[8px] sm:text-[9px] font-mono text-zinc-400">
                                <span>Build Progress</span>
                                <span className="text-zinc-200 font-bold">{project.progress}%</span>
                              </div>
                              <div className="w-full h-1 sm:h-1.5 rounded-full bg-white/5 overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${project.progress}%` }}
                                  transition={{ duration: 0.9, delay: idx * 0.15 }}
                                  className="h-full rounded-full bg-gradient-to-r from-primary to-violet"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
