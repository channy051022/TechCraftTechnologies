"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    name: "Atlas",
    category: "Business Operations Platform",
    description: "A comprehensive internal tool designed to unify fragmented operational data into a single, cohesive interface. (Demo Project)",
    tags: ["React", "Node.js", "PostgreSQL"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "Pulse",
    category: "Analytics Dashboard",
    description: "Real-time analytics visualization platform built for enterprise scale, processing millions of events daily. (Demo Project)",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    color: "from-violet-500/20 to-fuchsia-500/20",
  },
  {
    name: "Orbit",
    category: "Customer Experience Platform",
    description: "Omnichannel customer engagement platform that helps brands connect meaningfully with their audience. (Demo Project)",
    tags: ["Vue", "Laravel", "Redis"],
    color: "from-orange-500/20 to-amber-500/20",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-32 bg-zinc-50 dark:bg-neutral-950 border-t border-zinc-200 dark:border-white/5 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white mb-4">
              Built for real-world impact.
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl">
              A selection of recent projects showcasing our expertise in design, engineering, and digital strategy.
            </p>
          </div>
          <Link
            href="#work"
            className="group flex items-center gap-2 text-zinc-950 dark:text-white font-medium hover:text-primary-light transition-colors shrink-0"
          >
            View All Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="space-y-12 md:space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center bg-white dark:bg-transparent p-6 md:p-12 rounded-[2.5rem] dark:rounded-none shadow-xl dark:shadow-none border border-zinc-100 dark:border-transparent"
            >
              {/* Project Image Placeholder */}
              <div
                className={`lg:col-span-7 relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden bg-zinc-100 dark:bg-neutral-900 border border-zinc-200 dark:border-white/10 ${
                  index % 2 !== 0 ? "lg:order-2" : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br transition-transform duration-700 group-hover:scale-105" />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 dark:opacity-40 group-hover:opacity-40 dark:group-hover:opacity-60 transition-opacity duration-500`} />
                
                {/* Abstract graphic representing project */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700">
                  <div className="w-64 h-64 border border-black/10 dark:border-white/20 rounded-full animate-[spin_20s_linear_infinite]" />
                  <div className="absolute w-48 h-48 border border-black/10 dark:border-white/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                </div>
                
                {/* Project Badge */}
                <div className="absolute top-6 left-6 px-4 py-2 rounded-full glass-card text-xs font-medium tracking-wider text-zinc-900 dark:text-white uppercase">
                  {project.category}
                </div>
              </div>

              {/* Project Info */}
              <div
                className={`lg:col-span-5 flex flex-col justify-center ${
                  index % 2 !== 0 ? "lg:order-1" : ""
                }`}
              >
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-3xl md:text-4xl font-bold text-zinc-950 dark:text-white mb-6">
                    {project.name}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm font-medium text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-white/5 rounded-md border border-zinc-200 dark:border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-200 dark:border-transparent bg-white dark:bg-white/10 text-zinc-950 dark:text-white font-medium hover:bg-zinc-950 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shadow-sm dark:shadow-none"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
