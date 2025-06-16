// src/hooks/useScrollDirection.ts
import { useEffect, useState } from "react";

export type ScrollDirection = "up" | "down";

export function useScrollDirection(): ScrollDirection {
    const [scrollDir, setScrollDir] = useState<ScrollDirection>("down");

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDir = () => {
            const scrollY = window.scrollY;
            setScrollDir(scrollY > lastScrollY ? "down" : "up");
            lastScrollY = scrollY;
        };

        window.addEventListener("scroll", updateScrollDir);
        return () => window.removeEventListener("scroll", updateScrollDir);
    }, []);

    return scrollDir;
}
