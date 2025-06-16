/* src/data/projectList.ts */

export interface Project {
    id: string;
    title: string;
    summary: string;
    description: string;
    period?: string;
    url?: string;
    imageUrl?: string; // public 경로 기준 썸네일 (선택)
    links?: {
        label: string;
        url: string;
    }[];
    techs?: string[];
}

// 자신 있는 순서로 정렬: StartupQT → Componique → Yiry → GitHub Profile Viewer → 4094Fixer
export const projects: Project[] = [
    // ────────────────────────────────────────────────────────────────
    {
        id: "startupqt",
        title: "StartupQT | 퀴즈 저작 및 관리 시스템",
        summary: "기업 내부 교육 콘텐츠를 위한 퀴즈 저작 도구 프론트엔드",
        description: `StartupQT는 기업 내부 교육 콘텐츠 제작을 위해 설계된 퀴즈 저작 및 관리 시스템으로, 본 프로젝트에서 프론트엔드 전반을 전담하였습니다. 사용자가 다양한 유형의 문제를 작성·수정하고, 관련 자료를 연결하거나 검수 요청 및 미리보기를 진행할 수 있는 기능들을 제공합니다.

        Next.js를 기반으로 프로젝트 구조를 설계하고, 페이지별로 재사용 가능한 컴포넌트 구조를 구축하였습니다. 객관식, OX, 퍼즐형 문제 등 다양한 문제 유형에 맞춘 입력 UI를 구현하고, 에디터는 Tiptap을 커스터마이징하여 직관적인 저작 환경을 제공하였습니다.
        
        상태 관리는 Zustand를 중심으로 전체 앱의 흐름을 설계하였으며, Axios를 활용한 문제 저장·삭제·조회 등 REST API 연동을 구현하였습니다. 또한 문제와 관련된 자료를 선택·연결하는 기능을 통해 학습 맥락을 보완할 수 있도록 하였고, 실제 서비스 운영을 고려해 공수 산정 및 WBS를 직접 작성하고 커밋 단위로 기능별 이력을 관리하였습니다.`,

        period: "2025.03 ~ 2025.06",
        techs: [
            "Next.js",
            "TypeScript",
            "Zustand",
            "Tiptap",
            "AG Grid",
            "Axios",
            "REST API",
        ],
        url: "https://startupqt.com/studio",
        imageUrl: "/startupqt.png",
        links: [
            {
                label: "GitHub (FE 저장소)",
                url: "https://github.com/tukorea-2024-s3-10/eat-fit-fe",
            },
        ],
    },
    // ────────────────────────────────────────────────────────────────
    {
        id: "componique",
        title: "Componique | 컴포넌트 UI 라이브러리",
        summary: "재사용 가능한 UI 컴포넌트 설계 및 오픈소스 배포",
        description: `• RadioButton, DropDown, Switch, Card, Avatar, ProgressBar, InfiniteScroll, Badge, Tooltip, Rating, Map, FormValidation 등 다양한 컴포넌트 설계 및 구현\n• TailwindCSS 기반 일관된 디자인 시스템 구축 및 다크 모드 지원\n• 배포 파이프라인 구축 및 npm 배포 관리`,
        period: "2024.08 ~ 2024.10",
        url: "https://www.componique.com/",
        imageUrl: "/componique.png",
        techs: ["Next.js", "TypeScript", "TailwindCSS", "NPM"],
        links: [
            { label: "GitHub", url: "https://github.com/yourname/componique" },
        ],
    },
    // ────────────────────────────────────────────────────────────────
    {
        id: "yiry",
        title: "와이리 홈페이지 Next.js 재구현",
        summary:
            "SEO 효율을 높이기 위해 Vue 기반 사이트를 Next.js로 마이그레이션",
        description: `• 인플루언서 페이지 제작\n• 반응형 웹 구현\n• SEO 최적화 작업`,
        techs: ["Next.js", "TypeScript", "TailwindCSS", "SEO"],
        url: "https://www.wairi.co.kr/webapp",
        imageUrl: "/yiry.png",
    },
    // ────────────────────────────────────────────────────────────────
    {
        id: "gh-viewer",
        title: "GitHub Profile Viewer",
        summary: "GitHub 프로필과 주요 레포지토리를 조회하는 대시보드",
        description: `• 프로젝트 기획 및 전반적인 개발 과정 리드\n• 디자이너를 섭외해 피그마로 UI/UX 설계 후 개발과 조율\n• GitHub API 활용 데이터 연동 및 주요 레포지토리 정보 처리\n• Zustand로 검색 기록·방문 기록 상태 관리 로직 설계`,
        techs: ["React", "Zustand", "TailwindCSS", "GitHub API"],
        url: "https://github-profile-viewer-mu.vercel.app/",
        imageUrl: "/gh-viewer.png",
        links: [],
    },
    // ────────────────────────────────────────────────────────────────
    {
        id: "4094fixer",
        title: "4094Fixer | Next.js 개발 오류 자동 해결 라이브러리",
        summary: "Next.js 프로젝트 오류 자동 감지·수정 라이브러리",
        description: `• 오류 유형 분석 및 해결 로직 설계\n• TypeScript 기반 라이브러리 개발 및 테스트 코드 작성\n• GitHub Actions를 활용한 CI/CD 파이프라인 구축`,
        techs: ["TypeScript", "Next.js", "NPM", "GitHub Actions"],
        imageUrl: "/4094fixer.png",
        links: [
            { label: "GitHub", url: "https://github.com/kimjusnu/4094Fixer" },
        ],
    },
];
