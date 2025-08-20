"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projectList";
import { Project } from "@/data/types";
import { FileText, ChevronLeft, ChevronRight } from "lucide-react";
import { TechIcon } from "../common/TechIcon";

interface Props {
  onSelectProject: (id: string) => void;
}

const ProjectListSection = ({ onSelectProject }: Props) => {
  const [imageStates, setImageStates] = useState<{ [key: string]: number }>({});

  const handleImageChange = (projectId: string, direction: "prev" | "next") => {
    setImageStates((prev) => {
      const currentIndex = prev[projectId] || 0;
      const project = projects.find((p) => p.id === projectId);
      const imageUrls =
        project?.imageUrls || [project?.imageUrl].filter(Boolean);

      if (!imageUrls || imageUrls.length <= 1) return prev;

      let newIndex;
      if (direction === "prev") {
        newIndex = currentIndex === 0 ? imageUrls.length - 1 : currentIndex - 1;
      } else {
        newIndex = currentIndex === imageUrls.length - 1 ? 0 : currentIndex + 1;
      }

      return { ...prev, [projectId]: newIndex };
    });
  };

  const getCurrentImage = (project: Project) => {
    const imageUrls = project.imageUrls || [project.imageUrl].filter(Boolean);
    if (!imageUrls || imageUrls.length === 0) return null;

    const currentIndex = imageStates[project.id] || 0;
    return imageUrls[currentIndex];
  };

  const getImageCount = (project: Project) => {
    const imageUrls = project.imageUrls || [project.imageUrl].filter(Boolean);
    return imageUrls ? imageUrls.length : 0;
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Projects
      </h2>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((proj) => {
          const currentImage = getCurrentImage(proj);
          const imageCount = getImageCount(proj);
          const hasMultipleImages = imageCount > 1;

          return (
            <button
              key={proj.id}
              onClick={() => onSelectProject(proj.id)}
              className="text-left bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
                        rounded-xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer
                        overflow-hidden flex flex-col h-full"
            >
              {/* ✅ 텍스트 상단 - 고정 높이로 일정한 여백 확보 */}
              <div className="p-4 flex flex-col gap-2 h-20">
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

              {/* ✅ 이미지 - 슬라이더 기능 추가 */}
              {currentImage && (
                <div className="relative w-full aspect-[16/9] -mt-2 group">
                  <Image
                    src={currentImage}
                    alt={proj.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={proj.id === "componique"}
                  />

                  {/* 이미지 개수 표시 점들 */}
                  {hasMultipleImages && (
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                      {Array.from({ length: imageCount }).map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-2 h-2 rounded-full ${
                            idx === (imageStates[proj.id] || 0)
                              ? "bg-blue-500"
                              : "bg-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                  )}

                  {/* 호버시 화살표 */}
                  {hasMultipleImages && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleImageChange(proj.id, "prev");
                        }}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 
                                   text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 
                                   transition-opacity duration-200 cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleImageChange(proj.id, "next");
                        }}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 
                                   text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 
                                   transition-opacity duration-200 cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>
              )}

              {/* ✅ 기술 스택 - 아래 여백 추가 */}
              {proj.techs && (
                <div className="flex flex-wrap gap-2 px-4 py-3 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 mb-auto">
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
          );
        })}
      </div>
    </section>
  );
};

export default ProjectListSection;
