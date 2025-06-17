import { NextResponse } from "next/server";

/* ------------------------------------------------------------------
   1) 포트폴리오 지식 베이스  ────────────────
      - ‘구조화된 목록’ + ‘서술형’ 두 가지를 함께 제공해
      - AI가 키워드 매핑 + 자연어 톤 모두 잘 활용하도록 설계
------------------------------------------------------------------ */

const portfolioKnowledge = `
============================================================
[개인 프로필]
이름           : 김준수 (2001년생, 한국공학대학교 4학년)
직무 관심       : 프론트엔드 엔지니어 (React · Next.js 기반)
주요 강점       : 직관적‧깔끔한 UI/UX 설계, End-to-End 개발, 팀·프로세스 리딩
협업 도구       : Git / GitHub Flow · Notion · Slack · Discord · JIRA
============================================================

[핵심 기술 스택]
- 타입 안전  : TypeScript(4년), Zod
- 프레임워크 : React(5년), Next.js 14(2년, App Router·PWA·SSR·ISR·Edge)
- 스타일링   : Tailwind CSS, Styled-Components, Sass
- 상태 관리   : Zustand, React Query, Context API
- 테스팅     : Vitest, React Testing Library, Storybook, Lighthouse
- DevOps     : GitHub Actions, Docker, AWS(EC2·S3·Route53), Vercel, Netlify
- 데이터      : MySQL, Firebase, Supabase, Oracle
- 기타 도구   : Figma, Lucide Icon, AG Grid, Tiptap, MDX, ESLint/Prettier

============================================================
[프로젝트 요약 ― 표 형식]
┌────────────┬─────────────────────────────────────────────────────┬──────────────┬──────────────────────────────────┬───────────────┐
│  구분       │  핵심 설명                                          │  개인 역할    │  사용 기술                         │  핵심 성과     │
├────────────┼─────────────────────────────────────────────────────┼──────────────┼──────────────────────────────────┼───────────────┤
│ StartupQT  │ 스타트업·창업 교육용 문제은행 SaaS                  │   Sole Dev   │ Next.js · Zustand · Tiptap        │ 9개 기능 모듈  │
│            │ (문제 작성·검수·해설·통계·백오피스)                 │ (~6개월)     │ AG Grid · Axios · Vercel          │ Lighthouse 92 │
├────────────┼─────────────────────────────────────────────────────┼──────────────┼──────────────────────────────────┼───────────────┤
│ Componique │ 다크모드 대응 UI 컴포넌트 라이브러리                │   팀장       │ React · Tailwind · Storybook      │ npm 1,2k DL   │
│            │ (Button·Card·Tab·Switch·Carousel 등 25개)           │ (5인 리딩)   │ GitHub Actions · Vite             │ 전 메트릭 A+  │
├────────────┼─────────────────────────────────────────────────────┼──────────────┼──────────────────────────────────┼───────────────┤
│ Yiry Site  │ Vue → Next.js 마이그레이션 & SEO 개선               │   FE Lead    │ Next.js · SWC · Structured Data   │ CLS 0.01      │
├────────────┼─────────────────────────────────────────────────────┼──────────────┼──────────────────────────────────┼───────────────┤
│ GH Viewer  │ GitHub 대시보드 SPA + 차트 시각화(개인)             │   개인       │ React · Chart.js · REST API       │ 300+ Star     │
├────────────┼─────────────────────────────────────────────────────┼──────────────┼──────────────────────────────────┼───────────────┤
│ 4094Fixer  │ Next.js 4094 오류 자동 해결 CLI(개인)               │   개인       │ Node.js · Commander · Chalk       │ npm 1.8k DL   │
└────────────┴─────────────────────────────────────────────────────┴──────────────┴──────────────────────────────────┴───────────────┘
============================================================

[세부 프로젝트 ― 서술형]

### 1) StartupQT (2024.12 – 2025.06)
- **목표**  : 스타트업 교육기관이 쓰는 ‘문제은행’ 통합 플랫폼 MVP 개발
- **책임**  : 기획 → Figma 와이어프레임 → Next.js FE → DevOps(배포·모니터링)
- **주요 기능**  
  ① 문제 작성(Tiptap 에디터)  
  ② 관련 자료 연결(AG Grid)  
  ③ 검수 체크리스트 모달(MUI)  
  ④ 상태 관리(Zustand)  
  ⑤ Lighthouse 90+ 최적화  
- **어려움 & 해결**  
  - _Hydration mismatch_ : React-18 Concurrent + App Router → suppressHydrationWarning + Lazy import  
  - _4094 Error_ : 자체 CLI ‘4094Fixer’ 제작하여 자동 패치

### 2) Componique (2024.07 – 2024.11)
- **팀 규모**     : FE 4명  
- **역할**        : 팀장 & UI/UX 리드  
- **성과**        : npm 배포 첫 달 1,200 다운로드, Storybook Docs 자동 배포, 전 컴포넌트 다크모드 완전 대응  
- **리더십 경험** : Git Flow·PR 체계 정립, 코드 리뷰 SLI 도입, 주간 스크럼 운영

… (필요 시 더 추가)
`;

/* ------------------------------------------------------------------
   2) 시스템 프롬프트 ─ “한국어만, 반복 금지, 구체‧친근 톤” 명시
------------------------------------------------------------------ */
const systemPrompt = `
당신은 "김준수" 포트폴리오 전용 AI 도우미입니다.
규칙을 반드시 지켜서 답변하세요.

<규칙>
1. **모든 답변은 100% 한국어**로 작성합니다. (영어·로마자 표기 금지)
2. 질문과 가장 관련 있는 프로젝트·경험을 골라 구체적으로 설명합니다.
3. 동일 문장·문구 반복을 피하고, 불필요하게 장황하지 않게 작성합니다.
4. 친근하지만 깔끔한 "대화체" 톤을 사용합니다 (이모지는 상황에 맞게 최소 사용).
5. 포트폴리오 정보에 없는 내용은 사실인 척 만들지 말고 “제가 가진 정보에는 없습니다.”로 답합니다.
`;

export async function POST(req: Request) {
    try {
        const { prompt } = await req.json();

        console.log("📩 질문:", prompt);
        console.log("🔑 GROQ:", process.env.GROQ_API_KEY?.slice(0, 8));

        /* ---------------- 3) 메시지 배열 구성 ---------------- */
        const messages = [
            { role: "system", content: systemPrompt },
            { role: "assistant", content: portfolioKnowledge }, // AI 기억용 컨텍스트
            { role: "user", content: prompt },
        ];

        const res = await fetch(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
                },
                body: JSON.stringify({
                    model: "llama3-70b-8192",
                    messages,
                    temperature: 0.7,
                    max_tokens: 1024,
                }),
            }
        );

        /* ---------------- 4) 에러 핸들링 ---------------- */
        if (!res.ok) {
            const err = await res.json();
            console.error("❌ Groq API 오류:", err);
            return NextResponse.json(
                { result: `❌ Groq 오류: ${err.error?.message}` },
                { status: res.status }
            );
        }

        const { choices } = await res.json();
        const answer = choices?.[0]?.message?.content?.trim();

        return NextResponse.json({
            result: answer || "❌ 응답이 비어있어요.",
        });
    } catch (error) {
        console.error("❌ 서버 내부 예외:", error);
        return NextResponse.json(
            { result: "❌ AI 응답 처리 중 예외가 발생했습니다." },
            { status: 500 }
        );
    }
}
