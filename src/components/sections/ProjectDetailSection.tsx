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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-sm font-medium bg-white text-gray-700 hover:bg-gray-100 transition cursor-pointer"
            >
                <ArrowLeft className="w-4 h-4" />
                돌아가기
            </button>

            {/* 헤드라인 */}
            <header className="text-center space-y-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    {project.title}
                </h2>
                {project.subtitle && (
                    <p className="text-sm text-gray-600 max-w-xl mx-auto">
                        {project.subtitle}
                    </p>
                )}
            </header>

            {/* ───────── 카드 묶음: 프로젝트 정보 + 기술 스택 ───────── */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* 프로젝트 정보 */}
                <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-5">
                    <h3 className="flex items-center gap-1 text-sm font-semibold mb-4 text-gray-800">
                        <Users2 className="w-4 h-4" />
                        프로젝트 정보
                    </h3>
                    <ul className="text-sm space-y-2 text-gray-700">
                        {project.team && (
                            <li className="flex justify-between items-center">
                                <span className="font-medium">참여 형태</span>
                                <span
                                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                                        project.team === "개인"
                                            ? "bg-purple-100 text-purple-700"
                                            : "bg-blue-100 text-blue-700"
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
                    <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-5">
                        <h3 className="flex items-center gap-1 text-sm font-semibold mb-3 text-gray-800">
                            <Wrench className="w-4 h-4" />
                            기술 스택
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {techs.map(tech => (
                                <span
                                    key={tech}
                                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-gray-100 border border-gray-200 text-gray-800"
                                >
                                    {techIcons[tech] ?? null}
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* ───────── 본문 섹션들 ───────── */}
            {project.description && (
                <section className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                        📌 프로젝트 개요
                    </h3>
                    <ReactMarkdown
                        components={{
                            p: ({ children }) => (
                                <p className="text-sm leading-relaxed text-gray-700 mb-4">
                                    {children}
                                </p> // ← 여기 mb-4로 변경
                            ),
                            strong: ({ children }) => (
                                <strong className="font-semibold text-gray-800">
                                    {children}
                                </strong>
                            ),
                            ul: ({ children }) => (
                                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
                                    {children}
                                </ul>
                            ),
                            li: ({ children }) => <li>{children}</li>,
                            code: ({ children }) => (
                                <code className="bg-gray-100 px-1 py-0.5 rounded text-xs font-mono">
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
                    <h3 className="text-xl font-semibold text-gray-900">
                        🗂️ 담당 업무
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                        {responsibilities.map((task, i) => (
                            <li key={i}>{task}</li>
                        ))}
                    </ul>
                </section>
            )}

            {troubles.length > 0 && (
                <section className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                        🛠️ 문제 해결 & 트러블슈팅
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                        {troubles.map((t, i) => (
                            <li key={i}>{t}</li>
                        ))}
                    </ul>
                </section>
            )}

            {project.outcome && (
                <section className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                        ✅ 결과 & 회고
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-700 whitespace-pre-line">
                        {project.outcome}
                    </p>
                </section>
            )}

            {(project.url || project.repo || links.length > 0) && (
                <section className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                        🔗 관련 링크
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {project.url && (
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-50 text-blue-700 text-sm border border-blue-200 hover:bg-blue-100 transition"
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
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 text-gray-800 text-sm border border-gray-300 hover:bg-gray-200 transition"
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
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 text-gray-800 text-sm border border-gray-300 hover:bg-gray-200 transition"
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
