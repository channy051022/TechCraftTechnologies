"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "dark" | "light";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: any;
}) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const initialTheme: Theme = stored || "system";
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const computeResolved = (t: Theme): "dark" | "light" => {
      if (t === "system") {
        return mediaQuery.matches ? "dark" : "light";
      }
      return t;
    };

    const initialResolved = computeResolved(initialTheme);
    setThemeState(initialTheme);
    setResolvedTheme(initialResolved);

    const root = document.documentElement;
    if (initialResolved === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Listen for OS system theme changes when in 'system' mode
    const handleSystemChange = (e: MediaQueryListEvent) => {
      const currentStored = localStorage.getItem("theme") as Theme | null;
      if (!currentStored || currentStored === "system") {
        const newResolved = e.matches ? "dark" : "light";
        setResolvedTheme(newResolved);
        if (newResolved === "dark") {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);

    let newResolved: "dark" | "light";
    if (newTheme === "system") {
      newResolved = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } else {
      newResolved = newTheme;
    }

    setResolvedTheme(newResolved);

    const root = document.documentElement;
    if (newResolved === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    return {
      theme: "system" as Theme,
      resolvedTheme: "light" as "dark" | "light",
      setTheme: () => {},
    };
  }
  return context;
}

