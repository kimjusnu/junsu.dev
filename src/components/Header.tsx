"use client";

import React from "react";
// import ThemeToggleSwitch from "@/components/common/ThemeToggleSwitch";
interface HeaderProps {
  onLogoClick: () => void;
}

const Header = ({ onLogoClick }: HeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-2 ml-4 ">
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
      {/* <div className="mt-4 md:mt-0 md:mr-4">
                <ThemeToggleSwitch />
            </div> */}
    </div>
  );
};

export default Header;
