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
    title: "김준수 포트폴리오 | 프론트엔드 개발자",
    description:
        "Next.js 기반의 포트폴리오 사이트 – 직관적인 UI와 사용성 중심의 프론트엔드 개발을 지향합니다.",
    authors: [{ name: "김준수", url: "https://junsudev.vercel.app" }],
    keywords: ["프론트엔드", "개발자", "Next.js", "포트폴리오", "김준수"],
    creator: "김준수",
    metadataBase: new URL("https://junsudev.vercel.app"),
    openGraph: {
        title: "김준수 | 프론트엔드 개발자 포트폴리오",
        description:
            "사용자 중심의 웹 경험을 만들어가는 프론트엔드 개발자 김준수입니다.",
        url: "https://junsudev.vercel.app",
        siteName: "김준수 포트폴리오",
        images: [
            {
                url: "/og-image.png", // public 폴더 기준
                width: 1200,
                height: 630,
                alt: "김준수 포트폴리오 썸네일",
            },
        ],
        locale: "ko_KR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "김준수 | 프론트엔드 개발자",
        description:
            "Next.js 기반 포트폴리오 – 사용자 경험 중심 개발자 김준수입니다.",
        images: ["/og-image.png"],
        creator: "@your_twitter_id", // 없으면 생략 가능
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
