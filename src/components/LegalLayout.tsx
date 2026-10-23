"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Printer, Share2, Check, ArrowRight, Mail } from "lucide-react";

export interface LegalSection {
  id: string;
  number: string;
  title: string;
  content: string;
}

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  activeDoc: "privacy" | "terms";
  sections: LegalSection[];
}

export default function LegalLayout({
  title,
  subtitle,
  lastUpdated,
  activeDoc,
  sections,
}: LegalLayoutProps) {
  const [activeSectionId, setActiveSectionId] = useState<string>(sections[0]?.id || "");
  const [copied, setCopied] = useState(false);

  // Active section scrollspy observer
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSectionId(sections[i].id);
          return;
        }
      }
      if (sections[0]) {
        setActiveSectionId(sections[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary-light/30 selection:text-white">
      {/* Print-specific style overrides */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media print {
              header,
              footer,
              aside,
              .no-print {
                display: none !important;
              }
              main {
                padding-top: 0 !important;
                padding-bottom: 0 !important;
              }
              body {
                background: white !important;
                color: black !important;
              }
            }
          `,
        }}
      />

      <div className="no-print">
        <Navbar />
      </div>

      <main className="flex-1 pt-28 sm:pt-32 pb-24 relative">
        {/* Subtle atmospheric ambient glow */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-radial from-primary/10 via-violet/5 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />

        <div className="container mx-auto px-6 max-w-6xl">
          {/* Top Bar: Document Switcher & Actions */}
          <div className="mb-10 sm:mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 no-print pb-6 border-b border-zinc-200/80 dark:border-white/10">
            {/* Segmented Document Switcher */}
            <div className="inline-flex p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-white/10 text-xs sm:text-sm font-medium self-start sm:self-auto">
              <Link
                href="/privacy"
                className={`px-3.5 sm:px-4 py-1.5 rounded-lg transition-all ${
                  activeDoc === "privacy"
                    ? "bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-sm font-semibold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
                }`}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className={`px-3.5 sm:px-4 py-1.5 rounded-lg transition-all ${
                  activeDoc === "terms"
                    ? "bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-sm font-semibold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
                }`}
              >
                Terms of Service
              </Link>
            </div>

            {/* Quick Actions (Print & Share) */}
            <div className="flex items-center gap-2 text-xs">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-white/10"
                title="Print this document"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-white/10"
                title="Copy link to document"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500 font-medium">Link Copied</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Editorial Header */}
          <header className="mb-14 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-3">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed max-w-2xl">
              {subtitle}
            </p>
            <div className="mt-5 flex items-center gap-3 text-xs sm:text-sm text-zinc-500">
              <span>Last updated: {lastUpdated}</span>
              <span className="text-zinc-300 dark:text-zinc-700 select-none">•</span>
              <span>TechCraft Technologies</span>
            </div>
          </header>

          {/* Two-Column Editorial Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Sticky Table of Contents Sidebar (Desktop) */}
            <aside className="lg:col-span-4 sticky top-28 hidden lg:block no-print">
              <div className="p-6 rounded-2xl bg-zinc-50/80 dark:bg-[#0c0e17]/80 backdrop-blur-sm border border-zinc-200/80 dark:border-white/10 shadow-sm">
                <h2 className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
                  Table of Contents
                </h2>

                <nav className="space-y-1">
                  {sections.map((s) => {
                    const isActive = activeSectionId === s.id;
                    return (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className={`flex items-center gap-2.5 py-1.5 px-2.5 rounded-lg text-xs transition-all relative ${
                          isActive
                            ? "text-zinc-950 dark:text-white font-semibold bg-zinc-200/60 dark:bg-white/10"
                            : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5"
                        }`}
                      >
                        <span
                          className={`font-mono text-[11px] shrink-0 ${
                            isActive
                              ? "text-primary-light font-bold"
                              : "text-zinc-400 dark:text-zinc-500"
                          }`}
                        >
                          {s.number}
                        </span>
                        <span className="truncate">{s.title.replace(/^\d+\.\s*/, "")}</span>
                      </a>
                    );
                  })}
                </nav>

                {/* Direct Contact Helper */}
                <div className="mt-6 pt-6 border-t border-zinc-200/80 dark:border-white/10">
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">
                    <p className="font-semibold text-foreground mb-1">Need clarification?</p>
                    <p className="text-[11px] leading-relaxed mb-3">
                      Reach out to our team if you have questions regarding this policy.
                    </p>
                    <a
                      href="viber://chat?number=%2B639120509416"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-light hover:underline cursor-pointer"
                    >
                      Contact via Viber
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Document Content */}
            <div className="lg:col-span-8 max-w-3xl">
              <div className="divide-y divide-zinc-200/80 dark:divide-white/10">
                {sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="py-10 first:pt-0 last:pb-0 scroll-mt-28"
                  >
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="font-mono text-sm font-semibold text-primary-light shrink-0">
                        {section.number}.
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                        {section.title.replace(/^\d+\.\s*/, "")}
                      </h2>
                    </div>

                    <div className="pl-0 sm:pl-7">
                      <p className="text-base sm:text-[17px] text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                        {section.content}
                      </p>

                      {/* Section 10: Contact Us Interactive Action */}
                      {section.id === "contact-us" && (
                        <div className="mt-6 p-5 sm:p-6 rounded-xl bg-zinc-50 dark:bg-[#0c0e17] border border-zinc-200/80 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                          <div>
                            <div className="text-sm font-semibold text-foreground">
                              Questions or Inquiries?
                            </div>
                            <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                              Connect directly with our team on Viber or email.
                            </div>
                          </div>

                          <div className="flex flex-wrap items-center gap-2.5">
                            <a
                              href="viber://chat?number=%2B639120509416"
                              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-medium hover:opacity-90 transition-opacity cursor-pointer"
                            >
                              Message on Viber
                              <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                            <a
                              href="mailto:info@techcrafttechnologies.com"
                              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-200/80 dark:bg-white/10 text-zinc-900 dark:text-white text-xs font-medium hover:bg-zinc-300 dark:hover:bg-white/15 transition-colors"
                            >
                              <Mail className="w-3.5 h-3.5" />
                              Email Us
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="no-print">
        <Footer />
      </div>
    </div>
  );
}
