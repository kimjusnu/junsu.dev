import React from "react";

interface HeaderProps {
    onLogoClick: () => void;
}

const Header = ({ onLogoClick }: HeaderProps) => (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        {/* 로고(이름) - 클릭 시 Home으로 */}
        <button
            onClick={onLogoClick}
            className="text-left focus:outline-none cursor-pointer"
            aria-label="Go to Home"
        >
            <h1 className="text-4xl font-bold text-gray-900">Junsu Kim</h1>
            <h2 className="text-xl text-gray-600 font-semibold -mt-1">
                Frontend Developer
            </h2>
        </button>
    </div>
);

export default Header;
