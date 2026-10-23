"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";

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
    name: "Christian Faith Mestola",
    role: "Co-Founder & Full-Stack Developer",
    description: "Christian specializes in building scalable web applications, robust APIs, and comprehensive system architecture.",
      // tags: ["React", "Node.js", "System Architecture"],
    image: "/images/Christian%20Faith%20Mestola.png",
    social: {
      github: "https://github.com/channy051022",
      linkedin: "https://linkedin.com",
      email: "mailto:christianfaihtmestola.github@gmail.com",
    }
  },
  {
    name: "Belly Joe",
    role: "Co-Founder & Full-Stack Developer",
    description: "Focused on UI/UX, frontend architecture, and crafting fluid, interactive digital experiences that users love.",
    // tags: ["Next.js", "TypeScript", "Framer Motion"],
    image: "/images/Belly%20Joe.png",
    social: {
      github: "https://github.com/bJOE2001",
      linkedin: "https://linkedin.com",
      email: "mailto:belly@example.com",
    }
  },
  {
    name: "Wendel S. Sabelo",
    role: "Co-Founder & Full-Stack Developer",
    description: "Expert in designing secure APIs, optimizing databases, and deploying resilient cloud infrastructure.",
    // tags: ["PostgreSQL", "Go", "AWS"],
    image: "/images/wendel.png",
    social: {
      github: "https://github.com/Wendellynizer",
      linkedin: "https://linkedin.com",
      email: "mailto:wendel@example.com",
    }
  }
];


export default function Team() {
  return (
    <section id="team" className="py-16 md:py-20 relative bg-background border-t border-zinc-200 dark:border-white/5 transition-colors duration-300 overflow-hidden">
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
          className="text-center mb-12 md:mb-14 max-w-3xl mx-auto"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 md:mb-14">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative h-[480px] sm:h-[520px] rounded-[2rem] overflow-hidden border border-zinc-200 dark:border-white/10 shadow-md hover:shadow-2xl hover:border-primary/50 dark:hover:border-primary/50 hover:ring-1 hover:ring-primary/30 transition-all duration-500 flex flex-col justify-end focus-within:ring-2 focus-within:ring-primary"
            >
              {/* Full Edge-to-Edge Image with Smooth Zoom */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-[1.08] group-focus-within:scale-[1.08] transition-transform duration-700 ease-out motion-reduce:transform-none"
                  loading="lazy"
                />
              </div>

              {/* Default Subtle Bottom Gradient for Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none transition-opacity duration-500" />

              {/* Dark Translucent Gradient Overlay for Hover State */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/75 to-neutral-950/30 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 max-md:opacity-90 transition-opacity duration-500 pointer-events-none backdrop-blur-[2px]" />

              {/* Information Revealed Near Bottom */}
              <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end w-full">
                {/* Full Name */}
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 group-focus-within:translate-y-0 max-md:translate-y-0 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 max-md:opacity-100 motion-reduce:transform-none motion-reduce:opacity-100">
                  {member.name}
                </h3>

                {/* Role / Job Title */}
                <p className="text-primary-light font-medium text-sm sm:text-base mb-3 transition-all duration-500 delay-75 transform translate-y-4 group-hover:translate-y-0 group-focus-within:translate-y-0 max-md:translate-y-0 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 max-md:opacity-100 motion-reduce:transform-none motion-reduce:opacity-100">
                  {member.role}
                </p>

                {/* Short Description */}
                <p className="text-zinc-300 text-sm leading-relaxed mb-4 line-clamp-3 transition-all duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0 group-focus-within:translate-y-0 max-md:translate-y-0 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 max-md:opacity-100 motion-reduce:transform-none motion-reduce:opacity-100">
                  {member.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6 transition-all duration-500 delay-150 transform translate-y-4 group-hover:translate-y-0 group-focus-within:translate-y-0 max-md:translate-y-0 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 max-md:opacity-100 motion-reduce:transform-none motion-reduce:opacity-100">
                  {/* {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium text-zinc-200 bg-white/10 rounded-md border border-white/15 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))} */}
                </div>

                {/* Social Media Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/15 transition-all duration-500 delay-200 transform translate-y-4 group-hover:translate-y-0 group-focus-within:translate-y-0 max-md:translate-y-0 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 max-md:opacity-100 motion-reduce:transform-none motion-reduce:opacity-100">
                  <Link
                    href={member.social.github}
                    aria-label={`${member.name}'s GitHub`}
                    className="text-zinc-300 hover:text-white transition-colors p-1"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </Link>
                  <Link
                    href={member.social.linkedin}
                    aria-label={`${member.name}'s LinkedIn`}
                    className="text-zinc-300 hover:text-[#0A66C2] transition-colors p-1"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </Link>
                  <Link
                    href={member.social.email}
                    aria-label={`Email ${member.name}`}
                    className="text-zinc-300 hover:text-primary-light transition-colors p-1"
                  >
                    <Mail className="w-5 h-5" />
                  </Link>
                </div>
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
