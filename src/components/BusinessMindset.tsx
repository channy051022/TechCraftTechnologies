"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Brain,
  TrendingUp,
  Target,
  Rocket,
  Handshake,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Folder,
} from "lucide-react";

interface MindsetFolder {
  id: string;
  number: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  category: string;
  docCode: string;
  description: string;
  whyItMatters: string;
  icon: typeof Cpu;
  accentGradient: string;
  badgeColor: string;
  metric: string;
  metricLabel: string;
  deliverables: string[];
}

const mindsetFolders: MindsetFolder[] = [
  {
    id: "scratch",
    number: "01",
    tabLabel: "From Scratch",
    title: "Custom-Built From Scratch",
    subtitle: "Zero generic templates. Zero platform lock-in.",
    category: "Architecture Protocol",
    docCode: "DOC-REF // TC-MINDSET-01",
    description:
      "Every architecture is engineered to match your unique operational requirements from day one. We never paste bloated marketplace themes or force your business into rigid third-party website builders.",
    whyItMatters:
      "Template-based systems break the moment your business needs custom workflows. Bespoke architecture ensures clean code, infinite adaptability, and complete source code ownership.",
    icon: Cpu,
    accentGradient: "from-sky-500 to-blue-600",
    badgeColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    metric: "100%",
    metricLabel: "Bespoke Code & Full IP Ownership",
    deliverables: [
      "Modular Next.js & React architecture",
      "Relational schemas tailored to your business entities",
      "Zero third-party vendor lock-in or unneeded script bloat",
    ],
  },
  {
    id: "business-first",
    number: "02",
    tabLabel: "Business-First",
    title: "Business-First Thinking",
    subtitle: "We design logic before writing a single line of code.",
    category: "Commercial Strategy",
    docCode: "DOC-REF // TC-MINDSET-02",
    description:
      "We dissect core bottlenecks, operational overhead, customer journey drop-offs, and revenue drivers first. Software only delivers value when it solves measurable business problems.",
    whyItMatters:
      "Writing code without business clarity is just expensive decoration. We validate commercial feasibility first so every engineering hour directly increases your bottom-line ROI.",
    icon: Brain,
    accentGradient: "from-blue-500 to-indigo-600",
    badgeColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    metric: "3.8x",
    metricLabel: "Target Operational ROI",
    deliverables: [
      "Detailed process bottleneck & friction mapping",
      "User conversion funnel optimization",
      "Clear commercial targets established before development",
    ],
  },
  {
    id: "scalability",
    number: "03",
    tabLabel: "Scalability",
    title: "Scalable Architecture",
    subtitle: "Engineered to effortlessly handle 10x traffic surges.",
    category: "Cloud Engineering",
    docCode: "DOC-REF // TC-MINDSET-03",
    description:
      "Cloud-native, modular systems designed to handle rapid traffic spikes, team expansion, multi-role permissions, and continuous feature additions without requiring rewrites.",
    whyItMatters:
      "Rebuilding software when you hit scale is the highest hidden cost in tech. We architect your platform with enterprise-grade modularity from the start so you scale seamlessly.",
    icon: TrendingUp,
    accentGradient: "from-violet-500 to-purple-600",
    badgeColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    metric: "10x",
    metricLabel: "Concurrency & Data Scalability",
    deliverables: [
      "Distributed serverless edge caching & low latency",
      "High-concurrency database connection pooling",
      "Modular service layers for continuous feature rollouts",
    ],
  },
  {
    id: "execution",
    number: "04",
    tabLabel: "Execution",
    title: "Results-Focused Execution",
    subtitle: "Progress measured in tangible operational outcomes.",
    category: "Impact Telemetry",
    docCode: "DOC-REF // TC-MINDSET-04",
    description:
      "We measure engineering success in tangible business outcomes: hours saved across manual workflows, latency eliminated, and seamless automated customer transactions.",
    whyItMatters:
      "Fancy features that don't save time or generate revenue are a distraction. We focus all development velocity on features that move the needle for your team and users.",
    icon: Target,
    accentGradient: "from-emerald-500 to-teal-600",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    metric: "80%+",
    metricLabel: "Manual Workflow Hours Automated",
    deliverables: [
      "Direct automation of repetitive manual tasks",
      "Integrated telemetry tracking customer conversion",
      "Automated CI/CD testing ensuring zero downtime",
    ],
  },
  {
    id: "ownership",
    number: "05",
    tabLabel: "Ownership",
    title: "End-to-End Ownership",
    subtitle: "From discovery to deployment — no handoffs or finger-pointing.",
    category: "Product Lifecycle",
    docCode: "DOC-REF // TC-MINDSET-05",
    description:
      "No fragmented accountability or passing the buck. We guide your digital product across discovery, high-fidelity UI/UX, robust full-stack engineering, and production cloud launch.",
    whyItMatters:
      "Working with disparate contractors creates confusion and delays. Having a unified engineering team ensures coherent architecture and direct accountability.",
    icon: Rocket,
    accentGradient: "from-amber-500 to-orange-600",
    badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    metric: "100%",
    metricLabel: "Direct Founder Accountability",
    deliverables: [
      "Unified UI/UX design and production code synergy",
      "Direct communication with lead engineers",
      "Turnkey cloud deployment with zero handoff friction",
    ],
  },
  {
    id: "partnership",
    number: "06",
    tabLabel: "Partnership",
    title: "Long-Term Partner Mindset",
    subtitle: "An engineering partner, not a transactional dev shop.",
    category: "Partnership Model",
    docCode: "DOC-REF // TC-MINDSET-06",
    description:
      "We don't ship code and disappear into the night. We stand behind our engineering with ongoing strategic advisory, uptime monitoring, security patches, and proactive platform enhancements.",
    whyItMatters:
      "Software is a living business asset that evolves with your market. Having trusted technical partners means you can focus on business growth while we safeguard the technology.",
    icon: Handshake,
    accentGradient: "from-rose-500 to-pink-600",
    badgeColor: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    metric: "24/7",
    metricLabel: "Continuous Guard & Strategic Advisory",
    deliverables: [
      "Proactive performance profiling & health audits",
      "Prompt security updates and infrastructure maintenance",
      "Ongoing strategic guidance as your user base expands",
    ],
  },
];

export default function BusinessMindset() {
  const [activeFolderIndex, setActiveFolderIndex] = useState(0);

  const currentFolder = mindsetFolders[activeFolderIndex];
  const CurrentIcon = currentFolder.icon;

  const handleNext = () => {
    setActiveFolderIndex((prev) => (prev + 1) % mindsetFolders.length);
  };

  const handlePrev = () => {
    setActiveFolderIndex((prev) =>
      prev === 0 ? mindsetFolders.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="business-mindset"
      className="py-16 sm:py-20 md:py-24 relative bg-background border-t border-zinc-200 dark:border-white/5 transition-colors duration-300 overflow-hidden"
    >
      {/* Subtle Ambient Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-primary/5 dark:bg-primary/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px", amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-[11px] sm:text-xs font-semibold tracking-wider text-zinc-600 dark:text-zinc-400 uppercase mb-4 sm:mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-light animate-pulse" />
            Our Mindset & Approach
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.15] mb-4 sm:mb-6">
            Not just developers. <br />
            <span className="text-gradient">We think like business owners.</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light max-w-2xl mx-auto">
            We design the logic before the code — exploring every principle like an architectural file inside our studio dossier.
          </p>
        </motion.div>

        {/* ======================================================== */}
        {/* FOLDER-STYLE INTERFACE (REPLACES PREVIOUS CARD GRID)      */}
        {/* ======================================================== */}
        <div className="max-w-5xl mx-auto">
          {/* Top Folder Tab Rack */}
          <div className="relative z-10 overflow-x-auto scrollbar-none pb-0.5 -mb-px">
            <div className="flex items-end gap-1.5 sm:gap-2 min-w-max px-1">
              {mindsetFolders.map((folder, index) => {
                const isActive = index === activeFolderIndex;
                const TabIcon = folder.icon;

                return (
                  <button
                    key={folder.id}
                    type="button"
                    onClick={() => setActiveFolderIndex(index)}
                    className={`group relative flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-5 py-2.5 sm:py-3.5 rounded-t-xl sm:rounded-t-2xl font-mono text-xs sm:text-sm font-semibold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] select-none border border-b-0 cursor-pointer ${
                      isActive
                        ? "bg-white dark:bg-[#0c0e17] text-foreground border-zinc-200 dark:border-white/15 -translate-y-1 sm:-translate-y-1.5 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] dark:shadow-[0_-8px_20px_rgba(0,0,0,0.5)] z-20"
                        : "bg-zinc-100/80 hover:bg-zinc-200/60 dark:bg-zinc-900/40 dark:hover:bg-zinc-900/80 text-zinc-500 dark:text-zinc-400 border-zinc-200/60 dark:border-white/5 hover:-translate-y-0.5 z-10"
                    }`}
                    aria-label={`Open folder ${folder.number}: ${folder.title}`}
                    aria-selected={isActive}
                  >
                    {/* Top Glowing Tab Accent Line when Active */}
                    {isActive && (
                      <motion.div
                        layoutId="activeFolderTabTop"
                        transition={{ type: "spring", stiffness: 450, damping: 35 }}
                        className={`absolute top-0 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r ${folder.accentGradient}`}
                      />
                    )}

                    {/* Tab Number Badge */}
                    <span
                      className={`text-[10px] sm:text-xs font-bold transition-colors ${
                        isActive
                          ? "text-primary-light"
                          : "text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
                      }`}
                    >
                      {folder.number}
                    </span>

                    {/* Tab Icon */}
                    <TabIcon
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 ${
                        isActive
                          ? "scale-110 text-primary-light"
                          : "text-zinc-400 dark:text-zinc-500 group-hover:scale-105"
                      }`}
                    />

                    {/* Tab Short Title */}
                    <span className="tracking-tight text-xs sm:text-sm">
                      {folder.tabLabel}
                    </span>

                    {/* Folder Tab Notch Indicator */}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Open Folder Envelope & Dossier Body */}
          <div className="relative rounded-b-2xl sm:rounded-b-3xl rounded-tr-2xl sm:rounded-tr-3xl bg-white dark:bg-[#0c0e17] border border-zinc-200/90 dark:border-white/15 p-6 sm:p-9 md:p-11 shadow-2xl shadow-zinc-900/5 dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-md overflow-hidden gpu-accelerated">
            {/* Top Folder Header Strip (Dossier Metadata) */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 sm:pb-6 border-b border-zinc-100 dark:border-white/10 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-[11px] font-semibold text-zinc-700 dark:text-zinc-300">
                  <Folder className="w-3.5 h-3.5 text-primary-light" />
                  <span>DOSSIER #{currentFolder.number}</span>
                </span>
                <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700 select-none">•</span>
                <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-500 dark:text-zinc-400">
                  {currentFolder.docCode}
                </span>
              </div>

              {/* Classification Tag */}
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-emerald-500 dark:text-emerald-400 font-semibold">
                  CONFIDENTIAL PROTOCOL
                </span>
              </div>
            </div>

            {/* Dynamic Folder Body Content with Silky Smooth Transitions */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFolder.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className="py-6 sm:py-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                  
                  {/* Left Column (7 Cols): Philosophy Narrative & Core Principles */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Category Tag */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase mb-3 sm:mb-4 border text-zinc-600 dark:text-zinc-300 bg-zinc-50 dark:bg-white/5 border-zinc-200 dark:border-white/10">
                        <CurrentIcon className="w-3.5 h-3.5 text-primary-light" />
                        <span>{currentFolder.category}</span>
                      </div>

                      {/* Main Title */}
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-2 sm:mb-3">
                        {currentFolder.title}
                      </h3>

                      {/* Subtitle / Core Thesis */}
                      <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary-light mb-4 sm:mb-5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{currentFolder.subtitle}</span>
                      </div>

                      {/* Deep Operational Description */}
                      <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-light mb-5 sm:mb-6">
                        {currentFolder.description}
                      </p>

                      {/* Why It Matters Callout Box */}
                      <div className="p-4 sm:p-5 rounded-xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200/80 dark:border-white/5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal mb-6">
                        <span className="font-semibold text-foreground block mb-1">
                          Why this matters to business owners:
                        </span>
                        {currentFolder.whyItMatters}
                      </div>
                    </div>
                  </div>

                  {/* Right Column (5 Cols): Technical Blueprint Specification */}
                  <div className="lg:col-span-5 flex flex-col gap-5">
                    {/* Architectural Spec Card inside Folder */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-zinc-50 dark:bg-neutral-900/70 border border-zinc-200/80 dark:border-white/10 shadow-sm flex flex-col justify-between">
                      {/* Metric Banner */}
                      <div className="pb-4 mb-4 border-b border-zinc-200/60 dark:border-white/5">
                        <div className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-foreground text-gradient">
                          {currentFolder.metric}
                        </div>
                        <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium mt-1">
                          {currentFolder.metricLabel}
                        </div>
                      </div>

                      {/* Key Engineering Deliverables Checklist */}
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-bold block mb-3">
                          Verified Deliverables
                        </span>

                        <div className="space-y-2.5">
                          {currentFolder.deliverables.map((item, dIdx) => (
                            <div
                              key={dIdx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span className="leading-snug">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Action */}
                      <div className="pt-5 mt-5 border-t border-zinc-200/60 dark:border-white/5">
                        <a
                          href="viber://chat?number=%2B639120509416"
                          className="inline-flex items-center justify-between w-full p-2.5 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-semibold text-xs sm:text-sm hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer shadow-sm"
                        >
                          <span>Apply to your product</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>

            {/* Folder Footer Controls (Previous / Next / Step Counter) */}
            <div className="flex items-center justify-between pt-5 sm:pt-6 border-t border-zinc-100 dark:border-white/10 text-xs sm:text-sm text-zinc-500">
              {/* Folder Counter */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-zinc-400">
                  FILE {activeFolderIndex + 1} OF {mindsetFolders.length}
                </span>
                <div className="hidden sm:flex items-center gap-1">
                  {mindsetFolders.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => setActiveFolderIndex(dotIdx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        dotIdx === activeFolderIndex
                          ? "w-5 bg-primary-light"
                          : "w-1.5 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400"
                      }`}
                      aria-label={`Jump to folder ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Previous & Next Tactile Folder Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5 active:scale-95 transition-all cursor-pointer font-medium text-xs"
                  aria-label="Previous folder"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Prev File</span>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5 active:scale-95 transition-all cursor-pointer font-medium text-xs"
                  aria-label="Next folder"
                >
                  <span className="hidden sm:inline">Next File</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
