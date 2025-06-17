"use client";

import React from "react";
import {
    ArrowLeft,
    Users2,
    Github,
    Link as LinkIcon,
    Wrench,
} from "lucide-react";
import type { Project } from "@/data/types";
import { techIcons } from "@/components/common/TechIcon";
import ReactMarkdown from "react-markdown";

interface Props {
    project: Project;
    onBack: () => void;
}

const ProjectDetailSection = ({ project, onBack }: Props) => {
    const {
        techs = [],
        responsibilities = [],
        troubles = [],
        links = [],
    } = project;

    return (
        <section className="mb-16 space-y-10 max-w-4xl mx-auto px-4">
            {/* ◀ Back */}
            <button
                onClick={onBack}
                className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
                <ArrowLeft className="w-4 h-4" />
                돌아가기
            </button>

            {/* 헤드라인 */}
            <header className="text-center space-y-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                </h2>
                {project.subtitle && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                        {project.subtitle}
                    </p>
                )}
            </header>

            {/* 카드 묶음 */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* 프로젝트 정보 */}
                <div className="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm p-5">
                    <h3 className="flex items-center gap-1 text-sm font-semibold mb-4 text-gray-800 dark:text-gray-200">
                        <Users2 className="w-4 h-4" />
                        프로젝트 정보
                    </h3>
                    <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                        {project.team && (
                            <li className="flex justify-between items-center">
                                <span className="font-medium">참여 형태</span>
                                <span
                                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                                        project.team === "개인"
                                            ? "bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-200"
                                            : "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200"
                                    }`}
                                >
                                    {project.team}
                                </span>
                            </li>
                        )}
                        {project.role && (
                            <li className="flex justify-between">
                                <span className="font-medium">역할</span>
                                <span>{project.role}</span>
                            </li>
                        )}
                        {project.period && (
                            <li className="flex justify-between">
                                <span className="font-medium">기간</span>
                                <span>{project.period}</span>
                            </li>
                        )}
                    </ul>
                </div>

                {/* 기술 스택 */}
                {techs.length > 0 && (
                    <div className="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm p-5">
                        <h3 className="flex items-center gap-1 text-sm font-semibold mb-3 text-gray-800 dark:text-gray-200">
                            <Wrench className="w-4 h-4" />
                            기술 스택
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {techs.map(tech => (
                                <span
                                    key={tech}
                                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-200"
                                >
                                    {techIcons[tech] ?? null}
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* 본문 섹션들 */}
            {project.description && (
                <section className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        📌 프로젝트 개요
                    </h3>
                    <ReactMarkdown
                        components={{
                            p: ({ children }) => (
                                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                                    {children}
                                </p>
                            ),
                            strong: ({ children }) => (
                                <strong className="font-semibold text-gray-800 dark:text-gray-200">
                                    {children}
                                </strong>
                            ),
                            ul: ({ children }) => (
                                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300 mb-4">
                                    {children}
                                </ul>
                            ),
                            li: ({ children }) => <li>{children}</li>,
                            code: ({ children }) => (
                                <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-xs font-mono text-gray-900 dark:text-white">
                                    {children}
                                </code>
                            ),
                        }}
                    >
                        {project.description}
                    </ReactMarkdown>
                </section>
            )}

            {responsibilities.length > 0 && (
                <section className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        🗂️ 담당 업무
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        {responsibilities.map((task, i) => (
                            <li key={i}>{task}</li>
                        ))}
                    </ul>
                </section>
            )}

            {troubles.length > 0 && (
                <section className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        🛠️ 문제 해결 & 트러블슈팅
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        {troubles.map((t, i) => (
                            <li key={i}>{t}</li>
                        ))}
                    </ul>
                </section>
            )}

            {project.outcome && (
                <section className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        ✅ 결과 & 회고
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                        {project.outcome}
                    </p>
                </section>
            )}

            {(project.url || project.repo || links.length > 0) && (
                <section className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        🔗 관련 링크
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {project.url && (
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-sm border border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-800 transition"
                            >
                                <LinkIcon className="w-4 h-4" />
                                서비스 방문
                            </a>
                        )}
                        {project.repo && (
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                            >
                                <Github className="w-4 h-4" />
                                GitHub
                            </a>
                        )}
                        {links.map(({ label, url }, idx) => (
                            <a
                                key={`${url}-${idx}`}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </section>
            )}
        </section>
    );
};

export default ProjectDetailSection;
