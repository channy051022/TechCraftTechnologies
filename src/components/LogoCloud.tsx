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

// Single strip contains 3 sets of 4 logos (12 logos)
// Combined with an identical duplicate strip and matching gap + padding-right,
// this ensures a 100% mathematically seamless infinite loop with zero jump.
const singleTrackLogos = [
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
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 mb-8 sm:mb-10 relative z-10"
      >
        <p className="text-center text-xs md:text-sm font-semibold text-zinc-500 dark:text-zinc-400 tracking-wider uppercase">
          Technology built for businesses that want to move forward.
        </p>
      </motion.div>

      {/* Infinite Moving Marquee Track */}
      <div className="relative flex max-w-[100vw] overflow-hidden py-2 sm:py-4 logo-marquee-mask">
        {/* Dual-strip track for 60fps/120fps GPU compositor animation */}
        <div className="flex w-max logo-cloud-track">
          {/* Track 1 */}
          <div className="animate-logo-marquee flex shrink-0 items-center gap-20 sm:gap-28 md:gap-36 lg:gap-44 pr-20 sm:pr-28 md:pr-36 lg:pr-44 select-none">
            {singleTrackLogos.map((logo, index) => (
              <div
                key={`track1-${logo.name}-${index}`}
                className="flex items-center justify-center flex-shrink-0 cursor-default py-2"
              >
                <img
                  src={encodeURI(logo.src)}
                  alt={logo.alt}
                  loading="eager"
                  decoding="async"
                  className="h-20 sm:h-24 md:h-28 lg:h-36 w-auto max-w-[280px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[480px] object-contain opacity-80 hover:opacity-100 transform-gpu hover:scale-105 transition-[transform,opacity] duration-300 pointer-events-auto"
                />
              </div>
            ))}
          </div>

          {/* Track 2 (Identical duplicate for seamless zero-jump loop) */}
          <div
            aria-hidden="true"
            className="animate-logo-marquee flex shrink-0 items-center gap-20 sm:gap-28 md:gap-36 lg:gap-44 pr-20 sm:pr-28 md:pr-36 lg:pr-44 select-none"
          >
            {singleTrackLogos.map((logo, index) => (
              <div
                key={`track2-${logo.name}-${index}`}
                className="flex items-center justify-center flex-shrink-0 cursor-default py-2"
              >
                <img
                  src={encodeURI(logo.src)}
                  alt={logo.alt}
                  loading="eager"
                  decoding="async"
                  className="h-20 sm:h-24 md:h-28 lg:h-36 w-auto max-w-[280px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[480px] object-contain opacity-80 hover:opacity-100 transform-gpu hover:scale-105 transition-[transform,opacity] duration-300 pointer-events-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

