"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  ArrowRight,
  Loader2,
  CheckCircle2,
  ChevronDown,
  Sparkles,
} from "lucide-react";

const serviceOptions = [
"Custom Web Application or Business System",
"POS & Sales Management System",
"Booking & Reservation System",
"Inventory Management System",
"Business Website & Landing Page",
"E-Commerce Website",
"Mobile Application Development",
"System Integration & Automation",
"Not Sure Yet — Help Me Choose",
];

export default function CTA() {
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [service, setService] = useState(serviceOptions[0]);
  const [goal, setGoal] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handlePrepareEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Smooth preparation delay to give tangible tactile feedback
    setTimeout(() => {
      const targetEmail = "techcrafttechnologies@gmail.com";
      const subject = `Project Inquiry: ${service} - ${businessName || fullName || "New Project"}`;
      const body = `Hi TechCraft Technologies Team,

My name is ${fullName || "Client"}${businessName ? ` from ${businessName}` : ""}.

I am reaching out regarding:
${service}

Tell us about your goal:
${goal || "We have an ambitious project idea and would love to collaborate."}

Looking forward to your response.

Best regards,
${fullName || "Client"}`;

      const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      // Automatically trigger draft creation in user's default email client
      window.location.href = mailtoUrl;
      setStatus("success");
    }, 900);
  };

  const handleReset = () => {
    setStatus("idle");
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-24 md:py-32 overflow-hidden bg-background border-t border-zinc-200/80 dark:border-white/10 transition-colors duration-300 scroll-mt-12"
    >
      <div id="start-a-project" className="sr-only" />
      {/* Subtle Ambient Radial Lighting aligned with About and Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[450px] sm:h-[600px] bg-primary/5 dark:bg-primary/10 blur-[140px] rounded-full pointer-events-none -z-0" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Side-by-Side Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ======================================================== */}
          {/* LEFT SIDE: Headline, Description & Trust Indicators      */}
          {/* ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px", amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 flex flex-col items-start text-left md:sticky md:top-28"
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs font-semibold tracking-wider text-zinc-700 dark:text-zinc-300 uppercase mb-4 sm:mb-5">
              <Sparkles className="w-3.5 h-3.5 text-primary-light" />
              <span>Start a Project</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-4 sm:mb-6 leading-[1.12]">
              Have an idea <br className="hidden sm:inline" />
              worth building?
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-6 sm:mb-8 max-w-lg">
              Let&apos;s turn it into something people can use, love, and remember.
            </p>

            {/* Direct Trust Bar */}
            <div className="pt-6 border-t border-zinc-200 dark:border-white/10 space-y-3.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 w-full max-w-md">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary-light shrink-0" />
                <span>24-hour response time guaranteed</span>
              </div>
            </div>
          </motion.div>

          {/* ======================================================== */}
          {/* RIGHT SIDE: Interactive Email Preparation Form Card       */}
          {/* ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px", amount: 0.15 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 w-full"
          >
            <div className="relative p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#0c0e17]/90 border border-zinc-200/90 dark:border-white/10 shadow-xl dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-md overflow-hidden gpu-accelerated">
              
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  /* Success Confirmation State */
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="py-8 sm:py-10 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-5 text-emerald-500 dark:text-emerald-400">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                      Draft Email Prepared!
                    </h3>

                    <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-md mx-auto mb-8 leading-relaxed">
                      Your draft has been created and opened in your email application. Send it whenever you’re ready to connect!
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="w-full sm:w-auto px-6 py-3 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-white/10 dark:hover:bg-white/15 text-zinc-800 dark:text-white font-medium text-sm transition-all cursor-pointer border border-zinc-200 dark:border-white/15"
                      >
                        Edit details & re-prepare
                      </button>

                      <a
                        href="viber://chat?number=%2B639120509416"
                        className="w-full sm:w-auto px-6 py-3 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-semibold text-sm hover:opacity-90 transition-all cursor-pointer inline-flex items-center justify-center gap-2"
                      >
                        <span>Prefer chat? Open Viber</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  /* Form Inputs */
                  <motion.form
                    key="email-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handlePrepareEmail}
                    className="space-y-5 sm:space-y-6"
                  >
                    {/* Two-Column: Full Name & Business Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2 font-mono"
                        >
                          Full Name <span className="text-primary-light">*</span>
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Juan Dela Cruz"
                          className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/10 text-foreground placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-sm sm:text-base focus:outline-none focus:border-primary-light focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>

                      {/* Business Name */}
                      <div>
                        <label
                          htmlFor="businessName"
                          className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2 font-mono"
                        >
                          Business Name
                        </label>
                        <input
                          id="businessName"
                          type="text"
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                          placeholder="e.g. TechCraft Studios"
                          className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/10 text-foreground placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-sm sm:text-base focus:outline-none focus:border-primary-light focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Dropdown: What do you need? */}
                    <div>
                      <label
                        htmlFor="serviceNeed"
                        className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2 font-mono"
                      >
                        What type of solution are you looking for?
                      </label>
                      <div className="relative">
                        <select
                          id="serviceNeed"
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#0c0e17] border border-zinc-200 dark:border-white/10 text-foreground text-sm sm:text-base focus:outline-none focus:border-primary-light focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer pr-10"
                        >
                          {serviceOptions.map((opt) => (
                            <option
                              key={opt}
                              value={opt}
                              className="bg-white dark:bg-[#0c0e17] text-zinc-900 dark:text-white"
                            >
                              {opt}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-zinc-400 dark:text-zinc-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* Textarea: Tell us about your goal */}
                    <div>
                      <label
                        htmlFor="projectGoal"
                        className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2 font-mono"
                      >
                        Tell us about your goal <span className="text-primary-light">*</span>
                      </label>
                      <textarea
                        id="projectGoal"
                        required
                        rows={4}
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        placeholder="Tell us about the software, challenges you're facing, or the business outcomes you want to achieve..."
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/10 text-foreground placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-sm sm:text-base focus:outline-none focus:border-primary-light focus:ring-2 focus:ring-primary/20 transition-all resize-y min-h-[110px]"
                      />
                    </div>

                    {/* Submit Button: Prepare Email */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full py-4 px-6 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-semibold text-base sm:text-lg hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg shadow-zinc-950/10 dark:shadow-white/10 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin text-primary-light" />
                            <span>Preparing your draft email...</span>
                          </>
                        ) : (
                          <>
                            <Mail className="w-5 h-5 text-primary-light" />
                            <span>Prepare email</span>
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Alternative Direct Chat Row */}
                    <div className="pt-3 text-center border-t border-zinc-100 dark:border-white/10">
                      <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-light">
                        Prefer instant messaging?{" "}
                        <a
                          href="viber://chat?number=%2B639120509416"
                          className="text-primary-light hover:text-foreground font-medium underline underline-offset-4 transition-colors cursor-pointer"
                        >
                          Chat directly on Viber
                        </a>
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
