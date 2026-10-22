"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "dark" | "light";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children, ...props }: { children: React.ReactNode; [key: string]: any }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const initialTheme = stored || "dark";
    const initialResolved = initialTheme === "system" ? (systemPrefersDark ? "dark" : "light") : initialTheme;
    
    setThemeState(initialTheme);
    setResolvedTheme(initialResolved as "dark" | "light");
    
    const root = document.documentElement;
    if (initialResolved === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    
    let newResolved = newTheme;
    if (newTheme === "system") {
      newResolved = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    
    setResolvedTheme(newResolved as "dark" | "light");
    
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
    return { theme: "dark" as Theme, resolvedTheme: "dark" as Theme, setTheme: () => {} };
  }
  return context;
}
