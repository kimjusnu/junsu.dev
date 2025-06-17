// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 폰트 설정
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// SEO 기본 메타데이터
export const metadata: Metadata = {
    title: "프론트엔드 개발자 김준수 포트폴리오",
    description:
        "프론트엔드 개발자 김준수 포트폴리오입니다. Next.js 기반 프로젝트, UI/UX 중심 개발, 협업 경험, 실전 프로젝트를 담았습니다.",
    authors: [{ name: "김준수", url: "https://junsudev.vercel.app" }],
    keywords: [
        "프론트엔드 포트폴리오",
        "프론트엔드 개발자",
        "프론트엔드 개발자 포트폴리오",
        "Next.js 포트폴리오",
        "개발자 이력서",
        "김준수 개발자",
        "리액트 포트폴리오",
        "프론트엔드 취업 포트폴리오",
    ],
    creator: "김준수",
    metadataBase: new URL("https://junsudev.vercel.app"),
    openGraph: {
        title: "프론트엔드 포트폴리오 | 김준수 – Next.js 개발자",
        description:
            "프론트엔드 포트폴리오 모범 사례 – Next.js, React 기반의 프로젝트 및 실무 경험 중심 개발자 포트폴리오입니다.",
        url: "https://junsudev.vercel.app",
        siteName: "김준수 포트폴리오",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "김준수 프론트엔드 포트폴리오 미리보기 이미지",
            },
        ],
        locale: "ko_KR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "프론트엔드 포트폴리오 | 김준수",
        description:
            "Next.js 기반 포트폴리오 – 실전 프로젝트, 협업 경험 중심 프론트엔드 개발자 김준수",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" className="scroll-smooth">
            <head>
                {/* Google Search Console */}
                <meta
                    name="google-site-verification"
                    content="IF3-fq0lvvNTcCCxBMZFtZea5z6sFe8Z3olALXzA4QE"
                />

                {/* 모바일 대응 */}
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                {/* 파비콘 */}
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-[#111827] dark:text-white transition-colors`}
            >
                {children}
            </body>
        </html>
    );
}
