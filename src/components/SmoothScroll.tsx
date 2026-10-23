"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

interface ScrollToOptions {
  offset?: number;
  immediate?: boolean;
}

interface SmoothScrollContextType {
  scrollTo: (
    target: number | string | HTMLElement,
    options?: ScrollToOptions
  ) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  scrollTo: () => {},
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

interface SmoothScrollProps {
  children: ReactNode;
  damping?: number;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const scrollTo = useCallback(
    (
      target: number | string | HTMLElement,
      options: ScrollToOptions = {}
    ) => {
      const offset = options.offset ?? 84;
      let targetTop = 0;

      if (typeof target === "number") {
        targetTop = target;
      } else if (typeof target === "string") {
        const selector = target.startsWith("#") ? target : `#${target}`;
        const el =
          document.getElementById(target.replace(/^#/, "")) ||
          document.querySelector(selector);
        if (el) {
          targetTop = el.getBoundingClientRect().top + window.scrollY - offset;
        }
      } else if (target instanceof HTMLElement) {
        targetTop = target.getBoundingClientRect().top + window.scrollY - offset;
      }

      window.scrollTo({
        top: Math.max(targetTop, 0),
        behavior: options.immediate ? "instant" : "smooth",
      });
    },
    []
  );

  useEffect(() => {
    // Smooth anchor navigation handler for links on the page (e.g. #services, #team)
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      let targetId = "";
      if (href.startsWith("#") && href.length > 1) {
        targetId = href.slice(1);
      } else if (
        href.startsWith("/#") &&
        href.length > 2 &&
        window.location.pathname === "/"
      ) {
        targetId = href.slice(2);
      }

      if (targetId) {
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          e.preventDefault();
          scrollTo(targetEl, { offset: 84 });
          if (window.location.hash !== `#${targetId}`) {
            window.history.pushState(null, "", `#${targetId}`);
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, [scrollTo]);

  return (
    <SmoothScrollContext.Provider value={{ scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
