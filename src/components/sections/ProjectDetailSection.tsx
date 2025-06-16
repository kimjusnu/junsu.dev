"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { Project } from "@/data/projectList";
import { techIcons } from "@/components/common/TechIcon";

interface Props {
    project: Project;
    onBack: () => void;
}

const ProjectDetailSection = ({ project, onBack }: Props) => {
    return (
        <section className="mb-12">
            {/* 🠔 Back */}
            <button
                onClick={onBack}
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer"
            >
                <ArrowLeft className="w-4 h-4" /> 돌아가기
            </button>

            {/* 제목 */}
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                {project.title}
            </h2>

            {/* 📌 프로젝트 개요 */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:shadow-md transition-shadow mb-6">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    📌 프로젝트 개요
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                    {project.description}
                </p>
            </div>

            {/* 🛠️ 기술 스택 */}
            {project.techs && (
                <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        🛠️ 기술 스택
                    </h3>
                    <div className="flex flex-wrap gap-2 text-sm">
                        {project.techs.map(tech => (
                            <span
                                key={tech}
                                className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-0.5 rounded-full border border-gray-200 dark:border-gray-600"
                            >
                                {techIcons[tech] ?? null}
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* 🔗 관련 링크 + 배포 통합 */}
            {(project.links?.length || project.url) && (
                <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                        🔗 관련 링크
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {[
                            ...(project.url
                                ? [
                                      {
                                          label: "서비스 방문하기",
                                          url: project.url,
                                      },
                                  ]
                                : []),
                            ...(project.links || []),
                        ].map((link, idx) => (
                            <a
                                key={`${link.url}-${idx}`}
                                href={link.url}
                                target="_blank"
                                className="inline-block bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 text-sm font-medium px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 transition"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProjectDetailSection;
