// src/data/projects/fixer4094.ts
import { Project } from "./types";

export const fixer4094: Project = {
    id: "4094fixer",
    title: "4094Fixer | Next.js 4094 오류 자동 해결 CLI 도구",
    summary:
        "Next.js 4094 포트 충돌·캐시 오류를 원클릭으로 해결하는 CLI 유틸리티",

    description: `4094Fixer는 Next.js 개발 중 간헐적으로 발생하는 4094 포트 충돌·캐시 오류를  
자동 감지하여 .next 캐시, node_modules, 락파일을 삭제하고,  
의존성을 재설치한 뒤 개발 서버를 자동으로 재시작하는 CLI 도구입니다.

- **개발 동기**  
Next.js 프로젝트를 개발하며 정체불명의 4094 오류를 자주 마주했습니다.  
관련 문서나 Stack Overflow에서도 뚜렷한 해결책이 없었고,  
결국 캐시 정리 → 의존성 재설치 → 서버 재시작이라는 루틴을  
매번 수동으로 반복하며 시간을 낭비하게 되었죠.
그래서 이 반복 작업을 자동화하여  
**한 줄 명령어로 해결할 수 있는 CLI 도구**를 만들게 되었습니다.

- **핵심 기능**  
• 4094 오류 실시간 감지  
• .next · node_modules · yarn.lock / package-lock.json 정리  
• yarn / npm 모두 지원, 재설치 후 자동으로 \`dev\` 서버 재시작  

## 🖥 사용법

\`\`\`bash
# Yarn
yarn clear4094

# NPM
npm run clear4094
\`\`\`

해당 명령 한 줄로 캐시 정리 → 재설치 → 서버 재시작이 자동화되어  
반복되는 수작업을 제거할 수 있습니다.`,

    period: "2024.06",
    team: "개인",
    role: "라이브러리 설계 · 개발 · 배포",
    responsibilities: [
        "반복적으로 발생하는 Next.js 4094 오류 원인을 분석하고 자동화 솔루션으로 구조화",
        "에러 감지부터 캐시 삭제, 의존성 재설치, dev 서버 재시작까지 전체 흐름 스크립트 설계",
        "Cross-platform 대응 (Windows/macOS) 및 사용자 편의성 중심 CLI 명령 구성",
        "npm 배포를 위한 바이너리 노출 설정 및 postinstall 스크립트 작성",
        "GitHub Actions 기반 CI/CD 파이프라인 구성 (빌드, 테스트, 배포 자동화)",
        "기술 블로그 작성으로 프로젝트 기획·문제 해결 과정을 커뮤니티에 공유",
    ],
    troubles: [
        "Windows·macOS 경로 차이로 인한 CLI 호환성 문제 → cross-platform 명령어 분기",
        "GitHub Actions 캐시 단계에서 의존성 누락 이슈 → Job 분리 및 캐시 키 전략 재설계",
    ],
    outcome: `Next.js 고질적인 4094 오류를 직접 해결 가능한 도구로 구현하고,  
npm에 배포하여 실제 사용자들이 사용하는 CLI로 발전시켰습니다.

단순 문제 해결을 넘어서,  
- 반복적인 수작업을 자동화하여 개발 생산성 향상  
- 다양한 OS 및 실행 환경에 대응하며 CLI 제작 경험 축적  
- 커뮤니티 블로그 공유를 통해 기술 확산 및 피드백 수렴

작지만 실질적인 문제를 해결하며  
문제 인식 → 구조화 → 배포 → 피드백 수렴까지  
전 주기를 직접 경험한 개발 프로젝트입니다.`,

    techs: ["TypeScript", "Next.js", "Shell Script", "NPM"],
    repo: "https://github.com/kimjusnu/4094Fixer",
    imageUrl: "/4094fixer.png",
    links: [
        {
            label: "기술 블로그 | 4094 에러 해결 과정",
            url: "https://dietisdie.tistory.com/entry/Nextjs%EC%97%90%EC%84%9C-%EB%B0%9C%EC%83%9D%ED%95%9C-4094-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EA%B3%BC%EC%A0%95",
        },
        {
            label: "기술 블로그 | 4094Fixer 자동 해결 프로그램",
            url: "https://dietisdie.tistory.com/entry/4094Fixer-Nextjs-4094-%EC%97%90%EB%9F%AC-%EC%9E%90%EB%8F%99-%ED%95%B4%EA%B2%B0-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8",
        },
        {
            label: "NPM 패키지",
            url: "https://www.npmjs.com/package/4094fixer",
        },
    ],
};
