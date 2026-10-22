"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Strategy First",
    description: "We understand the problem before writing the solution.",
  },
  {
    title: "Built to Scale",
    description: "Architecture designed to grow with your business.",
  },
  {
    title: "User Focused",
    description: "Every experience is designed around the people using it.",
  },
  {
    title: "Long-Term Thinking",
    description: "We build technology that remains useful beyond launch.",
  },
];

export default function WhyTechCraft() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-background transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                We don't just build software. <br />
                <span className="text-zinc-500">We build outcomes.</span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-light" />
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-3xl glass-card overflow-hidden bg-zinc-50 dark:bg-neutral-900/50"
          >
            {/* Abstract UI Elements */}
            <div className="absolute inset-0 p-8 flex flex-col gap-6 opacity-80 dark:opacity-60">
              <div className="w-3/4 h-8 rounded-lg bg-zinc-200 dark:bg-white/5 animate-pulse" />
              <div className="flex gap-4">
                <div className="w-1/3 h-24 rounded-xl bg-gradient-to-br from-primary/10 dark:from-primary/20 to-transparent border border-zinc-200 dark:border-white/5" />
                <div className="w-2/3 h-24 rounded-xl bg-gradient-to-br from-violet/10 dark:from-violet/20 to-transparent border border-zinc-200 dark:border-white/5" />
              </div>
              <div className="flex-1 rounded-xl bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/5 relative overflow-hidden shadow-sm dark:shadow-none">
                <motion.div 
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-zinc-100 dark:via-white/10 to-transparent transform -skew-x-12"
                />
                {/* Simulated Graph Lines */}
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    d="M 0 100 Q 50 50 100 80 T 200 60 T 300 40 T 400 70"
                    fill="none"
                    stroke="rgba(50, 145, 255, 0.4)"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>
            </div>
            {/* Glow overlay */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary-light/10 dark:bg-primary-light/20 blur-[100px] rounded-full" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-violet/10 dark:bg-violet/20 blur-[100px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
