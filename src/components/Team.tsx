"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/link"; // For later use

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const team = [
  {
    name: "Christian Mestola",
    role: "Co-Founder & Full-Stack Developer",
    description: "Christian specializes in building scalable web applications, robust APIs, and comprehensive system architecture.",
    tags: ["React", "Node.js", "System Architecture"],
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=400&h=400", // Professional placeholder
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:christian@example.com",
    }
  },
  {
    name: "Developer Two",
    role: "Co-Founder & Frontend Engineer",
    description: "Focused on UI/UX, frontend architecture, and crafting fluid, interactive digital experiences that users love.",
    tags: ["Next.js", "TypeScript", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:dev2@example.com",
    }
  },
  {
    name: "Developer Three",
    role: "Co-Founder & Backend Engineer",
    description: "Expert in designing secure APIs, optimizing databases, and deploying resilient cloud infrastructure.",
    tags: ["PostgreSQL", "Go", "AWS"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:dev3@example.com",
    }
  }
];

export default function Team() {
  return (
    <section id="team" className="py-32 relative bg-background border-t border-zinc-200 dark:border-white/5 transition-colors duration-300 overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-violet/5 dark:bg-violet/10 blur-[120px] rounded-full pointer-events-none translate-x-1/2" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs font-semibold tracking-widest text-zinc-600 dark:text-zinc-400 uppercase mb-6">
            The People Behind The Product
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Three minds. One vision. <br className="hidden md:block" />
            <span className="text-zinc-500">Built to move forward.</span>
          </h2>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative p-8 rounded-3xl bg-white dark:bg-neutral-900/40 border border-zinc-200 dark:border-white/5 shadow-sm hover:shadow-xl dark:shadow-none dark:hover:bg-neutral-900/60 dark:hover:border-white/10 transition-all duration-500 flex flex-col h-full"
            >
              {/* Profile Image */}
              <div className="mb-8 relative w-24 h-24 rounded-full overflow-hidden border-2 border-zinc-100 dark:border-white/10 shadow-sm">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-foreground mb-1 group-hover:text-primary-light transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary-light font-medium text-sm mb-4">
                  {member.role}
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-300 bg-zinc-50 dark:bg-white/5 rounded-md border border-zinc-200 dark:border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-6 border-t border-zinc-100 dark:border-white/5">
                <Link
                  href={member.social.github}
                  aria-label={`${member.name}'s GitHub`}
                  className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  <GithubIcon className="w-5 h-5" />
                </Link>
                <Link
                  href={member.social.linkedin}
                  aria-label={`${member.name}'s LinkedIn`}
                  className="text-zinc-400 hover:text-[#0A66C2] dark:hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </Link>
                <Link
                  href={member.social.email}
                  aria-label={`Email ${member.name}`}
                  className="text-zinc-400 hover:text-primary-light dark:hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Founder Story Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto p-10 md:p-12 rounded-[2rem] bg-zinc-50 dark:bg-neutral-900 border border-zinc-200 dark:border-white/5 text-center relative overflow-hidden"
        >
          {/* Subtle Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-violet/5 dark:from-primary/10 dark:to-violet/10 pointer-events-none" />
          
          <div className="relative z-10">
            <h4 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              Three developers. One shared vision.
            </h4>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto">
              We believe great software isn't just about writing code. It's about understanding the problem, designing the right solution, and building technology that creates real business value.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
