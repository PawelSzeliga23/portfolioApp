import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

const ThemeToggle = () => {
    const [theme, setTheme] = useState<Theme>("system");

    const applyTheme = (theme: Theme) => {
        if (theme === "light") {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else if (theme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        } else {
            localStorage.removeItem("theme");
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        }
        window.dispatchEvent(new Event('themeChange'));
    };

    useEffect(() => {
        const saved = (localStorage.theme as Theme) || "system";
        const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (saved === "light") document.documentElement.classList.remove("dark");
        else if (saved === "dark") document.documentElement.classList.add("dark");
        else document.documentElement.classList.toggle("dark", isSystemDark);

        setTheme(saved);

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const listener = (e: MediaQueryListEvent) => {
            if (!localStorage.theme || localStorage.theme === "system") {
                document.documentElement.classList.toggle("dark", e.matches);
            }
        };
        mediaQuery.addEventListener("change", listener);
        return () => mediaQuery.removeEventListener("change", listener);
    }, []);


    return (

        <button
            onClick={() => setTheme(prev => {
                const next = prev === "light" ? "dark" : prev === "dark" ? "system" : "light";
                applyTheme(next);
                return next;
            })}
            className={'absolute top-3 right-2 px-2 py-2 text-white rounded-full transition-opacity duration-300 ease-in-out bg-transparent hover:opacity-50 cursor-pointer z-50'}
        >
            {theme === "light" && "☀️"}
            {theme === "dark" && "🌙"}
            {theme === "system" && "💻"}
        </button>
    );
};

export default ThemeToggle;
