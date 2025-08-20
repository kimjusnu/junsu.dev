"use client";

import React, { useState, useEffect } from "react";
import { Heart, MessageCircle, User, Calendar, Trash2 } from "lucide-react";

interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  timestamp: number;
  likes: number;
  isLiked: boolean;
}

const GuestbookSection = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 로컬 스토리지에서 방명록 불러오기
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("guestbook-entries");
      if (saved) {
        setEntries(JSON.parse(saved));
      }
    }
  }, []);

  // 방명록 저장
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("guestbook-entries", JSON.stringify(entries));
    }
  }, [entries]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    const newEntry: GuestbookEntry = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      timestamp: Date.now(),
      likes: 0,
      isLiked: false,
    };

    setEntries((prev) => [newEntry, ...prev]);
    setName("");
    setMessage("");
    setIsSubmitting(false);
  };

  const handleLike = (id: string) => {
    setEntries((prev) =>
      prev.map((entry) => {
        if (entry.id === id) {
          const isLiked = !entry.isLiked;
          return {
            ...entry,
            likes: isLiked ? entry.likes + 1 : entry.likes - 1,
            isLiked,
          };
        }
        return entry;
      })
    );
  };

  const handleDelete = (id: string) => {
    if (confirm("정말로 이 방명록을 삭제하시겠습니까?")) {
      setEntries((prev) => prev.filter((entry) => entry.id !== id));
    }
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* 헤더 */}
      <header className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          방명록 📝
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          방문해주셔서 감사합니다! 소중한 메시지를 남겨주세요 ✨
        </p>
      </header>

      {/* 방명록 작성 폼 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          방명록 남기기
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              이름 *
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="이름을 입력해주세요"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              메시지 *
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="소중한 메시지를 남겨주세요..."
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting || !name.trim() || !message.trim()}
            className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
          >
            {isSubmitting ? "등록 중..." : "방명록 등록"}
          </button>
        </form>
      </div>

      {/* 방명록 목록 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          방명록 목록 ({entries.length}개)
        </h3>

        {entries.length === 0 ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            <MessageCircle className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>아직 방명록이 없습니다.</p>
            <p className="text-sm">첫 번째 방명록을 남겨보세요! 🎉</p>
          </div>
        ) : (
          entries.map((entry) => (
            <div
              key={entry.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="font-medium text-gray-800 dark:text-white">
                    {entry.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(entry.timestamp)}
                  </span>
                  <button
                    onClick={() => handleDelete(entry.id)}
                    className="text-red-400 hover:text-red-600 transition-colors"
                    title="삭제"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 whitespace-pre-wrap">
                {entry.message}
              </p>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => handleLike(entry.id)}
                  className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm transition-colors ${
                    entry.isLiked
                      ? "text-red-500 bg-red-50 dark:bg-red-900/20"
                      : "text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 ${entry.isLiked ? "fill-current" : ""}`}
                  />
                  <span>{entry.likes}</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GuestbookSection;
