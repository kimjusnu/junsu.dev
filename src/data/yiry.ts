// src/data/projects/yiry.ts
import { Project } from "./types";

export const yiry: Project = {
    id: "yiry",
    title: "와이리 홈페이지 | Vue → Next.js 마이그레이션",
    summary:
        "SEO 개선과 반응형 UI 재구현을 위해 Vue 기반 사이트를 Next.js로 마이그레이션",
    description: `기존 Vue.js로 제작된 와이리 기업 홈페이지를  
**Next.js 기반 SSR 구조로 전면 재구현**하여 SEO 성능과 반응형 UI를 개선한 프로젝트입니다.

- **개발 동기**  
  CSR 구조로 검색 노출이 어려웠던 기존 사이트를 개선하고자,  
  SSR 기반의 Next.js로 마이그레이션을 제안하고 직접 구현했습니다.  
  검색 유입률과 페이지 성능 최적화를 주된 목표로 설정했습니다.

- **핵심 기능**  
  • Next.js SSR을 활용한 SEO 최적화 및 메타태그 구성  
  • 반응형 웹 UI 재설계 및 TailwindCSS 적용  
  • 광고주용 페이지(리뷰 섹션~푸터) 직접 구현  
  • Lighthouse 기준 FCP 1.8s → 0.9s 성능 개선

- **디자인**  
  기존 디자인 구조를 기반으로 반응형 구성 및 레이아웃 개선`,
    period: "2024.10 ~ 2024.12",
    team: "팀",
    role: "프론트엔드 개발 · SEO 담당",
    responsibilities: [
        "Next.js 기반 SSR 구조로 전환 및 초기 세팅",
        "광고주 페이지(리뷰 ~ 푸터) 전체 개발",
        "SEO 최적화를 위한 메타 태그 및 OG 구성",
        "TailwindCSS로 반응형 스타일링 및 레이아웃 개선",
    ],
    troubles: [
        "CSR 구조에서는 메타태그가 노출되지 않아 SEO 불가 → SSR + Head 구성으로 해결",
        "FCP 지연 문제 → 코드 분할·Lazy 로딩 등으로 초기 렌더링 개선",
    ],
    outcome: `검색 유입률 약 50% 증가 및 SEO 점수 향상  
FCP 기준 1.8초 → 0.9초로 성능 최적화 완료`,
    techs: ["Next.js", "React", "TypeScript", "TailwindCSS", "SEO"],
    url: "https://www.wairi.co.kr/webapp",
    repo: "https://github.com/iri-wa-7team/iri-wa",
    imageUrl: "/yiry.png",
    links: [],
};
