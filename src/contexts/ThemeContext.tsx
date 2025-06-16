// src/contexts/ThemeContext.tsx
"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
    isDark: false,
    toggle: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDark, setIsDark] = useState(false);

    // 최초 로드 시 localStorage 확인
    useEffect(() => {
        const stored = localStorage.getItem("theme");
        if (stored === "dark") setIsDark(true);
    }, []);

    // isDark 변할 때 html 클래스 & localStorage 동기화 적용
    useEffect(() => {
        const html = document.documentElement;
        html.classList.toggle("dark", isDark);
        html.classList.toggle("light", !isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    return (
        <ThemeContext.Provider
            value={{ isDark, toggle: () => setIsDark(p => !p) }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
