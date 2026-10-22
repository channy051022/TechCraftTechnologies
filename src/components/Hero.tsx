"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

import HeroDashboard from "@/components/HeroDashboard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Ambient Radial Spotlight */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-primary/15 via-violet/10 to-transparent blur-[90px] rounded-full opacity-90 dark:opacity-30" />

        {/* Primary Blue Glow Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[650px] bg-gradient-to-tr from-blue-500/25 via-primary/20 to-sky-400/20 dark:from-primary/20 dark:via-primary/10 dark:to-transparent blur-[130px] rounded-full opacity-80 dark:opacity-50" />

        {/* Violet / Indigo Accent Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/3 w-[650px] h-[550px] bg-gradient-to-bl from-violet/25 via-purple-400/15 to-transparent dark:from-violet/25 dark:via-violet/10 dark:to-transparent blur-[120px] rounded-full opacity-75 dark:opacity-40" />

        {/* Subtle grid pattern visible in both light mode and dark mode */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_35%,transparent_100%)]"
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Trust Badge, Headline, Description, CTAs */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-6 xl:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Trust Indicator */}
            <motion.div variants={item} className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-zinc-200 dark:border-white/5 text-sm font-medium text-zinc-600 dark:text-zinc-300 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary-light animate-pulse" />
                Digital Products • Web Platforms • Software Solutions
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={item} className="mb-6">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08]">
                Build What’s <span className="text-gradient">Next.</span>
              </h1>
            </motion.div>

            {/* Supporting Text */}
            <motion.div variants={item} className="mb-8 max-w-xl">
              <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We design and build digital products that help ambitious businesses move
                faster, work smarter, and grow.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="#contact"
                className="w-full sm:w-auto justify-center group flex items-center gap-2 px-8 py-4 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-semibold text-base hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-zinc-950/10 dark:shadow-none"
              >
                Start a Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#work"
                className="w-full sm:w-auto justify-center group flex items-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/5 text-zinc-900 dark:text-white font-semibold text-base hover:bg-zinc-50 dark:hover:bg-white/10 transition-all"
              >
                Explore Our Work
                <ChevronRight className="w-5 h-5 text-zinc-500 dark:text-zinc-400 group-hover:translate-x-1 group-hover:text-zinc-900 dark:group-hover:text-white transition-all" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Fully Animated SaaS Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-7 w-full flex items-center justify-center lg:justify-end py-6 lg:py-8"
          >
            <HeroDashboard />
          </motion.div>
        </div>
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}
