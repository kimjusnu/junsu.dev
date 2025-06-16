"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

// 사이드바 카테고리 정의
const sidebarCategories = [
    "Skills",
    "Experience",
    "Certifications",
    "Projects",
] as const;
type Category = "Home" | (typeof sidebarCategories)[number];

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState<Category>("Home");
    const [selectedProjectId, setSelectedProjectId] = useState<
        string | undefined
    >();

    /* ---------------- 핸들러 ---------------- */
    const handleCategorySelect = (cat: Category) => {
        setSelectedCategory(cat);
        if (cat === "Projects") {
            // 첫 진입 시 카드 리스트만 보여주고 싶다면 ↓ 이 줄 삭제
            // setSelectedProjectId(projects[0].id);
        } else {
            setSelectedProjectId(undefined);
        }
    };

    const handleSelectProject = (id: string) => {
        setSelectedCategory("Projects");
        setSelectedProjectId(id);
    };

    const handleBackProject = () => {
        setSelectedProjectId(undefined); // 카드 목록으로 복귀
    };

    /* -------------- 렌더링 -------------- */
    return (
        <div className="h-screen flex flex-col bg-gray-50">
            {/* 헤더 */}
            <header className="w-full border-b border-gray-300 bg-white">
                <div className="w-full py-8 pl-6">
                    <Header onLogoClick={() => handleCategorySelect("Home")} />
                </div>
            </header>

            {/* 본문 */}
            <div className="flex flex-1 h-full overflow-hidden">
                {/* 사이드바 */}
                <aside className="w-[280px] flex-shrink-0 bg-white border-r border-gray-200 py-8 px-6">
                    <Sidebar
                        categories={sidebarCategories as unknown as string[]}
                        selectedCategory={selectedCategory}
                        onSelectCategory={cat =>
                            handleCategorySelect(cat as Category)
                        }
                    />
                </aside>

                {/* 메인 콘텐츠 */}
                <main className="flex-1 overflow-y-auto px-6 md:px-12 py-6">
                    <MainContent
                        selectedCategory={selectedCategory}
                        selectedProjectId={selectedProjectId}
                        onSelectProject={handleSelectProject}
                        onBackProject={handleBackProject}
                    />
                </main>
            </div>
        </div>
    );
}
