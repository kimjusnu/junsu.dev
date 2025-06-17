// components/sections/HomeSection.tsx
"use client";

import React from "react";
import { motion, Easing } from "framer-motion";

/** 공통 fade-in / fade-out 애니메이션 */
const fadeInOut = (delay = 0) => ({
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    exit: { opacity: 0 },
    transition: {
        duration: 0.3,
        ease: "easeInOut" as Easing,
        delay,
    },
    viewport: { once: false, amount: 0.3 },
});

const HomeSection = () => (
    <section className="mb-28 space-y-20 px-4 md:px-8">
        {/* 🎥 유튜브 영상 */}
        <motion.div
            {...fadeInOut()}
            className="w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg"
        >
            <iframe
                src="https://www.youtube.com/embed/BACX5gxm0lY?rel=0&vq=hd1080"
                title="포트폴리오 소개 영상"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
            />
        </motion.div>

        {/* 🧑‍💻 자기소개 본문 */}
        <div className="text-gray-800 dark:text-gray-100 text-base leading-relaxed max-w-3xl mx-auto space-y-16">
            {/* 강조 문장 */}
            <motion.p
                {...fadeInOut(0.1)}
                className="text-2xl font-semibold text-blue-800 dark:text-blue-400"
            >
                저는 화려한 디자인보다, <br />
                직관적이고 깔끔한 화면을 만드는 프론트엔드 개발자입니다.
            </motion.p>

            {/* 첫 번째 섹션 */}
            <div className="space-y-6">
                {[
                    "솔직히 말씀드리면 디자인은 잘 못합니다. 다양한 효과도 넣어보고 싶고, 예쁘게 꾸미고 싶지만… 쉽지 않더라고요. 😅 남중, 남고, 공대, 군대를 거쳐온 제 백그라운드 때문인지 화려하고 감성적인 디자인보단, 심플하고 직관적인 UI가 더 익숙합니다.",
                    "하지만 그렇기 때문에 사용자가 바로 이해할 수 있는 구조, 사용하기 편한 흐름을 더 깊이 고민하게 됐습니다.",
                    "저는 기능을 구현하는 것이 아니라, 사용자의 경험을 설계합니다. GUI를 채우는 작업보다는, UI가 전달할 정보와 흐름, 그리고 UX가 만들어낼 감정과 반응을 먼저 생각합니다.",
                ].map((text, i) => (
                    <motion.p key={i} {...fadeInOut(0.2 + i * 0.1)}>
                        {text}
                    </motion.p>
                ))}
            </div>

            {/* 두 번째 섹션 */}
            <div className="space-y-6">
                <motion.p {...fadeInOut(0.6)}>
                    UI는 앞으로 음성, AI 등 형태가 다양하게 진화하겠지만{" "}
                    <span className="font-medium text-blue-700 dark:text-blue-300">
                        사용자에게 익숙하고 편안하게 다가가는 인터페이스
                    </span>{" "}
                    는 언제나 핵심이라고 믿습니다. 그 감각을 계속해서 다듬고
                    있습니다.
                </motion.p>

                <motion.p {...fadeInOut(0.7)}>
                    저의 강점은 빠른 실행력과 전체 경험을 연결하는 시야입니다.
                    완벽한 계획을 세우기보다, 빠르게 실행하면서 부족한 부분을
                    고쳐 나가는 스타일입니다. 덕분에 기획부터 디자인, 개발,
                    배포, 운영까지 End-to-End 전 과정을 경험했습니다.
                </motion.p>
            </div>

            {/* 리스트 섹션 */}
            <motion.ul
                {...fadeInOut(0.8)}
                className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mt-4"
            >
                <li>요구사항 분석 → 기능 정의 → 공수 산정 → 구현</li>
                <li>깔끔한 UI 설계 → 익숙하고 몰입감 있는 UX 조합</li>
                <li>Next.js 기반의 SPA/SSR 프로젝트를 다수 경험</li>
                <li>Git 브랜치 전략 설계 및 코드 관리 문화 도입</li>
                <li>Vercel·GitHub Actions·AWS를 활용한 CI/CD 자동화</li>
                <li>로그 추적 기반 사용자 피드백 수집 및 개선</li>
            </motion.ul>

            {/* 세 번째 섹션 */}
            <div className="space-y-6">
                {[
                    "그 외에도… Next.js를 주 언어처럼 사용합니다. SSR, CSR 전환, PWA 구성 등 유연한 구조를 좋아합니다. 물론 React 이외의 프레임워크도 문제 없습니다.",
                    "AI와 DevOps에도 관심 많습니다. AI 도구들을 적극 실무에 녹여내고, DevOps 파이프라인을 직접 구성해보고 운영하면서 기술과 운영을 연결하는 개발자를 지향합니다.",
                    "팀 안에서 조용하지만 꾸준한 소통을 합니다. Slack, Google Workspace, Figma 등 어떤 협업 툴도 금방 익숙해집니다. 활발하진 않아도 꼭 필요한 커뮤니케이션은 놓치지 않습니다.",
                ].map((text, i) => (
                    <motion.p key={i + 10} {...fadeInOut(1.0 + i * 0.1)}>
                        {text}
                    </motion.p>
                ))}
            </div>

            {/* 마무리 문장 */}
            <motion.p
                {...fadeInOut(1.4)}
                className="text-xl italic text-center text-gray-500 dark:text-blue-300 mt-16"
            >
                “기술은 성장 중이지만, 팀과 사용자에게 필요한 사람이 되고자
                합니다.
                <br />
                앞으로 더욱 성장할 FE 개발자 김준수입니다.”
            </motion.p>
        </div>
    </section>
);

export default HomeSection;
