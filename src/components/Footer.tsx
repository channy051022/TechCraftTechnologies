"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  Company: [
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Process", href: "/#process" },
  ],
  Social: [
    { name: "Facebook Page", href: "https://www.facebook.com/profile.php?id=100071878242948" },
    { name: "GitHub", href: "https://github.com/TechCraftTechnologies" },
    // { name: "X", href: "https://x.com/TechCraftTechnologies" },
  ],
  Contact: [
    { name: "techcrafttechnologies@gmail.com", href: "mailto:techcrafttechnologies@gmail.com" },
    { name: "Start a Conversation", href: "viber://chat?number=%2B639120509416" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#102944] dark:bg-background pt-14 md:pt-16 pb-10 border-t border-white/10 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      {/* Background Watermark TC Monogram Logo */}
      <div className="absolute -right-8 sm:-right-4 md:right-8 lg:right-16 -bottom-12 sm:-bottom-16 md:-bottom-24 lg:-bottom-28 pointer-events-none select-none z-0">
        <Image
          src="/company logo/TC icon logo.png"
          alt=""
          width={560}
          height={560}
          className="w-[280px] sm:w-[360px] md:w-[460px] lg:w-[540px] h-auto object-contain opacity-[0.07] dark:opacity-[0.06] brightness-125 transition-opacity"
          priority
        />
      </div>

      {/* Subtle ambient lighting behind watermark */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 mb-12 md:mb-14">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              onClick={(e) => {
                if (typeof window !== "undefined" && window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="inline-flex items-center mb-6 group cursor-pointer"
            >
              {/* White Logo displays with high contrast on both #102944 (light mode) and dark background */}
              <Image
                src="/techcraftlogo.png"
                alt="TechCraft Technologies"
                width={260}
                height={116}
                className="h-13 sm:h-14 md:h-16 w-auto block transition-opacity group-hover:opacity-85"
              />
            </Link>
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-300 dark:text-zinc-400 mb-6 sm:mb-8 max-w-sm">
              Build What’s Next.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wider uppercase mb-4 sm:mb-6">
                {category}
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-xs sm:text-sm text-zinc-300 dark:text-zinc-400 hover:text-white dark:hover:text-white transition-colors inline-flex items-center gap-1 group break-all sm:break-normal"
                    >
                      <span>{link.name}</span>
                      {(category === "Social" || category === "Contact") && (
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all shrink-0" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Copyright aligned with Legal & Item Navigation */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-zinc-400">
          <p className="text-zinc-400 font-normal text-center sm:text-left">
            © 2026 TechCraft Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6 text-xs sm:text-sm font-medium">
            <Link
              href="/privacy"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-zinc-500 select-none">•</span>
            <Link
              href="/terms"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
