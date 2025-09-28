"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  Users2,
  Github,
  Link as LinkIcon,
  Wrench,
  Calendar,
  User,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Code2,
  Briefcase,
  Trophy,
  FileText,
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

  const [activeTab, setActiveTab] = useState("overview");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 이미지 관련 로직
  const imageUrls = project.imageUrls || [project.imageUrl].filter(Boolean);
  const hasMultipleImages = imageUrls && imageUrls.length > 1;

  const nextImage = () => {
    if (hasMultipleImages) {
      setCurrentImageIndex((prev) =>
        prev === imageUrls.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (hasMultipleImages) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? imageUrls.length - 1 : prev - 1
      );
    }
  };

  const tabs = [
    { id: "overview", label: "개요", icon: FileText },
    { id: "tech", label: "기술", icon: Code2 },
    { id: "experience", label: "경험", icon: Briefcase },
    { id: "result", label: "결과", icon: Trophy },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 히어로 섹션 */}
      <div className="relative">
        {/* 배경 이미지 */}
        {imageUrls && imageUrls.length > 0 && imageUrls[currentImageIndex] && (
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            <Image
              src={imageUrls[currentImageIndex]}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* 이미지 네비게이션 */}
            {hasMultipleImages && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* 이미지 인디케이터 */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {imageUrls.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        idx === currentImageIndex
                          ? "bg-white scale-125"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* 백 버튼 */}
        <button
          onClick={onBack}
          className="absolute top-6 left-6 z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 hover:bg-black/70 text-white text-sm font-medium transition-all duration-200 backdrop-blur-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          돌아가기
        </button>

        {/* 프로젝트 제목과 메타 정보 */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="text-lg text-gray-200 mb-6 max-w-2xl">
                {project.subtitle}
              </p>
            )}

            {/* 메타 정보 카드 */}
            <div className="flex flex-wrap gap-4">
              {project.team && (
                <div className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
                  <Users2 className="w-4 h-4" />
                  {project.team}
                </div>
              )}
              {project.role && (
                <div className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
                  <User className="w-4 h-4" />
                  {project.role}
                </div>
              )}
              {project.period && (
                <div className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
                  <Calendar className="w-4 h-4" />
                  {project.period}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* 탭 네비게이션 */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 dark:border-gray-700">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-t-lg transition-all duration-200 ${
                  activeTab === tab.id
                    ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 탭 컨텐츠 */}
        <div className="space-y-8">
          {/* 개요 탭 */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {project.description && (
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <ReactMarkdown
                    components={{
                      p: ({ children }) => (
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                          {children}
                        </p>
                      ),
                      strong: ({ children }) => (
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {children}
                        </strong>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                          {children}
                        </ul>
                      ),
                      li: ({ children }) => <li>{children}</li>,
                      code: ({ children }) => (
                        <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-gray-900 dark:text-white">
                          {children}
                        </code>
                      ),
                    }}
                  >
                    {project.description}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          )}

          {/* 기술 탭 */}
          {activeTab === "tech" && (
            <div className="space-y-6">
              {techs.length > 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Wrench className="w-5 h-5" />
                    사용 기술
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {techs.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-700 text-blue-800 dark:text-blue-200 font-medium"
                      >
                        {techIcons[tech] ?? null}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 경험 탭 */}
          {activeTab === "experience" && (
            <div className="space-y-6">
              {responsibilities.length > 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    담당 업무
                  </h3>
                  <ul className="space-y-3">
                    {responsibilities.map((task, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {troubles.length > 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Wrench className="w-5 h-5" />
                    문제 해결 & 트러블슈팅
                  </h3>
                  <ul className="space-y-3">
                    {troubles.map((t, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* 결과 탭 */}
          {activeTab === "result" && (
            <div className="space-y-6">
              {project.outcome && (
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    결과 & 회고
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                    {project.outcome}
                  </p>
                </div>
              )}

              {/* 링크 섹션 */}
              {(project.url || project.repo || links.length > 0) && (
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <LinkIcon className="w-5 h-5" />
                    관련 링크
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 hover:scale-105 shadow-lg"
                      >
                        <ExternalLink className="w-4 h-4" />
                        서비스 방문
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-900 text-white font-medium transition-all duration-200 hover:scale-105 shadow-lg"
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
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium transition-all duration-200 hover:scale-105"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailSection;
