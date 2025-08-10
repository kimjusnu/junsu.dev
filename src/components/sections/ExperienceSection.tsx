"use client";

import React from "react";
import {
  Briefcase,
  GraduationCap,
  MonitorSmartphone,
  UserCheck,
  ShieldCheck,
} from "lucide-react";

const experiences = [
  {
    date: "2025.07.21 – 현재",
    title: "Aimbe Lab · SW Team",
    role: "프론트엔드 개발",
    icon: <Briefcase className="w-4 h-4 text-blue-600" />,
    details: ["프론트엔드 개발"],
  },
  {
    date: "2025.03.04 – 2025.06.30",
    title: "더이노베이터스 · TA 기술연구부서",
    role: "인턴",
    icon: <Briefcase className="w-4 h-4 text-blue-600" />,
    details: [
      "프론트엔드 개발",
      "React·Next.js 기반 신규 기능 설계/개발",
      "CI/CD 파이프라인 고도화 및 배포 자동화",
    ],
  },
  {
    date: "2024.09.20 – 2024.11.01",
    title: "스나이퍼팩토리 프론트엔드 3기 부트캠프",
    role: "수료",
    icon: <GraduationCap className="w-4 h-4 text-purple-600" />,
    details: [
      "프론트엔드 전반 심화 학습",
      "팀 프로젝트 리더로 전체 일정 및 UI 개발 총괄",
      "우수상 수상",
    ],
  },
  {
    date: "2024.07.01 – 2024.09.13",
    title: "웅진씽크빅 × Udemy Next.js 부트캠프",
    role: "수료",
    icon: <GraduationCap className="w-4 h-4 text-purple-600" />,
    details: [
      "Next.js 집중 교육 수료 후 실전 프로젝트 완수 (전체 FE 담당)",
      "2등 우수상 수상",
    ],
  },
  {
    date: "2025.01 – 현재",
    title: "와이즈만 영재학원",
    role: "물리 강사",
    icon: <MonitorSmartphone className="w-4 h-4 text-green-600" />,
    details: ["초·중·고 대상 물리 수업", "내신·수능 대비"],
  },
  {
    date: "2022.12.01 – 2025.02.29",
    title: "한국공학대학교 현장실습 서포터즈 1·2·3기",
    role: "1·2기 단원 / 3기 부단장",
    icon: <UserCheck className="w-4 h-4 text-orange-500" />,
    details: ["실습 지원 및 캠퍼스 홍보 콘텐츠 제작"],
  },
  {
    date: "2021.06.07~2022.12.06",
    title: "대한민국 육군 병장 만기전역 (53사단)",
    role: "병장",
    icon: <ShieldCheck className="w-4 h-4 text-gray-600" />,
    details: ["부산 호국훈련 전략기획 피피티 제작 후 발표"],
  },
  {
    date: "2020.03 – 2026.02 (예정)",
    title: "한국공학대학교 컴퓨터공학부 소프트웨어전공",
    role: "학사과정",
    icon: <GraduationCap className="w-4 h-4 text-indigo-500" />,
    details: ["학점 3.6/4.5"],
  },
];

const ExperienceSection = () => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        Experience
      </h2>
      <ul className="space-y-6">
        {experiences.map((exp, index) => (
          <li
            key={index}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:shadow-md transition-shadow"
          >
            {/* 상단 타이틀 라인 */}
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-700">
                  {exp.icon}
                </div>
                <h3 className="font-semibold text-base text-gray-900 dark:text-white">
                  {exp.title}
                </h3>
              </div>

              {/* 오른쪽 날짜 + 역할 */}
              <div className="flex flex-wrap gap-2 items-start justify-end text-xs">
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-0.5 rounded-full">
                  {exp.date}
                </span>
                <span className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-2 py-0.5 rounded-full">
                  {exp.role}
                </span>
              </div>
            </div>

            {/* 상세 설명 */}
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200 space-y-1 pl-1">
              {exp.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExperienceSection;
