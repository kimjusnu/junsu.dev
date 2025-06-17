import { Project } from "./types";

// 개별 프로젝트 import
import { startupqt } from "./startupqt";
import { componique } from "./componique";
import { yiry } from "./yiry";
import { ghViewer } from "./ghViewer";
import { fixer4094 } from "./fixer4094";

// projects 배열로 정리 (자신 있는 순서대로 정렬)
export const projects: Project[] = [
    startupqt,
    componique,
    yiry,
    ghViewer,
    fixer4094,
];
