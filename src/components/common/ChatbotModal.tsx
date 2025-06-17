"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const ChatbotModal = ({ isOpen, onClose }: Props) => {
    const [prompt, setPrompt] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);

    const handleAsk = async () => {
        if (!prompt.trim()) return;
        setLoading(true);
        try {
            const res = await fetch("/api/ai-chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt }),
            });
            const data = await res.json();
            setAnswer(data.result);
        } catch (err) {
            console.error("AI 호출 실패:", err);
            setAnswer("❌ 오류가 발생했어요.");
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <div className="bg-white w-[90%] max-w-md rounded-xl p-6 relative shadow-lg">
                {/* 닫기 버튼 */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black"
                >
                    <X size={20} />
                </button>

                <h2 className="text-xl font-semibold mb-4">
                    AI 포트폴리오 도우미
                </h2>
                <p className="text-sm text-gray-700 mb-4">
                    포트폴리오나 프로젝트에 대해 궁금한 점을 질문해보세요!
                </p>

                <input
                    type="text"
                    value={prompt}
                    onChange={e => setPrompt(e.target.value)}
                    placeholder="예: 이 프로젝트는 어떤 기술을 사용했나요?"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none mb-3"
                />

                <button
                    onClick={handleAsk}
                    disabled={loading}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-sm font-medium"
                >
                    {loading ? "질문 중..." : "질문하기"}
                </button>

                {answer && (
                    <div className="mt-4 p-3 border border-gray-200 rounded text-sm text-gray-800 whitespace-pre-line">
                        {answer}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatbotModal;
