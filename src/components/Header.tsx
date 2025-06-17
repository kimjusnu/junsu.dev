"use client";

import React from "react";

interface HeaderProps {
    onLogoClick: () => void;
}

/**
 * Header 컴포넌트 — 로고(홈 이동) + 다크모드 토글 스위치
 * 1. 로고 클릭 → Home 이동 (prop 으로 전달)
 * 2. 스위치 클릭 → html 클래스를 light/dark 전환 (Tailwind darkMode: 'class')
 */
const Header = ({ onLogoClick }: HeaderProps) => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-2 ml-4">
            {/* 왼쪽: 이름 */}
            <button
                onClick={onLogoClick}
                className="text-left focus:outline-none cursor-pointer"
                aria-label="Go to Home"
            >
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                    Junsu Kim
                </h1>
                <h2 className="text-xl text-gray-600 dark:text-gray-300 font-semibold -mt-1">
                    Frontend Developer
                </h2>
            </button>

            {/* 오른쪽: 다크모드 스위치 */}
        </div>
    );
};

export default Header;
