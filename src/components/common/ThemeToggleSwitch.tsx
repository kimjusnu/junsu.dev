"use client";

import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const ThemeToggleSwitch = () => {
  const [isDark, setIsDark] = useState(false);

  // 초기 테마 설정
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialIsDark = stored === "dark" || (!stored && prefersDark);
    setIsDark(initialIsDark);
    updateHtmlClass(initialIsDark);
  }, []);

  // 상태 변화 시 HTML 태그 클래스 업데이트
  const updateHtmlClass = (dark: boolean) => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    }
  };

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    updateHtmlClass(newMode);
  };

  return (
    <div
      className="flex items-center space-x-2 cursor-pointer"
      onClick={toggleTheme}
    >
      <div
        className={`flex h-8 w-14 items-center rounded-full p-1 shadow-inner transition-colors duration-300 ${
          isDark ? "bg-gray-800" : "bg-gray-200"
        }`}
      >
        <div
          className={`h-6 w-6 transform rounded-full transition-all duration-300 ${
            isDark ? "translate-x-6 bg-yellow-400" : "translate-x-1 bg-blue-500"
          }`}
        />
      </div>
      {isDark ? (
        <FaMoon className="text-yellow-300" />
      ) : (
        <BsSunFill className="text-blue-500" />
      )}
    </div>
  );
};

export default ThemeToggleSwitch;
