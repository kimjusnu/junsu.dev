// src/data/projects/ghViewer.ts
import { Project } from "./types";

export const ghViewer: Project = {
    id: "gh-viewer",
    title: "GitHub Profile Viewer | GitHub 대시보드 웹 앱",
    summary: "GitHub 프로필·레포지토리를 한눈에 보여주는 개인 대시보드",
    description: `GitHub Profile Viewer는 사용자가 GitHub ID만 입력하면
프로필·주요 레포지토리·언어 사용량 등을 즉시 시각화해 주는 웹 애플리케이션입니다.

- **개발 동기**  
  프로필 README가 없는 유저의 활동을 빠르게 파악하기 어려워 직접 대시보드를 기획·개발했습니다.  
  면접 준비 시 관심 있는 개발자의 프로젝트를 빠르게 살펴보기 위한 니즈도 반영했습니다.

- **핵심 기능**  
  • GitHub REST API 연동으로 프로필·레포·언어 통계 조회  
  • Zustand로 최근 검색 기록 저장 및 방문 횟수 카운트  
  • Chart.js 기반 언어 사용량·커밋 추세 시각화  
  • Infinite Scroll로 레포지토리 목록 페이징  
  • API Rate-Limit 초과 시 안내 UX, Lazy 이미지 로딩, 반응형 UI

- **디자인**  
  한국공학대 디자인공학부 산업디자인전공 23학번 이혜원님이 Figma로 UI 설계  
  (디자이너 섭외·협업도 직접 진행)`,
    period: "2024.02 ~ 2024.03",
    team: "개인",
    role: "기획 · UX 설계 · 프론트엔드 개발 · 배포",
    responsibilities: [
        "프로젝트 구조 설계 및 Next.js·TailwindCSS 초기 세팅",
        "GitHub REST API 연동 및 데이터 모델링",
        "Zustand로 검색 기록·방문 횟수 상태 관리 구현",
        "Chart.js 기반 언어 사용량·커밋 히트맵 차트 컴포넌트 작성",
        "API Rate-Limit 대응 캐싱·알림 UX 구현",
        "반응형 레이아웃·Lazy 이미지·무한 스크롤 최적화",
        "Vercel·GitHub Actions로 CI/CD 자동 배포 파이프라인 구축",
    ],
    troubles: [
        "GitHub API Rate-Limit 초과 시 빈 화면 → 캐시 전략·에러 토스트 처리로 UX 개선",
        "Chart.js 캔버스 크기 문제 → Tailwind `aspect-ratio` 및 리사이즈 옵저버 적용",
    ],
    outcome: `7일 WBS로 목표한 MVP를 완성하고 Vercel에 배포했습니다.
실제 취업 준비 과정·커뮤니티에서 데모를 공유하며 피드백을 반영했고,
React Query 기반 캐싱·테스트 코드 추가 등 후속 리팩터링을 계획 중입니다.`,
    techs: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Zustand",
        "Chart.js",
        "GitHub API",
        "Vercel",
        "GitHub Actions",
    ],
    url: "https://github-profile-viewer-mu.vercel.app/",
    repo: "https://github.com/kimjusnu/github_profile_viewer",
    imageUrl: "/gh-viewer.png",
    links: [
        {
            label: "기술 블로그 | GitHub Profile Viewer 회고 글",
            url: "https://dietisdie.tistory.com/entry/1",
        },
        {
            label: "디자인 피그마",
            url: "https://www.figma.com/design/hoAwyyPYN6yyfH6K8HkCsP/GitHub-Profile-Viewr?node-id=0-1",
        },
    ],
};
