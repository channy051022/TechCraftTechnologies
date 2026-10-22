"use client";

import { motion } from "framer-motion";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Laravel",
  "PostgreSQL",
  "Docker",
];

export default function Technology() {
  return (
    <section className="py-24 border-y border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-neutral-900/30 overflow-hidden relative transition-colors duration-300">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet/5 dark:bg-violet/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4"
          >
            Powered by modern technology.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-500 dark:text-zinc-400"
          >
            We use the best tools to ensure performance, scalability, and security.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 max-w-4xl mx-auto">
          {technologies.map((tech, index) => {
            // Randomize floating animation
            const delay = index * 0.1;
            const yOffset = index % 2 === 0 ? [0, -10, 0] : [0, 10, 0];
            
            return (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <motion.div
                  animate={{ y: yOffset }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay,
                  }}
                  className="px-6 py-3 rounded-2xl bg-white dark:bg-transparent border border-zinc-200 dark:border-white/10 shadow-sm dark:shadow-none hover:border-zinc-300 dark:hover:border-primary/30 hover:shadow-md transition-all cursor-default"
                >
                  <span className="text-sm md:text-base font-semibold text-zinc-700 dark:text-zinc-300">
                    {tech}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
