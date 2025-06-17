"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import { Bot, BookOpen, Briefcase, Award, LayoutTemplate } from "lucide-react";

// 사이드바 카테고리
const sidebarCategories = [
    { label: "Skills", icon: <BookOpen size={16} /> },
    { label: "Experience", icon: <Briefcase size={16} /> },
    { label: "Certifications", icon: <Award size={16} /> },
    { label: "Projects", icon: <LayoutTemplate size={16} /> },
    { label: "AI Assistant", icon: <Bot size={16} /> },
];

type Category = "Home" | (typeof sidebarCategories)[number]["label"];

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState<Category>("Home");
    const [selectedProjectId, setSelectedProjectId] = useState<
        string | undefined
    >();

    const handleCategorySelect = (cat: Category) => {
        setSelectedCategory(cat);
        if (cat !== "Projects") setSelectedProjectId(undefined);
    };

    const handleSelectProject = (id: string) => {
        setSelectedCategory("Projects");
        setSelectedProjectId(id);
    };

    const handleBackProject = () => {
        setSelectedProjectId(undefined);
    };

    return (
        <div className="h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
            <header className="w-full border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800">
                <div className="w-full py-8 pl-6">
                    <Header onLogoClick={() => handleCategorySelect("Home")} />
                </div>
            </header>

            <div className="flex flex-1 h-full overflow-hidden">
                <aside className="w-[280px] flex-shrink-0 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 py-8 px-6">
                    <Sidebar
                        categories={sidebarCategories}
                        selectedCategory={selectedCategory}
                        onSelectCategory={handleCategorySelect}
                    />
                </aside>

                <main className="flex-1 overflow-y-auto px-6 md:px-12 py-6 bg-gray-50 dark:bg-gray-900">
                    <MainContent
                        selectedCategory={selectedCategory}
                        selectedProjectId={selectedProjectId}
                        onSelectProject={handleSelectProject}
                        onBackProject={handleBackProject}
                    />
                    {/* 👇 푸터 텍스트 추가 */}
                    <div className="mt-12 text-center text-xs text-gray-400 dark:text-gray-500">
                        ©2025 JunsuKim. All rights reserved. <br />
                        Built with Next.js, TypeScript, and Tailwind CSS.
                    </div>
                </main>
            </div>
        </div>
    );
}
