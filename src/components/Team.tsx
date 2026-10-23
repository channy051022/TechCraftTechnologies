"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Globe, ExternalLink, ChevronDown } from "lucide-react";
import clsx from "clsx";

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
  name: "Belly Joe B. Basadre",
  role: "Co-Founder & Full-Stack Developer",
  description: "Full-Stack Web & Mobile Developer with production experience building scalable web platforms, government enterprise systems, and AI-powered applications.",
  image: "/images/Belly%20Joe.png",
  social: {
    portfolio: "https://www.bellyjoe.dev/",
    github: "https://github.com/bJOE2001",
    linkedin: "https://www.linkedin.com/in/bellyjoedev/",
    email: "mailto:basadre.bellyjoe@gmail.com",
  }
},
{
  name: "Christian Faith Mestola",
  role: "Co-Founder, Frontend & Full-Stack Developer",
  description: "Specializes in crafting modern, responsive user interfaces while building complete web applications with integrated backend services, APIs, and database systems.",
  image: "/images/Christian%20Faith%20Mestola.png",
  social: {
    portfolio: "https://christianfaithmestola.dev/",
    github: "https://github.com/channy051022",
    linkedin: "https://linkedin.com",
    email: "mailto:christianfaihtmestola.github@gmail.com",
  }
},
{
  name: "Wendel S. Sabelo",
  role: "Co-Founder & Full-Stack Developer",
  description: "Builds scalable web applications from frontend to backend, integrating secure APIs, database management, and reliable system functionality to deliver practical software solutions.",
  image: "/images/wendel.png",
  social: {
    portfolio: "https://github.com/Wendellynizer",
    github: "https://github.com/Wendellynizer",
    linkedin: "https://www.linkedin.com/in/wendel-sabelo/",
    email: "mailto:wendel@example.com",
  }
}
];


function TeamCard({
  member,
  index,
}: {
  member: (typeof team)[number];
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px", amount: 0.15 }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-[480px] sm:h-[520px] rounded-[2rem] overflow-hidden border border-zinc-200 dark:border-white/10 shadow-md hover:shadow-2xl hover:border-primary/50 dark:hover:border-primary/50 hover:ring-1 hover:ring-primary/30 transition-[transform,box-shadow,border-color] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] focus-within:ring-2 focus-within:ring-primary flex flex-col justify-end gpu-accelerated"
    >
      {/* Full Edge-to-Edge Image with Smooth Zoom */}
      <motion.div
        animate={{
          scale: isExpanded ? 1.03 : 1,
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-full overflow-hidden"
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05] group-focus-within:scale-[1.05] motion-reduce:transform-none"
          loading="lazy"
        />
      </motion.div>

      {/* Default Subtle Bottom Gradient for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

      {/* Dark Translucent Gradient Overlay for Hover State */}
      <div
        className={clsx(
          "absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/75 to-neutral-950/20 transition-opacity duration-500 pointer-events-none backdrop-blur-[1px]",
          isExpanded ? "opacity-0" : "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 max-md:opacity-90"
        )}
      />

      {/* Dynamic Deepening Gradient when Expanded (covers only lower portion, keeping face visible) */}
      <motion.div
        animate={{
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/85 to-transparent pointer-events-none z-10"
      />

      {/* Information Container - Always pinned to bottom; expands upward only by description height */}
      <motion.div
        layout
        transition={{
          layout: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
        }}
        className="relative z-20 p-6 sm:p-8 flex flex-col justify-end w-full"
      >
        {/* Content Block (Name, Role, Description, See more button) */}
        <motion.div
          layout="position"
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className={clsx(
            "transition-opacity duration-300",
            isExpanded
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 max-md:opacity-100"
          )}
        >
          {/* Full Name */}
          <motion.h3
            layout="position"
            className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight mb-1"
          >
            {member.name}
          </motion.h3>

          {/* Role / Job Title */}
          <motion.p
            layout="position"
            className="text-primary-light font-medium text-xs sm:text-sm md:text-base mb-2 sm:mb-3"
          >
            {member.role}
          </motion.p>

          {/* Height-Animated Description Container - Expands only to content height */}
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 60,
            }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden relative"
          >
            <p className="text-zinc-300 text-xs sm:text-sm md:text-[15px] leading-relaxed">
              {member.description}
            </p>
            {/* Subtle Gradient Fade on Bottom line when collapsed */}
            {!isExpanded && (
              <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-neutral-950/90 to-transparent pointer-events-none" />
            )}
          </motion.div>

          {/* See More / See Less Toggle */}
          <motion.button
            layout="position"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="inline-flex items-center gap-1.5 mt-2 mb-1.5 sm:mt-2.5 sm:mb-2 text-[11px] sm:text-xs font-semibold text-primary-light hover:text-white transition-colors cursor-pointer group/toggle select-none"
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? "See less" : "See more"}</span>
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="inline-flex items-center justify-center"
            >
              <ChevronDown className="w-3.5 h-3.5 text-primary-light group-hover/toggle:text-white" />
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Portfolio & Social Media Links */}
        <motion.div
          layout="position"
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className={clsx(
            "flex items-center justify-between gap-3 pt-4 border-t border-white/15 transition-opacity duration-300",
            isExpanded
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 max-md:opacity-100"
          )}
        >
          {/* Portfolio Link Button */}
          {member.social.portfolio ? (
            <a
              href={member.social.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${member.name}'s portfolio`}
              className="group/btn inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              <Globe className="w-3.5 h-3.5 text-primary-light" />
              <span>Portfolio</span>
              <ExternalLink className="w-3 h-3 text-zinc-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all" />
            </a>
          ) : (
            <div />
          )}

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={member.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name}'s GitHub`}
              className="text-zinc-300 hover:text-white transition-colors p-1"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name}'s LinkedIn`}
              className="text-zinc-300 hover:text-[#0A66C2] transition-colors p-1"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={member.social.email}
              aria-label={`Email ${member.name}`}
              className="text-zinc-300 hover:text-primary-light transition-colors p-1"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

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
          viewport={{ once: true, margin: "-40px", amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 md:mb-14 max-w-3xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-[11px] sm:text-xs font-semibold tracking-widest text-zinc-600 dark:text-zinc-400 uppercase mb-4 sm:mb-6">
            The People Behind The Product
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4 sm:mb-6">
            Three minds. One vision. <br className="hidden md:block" />
            <span className="text-zinc-500">Built to move forward.</span>
          </h2>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {team.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
