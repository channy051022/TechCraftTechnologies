"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Digital Availability" },
  { value: "∞", suffix: "", label: "Ideas to Build" },
];

function Counter({
  value,
  suffix,
  isInView,
}: {
  value: number | string;
  suffix: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(typeof value === "number" ? 0 : value);

  useEffect(() => {
    if (isInView && typeof value === "number") {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = value / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return (
    <span className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
      {count}
      <span className="text-primary-light">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-12 md:py-16 border-y border-zinc-200 dark:border-white/5 bg-background relative overflow-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[200px] bg-primary/5 dark:bg-primary/5 blur-[100px] rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center divide-x-0 md:divide-x divide-zinc-200 dark:divide-white/5">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="mb-2">
                <Counter value={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
