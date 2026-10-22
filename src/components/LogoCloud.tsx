"use client";

import { motion } from "framer-motion";

const clientLogos = [
  {
    name: "BloomWell Healthcare",
    src: "/client logos/BloomWell Healthcare Logo.png",
    alt: "BloomWell Healthcare client logo",
  },
  {
    name: "IronPeak Construction",
    src: "/client logos/IronPeak Construction Logo.png",
    alt: "IronPeak Construction client logo",
  },
  {
    name: "NexaMart Fast Cart",
    src: "/client logos/NexaMart Fast Cart Logo.png",
    alt: "NexaMart Fast Cart client logo",
  },
  {
    name: "Velora Boutique Hotel",
    src: "/client logos/Velora Boutique Hotel Logo.png",
    alt: "Velora Boutique Hotel client logo",
  },
];

// Duplicate logos for seamless infinite horizontal scrolling
const marqueeLogos = [
  ...clientLogos,
  ...clientLogos,
  ...clientLogos,
  ...clientLogos,
  ...clientLogos,
  ...clientLogos,
];

export default function LogoCloud() {
  return (
    <section className="py-12 md:py-16 border-y border-zinc-200 dark:border-white/5 bg-zinc-50/50 dark:bg-neutral-900/30 overflow-hidden relative transition-colors duration-300">
      {/* Decorative Brand Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 dark:bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-violet/5 dark:bg-violet/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Section Headline */}
      <div className="container mx-auto px-6 mb-8 sm:mb-10 relative z-10">
        <p className="text-center text-xs md:text-sm font-semibold text-zinc-500 dark:text-zinc-400 tracking-wider uppercase">
          Technology built for businesses that want to move forward.
        </p>
      </div>

      {/* Infinite Moving Marquee Track with No Logo Backgrounds */}
      <div className="relative flex max-w-[100vw] overflow-hidden py-2 sm:py-4">
        {/* Left & Right Gradient Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-28 md:w-56 bg-gradient-to-r from-zinc-50/90 dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 md:w-56 bg-gradient-to-l from-zinc-50/90 dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 38,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex items-center gap-20 sm:gap-28 md:gap-36 lg:gap-44 w-max px-8 motion-reduce:transform-none"
        >
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex items-center justify-center flex-shrink-0 cursor-default group py-2"
            >
              <img
                src={encodeURI(logo.src)}
                alt={logo.alt}
                loading="lazy"
                className="h-20 sm:h-24 md:h-28 lg:h-36 w-auto max-w-[280px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[480px] object-contain opacity-80 hover:opacity-100 transform-gpu hover:scale-105 transition-all duration-300 select-none pointer-events-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
