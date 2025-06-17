// src/data/projects/types.ts
export interface Project {
    id: string;
    title: string;
    summary: string;
    description: string;
    period?: string;
    team?: "개인" | "팀";
    role?: string;
    responsibilities?: string[];
    troubles?: string[];
    outcome?: string;
    url?: string;
    repo?: string;
    imageUrl?: string;
    subtitle?: string;
    links?: { label: string; url: string }[];
    techs?: string[];
}
