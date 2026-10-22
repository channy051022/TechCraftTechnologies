"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Discover",
    description: "Understand your goals, users, challenges, and opportunities.",
  },
  {
    num: "02",
    title: "Strategy",
    description: "Define the product direction, architecture, and roadmap.",
  },
  {
    num: "03",
    title: "Design",
    description: "Create a clear, intuitive, and premium user experience.",
  },
  {
    num: "04",
    title: "Build",
    description: "Develop a fast, scalable, production-ready solution.",
  },
  {
    num: "05",
    title: "Launch",
    description: "Deploy, monitor, improve, and continue growing.",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="py-32 bg-background relative transition-colors duration-300" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            From idea to impact.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Background Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-200 dark:bg-white/5 -translate-x-1/2" />
          
          {/* Animated Fill Line */}
          <motion.div
            className="absolute left-[27px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-primary-light to-violet -translate-x-1/2"
            style={{ height: lineHeight }}
          />

          <div className="space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex items-center md:justify-between flex-col md:flex-row">
                  {/* Timeline Dot */}
                  <div className="absolute left-[27px] md:left-1/2 w-14 h-14 bg-white dark:bg-background border border-zinc-200 dark:border-white/10 shadow-sm dark:shadow-none rounded-full flex items-center justify-center -translate-x-1/2 z-10">
                    <span className="text-sm font-bold text-foreground">{step.num}</span>
                  </div>

                  {/* Content (Left or Right) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`w-full md:w-5/12 pl-24 md:pl-0 ${
                      isEven ? "md:text-right md:pr-16" : "md:ml-auto md:pl-16"
                    }`}
                  >
                    <div className="p-8 rounded-3xl bg-white dark:bg-transparent border border-zinc-200 dark:border-white/5 shadow-sm dark:shadow-none hover:shadow-md dark:hover:border-white/10 transition-all">
                      <h3 className="text-2xl font-semibold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
