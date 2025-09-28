"use client";

import React, { useState, useEffect, useCallback } from "react";
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

  // 이미지 프리로딩 함수
  const preloadImage = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new window.Image();
      img.onload = () => resolve();
      img.onerror = () => reject();
      img.src = src;
    });
  };

  // 프로젝트의 이미지들을 프리로딩
  const preloadProjectImages = useCallback(
    async (project: Project) => {
      const imageUrls = project.imageUrls || [project.imageUrl].filter(Boolean);
      if (!imageUrls || imageUrls.length <= 1) return;

      const projectId = project.id;
      const currentIndex = imageStates[projectId] || 0;

      // 현재 이미지 주변의 이미지들을 프리로딩
      const imagesToPreload = new Set<string>();

      // 이전 이미지
      const prevIndex =
        currentIndex === 0 ? imageUrls.length - 1 : currentIndex - 1;
      const prevImage = imageUrls[prevIndex];
      if (prevImage) imagesToPreload.add(prevImage);

      // 다음 이미지
      const nextIndex =
        currentIndex === imageUrls.length - 1 ? 0 : currentIndex + 1;
      const nextImage = imageUrls[nextIndex];
      if (nextImage) imagesToPreload.add(nextImage);

      // 현재 이미지도 프리로딩 (캐시용)
      const currentImage = imageUrls[currentIndex];
      if (currentImage) imagesToPreload.add(currentImage);

      // 프리로딩 실행
      const preloadPromises = Array.from(imagesToPreload).map((src) =>
        preloadImage(src).catch(() => {
          console.warn(`Failed to preload image: ${src}`);
        })
      );

      try {
        await Promise.all(preloadPromises);
        // 프리로딩 완료 (상태 표시 없이 백그라운드에서만 실행)
      } catch (error) {
        console.warn(
          `Failed to preload images for project ${projectId}:`,
          error
        );
      }
    },
    [imageStates]
  );

  // 컴포넌트 마운트 시 모든 프로젝트 이미지 프리로딩
  useEffect(() => {
    projects.forEach((project) => {
      preloadProjectImages(project);
    });
  }, [preloadProjectImages]);

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
            <div
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
                    className="object-cover transition-opacity duration-300"
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
                                   transition-all duration-200 cursor-pointer hover:scale-110 active:scale-95"
                        title="이전 이미지"
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
                                   transition-all duration-200 cursor-pointer hover:scale-110 active:scale-95"
                        title="다음 이미지"
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
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectListSection;
