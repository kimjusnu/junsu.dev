import React from "react";
import {
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiNpm,
    SiReact,
    SiMui,
    SiFigma,
    SiVercel,
    SiFirebase,
} from "react-icons/si";
import { FaCube } from "react-icons/fa";

export const techIcons: Record<string, React.ReactElement> = {
    "Next.js": <SiNextdotjs className="w-3 h-3" />,
    TypeScript: <SiTypescript className="w-3 h-3" />,
    TailwindCSS: <SiTailwindcss className="w-3 h-3" />,
    NPM: <SiNpm className="w-3 h-3" />,
    React: <SiReact className="w-3 h-3" />,
    Zustand: <FaCube className="w-3 h-3" />,
    MUI: <SiMui className="w-3 h-3" />,
    Figma: <SiFigma className="w-3 h-3" />,
    Vercel: <SiVercel className="w-3 h-3" />,
    Firebase: <SiFirebase className="w-3 h-3" />,
};

export const TechIcon = ({ tech }: { tech: string }) => techIcons[tech] ?? null;
