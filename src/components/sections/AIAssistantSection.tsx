"use client";

import React, { useState, useRef, useEffect } from "react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
    estimated_cost: string;
  };
}

const AIAssistantSection = () => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // 1. 이전 대화 불러오기
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("ai-chat-messages");
      if (saved) setMessages(JSON.parse(saved));
    }
  }, []);

  // 2. 메시지 저장
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("ai-chat-messages", JSON.stringify(messages));
    }
  }, [messages]);

  // 3. 메시지 입력 시 자동 스크롤
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleAsk = async () => {
    if (!prompt.trim()) return;

    const userMsg: ChatMessage = { role: "user", content: prompt };
    setMessages((prev) => [...prev, userMsg]);
    setPrompt("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();

      const aiMsg: ChatMessage = {
        role: "assistant",
        content: data.result,
        usage: data.usage,
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error("AI 호출 실패:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "❌ 답변을 가져오는 중 오류가 발생했어요. 잠시 후 다시 시도해주세요.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleAsk();
  };

  return (
    <div className="h-full flex flex-col max-w-2xl mx-auto px-4 py-6">
      {/* 헤더 */}
      <header className="pb-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          AI 포트폴리오 상담 도우미
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
          👋 궁금한 점이 있다면 편하게 물어보세요!
          <br />이 페이지에 소개된 프로젝트, 경험, 기술 등에 대해 AI가
          답변해드립니다.
        </p>
      </header>

      {/* 메시지 리스트 */}
      <section className="flex-1 overflow-y-auto space-y-4 pr-2 mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg text-sm max-w-[75%] whitespace-pre-wrap break-words ${
                msg.role === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
              }`}
            >
              {msg.content}
              {msg.usage && (
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-2 pt-2 border-t border-gray-200 dark:border-gray-600">
                  💰 비용: {msg.usage.estimated_cost}
                  (토큰: {msg.usage.total_tokens})
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </section>

      {/* 입력창 */}
      <footer className="flex gap-2 border-t pt-4 border-gray-300 dark:border-gray-600">
        <input
          type="text"
          className="flex-1 border px-3 py-2 rounded text-sm bg-white text-gray-800 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          placeholder="예: 이 프로젝트에서 어떤 역할을 했나요?"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleAsk}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm"
        >
          {loading ? "..." : "전송"}
        </button>
      </footer>
    </div>
  );
};

export default AIAssistantSection;
