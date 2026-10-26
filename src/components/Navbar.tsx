"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  // { name: "Work", href: "/#work" },
  { name: "Process", href: "/#process" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        e.preventDefault();
        contactSection.scrollIntoView({ behavior: "smooth" });
        const fullNameInput = document.getElementById("fullName") as HTMLInputElement | null;
        if (fullNameInput) {
          setTimeout(() => {
            fullNameInput.focus({ preventScroll: true });
          }, 650);
        }
      }
    }
  };

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-[padding,background-color,box-shadow] duration-300 ease-in-out border-none",
        isScrolled
          ? "py-3 bg-background/80 dark:bg-[#050505]/80 backdrop-blur-md shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          : "py-6 bg-transparent shadow-none"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              if (typeof window !== "undefined" && window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="relative z-10 flex items-center group cursor-pointer"
          >
            <Image
              src="/techcraftlogo-light.png"
              alt="TechCraft Technologies"
              width={160}
              height={72}
              className="h-8 sm:h-9 w-auto dark:hidden block transition-opacity group-hover:opacity-85"
              priority
            />
            <Image
              src="/techcraftlogo.png"
              alt="TechCraft Technologies"
              width={160}
              height={72}
              className="h-8 sm:h-9 w-auto dark:block hidden transition-opacity group-hover:opacity-85"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href === "/#contact") {
                      handleScrollToContact(e);
                    }
                  }}
                  className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary-light transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4 border-l border-zinc-200 dark:border-white/10 pl-6">
              {mounted && (
                <button
                  onClick={() => {
                    console.log("Current resolvedTheme:", resolvedTheme, "Current theme:", theme);
                    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
                    console.log("Setting theme to:", newTheme);
                    setTheme(newTheme);
                  }}
                  className="relative p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors rounded-full hover:bg-zinc-100 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary overflow-hidden"
                  aria-label="Toggle Theme"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={resolvedTheme === "dark" ? "dark" : "light"}
                      initial={{ y: -20, opacity: 0, rotate: -90 }}
                      animate={{ y: 0, opacity: 1, rotate: 0 }}
                      exit={{ y: 20, opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      {resolvedTheme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </motion.div>
                  </AnimatePresence>
                </button>
              )}
              <Link
                href="/#contact"
                onClick={handleScrollToContact}
                className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 cursor-pointer shadow-sm"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4 relative z-10">
            {mounted && (
              <button
                onClick={() => {
                  console.log("Mobile - Current resolvedTheme:", resolvedTheme, "Current theme:", theme);
                  const newTheme = resolvedTheme === "dark" ? "light" : "dark";
                  console.log("Mobile - Setting theme to:", newTheme);
                  setTheme(newTheme);
                }}
                className="relative p-2 text-zinc-600 dark:text-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full overflow-hidden"
                aria-label="Toggle Theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={resolvedTheme === "dark" ? "dark" : "light"}
                    initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0.5, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    {resolvedTheme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </motion.div>
                </AnimatePresence>
              </button>
            )}
            <button
              className="p-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full relative overflow-hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isMobileMenuOpen ? "open" : "closed"}
                  initial={{ opacity: 0, rotate: isMobileMenuOpen ? -90 : 90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: isMobileMenuOpen ? 90 : -90, scale: 0.8 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Staggered Link Reveals */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 right-0 bg-background/95 dark:bg-[#050505]/95 backdrop-blur-2xl border-b border-zinc-200 dark:border-white/10 md:hidden shadow-xl overflow-hidden"
          >
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05, delayChildren: 0.05 },
                },
              }}
              className="container mx-auto px-6 py-6 flex flex-col gap-4"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      if (link.href === "/#contact") {
                        handleScrollToContact(e);
                      }
                    }}
                    className="block py-2 text-base sm:text-lg font-medium text-zinc-600 dark:text-zinc-300 hover:text-foreground active:text-primary-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="pt-3 border-t border-zinc-200 dark:border-white/10"
              >
                <Link
                  href="/#contact"
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    handleScrollToContact(e);
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-foreground text-background font-semibold text-sm sm:text-base cursor-pointer hover:opacity-90 active:scale-[0.98] transition-all shadow-md"
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
