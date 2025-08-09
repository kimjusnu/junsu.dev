"use client";

import React from "react";
import { Code2, Server, Database, Palette, Users } from "lucide-react";

// ───── react-icons ─────
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiEslint,
  SiPrettier,
  SiJenkins,
  SiGithubactions,
  SiAmazon,
  SiVercel,
  SiNetlify,
  SiNginx,
  SiAxios,
  SiFirebase,
  SiFigma,
  SiSlack,
  SiDiscord,
  SiNotion,
  SiReactquery,
} from "react-icons/si";
import { SiJira } from "react-icons/si";
import { FaWaveSquare } from "react-icons/fa";
import { MdStorage } from "react-icons/md";
// import { TbTableOptions } from "react-icons/tb";
// import { PiGitBranch } from "react-icons/pi";

// ───── label → icon 매핑 ─────
const iconMap: Record<string, React.ReactNode> = {
  // Languages & FW
  JavaScript: <SiJavascript color="#f7df1e" />,
  TypeScript: <SiTypescript color="#3178c6" />,
  React: <SiReact color="#61dafb" />,
  "Next.js": <SiNextdotjs />,

  // DevOps
  Git: <SiGit color="#f05032" />,
  GitHub: <SiGithub />,
  ESLint: <SiEslint color="#4b32c3" />,
  Prettier: <SiPrettier color="#f7b93e" />,
  PM2: <SiNginx color="#019639" />, // 대체
  Jenkins: <SiJenkins color="#d24939" />,
  "Github Actions (CI/CD)": <SiGithubactions />,
  "AWS (EC2, S3)": <SiAmazon color="#ff9900" />,
  Vercel: <SiVercel />,
  Netlify: <SiNetlify color="#00c7b7" />,

  // State & Data
  Zustand: <FaWaveSquare color="#ff6600" />,
  Axios: <SiAxios color="#5a29e4" />,
  "TanStack Query": <SiReactquery color="#ff4154" />,
  LocalStorage: <MdStorage color="#555" />,
  Firebase: <SiFirebase color="#ffca28" />,

  // Design & UX
  Figma: <SiFigma color="#f24e1e" />,

  // Comm & Collab
  Notion: <SiNotion />,
  Slack: <SiSlack color="#4a154b" />,
  Discord: <SiDiscord color="#5865f2" />,
  Jira: <SiJira color="#2684ff" />,
};

// ───── 카테고리 데이터 ─────
const techStacks = [
  {
    title: "Languages & Frameworks",
    icon: <Code2 className="w-4 h-4 text-blue-600" />,
    color: "bg-blue-50",
    items: ["JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "DevOps & Infra",
    icon: <Server className="w-4 h-4 text-green-600" />,
    color: "bg-green-50",
    items: [
      "Git",
      "ESLint",
      "Prettier",
      "PM2",
      "Jenkins",
      "Github Actions (CI/CD)",
      "AWS (EC2, S3)",
      "Vercel",
      "Netlify",
    ],
  },
  {
    title: "State & Data",
    icon: <Database className="w-4 h-4 text-purple-600" />,
    color: "bg-purple-50",
    items: ["Zustand", "Axios", "TanStack Query", "LocalStorage", "Firebase"],
  },
  {
    title: "Design & UX",
    icon: <Palette className="w-4 h-4 text-pink-600" />,
    color: "bg-pink-50",
    items: ["Figma"],
  },
  {
    title: "Communication & Collab",
    icon: <Users className="w-4 h-4 text-orange-500" />,
    color: "bg-orange-50",
    items: ["Notion", "Slack", "Discord", "GitHub", "Jira"],
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
            <span className={`p-1.5 rounded-full ${color}`}>{icon}</span>
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
            {items.map((tech) => (
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
