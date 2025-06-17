// src/data/projects/componique.ts
import { Project } from "./types";

export const componique: Project = {
    id: "componique",
    title: "Componique | 컴포넌트 UI 라이브러리 프로젝트",
    summary:
        "다크모드 대응·디자인 시스템 기반의 30+ UI 컴포넌트를 개발하고 npm에 배포",
    description: `Componique는 Next.js + TailwindCSS 기반으로 구현한 오픈소스 UI 컴포넌트 라이브러리입니다.  
프로젝트마다 반복되는 UI 구현 비용을 줄이고, 팀 내 디자인 시스템을 체계화하려는 목표로 시작되었습니다.

- **개발 동기**  
  반복적으로 새로 만드는 컴포넌트를 효율화하고, 팀의 디자인 토큰을 일관된 패턴으로 관리하기 위해 시작한 프로젝트입니다.  
  외부 사용자도 활용 가능한 npm 배포 패키지를 목표로 삼았습니다.

- **핵심 기능**  
  • Tailwind 디자인 토큰 기반 다크모드 연동  
  • 체크박스, 드롭다운, 프로그레스바, 무한 스크롤, 폼 밸리데이션 등 30개 이상의 주요 UI 컴포넌트 구현  
  • React Hook Form 기반 유효성 검증, Mapbox 연동 컴포넌트 포함  
  • Storybook 기반 문서화, 다크/라이트 테마 전환이 가능한 메인 홈페이지 직접 개발  
  • Rollup 기반 번들링, prepublishOnly 자동 스크립트로 npm 배포 자동화

- **팀 운영**  
  4인 팀 구성, 팀장으로서 GitHub Flow 브랜치 전략을 수립하고  
  (feature-branch → develop → main / 팀원 필수 리뷰 지정 등)  
  매일 09:00 스크럼, 16:00 정리 회고를 통해 협업 리듬을 유지했습니다.

- **템플릿 개발**  
  실제 활용 예시로 고객지원 페이지(Customer Service), FAQ 등 사용자 페이지 템플릿도 함께 제작해 배포했습니다.`,

    period: "2024.07 ~ 2024.09",
    team: "팀", // 4인 팀 프로젝트
    role: "팀장 · UI 컴포넌트 개발/설계 · 다크모드 대응",
    responsibilities: [
        "Switch, Dropdown, InfiniteScroll 등 핵심 컴포넌트 20+ 개발",
        "메인 페이지 및 다크모드 스위치 기능 개발",
        "고객지원 페이지(Customer Service) 템플릿 개발",
        "GitHub Flow 브랜치 전략 수립 및 PR 룰 운영",
        "팀 스크럼 진행 및 협업 일정 조율",
    ],
    troubles: [
        // Rollup & 타입 선언
        "Rollup 번들 시 tsconfig path 불일치 → path alias 정비 및 d.ts 번들링 재설정",
        "npm 배포 시 타입 선언 누락 → tsconfig & Rollup 설정을 동기화해 `declaration` 파일 안정적으로 출력",

        // 다크모드 전환 UX
        "다크·라이트 테마 전환 시 초기 플리커 현상 발생 → CSS 변수 + localStorage 기반 테마 초기화 전략 적용",

        // 디자인 시스템 관련
        "Tailwind 기반 디자인 시스템의 spacing·color 토큰 통일 필요 → `tailwind.config.js`에서 일관된 토큰 정비",
        "컴포넌트별 폰트/간격 스타일 상이 → 디자인 가이드에 맞춰 시스템화하고 Storybook 문서에 반영",

        // 문서화 / Storybook
        "Storybook 다크모드 적용 시 배경과 컴포넌트 간 시인성 저하 → Storybook 테마 설정 커스터마이징",
        "컴포넌트 props 설명 누락 → TS Doc 기반 자동화된 문서 생성 방식으로 전환 검토",

        // 배포 자동화
        "`prepublishOnly` 스크립트 실행 실패 → 빌드 타이밍 문제 해결을 위해 npm `prepare` 스크립트 분리",

        // 협업 환경
        "브랜치별 스타일 규칙 충돌 → 팀 내 Prettier + ESLint 통일 config 세팅 및 Git hook 연동으로 사전 검사",
        "PR 리뷰 중 의견 충돌 → GitHub Issue 및 스레드 기반 비동기 협업 체계로 해결",
    ],
    outcome: `최고 피크 시점 npm 다운로드 20만+ 기록으로 오픈소스 커뮤니티에서 주목받았으며,  
유지 보수성과 확장성을 고려한 설계로 이후 팀 내부 프로젝트에도 적용되었습니다.`,
    techs: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Rollup",
        "Storybook",
        "React Hook Form",
        "NPM",
        "GitHub Actions",
    ],
    url: "https://www.componique.com/",
    repo: "https://github.com/kimjusnu/componique",
    imageUrl: "/componique.png",
    links: [
        {
            label: "기술 블로그 | Componique",
            url: "https://dietisdie.tistory.com/category/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/Componique%3A%20UI%20%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%20%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC",
        },
        {
            label: "npm 패키지",
            url: "https://www.npmjs.com/package/componique",
        },
    ],
};
