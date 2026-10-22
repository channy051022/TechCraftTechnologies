"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "Company One" },
  { name: "Company Two" },
  { name: "Company Three" },
  { name: "Company Four" },
  { name: "Company Five" },
  // Duplicate for seamless infinite scrolling
  { name: "Company One" },
  { name: "Company Two" },
  { name: "Company Three" },
  { name: "Company Four" },
  { name: "Company Five" },
];

export default function LogoCloud() {
  return (
    <section className="py-20 border-y border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-neutral-900/30 overflow-hidden relative transition-colors duration-300">
      <div className="container mx-auto px-6 mb-12">
        <p className="text-center text-xs md:text-sm font-semibold text-zinc-500 dark:text-zinc-400 tracking-wider uppercase">
          Technology built for businesses that want to move forward.
        </p>
      </div>

      <div className="relative flex max-w-[100vw] overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-zinc-50 dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-zinc-50 dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex items-center gap-16 md:gap-24 w-max px-8"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-60 dark:opacity-40 hover:opacity-100 transition-all duration-300 cursor-default group"
            >
              <span className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-white group-hover:text-primary-light transition-colors select-none whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
