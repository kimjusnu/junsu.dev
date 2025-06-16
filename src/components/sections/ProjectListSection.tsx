"use client";

import React from "react";
import Image from "next/image";
import { projects } from "@/data/projectList";
import { FileText } from "lucide-react";
import { TechIcon } from "../common/TechIcon";

interface Props {
    onSelectProject: (id: string) => void;
}

const ProjectListSection = ({ onSelectProject }: Props) => (
    <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            Projects
        </h2>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map(proj => (
                <button
                    key={proj.id}
                    onClick={() => onSelectProject(proj.id)}
                    className="text-left bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
                    rounded-xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer
                    overflow-hidden flex flex-col"
                >
                    {/* ✅ 텍스트 상단 */}
                    <div className="p-4 flex flex-col gap-2 flex-grow">
                        <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-blue-600" />
                            <h3 className="font-semibold text-sm text-gray-900 dark:text-white line-clamp-1">
                                {proj.title}
                            </h3>
                        </div>

                        <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                            {proj.summary}
                        </p>
                    </div>

                    {/* ✅ 이미지 하단 */}
                    {proj.imageUrl && (
                        <div className="relative w-full aspect-[16/9]">
                            <Image
                                src={proj.imageUrl}
                                alt={proj.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                                priority={proj.id === "componique"}
                            />
                        </div>
                    )}

                    {/* ✅ 기술 스택 */}
                    {proj.techs && (
                        <div className="flex flex-wrap gap-2 px-4 py-3 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                            {proj.techs.map((tech, idx) => (
                                <span
                                    key={`${proj.id}-${idx}`}
                                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs
                                    bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
                                >
                                    <TechIcon tech={tech} />
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}
                </button>
            ))}
        </div>
    </section>
);

export default ProjectListSection;
