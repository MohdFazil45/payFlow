"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <button
        className="cursor-pointer flex items-center justify-center"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <Sun className="border-none text-neutral-200  xl:h-10 xl:w-10 xl:font-light " />
        ) : (
          <Moon className="border-none text-neutral-800 xl:h-10 xl:w-10 xl:font-light" />
        )}
      </button>
    </>
  );
};
