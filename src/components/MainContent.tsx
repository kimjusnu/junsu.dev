"use client";

import React from "react";
import HomeSection from "./sections/HomeSection";
import ExperienceSection from "./sections/ExperienceSection";
import CertificationSection from "./sections/CertificationSection";
import TechStackSection from "./sections/TechStackSection";
import AIAssistantSection from "./sections/AIAssistantSection";
/* 반드시! 새로 만든 목록·상세 컴포넌트 경로로 import */
import ProjectListSection from "./sections/ProjectListSection";
import ProjectDetailSection from "./sections/ProjectDetailSection";
import { projects } from "@/data/projectList";

interface MainContentProps {
    selectedCategory: string;
    selectedProjectId?: string;
    onSelectProject: (id: string) => void;
    onBackProject: () => void;
}

const MainContent = ({
    selectedCategory,
    selectedProjectId,
    onSelectProject,
    onBackProject,
}: MainContentProps) => {
    return (
        <main className="flex-1 px-8 py-6 overflow-y-auto">
            {selectedCategory === "Home" && <HomeSection />}
            {selectedCategory === "Skills" && <TechStackSection />}
            {selectedCategory === "Experience" && <ExperienceSection />}
            {selectedCategory === "Certifications" && <CertificationSection />}

            {selectedCategory === "Projects" &&
                (selectedProjectId ? (
                    /* 상세 보기 */
                    <ProjectDetailSection
                        project={
                            projects.find(
                                p => p.id === selectedProjectId
                            )! /* non-null */
                        }
                        onBack={onBackProject}
                    />
                ) : (
                    /* 목록(카드) 보기 */
                    <ProjectListSection onSelectProject={onSelectProject} />
                ))}
            {selectedCategory === "AI Assistant" && <AIAssistantSection />}
        </main>
    );
};

export default MainContent;
