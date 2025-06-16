// components/Sidebar.tsx

import React from "react";
import { Mail, Github, Globe } from "lucide-react";

interface SidebarProps {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
}

const Sidebar = ({
    categories,
    selectedCategory,
    onSelectCategory,
}: SidebarProps) => {
    return (
        <aside className="flex flex-col h-full justify-between">
            {/* 카테고리 영역 */}
            <section className="mb-6">
                <h3 className="font-bold text-lg mb-2">카테고리</h3>
                <ul>
                    {categories.map(cat => (
                        <li key={cat}>
                            <div
                                className={`cursor-pointer px-2 py-1 rounded mb-1 flex items-center justify-between ${
                                    selectedCategory === cat
                                        ? "bg-blue-200 font-bold"
                                        : "hover:bg-blue-50"
                                }`}
                                onClick={() => onSelectCategory(cat)}
                            >
                                <span>{cat}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* ✅ Contact 영역 */}
            <section className="mt-10 border-t pt-6">
                <h3 className="font-bold text-lg mb-2">Contact</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex items-center gap-2">
                        <Mail size={16} />
                        <a
                            href="mailto:junsu4621@naver.com"
                            className="hover:underline"
                        >
                            junsu4621@naver.com
                        </a>
                    </li>
                    <li className="flex items-center gap-2">
                        <Github size={16} />
                        <a
                            href="https://github.com/kimjusnu"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                        >
                            github.com/kimjusnu
                        </a>
                    </li>
                    <li className="flex items-center gap-2">
                        <Globe size={16} />
                        <a
                            href="https://dietisdie.tistory.com"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                        >
                            dietisdie.tistory.com
                        </a>
                    </li>
                </ul>
            </section>
        </aside>
    );
};

export default Sidebar;
