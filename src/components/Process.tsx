"use client";

import { motion } from "framer-motion";

interface Stage {
  num: string;
  title: string;
  description: string;
}

const stages: Stage[] = [
  {
    num: "01",
    title: "Discover",
    description:
      "We understand your goals, users, and challenges to define the right solution.",
  },
  {
    num: "02",
    title: "Plan",
    description:
      "We define the technical architecture, project scope, and development roadmap.",
  },
  {
    num: "03",
    title: "Design",
    description:
      "We create intuitive user experiences and interfaces tailored to your business.",
  },
  {
    num: "04",
    title: "Develop",
    description:
      "We build, integrate, and test reliable software using modern technologies.",
  },
  {
    num: "05",
    title: "Launch",
    description:
      "We deploy your product, monitor its performance, and ensure a smooth release.",
  },
  {
    num: "06",
    title: "Improve & Scale",
    description:
      "We provide ongoing improvements as your product and business grow.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      aria-label="Software development process"
      className="py-24 sm:py-28 md:py-36 bg-background relative transition-colors duration-300 border-t border-zinc-200/80 dark:border-white/10 overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header with Scroll Fade-In */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-20 md:mb-24 max-w-3xl"
        >
          {/* Eyebrow Badge Harmonized with Other Sections */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 mb-5 sm:mb-6 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-light animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-zinc-600 dark:text-zinc-300 uppercase font-mono">
              Our Approach
            </span>
          </div>

          {/* Heading with Signature Brand Gradient */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.14] mb-5 sm:mb-6">
            From idea to <span className="text-gradient">impact.</span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed max-w-2xl">
            A clear, collaborative process for building digital products that solve real business problems.
          </p>
        </motion.div>

        {/* Minimalist Editorial Timeline Grid with Scroll Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 sm:gap-x-12 lg:gap-x-14 gap-y-12 sm:gap-y-16 lg:gap-y-20">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px", amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: (index % 3) * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative pt-8 sm:pt-10 motion-reduce:transition-none cursor-default"
            >
              {/* Base Hairline Divider */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-zinc-200 dark:bg-white/10" />

              {/* Scroll-Triggered Animated Accent Hairline with Brand Gradient & Hover Glow */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.75,
                  delay: (index % 3) * 0.1 + 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ originX: 0 }}
                className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-primary to-primary-light dark:from-sky-400 dark:to-primary-light opacity-90 group-hover:h-[2px] group-hover:shadow-[0_0_12px_rgba(50,145,255,0.4)] transition-all duration-300"
              />

              {/* Stage Meta: Number and Status Pip */}
              <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: (index % 3) * 0.1 + 0.2 }}
                  className="w-1.5 h-1.5 rounded-full bg-primary-light transition-transform duration-200 group-hover:scale-125"
                  aria-hidden="true"
                />
                <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-zinc-400 dark:text-zinc-500 group-hover:text-primary-light transition-colors duration-200">
                  {stage.num}
                </span>
              </div>

              {/* Stage Heading with Electric Blue Hover */}
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-3 transition-colors duration-200 group-hover:text-primary dark:group-hover:text-primary-light">
                {stage.title}
              </h3>

              {/* Stage Description */}
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                {stage.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
