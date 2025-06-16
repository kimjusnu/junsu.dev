// components/sections/HomeSection.tsx

import React from "react";

const HomeSection = () => {
    return (
        <section className="mb-12 space-y-6">
            {/* 🎥 유튜브 영상 */}
            <div className="w-full aspect-[16/9] rounded-lg overflow-hidden shadow-md">
                <iframe
                    src="https://www.youtube.com/embed/BACX5gxm0lY?rel=0&vq=hd1080"
                    title="포트폴리오 소개 영상"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            </div>

            {/* 🧑‍💻 자기소개 */}
            <div className="text-gray-800 dark:text-gray-100 space-y-5 text-sm leading-relaxed max-w-prose">
                <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    사용자 경험을 설계하고, 인터랙션을 구현합니다.
                </p>

                <p>
                    단순한 기능 구현에 그치지 않고,{" "}
                    <span className="font-semibold text-blue-600">
                        디자인의 맥락
                    </span>
                    과{" "}
                    <span className="font-semibold text-blue-600">
                        사용자의 행동
                    </span>
                    을 고려합니다.
                </p>

                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                    <li>Next.js · React 기반의 웹앱 개발</li>
                    <li>모바일 퍼스트 UI/UX 설계</li>
                    <li>CI/CD · Git 협업 · Vercel 배포 자동화</li>
                    <li>디자인 시스템과 일관성 있는 컴포넌트 구성</li>
                </ul>

                <p>
                    그리고 항상 고민합니다. <br />
                    <span className="italic text-gray-500">
                        “이 기능은, 사용자에게 어떤 가치를 줄까?”
                    </span>
                </p>
            </div>
        </section>
    );
};

export default HomeSection;
