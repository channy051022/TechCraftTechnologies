"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    company: "BloomWell Healthcare",
    logo: "/client logos/BloomWell Healthcare Logo.png",
    tag: "Healthcare & Telehealth",
    metric: "64% Faster Intake",
    quote:
      "TechCraft engineered our patient portal and telemedicine infrastructure with airtight clinical security. The fluid interface transformed how our clinics operate daily.",
  },
  {
    company: "IronPeak Construction",
    logo: "/client logos/IronPeak Construction Logo.png",
    tag: "Commercial Infrastructure",
    metric: "35% Cost Optimization",
    quote:
      "Managing multi-site commercial projects used to mean fragmented spreadsheets. TechCraft delivered a unified operations platform with real-time job-site telemetry.",
  },
  {
    company: "NexaMart Fast Cart",
    logo: "/client logos/NexaMart Fast Cart Logo.png",
    tag: "High-Concurrency E-Commerce",
    metric: "42% Conversion Lift",
    quote:
      "Our checkout suffered during peak flash sales. TechCraft re-architected our cart to handle extreme concurrency, achieving sub-second checkouts and immediate revenue gains.",
  },
  {
    company: "Velora Boutique Hotel",
    logo: "/client logos/Velora Boutique Hotel Logo.png",
    tag: "Luxury Hospitality",
    metric: "55% Direct Bookings",
    quote:
      "The custom booking engine and guest concierge portal TechCraft developed elevates our boutique luxury standard. Direct reservations grew dramatically from month one.",
  },
];

// Duplicate for continuous seamless marquee scrolling
const marqueeTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-background relative overflow-hidden transition-colors duration-300">
      {/* Ambient Background Glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-violet/5 dark:bg-violet/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-10 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs font-semibold tracking-widest text-zinc-600 dark:text-zinc-400 uppercase mb-4">
            Proven Partnerships
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-5">
            What great partnerships look like.
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            Real outcomes and feedback from the industry leaders who build with TechCraft Technologies.
          </p>
        </motion.div>
      </div>

      {/* Infinite Moving Marquee Track */}
      <div className="relative flex max-w-[100vw] overflow-hidden py-4">
        {/* Left & Right Gradient Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 md:w-56 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 md:w-56 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

        <div className="testimonials-marquee-track flex items-stretch gap-6 sm:gap-8 w-max px-6">
          {marqueeTestimonials.map((item, index) => (
            <div
              key={`${item.company}-${index}`}
              className="w-[340px] sm:w-[420px] md:w-[460px] flex-shrink-0 flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900/80 border border-zinc-200/80 dark:border-white/10 shadow-sm dark:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.5)] hover:shadow-xl dark:hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group cursor-default"
            >
              {/* Card Top: Brand Badge + Rating & Metric */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  {/* Brand Logo in clean high-contrast badge */}
                  <div className="px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-white/[0.96] border border-zinc-200/60 dark:border-white/20 inline-flex items-center justify-center shadow-xs">
                    <img
                      src={encodeURI(item.logo)}
                      alt={item.company}
                      loading="lazy"
                      className="h-6 sm:h-7 w-auto max-w-[120px] object-contain select-none"
                    />
                  </div>

                  {/* 5-Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>

                {/* Metric / Impact Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-primary/10 text-primary-light border border-primary/20">
                    {item.metric}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Card Bottom: Company Name Only */}
              <div className="pt-5 border-t border-zinc-100 dark:border-white/10 flex items-center justify-between gap-3">
                <div>
                  <h4 className="font-semibold text-zinc-950 dark:text-white text-base tracking-tight">
                    {item.company}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {item.tag}
                  </p>
                </div>

                <Quote className="w-6 h-6 text-zinc-200 dark:text-white/10 group-hover:text-primary-light/30 transition-colors shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
