"use client";

import React from "react";
import { Code2, Server, Database, Palette, Users } from "lucide-react";

// ───── react-icons ─────
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiHtml5,
    SiCss3,
    SiSass,
    SiStyledcomponents,
    SiPython,
    SiC,
    SiCplusplus,
    SiGit,
    SiGithub,
    SiEslint,
    SiPrettier,
    SiDocker,
    SiJenkins,
    SiGithubactions,
    SiAmazon,
    SiVercel,
    SiNetlify,
    SiUbuntu,
    SiNginx,
    SiAxios,
    SiMysql,
    SiFirebase,
    SiOracle,
    SiFigma,
    SiStorybook,
    SiSlack,
    SiDiscord,
    SiNotion,
    SiGoogledocs,
    SiReactquery,
    SiPostman,
    SiLighthouse,
} from "react-icons/si";
import { FaWaveSquare, FaPenNib } from "react-icons/fa";
import { MdStorage } from "react-icons/md";
import { TbTableOptions } from "react-icons/tb";
import { PiGitBranch } from "react-icons/pi";

// ───── label → icon 매핑 ─────
const iconMap: Record<string, React.ReactNode> = {
    // Languages & FW
    JavaScript: <SiJavascript color="#f7df1e" />,
    TypeScript: <SiTypescript color="#3178c6" />,
    React: <SiReact color="#61dafb" />,
    "Next.js (App Router, SSR, CSR, PWA)": <SiNextdotjs />,
    HTML5: <SiHtml5 color="#e34f26" />,
    CSS3: <SiCss3 color="#1572b6" />,
    Sass: <SiSass color="#cc6699" />,
    "Styled-Components": <SiStyledcomponents color="#db7093" />,
    Python: <SiPython color="#3776ab" />,
    C: <SiC color="#00599c" />,
    "C++": <SiCplusplus color="#00599c" />,

    // DevOps
    Git: <SiGit color="#f05032" />,
    GitHub: <SiGithub />,
    ESLint: <SiEslint color="#4b32c3" />,
    Prettier: <SiPrettier color="#f7b93e" />,
    Docker: <SiDocker color="#2496ed" />,
    PM2: <SiNginx color="#019639" />, // 대체
    Jenkins: <SiJenkins color="#d24939" />,
    "Github Actions (CI/CD)": <SiGithubactions />,
    "AWS (EC2, S3)": <SiAmazon color="#ff9900" />,
    Vercel: <SiVercel />,
    Netlify: <SiNetlify color="#00c7b7" />,
    "Ubuntu 서버 운영 경험": <SiUbuntu color="#e95420" />,

    // State & Data
    Zustand: <FaWaveSquare color="#ff6600" />,
    Axios: <SiAxios color="#5a29e4" />,
    "React Query": <SiReactquery color="#ff4154" />,
    LocalStorage: <MdStorage color="#555" />,
    MySQL: <SiMysql color="#4479a1" />,
    "Oracle DB": <SiOracle color="#f80000" />,
    Firebase: <SiFirebase color="#ffca28" />,
    "Mock API 서버 설계 경험": <SiPostman color="#ff6c37" />,

    // Design & UX
    "Figma 기반 협업": <SiFigma color="#f24e1e" />,
    "UI 프로토타입 설계": <SiFigma color="#a259ff" />,
    "Storybook UI 문서화": <SiStorybook color="#ff4785" />,
    Tiptap: <FaPenNib color="#6e56cf" />,
    "AG Grid": <TbTableOptions color="#1e88e5" />,
    "CKEditor 사용": <FaPenNib />,
    "Lighthouse UX 성능 개선": <SiLighthouse color="#4285f4" />,

    // Comm & Collab
    Notion: <SiNotion />,
    Slack: <SiSlack color="#4a154b" />,
    Discord: <SiDiscord color="#5865f2" />,
    "Google Docs": <SiGoogledocs color="#1a73e8" />,
    "Git 브랜치 전략 (feature → develop → main)": <PiGitBranch />,
    "코드 리뷰 / PR 기반 협업": <SiGithub />,
};

// ───── 카테고리 데이터 ─────
const techStacks = [
    {
        title: "Languages & Frameworks",
        icon: <Code2 className="w-4 h-4 text-blue-600" />,
        color: "bg-blue-50",
        items: [
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js (App Router, SSR, CSR, PWA)",
            "HTML5",
            "CSS3",
            "Sass",
            "Styled-Components",
            "Python",
            "C",
            "C++",
        ],
    },
    {
        title: "DevOps & Infra",
        icon: <Server className="w-4 h-4 text-green-600" />,
        color: "bg-green-50",
        items: [
            "Git",
            "GitHub",
            "ESLint",
            "Prettier",
            "Docker",
            "PM2",
            "Jenkins",
            "Github Actions (CI/CD)",
            "AWS (EC2, S3)",
            "Vercel",
            "Netlify",
            "Ubuntu 서버 운영 경험",
        ],
    },
    {
        title: "State & Data",
        icon: <Database className="w-4 h-4 text-purple-600" />,
        color: "bg-purple-50",
        items: [
            "Zustand",
            "Axios",
            "React Query",
            "LocalStorage",
            "MySQL",
            "Oracle DB",
            "Firebase",
            "Mock API 서버 설계 경험",
        ],
    },
    {
        title: "Design & UX",
        icon: <Palette className="w-4 h-4 text-pink-600" />,
        color: "bg-pink-50",
        items: [
            "Figma 기반 협업",
            "UI 프로토타입 설계",
            "Storybook UI 문서화",
            "Tiptap",
            "AG Grid",
            "CKEditor 사용",
            "Lighthouse UX 성능 개선",
        ],
    },
    {
        title: "Communication & Collab",
        icon: <Users className="w-4 h-4 text-orange-500" />,
        color: "bg-orange-50",
        items: [
            "Notion",
            "Slack",
            "Discord",
            "Google Docs",
            "Git 브랜치 전략 (feature → develop → main)",
            "코드 리뷰 / PR 기반 협업",
        ],
    },
];

// ───── 컴포넌트 ─────
const TechStackSection = () => (
    <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Tech Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techStacks.map(({ title, icon, color, items }) => (
                <div
                    key={title}
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
                     rounded-xl p-5 hover:shadow-md transition-shadow"
                >
                    {/* 카드 헤더 */}
                    <div className="flex items-center gap-2 mb-4">
                        <span className={`p-1.5 rounded-full ${color}`}>
                            {icon}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                            {title}
                        </h3>
                        <span
                            className="ml-auto text-[11px] bg-gray-100 dark:bg-gray-700
                               text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-full"
                        >
                            {items.length}
                        </span>
                    </div>

                    {/* 기술 칩 리스트 */}
                    <ul className="flex flex-wrap gap-2">
                        {items.map(tech => (
                            <li
                                key={tech}
                                className="inline-flex items-center gap-1 px-2 py-1
                           bg-gray-50 dark:bg-gray-700 rounded text-xs
                           text-gray-700 dark:text-gray-200"
                                title={tech}
                            >
                                {iconMap[tech] ?? <Code2 className="w-3 h-3" />}
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </section>
);

export default TechStackSection;
