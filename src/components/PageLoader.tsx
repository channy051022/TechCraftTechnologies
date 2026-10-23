"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scrolling while loading screen is visible
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Allow the logo animation and loading bar to play smoothly
    const timer = setTimeout(() => {
      document.documentElement.classList.add("page-ready");
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("site-page-ready"));
      }
      setIsLoading(false);
    }, 1300);

    return () => {
      document.body.style.overflow = originalOverflow;
      clearTimeout(timer);
    };
  }, []);

  const handleExitComplete = () => {
    document.body.style.overflow = "";
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("site-loader-complete"));
    }
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#030305] text-white overflow-hidden pointer-events-auto select-none"
          aria-label="Loading website"
          role="status"
        >
          {/* Subtle Dynamic Ambient Lighting */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.25, 0.45, 0.25],
              }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-gradient-radial from-primary/30 via-sky-500/10 to-transparent blur-[110px] rounded-full"
            />
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-15 mix-blend-overlay" />
          </div>

          {/* Central Logo & Loading Animation */}
          <div className="relative z-10 flex flex-col items-center px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-center"
            >
              {/* Soft Pulsing Logo Glow */}
              <motion.div
                animate={{
                  opacity: [0.35, 0.7, 0.35],
                  scale: [0.96, 1.04, 0.96],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-6 bg-primary/25 blur-2xl rounded-full pointer-events-none"
              />

              {/* TechCraft Logo */}
              <Image
                src="/techcraftlogo.png"
                alt="TechCraft Technologies"
                width={260}
                height={116}
                priority
                className="relative z-10 w-52 sm:w-64 md:w-72 h-auto object-contain drop-shadow-[0_0_24px_rgba(56,189,248,0.4)]"
              />
            </motion.div>

            {/* Glowing Linear Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-8 w-44 sm:w-56 h-[3px] bg-white/10 rounded-full overflow-hidden relative shadow-inner"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
                className="h-full bg-gradient-to-r from-primary via-sky-400 to-primary-light rounded-full shadow-[0_0_12px_rgba(56,189,248,0.85)]"
              />
            </motion.div>

            {/* Status indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-3 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-light animate-ping" />
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-400">
                Loading Experience
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
