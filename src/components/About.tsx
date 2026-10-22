"use client";

import { motion } from "framer-motion";

const nodes = ["Idea", "Strategy", "Design", "Technology", "Growth"];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-zinc-50 dark:bg-neutral-950 border-t border-zinc-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8 leading-tight">
              Technology should make business feel simpler.
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
              <p>
                TechCraft Technologies exists to help businesses turn ambitious ideas into useful,
                reliable digital experiences.
              </p>
              <p>
                We combine strategy, design, and engineering to create technology
                that solves real problems and drives measurable growth.
              </p>
            </div>
          </motion.div>

          {/* Visual: Interconnected Nodes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[500px] rounded-3xl bg-white dark:bg-transparent border border-zinc-200 dark:border-white/5 shadow-sm dark:shadow-none flex items-center justify-center overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-violet/5 opacity-100 dark:from-primary/20 dark:to-violet/20 dark:opacity-50" />
            
            <div className="relative w-full h-full flex flex-col items-center justify-center gap-8 md:gap-12">
              {nodes.map((node, index) => (
                <div key={node} className="relative flex items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative z-10 px-6 py-3 rounded-full bg-white dark:bg-neutral-900 border border-zinc-200 dark:border-white/10 shadow-sm dark:shadow-[0_0_15px_rgba(255,255,255,0.05)] flex items-center gap-3 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary-light animate-pulse" />
                    <span className="text-sm md:text-base font-medium text-zinc-900 dark:text-white tracking-wide">
                      {node}
                    </span>
                  </motion.div>
                  
                  {/* Connecting Line */}
                  {index < nodes.length - 1 && (
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "48px" }} // connecting gap
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      className="absolute top-full left-1/2 w-[2px] bg-gradient-to-b from-zinc-300 to-transparent dark:from-primary-light/50 dark:to-transparent -translate-x-1/2 origin-top"
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
