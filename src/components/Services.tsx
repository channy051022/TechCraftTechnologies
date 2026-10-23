"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Code2, LayoutTemplate, Layers, Cpu } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "High-performance websites and web applications designed around your business goals.",
    icon: LayoutTemplate,
  },
  {
    num: "02",
    title: "Digital Products",
    description: "From idea to launch, we transform concepts into intuitive digital products.",
    icon: Layers,
  },
  {
    num: "03",
    title: "Business Platforms",
    description: "Scalable platforms that streamline operations and help teams work more efficiently.",
    icon: Cpu,
  },
  {
    num: "04",
    title: "Custom Software",
    description: "Purpose-built software designed around unique business requirements.",
    icon: Code2,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-20 relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px", amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 md:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4 sm:mb-6">
            Everything you need to <br className="hidden md:block" />
            <span className="text-zinc-500">build what’s next.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px", amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl glass-card transition-[transform,box-shadow,border-color] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden hover:-translate-y-1.5 hover:shadow-xl dark:hover:shadow-none hover:border-zinc-300 dark:hover:border-white/10 active:scale-[0.99] gpu-accelerated"
            >
              {/* Hover Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 dark:from-primary/10 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8 sm:mb-12">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 dark:group-hover:bg-primary/10 transition-colors duration-400">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-600 dark:text-zinc-300 group-hover:text-primary-light transition-colors duration-400" />
                  </div>
                  <span className="text-base sm:text-lg font-medium text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors duration-300">
                    {service.num}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2.5 sm:mb-4 group-hover:text-primary-light transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 sm:mb-8 max-w-sm">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground group-hover:text-primary-light transition-colors duration-300">
                  Learn more
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
