"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "TechCraft Technologies transformed a complex idea into a product our team could actually use. The attention to detail and technical execution was flawless.",
    author: "Client Name",
    role: "CEO, Company Name",
  },
  {
    quote: "Their team doesn't just write code; they understand business goals. The platform they built helped us scale operations significantly.",
    author: "Client Name",
    role: "CTO, Company Name",
  },
  {
    quote: "A premium experience from start to finish. They delivered an exceptional digital product that exceeded all our expectations.",
    author: "Client Name",
    role: "Director of Product, Company Name",
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-background relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            What great partnerships look like.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-8 rounded-3xl bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5 shadow-sm dark:shadow-none relative group hover:shadow-lg dark:hover:shadow-none transition-shadow"
            >
              <Quote className="w-10 h-10 text-zinc-200 dark:text-primary-light/20 mb-6 group-hover:text-zinc-300 dark:group-hover:text-primary-light/40 transition-colors duration-500" />
              <p className="text-lg text-zinc-800 dark:text-zinc-300 leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-semibold text-zinc-950 dark:text-white">
                  {testimonial.author}
                </div>
                <div className="text-sm text-zinc-500">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
