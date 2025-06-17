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
    SiJavascript,
    SiAxios,
    SiMysql,
    SiOracle,
    SiReactquery,
    SiPostman,
    SiEslint,
    SiPrettier,
    SiDocker,
    SiAmazon,
    SiNetlify,
    SiUbuntu,
    SiHtml5,
    SiCss3,
    SiSass,
    SiStyledcomponents,
    SiPython,
    SiC,
    SiCplusplus,
    SiSlack,
    SiDiscord,
    SiNotion,
    SiGoogledocs,
    SiLighthouse,
    SiStorybook,
} from "react-icons/si";

import { FaCube, FaPenNib } from "react-icons/fa";
import { MdStorage } from "react-icons/md";
import { TbTableOptions } from "react-icons/tb";
import { PiGitBranch } from "react-icons/pi";
import { SiJenkins as JenkinsIcon } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { MdOutlineHttp } from "react-icons/md";
import { SiGithub, SiGithubactions } from "react-icons/si";

// ✅ iconMap 정의 (컬러 포함)
export const iconMap: Record<string, React.ReactElement> = {
    // 기본 프론트엔드
    "Next.js": <SiNextdotjs />,
    "Next.js (App Router, SSR, CSR, PWA)": <SiNextdotjs />,
    TypeScript: <SiTypescript color="#3178c6" />,
    JavaScript: <SiJavascript color="#f7df1e" />,
    React: <SiReact color="#61dafb" />,
    TailwindCSS: <SiTailwindcss color="#38bdf8" />,
    NPM: <SiNpm color="#cb0000" />,
    Zustand: <FaCube color="#ff6600" />,
    MUI: <SiMui color="#007fff" />,
    Figma: <SiFigma color="#f24e1e" />,
    Vercel: <SiVercel />,
    Firebase: <SiFirebase color="#ffca28" />,
    HTML5: <SiHtml5 color="#e34f26" />,
    CSS3: <SiCss3 color="#1572b6" />,
    Sass: <SiSass color="#cc6699" />,
    "Styled-Components": <SiStyledcomponents color="#db7093" />,
    Python: <SiPython color="#3776ab" />,
    C: <SiC color="#00599c" />,
    "C++": <SiCplusplus color="#00599c" />,

    // 상태관리/서버
    Axios: <SiAxios color="#5a29e4" />,
    MySQL: <SiMysql color="#4479a1" />,
    "Oracle DB": <SiOracle color="#f80000" />,
    "React Query": <SiReactquery color="#ff4154" />,
    "Mock API 서버 설계 경험": <SiPostman color="#ff6c37" />,
    LocalStorage: <MdStorage color="#555" />,

    // ─ SEO
    "SEO 최적화 경험": <FaSearch color="#4a4a4a" />,

    // ─ REST API
    "REST API": <MdOutlineHttp color="#3c3c3c" />,
    "REST API 설계 및 연동": <MdOutlineHttp color="#3c3c3c" />,
    "RESTful API": <MdOutlineHttp color="#3c3c3c" />,

    // 협업 도구
    GitHub: <SiGithub />,
    ESLint: <SiEslint color="#4b32c3" />,
    Prettier: <SiPrettier color="#f7b93e" />,
    Docker: <SiDocker color="#2496ed" />,
    Jenkins: <JenkinsIcon color="#d24939" />,
    "Github Actions (CI/CD)": <SiGithubactions />,
    "AWS (EC2, S3)": <SiAmazon color="#ff9900" />,
    Netlify: <SiNetlify color="#00c7b7" />,
    "Ubuntu 서버 운영 경험": <SiUbuntu color="#e95420" />,

    // ─ GitHub 관련
    "GitHub API 연동": <SiGithub />,
    "GitHub Actions": <SiGithubactions />,

    Notion: <SiNotion />,
    Slack: <SiSlack color="#4a154b" />,
    Discord: <SiDiscord color="#5865f2" />,
    "Google Docs": <SiGoogledocs color="#1a73e8" />,

    // UI & 도구
    Tiptap: <FaPenNib color="#6e56cf" />,
    "CKEditor 사용": <FaPenNib />,
    "AG Grid": <TbTableOptions color="#1e88e5" />,
    "Storybook UI 문서화": <SiStorybook color="#ff4785" />,
    "Lighthouse UX 성능 개선": <SiLighthouse color="#4285f4" />,
    "UI 프로토타입 설계": <SiFigma color="#a259ff" />,
    "Figma 기반 협업": <SiFigma color="#f24e1e" />,

    // 협업 전략
    "Git 브랜치 전략 (feature → develop → main)": <PiGitBranch />,
    "코드 리뷰 / PR 기반 협업": <SiGithub />,
};

// ✅ 단일 아이콘 컴포넌트
export const TechIcon = ({ tech }: { tech: string }) => iconMap[tech] ?? null;

// ✅ alias export
export const techIcons = iconMap;
