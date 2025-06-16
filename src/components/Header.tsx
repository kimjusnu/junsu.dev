"use client";

import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

interface HeaderProps {
    onLogoClick: () => void;
}

/**
 * Header 컴포넌트 — 로고(홈 이동) + 다크모드 토글 스위치
 * 1. 로고 클릭 → Home 이동 (prop 으로 전달)
 * 2. 스위치 클릭 → html 클래스를 light/dark 전환 (Tailwind darkMode: 'class')
 */
const Header = ({ onLogoClick }: HeaderProps) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // 다크모드 클래스 토글
    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle("dark", isDarkMode);
        root.classList.toggle("light", !isDarkMode);
    }, [isDarkMode]);

    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-6">
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
            <div className="mt-4 md:mt-0 mr-8">
                <label className="relative inline-block w-14 h-8 cursor-pointer select-none">
                    <input
                        type="checkbox"
                        checked={isDarkMode}
                        onChange={() => setIsDarkMode(prev => !prev)}
                        className="sr-only peer"
                    />
                    {/* 배경 바 */}
                    <div className="w-full h-full bg-gray-300 dark:bg-gray-700 rounded-full peer-checked:bg-blue-400 transition-colors" />
                    {/* 움직이는 원 + 아이콘 */}
                    <div
                        className="absolute top-1 left-1 h-6 w-6 bg-white rounded-full flex items-center justify-center text-yellow-500
                       peer-checked:translate-x-6 peer-checked:text-blue-800 transition-transform"
                    >
                        {isDarkMode ? (
                            <FaMoon size={14} />
                        ) : (
                            <FaSun size={14} />
                        )}
                    </div>
                </label>
            </div>
        </div>
    );
};

export default Header;
