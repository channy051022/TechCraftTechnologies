"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 md:py-24 overflow-hidden bg-zinc-950 dark:bg-black transition-colors duration-300">
      {/* Dramatic Animated Background (Maintained dark even in light mode) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.45, 0.3],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-gradient-radial from-primary/30 to-transparent blur-[100px] sm:blur-[120px] rounded-full mix-blend-screen gpu-accelerated"
        />
        <motion.div
          animate={{
            scale: [1.15, 1, 1.15],
            opacity: [0.2, 0.35, 0.2],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[700px] sm:h-[1000px] bg-gradient-radial from-violet/20 to-transparent blur-[100px] sm:blur-[120px] rounded-full mix-blend-screen gpu-accelerated"
        />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px", amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6">
            Have an idea worth building?
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-zinc-300 font-light mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's turn it into something people can use, love, and remember.
          </p>

          <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-5 flex-wrap sm:flex-nowrap">
            <a
              href="viber://chat?number=%2B639120509416"
              className="group flex items-center gap-1.5 sm:gap-2 px-5 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full bg-white text-zinc-950 font-semibold text-xs sm:text-base md:text-lg hover:scale-105 active:scale-95 transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] whitespace-nowrap cursor-pointer"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            {/* Hidden for now while Portfolio section is hidden
            <Link
              href="#work"
              className="group flex items-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full bg-white/5 border border-white/20 text-white font-semibold text-xs sm:text-base md:text-lg hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              View Our Work
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-zinc-400 group-hover:translate-x-1 group-hover:text-white transition-all" />
            </Link>
            */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
