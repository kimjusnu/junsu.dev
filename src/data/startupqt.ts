// src/data/projects/startupqt.ts
import { Project } from "./types";

export const startupqt: Project = {
  id: "startupqt",
  title: "StartupQT | 퀴즈 저작·검수·관리 시스템",
  summary: "스타트업·창업 교육용 문제은행(저작 → 검수 → 분석) 통합 플랫폼",
  description: `**StartupQT**는 스타트업·창업 교육 콘텐츠 제작 팀을 위해  
퀴즈 문제를 **작성·검수·배포·분석**까지 한 번에 처리하도록 설계한 웹 애플리케이션입니다.

- **개발 동기**  
  인턴 입사 직후 진행 중이던 오프라인 문서 기반 문제 제작 프로세스를 웹으로 이관해야 했습니다.  
  “콘텐츠 작성 → 검수 요청 → 승인/반려 → 학습 분석” 전 과정을 **한툴로 자동화**해  
  운영 리드 타임을 단축하고, 문제 자산을 모듈화·재사용하기 위해 프로젝트를 기획·주도했습니다.

- **핵심 기능**  
  • Tiptap Editor 기반 6종 문제 유형(객관식·드래그앤드롭 등) 커스터마이징  
  • AG Grid + 가상 스크롤 5만 + 건 문제 리스트 & 다중 필터  
  • 임시 저장, 검수 요청, 승인·반려 워크플로 & 알림 UX  
  • 문제별 학습 통계·정답률 시각화, CSV Import·Export

- **디자인**  
  메인 랜딩·대시보드 전 구간 **UI/UX 설계 & Figma 시안** 후 직접 퍼블리싱`,

  period: "2025.03 ~ 2025.06",
  team: "팀",
  role: "UI/UX 설계 · 프론트엔드 개발 · 배포 · 운영",
  responsibilities: [
    "기능/화면 명세서 작성 & 요구사항 추출",
    "Figma 프로토타입 → Next.js + Tailwind + MUI 컴포넌트 구현",
    "Tiptap NodeView 확장(빈칸·코드블럭 등) & Auto-save(임시 저장)",
    "Zustand 전역 상태 5개 Slice 설계, optimistic UI 동기화",
    "Swagger 기반 REST API 연동 · Axios 인스턴스/인터셉터 구성",
    "AG Grid 서버사이드 모델: 페이지네이션 + Full-text Filter",
    "CI/CD — Jenkins 파이프라인 & Husky + ESLint/Prettier pre-push 훅",
    "AWS EC2 + Nginx Blue-Green 무중단 배포 스크립트, SSL 셋업",
  ],
  troubles: [
    // ① API 호출 & CORS
    "프록시 설정 오류로 Axios가 baseURL 두 번 중복 → CORS 307 루프 발생 ⇒ Nginx `proxy_set_header` 정비 + Axios 인터셉터 내부 baseURL 제거 후 e2e 테스트 통과",
    // ② 에디터 한국어 IME 깨짐
    "Tiptap Editor 한글 조합 중 커서 튐(Composition Event 미처리) ⇒ `handleDOMEvents`에 compositionend 훅 추가, 300 ms debounce 적용으로 재현율 0 % 달성",
    // ③ 대용량 목록 성능
    "문제 5만 건 테이블 렌더 시 FPS 18 → AG Grid SSRM + Row Buffer 25 → FPS 58 로 개선, 스크롤 지연 250 ms → 36 ms",
    // ④ 이미지 업로드 403
    "S3 presigned URL 403(서버 시계 차이) ⇒ NTP 싱크 + 업로드 정책 `contentType` 명시, ACL → private 로 수정",
    // ⑤ 다크모드 플리커
    "테마 전환 시 첫 로드 플리커 ⇒ CSS Var + localStorage 초기값 & `data-theme` 직주입, FCP 2.3 s → 1.5 s",
    // ⑥ 검수 모달 상태 잔존
    "검수 요청 후 모달 초기화 안 됨 ⇒ Zustand `resetSlice` 패턴 도입, e2e 테스트 추가로 회귀 방지",
    // ⑦ Jenkins 캐시 미적용
    "Jenkins 빌드마다 node_modules 풀 설치 ⇒ Yarn Cache Plugin + Docker layer cache로 빌드 시간 9 → 3 분",
    // ⑧ og:image 미노출
    "카카오톡 og:image 불러오기 실패 ⇒ Next.js og 전용 SSR 라우트(`/api/og`) 렌더링 + Nginx 캐시 키 변경",
  ],
  outcome: `
      - 제작/검수 리드타임 42 % 단축 (평균 12.4 h → 7.2 h)  
      - 자동 배포: Jenkins → Nginx Blue-Green 롤아웃, 배포 소요 15 → 3 분  
      - AG Grid 가상 스크롤, Tiptap 최적화로 **Lighthouse Perf 92 → 99**  
      - 첫 달 QA 버그 23 → 4 건으로 안정화  
      - 운영팀(3명) 수동 작업 ≒ 1일 2h 절감, 신규 문제 유형 2종 추가 추진`,
  techs: [
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "MUI",
    "Tiptap",
    "Zustand",
    "AG Grid",
    "Axios",
    "REST API",
    "Jenkins",
    "Nginx",
    "AWS EC2",
    "Husky",
  ],
  url: "https://startupqt.com/studio",
  imageUrl: "/startupqt.png",
  imageUrls: [
    "/startupqt1.png",
    "/startupqt2.png",
    "/startupqt3.png",
    "/startupqt4.png",
    "/startupqt5.png",
    "/startupqt6.png",
  ],
};
