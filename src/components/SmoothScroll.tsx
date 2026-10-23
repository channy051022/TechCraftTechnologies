"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
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

export default function SmoothScroll({
  children,
  damping = 10,
}: SmoothScrollProps) {
  const targetYRef = useRef(0);
  const currentYRef = useRef(0);
  const isRunningRef = useRef(false);
  const rafIdRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  const getMaxScroll = useCallback(() => {
    return Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight
    );
  }, []);

  const stopRaf = useCallback(() => {
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
    isRunningRef.current = false;
    lastTimeRef.current = null;
  }, []);

  const animate = useCallback(
    (time: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      // Delta time in seconds, clamped to avoid huge jumps on tab switch
      const dt = Math.min((time - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = time;

      // Exponential smoothing factor independent of frame rate
      const factor = 1 - Math.exp(-damping * dt);
      const diff = targetYRef.current - currentYRef.current;

      if (Math.abs(diff) < 0.4) {
        currentYRef.current = targetYRef.current;
        window.scrollTo(0, Math.round(currentYRef.current));
        stopRaf();
        return;
      }

      currentYRef.current += diff * factor;
      window.scrollTo(0, Math.round(currentYRef.current));

      rafIdRef.current = requestAnimationFrame(animate);
    },
    [damping, stopRaf]
  );

  const startRaf = useCallback(() => {
    if (!isRunningRef.current) {
      isRunningRef.current = true;
      lastTimeRef.current = null;
      rafIdRef.current = requestAnimationFrame(animate);
    }
  }, [animate]);

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

      const maxScroll = getMaxScroll();
      targetYRef.current = Math.min(Math.max(targetTop, 0), maxScroll);

      if (options.immediate) {
        currentYRef.current = targetYRef.current;
        window.scrollTo(0, targetYRef.current);
        stopRaf();
        return;
      }

      startRaf();
    },
    [getMaxScroll, startRaf, stopRaf]
  );

  useEffect(() => {
    // Check for reduced motion preference
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    // Touch devices already have native high-refresh momentum scrolling
    const isTouchOnly =
      window.matchMedia("(pointer: coarse)").matches &&
      !window.matchMedia("(pointer: fine)").matches;

    if (isTouchOnly) {
      return;
    }

    // Initialize current positions
    currentYRef.current = window.scrollY;
    targetYRef.current = window.scrollY;

    // Helper: detect if an inner element has its own active scrollbar
    const canElementScroll = (el: HTMLElement | null, deltaY: number): boolean => {
      let current = el;
      while (
        current &&
        current !== document.body &&
        current !== document.documentElement
      ) {
        const style = window.getComputedStyle(current);
        const overflowY = style.overflowY;
        if (overflowY === "auto" || overflowY === "scroll") {
          const isAtTop = current.scrollTop <= 0 && deltaY < 0;
          const isAtBottom =
            current.scrollTop + current.clientHeight >=
              current.scrollHeight - 1 && deltaY > 0;
          if (!isAtTop && !isAtBottom && current.scrollHeight > current.clientHeight) {
            return true;
          }
        }
        current = current.parentElement;
      }
      return false;
    };

    const handleWheel = (e: WheelEvent) => {
      // Don't intercept ctrl-wheel (pinch to zoom)
      if (e.ctrlKey) return;

      const target = e.target as HTMLElement | null;
      if (canElementScroll(target, e.deltaY)) {
        return;
      }

      let delta = e.deltaY;
      if (e.deltaMode === 1) {
        // Line delta mode (typical on some mice/browsers)
        delta *= 36;
      } else if (e.deltaMode === 2) {
        // Page delta mode
        delta *= window.innerHeight;
      }

      // Add normalized delta to target
      const maxScroll = getMaxScroll();
      targetYRef.current = Math.min(
        Math.max(targetYRef.current + delta, 0),
        maxScroll
      );

      e.preventDefault();
      startRaf();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable)
      ) {
        return;
      }

      const maxScroll = getMaxScroll();
      let handled = false;

      switch (e.key) {
        case "ArrowDown":
          targetYRef.current = Math.min(targetYRef.current + 110, maxScroll);
          handled = true;
          break;
        case "ArrowUp":
          targetYRef.current = Math.max(targetYRef.current - 110, 0);
          handled = true;
          break;
        case "PageDown":
          targetYRef.current = Math.min(
            targetYRef.current + window.innerHeight * 0.85,
            maxScroll
          );
          handled = true;
          break;
        case "PageUp":
          targetYRef.current = Math.max(
            targetYRef.current - window.innerHeight * 0.85,
            0
          );
          handled = true;
          break;
        case "Space":
        case " ":
          if (e.shiftKey) {
            targetYRef.current = Math.max(
              targetYRef.current - window.innerHeight * 0.85,
              0
            );
          } else {
            targetYRef.current = Math.min(
              targetYRef.current + window.innerHeight * 0.85,
              maxScroll
            );
          }
          handled = true;
          break;
        case "Home":
          targetYRef.current = 0;
          handled = true;
          break;
        case "End":
          targetYRef.current = maxScroll;
          handled = true;
          break;
      }

      if (handled) {
        e.preventDefault();
        startRaf();
      }
    };

    // Keep internal values in sync with native scroll events (e.g. scrollbar thumb drag)
    const handleScroll = () => {
      if (!isRunningRef.current) {
        currentYRef.current = window.scrollY;
        targetYRef.current = window.scrollY;
      } else {
        // If user manually grabbed scrollbar and made a large leap while animating
        if (Math.abs(window.scrollY - currentYRef.current) > 60) {
          currentYRef.current = window.scrollY;
          targetYRef.current = window.scrollY;
        }
      }
    };

    // Smooth anchor navigation handler for links on the page
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

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("click", handleAnchorClick);

    return () => {
      stopRaf();
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, [getMaxScroll, scrollTo, startRaf, stopRaf]);

  return (
    <SmoothScrollContext.Provider value={{ scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
