"use client";

import React, { useState, useEffect } from "react";
import { Heart, MessageCircle, Edit, Trash2 } from "lucide-react";
import { GuestbookEntry } from "@/lib/supabase";
import { getClientIP } from "@/lib/utils";

const GuestbookSection = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editingEntry, setEditingEntry] = useState<GuestbookEntry | null>(null);
  const [currentUserIP, setCurrentUserIP] = useState<string>("");

  // 현재 사용자 IP 주소 가져오기
  useEffect(() => {
    const fetchIP = async () => {
      const ip = await getClientIP();
      setCurrentUserIP(ip);
    };
    fetchIP();
  }, []);

  // 방명록 불러오기
  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await fetch("/api/guestbook");
      if (response.ok) {
        const data = await response.json();
        setEntries(data);
      }
    } catch (error) {
      console.error("방명록 불러오기 실패:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/guestbook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          message: message.trim(),
          authorId: currentUserIP,
        }),
      });

      if (response.ok) {
        const newEntry = await response.json();
        setEntries((prev) => [newEntry, ...prev]);
        setName("");
        setMessage("");
      } else {
        alert("방명록 작성에 실패했습니다.");
      }
    } catch (error) {
      console.error("방명록 작성 오류:", error);
      alert("방명록 작성에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (entry: GuestbookEntry) => {
    setEditingEntry(entry);
    setName(entry.name);
    setMessage(entry.message);
    setIsEditing(true);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    if (!editingEntry) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/guestbook/${editingEntry.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          message: message.trim(),
          authorId: currentUserIP,
        }),
      });

      if (response.ok) {
        const updatedEntry = await response.json();
        setEntries((prev) =>
          prev.map((entry) =>
            entry.id === editingEntry.id ? updatedEntry : entry
          )
        );
        setEditingEntry(null);
        setIsEditing(false);
        setName("");
        setMessage("");
      } else {
        alert("방명록 수정에 실패했습니다.");
      }
    } catch (error) {
      console.error("방명록 수정 오류:", error);
      alert("방명록 수정에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("정말로 이 방명록을 삭제하시겠습니까?")) {
      return;
    }

    try {
      const response = await fetch(`/api/guestbook/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          authorId: currentUserIP,
        }),
      });

      if (response.ok) {
        setEntries((prev) => prev.filter((entry) => entry.id !== id));
      } else {
        alert("방명록 삭제에 실패했습니다.");
      }
    } catch (error) {
      console.error("방명록 삭제 오류:", error);
      alert("방명록 삭제에 실패했습니다.");
    }
  };

  const handleLike = async (id: string) => {
    try {
      const response = await fetch(`/api/guestbook/${id}`, {
        method: "PATCH",
      });

      if (response.ok) {
        const updatedEntry = await response.json();
        setEntries((prev) =>
          prev.map((entry) => (entry.id === id ? updatedEntry : entry))
        );
      }
    } catch (error) {
      console.error("좋아요 업데이트 오류:", error);
    }
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-6 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          방명록을 불러오는 중...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* 헤더 */}

      {/* 방명록 목록 (위쪽) */}
      <div className="space-y-4 mb-8">
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
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              {/* 헤더 */}
              <div className="p-4 h-20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {entry.name}
                    </h3>
                    <button
                      onClick={() => handleLike(entry.id)}
                      className="flex items-center gap-1 px-2 py-1 rounded-full text-sm text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          entry.likes && entry.likes > 0
                            ? "text-red-500 fill-current"
                            : "text-gray-400"
                        }`}
                      />
                      <span>{entry.likes || 0}</span>
                    </button>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {formatDate(entry.created_at)}
                  </span>
                </div>
                <hr className="mt-4 border-gray-200 dark:border-gray-700" />
              </div>

              {/* 메시지 내용 */}
              <div className="px-4 pb-4">
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                  {entry.message}
                </p>
              </div>

              {/* 수정/삭제 버튼 */}
              <div className="flex items-center justify-end gap-2 px-4 pb-4">
                {entry.ip_address === currentUserIP && (
                  <>
                    <button
                      onClick={() => handleEdit(entry)}
                      className="flex items-center gap-1 px-2 py-1 rounded-full text-sm text-gray-500 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                      수정
                    </button>
                    <button
                      onClick={() => handleDelete(entry.id)}
                      className="flex items-center gap-1 px-2 py-1 rounded-full text-sm text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      삭제
                    </button>
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* 구분선 */}
      <hr className="border-gray-200 dark:border-gray-700 mb-8" />

      {/* 방명록 작성 폼 (아래쪽) */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* 헤더 */}
        <div className="p-4 flex flex-col gap-2 h-20">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {isEditing ? "방명록 수정" : "방명록 남기기"}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {isEditing
              ? "소중한 메시지를 수정해주세요"
              : "소중한 메시지를 남겨주세요"}
          </p>
        </div>

        {/* 입력 폼 */}
        <div className="px-4 pb-4">
          <form
            onSubmit={isEditing ? handleUpdate : handleSubmit}
            className="space-y-4"
          >
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
              {isSubmitting
                ? "등록 중..."
                : isEditing
                ? "방명록 수정"
                : "방명록 등록"}
            </button>

            {isEditing && (
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setEditingEntry(null);
                  setName("");
                  setMessage("");
                }}
                className="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
              >
                취소
              </button>
            )}
          </form>
        </div>

        {/* 하단 여백 */}
        <div className="flex flex-wrap gap-2 px-4 py-3 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 mb-6"></div>
      </div>
    </div>
  );
};

export default GuestbookSection;
