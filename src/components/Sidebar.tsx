"use client";

import React, { useState } from "react";
import { Mail, Github, Globe } from "lucide-react";
import ChatbotModal from "@/components/common/ChatbotModal";

interface SidebarCategory {
    label: string;
    icon: React.ReactNode;
}

interface SidebarProps {
    categories: SidebarCategory[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
}

const Sidebar = ({
    categories,
    selectedCategory,
    onSelectCategory,
}: SidebarProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <aside className="flex flex-col h-full justify-between text-gray-900 dark:text-white">
            <div>
                <section className="mb-6">
                    <h3 className="font-bold text-lg mb-2">카테고리</h3>
                    <ul>
                        {categories.map(({ label, icon }) => (
                            <li key={label}>
                                <div
                                    className={`cursor-pointer px-2 py-1 rounded mb-1 flex items-center gap-2 transition ${
                                        selectedCategory === label
                                            ? "bg-blue-200 font-bold dark:bg-blue-400/30"
                                            : "hover:bg-blue-50 dark:hover:bg-gray-700"
                                    }`}
                                    onClick={() => onSelectCategory(label)}
                                >
                                    {icon}
                                    <span>{label}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            <section className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 className="font-bold text-lg mb-2">Contact</h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
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
                            href="https://junsukim.substack.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                        >
                            junsukim.substack.com
                        </a>
                    </li>
                </ul>
            </section>

            <ChatbotModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </aside>
    );
};

export default Sidebar;
